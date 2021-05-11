import {transpileAlphabet} from "./alphabet";
import {transpileSymbol} from "./symbol";

export function transpile(str, noUppercasePrefix) {
    return transpileAlphabet(transpileSymbol(str), noUppercasePrefix);
}
