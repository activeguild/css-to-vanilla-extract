const index = require("./index.node");
const { program } = require("commander");
const path = require("path");
const pc = require("picocolors");

program.parse(process.argv);

if (program.args[0]) {
  let fileName = null;
  try {
    fileName = path.resolve(path.resolve(), program.args[0]);
  } catch (event) {
    console.log(pc.yellow("Unable to resolve the path of the argument."));
  }
  index.css_to_vanilla_extract(fileName);
} else {
  console.log(pc.yellow("Argument is required."));
}
