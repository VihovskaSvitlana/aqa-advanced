const car1 = {
    brand: "Volkswagen",
    model: "S",
    year: 2023
};

const cars2 = {
    brand: "Audi",
    model: "A",
    owner: "Sveta"
};

const car3 =  {...car1,...cars2};
console.log(car3);