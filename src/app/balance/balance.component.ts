import { Component } from '@angular/core';
import {Web3} from "web3";
import {WalletApiService} from "../wallet-api.service";
import {CryptoService} from "../crypto.service";

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.css']
})
export class BalanceComponent {
  isLoggedIn: boolean = false;
  //web3: Web3;

  constructor(private _service: WalletApiService, private _crypto: CryptoService) {
  }

  ngOnInit(){
    const encrypted = this._crypto.encrypt('password');
    console.log(encrypted);
    this._service.testApi(encrypted).subscribe({next: (data:any) => {
        console.log(this._crypto.decrypt(data.data.result))
      }});
  }

  isLoggedIn_2 = () => {
  }
}
