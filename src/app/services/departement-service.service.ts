import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Departement} from '../model/departement';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartementServiceService {
  private baseUrl = 'http://localhost:8036/api/departement/';
  constructor(private http: HttpClient) { }

  public getDepartement(): Observable<any> {
    return this.http.get(this.baseUrl);
  }
  public getDepartementByCode(code: string): Observable<any> {
    return this.http.get(this.baseUrl + 'code/' + code);
  }

  public postDepartement(departement: Departement): any {
    return this.http.post(this.baseUrl , departement);
  }

  public deleteDepartement(departement: Departement): any {
    return this.http.delete(this.baseUrl + 'id/' + departement.id);
  }

  putDepartement(departement: Departement): any {
    return this.http.put(this.baseUrl + 'id/' + departement.id, departement);
  }
}
