function runProgram(input) {
    // Write code here
    input = input.trim().split("\n");
    let n = +input[0].trim();
    let str = input[1].trim().split("");
    let stack=[]
    for(let  i =0;i<str.length;i++)
    {
        if(stack.length===0)
        stack.push(str[i])
        else
        {
            if(str[i]==='B')
            {
            if(stack[stack.length-1]==='A')
            {
                stack.pop();
            }
             else
             {
                 stack.push(str[i]);
             }
            }
            else
            stack.push(str[i]);
        }
  
    }
    console.log(stack.length);
  }
  if (process.env.USERNAME === "Ashish Singh") {
    runProgram(`6
    BAABAA`);
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