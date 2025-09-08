let inp = 64;
let wind = parseInt(inp);
let condition = "sunset";

//condicion

if (wind <= 8){
    condition = "Calm";

}else if (wind >= 8 && wind <= 31){
    condition = "Breeze";

}else if (wind >= 32 && wind <= 63 ){
    condition = "Gale";
}else{

    condition = "Storm";
}

console.log(condition);