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
