

// filter 

const arr=[5 , 3 , 1 , 2 , 6];

const res = arr.filter((x)=> x % 2 !=0);

console.log(res);


const users = [

    { firstName : "anup " , age : 30},
    {firstName : "anuj " , age : 40},
    {firstName : "dev " , age : 30},
    {firstName : "anshika " , age : 20},

];


const output = users.filter((x)=> x.age<=30).map((x)=> x.firstName);

// reduce 
const userList = users.reduce((acc, curr) => {
    if(curr.age < 30) {
        acc.push(curr.firstName);
    }

    return acc;
    
},[]);

console.log(userList);

console.log(output)