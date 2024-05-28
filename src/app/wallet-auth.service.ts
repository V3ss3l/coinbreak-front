import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WalletAuthService {
  private _wallet: string;
  private _isLoggedIn: boolean;

  constructor() {
    this._wallet = "";
    this._isLoggedIn = false;
    localStorage.setItem("login", "none");
  }


  get wallet(): string {
    return this._wallet;
  }

  set wallet(value: string) {
    this._wallet = value;
  }

  get isLoggedIn(): boolean {
    return this._isLoggedIn;
  }

  set isLoggedIn(value: boolean) {
    localStorage.setItem("login", value ? this.wallet : "none");
    this._isLoggedIn = value;
  }
}
