function testScope() {
  var x = 10;
  let y = 20;
  const z = 30;
  if (true) {
    var x = 40; 
    let y = 50;
  }
  console.log(x); //40
  console.log(y); //50
  console.log(z); //30
}
testScope();
  console.log(x); // x is not defined
  console.log(y); // y is not defined
  console.log(z); // z is not defined


  