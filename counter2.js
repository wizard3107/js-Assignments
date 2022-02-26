/*Exit the Grid -71:16:33
Description

You are playing the famous Maze Runner Arcade Game. The game contains a maze which has values{'L', 'R', 'U', 'D'}, where L -> indicates that you move left, R -> indicates that you move right,

U -> indicates that you move up, while D -> indicates that you move down. The score is calculates as the number of moves in which you exit the grid. If you cannot exit the grid, that means your

scoreshould be returned as 0. Given a square matrix, denoting the maze, write a program to calculate the score.

Note: You will always enter that the maze through the position (0,0).


Input
The first line of the input contains T, the number of test cases.

The first line of each test case contains N, the size of the maze, given in the form of square matrix.

Next N lines contain N characters each, denoting in which direction to move.

Constraints

1 <= T <= 10

1 <= N <= 50


Output
For each test case, print the score, on a new line.


Sample Input 1 

3
4 
RRRR
LLLL
UUUU
DDDD
3
LRL
UUU
DLR
2
RL
DD
Sample Output 1

4
1
0
Hint

In the first sample test case, we enter the maze through (0,0), and then we move right as the position (0,0) is R, and then R again and, then R again, and finally R again, as we exit the maze. The total number of steps taken, are equal to 4, as after 4 steps we would have crossed the boundary of the grid.

In the second sample test case, the direction at position (0,0). We enter the maze and go left, and exit the loop, from the same direction we entered. So, the steps taken to exit the maze will be 1.

 */
function mazeProblem(arr, n) {
    let i = 0, j = 0;
    while (i < n && i >= 0 && j < n && j >= 0) {
        if (arr[i][j] === 'L') {
            j--;     
           
        }
        else if (arr[i][j] === 'R') {
            j++;
        }
        else if (arr[i][j] === 'D') {
            i++;
        }
        else if (arr[i][j] === 'U') {
            i--;
        }
    }
}
function runProgram(input) {
    // Write code here
    input = input.trim().split("\n");
    let t = +input[0].trim();
    let l = 1;
    for (let i = 0; i < t; i++) {
        let n = +input[l].trim();
        l++;
        let arr = [];
        for (let j = 0; j < n; j++) {
            arr.push(input[l].trim().split(""));
            l++;
        }
        mazeProblem(arr, n);
        console.log(arr, n);
    }
}
if (process.env.USERNAME === "Ashish Singh") {
    runProgram(`3
  4 
  RRRR
  LLLL
  UUUU
  DDDD
  3
  LRL
  UUU
  DLR
  2
  RL
  DD`);
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
