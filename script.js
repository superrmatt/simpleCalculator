$(document).ready(function() {

      var firstNumber = "",
          secondNumber = "",
          operator = "",
          result = 0,
          operatorClicked = false;
    
      $(".btn").on("click", function(e){
    
        //get button value
        var getValue = e.target.textContent;
        
        //determine if clear has been clicked
        if(getValue === "clear"){
          clear();
          return;
        }
    
        //determine if equal has been clicked
        if(getValue === "="){
          doMath();
          $("#result").append(result);
          return;
        }
    
        //determine if operator has been clicked
        if(getValue === "÷" || getValue === "+" || getValue === "×" || getValue === "^" || getValue === "−"){
          operatorClicked = true;
          $("#operator").append(getValue);
          operator = getValue;
          return;
        }
        
        //append number to appropriate number string
        if(operatorClicked === false){
          firstNumber = firstNumber + getValue;
          $("#first-number").append(getValue);
        }else {
          secondNumber = secondNumber + getValue;
          $("#second-number").append(getValue);
        }
        
    
      });
    
      //when clear button is clicked
      function clear(){
        firstNumber = "";
        secondNumber = "";
        result = 0;
        operator = "";
        operatorClicked = false;
        $("#first-number").empty();
        $("#second-number").empty();
        $("#operator").empty();
        $("#result").empty();
      }
    
      //performs calculations
      function doMath(){
        var firstInteger = parseInt(firstNumber),
            secondInteger = parseInt(secondNumber);
        //do math stuff
        switch(operator) {
          case "÷": 
            result = firstInteger / secondInteger; 
            break;
    
          case "+":
            result = firstInteger + secondInteger;
            break;
    
          case "×":
            result = firstInteger * secondInteger;
            break;
    
          case "^":
            result = Math.pow(firstInteger, secondInteger);
            break;
    
          case "−":
            result = firstInteger - secondInteger;
            break;
    
        }
        
      }
    
    
    });    