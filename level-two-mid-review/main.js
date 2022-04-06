function oneWordOnly(words){
    return words.filter(function(word){
        return !word.includes(" ")
        // if (word.includes(" ")){
        //     return false;
        // } else {
        //     return true;
        // }
    })
}

console.log(oneWordOnly(["bird", "bird dog", "humming bird", "dog"])) //=>["bird", "dog"]
console.log(oneWordOnly(["bird", "bird dog", "humming bird", "dog", "word"])) //=>["bird", "dog", "word"]