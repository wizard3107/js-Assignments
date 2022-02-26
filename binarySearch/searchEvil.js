function searchEvil(n, k, arr) {
    let l = 0, h = n - 1;
    while (l <= h) {
        let mid = Math.floor(l + (h - l) / 2);

        if (arr[mid] === k) {
            return true
        }
        else if(arr[mid]<k)
        {
            l=mid+1;
        }
        else
        h=mid-1;
    }
    return false

}
function runProgram(input) {
    // Write code here
    input = input.trim().split("\n");
    let t = +input[0].trim();
    let line = 1;
    for (let i = 0; i < t; i++) {
        let [n, m] = input[line].trim().split(" ").map(Number);
        line++;
        let arr = []
        for (let j = 0; j < n; j++) {
            let temp = input[line].trim().split(" ").map(Number);
            line++;
            arr.push(temp.join(" "));
        }
        let k = +input[line].trim();
        line++;
        arr = arr.join(" ").split(" ").map(Number).sort(function (a, b) {
            return a - b;
        })

        console.log(searchEvil(n * m, k, arr));
    }
}
if (process.env.USERNAME === "Ashish Singh") {
    runProgram(`2
  4 4
  1 2 3 4
  5 6 7 8
  9 10 12 11
  13 14 15 16 
  13
  4 4
  1 2 3 4
  5 6 7 8
  9 10 11 12
  13 14 15 16 
  17`);
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