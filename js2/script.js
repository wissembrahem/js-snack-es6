console.warn('script 2');

const classifica = [
    {
        squadra: "Roma",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        squadra: "Milan",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        squadra: "Inter",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        squadra: "Napoli",
        puntiFatti: 0,
        falliSubiti: 0
    }
]

function randomPoints(min,max) {
    return Math.floor(Math.random() * (min, max))
}

for (let i = 0; i < classifica.length; i++) {
    classifica[i].puntiFatti = randomPoints(0,60);
    classifica[i].falliSubiti = randomPoints(0,30)
    
}
console.log(classifica)
