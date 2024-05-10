import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {AES} from "crypto-js";
import CryptoJS from "crypto-js/x64-core";

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

  getBalanceByCurrency(currency: string): Observable<Object>{
    const uri = `http://localhost:8080/wallet/balance/currency/${currency}`;
    return this.http.get<Object>(uri);
  }

  depositToWallet(amount: number, currency: string): Observable<Object>{
    const uri = `http://localhost:8080/wallet/deposit`;
    let params = new HttpParams()
      .set('amount', amount)
      .set('currency', currency)
    return this.http.post<Object>(uri, params);
  }

  withdraw(amount: number, currency: string, addressTo: string): Observable<Object>{
    const uri = `http://localhost:8080/wallet/withdraw`;
    let params = new HttpParams()
      .set('amount', amount)
      .set('currency', currency)
      .set('addressTo', addressTo)
    return this.http.post<Object>(uri, params);
  }

  testApi(password: string): Observable<Object>{
    const uri = `http://localhost:8080/wallet/test`;
    return this.http.request('get', uri, {
      params: {
        password: password
      }
    })
  }
}
