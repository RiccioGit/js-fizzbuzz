for (var i = 0; i < 101; i++) {
  if (!(i % 3) && !(i % 5)) {
    console.log("Fizzbuzz!!!!!");
  } else if ((i % 3) && !(i % 5)) {
    console.log("FIZZ!");
  } else if (!(i % 3) && (i % 5)) {
    console.log("BUZZ!");
  } else {
    console.log(i);
  }
}
