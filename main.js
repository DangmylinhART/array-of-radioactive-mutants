/******************
 * YOUR CODE HERE *
 ******************/

 function addMeToEnd(arr){
  arr.push('Colin')
}

////*********** */

function addMeToStart(arr){
  arr.unshift('Colin')
}

/////************* */

function changeLast(arr,value){
  // teacher method
  arr[arr.length - 1 = value]

  // My method
  //arr.pop(arr[arr.length -1])
  //arr.push(value)
}

/////************* */
// first solution/wrong
// function  changeAllValuesTo(arr, value){
//  arr.splice(arr, arr.length, value) 
// }
// let resultX = changeAllValuesTo([1, 2, 3, 5, 7, 9],30)
// resultX

//*************************** */

function  changeAllValuesTo(arr, value){
  for( let i = 0 ; i < arr.length ; i++ ){
  arr[i] = value
  }
  return arr
}

let resultX = changeAllValuesTo([1, 2, 3, 5, 7, 9],30)
resultX;
  

///************************* */
function oddOrEven(arr){
  for ( let i  = 0 ; i < arr.length ; i++)
  if (arr[i] % 2 === 0){arr[i] = 'even'}
  else { arr[i] = 'odd'}
  return arr
}

let result3 = oddOrEven([1, 2, 3, 5, 7, 8])
result3;

////** *///////////
// wrong method
// function changeNextThreeToValue(start, arr, value){
//  arr.splice(start, 3, value)
// }
// let result = changeNextThreeToValue( 2,[1, 2, 3, 5, 7, 9], 15)
// result ;

// function changeNextThreeToValue(start, arr, value){
//   for ( let  i = 0 ;  i  < arr.length- 1 ; i ++){
//     // console.log(arr.indexOf(start))
//     console.log(arr[start])
//     arr[i]  = value
//   } return arr 
//   }
  

///******************** */

function changeNextThreeToValue(start, arr, value){
  for ( let  i = start ;  i  < start + 3 ; i ++){
    arr[i]  = value
  } return arr
}
  let result = changeNextThreeToValue( 1,[1, 2, 3, 5, 7, 9], 15)
  result ;
    
    
/*********************************
 * OUR CODE BELOW; DO NOT TOUCH! *
 *********************************/


if (typeof addMeToEnd === 'undefined') {
  addMeToEnd = undefined;
}

if (typeof addMeToStart === 'undefined') {
  addMeToStart = undefined;
}

if (typeof changeLast === 'undefined') {
  changeLast = undefined;
}

if (typeof changeAllValuesTo === 'undefined') {
  changeAllValuesTo = undefined;
}

if (typeof oddOrEven === 'undefined') {
  oddOrEven = undefined;
}

if (typeof changeNextThreeToValue === 'undefined') {
  changeNextThreeToValue = undefined;
}


module.exports = {
  addMeToEnd,
  addMeToStart,
  changeLast,
  changeAllValuesTo,
  oddOrEven,
  changeNextThreeToValue,
}
