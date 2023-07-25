const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended : true}));

app.get("/",function(req,res){
    res.sendFile(__dirname + "/Main Page/Main Page.html");
})

app.get("/calculator",function(req,res){
    res.sendFile(__dirname + '/Calculator/Calculator.html');
})

app.get("/bmicalculator",function(req,res){
    res.sendFile(__dirname + '/BMI CALCULATOR/bmicalculator.html');
})


app.post("/calculator",function(req,res){
    const num1 = parseFloat(req.body.num1);
    const num2 = parseFloat(req.body.num2);
    const operator = req.body.operator;
  
    let result;
    switch (operator) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        result = num1 / num2;
        break;
      default:
        result = 'Invalid operator';
    }
  
    // Respond with the result
    res.send(`<h1>Result: ${result}</h1><a href="/calculator">Back to Calculator</a>`);
})

app.post("/bmicalculator",function(req,res){
    const num1 = parseFloat(req.body.num1);
    const num2 = parseFloat(req.body.num2);
    const result = (num1/Math.pow(num2,2)).toFixed(2);
    res.send(`<h1>Result: ${result}</h1><a href="/bmicalculator">Back to Bmi Calculator</a>`);
})


app.listen(port,()=>{
    console.log(`Server running on ${port}`);
})