//Return
/*
Using console.log() as the result of a function isn't the best use of a function.
The purpose of a function is to take some input, perform some task on that input, then return a result.

Now that we have the pizza orders, you want to add them up to find the cost of the pizzas for the check. Let's imagine that each pizza is $7.50, no matter the topping and crust type.

We will need to do three things to write this in JavaScript:

Create a variable to hold the number of pizzas ordered.
Whenever a pizza is ordered, add one to the number of pizzas ordered.
Take the total number of pizzas and multiply them by 7.5, since each pizza is $7.50.

1. Now that we have the pizza orders, you want to add them up to find the cost of the pizzas for the check. Let's imagine that each pizza is $7.50, no matter the topping and crust type.

We will need to do three things to write this in JavaScript:

Create a variable to hold the number of pizzas ordered.
Whenever a pizza is ordered, add one to the number of pizzas ordered.
Take the total number of pizzas and multiply them by 7.5, since each pizza is $7.50.
Begin by creating a variable named orderCount set equal to 0 at the top of your code.

2. Inside the takeOrder() function, add 1 to the value of orderCount each time takeOrder() is called.

3. Now it's time to calculate the subtotal of the pizzas. This is the perfect job for a function.

On a new line, beneath the closing brackets of the takeOrder function, declare a new function named getSubTotal that has one parameter named itemCount.

4. Inside the getSubTotal() function's block, use return to output the itemCount multiplied by 7.5.

5. On the last line of your program, after the takeOrder() function calls, call the getSubTotal() function inside a console.log statement.

getSubTotal has a parameter that represents the number of items ordered. Pass in the orderCount as an argument when making the function call.

Nice work! Now you can see the orders taken and how much it costs.
*/
let orderCount = 0;
const takeOrder = (topping, crustType) => {
  orderCount++;
  console.log('Order: ' + crustType + ' pizza topped with ' + topping);
};

const getSubTotal = (itemCount) => {
  return (itemCount * 7.5);
};


takeOrder('mushroom', 'thin crust');

console.log(getSubTotal(orderCount));