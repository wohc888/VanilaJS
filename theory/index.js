const grandFam = {
    grandMa : "A",
    grandPa : "B",
    Ma : {
        name: "C",
        son: {
            name: "E",
            grandChild1: "G",
            grandChild2: "H"
        },
        daughter: {
            name: "F",
            grandChild3: "I"
        }
    },
    Pa : {
        name: "D",
        son: {
            name: "E",
            grandChild1: "G",
            grandChild2: "H"
        },
        daughter: {
            name: "F",
            grandChild3: "I"
        }
    }
}
 
console.log(grandFam);

console.log(grandFam.Ma);

console.log(grandFam.Ma.son);