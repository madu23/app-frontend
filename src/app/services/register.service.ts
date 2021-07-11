import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Register } from '../models/register';
import { Repository } from './repository';

@Injectable({
  providedIn: 'root'
})
export class RegisterService extends Repository<Register> {
  constructor(httpClient: HttpClient) {
    super(httpClient, 'api/account/register');
   }
}
