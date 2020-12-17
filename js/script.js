var zero = 0;
for (var i = 0; i < 100; i++) {
  zero + i;
  zero++;
  if (zero % 3 === 0 && zero % 5 !== 0) {
    console.log('fizz');
  }else if (zero % 5 === 0 && zero % 3 !== 0) {
    console.log('buzz');
  }else if (zero % 3 === 0 && zero % 5 === 0) {
    console.log('fizz-buzz');
  }else {
    console.log(zero);
  }
}
