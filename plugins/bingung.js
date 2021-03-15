let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
🔰 -----[ *PANDUAN PENGGUNAAN FNBOT* ]----- 🔰
Hallo, %name 👋
Berikut adalah cara penggunaan *FNBOT*♻️
         ────────────────
Kalo gak paham tuh baca dulu tod jangan maen spam kontol🗿
         ────────────────
➸ *${prefix}sticker*
Tag salah satu gambar & ketik ${prefix}sticker
➸ *${prefix}ttp*
Text to sticker contoh : ${prefix}ttp Fantod
➸ *${prefix}tts*
Suara google contoh : ${prefix}tts id Hallo I'am Fana
➸ *${prefix}toimg*
Reply sticker yang mau dijadiin image
➸ *${prefix}nulis*
Untuk menulis dibuku
➸ *${prefix}nulisfolio*
Untuk menulis di folio
➸ *${prefix}quotes*
Random quotes
➸ *${prefix}hidetag*
Nge tag semua member grup
➸ *${prefix}ytmp3*
Mendownload lagu dari youtube Gunakan Link Ya Kak
➸ *${prefix}ytmp4*
Mendownload video dari youtube, gunakan link ya kak
➸ *${prefix}profile*
Mengambil profil member, contoh : ${prefix}profile @user
➸ *${prefix}tahta*
Membuat logo, contoh : ${prefix}tahta Fana
➸ *${prefix}jadibot*
Mengirim qr untuk menjadi bot sementara
➸ *${prefix}iklan*
Untuk menampilkan daftar sewa bot dan buat bot
➸ *${prefix}readmore*
Membuat text baca selengkapnya, contoh : ${prefix}readmore text|text
         ────────────────
Note : Sisanya gunain otak kalian aja cape w jelasin :)
         ────────────────
🔰 -----[ *TUTOR BY FANA* ]----- 🔰
`.trim(), m)
}
handler.help = ['bingungcok']
handler.tags = ['info']
handler.command = /^(bingungcok)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

