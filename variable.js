//Conditional statment
doing somthing based on certain condition
Ex. if, else if, else, switch statement
syntax { If + Condition

  let salary=200
If (salary>20,000) {
console.log("you are eligible for a loan");
else if (salary>1000) {
  console.log("the condition is eliglble for a loan")
} else {
  console.log("you are no eligble for a loan")
}
  }
  let creditScore=700;
  let salary=2000;
  let age=25;
  // business rule to loan only with condition 
  //salary> 3000; score >650, age >28.
  //if credit score is > 350, age should be >19 and salary>=2000
  //to write this condition
  const loanApproval= (creditScore, salary, age) =>{
    if (creditScore >= 750 && salary >=2000 && age>=18) {
      console.log("Loan Approved");
    }else if (creditScore>=650 && salary>=3000 && age>=28){
      console.log("Loan conditionally approved");
    }else {
      console.log("Loan Denied");
    }
    };
  loanApproval(680, 4000, 48);  

  2. Switch statement

  const checkDay = (day)=>{
    switch(day) {
      case "Sunday":
      console.log("Weekend");
      break;
      case "Saturday":
      console.log("Weekend");
      break;
      case "Monday":
      console.log("Weekday");
      break;
      case "Tuesday":
      console.log("Weekday");
      break;
      case "Wednesday":
      console.log("Weekday");
      break;
      case "Thursday":
      console.log("Weekday");
      break;
      case "Fridayy":
      console.log("Weekday");
      break;
      default:
      console.log("Invalid Date");
       }
  }
  // combining
  const checkDay = (day)=>{
    switch(day) {
      case "Sunday":
      case "Saturday":
      console.log("Weekend");
      break;
      case "Monday":
      case "Tuesday":
      case "Wednesday":
      case "Thursday":
      case "Fridayy":
      console.log("Weekday");
      break;
      default:
      console.log("Invalid Date");
       }
  }
  //Ternary operator
  let age2 =20;
  let canDrink = age2 >= 21 ? "yes" : "no";
  CSSConditionRule.log(canDrink):

  //Handling errors in JS
  //try, catch, finally block
  //Ex
  const divedFun= (a,b)=> {
    return a / b;
  }
  console.log(divideFun(10,0));

  const divedFun= (a,b)=> {
    try {
      if (b===0) {
        throw new Error ("cannot divide by zero");
              }
              console.log(a / b);
            } catch(error) {
              console.log(error);
            } finally {
              console.log("This will always run");
            }
            }
    }
  }
  // finally is not commonly used
  //API: backend API is requested when loggedin to Zafrino
  //to check autorization logic

  // Next class: loops, itration & working with numbers