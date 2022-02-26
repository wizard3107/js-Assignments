function search(l,h, k, arr) {
    let ans=-1
    while (l <= h) {
        let mid = Math.floor(l + (h - l) / 2);

        if (arr[mid] === k) {
            ans=mid
            break;
        }
        else if(arr[mid]<k)
        {
            l=mid+1;
        }
        else
        h=mid-1;
    }
    return ans

}
function runProgram(input) {
    // Write code here
    input =input.trim().split("\n");
    let [n,k]= input[0].trim().split(" ").map(Number);
    let arr =input[1].trim().split(" ").map(Number);
    let l=0,h=n-1;
    let mid,ans=-1;

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
  let left= search(0,mid,k,arr);
  let right=search(mid,n-1,k,arr);
  if(left===-1 && right===-1)
  {
      console.log(-1)
  }
  else if(left!==-1)
  {
      console.log(left)
  }
  else
  console.log(right);

  }
  if (process.env.USERNAME === "Ashish Singh") {
    runProgram(`6 7
    3 4 7 9 1 2`);
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