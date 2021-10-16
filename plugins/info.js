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
╠➥ Instagram: http://www.instagram.com/nickname_.safana
╠➥ YouTube: https://www.youtube.com/channel/UC9bYTKtZy6qfV09VAPHR6HA
╠➥ Facebook : https://https://www.facebook.com/kang.id.9693
╠➥ Whatsapp : https://wa.me/62895712546050

*Thanks To :*
Nurotomo
Dan all creator bot yang lain :)

╠═〘 DONASI 〙 ═
╠➥ Gopay : 0895712546050
╠➥ Tri : 0895712546050
╠➥ Indosat: 085867928862
║
║> Sewa Bot? chat owner 👉 Wa.me/62895712546050
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
