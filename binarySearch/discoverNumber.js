function discover(n, k, arr) {
    //console.log(n,k,arr)
    let l = 0; h = n - 1;
    while (l <= h) {
        let mid=Math.floor(l+(h-l)/2);
        if(arr[mid]===k)
        {
            return "YES";
        }
        else if(arr[mid]<k)
        {
            l=mid+1;
        }
        else
        {
            h=mid-1
        }
    }
    return "NO"
}
    function runProgram(input) {
        // Write code here
        input = input.trim().split("\n");
        let [n, q] = input[0].trim().split(" ").map(Number);
        let arr = input[1].trim().split(" ").map(Number);
        arr.sort(function (a, b) { return a - b });
        let l = 2;
        for (let i = 0; i < q; i++) {
            let k = +input[l].trim();
            l++;
            console.log(discover(n, k, arr));
        }


    }
    if (process.env.USERNAME === "Ashish Singh") {
        runProgram(`5 10
  50 40 30 20 10 
  10
  20
  30
  40
  50
  60
  70
  80
  90
  100`);
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
