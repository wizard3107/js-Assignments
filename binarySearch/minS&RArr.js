function runProgram(input) {
  // Write code here
  input =input.trim().split("\n");
  let n= +input[0].trim();
  let arr =input[1].trim().split(" ").map(Number);
  let l=0,h=n-1;
  let mid
  while(l<=h)
  {
       mid=Math.floor(l+(h-l)/2);
      if(arr[mid]>arr[h])
      {
          l=mid+1;
      }
      else if(arr[mid]<arr[h])
      {
          h=mid;
      }
      else
      h--;
  }
  console.log(arr[mid])
}
if (process.env.USERNAME === "Ashish Singh") {
  runProgram(`10
  4 6 7 9 10 -1 0 1 2 3`);
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