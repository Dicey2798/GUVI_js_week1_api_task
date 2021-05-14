//Using the spread (...) operator

var arr1=['ame','ya','bha','gat'];
var coppied_arr=[...arr1];
arr1[1]='changed in ist array';
coppied_arr[2]='chnaged';
console.log(arr1,coppied_arr);

//Using the Object.assign() method

var arr0=['ame','ya','bha','gat'];
var b=Object.assign([],arr0);
b[0]='anant'
console.log(arr0,b);

//Using the JSON.stringify() and JSON.parse() methods

var arr=['ame','ya','bha','gat'];
var c=JSON.parse(JSON.stringify(arr));
arr[3]='changed'
console.log(arr,c);
