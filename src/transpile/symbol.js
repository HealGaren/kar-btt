function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
}

const basicSymbolMap = [
    {from: '.', to:	'\u2832'},
    {from: ',', to:	'\u2802'},
    {from: ':', to:	'\u2812'},
    {from: '\u2013', to: '\u2824'},
    {from: '!', to:	'\u2816'},
    {from: '?', to:	'\u2822'},
    {from: '«', to:	'\u2813'},
    {from: '»', to:	'\u281a'},
    {from: '(', to:	'\u2836'},
    {from: ')', to:	'\u2836'},
    {from: '[', to:	'\u2820\u2836'},
    {from: ']', to:	'\u2836\u2820'},
    {from: '„', to:	'\u2820\u2826'},
    {from: '“', to:	'\u2834\u2804'}
];


export function transpileSymbol(str) {
    return basicSymbolMap.reduce((prevStr, curr) => {
        const from = curr.from;
        const to = curr.to;

        const replacedStr = prevStr.replace(
            new RegExp(escapeRegExp(from), "g"),
            to
        );

        return replacedStr;
    }, str);
}
