function streak(arr,n){
    let day=0,max=0;
    var m=0;
    for(let i =0;i<n;i++)
    {
        let d=0;
        for(let j =0;j<arr[i].length;j++)
        {
            if(arr[i][j]==='C'){
                d++;
                m++;
            }
            else{
                if(d>day)
                {
                    day=d;
                }
                if(m>max)
                {
                    max=m;
                }
                d=0;
                m=0;
            }
            //  console.log(m + " with in j loop");
        }
        if(day<d)
        {
            day = d;
        }
           // console.log(day,max + "in i loop");
    }
    console.log(day,max);
}
function runProgram(input) {
    // Write code here
    input = input.trim().split("\n");
    let n = +input[0].trim();
    let arr = []
    for(let i =1;i<=n;i++)
    {
        arr.push(input[i].trim().split(''));
    }
   // console.log(arr);
    streak(arr,n);
  }
  if (process.env.USERNAME === "Ashish Singh") {
    runProgram(`4
    SSSSEEEECCCCEECCCC
    CCCCCSSSSEEECCCCSS
    SSSSSEEESSCCCCCCCS
    EESSSSCCCCCCSSEEEE`);
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
  