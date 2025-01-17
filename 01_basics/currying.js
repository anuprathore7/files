

function addition (a){
    return function(b){
        return function(c){
            return a+b+c;
        }

    }
}

 const res = addition(2)(3)(4);

 console.log(res);



 const userObj ={
    name : "anup",
    age : 20
 }

 function userInfo (obj){
    return function(userinfo){
        return obj[userinfo];
    }
 }

 let out = userInfo(userObj);
 console.log(out('age'));




 const sendEmail = (to) =>(subject) =>(body)=>
    `sending email to ${to} with subject ${subject} to : ${body}`;
 
 

//  let step1 = sendEmail("anuprathor@gmail.com");
//  let step2 = step1("New Order Confirmation");
// console.log(step2("Here is the New for you anup"));

let response = sendEmail("anuprathor@gmail.com")("New Order Confirmation")("Here is the New for you anup")
console.log(response);



function  mul (a){
    return function(b){
        return a*b;
    }
}

console.log(mul(2));
