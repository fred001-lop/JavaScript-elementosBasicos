let n1 = parseInt(inp = 10);
let n2 = parseInt(inp = 222);

let op = '*';

let result = 0;


if (op == '+'){
    result = n1 + n2;
}else if(op == '-'){
    result = n1 - n2;
}else if(op == '/'){
    result = n1 / n2;
}else if(op == '*'){
    result = n1 * n2;
}

console.log(result);