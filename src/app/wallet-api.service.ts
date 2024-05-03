import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class WalletApiService {

  constructor(private http: HttpClient) { }

  generateSeed(language: string, size: number): Observable<Object>{
    const uri = `http://localhost:8080/wallet/generate/seed`;
    let params = new HttpParams()
      .set('language', language)
      .set('size', size)
    return this.http.post<Object>(uri, params);
  }
}
