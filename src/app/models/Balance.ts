export class Balance{
  private _currency: string;
  private _symbol: string;
  private _wallet: string;
  private _value: number;
  private _decimal: number;


  constructor(currency?: string, symbol?: string, wallet?: string, value?: number, decimal?: number) {
    this._currency = currency ?? "";
    this._symbol = symbol ?? "";
    this._wallet = wallet ?? "";
    this._value = value ?? 0;
    this._decimal = decimal ?? 0;
  }


  get symbol(): string {
    return this._symbol;
  }

  set symbol(value: string) {
    this._symbol = value;
  }

  get currency(): string {
    return this._currency;
  }

  set currency(value: string) {
    this._currency = value;
  }

  get wallet(): string {
    return this._wallet;
  }

  set wallet(value: string) {
    this._wallet = value;
  }

  get value(): number {
    return this._value;
  }

  set value(value: number) {
    this._value = value;
  }

  get decimal(): number {
    return this._decimal;
  }

  set decimal(value: number) {
    this._decimal = value;
  }
}
