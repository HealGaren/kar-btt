import {transpileAlphabet} from "./alphabet";
import {transpileSymbol} from "./symbol";

export function transpile(str, ignoreUppercase) {
    return transpileAlphabet(transpileSymbol(str), ignoreUppercase);
}
