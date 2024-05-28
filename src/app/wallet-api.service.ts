import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {ResponseInfo} from "./models/ResponseInfo";

@Injectable({
  providedIn: 'root'
})
export class WalletApiService {

  constructor(private http: HttpClient) { }

  generateSeed(language: string, size: number): Observable<ResponseInfo>{
    const uri = `http://localhost:8080/wallet/generate/seed`;
    let params = new HttpParams()
      .set('language', language)
      .set('size', size)
    return this.http.post<ResponseInfo>(uri, params);
  }

  generateWallet(password: string, seed: string): Observable<ResponseInfo>{
    const uri = `http://localhost:8080/wallet/create`;
    let params = new HttpParams()
      .set('password', password)
      .set('seed', seed);
    return this.http.post<ResponseInfo>(uri, params);
  }

  getBalanceByCurrency(currency: string): Observable<ResponseInfo>{
    const uri = `http://localhost:8080/wallet/balance/currency/${currency}`;
    return this.http.get<ResponseInfo>(uri);
  }

  getBalanceByAllCurrencies(wallet: string): Observable<ResponseInfo>{
    const uri = `http://localhost:8080/wallet/balance/currency/all/${wallet}`;
    return this.http.get<ResponseInfo>(uri);
  }

  restoreWallet(password: string): Observable<ResponseInfo>{
    const uri = `http://localhost:8080/wallet/restore`;
    return this.http.post<ResponseInfo>(uri, {
      password: password
    });
  }

  deposit(amount: number, currency: string): Observable<ResponseInfo>{
    const uri = `http://localhost:8080/wallet/deposit`;
    let params = new HttpParams()
      .set('amount', amount)
      .set('currency', currency)
    return this.http.post<ResponseInfo>(uri, params);
  }

  withdraw(amount: number, currency: string, addressTo: string): Observable<ResponseInfo>{
    const uri = `http://localhost:8080/wallet/withdraw`;
    let params = new HttpParams()
      .set('amount', amount)
      .set('currency', currency)
      .set('addressTo', addressTo)
    return this.http.post<ResponseInfo>(uri, params);
  }
}
