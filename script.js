let letterSearch = ["Banan" , "Olma" , "Anor" , "Uzum" , "Ananas" , "Apelsin"]

let n_elements = [] 
let elements = []

for (ele of  letterSearch){
    if (ele.includes(`n`)){
        n_elements.push(ele)
    }
    else {
        elements.push(ele)
    }
}
console.log(n_elements , `n harfi ishtirok etgan sozlar`);
console.log(elements , `n harfi ishtirok etmagan sozlar`);

