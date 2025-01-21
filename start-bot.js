const { exec } = require("child_process");

console.log("Starting your bot...");

// Starte den Bot (bot.js muss dein Hauptskript sein)
const process = exec("node bot.js");

process.stdout.on("data", (data) => {
  console.log(data.toString());
});

process.stderr.on("data", (data) => {
  console.error(data.toString());
});

process.on("exit", (code) => {
  console.log(`Bot process exited with code ${code}`);
});