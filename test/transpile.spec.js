import {transpile} from "../src/transpile";
import {expect} from "chai";

describe('Transpile', () => {

    it('알파벳 대문자 번역', () => {
        const uppercaseSet = 'АӘБВГДҒЕЁЖЗИЙКҚЛМНҢОӨПРСТҮУЎФХҲЦЧШЩЪЫЬЭЮЯ';
        expect(transpile(uppercaseSet)).to.equal('⠨⠁⠨⠜⠨⠃⠨⠺⠨⠛⠨⠙⠨⠻⠨⠑⠨⠡⠨⠚⠨⠵⠨⠊⠨⠯⠨⠅⠨⠽⠨⠇⠨⠍⠨⠝⠨⠩⠨⠕⠨⠣⠨⠏⠨⠗⠨⠎⠨⠞⠨⠌⠨⠥⠨⠧⠨⠋⠨⠓⠨⠹⠨⠉⠨⠟⠨⠱⠨⠭⠨⠷⠨⠮⠨⠾⠨⠪⠨⠳⠨⠫');
    });

    it('알파벳 소문자 번역', () => {
        const lowercaseSet = 'аәбвгдғеёжзийкқлмнңоөпрстүуўфхҳцчшщъыьэюя'
        expect(transpile(lowercaseSet)).to.equal('⠁⠜⠃⠺⠛⠙⠻⠑⠡⠚⠵⠊⠯⠅⠽⠇⠍⠝⠩⠕⠣⠏⠗⠎⠞⠌⠥⠧⠋⠓⠹⠉⠟⠱⠭⠷⠮⠾⠪⠳⠫');
    });

    it('noUppercasePrefix 사용 시 대문자도 소문자처럼 번역한다', () => {
        const uppercaseSet = 'АӘБВГДҒЕЁЖЗИЙКҚЛМНҢОӨПРСТҮУЎФХҲЦЧШЩЪЫЬЭЮЯ';
        const lowerCaseSet = 'аәбвгдғеёжзийкқлмнңоөпрстүуўфхҳцчшщъыьэюя';
        expect(transpile(uppercaseSet, true)).to.equal(transpile(lowerCaseSet));
    });

    it('2자리 이상의 숫자의 경우 숫자 표현 점자가 한 번만 나온다', () => {
        expect(transpile('123 45')).to.equal('⠼⠁⠃⠉ ⠼⠙⠑')
        expect(transpile('67')).to.equal('⠼⠋⠛')
        expect(transpile('8')).to.equal('⠼⠓')
    });
});
