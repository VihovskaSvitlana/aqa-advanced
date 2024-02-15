const averageGrade = 101;
console.log('average grade is ', averageGrade);

switch (true) {

    case averageGrade < 60:
        console.log("Unsatisfactorily");
        break;

    case averageGrade >= 60 && averageGrade <= 70:
        console.log("Satisfactorily");
        break;

    case averageGrade >= 71 && averageGrade <= 80:
        console.log("Good");
        break;

    case averageGrade >= 81 && averageGrade <= 90:
        console.log("Very good");
        break;

    case averageGrade >= 91 && averageGrade <= 100:
        console.log("Perfectly");
        break;
    
    default:
        console.log('value of average grade is invalid', averageGrade);
}