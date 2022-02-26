/*
Description:

As you already know,Betty and Archie are best friends and since Archie's birthday is in one week, Betty wants to buy a present for him. But since Betty has no money, she went to the ATM to withdraw some amount. The ATM has N different type of coins and there is an unlimited amount of each type of coin in the ATM. Betty wants to minimize the  number of coins she withdraws and also make sure that the sum of coins is exactly equal to the price of the present she want to buy.

Input:
Input Format

The first line contains the number of types of coins N and the price of the present P

The second line contains N numbers denoting the value of each coin

Constraints:

1<=N<=100

1<=P<=10^6

1<=coin[i]<=10^6


Output:
Print the minimum number of coins that betty can withdraw from the ATM , such that the sum of values of coins is equal to the price. If it is not possible, print -1.

Sample Input 1 

3 11
1 5 7
Sample Output 1

3
Hint



 */

function runProgram(input) {
  // Write code here
  input =input.trim().split("\n");
  let [n,sum]=input[0].trim().split(" ").map(Number);
  let arr =input[1].trim().split(" ").map(Number);
  let min = Number.MAX_VALUE;
  let count=0;
  let dp =[]
  for(let i=0;i<=n;i++)
  {
    let temp=[]
    for(let j=0;j<=sum;j++)
    {
        temp.push(-1);
    }
    dp.push(temp);
  }
  //console.log(dp);
  function betty(n,sum,i,arr)
  {
    if(dp[i][sum]!==-1)
    {
        return dp[i][sum];
    }
    else
    { 
        count++;
        if(sum===0)
        {
            dp[i][sum]=count;
            return dp[i][sum];
        }
        else if(sum<0){
            return 0;
        }
        else
        {
            dp[i][sum]= betty(n,sum,i++)
        }
    }
  }
  betty(n,sum,0,arr);

}
if (process.env.USERNAME === "Ashish Singh") {
  runProgram(`3 11
  1 5 7`);
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