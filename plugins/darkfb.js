let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
━━━━━━━━━━━━━━━━━━━━
Script Dark Fb Termux 
━━━━━━━━━━━━━━━━━━━━

pkg update && pkg upgrade

$ pkg install curl git python2

$ pkg install git

$ pkg install python2

$ pip2 install mechanize

$ pip2 install requests

*💎 NOTED:*
*Gunakan Script dan bot Dengan Bijak!*
*Jika Anda Menyalah gunakan Script dan bot Owner Tidak Bertanggung Jawab!*
`.trim(), m)
}
handler.help = ['darkfb']
handler.tags = ['hack']
handler.command = /^(darkfb)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
