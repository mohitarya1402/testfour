let ar= [1,2,3,4,5,6,7]
let ray=[]
Array.prototype.map = null;
// polyfill for map 
Array.prototype.myMap = function(callback)
{
    let newArray=[]
    for(let i =0;i<this.length;i++)
    {
        newArray.push(callback(this[i]))
    }
    return newArray;
}
//polyfill for filter
Array.prototype.myFilter =  function(callback)
{
    let newArray=[];
    for(let ar of this)
    {
        if(callback(ar))
        {
            newArray.push(ar)
            // console.log(ar)
        }
    }
    return newArray;
}

//polyfill for reduce
Array.prototype.myReduce = function(callback,initial)
{
    if(this.length==0)
    {
        throw new TypeError("Reduce of empty array with no initial value")
    }
    else{
    let preval = initial;
    for(let i=preval?0:1;i<this.length;i++) //if intital value is not there then we will start from 1st index
    {
       preval= callback(preval?preval:this[0],this[i],i,this); //if initial value is not avialable then we will starts from 1st value
    }
    return preval;
    }
}

let tempar = ar.myMap((val)=>val<4)
console.log(tempar)

let temFilter = ar.myFilter((val)=>val<4)
console.log(temFilter)

let tempReduce = ar.myReduce((car,val)=>val*car)
console.log(tempReduce)


//  console.log(ray.reduce((va,d)=>{return va+d}))