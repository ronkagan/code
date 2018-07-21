//Return II
/*
1.
It's your job to calculate two more numbers for each order:

A sales tax of 6% needs to be calculated for every full order. This should be based on the subtotal.
The total, which is the subtotal plus tax, should also be computed.
Let's start with calculating the tax. Under the getSubTotal() function, create a function expression using the variable const named getTax. This function will take one parameter named itemCount.

2.
Inside the getTax() function, call your getSubTotal() function and pass it the argument itemCount to get the subtotal, and then multiply the returned value by 6% (0.06). Make sure to return the result of this operation.

3.
Nice work! Now that you calculated the tax, declare another function named getTotal() beneath the getTax() function. The getTotal() function should take in one parameter named itemCount.

Inside the getTotal() function's block, add the subtotal to the tax, then return the result.

4.
On the last line of the program, call the getTotal() function with the argument orderCount inside of a console.log() statement to view the result.

Way to go! You wrote four functions from scratch and even passed them into each other. That's incredible!
*/

let orderCount = 0;

const takeOrder = (topping, crustType) => {
  orderCount++;
  console.log('Order: ' + crustType + ' pizza topped with ' + topping);
};

takeOrder('mushroom', 'thin crust');
takeOrder('spinach', 'whole wheat');
takeOrder('pepperoni', 'brooklyn style');

const getSubTotal = (itemCount) => {
  return itemCount * 7.5;
};

const getTax = (itemCount) => {
  return (getSubTotal(itemCount) * 0.06);
};

const getTotal = (itemCount) => {
  return(getSubTotal(itemCount) + getTax(itemCount));
};

console.log(getSubTotal(orderCount));
console.log(getTotal(orderCount));