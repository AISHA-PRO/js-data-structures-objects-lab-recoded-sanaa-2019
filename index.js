// Write your solution in this file!
const driver ={
  
}

function updateDriverWithKeyAndValue(driver , key , value){
  const obj=Object.assign({},driver,{key:value}) ;
  return obj;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key , value){
  driver[key]=value;
  return driver;
}

function deleteFromDriverByKey(driver , key){
  
}
function destructivelyDeleteFromDriverByKey(){
  
}