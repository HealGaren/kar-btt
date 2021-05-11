function escapeRegExp$1(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
}

var basicSymbolMap$1 = [{
  from: '1',
  to: "\u2801"
}, {
  from: '2',
  to: "\u2803"
}, {
  from: '3',
  to: "\u2809"
}, {
  from: '4',
  to: "\u2819"
}, {
  from: '5',
  to: "\u2811"
}, {
  from: '6',
  to: "\u280B"
}, {
  from: '7',
  to: "\u281B"
}, {
  from: '8',
  to: "\u2813"
}, {
  from: '9',
  to: "\u280A"
}, {
  from: '0',
  to: "\u281A"
}];

function addNumberPrefix(str) {
  return str.replace(new RegExp('\\d+', 'g'), "\u283C$&");
}

function transpileNumber(str) {
  var numberPrefixAddedStr = addNumberPrefix(str);
  return basicSymbolMap$1.reduce(function (prevStr, curr) {
    var from = curr.from;
    var to = curr.to;
    var replacedStr = prevStr.replace(new RegExp(escapeRegExp$1(from), "g"), to);
    return replacedStr;
  }, numberPrefixAddedStr);
}

function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
}

var basicSymbolMap = [{
  from: '.',
  to: "\u2832"
}, {
  from: ',',
  to: "\u2802"
}, {
  from: ':',
  to: "\u2812"
}, {
  from: "\u2013",
  to: "\u2824"
}, {
  from: '!',
  to: "\u2816"
}, {
  from: '?',
  to: "\u2822"
}, {
  from: '«',
  to: "\u2813"
}, {
  from: '»',
  to: "\u281A"
}, {
  from: '(',
  to: "\u2836"
}, {
  from: ')',
  to: "\u2836"
}, {
  from: '[',
  to: "\u2820\u2836"
}, {
  from: ']',
  to: "\u2836\u2820"
}, {
  from: '„',
  to: "\u2820\u2826"
}, {
  from: '“',
  to: "\u2834\u2804"
}];

function transpileSymbol(str) {
  return basicSymbolMap.reduce(function (prevStr, curr) {
    var from = curr.from;
    var to = curr.to;
    var replacedStr = prevStr.replace(new RegExp(escapeRegExp(from), "g"), to);
    return replacedStr;
  }, str);
}

var alphabetMap = [{
  from: ["\u0410", "\u0430"],
  to: "\u2801"
}, {
  from: ["\u04D8", "\u04D9"],
  to: "\u281C"
}, {
  from: ["\u0411", "\u0431"],
  to: "\u2803"
}, {
  from: ["\u0412", "\u0432"],
  to: "\u283A"
}, {
  from: ["\u0413", "\u0433"],
  to: "\u281B"
}, {
  from: ["\u0414", "\u0434"],
  to: "\u2819"
}, {
  from: ["\u0492", "\u0493"],
  to: "\u283B"
}, {
  from: ["\u0415", "\u0435"],
  to: "\u2811"
}, {
  from: ["\u0401", "\u0451"],
  to: "\u2821"
}, {
  from: ["\u0416", "\u0436"],
  to: "\u281A"
}, {
  from: ["\u0417", "\u0437"],
  to: "\u2835"
}, {
  from: ["\u0418", "\u0438"],
  to: "\u280A"
}, {
  from: ["\u0419", "\u0439"],
  to: "\u282F"
}, {
  from: ["\u041A", "\u043A"],
  to: "\u2805"
}, {
  from: ["\u049A", "\u049B"],
  to: "\u283D"
}, {
  from: ["\u041B", "\u043B"],
  to: "\u2807"
}, {
  from: ["\u041C", "\u043C"],
  to: "\u280D"
}, {
  from: ["\u041D", "\u043D"],
  to: "\u281D"
}, {
  from: ["\u04A2", "\u04A3"],
  to: "\u2829"
}, {
  from: ["\u041E", "\u043E"],
  to: "\u2815"
}, {
  from: ["\u04E8", "\u04E9"],
  to: "\u2823"
}, {
  from: ["\u041F", "\u043F"],
  to: "\u280F"
}, {
  from: ["\u0420", "\u0440"],
  to: "\u2817"
}, {
  from: ["\u0421", "\u0441"],
  to: "\u280E"
}, {
  from: ["\u0422", "\u0442"],
  to: "\u281E"
}, {
  from: ["\u04AE", "\u04AF"],
  to: "\u280C"
}, {
  from: ["\u0423", "\u0443"],
  to: "\u2825"
}, {
  from: ["\u040E", "\u045E"],
  to: "\u2827"
}, {
  from: ["\u0424", "\u0444"],
  to: "\u280B"
}, {
  from: ["\u0425", "\u0445"],
  to: "\u2813"
}, {
  from: ["\u04B2", "\u04B3"],
  to: "\u2839"
}, {
  from: ["\u0426", "\u0446"],
  to: "\u2809"
}, {
  from: ["\u0427", "\u0447"],
  to: "\u281F"
}, {
  from: ["\u0428", "\u0448"],
  to: "\u2831"
}, {
  from: ["\u0429", "\u0449"],
  to: "\u282D"
}, {
  from: ["\u042A", "\u044A"],
  to: "\u2837"
}, {
  from: ["\u042B", "\u044B"],
  to: "\u282E"
}, {
  from: ["\u042C", "\u044C"],
  to: "\u283E"
}, {
  from: ["\u042D", "\u044D"],
  to: "\u282A"
}, {
  from: ["\u042E", "\u044E"],
  to: "\u2833"
}, {
  from: ["\u042F", "\u044F"],
  to: "\u282B"
}];

function transpileAlphabet(str) {
  var noUppercasePrefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  return alphabetMap.reduce(function (prevStr, curr) {
    var fromUpper = curr.from[0];
    var fromLower = curr.from[1];
    var to = curr.to;
    var upperReplacedStr = prevStr.replace(new RegExp(fromUpper, "g"), (noUppercasePrefix ? '' : "\u2828") + to);
    var upperAndLowerReplacedStr = upperReplacedStr.replace(new RegExp(fromLower, "g"), to);
    return upperAndLowerReplacedStr;
  }, str);
}

function transpile(str, noUppercasePrefix) {
  return transpileAlphabet(transpileNumber(transpileSymbol(str)), noUppercasePrefix);
}

window.onload = function () {
  var UI = {
    beforeTextarea: document.getElementById('before'),
    afterTextarea: document.getElementById('after')
  };
  UI.beforeTextarea.addEventListener('input', function (e) {
    console.log(UI);
    UI.afterTextarea.value = transpile(UI.beforeTextarea.value, true);
  });
};
