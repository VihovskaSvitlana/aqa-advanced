let checkNumber = (num) => {
  return new Promise((resolve, reject) => {
    if (num < 10) {
      resolve('Success');
    } else {
      reject(new Error('Failure'));
    }
  });
};

checkNumber(9)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
