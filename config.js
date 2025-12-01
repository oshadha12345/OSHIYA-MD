const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "",
ALIVE_IMG: process.env.ALIVE_IMG || "https://github.com/oshadha12345/OSHIYA-MD/blob/main/Images/20251127_061223.png?raw=true",
ALIVE_MSG: process.env.ALIVE_MSG || "*Hello👋 OSHIYA-MD Is Alive Now owner+94756599952 🎭*",
BOT_OWNER: '94756599952',  // Replace with the owner's phone number



};
