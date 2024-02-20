function checkOrder(available, ordered) {
    if (available < ordered) return 'Your order is too large, we don’t have enough goods.'
    if (ordered == 0) return 'Your order is empty.';
    if (available >= ordered && ordered > 0) return 'Your order is accepted.';
    return 'Please, enter correct number of goods';

};
console.log(checkOrder(2, 2));

function checkOrder(available,ordered) {
    if (available < ordered) {
        return 'Your order is too large, we don’t have enough goods.';
    } else if (ordered == 0) {
        return 'Your order is empty.';
    } else if (available >= ordered && ordered > 0) {
        return 'Your order is accepted.';
    } else {
        return 'Please, enter correct number of goods';
    };
};
console.log(checkOrder(2, 2));