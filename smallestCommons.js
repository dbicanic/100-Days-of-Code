
function smallestCommons(arr) {
  arr.sort();
  for( var i = arr[0]+1; i < arr[1]; i++){
    arr.push(i);
  }
  
  arr.sort();
  
  if( arr[0] == 1){
    arr.shift();
  }
  
  var lastElm = arr[arr.length - 1];
  var multiple = lastElm;
  console.log(arr);
  
  for( var j = 0; j < arr[lastElm]; j++ ){
    while(true){
      if( multiple % arr[j] == 0 ){
        break;
      } else {
        multiple = multiple + lastElm;
      }
    }
  }

  
  
  return multiple;
}


smallestCommons([1,5]);
