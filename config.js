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
global.caption = process.env.CAPTION || global.caption || "\n*RAJ-BOT-OFC BY RAJ-KUMAR*\nContact Me 🪀 +994407122025" 


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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_18_45_08_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTUyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMjQsXG4gICAgICAgIDEzMCxcbiAgICAgICAgOTYsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxODAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgODEsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAzNyxcbiAgICAgICAgMTgsXG4gICAgICAgIDE4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDk0LFxuICAgICAgICA3MixcbiAgICAgICAgMTE2LFxuICAgICAgICAxODcsXG4gICAgICAgIDM3LFxuICAgICAgICA3NixcbiAgICAgICAgMzgsXG4gICAgICAgIDExMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjUzLFxuICAgICAgICA5MSxcbiAgICAgICAgMTg1LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTQ1LFxuICAgICAgICA1NSxcbiAgICAgICAgODYsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjMzLFxuICAgICAgICA2NSxcbiAgICAgICAgMTIyLFxuICAgICAgICAzNCxcbiAgICAgICAgMzYsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgOTYsXG4gICAgICAgIDQxLFxuICAgICAgICAzNCxcbiAgICAgICAgOTEsXG4gICAgICAgIDYzLFxuICAgICAgICA3NCxcbiAgICAgICAgOTMsXG4gICAgICAgIDQyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTIsXG4gICAgICAgIDYzLFxuICAgICAgICAyMDQsXG4gICAgICAgIDk1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE0NixcbiAgICAgICAgODEsXG4gICAgICAgIDE0NCxcbiAgICAgICAgODMsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTYwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjEzLFxuICAgICAgICA3NSxcbiAgICAgICAgMjIsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjQ0LFxuICAgICAgICA3MixcbiAgICAgICAgMjI5LFxuICAgICAgICAxODEsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjA2LFxuICAgICAgICA0MyxcbiAgICAgICAgMCxcbiAgICAgICAgMTA0LFxuICAgICAgICAyNDYsXG4gICAgICAgIDg1LFxuICAgICAgICAxMTZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTAsXG4gICAgICAgIDU3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjIwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDEzLFxuICAgICAgICA1OSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTE2LFxuICAgICAgICAyNDksXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNyxcbiAgICAgICAgMTYsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjI4LFxuICAgICAgICA4MCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNCxcbiAgICAgICAgMTY1LFxuICAgICAgICA3OSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxLFxuICAgICAgICA0MSxcbiAgICAgICAgOTQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMjUsXG4gICAgICAgIDMzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjQsXG4gICAgICAgIDM4LFxuICAgICAgICAyLFxuICAgICAgICA5OCxcbiAgICAgICAgNCxcbiAgICAgICAgMTE2LFxuICAgICAgICA1MSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDc2LFxuICAgICAgICA5MSxcbiAgICAgICAgOSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxODYsXG4gICAgICAgIDk3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjAsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNDksXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjMwLFxuICAgICAgICA4OSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNjEsXG4gICAgICAgIDEsXG4gICAgICAgIDc0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNzcsXG4gICAgICAgIDExLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxODksXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjE2LFxuICAgICAgICAyNSxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMTUsXG4gICAgICAgIDkyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjI5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIxMixcbiAgICAgICAgMzEsXG4gICAgICAgIDQzLFxuICAgICAgICAyNDQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMTMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTA3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDgwLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxMjdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA5MixcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDEwMixcbiAgICAgICAgOTAsXG4gICAgICAgIDM5LFxuICAgICAgICA5OSxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjM0LFxuICAgICAgICA4OCxcbiAgICAgICAgNTIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNDgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMDgsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTQxLFxuICAgICAgICAxMzksXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDExOSxcbiAgICAgICAgMzMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxODIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjEwLFxuICAgICAgICA0MSxcbiAgICAgICAgMzMsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTQzLFxuICAgICAgICA4MSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNDksXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTMsXG4gICAgICAgIDg5LFxuICAgICAgICAxODEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDkyLFxuICAgICAgICA0MCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDk1LFxuICAgICAgICA3LFxuICAgICAgICAyLFxuICAgICAgICAyMTQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgODQsXG4gICAgICAgIDEzMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjExLFxuICBcImFkdlNlY3JldEtleVwiOiBcInpFQ2MzUHJRTE9jUTFMSW94elhsV3RIT1JJWnNzMGlZUzYxdkJ0OGd2MmM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMyxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMyxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkxpN0d2LXFKUUdLajlzVGlnLW91SVFcIixcbiAgXCJwaG9uZUlkXCI6IFwiNjAxYzcyNTQtMDJhYi00NTFkLTgxZDMtODhmNWZiYjEwMzIwXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIzMSxcbiAgICAgIDE4OSxcbiAgICAgIDEyMSxcbiAgICAgIDE3LFxuICAgICAgMTAyLFxuICAgICAgODQsXG4gICAgICA5OSxcbiAgICAgIDkyLFxuICAgICAgMjM2LFxuICAgICAgMTc0LFxuICAgICAgMTU4LFxuICAgICAgMjE1LFxuICAgICAgMjUxLFxuICAgICAgMjE2LFxuICAgICAgNzMsXG4gICAgICAxNjksXG4gICAgICAxMzYsXG4gICAgICA5NSxcbiAgICAgIDIwNCxcbiAgICAgIDE5MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA4OCxcbiAgICAgIDE5NyxcbiAgICAgIDE3OSxcbiAgICAgIDYwLFxuICAgICAgMTMyLFxuICAgICAgNTksXG4gICAgICAxMTEsXG4gICAgICAyNixcbiAgICAgIDg1LFxuICAgICAgMTI4LFxuICAgICAgMjA5LFxuICAgICAgNzEsXG4gICAgICAxNzEsXG4gICAgICAyMixcbiAgICAgIDg5LFxuICAgICAgMjA4LFxuICAgICAgMTYxLFxuICAgICAgMTkyLFxuICAgICAgNCxcbiAgICAgIDExN1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJUS05URFZaWVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTE2MjkzNTAzOTM1OjM1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNDI0ODYwMjY2NDE0NDU6MzVAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT1NHNllJRkVNK2sxTFVHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJBWDUzanNiRDlrdWg2bkpVQmpESzRMcXFzWDVIdFBQb1hWR3Zrb3BNa3pBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlgwemRzTmZQdWJOb2RtOGJ6V2VBb1ZUQzYzUkV0ZmVqSW0yUnpHOVM2MVg5dTFjQVRMZFlRRDZSRStmQno0bDBDSllQS09FUlh5SWlQcjYzK0llTEF3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInhCSHRhMW9PdTRLYWczOWVYeWgwNjZGY3JpNkdrSDdxVjVPQ3o0QzRtWHRObXNhUWVqMGRpVC9IbGdJdGJ6L29SOGxZQlVHY2JvWk5GWFhGZ3VnT2pnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkxNjI5MzUwMzkzNTozNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgNixcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgNDhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMzE0MjczOVxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


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
