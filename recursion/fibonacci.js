function runProgram(input) {
  // Write code here
  let n = +input.trim();
 const fibo=(N)=>{
    if(N<=0)
    {
        return 0;
    }
    else if(N===1)
    {
        return 1;
    }
    else
    return fibo(N-1)+fibo(N-2)
 }
  console.log(fibo(n));
}
if (process.env.USERNAME === "Ashish Singh") {
  runProgram(`10`);
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