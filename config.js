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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_05_03_07_31_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTY3LFxuICAgICAgICA2MyxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNjQsXG4gICAgICAgIDk0LFxuICAgICAgICA1NSxcbiAgICAgICAgNjMsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMzksXG4gICAgICAgIDM5LFxuICAgICAgICAyOSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMDAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTk5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMzUsXG4gICAgICAgIDkxLFxuICAgICAgICAyNDEsXG4gICAgICAgIDkyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTMsXG4gICAgICAgIDE0LFxuICAgICAgICAxODIsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMjgsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTAzLFxuICAgICAgICA3OSxcbiAgICAgICAgMjcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTg2LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDY4LFxuICAgICAgICA2MCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE1LFxuICAgICAgICAxMDhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ4LFxuICAgICAgICA0NixcbiAgICAgICAgMzYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTk3LFxuICAgICAgICA4MixcbiAgICAgICAgODMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDY4LFxuICAgICAgICA2LFxuICAgICAgICAyLFxuICAgICAgICAxODgsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTU3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDU2LFxuICAgICAgICAyMjQsXG4gICAgICAgIDcxLFxuICAgICAgICAzMCxcbiAgICAgICAgOCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDExNixcbiAgICAgICAgMTg5LFxuICAgICAgICAxMTZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk0LFxuICAgICAgICAyMCxcbiAgICAgICAgNzMsXG4gICAgICAgIDg5LFxuICAgICAgICA5NCxcbiAgICAgICAgNTEsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjEsXG4gICAgICAgIDY1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTg5LFxuICAgICAgICAyNSxcbiAgICAgICAgMTA1LFxuICAgICAgICAyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNyxcbiAgICAgICAgMTAwLFxuICAgICAgICA3OCxcbiAgICAgICAgNzgsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDc0LFxuICAgICAgICA5MixcbiAgICAgICAgMjE2LFxuICAgICAgICA2MixcbiAgICAgICAgMzQsXG4gICAgICAgIDYxLFxuICAgICAgICAxODksXG4gICAgICAgIDJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDM1LFxuICAgICAgICAxNDgsXG4gICAgICAgIDcxLFxuICAgICAgICAyMTMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDI1LFxuICAgICAgICA3OCxcbiAgICAgICAgMTAsXG4gICAgICAgIDIwLFxuICAgICAgICAzNyxcbiAgICAgICAgMjEwLFxuICAgICAgICAyNyxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDg1LFxuICAgICAgICAxLFxuICAgICAgICAxNyxcbiAgICAgICAgNTYsXG4gICAgICAgIDc0LFxuICAgICAgICAxMjcsXG4gICAgICAgIDkzLFxuICAgICAgICAxNCxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMzAsXG4gICAgICAgIDY3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIsXG4gICAgICAgIDMzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTgyLFxuICAgICAgICA4LFxuICAgICAgICAxMDgsXG4gICAgICAgIDI5LFxuICAgICAgICAxMTYsXG4gICAgICAgIDc2LFxuICAgICAgICAxOTYsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjA2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDk4LFxuICAgICAgICA0NixcbiAgICAgICAgNDMsXG4gICAgICAgIDEzLFxuICAgICAgICAyNDQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgOTAsXG4gICAgICAgIDM4LFxuICAgICAgICA1NSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjU0LFxuICAgICAgICAzNyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNjlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDEwNVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDgxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk4LFxuICAgICAgICAxMDksXG4gICAgICAgIDcxLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNzYsXG4gICAgICAgIDIzLFxuICAgICAgICAxODgsXG4gICAgICAgIDIsXG4gICAgICAgIDE4OSxcbiAgICAgICAgOTEsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTksXG4gICAgICAgIDc5LFxuICAgICAgICAxNTEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgOTAsXG4gICAgICAgIDY2LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgOTcsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNCxcbiAgICAgICAgMTg2LFxuICAgICAgICA2NSxcbiAgICAgICAgMTU0LFxuICAgICAgICA0MixcbiAgICAgICAgMTYsXG4gICAgICAgIDIxLFxuICAgICAgICAyMzUsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIzNixcbiAgICAgICAgOTAsXG4gICAgICAgIDkyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgOTUsXG4gICAgICAgIDEyMixcbiAgICAgICAgNjgsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTU5LFxuICAgICAgICAwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDgxLFxuICAgICAgICAxMzgsXG4gICAgICAgIDk1LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTIwLFxuICAgICAgICA5LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTY2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjIzLFxuICAgICAgICAxOCxcbiAgICAgICAgMzMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTQ3LFxuICBcImFkdlNlY3JldEtleVwiOiBcImVUakEyQXVwOHRwOFQ2QytPclE2K3JMZElDcXIvRmJYWVRwM3diN0ZoMGs9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIld2cWlEQXdZUU1xcHlUajBlbjZORXdcIixcbiAgXCJwaG9uZUlkXCI6IFwiYWM5YzcyOTAtNGVhYi00ZDIxLWI2ZmQtNTY2MDJhYmE0YmVmXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEyOCxcbiAgICAgIDIxNyxcbiAgICAgIDcwLFxuICAgICAgMTMyLFxuICAgICAgMTE5LFxuICAgICAgMjQ3LFxuICAgICAgMTg1LFxuICAgICAgNDEsXG4gICAgICA0NixcbiAgICAgIDIyOCxcbiAgICAgIDEwNCxcbiAgICAgIDE2NCxcbiAgICAgIDIxNixcbiAgICAgIDI0LFxuICAgICAgNTMsXG4gICAgICAxNDksXG4gICAgICAzMixcbiAgICAgIDE3LFxuICAgICAgNzgsXG4gICAgICAxNzVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjQ4LFxuICAgICAgMjA1LFxuICAgICAgMjcsXG4gICAgICAxMzQsXG4gICAgICAxMTYsXG4gICAgICAxLFxuICAgICAgMTY2LFxuICAgICAgMTIzLFxuICAgICAgMjUyLFxuICAgICAgODMsXG4gICAgICAyMjgsXG4gICAgICAxOTMsXG4gICAgICAyMTgsXG4gICAgICAxNTIsXG4gICAgICAyMjIsXG4gICAgICAxMjgsXG4gICAgICAyMDMsXG4gICAgICAxODcsXG4gICAgICAyOSxcbiAgICAgIDExNlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJFWDFRRkZWTFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTE2MjkzNTAzOTM1OjIzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNDI0ODYwMjY2NDE0NDU6MjNAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTTM0aGJjQkVKYUxwN1VHR0FVZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIxelFiRGgvV2dUTXZGTlIxYldIaytFTTl1WXZhL0RwSGpRakJjbGwyYTFzPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkJpNUVVNStVM1ZySTQ2cWJib3N6OHkzRUo1ckkrZWNvSzJmNS8zeWRTKzZqZmxReUpOdkNFWXRHM1NmVjAxTFhHOUNYZkIxb3kva2x1M0UveksyUUFBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIk51Ym9URTZRd0V0b0s5bUY2dWJmQ2doVkREa3Y3N1pMZUxBenQrQU1GZ0NMbkNMYW9nbExlUElhVjU2Y090Z1E4SkRTeGNhUmxmT2NINmRKN1JkNENnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkxNjI5MzUwMzkzNToyM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA5MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyNDAyMjAyXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


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
