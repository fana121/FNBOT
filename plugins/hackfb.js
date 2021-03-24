let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
━━━━━━━━━━━━━━━━━━━━
Script Hack FB Termux OSIF 
━━━━━━━━━━━━━━━━━━━━
$ pkg update upgrade

$ pkg install git python2

$ git clone https://github.com/ciku370/OSIF

$ cd OSIF

Setup:

$ pip2 install -r requirements.txt

Cara Menjalankan:

$ python2 osif.py

*💎 NOTED:*
*Gunakan Script dan bot Dengan Bijak!*
*Jika Anda Menyalah gunakan Script dan bot Owner Tidak Bertanggung Jawab!*
`.trim(), m)
}
handler.help = ['hackfb']
handler.tags = ['hack']
handler.command = /^(hackfb)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
