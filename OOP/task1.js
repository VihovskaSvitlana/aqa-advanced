
// створити клас нащадок Worker - у якого має бути свій конструктор з оголошенням двох полів salary, work time.
//  Також має бути два метода який виводить привітання, і каже що робота завершена.

// створити метод який буде виводити в консоль повідомлення чи працює зараз працівник чи ні

// можна використатиDate()

// і в залежності від години виклику методу відображати текст робочі години чи ні

// робочий день з 09:00 до 18:00

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
        super()
        this.salary = salary;
        this.work_time = workTime;
    }
    greet() {
        console.log("Hello!")
    }

    finish() {
        console.log("Work is finish!")
    }

    isWorking() {
        const fullTime = Date()
        const year = new Date().getFullYear();
        const currentTime = fullTime.split(`${year} `)[1].split(' GMT')[0]
        const currentDay = fullTime.split(' ')[0]

        if (currentDay !== 'Sat' && currentDay !== 'Sun') {
            if (currentTime >= '09:00:00' && currentTime < '18:00:00') { console.log('Now is working time'); }
            else if (currentTime < '09:00:00') {console.log('Sorry, wow is not working time yet'); }
            else if (currentTime > '18:00:00') {console.log('Sorry, working day is over'); }
            else {console.log('Time is incorrect', currentTime);}

        }
        else if (currentDay == 'Sat' || currentDay == 'Sun') {
            console.log('We are sorry, today is day off');
        }
        else {
            console.log('Day is incorrect');
        }
    }


}

const worker1 = new Worker('test', '2-3');
worker1.isWorking()