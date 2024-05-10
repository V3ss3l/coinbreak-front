export class ResponseInfo{
  private _data: object;
  private _httpCode: string;
  private _stackTrace: string;
  private _info: string;


  constructor(data?: any, httpCode?: string, stackTrace?: string, info?: string) {
    this._data = data ?? null;
    this._httpCode = httpCode ?? "";
    this._stackTrace = stackTrace ?? "";
    this._info = info ?? "";
  }


  get data(): any {
    return this._data;
  }

  set data(value: any) {
    this._data = value;
  }

  get httpCode(): string {
    return this._httpCode;
  }

  set httpCode(value: string) {
    this._httpCode = value;
  }

  get stackTrace(): string {
    return this._stackTrace;
  }

  set stackTrace(value: string) {
    this._stackTrace = value;
  }

  get info(): string {
    return this._info;
  }

  set info(value: string) {
    this._info = value;
  }
}
