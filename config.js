const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="raj2000kumar2020@gmail.com"
global.location="Kolkata, India."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Kolkata";
global.github=process.env.GITHUB|| "https://github.com/rajwhatsapp/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VaZ31elGE56hPfwhM10B";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VaZ31elGE56hPfwhM10B" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/fe01b578f73294993cdd2.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "\n*RAJ-BOT-OFC BY RAJ-KUMAR*\n https://whatsapp.com/channel/0029VaZ31elGE56hPfwhM10B" 


global.devs = "994407122025" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "994407122025,919064884766";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "994407122025";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/059716c6736fb45f92a2f.mp4" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "recording" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "994407122025,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "919064884766,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_00_16_07_25_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTI1LFxuICAgICAgICAyNTMsXG4gICAgICAgIDEyLFxuICAgICAgICAxNzEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTAzLFxuICAgICAgICAzMCxcbiAgICAgICAgMTkwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDksXG4gICAgICAgIDM3LFxuICAgICAgICA0LFxuICAgICAgICAzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjIzLFxuICAgICAgICAwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDc1LFxuICAgICAgICA3OSxcbiAgICAgICAgNjcsXG4gICAgICAgIDkxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ5LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTAxLFxuICAgICAgICAwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNTksXG4gICAgICAgIDIzLFxuICAgICAgICA1NSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDY4LFxuICAgICAgICA5OSxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMzksXG4gICAgICAgIDEyMCxcbiAgICAgICAgNzAsXG4gICAgICAgIDgsXG4gICAgICAgIDY3LFxuICAgICAgICAyOSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMDEsXG4gICAgICAgIDc0LFxuICAgICAgICAxODYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICA1LFxuICAgICAgICA1MyxcbiAgICAgICAgMTQsXG4gICAgICAgIDYsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjI4LFxuICAgICAgICA0MyxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDUxLFxuICAgICAgICAxMzAsXG4gICAgICAgIDk5LFxuICAgICAgICAxNTIsXG4gICAgICAgIDQ5LFxuICAgICAgICA5OCxcbiAgICAgICAgOTAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTcyLFxuICAgICAgICAzMixcbiAgICAgICAgNTksXG4gICAgICAgIDI1MixcbiAgICAgICAgNDgsXG4gICAgICAgIDg2LFxuICAgICAgICA5NyxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMjMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNTgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTksXG4gICAgICAgIDg5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0OCxcbiAgICAgICAgNDAsXG4gICAgICAgIDUzLFxuICAgICAgICAyNDcsXG4gICAgICAgIDY5LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIxLFxuICAgICAgICA3NixcbiAgICAgICAgMzcsXG4gICAgICAgIDE4LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTMsXG4gICAgICAgIDQzLFxuICAgICAgICAxODgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTAzLFxuICAgICAgICAyOCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMjksXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxODYsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTU2LFxuICAgICAgICAzMSxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMzUsXG4gICAgICAgIDQ4LFxuICAgICAgICAzOSxcbiAgICAgICAgMyxcbiAgICAgICAgNjRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOCxcbiAgICAgICAgMzAsXG4gICAgICAgIDMsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMzUsXG4gICAgICAgIDc0LFxuICAgICAgICAyNixcbiAgICAgICAgMTAyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTQxLFxuICAgICAgICA1NSxcbiAgICAgICAgODgsXG4gICAgICAgIDE5MixcbiAgICAgICAgNjgsXG4gICAgICAgIDUxLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjEwLFxuICAgICAgICA0NCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTY2LFxuICAgICAgICAyMjEsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNzMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgODgsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDY5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY3LFxuICAgICAgICA4OCxcbiAgICAgICAgOTUsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjIwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDcxLFxuICAgICAgICA3MCxcbiAgICAgICAgNixcbiAgICAgICAgMTg3LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTg4LFxuICAgICAgICA3NyxcbiAgICAgICAgMzAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTAsXG4gICAgICAgIDM3LFxuICAgICAgICAzLFxuICAgICAgICAxNjgsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNDksXG4gICAgICAgIDIyMSxcbiAgICAgICAgMSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDQyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDg1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMzNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNTAsXG4gICAgICAgIDc3LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE1LFxuICAgICAgICAyOSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDIxLFxuICAgICAgICAxNzksXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjEzLFxuICAgICAgICAyNDYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNSxcbiAgICAgICAgNDksXG4gICAgICAgIDE5MSxcbiAgICAgICAgNTIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTk5LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjI1LFxuICAgICAgICA5MSxcbiAgICAgICAgNTIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTEsXG4gICAgICAgIDgwLFxuICAgICAgICA0NyxcbiAgICAgICAgMTc5LFxuICAgICAgICAzNSxcbiAgICAgICAgMCxcbiAgICAgICAgMjUzLFxuICAgICAgICA1NyxcbiAgICAgICAgMTg0LFxuICAgICAgICA1MyxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMzEsXG4gICAgICAgIDk0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTU1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjEwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNjksXG4gICAgICAgIDExMCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNjQsXG4gICAgICAgIDQ5LFxuICAgICAgICAxODIsXG4gICAgICAgIDYyLFxuICAgICAgICA2NCxcbiAgICAgICAgNzYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDk5LFxuICAgICAgICAxMzNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE3LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjFJQ1llMFhhb2hWbGpHVWQrbElLaUFlYlJydXgvU1RLWXh0WDlsZUt4bzQ9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImU4d05UZXBNVG9xUU1rYlNCT2xFd3dcIixcbiAgXCJwaG9uZUlkXCI6IFwiMmNhZTMyNzYtYjY5Yi00ZWNlLWJhODUtYjVhZjM5MmQ4ZTM3XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE4NSxcbiAgICAgIDE2MCxcbiAgICAgIDg3LFxuICAgICAgMTQ0LFxuICAgICAgMTI5LFxuICAgICAgMTk5LFxuICAgICAgMTUzLFxuICAgICAgODEsXG4gICAgICAyNTUsXG4gICAgICAzLFxuICAgICAgNjcsXG4gICAgICAyMTQsXG4gICAgICAxMTgsXG4gICAgICA2MSxcbiAgICAgIDI0OSxcbiAgICAgIDIxNSxcbiAgICAgIDksXG4gICAgICA1NyxcbiAgICAgIDc2LFxuICAgICAgNDFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTY2LFxuICAgICAgNDAsXG4gICAgICAxMTksXG4gICAgICA4NCxcbiAgICAgIDEyMCxcbiAgICAgIDgwLFxuICAgICAgNzAsXG4gICAgICAyMzgsXG4gICAgICAxNjYsXG4gICAgICAxOTYsXG4gICAgICAxNTgsXG4gICAgICAxODEsXG4gICAgICAxNzQsXG4gICAgICAxMjQsXG4gICAgICAyMjEsXG4gICAgICAzMCxcbiAgICAgIDQyLFxuICAgICAgMTA4LFxuICAgICAgMTY2LFxuICAgICAgMTI4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjhZWkQxV0ZDXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MTYyOTM1MDM5MzU6MTFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE0MjQ4NjAyNjY0MTQ0NToxMUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLTEhsZVVIRU9PeWhyVUdHQVFnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkJ3cnYyVW82YXpsOGdrQ0FGWUtscW1hcFZmRzcyc2xtdUZBRVFvWVg5Q2M9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiVUVscDB3emJlUlBxR2NWRVhwUndhTjNQVGtWOG1WMjI0LzhWcEpBb01XMFk2aXlqZHZ5VkdKaktESFFBYTJyMzI5ejRPQW04dld6UHhNaFNSSElxQ2c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiU1RPNXNKMlNFbTRCU2RyUkp4bmlHWTVxcm5nU0tEQ0JrMlNJZHZ0QjdvRHdFOERuRDMxR3Z2aHExMzVGWDZlVEI5ZjlzTmtYa0I5TnNWWkZLOFZSaVE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTE2MjkzNTAzOTM1OjExQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAzOVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxODY2NTk3XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 BOT POWERED BY RAJ KUMAR 』```", //*『Follow Developer • Raj Kumar』*\n https://instagram.com/i_am_your_raj_kumar"),
 
  author : process.env.PACK_AUTHER|| "+994407122025",
  packname: process.env.PACK_NAME || "RajWhatsApp",
  botname : process.env.BOT_NAME  || "RAJ-BOT-OFC",
  ownername:process.env.OWNER_NAME|| "RAJ-WA-OFC",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
