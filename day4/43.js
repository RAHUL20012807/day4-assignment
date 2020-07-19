var math = prompt("give operation add,sub,mul,div,sqrt or percent");


switch (math){

    case "mul":
        var num1 = parseInt(prompt("Enter your first number here:"));
        var num2 = parseInt(prompt("Enter your second number here:"));

        result = num1 + " times "+ num2 + " equals " + (num1 * num2) + ".";
    break;
    
    case "div":
        var num1 = parseInt(prompt("Enter your first number here:"));
        var num2 = parseInt(prompt("Enter your second number here:"));

        result = num1 + " divided by " + num2 + " equals " +( num1 / num2) + ".";
    break;
    
    case "add":
        var num1 = parseInt(prompt("Enter your first number here:"));
        var num2 = parseInt(prompt("Enter your second number here:"));

        result = num1 + " plus " + num2 + " equals " +( num1 + num2) + ".";
    break;
    
    case "sub":
        var num1 = parseInt(prompt("Enter your first number here:"));
        var num2 = parseInt(prompt("Enter your second number here:"));

        result = num1 + " minus " + sqrtnum2 + " equals " + (num1 - num2) +".";
    break;
    
    case "percent":
        var num1 = parseInt(prompt("Enter your first number here:"));
        var num2 = parseInt(prompt("Enter your second number here:"));

        result = (num1/100)*num2;
    break;

    case "sqrt":
        var num = parseInt(prompt("Enter a nummber:"));
        result = Math.sqrt(num);

    break;
    
    default:
        result = "Please enter multiply, divide, add, or subtract."
    break;
    }

    console.log(result);
