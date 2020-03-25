


let collection = document.getElementById('word-collection');
let input = document.getElementById('input');
let addButton = document.getElementById('add-button');
let clearButton = document.getElementById('clear-button');


let testsPassed = [];


// this is a group of four tests that assert certain behavior
function runTests() {
    // check that adding input and clicking add will add a word

    input.value = 'test1';
    addButton.click();
    testsPassed.push(collection.innerHTML === 'test1');

    // check that adding another piece of input will add a second word concatenated with ", "

    input.value = 'test2';
    addButton.click();
    testsPassed.push(collection.innerHTML === 'test1, test2');

    // check that clear button exists
    testsPassed.push(clearButton !== null)

    // check that clicking clear will remove all items from collection
    if(clearButton !== null){
        clearButton.click();
        testsPassed.push(collection.innerHTML === '');
    }


    document.getElementById('test-results').innerHTML = testsPassed.join('/')

}


document.getElementById('test-button').onclick = runTests;
