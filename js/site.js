function helloWorld() {
    alert("Hello World!");

}
//get the values from interface
function getValues() {
    //get values from page
    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;

    //parse into integers
    startValue = parseInt(startValue);
    endValue = parseInt(endValue);
    //alert("The start value: " + startValue);
    
    if (Number.isInteger(startValue) && Number.isInteger(endValue)) {
        let numbers = generateNumbers(startValue, endValue);
        //call display numbers
        displayNumbers(numbers);       

    } else {
        alert("You must enter a valid number");
    }
  
    

}

//generate numbers to start value to end value
function generateNumbers(startValue, endValue) {
    let numbers = [];

    for (let index = startValue; index <= endValue; index++) {
       numbers.push(index);
    }

    return numbers;
}

//Display the numbers and mark even number in bold
function displayNumbers(numbers) {
    let templateRows = ""
    for (let index = 0; index < numbers.length; index++) {
        let number = numbers[index];
        let className = "even";

        if (number % 2 == 0) {
            className == "even";
        } else {
            className = "odd";
        }
        templateRows += `<tr><td class="${className}">${number}</td></tr>`; 

    }
    document.getElementById("results").innerHTML = templateRows;
}