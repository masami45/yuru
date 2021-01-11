(async function() {
  try {
    const exec = require("./Utils").exec;
    const yargs = require("yargs");

    const argv = yargs.argv;
    let command = "eslint --ignore-path .gitignore 'src/**/*'";
    
    // Start the linting
    console.log("[LINT] Starting lint your code...");
    // fix the command if there is fix options
    if (argv.fix) {
      console.log("[LINT] Fixing your code...");
      await exec(`${command} --fix`);
      console.log("[LINT] Finished fixing your code.");
      console.log("[LINT] Check for non-fixable errors on your code...");
    }

    await exec(command); 
    // Print this IF there is no error when linting
    console.log("[LINT] No error has found on your code, good work!");
  } catch (error) { // catch error from command
    // IF there is an error when linting, print this instead above one
    if (error.code == 1) {
      console.log("[LINT] Error has occurred on your code! The list of errors is above.");
    } else {
      console.error(error);
    }
  }
})();
