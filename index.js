function reverseString(str){
  var newString="";
  for (let i=str.length -  1; i>=0; i--){
    newString+=str[i];
    
  }
  return newString;
  // console.log(newString);
}
var result=reverseString("hello");
console.log(result);
