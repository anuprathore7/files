

const promiseOne = new Promise((resolve , reject )=>{
    setTimeout(()=>{
     console.log("task is completed");
      resolve();

    }, 1000)
});

promiseOne.then(()=>{
    console.log("consumed ");
    
})



new Promise((resolve , reject )=>{
    setTimeout(()=>{
    
      resolve({name : "anup " ,age: 20});
      
    }, 1000)
}).then((user)=>{
    console.log(user);
    
})

 // promises using then catch finally
const PromiseTwo = new Promise ((resolve , reject)=>{
    setTimeout(()=>{
        let error = false;

        if(!error)
            { resolve({name : "Anup" , age: 20});
    }
        else 
        {reject("asomething went wrong ")}

    }, 2000);
})

PromiseTwo.then((user)=>{
    console.log(user);
    return user.age;
    
}).then((age)=>{
    console.log(age);
    
}).catch((error)=>{
 console.log(error);
 
}).finally(()=>{
    console.log("its finally executed ");
    
})


//promises using async await / try catch

const PromiseThree = new Promise ((resolve , reject)=>{
    setTimeout(()=>{
        let error = false;

        if(!error)
            { resolve({name : "javascript" , age: 20});
    }
        else 
        {reject("something went wrong ")}

    }, 3000);
})


async function handlePromise() {
    try{
        const res = await PromiseThree;
    console.log(res);
    }

    catch(error){
        console.log(error);
        

    }
    
    
}

handlePromise();

const p1 = new Promise ((resolve , reject)=>{
    setTimeout(()=>{
        reject("p1 rejected ")
    } , 1000)
    
})
const p2= new Promise ((resolve , reject)=>{
    setTimeout(()=>{
        resolve("p2 resolved ")
    } , 2000)
    
})
const p3= new Promise ((resolve , reject)=>{
    setTimeout(()=>{
        reject("p3 reject")
    } , 3000)
});

Promise.any     ([p1 , p2 , p3])
.then((res)=>{
    console.log(res);

    
}).catch((err)=>{
    console.error(err);
    
})
