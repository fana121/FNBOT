let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
━━━━━━━━━━━━━━━━━━━━
Shellphish – Tools Phishing Termux 
━━━━━━━━━━━━━━━━━━━━
git clone https://github.com/thelinuxchoice/shellphish

$ cd shellphish

$ bash shellphish.sh

*💎 NOTED:*
*Gunakan Script dan bot Dengan Bijak!*
*Jika Anda Menyalah gunakan Script dan bot Owner Tidak Bertanggung Jawab!*
`.trim(), m)
}
handler.help = ['toolsphising']
handler.tags = ['hack']
handler.command = /^(toolsphising)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
