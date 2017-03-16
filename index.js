// exports.area = function(width, height) {
//     return width * height;
// };
exports.numeric = function(num) {
    var scale = [
        "", "ty", "hundred", "thousand", "ten thousand", "hundredthousand", "million"
    ];
    var degit = [
            "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"
        ]
        // var unit = 0;
        // var num = num.toString().length;

    var readNum = "";
    var number = "";
    var unit = "";

    var numberString = num.toString();
    for (var i = 0; i <= numberString.length - 1; i++) {
        if (numberString[i] !== '0') {
            var index = numberString[i] - 1;
            readNum = degit[index] + scale[numberString.length - (i + 1)];
            number += readNum;
            number = number.replace("onetyone", "eleven");
            number = number.replace("onetytwo", "twelve");
            number = number.replace("onetythree", "thirteen");
            number = number.replace("onetyfour", "fourteen");
            number = number.replace("onetyfive", "fifteen");
            number = number.replace("onetysix", "sixteen");
            number = number.replace("onetyseven", "seventeen");
            number = number.replace("onetyeight", "eighteen");
            number = number.replace("onetynine", "nineteen");





            number = number.replace("twoty", "twenty");
            number = number.replace("threety", "thirty");
            number = number.replace("fivety", "fifty");
            number = number.replace("eightty", "eighty");
            number = number.replace("ninety", "ninety");

            number = number.replace("twoten thousand", "twentythousand");
            number = number.replace("threeten thousand", "thirtythousand");
            number = number.replace("fiveten thousand", "fiftythousand");
            number = number.replace("eightten thousand", "eightythousand");
            number = number.replace("nineten thousand", "ninetythousand");


        }

        // readNum = degit[numberString[i] - 1];
        // unit = scale[numberString.length - 1];
        // number += unit;
    }
    // number = number.replace("onetyonety", "eleven");
    // number = number.replace("onety", "ten");
    // number = number.replace("onetytwo", "twelve");
    // number = number.replace("threety", "Thirteen");


    return number;
};