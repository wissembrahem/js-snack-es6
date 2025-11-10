const bikes = [
    {
        type: "road bike",
        weight: 9,
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
for (let i = 0; i < bikes.length; i++) {
    let minorBicicle = bikes[0];
    if (bikes[i].weight <  minorBicicle.weight)
    console.log(`la ${bikes[i].type} ha il minor peso che è equivalente a ${bikes[i].weight}kg`)
}