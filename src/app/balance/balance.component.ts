import { Component } from '@angular/core';
import {Web3} from "web3";
import {WalletApiService} from "../wallet-api.service";
import {CryptoService} from "../crypto.service";
import {Balance} from "../models/Balance";

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.css']
})
export class BalanceComponent {
  isLoggedIn: boolean = true;
  balanceResult: Balance[] = [
    new Balance('ETHER', 'eth', 'test_wallet', 1.0052, 18),
    new Balance('USDT', 'usdt', 'test_wallet', 25, 18),
    new Balance('USDC', 'usdc', 'test_wallet', 45, 18)
  ];
  //web3: Web3;

  constructor(private _service: WalletApiService, private _crypto: CryptoService) {
  }

  ngOnInit(){
    // const encrypted = this._crypto.encrypt('password');
    // console.log(encrypted);
    // this._service.testApi(encrypted).subscribe({next: (data:any) => {
    //     console.log(this._crypto.decrypt(data.data.result))
    //   }});
  }

  isLoggedIn_2 = () => {
  }
}
