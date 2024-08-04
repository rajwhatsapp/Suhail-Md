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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_06_02_08_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNDEsXG4gICAgICAgIDk1LFxuICAgICAgICAyMTcsXG4gICAgICAgIDgzLFxuICAgICAgICA2OSxcbiAgICAgICAgNDUsXG4gICAgICAgIDk0LFxuICAgICAgICA4NyxcbiAgICAgICAgMTQxLFxuICAgICAgICA3LFxuICAgICAgICA4MCxcbiAgICAgICAgMjUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTA2LFxuICAgICAgICAxOTksXG4gICAgICAgIDE3NixcbiAgICAgICAgMjI1LFxuICAgICAgICA3OSxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMDYsXG4gICAgICAgIDI0NixcbiAgICAgICAgNjAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjEzLFxuICAgICAgICAzLFxuICAgICAgICAyNDcsXG4gICAgICAgIDE2NixcbiAgICAgICAgODQsXG4gICAgICAgIDEwM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MyxcbiAgICAgICAgODMsXG4gICAgICAgIDM1LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNjYsXG4gICAgICAgIDIwNSxcbiAgICAgICAgOSxcbiAgICAgICAgMTgsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNzQsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTY5LFxuICAgICAgICAxMjUsXG4gICAgICAgIDMxLFxuICAgICAgICAxNDQsXG4gICAgICAgIDU1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMzksXG4gICAgICAgIDQzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDkxLFxuICAgICAgICAxOCxcbiAgICAgICAgNjksXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjE3LFxuICAgICAgICAxOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDMxLFxuICAgICAgICAxMzIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNDUsXG4gICAgICAgIDQyLFxuICAgICAgICAxMixcbiAgICAgICAgODgsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTcsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjM2LFxuICAgICAgICAxNyxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMDYsXG4gICAgICAgIDI1LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNzcsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTE2LFxuICAgICAgICAxMixcbiAgICAgICAgMTk5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjM1LFxuICAgICAgICA1MyxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTk2LFxuICAgICAgICA4MCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxODQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgOTQsXG4gICAgICAgIDk2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxOCxcbiAgICAgICAgOTMsXG4gICAgICAgIDEwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjUyLFxuICAgICAgICA4NCxcbiAgICAgICAgNjIsXG4gICAgICAgIDE4LFxuICAgICAgICA4MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDQwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTI2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMTIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDYzLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgODksXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjUsXG4gICAgICAgIDQyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDIyMixcbiAgICAgICAgMzUsXG4gICAgICAgIDY0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgsXG4gICAgICAgIDk3LFxuICAgICAgICA5NyxcbiAgICAgICAgNDMsXG4gICAgICAgIDUyLFxuICAgICAgICA5MixcbiAgICAgICAgMTQxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDcwLFxuICAgICAgICA5NyxcbiAgICAgICAgNTQsXG4gICAgICAgIDMwLFxuICAgICAgICAxNyxcbiAgICAgICAgNzMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgODAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTE1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNjksXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjI3LFxuICAgICAgICA5NyxcbiAgICAgICAgNDAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTQ5LFxuICAgICAgICA1MixcbiAgICAgICAgMTA5LFxuICAgICAgICAxODksXG4gICAgICAgIDkyLFxuICAgICAgICAxMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgODksXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTIyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2NixcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgNzhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5MCxcbiAgICAgICAgMjEzLFxuICAgICAgICAyNDYsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMzksXG4gICAgICAgIDE3MixcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE0OCxcbiAgICAgICAgOSxcbiAgICAgICAgOTIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMzksXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTcsXG4gICAgICAgIDUzLFxuICAgICAgICAxNDksXG4gICAgICAgIDkzLFxuICAgICAgICAyMDIsXG4gICAgICAgIDg3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNjYsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTAzLFxuICAgICAgICA3MixcbiAgICAgICAgMjEwLFxuICAgICAgICA4NCxcbiAgICAgICAgMjcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTEsXG4gICAgICAgIDE4MixcbiAgICAgICAgNDMsXG4gICAgICAgIDI0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDM3LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE4NixcbiAgICAgICAgMSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMjMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjEzLFxuICAgICAgICA3NSxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMTQsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNTAsXG4gICAgICAgIDM4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDk3LFxuICAgICAgICAyMCxcbiAgICAgICAgNDYsXG4gICAgICAgIDQsXG4gICAgICAgIDk3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDEzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAzNixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJubHhvZW5rdVJNOHlPMjd5YW1iSTl0ZHJxb2Y3MkwvVmcvaExkTkpKVmNFPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCI3czlycW9RRlJpeXBZU3BMMTdFWHZ3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjliN2FlMzM1LTI1MjMtNGNjMC1iMTUzLTdhMTI0OGMzOTExMVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxODgsXG4gICAgICAxNyxcbiAgICAgIDMwLFxuICAgICAgMTkzLFxuICAgICAgMjUsXG4gICAgICAxMzAsXG4gICAgICA4LFxuICAgICAgMTA2LFxuICAgICAgNTgsXG4gICAgICAxODcsXG4gICAgICA1OCxcbiAgICAgIDI1LFxuICAgICAgMTY3LFxuICAgICAgMTc0LFxuICAgICAgMTM4LFxuICAgICAgMTEsXG4gICAgICA0NSxcbiAgICAgIDE4MyxcbiAgICAgIDIxNixcbiAgICAgIDE5N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNTQsXG4gICAgICAxMzQsXG4gICAgICAyNDksXG4gICAgICA1OCxcbiAgICAgIDE4MSxcbiAgICAgIDU1LFxuICAgICAgMTIsXG4gICAgICAxMCxcbiAgICAgIDI1MCxcbiAgICAgIDEwMCxcbiAgICAgIDk2LFxuICAgICAgMTUwLFxuICAgICAgMzMsXG4gICAgICA0MCxcbiAgICAgIDE1MSxcbiAgICAgIDE0NixcbiAgICAgIDEsXG4gICAgICA3MCxcbiAgICAgIDk5LFxuICAgICAgMTAwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkI3WDhGTlZTXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MTYyOTM1MDM5MzU6MzBAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE0MjQ4NjAyNjY0MTQ0NTozMEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLbXRsK3dDRUlTenZMVUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjFpOU9FbmlnZ1BqdEZmMUxXeXV1b3JRY095NlFLVVBoVWMvek5SdjJ6M2M9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwibzh5UXEzNEUxenFQUFFXT00xSjJvTnExNVVwK1Q5U0Z2eVpvMHV0cXFFZTcxbFM5dDVXZmhXS1JpSW1mMkxMbjhlWGJsRG9odk10TkR2Z1pYTE02QkE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiN0ZzekpGaXZhaitDa2pOc085NkFnTW5LMEZFZVVVdnc4Z044eHFLQk0rbW1DTUcrUTRJN0hGSnBvSzZrVjFQLzU3QWwySXJ2MjBsNkErV1owSnVtQ3c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTE2MjkzNTAzOTM1OjMwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDExOVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyNzUxMzY4LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQlZWXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFCVlYuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJpdW0rb1FqZmFMMG41dllJbWxBaE0rSlVzL2R2dVQ5WDlIUlpIZGhwUmtNPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjc2Mzc0NTk1OSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


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
