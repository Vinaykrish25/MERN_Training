const num = prompt("Enter the number");
const low = prompt("Enter the lowest value");
const high = prompt("Enter the highest value");
if ((num <= low) && (num >= high))
{
    document.write(num," is present inside the range");
}
else{
    document.write(num," not present inside the range");
}