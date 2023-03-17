var priceOfPhone = 42000,bankBalance = 20000,creditLimit = 60000;

if(priceOfPhone<bankBalance){
    console.log("Process Payment");
}else if(priceOfPhone<creditLimit){
    console.log("Buy through credit card");
}else{
    console.log("Sorry no suffiecient balance");
}

console.log("transaction over!!!")

var chocolate = 'Dairy Milk',quantity;
switch(chocolate){
    case 'Dairy Milk':
        quantity = 5;
        break;
    case 'Hersheys':
        quantity = 10;
        break;
    default:
        quantity = 2;
}

console.log(quantity)