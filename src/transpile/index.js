import {transpileNumber} from "./number";
import {transpileSymbol} from "./symbol";
import {transpileAlphabet} from "./alphabet";

export function transpile(str, noUppercasePrefix) {
    return transpileAlphabet(transpileNumber(transpileSymbol(str)), noUppercasePrefix);
}
