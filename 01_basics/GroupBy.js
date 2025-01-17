
const examResults = [
    {studentId: "41045 " , score : 95},
    {studentId: "41035 " , score : 93},
    {studentId: "41075 " , score : 67},
    {studentId: "41025 " , score : 30},
    {studentId: "41015 " , score : 50},

];

const group = Object.groupBy(examResults , result => result.score >= 50  ? "passed" : "failed");

console.log(group);




