exports.creditCheck = function(str) {

    let strArr = str.split("");
    let finalSum = 0;
// This is the function for checking for numbers that are greater than 9, and adding to the sum
    for (let i = strArr.length - 2; i >= 0; i-- ){
        if (strArr[i] * 2 > 9){
            let multipliedNumber = strArr[i] * 2;
            let splitArr = multipliedNumber.toString().split("");
            finalSum += (parseInt(splitArr[0]) + parseInt(splitArr[1]))
            console.log(splitArr)
            console.log(finalSum);
         }
        //else{
        //     finalSum += parseInt(strArr[i] * 2)
        //     console.log(finalSum)
        // }
    }
    
    // //This deals with odd numbers that don't get duplicated
    for (i = 1; i < 14; i += 2){
        console.log(strArr[i])
        finalSum += parseInt(strArr[i]);
        console.log(strArr[i], finalSum)
     }
    finalSum += parseInt(strArr[15]);
    console.log(finalSum);
    
    
            if (finalSum % 10 == 0){
                return "The number is valid!";
            }else{
                return "The number is invalid!";
            }
    
    
    
    
    // for (let i = strArr.length - 3; i >= 0; i -= 2){
    //     if (strArr[i] * strArr[strArr.length - 1] > 9){
    //         let multipliedNumber = strArr[i] * strArr[strArr.length - 1];
    //         let splitArr = multipliedNumber.toString().split("");
    //         finalSum += (splitArr[0] + splitArr[1]);
    //     }
    // }
    //     if (finalSum % 10 == 0){
    //         return "The number is valid!";
    //     }else{
    //         return "The number is invalid!";
    //     }


}
console.log(exports.creditCheck("5541808923795240"));
