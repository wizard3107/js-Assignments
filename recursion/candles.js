/*
Description

Betty loves candies, so she went to the store to buy some. She has some coins C and she wants to spend all of them. The store has N distinct candies each having some cost.Find and display the unique combinations  of costs in which she can buy candies such that the sum of cost of all the candies is equal to number of coins she has.

Two combinations are unique if the frequency of at least one of the chosen candies is different.

The input array is sorted in ascending order.


Input
Input Format

The first line contains the number of distinct candies N and the amount of coins C that Betty has.

The second line contains the cost of each candy.

Constraints

1<= N <= 100

1<= C <= 30

1<= cost[i] <= 50


Output
Display all the distinct ways in which Betty can buy the candies such that the sum of cost of all candies she buys is equal to the number of coins in lexicographically increasing order. If no combinations are possible print -1.


Sample Input 1 

5 10
2 4 4 6 8
Sample Output 1

2 4 4
2 8
4 6

Hint

In the given test case the unique combinations of costs are : (2 + 4 + 4) , (2 + 8) and (4 + 6), all the other combinations will be repetitions of these three combinations

*/

function runProgram(input) {
  // Write code here
}
if (process.env.USERNAME === "Ashish Singh") {
  runProgram(`5 10
  2 4 4 6 8`);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}