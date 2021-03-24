let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
━━━━━━━━━━━━━━━━━━━━
Tombol Termux Up Down - Terkey
━━━━━━━━━━━━━━━━━━━━
$ pkg update & pkg upgrade
$ pkg install python
$ pkg install git
$ git clone https://github.com/karjok/terkey
$ cd terkey
$ python terkey.py

*💎 NOTED:*
*Gunakan Script dan bot Dengan Bijak!*
*Jika Anda Menyalah gunakan Script dan bot Owner Tidak Bertanggung Jawab!*
`.trim(), m)
}
handler.help = ['terkey']
handler.tags = ['hack']
handler.command = /^(terkey)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
