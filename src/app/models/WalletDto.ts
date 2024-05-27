export class WalletDto{
  private _id: number;
  private _publicKey: string;
  private _seed: string;


  constructor(id?: number, publicKey?: string, seed?: string) {
    this._id = id ?? 0;
    this._publicKey = publicKey ?? '';
    this._seed = seed ?? '';
  }


  get id(): number {
    return this._id;
  }

  get publicKey(): string {
    return this._publicKey;
  }

  set publicKey(value: string) {
    this._publicKey = value;
  }

  get seed(): string {
    return this._seed;
  }

  set seed(value: string) {
    this._seed = value;
  }
}
