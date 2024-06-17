import {Component} from '@angular/core';
import {WalletApiService} from "../wallet-api.service";
import {CryptoService} from "../crypto.service";
import {WalletDto} from "../models/WalletDto";
import {SeedLanguage} from "../models/SeedLanguage";
import {Clipboard} from "@angular/cdk/clipboard";
import {MatSnackBar} from "@angular/material/snack-bar";
import {WalletAuthService} from "../wallet-auth.service";


@Component({
  selector: 'app-wallet-generation',
  templateUrl: './wallet-generation.component.html',
  styleUrls: ['./wallet-generation.component.css']
})
export class WalletGenerationComponent {
  seed: string = "";
  choosedLanguage: SeedLanguage = new SeedLanguage();
  choosedSize: number = 0;
  choosedWordNumber: number = 0;
  choosedPassword: string = "";
  checkSeed: boolean = false;
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
              private _crypto: CryptoService,
              private _walletAuthService: WalletAuthService) {
  }

  generateWallet(){
    let encryptedPassword = this._crypto.encrypt(this.choosedPassword);
    let encryptedSeed = this._crypto.encrypt(this.seed);
    this._service.generateWallet(encryptedPassword, encryptedSeed).subscribe({next: (data) => {
        this.openSnackBar(data.info, "Ок");
        if(data.stackTrace !== null){
            const string = `Error - ${data.httpCode} - ${data.stackTrace}`;
            console.error(string);
            return;
        }
        let jsonString = this._crypto.decrypt(data.data.value);
        let result: WalletDto = JSON.parse(jsonString);
        this._walletAuthService.wallet = result.public_key;
        this._walletAuthService.isLoggedIn = true;
      }
    })
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
    this.choosedWordNumber = 0;
    console.log(language);
    console.log(size);
    this._service.generateSeed(language, size).subscribe({next: (data) => {
        this.openSnackBar(data.info, "Ок");
        if(data.stackTrace !== null){
          const string = `Error - ${data.httpCode} - ${data.stackTrace}`;
          console.error(string);
          return;
        }
        this.seed = this._crypto.decrypt(data.data.seed);
        this.choosedWordNumber = this.getRandomIntInclusive(1, size);
      }})
  }

  getRandomIntInclusive(min: number, max: number) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
  }

  checkSeedPhrase(wordFromUser: string){
    let phrase = this.seed.split(" ");
    for (let i = 0; i < phrase.length; i++){
      if(i+1 === this.choosedWordNumber && phrase[i] === wordFromUser){
        this.checkSeed = true;
        this._snackBar.open("Вы успешно прошли проверку мнемонической фразы", "Oк");
        return;
      }
    }
    this._snackBar.open("Вы не прошли проверку", "Повторить");
    this.checkSeed = false;
  }
}
