function runProgram(input) {
  // Write code here
  let n = +input.trim();
 const ways=(N)=>{
     if(N === 0)
     {
         return 1;
     }
     else if(N<0)
     {
         return 0;
     }
     else
     return ways(N-1)+ways(N-2)+ways(N-3)
    
 }
 console.log(ways(n));

}
if (process.env.USERNAME === "Ashish Singh") {
  runProgram(`30`);
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