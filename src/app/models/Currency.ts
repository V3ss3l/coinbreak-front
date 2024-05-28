export class Currency{
  private _id: number;
  private _name: string
  private _symbol: string;
  private _decimals: number;


  constructor(id?: number, name?: string, symbol?: string, decimals?: number) {
    this._id = id ?? 0;
    this._name = name ?? "";
    this._symbol = symbol ?? "";
    this._decimals = decimals ?? 18;
  }


  get name(): string {
    return this._name;
  }

  get symbol(): string {
    return this._symbol;
  }

  get decimals(): number {
    return this._decimals;
  }
}
