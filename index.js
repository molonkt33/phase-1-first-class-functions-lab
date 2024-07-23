// index.js

// Function to return the first two drivers
function returnFirstTwoDrivers(drivers) {
  return drivers.slice(0, 2);
}

// Function to return the last two drivers
function returnLastTwoDrivers(drivers) {
  return drivers.slice(-2);
}

// Array of functions to select drivers
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// Function to create a fare multiplier
function createFareMultiplier(multiplier) {
  return function(fare) {
    return fare * multiplier;
  };
}

// Function to double the fare
const fareDoubler = createFareMultiplier(2);

// Function to triple the fare
const fareTripler = createFareMultiplier(3);

// Function to select different drivers based on the passed function
function selectDifferentDrivers(drivers, selectorFunction) {
  return selectorFunction(drivers);
}
