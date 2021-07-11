import { BaseModel } from '../models/base-model';
import { Observable } from 'rxjs';

export interface IRepository<T extends BaseModel> {
    create(item: T): Observable<any>;
    update(item: T, id: string): Observable<any>;
    read(id: string): Observable<any>;
    list(queryOptions?: any): Observable<any[]>;
    delete(id: string): Observable<any>;
}
