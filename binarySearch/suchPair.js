function suchPair(n,k,arr){
    console.log(n,k,arr)
    let i=0,j=n-1;
    let flag=false;
    while(i<j)
    if(arr[i]+arr[j]===k)
    {
        flag=true;
        break;
    }
    else if(arr[i]+arr[j]<k)
    {
        i++;
    }
    else
    j--;
    if(flag)
    {
        console.log(1)
    }
    else
    console.log(-1);
}
function runProgram(input) {
  // Write code here
  input= input.trim().split("\n");
  let t = +input[0].trim();
  let l=1;
  for(let i=0;i<t;i++)
  {
      let [n,k]=input[l].trim().split(" ").map(Number);
      l++;
      let arr=input[l].trim().split(" ").map(Number);
      l++;
      arr.sort(function(a,b){return a-b});
      suchPair(n,k,arr);
  }
}
if (process.env.USERNAME === "Ashish Singh") {
  runProgram(`1
  5 2
  3 4 0 1 7`);
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
