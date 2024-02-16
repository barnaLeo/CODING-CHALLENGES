// 1. getLength(arr) should return length of arr
function getLength(arr) {
  return arr.length;
}

// 2. getFirst(arr) should return the first element of arr
function getFirst(arr) {
  return arr[0];
}

// 3. getLast(arr) should return the last element of arr
function getLast(arr) {
  return arr[arr.length - 1];
}

// 4. pushElement(arr, element) should push an element to arr, and then return arr
function pushElement(arr, element) {
  arr.push(element);
  return arr;
}

// 5. popElement(arr) should pop an element from arr, and then return arr
function popElement(arr) {
  arr.pop();
  return arr;
}
