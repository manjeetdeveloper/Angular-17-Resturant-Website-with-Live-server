import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import id from '@angular/common/locales/id';

@Injectable({
  providedIn: 'root'
})
export class RestoService {
  url = 'http://localhost:3000/restaurants';

  constructor(private http: HttpClient) { }

  // Explicitly typing the return value as Observable<any[]>
  getList(): Observable<any[]> {
    return this.http.get<any[]>(this.url);
  }

  // Explicitly typing the parameter as 'any'
  saveResto(data: any): Observable<any> {
    console.warn(data);
    return this.http.post(this.url, data);
  }
  deleteResto(id: number) {
    return this.http.delete(`${this.url}/${id}`)
  }
  getCurrentResto(id: any)
  {
    return this.http.get(`${this.url}/${id}`)
  }
 updateResto(id: any,data: any)
  {
    return this.http.put(`${this.url}/${id}`, data)
  }
}


