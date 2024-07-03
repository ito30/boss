// added your route here

import { format } from "util";

export class RoutePaths {
  // MARK: Static Routes

  private path: string 

  constructor(path: string) {
    this.path = path
  }
  
  static readonly home = new RoutePaths("/");
  static readonly pond = new RoutePaths("/pond");
  static readonly pondAdd = new RoutePaths("/pond/add");
  static readonly pondEdit = new RoutePaths("/pond/%s/edit");
  static readonly cycle = new RoutePaths("/cycle");
  static readonly cycleAdd = new RoutePaths("/cycle/add");
  static readonly cycleEdit = new RoutePaths("/cycle/%s/edit");
  static readonly harvest = new RoutePaths("/harvest");

  fmt(key: string | number): string {
    if (typeof key === "number") {
      key = key.toString();
    }

    return format(this.path, key)
  }

  string(): string {
    return this.path
  }
}