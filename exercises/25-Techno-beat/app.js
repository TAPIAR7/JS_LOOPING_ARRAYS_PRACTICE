function lyricsGenerator(arr){
    let song = '';
    let counter = 0;
    for (let index = 0; index < arr.length; index++) {
        if (arr[index] === 1) {
            counter += 1;
            if (counter === 3) {
                song += "Drop the base !!!Break the base!!! ";
            }
            else {
                song += "Drop the base ";
            }
        }
        else{
            song += "Boom "
            counter = 0;
        }
        
    }
    return song;
}
// test Data
console.log(lyricsGenerator([0,0,1,1,0,0,0]))
console.log(lyricsGenerator([0,0,1,1,1,0,0,0]))
console.log(lyricsGenerator([0,0,0]))
console.log(lyricsGenerator([1,0,1]))
console.log(lyricsGenerator([1,1,1]))