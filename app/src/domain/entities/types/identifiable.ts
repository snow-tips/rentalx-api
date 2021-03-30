import { Identifier } from "./identifier";

export default interface Identifiable<ID extends Identifier> {
  getId(): ID;
}
