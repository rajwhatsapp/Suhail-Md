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
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "true";  // Make it "false" for disable WELCOME 

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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_20_49_07_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDgwLFxuICAgICAgICAxNzEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgOTgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMzEsXG4gICAgICAgIDMyLFxuICAgICAgICA1MCxcbiAgICAgICAgMTEsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjQsXG4gICAgICAgIDYzLFxuICAgICAgICAxNCxcbiAgICAgICAgMTM3LFxuICAgICAgICA3LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTIwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgOTAsXG4gICAgICAgIDg1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMTEsXG4gICAgICAgIDI0NixcbiAgICAgICAgNzksXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxODksXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDY1LFxuICAgICAgICAxMTAsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNCxcbiAgICAgICAgMzUsXG4gICAgICAgIDY2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMjQsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyNTAsXG4gICAgICAgIDQ3LFxuICAgICAgICAxOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTQzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMTAsXG4gICAgICAgIDAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNjQsXG4gICAgICAgIDI4LFxuICAgICAgICA3LFxuICAgICAgICAyMCxcbiAgICAgICAgOTAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxODUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgOTYsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNTAsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNDgsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNDcsXG4gICAgICAgIDIxMixcbiAgICAgICAgNzZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg3LFxuICAgICAgICA1MSxcbiAgICAgICAgNCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTg3LFxuICAgICAgICA4NyxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDc2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDMwLFxuICAgICAgICA0MixcbiAgICAgICAgMTQ3LFxuICAgICAgICA4NSxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDMxLFxuICAgICAgICAyMjIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNzEsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgOSxcbiAgICAgICAgNjEsXG4gICAgICAgIDExM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAyOCxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE2NSxcbiAgICAgICAgOTEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMzAsXG4gICAgICAgIDQ2LFxuICAgICAgICA2MyxcbiAgICAgICAgNCxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNzIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTQwLFxuICAgICAgICA5MyxcbiAgICAgICAgNjMsXG4gICAgICAgIDYzLFxuICAgICAgICAxNTcsXG4gICAgICAgIDU1LFxuICAgICAgICA1MyxcbiAgICAgICAgOTQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMzYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMTksXG4gICAgICAgIDgxLFxuICAgICAgICAxNCxcbiAgICAgICAgNzJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTc2LFxuICAgICAgICAyNyxcbiAgICAgICAgMTMxLFxuICAgICAgICAxOTgsXG4gICAgICAgIDkwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDE1LFxuICAgICAgICAzOCxcbiAgICAgICAgMjM5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDM3LFxuICAgICAgICA0NSxcbiAgICAgICAgMzgsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNzgsXG4gICAgICAgIDg4LFxuICAgICAgICA4MixcbiAgICAgICAgMzQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTI1LFxuICAgICAgICAzNCxcbiAgICAgICAgOTVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxNixcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgNzNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgOTksXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgOTVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNTQsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNTMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTA0LFxuICAgICAgICAzMSxcbiAgICAgICAgNTYsXG4gICAgICAgIDcxLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE1MixcbiAgICAgICAgNzgsXG4gICAgICAgIDkzLFxuICAgICAgICA2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE3NixcbiAgICAgICAgODIsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMzgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNTQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNzIsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTAzLFxuICAgICAgICAxNDAsXG4gICAgICAgIDk1LFxuICAgICAgICAxNjgsXG4gICAgICAgIDI0MixcbiAgICAgICAgODksXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjQ5LFxuICAgICAgICA5OCxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjUxLFxuICAgICAgICA2MixcbiAgICAgICAgMTI4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTA1LFxuICAgICAgICAxMyxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMDgsXG4gICAgICAgIDMyLFxuICAgICAgICAxMCxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMjgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNDksXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjgsXG4gICAgICAgIDI0NixcbiAgICAgICAgNTEsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDgxLFxuICBcImFkdlNlY3JldEtleVwiOiBcInhOUGlrS09GUVdleERrZGh4MVNEWHZ4QitYZGJQa09FVisweGlOelU2V0k9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImxpenBHOTVBUXcySzZIek5BbDgyMEFcIixcbiAgXCJwaG9uZUlkXCI6IFwiMjBkZjA2MDItOTUyMy00ZGZiLTgwNGQtZDMxZTNlYmJhNWYxXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExMCxcbiAgICAgIDE2MSxcbiAgICAgIDkyLFxuICAgICAgNjksXG4gICAgICAxMzgsXG4gICAgICA2MyxcbiAgICAgIDY1LFxuICAgICAgODYsXG4gICAgICAxODQsXG4gICAgICAyNTMsXG4gICAgICAxODksXG4gICAgICAwLFxuICAgICAgMjAsXG4gICAgICAyMzQsXG4gICAgICA1MyxcbiAgICAgIDIxNSxcbiAgICAgIDE5MSxcbiAgICAgIDUzLFxuICAgICAgMTYyLFxuICAgICAgMTc5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE3OSxcbiAgICAgIDU1LFxuICAgICAgMTEwLFxuICAgICAgMjA3LFxuICAgICAgMTEsXG4gICAgICAyMjEsXG4gICAgICA1OCxcbiAgICAgIDQ0LFxuICAgICAgMTQwLFxuICAgICAgNjksXG4gICAgICAyMTEsXG4gICAgICAzMyxcbiAgICAgIDg0LFxuICAgICAgODEsXG4gICAgICAxNDUsXG4gICAgICAyNDQsXG4gICAgICAxOTIsXG4gICAgICAxMTIsXG4gICAgICAxNzgsXG4gICAgICAyMjVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiNFY2TFNKRzRcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkxNjI5MzUwMzkzNTo4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNDI0ODYwMjY2NDE0NDU6OEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLTEhsZVVIRU1PdWdMVUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkJ3cnYyVW82YXpsOGdrQ0FGWUtscW1hcFZmRzcyc2xtdUZBRVFvWVg5Q2M9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiZmJ4U1FIWE4rdnBPMTVEbGJ3SXVXSkFrZmhaaG9lVHArVkpKazVuWXFxL2JTY3ZYQWdmU1EvUkszSHBtdzA2bE5VUTA3NVNxd1RvZWY2R21BUVorQUE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiQjBzUS9VMzFpT1Z3eWRYWmsyNC8wOWpDSEZudkR1cnJxazhkWUlYckUzZmpYZEZJTENEZzJESVRQclhCNWJhL0ZyOHRDc3JtdWRqTEI2UWVrMWIzanc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTE2MjkzNTAzOTM1OjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgNCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDM5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjE3Njc3NTEsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFQbWZcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQVBtZi5qc29uIjogIntcImtleURhdGFcIjpcIklUME9IVVhNQitnYmc3VldQbTM5bkVBK0ErSkgxM3dVU3M2Q0V4QzN1T1E9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjA5MTIxMzczMCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIxNzY3NzU2ODA4XCJ9Igp9"  // PUT your SESSION_ID 


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
