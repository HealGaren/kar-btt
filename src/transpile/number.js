function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
}

const basicSymbolMap = [
    {from: '1', to:	'\u2801'},
    {from: '2', to:	'\u2803'},
    {from: '3', to:	'\u2809'},
    {from: '4', to:	'\u2819'},
    {from: '5', to:	'\u2811'},
    {from: '6', to:	'\u280b'},
    {from: '7', to:	'\u281b'},
    {from: '8', to:	'\u2813'},
    {from: '9', to:	'\u280a'},
    {from: '0', to:	'\u281a'}
];

function addNumberPrefix(str) {
    return str.replace(
        new RegExp('\\d+', 'g'),
        '\u283c$&'
    );
}


export function transpileNumber(str) {
    const numberPrefixAddedStr = addNumberPrefix(str);

    return basicSymbolMap.reduce((prevStr, curr) => {
        const from = curr.from;
        const to = curr.to;

        const replacedStr = prevStr.replace(
            new RegExp(escapeRegExp(from), "g"),
            to
        );

        return replacedStr;
    }, numberPrefixAddedStr);
}
