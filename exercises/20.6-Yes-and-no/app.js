let theBools = [0,1,0,0,1,1,1,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1];

//your code here

let wikiwoko = function(value){
    if (value === 1) {
        return 'wiki';
    } else {
        return 'woko';
    }
}

let newArray = theBools.map(wikiwoko);
console.log(newArray);