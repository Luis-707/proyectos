var i = 1;

while(i <= 100) {

   
    var divisibleByThree = i % 3 == 0;
    var divisibleByFive = i % 5 == 0;


    if (divisibleByThree && divisibleByFive) {
        console.log(i + " fizzbuzz<br>");
    } else if (divisibleByThree) {
        console.log(i + " fizz<br>");
    } else if (divisibleByFive) {
        console.log(i + " buzz<br>");
    } else {
        console.log(i + "<br>");
    }

    i++; 
}
