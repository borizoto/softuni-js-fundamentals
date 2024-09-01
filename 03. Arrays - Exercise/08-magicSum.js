function magicSum(arr, magicNum) {
    for (let i = 0; i < arr.length; i++) {
     let curNum = arr[i];
 
     for (let j = i + 1; j < arr.length; j++) {
         let otherNum = arr[j];
     
         if (curNum + otherNum === magicNum) {
             console.log(curNum, otherNum);
         }  
     }
    }
 }