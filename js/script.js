console.warn('script 1');


const bikes = [
    {
        type: "road bike",
        weight: 20,
    },
    {
        type: " mountain bike",
        weight: 13,
    },
    {
        type: " gravel bike",
        weight: 11,
    },
    {
        type: " e-bike",
        weight: 7,
    }
];
let minorBicicle = bikes[0];
for (let i = 1; i < bikes.length; i++) {
    
    if (bikes[i].weight <  minorBicicle.weight) {
        minorBicicle = bikes[i]
    }
    
}
console.log(`la ${minorBicicle.type} ha il minor peso che è equivalente a ${minorBicicle.weight}kg`)