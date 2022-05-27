exports.creditCheck = function(str) {

    let strArr = str.split("");
    let finalSum = 0;

    for (let i = 0; i < strArr.length - 1; i++){
        if (strArr[i] * strArr[strArr.length - 1] > 9){
            let multipliedNumber = strArr[i] * strArr[strArr.length - 1];
            let splitArr = multipliedNumber.toString().split("");
            finalSum += (splitArr[0] + splitArr[1]);
        }
    }
        if (finalSum % 10 == 0){
            return "The number is valid!";
        }else{
            return "The number is invalid!";
        }


}
// console.log(exports.creditCheck("5541808923795240"));
