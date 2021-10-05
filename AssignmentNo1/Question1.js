//Program to Divide two numbers
main();//i Used terminology of main
function Divide( iNo1, iNo2)
{
     var res = 0;
     if(iNo1 == iNo2)
     {
          return -1;
     }
     res = iNo1/iNo2;
     return res;
}
function main()
{
     iValue1 = 11,iValue2 = 5;
     iRet = 0;
     
     iRet = Divide(iValue1 , iValue2);
     console.log(iRet);
}

