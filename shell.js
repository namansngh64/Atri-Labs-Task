const { exec } = require("child_process");
const readline = require("readline");
console.log("SHELL HAS STARTED.....\nTYPE COMMAND (ctrl+c to exit)");
function readInput() {
  const interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return new Promise((resolve) =>
    interface.question("", (answer) => {
      interface.close();
      resolve(answer);
      exec(
        answer,
        {
          env: { PATH: "C:\\Program Files\\Git\\bin" }, //if using linux/ubuntu etc No need to sepcify env or shell params
          shell: "C:\\Program Files\\Git\\bin\\bash.exe"
        },
        (error, stdout, stderr) => {
          if (error) {
            console.log(`error: ${error.message}`);
            return;
          }
          if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
          }
          if (answer.substring(0, 2) == "cd")
            try {
              // Updating with the New directory
              process.chdir(answer.substring(3));
              console.log("Updated working directory is: " + process.cwd());
            } catch (err) {
              // Printing error if any occurs
              console.error(
                "error occured while " + "changing directory: " + err
              );
            }

          console.log(`stdout: ${stdout}`);
        }
      );
    })
  );
}
//LOOPING
(async () => {
  while (1) {
    const data = await readInput();
  }
})();

//------------TESTING AND LEARNING STUFF------------//

// const { exec } = require("node:child_process");

// // run the `ls` command using exec
// exec("ls ./", (err, output) => {
//   // once the command has completed, the callback function is called
//   if (err) {
//     // log and return if we encounter an error
//     console.error("could not execute command: ", err);
//     return;
//   }
//   // log the output received from the command
//   console.log("Output: \n", output);
// });
// const { exec, execSync, fork } = require("child_process");
// const readline = require("readline");
// // .createInterface({
// //   input: process.stdin,
// //   output: process.stdout
// // });
// const { spawn } = require("node:child_process");
// const controller = new AbortController();
// const { signal } = controller;

// function readInput() {
//   const interface = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
//   });

//   return new Promise((resolve) =>
//     interface.question("", (answer) => {
//       interface.close();
//       resolve(answer);
//       exec(
//         answer,
//         {
//           env: { PATH: "C:\\Program Files\\Git\\bin" },
//           shell: "C:\\Program Files\\Git\\bin\\bash.exe"
//         },
//         (error, stdout, stderr) => {
//           if (error) {
//             console.log(`error: ${error.message}`);
//             return;
//           }
//           if (stderr) {
//             console.log(`stderr: ${stderr}`);
//             return;
//           }
//           if (answer.substring(0, 2) == "cd")
//             try {
//               // Updating with the New directory
//               process.chdir(answer.substring(3));
//               console.log("Updated working directory is: " + process.cwd());
//             } catch (err) {
//               // Printing error if any occurs
//               console.error(
//                 "error occured while " + "changing directory: " + err
//               );
//             }

//           console.log(`stdout: ${stdout}`);
//         }
//       );
//     })
//   );
// }
// //LOOPING
// (async () => {
//   for (var i = 0; i < 5; i++) {
//     const data = await readInput();
//   }
// })();
// //LOOPING

// const ls = spawn("cd", ["../"], {
//   env: { PATH: "C:\\Program Files\\Git\\bin" },
//   shell: "C:\\Program Files\\Git\\bin\\bash.exe",
//   stdio: ["inherit", "pipe", "pipe"]
// });
// ls.stdout.on("data", (data) => {
//   console.log(`stdout: ${data}`);
// });

// ls.stderr.on("data", (data) => {
//   console.log(`stderr: ${data}`);
// });

// ls.on("error", (error) => {
//   console.log(`error: ${error.message}`);
// });

// ls.on("close", (code) => {
//   console.log(`child process exited with code ${code}`);
// });
// const als = spawn("pwd", [""], {
//   env: { PATH: "C:\\Program Files\\Git\\bin" },
//   shell: "C:\\Program Files\\Git\\bin\\bash.exe",
//   stdio: ["inherit", "pipe", "pipe"]
// });
// als.stdout.on("data", (data) => {
//   console.log(`stdout: ${data}`);
// });

// als.stderr.on("data", (data) => {
//   console.log(`stderr: ${data}`);
// });

