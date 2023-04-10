 const lista = process.argv.slice(2);

 console.log('============ for ============');

 for(let i = 0; i < lista.length; i++){
    console.log(`posição ${i} valor ${lista[i]}`);
 }

 console.log('============ while ============'); 
let indiceWhile = 0;
 while(indiceWhile < lista.length){
    console.log(`posição ${indiceWhile} valor ${lista[indiceWhile]}`);
    indiceWhile++;
 }
 console.log('============ do while ============'); 
let indiceDoWhile = 0;
do{
    console.log(`posição ${indiceDoWhile} valor ${lista[indiceDoWhile]}`);
    indiceDoWhile++;
}while(indiceDoWhile < lista.length)

 console.log('============ for of ============'); 
let indiceForOf = 0;
 for(const valor of lista){
    console.log(`posição ${indiceForOf} valor ${valor}`);
    indiceForOf++;
 }