import { IFizzBuzz } from "./ifizzbuzz";

//Represents FizzBuz rule - implements Ifizzbuzz
export class FizzBuzzRule implements IFizzBuzz {
    isMatch: any;
    constructor(isMatch: any, private str: string) {
        this.isMatch = isMatch;
    }

    getString(): string {
        return this.str;
    }
}