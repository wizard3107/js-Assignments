function k_div(arr,n,k){
    var sum =0;
    for(let i =0;i<n;i++)
    {
        sum+=arr[i];
    }
  var sub = arr.subarray();
  console.log(sub);
}
function runProgram(input) {
    // Write code here
    input = input.trim().split("\n");
    let t= +input[0].trim();
    let l=1;
    for(let i=0;i<t;i++)
    {
        let [n,k]=input[l].trim().split(" ").map(Number);
        l++;
        let arr = input[l].trim().split(" ").map(Number);
        l++;
        //console.log(arr)
        k_div(arr,n,k);
    }
  }
  if (process.env.USERNAME === "Ashish Singh") {
    runProgram(`4
    4 6
    3 1 4 2
    4 9
    6 3 5 2
    3 3
    1 2 3
    3 7
    1 2 3`);
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