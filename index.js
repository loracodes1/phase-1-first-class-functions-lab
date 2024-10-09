// Code your solution in this file!
const returnFirstTwoDrivers = function() {
    const driversArray = ['Antonia', 'Nuru', 'Amari', 'Mo']; 
    return driversArray.slice(0, 2); 
};

console.log(returnFirstTwoDrivers()); 


const returnLastTwoDrivers = function() {
    const driversArray = ['Antonia', 'Nuru', 'Amari', 'Mo'];
    return driversArray.slice(-2); 
};

console.log(returnLastTwoDrivers()); 

 const  selectingDrivers = ([returnFirstTwoDrivers, returnLastTwoDrivers])

 const createFareMultiplier = function(multiplier) {
    return function(fare) {
        return fare * multiplier;
    };
};

const fareQuadrupler = createFareMultiplier(4);
console.log(fareQuadrupler(5)); // => 20

const fareDoubler = createFareMultiplier(2);

// Example:
console.log(fareDoubler(10)); // => 20

const fareTripler = createFareMultiplier(3);

// Example:
console.log(fareTripler(10)); // => 30

 


