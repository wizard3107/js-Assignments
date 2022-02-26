function lowerBound(n,k,arr)
{
  let l=0,h=n-1;
  let lb=-1;
  while(l<=h)
  {
    let mid=Math.floor(l+(h-l)/2)
    
    if(arr[mid]>=k)
    {
      
      h=mid-1;
    }
    else
    {
      lb=mid;
      l=mid+1;
    }
  }
  return lb
  
}
function upperBound(n,k,arr){
    let l=0,h=n-1;
    let ub=n;
    while(l<=h)
    {
      let mid=Math.floor(l+(h-l)/2)
  
      if(arr[mid]<=k)
      {
        l=mid+1;
      }
      else{
        ub=mid
        h=mid-1;
      }
  
    }
  
    return ub;
  }
    function runProgram(input) {
        // Write code here
        input = input.trim().split("\n");
        let n = +input[0].trim();
        let arr = input[1].trim().split(" ").map(Number);
        arr.sort(function (a, b) { return a - b });
        let q=+input[2].trim();
        let line = 3;
        let result=[]
        for (let i = 0; i < q; i++) {
            let [l,u] = input[line].trim().split(" ").map(Number);
            line++;
            let lb= lowerBound(n,l,arr);
            let ub=upperBound(n,u,arr);
            let ans= (ub-lb-1)
            result.push(ans)  
        }
        console.log(result.join(" "));

    }
    if (process.env.USERNAME === "Ashish Singh") {
        runProgram(`5
        10 1 10 3 4
        4
        1 10
        2 9
        3 4
        2 2
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
