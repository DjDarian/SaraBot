
let handler = async(m, { conn, usedPrefix, command }) => {

    let don = `
*┏ ┅ ━━━━━━━━━ ┅ ━*
*┇💖 𝙃𝙤𝙡𝙖!!*
*┇ ᴛᴇ ᴀɢʀᴀᴅᴇᴢᴄᴏ, ᴘᴏʀ ᴀʏᴜᴅᴀʀᴍᴇ ʏ ᴘᴏʀ ᴜsᴀʀ ᴍɪ ʙᴏᴛ*
*┇ ɢʀᴀᴄɪᴀs, ʏᴏ ɴᴏ ᴘɪᴅᴏ ᴅɪɴᴇʀᴏ.*
*┇ ɴᴏ ᴛᴇɴɢᴏ ᴘᴀʏᴘᴀʟ. sᴏᴍᴏs ʜᴜᴍɪʟᴅᴇs,*
*┇ ᴘᴇʀᴏ sɪ ǫᴜɪᴇʀᴇs ᴘᴜᴇᴅᴇ ᴀᴘᴏʏᴀʀ ᴀʟ ʙᴏᴛ.*
*┇ sᴜsᴄʀɪʙɪᴇɴᴅᴏsᴇ ᴀʟ ᴄᴀɴᴀʟ ᴏғɪᴄɪᴀʟ ᴅᴇʟ ʙᴏᴛ*
*┇ ᴘᴀʀᴀ ǫᴜᴇ ᴄᴀᴅᴀ ᴠᴇᴢ sᴏᴍᴏs ᴍᴀs*
*┇ *
*┇ ʏᴀ ᴄᴏɴ ᴇsᴏ sᴏʏ ғᴇʟɪᴢ.😄*
*┇ ʏ ᴀᴘᴏʏᴀʀʟᴏs ᴄᴏɴ ᴜɴᴀ 🌟 ᴇʟ ɢɪᴛʜᴜʙ ᴏғɪᴄɪᴀʟ ᴅᴇʟ ʙᴏᴛ*
*┃* ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
*┃* ʏᴏᴜᴛᴜʙᴇ | sᴜsᴄʀɪʙɪʀᴛᴇ 🔕
*┃*  *https://www.youtube.com/AGREGAR LINK
*┃* ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
*┃*  ɢɪᴛʜᴜʙ 🌟
*┃*  *${fgig}*
*┃* ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
*┃*  ᴛɪᴋᴛᴏᴋ
*┃*  *https://www.tiktok.com/AGREGAR LINK*
*┃* ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
*┃*  ғᴀᴄᴇʙᴏᴏᴋ
*┃* *LINK DE FACEBOOK*
*┃* ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
*┃* ᴀɢʀᴀᴄɪᴍɪᴇɴᴛᴏs:
*┃* SaraBot ᴛɪᴇɴᴇ ғᴜɴᴄɪᴏɴᴇs
*┃* ǫᴜᴇ ᴘᴇʀᴛᴇɴᴇᴢᴄᴀɴ
*┃* ᴀ ʟᴀs sɪɢᴜᴇɴᴛᴇs ᴇᴍᴘʀᴇsᴀ(s)|ᴏʀɢᴀɴɪᴢᴀᴄɪᴏɴ(ᴇs)
*┃* ᴘᴇʀsᴏɴᴀ(s):
*┃* ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
*┃* DjDarianRomano
*┃* *https://github.com/DjDarian*
*┃*  ɢʀᴀᴄɪᴀs!!!
*┗ ┅ ━━━━━━━━━ ┅ ━*
`
let img = 'https://i.ibb.co/37FP2bk/donate.jpg'
conn.sendButton(m.chat, don, 'SaraBot', img, [['GRUPO', `${usedPrefix}grupos`]],m, rpyp)
}

handler.help = ['donate']
handler.tags = ['main']
handler.command = ['apoyar', 'donate', 'donar'] 
handler.register = true
export default handler
