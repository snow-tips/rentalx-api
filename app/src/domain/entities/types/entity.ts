import Identifiable from "./identifiable";
import { Identifier } from "./identifier";

export interface Entity<ID extends Identifier> extends Identifiable<ID> {}
