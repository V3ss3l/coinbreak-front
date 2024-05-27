import {Component, ElementRef} from '@angular/core';
import {WalletApiService} from "../wallet-api.service";
import {CryptoService} from "../crypto.service";
import {WalletDto} from "../models/WalletDto";
import {SeedLanguage} from "../models/SeedLanguage";
import {Clipboard} from "@angular/cdk/clipboard";
import {MatSnackBar} from "@angular/material/snack-bar";
import {MatButton} from "@angular/material/button";


@Component({
  selector: 'app-wallet-generation',
  templateUrl: './wallet-generation.component.html',
  styleUrls: ['./wallet-generation.component.css']
})
export class WalletGenerationComponent {
  test: any;
  seed: string = "";
  choosedLanguage: SeedLanguage = new SeedLanguage();
  choosedSize: number = 0;
  choosedWord: number[] = [];
  choosedPassword: string = "";
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
              private elementRef:ElementRef) {
  }

  ngOnInit() {
  }


  generateWallet(password: string){
    let encrypted = this._crypto.encrypt(password);
    this._service.generateWallet(encrypted).subscribe({next: (data:any) => {

      let jsonString = this._crypto.decrypt(data.data);
      let result: WalletDto = JSON.parse(jsonString);
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
    console.log(language);
    console.log(size);
    this._service.generateSeed(language, size).subscribe({next: (data:any) => {
        let seedResult = this._crypto.decrypt(data.data.seed);
        this.seed = seedResult;
        this.openSnackBar(data.info, 'OK')
        if(data.stackTrace !== null){
          const string = `Error - ${data.httpCode} - ${data.stackTrace}`;
          console.error(string);
        }
        while(this.choosedWord.length > 0){
          this.choosedWord.pop();
        }
        while(this.choosedWord.length <= 2){
          this.choosedWord.push(this.getRandomIntInclusive(1, size));
        }
      }})
  }

  getRandomIntInclusive(min: number, max: number) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
  }

  setButtonForWord(event: any, word: string){
    var target = event.target;
    console.log(target);
    var idAttr = target.attributes.id;
    console.log(idAttr);
    var value = idAttr.nodeValue;
  }

  checkSeedPhrase(){
  }
}
