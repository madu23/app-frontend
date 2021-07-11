import { IRepository } from './../interfaces/irepository';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { BaseModel } from '../models/base-model';
import { HttpClient } from '@angular/common/http';

export class Repository<T extends BaseModel> implements IRepository<T> {
    url: string;
    constructor(public httpClient: HttpClient, private endpoint: string) {
        this.url = `${environment.apiUrl}${endpoint}`;
    }
    create(item: T): Observable<any> {
        return this.httpClient
        .post<any>(this.url, item);
    }

    update(item: T, id: string): Observable<any> {
        if (id) {
            return this.httpClient
        .put<T>(`${this.url}/${id}`, item);
        }
        return this.httpClient
        .put<T>(this.url, item);
    }
    read(id: string): Observable<any> {
        return this.httpClient
        .get<any>(`${this.url}/${id}`);
    }
    list(queryOptions?: any): Observable<any> {
        return this.httpClient
        .get<any>(this.url);
    }
    delete(id: string): Observable<T> {
        return this.httpClient
        .delete<T>(`${this.url}/${id}`);
    }
}
