const happyBday = [];
const bdays = ["Guadalupe", "Ollie", "Aki"]
function writeCards(bdays){
    for (let i = 0; i<bdays.length; i++){
        happyBday.push(`Thank you, ${bdays[i]}, for the wonderful surprise gift!`)
        console.log(happyBday);
    }
    return happyBday;
}

function countDown(n){
    while(n >= 0){
        console.log(n)
        n--
    }
    return n;
}
countDown(10);