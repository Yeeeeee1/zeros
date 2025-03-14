module.exports = function zeros(expression) {
  var arr = expression.split("*"),
        result = 0,
        two = 0,
        five = 0,
        count = 0,
        temp = 0,
        n = 1;

    for (var i = 0; i < arr.length; i++) {
        if(arr[i].includes("!!") > 0) {
            result = arr[i].replace("!!","");
            n = 2;
        }
        else {
            result = arr[i].replace("!","");
            n = 1;
        }
        while (result != 0 && result != 1) {
            temp = result;

            while (temp % 2 == 0) {
                two++;
                temp /= 2;
            }
            while (temp % 5 == 0) { 
                five++;
                temp /= 5;
            }
            result -= n;
        }
    }
    if (two < five) {
      return two;
    }
    else {
      return five;
    }
}
