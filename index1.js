var mul = require("./mul");

function multiplication(a,b){
    mul(a,b,(err,mult)=>{
        if(err)
        {
            console.log("Error:"+err.message);
        }
        else{
            console.log("the multiplication result is:"+mult.multiple(a,b));
        }
    });
    console.log("keep smile and wait:");
}
multiplication(2,3);
multiplication(0,2);
multiplication(5,7);