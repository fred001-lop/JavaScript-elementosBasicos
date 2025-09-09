let age = parseInt(10);
let height = parseInt(140);
let has_adult  = true;

let result;


if (age < 12){
    result = "Sorry, you're too young";
}else if(height <= 150){
    result = "Sorry, you're not tall enough";
}else if(age < 15 && !(has_adult)){
    result = "Sorry, you need an adult with you";
}else if(age < 15 && has_adult){
    result = "You can ride with adult supervision!";
}else{
    result = "You can ride by yourself!";
}

console.log(result);