let par = "Lorem ipsum dolor sit amet consectetur adipiscing elit Curabitur eget bibendum turpis Curabitur scelerisque eros ultricies venenatis mi at tempor nisl Integer tincidunt accumsan cursus"
let counts = {};

// your code here
for (let index = 0; index < par.length; index++) {
    if ((counts.hasOwnProperty(par[index].toLowerCase()) === false) && (par[index] != ' ')) {
        counts[par[index].toLowerCase()] = 1;
    }
    else {
        if (counts.hasOwnProperty(par[index].toLowerCase()) === true) {
        counts[par[index].toLowerCase()] += 1;
    }
    }
    
}

console.log(counts);