function runProgram(input) {
    // Write code here
    var str = input.trim().split("");
    let map = new Map();
    for (let i =0;i<str.length;i++)
    {
        if(map.has(str[i])){
            map.set(str[i], str[i].value++);
        }
        else
        map.set(str[i],1)
    }
    let keys=[]
    for (let key of map)
    keys.push(key[0]);
  console.log(keys.join(""));
  }
  if (process.env.USERNAME === "Ashish Singh") {
    runProgram(`iloveprogramming`);
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
  