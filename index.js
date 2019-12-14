/*
//Chapter 2 Exercise 1

let triLine = "";
for(let i = 0; i < 7; i++) {
  triLine += "#";
  console.log(triLine);
}
*/

/*
//Chapter 2 Exercise 2

function fizzBuzz(fizz, buzz, count) {
  for(let i = 0; i < count; i++) {
    let output = "";
    if(i % fizz === 0) output += "Fizz";
    if(i % buzz === 0) output += "Buzz";
    if(output) {
      console.log(output);
      continue;
    }
    console.log(i);
  }
}

fizzBuzz(3, 5, 100);
*/


/*
//Chapter 2 Exercise 3

function chessboardGrid(size) {
  let chessboard = "";
  for(let i = 1; i <= size; i++) {
    for(let j = 1; j <= size; j++) {
      if((i + j) % 2 !== 0) {
        chessboard += "#";
      } else {
        chessboard += " ";
      }
    }
    chessboard += "\n";
  }
  console.log(chessboard);
}

chessboardGrid(8);
*/

/*
//Chapter 3 Exercise 1

function findMin(a, b) {
  if(a > b) {
    return b;
  } else {
    return a;
  }
}

console.log(findMin(-12, 11));
*/

/*
//Chapter 3 Exercise 2

function isEven(num) {
  if(num === 0) {
    return true;
  } else if(num === 1) {
    return false;
  } else {
    if(num > 0){
      return isEven(num - 2);
    } else {
      return isEven(num + 2);
    }
  }
}

console.log(isEven(5));
*/

/*
//Chapter 3 Exercise 3

function countChar(str, char) {
  let counter = 0;
  
  for(let i in str) {
    if(str[i] === char) {
      counter++;
    }
  }

  return counter;
}

console.log(countChar("kek", "k"));
*/

/*
//Chapter 4 Exercise 1

function range(start, end, step) {
  let arr = [];
  step = step || end < start ? -1 : 1;
  
  if(step < 0) {
    for(let i = start; i >= end; i += step) {
      arr.push(i);
    }
  }else {
    for(let i = start; i <= end; i += step) {
      arr.push(i);
    }
  }

  return arr;
}

function sum(arr) {
  let sum = 0;

  for(let i of arr) {
    sum += i;
  }

  return sum;
}

console.log(range(5, 2));
*/

/*
//Chapter 4 Exercise 2

function reverseArray(arr) {
  let newArr = [];

  for(let i of arr) {
    newArr.unshift(i);
  }

  return newArr;
}

function reverseArrayInPlace(arr) {
	let swap, end;
	
	for(let i = 0; i < (arr.length - 1) / 2; i++) {
		end = (arr.length - 1) - i;
		swap = arr[end];
		arr[end] = arr[i];
		arr[i] = swap;
	}
	
	return arr;
}

var arr = ['hey', 'hllo', 'hello', 'sup', 'yeah', 'idk'];

console.log(reverseArrayInPlace(arr));
*/

/*
//Chapter 4 Exercise 3

function arrayToList(arr) {
    if (arr.length === 1) {
        return {
            value: arr[0],
            rest: null
        }
    }
    const [val, ...rest] = arr
    return {
        value: arr[0],
        rest: arrayToList(rest)
    }
}
var myList = arrayToList([9, 2, 3, 4, 5, 6]);

// console.log(JSON.stringify(myList, null, 2));

function listToArray(list, arr = []) {
  if(list.rest) {
    arr.push(list.value);
    listToArray(list.rest, arr);
  } else {
    arr.push(list.value);
  }

  return arr;
}

console.log(listToArray(myList));
*/

/*
//Chapter 4 Exercise 4
function deepEqual(valueOne, valueTwo, equal = true) {
  if(valueOne && !valueTwo || !valueOne && valueTwo) {
    return false;
  } else if(typeof(valueOne) === 'object' && typeof(valueTwo) === 'object') {
    if(Array.isArray(valueOne) !== Array.isArray(valueTwo)) {
      return false;
    }

    for(key in valueOne) {
      if(equal) {
        equal = deepEqual(valueOne[key], valueTwo[key]);
      } else {
        return false;
      }
    }
    return equal;
  } else {
    return valueOne === valueTwo;
  }
}

console.log(deepEqual([], []));
*/
