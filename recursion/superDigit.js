const superDigit=(N)=>{
   // console.log(N);
  if(N<10)
  {
      console.log(N);
      return N;
  }
  else
  {
      let temp =N;
      let tSum = 0;
      while(temp!=0)
      {
          tSum+=temp%10;
          temp= Math.floor(temp/10);
      }
      superDigit(tSum);
  }
}

function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  let t= +input[0].trim();
  for(let i=1;i<=t;i++)
  {
  let n = input[i].trim();
  let sum=0;
  for(let i=0;i<n.length;i++)
  {
      sum+= +n[i];
  }
  let ans =superDigit(sum);
  console.log(ans,"final");
  }
 
}
if (process.env.USERNAME === "Ashish Singh") {
  runProgram(`3
  45
  8
  186
  `);
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