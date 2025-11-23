// Task 12: Welcome Message
function task12() {
    const userName = prompt('Please enter your name:');
    if (userName) {
        const welcomeMessage = 'Hello, ' + userName + '! Welcome to the Lab.';
        alert(welcomeMessage);
        document.write('<h3>' + welcomeMessage + '</h3>');
    }
}
task12();

// Task 13: Eligibility Checker
function task13(age) {
    // If-Else Operator
    let statusIfElse;
    if (age >= 18) {
        statusIfElse = 'Eligible to Vote (If-Else).';
    } else {
        statusIfElse = 'Not Eligible (If-Else).';
    }
    console.log(Age : );

    // Ternary Operator
    const statusTernary = (age >= 18) ? 'Eligible to Vote (Ternary).' : 'Not Eligible (Ternary).';
    console.log(Age : );
}
task13(20);
task13(16);

// Task 14: Array Methods Practice
function task14() {
    const numbers = [10, 25, 4, 30, 15];

    // map: Double each number
    const doubled = numbers.map(num => num * 2);
    console.log('Map (Doubled):', doubled); // [20, 50, 8, 60, 30]

    // filter: Get numbers greater than 20
    const filtered = numbers.filter(num => num > 20);
    console.log('Filter (> 20):', filtered); // [25, 30]

    // reduce: Sum all numbers
    const sum = numbers.reduce((accumulator, num) => accumulator + num, 0);
    console.log('Reduce (Sum):', sum); // 84

    // forEach: Log each item with its index
    console.log('forEach:');
    numbers.forEach((num, index) => {
        console.log(Index : );
    });
}
task14();
