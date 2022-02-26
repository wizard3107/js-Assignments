// function to find the first smaller element than k
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
      console.log("lb: ",mid)
      lb=mid;
      l=mid+1;
    }
  }
  return lb
  
}
// function to find the first greater no. than k
function upperBound(n,k,arr){
  let l=0,h=n-1;
  let ub=n;
  while(l<=h)
  {
    let mid=Math.floor(l+(h-l)/2)
  console.log("l:",l,"h:",h,"mid:",mid);

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
    let [n,k]=input[0].trim().split(" ").map(Number);
    let arr = input[1].trim().split(" ").map(Number);
    arr.sort(function(a,b){
      return a-b
    })
    console.log(n,k,arr);
   let lb = lowerBound(n,k,arr);
  let ub=upperBound(n,k,arr);
   console.log(ub-lb-1);
  }
  if (process.env.USERNAME === "Ashish Singh") {
    runProgram(`10 2
    2 2 2 2 2 11 15 18 20 22`);
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