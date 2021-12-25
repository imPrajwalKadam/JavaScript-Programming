function checkPrime(iNo) {
    if (iNo < 0) {
        iNo = -iNo;
    }
    var iCnt = 0;
    for (iCnt = 2; iCnt <= iNo / 2; iCnt++) {
        if ((iNo % iCnt) == 0) {
            break;
        }
    }
    console.log(iNo);
    if (iCnt == (iNo / 2 | 0) + 1) {
        return true;
    }
    else {
        return false;
    }
}
var iNum = 7;
var bRet;
bRet = checkPrime(iNum);
if (bRet == true) {
    console.log("number is prima");
}
else {
    console.log("Number is not Prime");
}
