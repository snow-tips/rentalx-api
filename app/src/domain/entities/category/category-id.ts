import { Identifier } from "../types/identifier";
import { v4 as uuidV4 } from "uuid";

export class CategoryId implements Identifier {
  private readonly id: string;

  constructor() {
    this.id = uuidV4();
  }

  get value(): string {
    return this.id;
  }
}
