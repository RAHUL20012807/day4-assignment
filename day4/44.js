var sales = parseInt(prompt("Enter the sales made by employee:"));

if(0 <= sales <= 5000){
    num = (2/100)*sales;
    
}
else if (5000 < sales <= 10000){
    num = (5/100)*sales;
    
}
else if (10000 < sales <= 20000){
    num = (7/100)*sales;
    
}
else{
    num = (10/100)*sales;
    
}
console.log(num);