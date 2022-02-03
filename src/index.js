const { stringify } = require("mocha/lib/utils");

module.exports = function reverse (n) {
    let nStr = n.toString();
    let result = '';
    let nStr1 = '';
        if (nStr.startsWith('-')) {
           nStr1 += nStr.substring(1);
           result += nStr1.split("").reverse().join("");
            return Number(result);
        } else {
            result += nStr.split("").reverse().join("");
            return Number(result);
        }
}




