import {Component} from '@angular/core';
import {MatDialogModule, MatDialogRef} from "@angular/material/dialog";
import {WalletApiService} from "../wallet-api.service";
import {CryptoService} from "../crypto.service";

@Component({
  selector: 'app-wallet-connect',
  templateUrl: './wallet-connect.component.html',
  styleUrls: ['./wallet-connect.component.css']
})
export class WalletConnectComponent {

  password: string = '';

  constructor(
    public dialogRef: MatDialogRef<WalletConnectComponent>,
    private _service: WalletApiService,
    private _crypto: CryptoService
  ) {}

  connectWallet(){
    let encrypted = this._crypto.encrypt(this.password)
    this._service.restoreWallet(encrypted).subscribe({next: (data) => {
      this.dialogRef.close({
        wallet: data.data.value
      })
    }})
  }
}
