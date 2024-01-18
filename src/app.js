// Progression 1: create a consant "NEG_INF" with -1000000 value, and a function createPop
const NEG_INF = -1000000
function createPop(array,item){
  let title= `<h3></h3>`
  let currIndex= NEG_INF;
  let check = false;


  function searchForElement(){
    array.forEach((ele,i)=>{
      if(ele===item){
        currIndex=i;
        check = true;
      }
    })
    }
    return function(){
      searchForElement()
      if(check){
        console.log(`The item is present and is at index ${currIndex}`)
        return `The item is present and is at index ${currIndex}`
      }
      else{
        console.log(`The item is not present and is at index ${currIndex}` )
        return `The item is not present and is at index ${currIndex}` 
      }
    }
  }



  // Progression 2: add 3 variables: title, currIndex, check

  // Progression 3: create a function "searchForElement" 

  // Progression 4: In `createPop()`, return a function - which uses the updated values of `currIndex` and `check`
                    // to return the desired output.

const arrayOfNumbers = [1,2,3,4,5,6];
const itemToSearch = 4;

