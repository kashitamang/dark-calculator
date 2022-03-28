// import functions
// grab DOM with getElementById
const addInput1El = document.getElementById('add-input-1')
const addInput2El = document.getElementById('add-input-2');
const addButtonEl = document.getElementById('get-sum-button');
const resultSumEl = document.getElementById('result-sum');
// add event listener 
addButtonEl.addEventListener('click', () => {
    // cool zone
    // - on click, the two numbers get added and are displayed
    // - get the two numbers from their inputs
    const num1 = addInput1El.value;
    const num2 = addInput2El.value;

    // - add them together
    // this is hard to remember!
    // i don't want to have to repeat this recipe every single time--let's write a function!
    const sum = add(num1, num2);

    // - change the textContent to the sum
    resultSumEl.textContent = ("calculation complete, your sum is: ") + sum;
});

// declaration: i describe the recipe
function add(someNumber, someOtherNumber) {
    return Number(someNumber) + Number(someOtherNumber);
}
