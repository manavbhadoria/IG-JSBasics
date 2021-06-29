function nextInLine(arr, item) {
  // Your code here
  arr.push(item);
  var remove = arr.shift();
  return remove; // Change this line
}