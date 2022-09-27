let wordToCheck = document.getElementById("word").value
let checkButton = document.getElementById("checkButton")
let displayDiv = document.getElementById('results')

function vowelCounter() {
    strToCheck = document.getElementById("word").value
    if (strToCheck < 1) {
        alert(`Please enter a word to test.`)
        return
    }
    let counter = 0;
    let vowels = new RegExp(/[aeiou]/)
    for (let char in strToCheck) {
        if (vowels.test(strToCheck.charAt(char))) {
            ++counter;
        }
    }
    console.log('total vowels: ', counter)    
    if (counter > 1) {
        displayDiv.innerText = `There are ${counter} total vowels in "${strToCheck}".`   
    } else {
        displayDiv.innerText = `There is ${counter} total vowel in "${strToCheck}".`   
    }
}

checkButton.addEventListener('click', vowelCounter)