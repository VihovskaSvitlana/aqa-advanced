function even() {
  console.log('number is even');
}

function odd() {
  console.log('number is odd');
}

function handleNum(n, even, odd) {
  n % 2 == 0 ? even() : odd();
}

handleNum(7, even, odd);
