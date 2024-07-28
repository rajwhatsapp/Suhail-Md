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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_19_18_07_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMzksXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxODUsXG4gICAgICAgIDEwLFxuICAgICAgICA3NSxcbiAgICAgICAgNjgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTU5LFxuICAgICAgICAxODgsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjksXG4gICAgICAgIDE0OSxcbiAgICAgICAgMzQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNTIsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDY2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTUzLFxuICAgICAgICA5NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMyxcbiAgICAgICAgNDgsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjQ5LFxuICAgICAgICA0NCxcbiAgICAgICAgNjUsXG4gICAgICAgIDExNixcbiAgICAgICAgMTY3LFxuICAgICAgICA4MixcbiAgICAgICAgMTU0LFxuICAgICAgICAyMyxcbiAgICAgICAgNDYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTYyLFxuICAgICAgICA0NSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxODksXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTA2LFxuICAgICAgICA5OCxcbiAgICAgICAgOTYsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMixcbiAgICAgICAgMTUsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTEzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDgsXG4gICAgICAgIDEyNixcbiAgICAgICAgNjMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgODAsXG4gICAgICAgIDI5LFxuICAgICAgICAzNyxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDY3LFxuICAgICAgICAxNzIsXG4gICAgICAgIDYxLFxuICAgICAgICAxNDEsXG4gICAgICAgIDk2LFxuICAgICAgICA4MyxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDM1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDQ4LFxuICAgICAgICA3NixcbiAgICAgICAgMzcsXG4gICAgICAgIDgyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDU3LFxuICAgICAgICA5NCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjYsXG4gICAgICAgIDgzLFxuICAgICAgICAxNzYsXG4gICAgICAgIDk1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTIsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTc1LFxuICAgICAgICA0MSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNjUsXG4gICAgICAgIDI3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDM4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMixcbiAgICAgICAgMTQ5LFxuICAgICAgICA5MCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDEyMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTM4LFxuICAgICAgICA3OCxcbiAgICAgICAgMTA1LFxuICAgICAgICA4MyxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDI4LFxuICAgICAgICA0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDYsXG4gICAgICAgIDE5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDI1LFxuICAgICAgICAxMTQsXG4gICAgICAgIDY3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDMyLFxuICAgICAgICAxMTIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDUyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDEwMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDYsXG4gICAgICAgIDIzLFxuICAgICAgICAxMyxcbiAgICAgICAgMTcwLFxuICAgICAgICA1NSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxODMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNTgsXG4gICAgICAgIDMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMjUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTc2LFxuICAgICAgICAzMSxcbiAgICAgICAgMjIsXG4gICAgICAgIDUzLFxuICAgICAgICAxMTksXG4gICAgICAgIDE0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE1MixcbiAgICAgICAgMzgsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTYyLFxuICAgICAgICA1NyxcbiAgICAgICAgMTg2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMjgsXG4gICAgICAgIDU2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA0NixcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxMDlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA1OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg2LFxuICAgICAgICAyMTYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDMzLFxuICAgICAgICA5MyxcbiAgICAgICAgMTk4LFxuICAgICAgICAxODksXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTg4LFxuICAgICAgICA5MixcbiAgICAgICAgMTgzLFxuICAgICAgICA5NixcbiAgICAgICAgMyxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDkwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjQsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjE4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjExLFxuICAgICAgICAyNDAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgOTAsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTI5LFxuICAgICAgICAxODcsXG4gICAgICAgIDEsXG4gICAgICAgIDQ5LFxuICAgICAgICAyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTI4LFxuICAgICAgICA4MixcbiAgICAgICAgMTU4LFxuICAgICAgICA4NSxcbiAgICAgICAgMjMyLFxuICAgICAgICA1NixcbiAgICAgICAgMTQxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMTYsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjEwLFxuICAgICAgICAxMTksXG4gICAgICAgIDE5NixcbiAgICAgICAgMTUwLFxuICAgICAgICAyMjcsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTAxLFxuICAgICAgICAyNDEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTgsXG4gICAgICAgIDk3LFxuICAgICAgICAxMzdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEzNixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI0L1gzZlJHRkl2dVJvMnNjR1VSaUF1YWM2MHFsY2wyeWZhS1Z6bVVlSG9ZPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCIzb25TcWktR1RqQ1ZkYzByUmtlX1R3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjg0YjZmZTEyLTBjZjUtNGE4Ny1iNjYyLWY5MmJiYjAzNzIwM1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMTQsXG4gICAgICAxNSxcbiAgICAgIDE3OCxcbiAgICAgIDEzNyxcbiAgICAgIDIyNSxcbiAgICAgIDMsXG4gICAgICAxMjYsXG4gICAgICAxNzYsXG4gICAgICAyMCxcbiAgICAgIDUsXG4gICAgICAxNDgsXG4gICAgICAyMjIsXG4gICAgICAyNSxcbiAgICAgIDkxLFxuICAgICAgOTksXG4gICAgICAxMDAsXG4gICAgICAxNzMsXG4gICAgICAxMjMsXG4gICAgICAyMzMsXG4gICAgICAxNFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMixcbiAgICAgIDI1MCxcbiAgICAgIDY1LFxuICAgICAgOSxcbiAgICAgIDE5MSxcbiAgICAgIDgxLFxuICAgICAgMTgzLFxuICAgICAgMzQsXG4gICAgICAxOTUsXG4gICAgICAzMSxcbiAgICAgIDM0LFxuICAgICAgMTIwLFxuICAgICAgMTc4LFxuICAgICAgMTIsXG4gICAgICA0NixcbiAgICAgIDI2LFxuICAgICAgMTQ1LFxuICAgICAgNDcsXG4gICAgICAxMjIsXG4gICAgICA0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjJLMVpZWkdZXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5OTQ0MDcxMjIwMjU6NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIlJBSi1XQS1PRkNcIixcbiAgICBcImxpZFwiOiBcIjE5MDM1MzQwMzU0Mzc3MDo0QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ01LdDE5RUZFTzJhOExRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwibmtQa2FPaGxBODVFZ1VXalRIQmlZamZlbk03clE3bWJmZnVBbTdzZ2lHMD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJqWnYrSGw0Z0ZGNDE0ZGgwVCtKSmhEcFpIMFBQVjcrT1lYNDlUMjNjSStrTDRHMHZnRG44UTY0bHhiOExlWGhLMHNJakc4VTUyT0NjNThGRUhFcmVCZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCIzODd0T09oQklhb3BJdVlkZ1NQVFRYTDJnR05YUUxhYzRjMmdzWFhiSFRIODREcW55VnRwZVBETUUwN0lSNENINXl5dzluckpNOVBkcC9qL0RYSzZnUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5OTQ0MDcxMjIwMjU6NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTA5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjE1MDMwODlcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


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
