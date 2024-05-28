export class WalletDto{
  _id: number;
  _public_key: string;
  _seed: string;


  constructor(id?: number, publicKey?: string, seed?: string) {
    this._id = id ?? 0;
    this._public_key = publicKey ?? '';
    this._seed = seed ?? '';
  }


  get id(): number {
    return this._id;
  }

  get public_key(): string {
    return this._public_key;
  }

  get seed(): string {
    return this._seed;
  }
}
