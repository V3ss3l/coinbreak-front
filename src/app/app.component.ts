import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {WalletConnectComponent} from "./wallet-connect/wallet-connect.component";
import {WalletAuthService} from "./wallet-auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'coinbreak-front';
  wallet: string = '';
  isLoggedIn: boolean;

  constructor(public dialog: MatDialog, private _walletAuthService: WalletAuthService) {
    this.isLoggedIn = _walletAuthService.isLoggedIn;
    this.wallet = _walletAuthService.wallet;
  }

  ngDoCheck(){
    this.isLoggedIn = this._walletAuthService.isLoggedIn;
    this.wallet = this._walletAuthService.wallet;
  }

  openDialogWallet(){
    const dialogRef = this.dialog.open(WalletConnectComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(result.wallet);
      this._walletAuthService.wallet = result.wallet;
      this.wallet = this._walletAuthService.wallet;
      this._walletAuthService.isLoggedIn = true;
      this.isLoggedIn = true;
    });
  }
}
