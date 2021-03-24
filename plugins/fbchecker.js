let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
━━━━━━━━━━━━━━━━━━━━━
Script Termux Fbchecker 
━━━━━━━━━━━━━━━━━━━━━
$ apt install git

$ apt install php

$ git clone https://github.com/fdciabdul/fbchecker

$ cd fbchecker

$ php fbcheck.php

Untuk menggunakan script ini masukan perintah berikut:

$ php fbcheck.php target.txt


*💎 NOTED:*
*Gunakan Script dan bot Dengan Bijak!*
*Jika Anda Menyalah gunakan Script dan bot Owner Tidak Bertanggung Jawab!*
`.trim(), m)
}
handler.help = ['fbchecker']
handler.tags = ['hack']
handler.command = /^(fbchecker)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
