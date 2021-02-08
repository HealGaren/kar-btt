var alphabetMap = [
 {from: ['\u0410', 	'\u0430'], to: 	'\u2801'},
 {from: ['\u04d8', 	'\u04d9'], to: 	'\u281c'},
 {from: ['\u0411', 	'\u0431'], to: 	'\u2803'},
 {from: ['\u0412', 	'\u0432'], to: 	'\u283a'},
 {from: ['\u0413', 	'\u0433'], to: 	'\u281b'},
 {from: ['\u0414', 	'\u0434'], to: 	'\u2819'},
 {from: ['\u0492', 	'\u0493'], to: 	'\u283b'},
 {from: ['\u0415', 	'\u0435'], to: 	'\u2811'},
 {from: ['\u0401', 	'\u0451'], to: 	'\u2821'},
 {from: ['\u0416', 	'\u0436'], to: 	'\u281a'},
 {from: ['\u0417', 	'\u0437'], to: 	'\u2835'},
 {from: ['\u0418', 	'\u0438'], to: 	'\u280a'},
 {from: ['\u0419', 	'\u0439'], to: 	'\u282f'},
 {from: ['\u041a', 	'\u043a'], to: 	'\u2805'},
 {from: ['\u049a', 	'\u049b'], to: 	'\u283d'},
 {from: ['\u041b', 	'\u043b'], to: 	'\u2807'},
 {from: ['\u041c', 	'\u043c'], to: 	'\u280d'},
 {from: ['\u041d', 	'\u043d'], to: 	'\u281d'},
 {from: ['\u04a2', 	'\u04a3'], to: 	'\u2829'},
 {from: ['\u041e', 	'\u043e'], to: 	'\u2815'},
 {from: ['\u04e8', 	'\u04e9'], to: 	'\u2823'},
 {from: ['\u041f', 	'\u043f'], to: 	'\u280f'},
 {from: ['\u0420', 	'\u0440'], to: 	'\u2817'},
 {from: ['\u0421', 	'\u0441'], to: 	'\u280e'},
 {from: ['\u0422', 	'\u0442'], to: 	'\u281e'},
 {from: ['\u04ae', 	'\u04af'], to: 	'\u280c'},
 {from: ['\u0423', 	'\u0443'], to: 	'\u2825'},
 {from: ['\u040e',  '\u045e'], to: '\u2827'},
 {from: ['\u0424', 	'\u0444'], to: 	'\u280b'},
 {from: ['\u0425', 	'\u0445'], to: 	'\u2813'},
 {from: ['\u04b2', 	'\u04b3'], to: 	'\u2839'},
 {from: ['\u0426', 	'\u0446'], to: 	'\u2809'},
 {from: ['\u0427', 	'\u0447'], to: 	'\u281f'},
 {from: ['\u0428', 	'\u0448'], to: 	'\u2831'},
 {from: ['\u0429', 	'\u0449'], to: 	'\u282d'},
 {from: ['\u042a', 	'\u044a'], to: 	'\u2837'},
 {from: ['\u042b', 	'\u044b'], to: 	'\u282e'},
 {from: ['\u042c', 	'\u044c'], to: 	'\u283e'},
 {from: ['\u042d', 	'\u044d'], to: 	'\u282a'},
 {from: ['\u042e', 	'\u044e'], to: 	'\u2833'},
 {from: ['\u042f', 	'\u044f'], to: 	'\u282b'}
];


function transpileAlphabet(str) {
    return alphabetMap.reduce(function (prevStr, curr) {
        var fromUpper = curr.from[0];
        var fromLower = curr.from[1];
        var to = curr.to;
        
        var upperReplacedStr = prevStr.replace(
            new RegExp(fromUpper, "g"),
            '\u2828' + to
        );
        
        var upperAndLowerReplacedStr = upperReplacedStr.replace(
            new RegExp(fromLower, "g"),
            to
        );
        
        return upperAndLowerReplacedStr;
    }, str);
}