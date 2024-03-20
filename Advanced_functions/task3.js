function divide(numerator, denominator) {
  if (
    denominator == 0 ||
    typeof numerator !== 'number' ||
    typeof denominator !== 'number'
  ) {
    throw new Error('Value is 0 or not a number');
  } else {
    return numerator / denominator;
  }
}

try {
  divide(10, 2);
} catch (error) {
  console.error(error.message);
}

try {
  divide(10, 0);
} catch (error) {
  console.error(error.message);
}

try {
  divide(10, undefined);
} catch (error) {
  console.error(error.message);
}

try {
  divide(10, null);
} catch (error) {
  console.error(error.message);
}

try {
  divide(10, 'a');
} catch (error) {
  console.error(error.message);
}

try {
  divide(10, true);
} catch (error) {
  console.error(error.message);
} finally {
  console.log('Робота завершена');
}
