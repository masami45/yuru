(async function() {
  try {
    const exec = require("./Utils").exec;

    console.log("[BUILD] Start building your project...");
    console.log("[BUILD] Linting your project first before compiling it...");
    await exec("node ./bin/lint", { echo: true });
    await exec("node ./bin/compile");
    console.log("[BUILD] Finisih building your project, use `start` to run your project.");
  } catch(error) {
    console.error(error);
  }
})();
