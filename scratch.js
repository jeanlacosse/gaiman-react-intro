let names = ['Jean-Luc', 'Liz'];

// let leadInstructor = names[0];
// let supportInstructor = names[1];




// equivalent code
// varialbe assignment inside out
// JS destructuring
// can be called anything
let [a, b] = names;

function getCohortInfo () {
    return ['jean-luc', 'liz', 'neil'];
};

// takes the return and places each array item as a variable already
let [lead, support, author] = getCohortInfo();


function useState(initialValue) {
    stateValue = initialValue;

    const setState = (val) => {
        stateValue = val;
        reRender()
    }

    return [stateValue, setState]
}
// use state returns an array


const cohortInfo = {
    leadInstructor: 'edan',
    supportInstructor: 'liz'
}

// destructured
// varialbes need to be named same thing as object keys "NOT tacos"
// takes the key names and assigns them to a variable of the same name
const { leadInstructor, supportInstructor } = cohortInfo

console.log('lead', leadInstructor)
console.log('support', supportInstructor)

// below is doing the same thing but creates teh object keys into useable variables from the react black box
import { useState, someOtherThing } from 'react'
