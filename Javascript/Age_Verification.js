var age = prompt("Please enter your age:");
if (age <= 0) {
console.log("Invalid input");
} else if (age >= 1 && age <= 5) {
  console.log("Infant");
} else if (age >= 6 && age <= 10) {
    console.log("Child");
} else {
      console.log("Adult");
 }