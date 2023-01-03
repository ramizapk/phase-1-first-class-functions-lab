// Code your solution in this file!

function returnFirstTwoDrivers(drivers) {
    drivers = drivers.slice(0,2);
    return drivers;
}


function returnLastTwoDrivers(drivers){
    drivers = drivers.slice(-2);
    return drivers;
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(num){
    return function (){
       return num ** 2;
    }
}

function fareDoubler(num){
    return num *2;

}

function fareTripler(num){
    return num * 3;
}

function selectDifferentDrivers(drivers, callBack){
    return callBack(drivers)
}