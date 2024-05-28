import {Currency} from "./Currency";

export class Balance{
  private _wallet: string;
  private _amount: number;
  private _currency: Currency;


  constructor(currency?: Currency, wallet?: string, amount?: number) {
    this._currency = currency ?? new Currency();
    this._wallet = wallet ?? "";
    this._amount = amount ?? 0;
  }


  get wallet(): string {
    return this._wallet;
  }

  get amount(): number {
    return this._amount;
  }

  get currency(): Currency {
    return this._currency;
  }
}
