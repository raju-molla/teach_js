// 1. implicit type conversiton
// 2. Explicit type codeversition


// implicit type conversiton 

// number to String
// var a=10, b='5';
// var res=a+b;
// console.log(res);

// var a=10, b='true';
// var res=a+b;
// console.log(res);

// var a='10';
// var b=null;
// b='raju';
// var res=a+b;
// console.log(res);

// var a='10', b=undefined;
// var res=a+b;
// console.log(res);


// string to Number

// var a='5', b='4';
// var res= a-b;
// console.log(res);

// var a='5', b='4';
// var res= a*b;
// console.log(res);  //20

// var a='20', b='4';
// var res= a/b;
// console.log(res); //5

// converting to NaN

// var str1='hello', str2='world';
// var res= str1-str2;
// console.log(res);

// var str1=4, str2='world';
// var res= str1-str2;
// console.log(res);

// null conversion 

// var a=4, b=null;  //null =0;
// var res= a-b;
// console.log(res);


// undefined conversiton 

// var a=4,b=undefined;
// var res= a+b;
// console.log(res);

// var a=true, b=undefined;
// var res= a+b;
// console.log(res);

// note true 1, false=0;


// 2. Explicit type codeversition

// string to number conversition

// var a= '10';
// var b=Number(a);
// console.log(b);

// var result = Number('32411')  
// console.log(result);

// var num= Number(true)
// console.log(num);

// string to nulll;

// var a=Number(null)
// console.log(a);

// var a= Number(' ');
// console.log(a);

// NaN

// var res= Number(' sfdkjs');
// console.log(res);


// parseInt ,math .floor
//  var num=10.6;
//  var res= parseInt(num);
//  console.log(res);

// var res= Math.round(num);
// console.log(res);


// number to string 

// var num= String(10);
// console.log(num);

// var num=String(NaN);
// console.log(num);

// var a=10;
// var res= a.toString();
// console.log(res);

// Boolean convert


// undefined , null, empty string, 0, false----------false
// others-------true
// var res= Boolean(undefined)
// console.log(res);
// var res= Boolean(0)
// console.log(res);

// var res= Boolean(56465);
// console.log(res);

