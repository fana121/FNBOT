let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
π° -----[ *PANDUAN PENGGUNAAN FNBOT* ]----- π°
Berikut adalah cara penggunaan *FNBOT*β»οΈ
         ββββββββββββββββ
Kalo gak paham tuh baca dulu tod jangan maen spam kontolπΏ
         ββββββββββββββββ
βΈ *${prefix}sticker*
Tag salah satu gambar & ketik ${prefix}sticker
βΈ *${prefix}ttp*
Text to sticker contoh : ${prefix}ttp Fantod
βΈ *${prefix}tts*
Suara google contoh : ${prefix}tts id Hallo I'am Fana
βΈ *${prefix}toimg*
Reply sticker yang mau dijadiin image
βΈ *${prefix}nulis*
Untuk menulis dibuku
βΈ *${prefix}calc*
Untuk menghitung (kalkulator)
βΈ *${prefix}quotes*
Random quotes
βΈ *${prefix}hidetag*
Nge tag semua member grup
βΈ *${prefix}ytmp3*
Mendownload lagu dari youtube Gunakan Link Ya Kak
βΈ *${prefix}ytmp4*
Mendownload video dari youtube, gunakan link ya kak
βΈ *${prefix}profile*
Mengambil profil member, contoh : ${prefix}profile @user
βΈ *${prefix}tahta*
Membuat logo, contoh : ${prefix}tahta Fana
βΈ *${prefix}jadibot*
Mengirim qr untuk menjadi bot sementara
βΈ *${prefix}iklan*
Untuk menampilkan daftar sewa bot dan buat bot
βΈ *${prefix}readmore*
Membuat text baca selengkapnya, contoh : ${prefix}readmore text|text
         ββββββββββββββββ
Note : Sisanya gunain otak kalian aja cape w jelasin πΏ
         ββββββββββββββββ
π° -----[ *TUTOR BY FANA* ]----- π°
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

