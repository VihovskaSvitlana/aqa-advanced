class Human {
    constructor() {
        if (this.constructor == Human) {
            throw new Error('it is abstract class')
        }
    }
    eat() { console.log('eating') }
    listen() { console.log('listening') }
}

class Worker extends Human {
    constructor(salary, workTime) {
        super();
        this.salary = salary;
        this.workTime = workTime;
    };

    greet() {
        console.log("Hello!");
    };

    finish() {
        console.log("Work is finish!");
    };

    isWorking() {
        const currentHour = new Date().getHours();
        const currentDay = new Date().getDay();

        if (currentDay !== 0 && currentDay !== 6) {
            if (currentHour >= 9 && currentHour < 18) console.log('Now is working time');
            if (currentHour < 9) console.log('Sorry, wow is not working time yet');
            if (currentHour >= 18) console.log('Sorry, working day is over');

        } else console.log('We are sorry, today is day off');
    };
};

const worker1 = new Worker('test', '9:00-18:00');
worker1.isWorking();