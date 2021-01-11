(async function() {
  try {
    const exec = require("./Utils").exec;

    // Remove old dist folder
    console.log("[CLEANUP] Removing the old dist folder...");
    await exec("rm -rf ./dist");
    console.log("[CLEANUP] Finished removing the old dist folder");
  
    // Start build the Typescript project
    console.log("[BUILD] Starting build the Typescript file...");
    // Start the timer
    let startTime = new Date();
    await exec("tsc");
    // End the timer
    let endTime = new Date();
    console.log(`[BUILD] Finish building the Typescript file, time to build: ${msToTime(startTime, endTime)}`);
  } catch (error) { // catch the error from cmd
    console.error(error);
  }
})();

function msToTime(start, end) {
  let diff = end.getTime() - start.getTime();
  let pad  = (n) => (n < 10) ? `0${n}` : n;
  //            hours               minutes                    seconds               ms
  return `${pad(diff/3.6e6|0)}:${pad((diff%3.6e6)/6e4|0)}:${pad((diff%6e4)/1e3|0)}.${diff%1e3}`;
}

