import { Injectable } from '@angular/core';
import {AES, enc} from "crypto-js";
import CryptoJS from "crypto-js/x64-core";

@Injectable({
  providedIn: 'root'
})
export class CryptoService {

  private secretKey: string = 'password-for-crypto-test'

  constructor() { }

  encrypt(textToEncrypt : string): string {
    const encrypted = AES.encrypt(textToEncrypt, this.secretKey, {
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7
  });
    return enc.Base64.stringify(enc.Utf8.parse('Salted__').concat(encrypted.salt).concat(encrypted.ciphertext));;
  }

  decrypt(textToDecrypt : any): string {
    const decrypted = CryptoJS.AES.decrypt(textToDecrypt, this.secretKey, {
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7
    });
    return decrypted.toString(enc.Utf8);
  }
}
