// Task 11: Student Record System — Calculate a Derived Value

function checkStatus(name, marks) {
  if (marks >= 40) {
    return name + " has PASSED";
  } else {
    return name + " has FAILED";
  }
}

console.log(checkStatus("Aditi", 78));
console.log(checkStatus("Kiran", 30));

// Output:
// Aditi has PASSED
// Kiran has FAILED
