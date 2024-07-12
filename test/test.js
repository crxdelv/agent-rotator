/**
 * Agent Rotator Library v1.0.0
 * https://github.com/creuserr/agent-rotator
 *
 * Released under the MIT license
 * https://github.com/creuserr/agent-rotator#license
 *
 * Date: 2024-07-11
 */

const VERSION = [1, 0];
var LOG_SIZE = 1;
var AgentRotator;

function CheckVersion(version) {
  return version[0] == VERSION[0] && version[1] == VERSION[1];
}

function Log(text, label=LOG_SIZE) {
  console.log(`[${label}]: ${text}`);
  if(typeof label == "number") LOG_SIZE++;
}

function End() {
  console.warn("[=]: Test failed");
  process.end(1);
}

function ErrorLog(e, label) {
  console.error(`[=]: ${label}`);
  console.error(e.stack);
  End();
}

Log("Importing agent-rotator...");
try {
  AgentRotator = require("agent-rotator");
  Log(`Imported agent-rotator (v${AgentRotator.version.join(".")})`, "=");
} catch(e) {
  ErrorLog(e, "Failed to import agent-rotator");
}

console.log("");

Log(`Checking version... (v${VERSION.join(".")}.x expected)`);
CheckVersion(AgentRotator.version);
Log("Version is up-to-date", "=");

console.log("");

Log("Testing category mobiles...");
try {
  Log(new AgentRotator.mobiles.Android().toString(), "=");
} catch(e) {
  ErrorLog(e, "Failed to generate a user agent");
}

console.log("");

Log("Testing category desktops...");
try {
  Log(new AgentRotator.desktops.Windows().toString(), "=");
} catch(e) {
  ErrorLog(e, "Failed to generate a user agent");
}

console.log("");

Log("Testing category tablets...");
try {
  Log(new AgentRotator.tablets.Ipad().toString(), "=");
} catch(e) {
  ErrorLog(e, "Failed to generate a user agent");
}

console.log("");

Log("Testing category bots...");
try {
  Log(new AgentRotator.bots.Google().toString(), "=");
} catch(e) {
  ErrorLog(e, "Failed to generate a user agent");
}

console.log("");

Log("Testing category consoles...");
try {
  Log(new AgentRotator.consoles.Nintendo().toString(), "=");
} catch(e) {
  ErrorLog(e, "Failed to generate a user agent");
}

console.log("");

Log("Testing category browsers...");
try {
  Log(new AgentRotator.browsers.Chrome().toString(), "=");
} catch(e) {
  ErrorLog(e, "Failed to generate a user agent");
}

console.log("");

Log("Testing category others...");
try {
  Log(new AgentRotator.others.AppleWatch().toString(), "=");
} catch(e) {
  ErrorLog(e, "Failed to generate a user agent");
}

console.log("");

Log("Testing tools...");
try {
  Log(AgentRotator.tools.CreateModel(), "=");
} catch(e) {
  ErrorLog(e, "Failed to use the tool");
}

console.log("");

Log("Test passed", "=");
process.exit(0);