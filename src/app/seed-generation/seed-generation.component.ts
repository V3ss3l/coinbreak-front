import { Component } from '@angular/core';
import {Clipboard} from '@angular/cdk/clipboard';
import {MatSnackBar} from "@angular/material/snack-bar";
import {SeedLanguage} from "../models/SeedLanguage";
import {WalletApiService} from "../wallet-api.service";
import {CryptoService} from "../crypto.service";
import {enc} from "crypto-js";
import {ResponseInfo} from "../models/ResponseInfo";

@Component({
  selector: 'app-seed-generation',
  templateUrl: './seed-generation.component.html',
  styleUrls: ['./seed-generation.component.css']
})
export class SeedGenerationComponent {
  seed_10: string = "";
  seed_12: string = "";
  seed_18: string = "";
  choosedLanguage: SeedLanguage = new SeedLanguage();
  languages: SeedLanguage[] = [
    new SeedLanguage("english", "Английский"),
    new SeedLanguage("czech", "Чешский"),
    new SeedLanguage("spanish", "Испанский"),
    new SeedLanguage("italian", "Итальянский"),
    new SeedLanguage("french", "Французский")
  ];

  constructor(private clipboard: Clipboard,
              private _snackBar: MatSnackBar,
              private _service: WalletApiService,
              private _crypto: CryptoService) {
  }
  changeSeed = () => {
    this.seed_18 = "world hello or yes"
  }

  copyToClipBoard(text:string){
    this.clipboard.copy(text);
    this.openSnackBar("Seed фраза была скопирована в буфер обмена", "Ок");
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 5000,
    })
  }

  generateSeed(language: string, size: number){
    if (language.length === 0) {
      this.openSnackBar("Выберите язык фразы", "Повторить");
      return;
    }
    console.log(language);
    console.log(size);
    this._service.generateSeed(language, size).subscribe({next: (data:any) => {
        let seed = this._crypto.decrypt(data.data.seed).toString(enc.Utf8);
        switch (size) {
          case 10:
            this.seed_10 = seed;
            break;
          case 12:
            this.seed_12 = seed;
            break;
          case 18:
            this.seed_18 = seed;
            break;
        }
        this.openSnackBar(data.info, 'OK')
        if(data.stackTrace !== null){
          const string = `Error - ${data.httpCode} - ${data.stackTrace}`;
          console.error(string);
        }
    }})
  }
}
