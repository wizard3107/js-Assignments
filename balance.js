function balance(arr,n){
    let max=0;
    
    for(let i=0;i<n;i++){

        let z= 0,o=0;
    for(let  j= 0;j<i;j++){
        if(arr[j]===1){
            o++;
        }
        else
        z++;
    }
    if(z>=o){
        max=o*2;
    }
    else
    {
        max=z*2;
    }
    console.log(z,o)
}
console.log(max);
}
function runProgram(input) {
    // Write code here
    input = input.trim().split("\n");
    let t = +input[0].trim();
    let l =1;
    for(let i=0;i<t;i++){
        let n = +input[l].trim();
        l++;
        let arr = input[l].trim().split(" ").map(Number);
        l++;
        balance(arr,n);
    }
   
  }
  if (process.env.USERNAME === "Ashish Singh") {
    runProgram(`1
    255
    1 1 0 0 0 1 0 1 1 1 0 1 1 0 1 0 1 1 0 1 0 1 0 0 0 1 1 0 1 0 0 0 1 0 0 1 1 0 0 1 0 1 0 1 1 1 1 0 0 1 0 1 1 0 1 1 1 0 1 0 0 1 0 0 1 0 1 1 1 0 0 1 1 0 0 0 1 1 1 1 0 1 0 1 1 1 0 0 1 0 1 0 1 1 0 1 0 1 0 1 1 0 0 0 0 0 1 1 1 0 0 1 1 1 1 0 0 1 0 0 1 1 0 1 1 0 0 1 1 0 0 1 0 0 1 0 0 0 1 1 0 1 0 1 0 1 1 1 1 0 1 0 1 1 1 0 1 1 1 0 1 1 1 1 1 1 1 1 1 0 0 0 0 1 1 0 0 1 1 1 1 0 0 0 1 1 1 0 1 0 1 0 0 0 0 1 1 1 1 1 0 1 1 0 0 0 0 1 1 0 0 0 0 0 1 0 0 0 0 1 0 1 1 0 0 1 0 1 1 1 0 1 0 1 1 1 0 1 0 1 1 0 0 0 1 1 0 1 1 0 0 1 0`);
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