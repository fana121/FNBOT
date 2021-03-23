let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
⚠️ *INFO FNBOT* ⚠️
Dibuat dengan Javascript

Untuk prefix FNBOT menggunakan tanda titik "."
Apa itu prefix?? Prefix adalah tanda untuk melakukan printah. Contoh : .menu

Rec: Fana
Script: @Nurotomo

*Rules FNBOT:*
1. Dilarang Keras Chat Prib Bot!!
2. Dilarang Keras Spam/Telpon Bot!!

*Sosmed :*
Kritik kami di sosmed ataupun YouTube.
╠➥ Instagram: http://bit.ly/safan4-0g
╠➥ YouTube: http://bit.ly/yt-Fana
╠➥ Facebook : https://bit.ly/ki-9693
╠➥ Whatsapp : https://wa.me/6285891927691

*Thanks To :*
Nurotomo
Dan all creator bot yang lain :)

╠═〘 DONASI 〙 ═
╠➥ Gopay : 085891927691
╠➥ Tsel : 082137299043
╠➥ Indosat: 085891927691
╠➥ Saweria : 
║   https://saweria.co/fantod
║
║> Sewa Bot? chat owner 👉 Wa.me/6285891927691
╠═〘 INFO FNBOT 〙 ═
`.trim(), m)
}
handler.help = ['info']
handler.tags = ['info']
handler.command = /^(info)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
