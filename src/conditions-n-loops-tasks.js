/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  if (number >= 0) return true;
  return false;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  if (a >= b && a >= c) {
    return a;
  }
  if (b >= a && b >= c) {
    return b;
  }
  return c;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 * @param {Object} queen - The position of the queen.
 * @param {Object} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen, king) {
  if (queen.x === king.x || queen.y === king.y) {
    return true;
  }

  if (Math.abs(queen.x - king.x) === Math.abs(queen.y - king.y)) {
    return true;
  }

  return false;
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  if (a === 0 || b === 0 || c === 0) return false;
  if (a + b < c || a + c < b || b + c < a) return false;
  if (a === b || a === c || b === c) return true;
  return false;
}
/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  let inputNum = num;
  const romanValues = [
    { value: 1000, numeral: 'M' },
    { value: 900, numeral: 'CM' },
    { value: 500, numeral: 'D' },
    { value: 400, numeral: 'CD' },
    { value: 100, numeral: 'C' },
    { value: 90, numeral: 'XC' },
    { value: 50, numeral: 'L' },
    { value: 40, numeral: 'XL' },
    { value: 10, numeral: 'X' },
    { value: 9, numeral: 'IX' },
    { value: 8, numeral: 'VIII' },
    { value: 7, numeral: 'VII' },
    { value: 6, numeral: 'VI' },
    { value: 5, numeral: 'V' },
    { value: 4, numeral: 'IV' },
    { value: 3, numeral: 'III' },
    { value: 2, numeral: 'II' },
    { value: 1, numeral: 'I' },
  ];
  let result = '';
  for (let i = 0; i < romanValues.length; i += 1) {
    while (inputNum >= romanValues[i].value) {
      result += romanValues[i].numeral;
      inputNum -= romanValues[i].value;
    }
  }
  return result;
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
  let result = '';
  let i = 0;

  while (i < numberStr.length) {
    const char = numberStr[i];
    let word = '';

    switch (char) {
      case '9':
        word = 'nine';
        break;
      case '8':
        word = 'eight';
        break;
      case '7':
        word = 'seven';
        break;
      case '6':
        word = 'six';
        break;
      case '5':
        word = 'five';
        break;
      case '4':
        word = 'four';
        break;
      case '3':
        word = 'three';
        break;
      case '2':
        word = 'two';
        break;
      case '1':
        word = 'one';
        break;
      case '0':
        word = 'zero';
        break;
      case '.':
      case ',':
        word = 'point';
        break;
      case '-':
        word = 'minus';
        break;
      default:
        word = '';
        break;
    }

    if (word) {
      result += `${word} `;
    }

    i += 1;
  }

  let trimmedResult = '';
  for (let j = 0; j < result.length - 1; j += 1) {
    trimmedResult += result[j];
  }

  return trimmedResult;
}

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  let newString = '';
  for (let i = str.length - 1; i >= 0; i -= 1) {
    newString += str[i];
  }
  return str === newString;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 'е'     => 4
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  const arr = [...str];
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === letter) {
      return i;
    }
  }
  return -1;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  let remainingNum = num;
  while (remainingNum > 0) {
    if (remainingNum % 10 === digit) {
      return true;
    }
    remainingNum = Math.floor(remainingNum / 10);
  }
  return false;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  for (let i = 0; i < arr.length; i += 1) {
    let leftSum = 0;
    let rightSum = 0;

    for (let j = 0; j < i; j += 1) {
      leftSum += arr[j];
    }

    for (let k = i + 1; k < arr.length; k += 1) {
      rightSum += arr[k];
    }

    if (leftSum === rightSum) {
      return i;
    }
  }

  return -1;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(size) {
  if (size <= 0) return [];

  const matrix = new Array(size);
  for (let i = 0; i < size; i += 1) {
    matrix[i] = new Array(size);
  }

  let num = 1;
  let top = 0;
  let bottom = size - 1;
  let left = 0;
  let right = size - 1;
  let direction = 0;
  while (top <= bottom && left <= right) {
    if (direction === 0) {
      let i = left;
      while (i <= right) {
        matrix[top][i] = num;
        num += 1;
        i += 1;
      }
      top += 1;
    } else if (direction === 1) {
      let i = top;
      while (i <= bottom) {
        matrix[i][right] = num;
        num += 1;
        i += 1;
      }
      right -= 1;
    } else if (direction === 2) {
      let i = right;
      while (i >= left) {
        matrix[bottom][i] = num;
        num += 1;
        i -= 1;
      }
      bottom -= 1;
    } else if (direction === 3) {
      let i = bottom;
      while (i >= top) {
        matrix[i][left] = num;
        num += 1;
        i -= 1;
      }
      left += 1;
    }

    direction = (direction + 1) % 4;
  }

  return matrix;
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(matrix) {
  const arr = matrix;

  const size = matrix.length;
  const newMatrix = new Array(size);
  for (let i = 0; i < size; i += 1) {
    newMatrix[i] = new Array(size);
    for (let j = 0; j < size; j += 1) {
      newMatrix[i][j] = 0;
    }
  }

  for (let i = size - 1; i >= 0; i -= 1) {
    for (let j = 0; j < size; j += 1) {
      newMatrix[j][size - 1 - i] = matrix[i][j];
    }
  }

  for (let i = 0; i < size; i += 1) {
    for (let j = 0; j < size; j += 1) {
      arr[i][j] = newMatrix[i][j];
    }
  }
  return arr;
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */
function sortByAsc(arr) {
  const sortArr = arr;
  const sortFunction = (arr2, leftItem = 0, rightItem = arr2.length - 1) => {
    if (leftItem >= rightItem) return;

    const middleItem = arr2[Math.floor((leftItem + rightItem) / 2)];

    let i = leftItem;
    let j = rightItem;

    while (i <= j) {
      while (arr2[i] < middleItem) i += 1;
      while (arr2[j] > middleItem) j -= 1;

      if (i <= j) {
        [sortArr[i], sortArr[j]] = [arr2[j], arr2[i]];
        i += 1;
        j -= 1;
      }
    }

    if (leftItem < j) sortFunction(arr2, leftItem, j);
    if (i < rightItem) sortFunction(arr2, i, rightItem);
  };

  sortFunction(sortArr);

  return sortArr;
}

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function shuffleChar(str, iterations) {
  if (str.length === 0 || iterations <= 0) return str;

  let result = str;

  for (let i = 0; i < iterations; i += 1) {
    let evenChars = '';
    let oddChars = '';

    for (let j = 0; j < result.length; j += 1) {
      if (j % 2 === 0) evenChars += result[j];
      else oddChars += result[j];
    }

    result = evenChars + oddChars;

    if (result === str) return shuffleChar(str, iterations % (i + 1));
  }

  return result;
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 */
function getNearestBigger(number) {
  if (number < 10) return number;

  const digitsArr = [];
  let num = number;

  while (num > 0) {
    digitsArr.unshift(num % 10);
    num = Math.floor(num / 10);
  }

  let pivotIndex = digitsArr.length - 2;
  while (
    pivotIndex >= 0 &&
    digitsArr[pivotIndex] >= digitsArr[pivotIndex + 1]
  ) {
    pivotIndex -= 1;
  }

  if (pivotIndex < 0) return number;

  let swapIndex = digitsArr.length - 1;
  while (digitsArr[swapIndex] <= digitsArr[pivotIndex]) {
    swapIndex -= 1;
  }

  let temp = digitsArr[pivotIndex];
  digitsArr[pivotIndex] = digitsArr[swapIndex];
  digitsArr[swapIndex] = temp;

  let left = pivotIndex + 1;
  let right = digitsArr.length - 1;
  while (left < right) {
    temp = digitsArr[left];
    digitsArr[left] = digitsArr[right];
    digitsArr[right] = temp;
    left += 1;
    right -= 1;
  }

  let result = 0;
  for (let k = 0; k < digitsArr.length; k += 1) {
    result = result * 10 + digitsArr[k];
  }

  return result;
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
