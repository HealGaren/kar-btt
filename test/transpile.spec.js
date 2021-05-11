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

});
