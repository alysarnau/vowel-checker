let wordToCheck = document.getElementById("word").value
let checkButton = document.getElementById("submitBtn")
let displayDiv = document.getElementById('results')

function vowelCounter() {
    strToCheck = document.getElementById("word").value
    let counter = 0;
    // create regex to check against
    let vowels = new RegExp(/[aeiou]/)
    // go through each char in string
    for (let char in strToCheck) {
        // if vowel, add to counter
        if (vowels.test(strToCheck.charAt(char))) {
            ++counter;
        }
    }
    console.log('total vowels: ', counter)    
    displayDiv.innerText = `There are ${counter} total vowels in "${strToCheck}".`   
}

checkButton.addEventListener('click', vowelCounter)