/* eslint-disable indent */
// 1. What is the Big O for this?
// 1) Determine the Big O for the following algorithm: You are sitting in a room with 15 people. You want to find a playmate for your dog, preferably of the same breed. So you want to know if anyone out of the 15 people have the same breed as your dog. You stand up and yell out, who here has a golden retriever and would like to be a playdate for my golden. Someone yells - "I do, be happy to bring him over"
//function sameBreed(myBreed, person)
//[1,2,3,4....,15] does one of these people have the same breed of dog as you?
//if(array.includes(breed)) return person with that breed of dog
//else(return false)
//No matter how large the group of people, you will only yell out one time, and you will receive one answer each time (either "yes" or "no").

//answer:  O(1)

// 2) Determine the Big O for the following algorithm: You are sitting in a room with 15 people. You want to find a playmate for your dog who is of the same breed. So you want to know if anyone out of the 15 people have the same breed as your dog. You start with the first person and ask him if he has a golden retriever. He says no, then you ask the next person, and the next, and the next until you find someone who has a golden or there is no one else to ask.
//this is just a for loop.
//if(person.dog_breed === myBreed) {
//return person
//}
//return false
//This will grow as a linear function.

//answer: O(n).


// 2. Even or odd
// What is the Big O of the following algorithm? Explain your answer
function isEven(value) {
    if (value % 2 === 0) {
        return true;
    }
    else {
        return false;
    }
}
//You are only ever checking if the current value is even or not, so the runtime shouldn't change as value increases.

//Answer: O(1)

// 3. Are you here?
// What is the Big O of the following algorithm? Explain your answer

function areYouHere(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        const el1 = arr1[i];
        for (let j = 0; j < arr2.length; j++) {
            const el2 = arr2[j];
            if (el1 === el2) return true;
        }
    }
    return false;
}

//This code requires a loop over two separate loops, and the nested loop restarts with each iteration of the parent loop.  Therefore, this must have a polynomial runtime.

//Answer: O(n^2) 

// 4. Doubler
// What is the Big O of the following algorithm? Explain your answer

function doubleArrayValues(array) {
    for (let i = 0; i < array.length; i++) {
        array[i] *= 2;
    }
    return array;
}

//This function will run x times where x is the length of the array.  Therefore this function will scale linearly with respect to array.length.

//Answer:  O(n)

// 5. Naive search
// What is the Big O of the following algorithm? Explain your answer

function naiveSearch(array, item) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === item) {
            return i;
        }
    }
}

// This also runs x times through the array where x is the length of the array so the length of the array directly correlates to the runtime of the algorithm

// Answer: O(n)

// 6. Creating pairs:
// What is the Big O of the following algorithm? Explain your answer

function createPairs(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            console.log(arr[i] + ", " + arr[j]);
        }
    }
}

//This code requires a loop over two separate loops, and the nested loop restarts with each iteration of the parent loop.  Therefore, this must have a polynomial runtime.

// Answer: O(n^2)

// 7. Compute the sequence
// What does the following algorithm do? What is its runtime complexity? Explain your answer

function compute(num) {
    let result = [];
    for (let i = 1; i <= num; i++) {

        if (i === 1) {
            result.push(0);
        }
        else if (i === 2) {
            result.push(1);
        }
        else {
            result.push(result[i - 2] + result[i - 3]);
        }
    }
    return result;
}

// Gives the fibonacci sequesnce up to the nth postion given n
// As num increases the runtime should increase at the same rate

// O(n)

// 8. An efficient search
// In this example, we return to the problem of searching using a more sophisticated approach than in naive search, above. Assume that the input array is always sorted. What is the Big O of the following algorithm? Explain your answer

function efficientSearch(array, item) {
    let minIndex = 0;
    let maxIndex = array.length - 1;
    let currentIndex;
    let currentElement;

    while (minIndex <= maxIndex) {
        currentIndex = Math.floor((minIndex + maxIndex) / 2);
        currentElement = array[currentIndex];

        if (currentElement < item) {
            minIndex = currentIndex + 1;
        }
        else if (currentElement > item) {
            maxIndex = currentIndex - 1;
        }
        else {
            return currentIndex;
        }
    }
    return -1;
}
// problem gets cut in half each time through the while loop so the runtime is only slightly increased with larger input
// Answer: O(log(n))

// 9. Random element
// What is the Big O of the following algorithm? Explain your answer

function findRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

//The runtime for this function will always be 1 because it only performs one operation, irregardless of the size of the array.

//Answer: O(1).

// 10. What Am I?
// What does the following algorithm do? What is the Big O of the following algorithm? Explain your answer

function isWhat(n) {
    if (n < 2 || n % 1 !== 0) {
        return false;
    }
    for (let i = 2; i < n; ++i) {
        if (n % i === 0) return false;
    }
    return true;
}

//This function is checking whether a number is prime.
//At best case scenario, the function runs once and we return false on line 168.  Worst case is that we iterate through the entire loop, then return true.  The average case is that we find a divisor in the midpoint between 2 and n.  In this case, the runtime should only increase directly with respect to the size of the number.

//Answer:  O(n).


function towerOfHanoi(
    depth,
    source = 0,
    temp = 1,
    dest = 2,
    status = [Array.from(Array(depth), (_, i) => depth - i), [], []]
) {
    if (depth === 1) {
        console.log(`Moved ${source} to ${dest}`);
        status[dest].push(status[source].pop());
        console.log(status);
    }
    towerOfHanoi(depth - 1, source, temp, dest, status)
    towerOfHanoi(1, source, dest, temp, status)
    towerOfHanoi(depth - 1, temp, dest, source, status)
}

// 3 disks: 7
// 4 disks: 15
// 5 disks: 31
// Big O: O(2^n)

// 12.1
function countingSheep(sheep) {
    let message = ''
    for (let i = sheep; i <= sheep && i >= 0 ; i--) {
        if (i === 0) {
            message += 'All sheep jumped over the fence'
        }else{
            message += `${i}: Another sheep jumps over the fence `
        }
    }
    return message
}
// BigO: O(n)

// 12.2
function powerCalculator(base, power) {
    let num = 1
    for (let i = 1; i <= power; i++) {
        num *= base
    }
    return num
}
// BigO: O(n)

// 12.3
function reverseString(string) {
    let reverse = ''
    for (let i = string.length - 1; i <= string.length && i >= 0; i--) {
        reverse += string[i]
    }
    return reverse
}
// BigO: O(n)

// 12.4
function triangleNum(num) {
    let total = 0
    for (let i = 1; i <= num; i++) {
        total += i
    }
    return total
}
// BigO: O(n)

// 12.5
function stringSplitter(string, separator) {
    return string.split(separator)
}
// BigO: O(n)

// 12.6
function fibonacci(num) {
    let result = [];
    for (let i = 1; i <= num; i++) {

        if (i === 1) {
            result.push(0);
        }
        else if (i === 2) {
            result.push(1);
        }
        else {
            result.push(result[i - 2] + result[i - 3]);
        }
    }
    return result;
}
// BigO: O(n)

// 12.7
function factorial(num) {
    let total = 0
    for (let i = 1; i <= num; i++) {
        total *= i
    }
    return total
}
// BigO: O(n)

// Recursive versions
function countingSheep(n) {
    if (n == 0) {
        return 'All sheep jumped over the fence'
    }
    return `${n}: Another sheep jumped over the fence ` + countingSheep(n - 1)
}
// O(n)

function powerCalculator(n, m) {
    if (m == 1) {
        return n
    }
    return n * powerCalculator(n, (m - 1))
}
// O(n)

function reverseString(string) {
    if (string === '') {
        return ''
    }
    const newCharacter = string[0]

    return reverseString(string.slice(1)) + newCharacter
}
// O(n)

function triangularNumber(n) {
    if (n == 1) {
        return 1
    }
    return n + triangularNumber(n - 1)
}
// O(n)

function stringSplit(string, seperator) {
    
    if (string === '') {
        return ['']
    }
    const newChar = string[0]
    if (newChar === seperator) {
        return ['', ...stringSplit(string.slice(1), seperator)]
    }
    return [newChar + stringSplit(string.slice(1), seperator)]
}
// O(n)

function fibonacci(n) {
    counter++
    if (n == 0) {
        return 0
    } else if (n == 1) {
        return 1
    }
    return fibonacci(n - 1) + fibonacci(n - 2)
}
function fibonacciSequence(n) {
    for (let i = 1; i <= n; i++) {
        console.log(fibonacci(i))
    }
}
// O(2^n)

function factorial(n) {
    if (n == 1) {
        return 1
    }
    return n * factorial(n - 1)
}
// O(n)