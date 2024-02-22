import _ from "lodash";

function isObjectsEqual(obj1, obj2) {
    return _.isEqual(obj1, obj2);
};

const user1 = {
    login: "user123",
    age: 18,
    smoking: false,
    hobbies: ['football', 'tv shows']
};

const user2 = {
    login: "user1234",
    age: 18,
    smoking: false,
    hobbies: ['football', 'tv shows']
};

const user3 = {
    login: "user123",
    age: 18,
    smoking: true,
    hobbies: ['football', 'tv shows']
};

const user4 = {
    login: "user123",
    age: 18,
    smoking: false,
    hobbies: ['football']
};

const user5 = {
    login: "user123",
    age: 18,
    smoking: false,
    hobbies: ['football', 'tv shows', 'social media']
};

const user6 = {
    login: "user123",
    age: 18,
    smoking: false,
    hobbies: ['football', 'tv shows']
};

const user7 = {
    login: "user123",
    age: 18,
    hobbies: ['football', 'tv shows'],
    smoking: false
};

console.log(isObjectsEqual(user1, user2));
console.log(isObjectsEqual(user1, user3));
console.log(isObjectsEqual(user1, user4));
console.log(isObjectsEqual(user1, user5));
console.log(isObjectsEqual(user1, user6));
console.log(isObjectsEqual(user1, user7));