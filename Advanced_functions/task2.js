function decrease(num) {
    console.log(num);
    while (num > 0) {
        num--;
        decrease(num);
        break;
    };
};
decrease(5);