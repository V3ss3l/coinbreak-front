export class SeedLanguage{
  private _name: string;
  private _viewName: string;

  constructor(_name?: string, _viewName?: string) {
    this._name = _name ?? "";
    this._viewName = _viewName ?? "";
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get viewName(): string {
    return this._viewName;
  }

  set viewName(value: string) {
    this._viewName = value;
  }
}
