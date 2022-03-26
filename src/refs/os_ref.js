console.log("OS module");

const os = require("os");

//platform
console.log(os.platform());

//architecture
console.log(os.arch());

//information
// console.log(os.cpus());

//free memory
console.log(os.freemem());
console.log(os.totalmem());

//home dirname
console.log(os.homedir());

//how much time system work sec
console.log(os.uptime() / 60 / 60);
