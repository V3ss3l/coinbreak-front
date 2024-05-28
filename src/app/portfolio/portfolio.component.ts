import { Component } from '@angular/core';
import {WalletApiService} from "../wallet-api.service";
import {CryptoService} from "../crypto.service";
import {Balance} from "../models/Balance";
import {Currency} from "../models/Currency";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-balance',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  walletAddress: string = '';
   balanceResult: Balance[] = [
    new Balance(new Currency(undefined, "Ethereum", "ETH", 18), "0x474d6cc0d873d7d0a6f6286b0d4ca7717b4a20a8", 0.08478239),
    new Balance(new Currency(undefined, "USDC", "USDC", 18), "0x474d6cc0d873d7d0a6f6286b0d4ca7717b4a20a8", 25.07932),
    new Balance(new Currency(undefined, "BNB", "BNB", 18), "0x474d6cc0d873d7d0a6f6286b0d4ca7717b4a20a8", 2.0947923),
  ];
  constructor(private _service: WalletApiService, private _crypto: CryptoService, private _snackBar: MatSnackBar,) {
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 5000,
    })
  }

  findBalance(){
    let wallet = this._crypto.encrypt(this.walletAddress);
    this._service.getBalanceByAllCurrencies(wallet).subscribe({next: (data) => {
        this.openSnackBar(data.info, "Ок");
        if(data.stackTrace !== ""){
          const string = `Error - ${data.httpCode} - ${data.stackTrace}`;
          console.error(string);
          return;
        }
        let array = data.data;
        let newArray: Balance[] = [];
        for (let i = 0; i < array.length; i++){
          let encodedString = array[i];
          let string = this._crypto.decrypt(encodedString);
          let balance: Balance = JSON.parse(string);
          newArray.push(balance);
        }
        this.balanceResult = newArray;
      }})
  }
}
