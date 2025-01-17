
 // example 1
// function x (){
// var a =7;

// function y(){
//     console.log(a);

// }
// a=67;
// return y;

// }

// const z = x();

// console.log(z);




// example 2


// function x (){
//   var a =1 ;
  
//   setTimeout(function(){
//     console.log(a);

//   },3000)
//   console.log("Namastey javascript");
// }

// x();

// example 3

function x(){

    for(let i =1; i<=5 ; i++){
        setTimeout(()=>{
            console.log(i);
        } , i *  1000)
    }
    console.log("namaste javascript");
}

x();zz



