// Inicializar variables
let has_license = true;
let has_space = false;
let has_experience = true;

// Calcular condiciones
let can_sell_regular_pet = (has_license || has_experience) && has_space;
let can_sell_exotic_pet = (has_license && has_experience) && has_space;
let cannot_sell_any_pet = (!has_license && !has_experience) || !has_space;

// No borrar las líneas de abajo
console.log("Can sell regular pet:", can_sell_regular_pet)
console.log("Can sell exotic pet:", can_sell_exotic_pet)
console.log("Cannot sell any pet:", cannot_sell_any_pet)