// als.on("error", (error) => {
//   console.log(`error: ${error.message}`);
// });

// als.on("close", (code) => {
//   console.log(`child process exited with code ${code}`);
// });

// const ss = spawn("set ComSpec=C:\\Program Files\\Git\\bin\\bash.exe", [], {
//   shell: true
// });
// ss.stdout.on("data", (data) => {
//   console.log(`stdout: ${data}`);
// });

// ss.stderr.on("data", (data) => {
//   console.log(`stderr: ${data}`);
// });

// ss.on("error", (error) => {
//   console.log(`error: ${error.message}`);
// });

// ss.on("close", (code) => {
//   console.log(`child process exited with code ${code}`);
// });
// while (1) {
// execSync(
//   "set -m",
//   {
//     env: { PATH: "C:\\Program Files\\git\\bin" },
//     shell: "C:\\Program Files\\git\\bin\\bash.exe",
//     timeout: 100
//   },
//   (error, stdout, stderr) => {
//     if (error) {
//       console.log(`error: ${error.message}`);
//       return;
//     }
//     if (stderr) {
//       console.log(`stderr: ${stderr}`);
//       return;
//     }
//     // console.log("set ComSpec=C:\\Program Files\\Git\\bin\\bash.exe");
//   }
// );
// var f = fork("test.js");
// f.on("data", (d) => {
//   console.log("DATA ", d);
// });
// const child = spawn("test.js", {
//   env: { PATH: "C:\\Program Files\\Git\\bin" },
//   shell: "C:\\Program Files\\Git\\bin\\bash.exe",
//   detached: true,
//   stdio: "ignore"
// });
// function f() {
//   readline.question("Enter Command: ", async (name) => {
//     await exec(
//       name,
//       {
//         env: { PATH: "C:\\Program Files\\Git\\bin" },
//         shell: "C:\\Program Files\\Git\\bin\\bash.exe"
//       },
//       (error, stdout, stderr) => {
//         if (error) {
//           console.log(`error: ${error.message}`);
//           return;
//         }
//         if (stderr) {
//           console.log(`stderr: ${stderr}`);
//           return;
//         }
//         console.log(`stdout: ${stdout}`);
//       }
//     );
//     // child.unref();
//     readline.close();
//   });
// }
// function prompt(question, callback) {
//   var stdin = process.stdin,
//     stdout = process.stdout;

//   stdin.resume();
//   stdout.write(question);

//   stdin.once("data", function (data) {
//     callback(data.toString().trim());
//   });
// }
// for (var i = 0; i < 5; i++) {
//   var f = fork("test.js");
// }

// function askQuestion(query) {
//   const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
//   });

//   return new Promise((resolve) =>
//     rl.question(query, (ans) => {
//       exec(
//         ans,
//         {
//           env: { PATH: "C:\\Program Files\\Git\\bin" },
//           shell: "C:\\Program Files\\Git\\bin\\bash.exe"
//         },
//         (error, stdout, stderr) => {
//           if (error) {
//             console.log(`error: ${error.message}`);
//             return;
//           }
//           if (stderr) {
//             console.log(`stderr: ${stderr}`);
//             return;
//           }
//           console.log(`stdout: ${stdout}`);
//         }
//       );
//       rl.close();
//       resolve(ans);
//     })
//   );
// }

// controller.abort();
// }
// const prompt = require("prompt-sync")({ sigint: true });
// f();
// async function f() {
// var g = spawn("pwd", [], {
//   env: { PATH: "C:\\Program Files\\git" },
//   shell: "C:\\Program Files\\Git\\git-bash.exe"
// });

// const ls = spawn("pwd", [], {
//   env: { PATH: "C:\\Program Files\\git" },
//   shell: "C:\\Program Files\\Git\\git-bash.exe",
//   timeout: 1000
// });
// g.stdout.pipe(ls.stdin);

// ls.stdout.on("data", (data) => {
//   console.log(`stdout: ${data}`);
// });

// ls.stderr.on("data", (data) => {
//   console.log(`stderr: ${data}`);
// });

// ls.on("error", (error) => {
//   console.log(`error: ${error.message}`);
// });

// ls.on("close", (code) => {
//   console.log(`child process exited with code ${code}`);
// });
// }
