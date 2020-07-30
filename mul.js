module.exports  = (x,y,callback) =>{
    if(x<=0 || y<=0)
    {
        setTimeout(()=>
        callback(new Error("if either one number is zero whole result will be zero"),null)
        ,2000);
    }
    else{
        setTimeout(()=>
        callback(null,{
            multiple : (x,y) => (x*y)
        })
        ,2000);
    }
}