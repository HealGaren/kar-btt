function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
}

var basicSymbolMap = [
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
    {from: '“', to:	'\u2834\u2804'},
    {from: '1', to:	'\u283c\u2801'},
    {from: '2', to:	'\u283c\u2803'},
    {from: '3', to:	'\u283c\u2809'},
    {from: '4', to:	'\u283c\u2819'},
    {from: '5', to:	'\u283c\u2811'},
    {from: '6', to:	'\u283c\u280b'},
    {from: '7', to:	'\u283c\u281b'},
    {from: '8', to:	'\u283c\u2813'},
    {from: '9', to:	'\u283c\u280a'},
    {from: '0', to:	'\u283c\u281a'}
];


function transpileSymbol(str) {
    return basicSymbolMap.reduce(function (prevStr, curr) {
        var from = curr.from;
        var to = curr.to;
        
        var replacedStr = prevStr.replace(
            new RegExp(escapeRegExp(from), "g"),
            to
        );
        
        return replacedStr;
    }, str);
}