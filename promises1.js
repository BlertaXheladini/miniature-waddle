//create a function that returns a promise with resolved text to 'I'm resolved'

//add an parameter to your function, then you will use it on condition
//if its true resolve if its false reject
//plz console.log() both values

function testPromise(value) {
    return new Promise((resolve, reject) => {
        if (value) {
            resolve('Kayo is healthy');
        }
            reject('Kayo is sick');
    });
}

testPromise(true)
    .then((data) => {
        console.log("i have n cakes and im happy"); 
    })
    .catch((err) => {
        console.log("there is no cake and im sad"); 
});














       