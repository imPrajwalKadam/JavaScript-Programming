////Accept one number and check whether is divisible by 5 or not
main();
function Check(iNo) {

    if ((iNo % 5) == 0) {
        return true;
    }
    else {
        return false;
    }
}
function main() {
    var iret;
//    var iValue = prompt("Enter number");

    var iValue = 20;  
    iret = Check(iValue);
    if (iret == true) {
        console.log("number is Divided by 5");
    }
    else {
        console.log("Number cannot divided by 5");
    }
}
