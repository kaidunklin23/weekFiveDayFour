
//Sum All Numbers in a Range
function sumAll(arr) {
    var max = Math.max(arr[0], arr[1]);
    var min = Math.min(arr[0], arr[1]);
    var temp = 0;
    for (var i = min; i <= max; i++) {
      temp += i;
    }
    return temp;
  }
  sumAll([1, 4]);

//Sum AllOdd Fibonacci
function sumFibs(num) {
    var prevNumber = 0;
    var currNumber = 1;
    var result = 0;
    while (currNumber <= num) {
      if (currNumber % 2 !== 0) {
        result += currNumber;
      }
  
      currNumber += prevNumber;
      prevNumber = currNumber - prevNumber;
    }
  
    return result;
  }
  sumFibs(4);
//Sorted Union
function uniteUnique(arr1, arr2, arr3) {
    var finalArray = [];
     for (var i = 0; i < arguments.length; i++) {
      var arrayArguments = arguments[i];
        for (var j = 0; j < arrayArguments.length; j++) {
        var indexValue = arrayArguments[j];
          if (finalArray.indexOf(indexValue) < 0) {
          finalArray.push(indexValue);
        }
      }
    }
  
    return finalArray;
  }
  uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

  var div1 = document.getElementById('div1');

  var unicycle = document.getElementsByClassName('unicycle');

  var paragraphs = document.getElementsByTagName('p');
  
  var queryUnicycle = document.querySelector('.unicycle');

  var text = "<h1>Hello World</h1>";
   
  queryUnicycle.textContent = text;
  
 