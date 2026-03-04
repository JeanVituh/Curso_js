let VarA = 'A'; // b
let VarB = 'B'; // c
let VarC = 'C'; // a
const temp = VarA;

VarA = VarB;
VarB = VarC;
VarC = temp;


console.log(VarA,VarB,VarC)
