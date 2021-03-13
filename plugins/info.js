let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
⚠️ *INFO FNBOT* ⚠️
Dibuat dengan Javascript

Rec: Fantodd
Script: @Nurotomo
Github: 
%github

*Sosmed :*
Kritik kami di sosmed ataupun YouTube.
╠➥ Instagram: https://www.instagram.com/safan4._.0g
╠➥ YouTube: https://m.youtube.com/channel/UC9bYTKtZy6qfV09VAPHR6HA
╠➥ Facebook : https://www.facebook.com/kang.id.9693
╠➥ Whatsapp : https://wa.me/6285891927691

*Thanks To :*
Nurotomo
Ramlan
Drawl Nag
Fantod
Dan kawan-kawan yang lain :)

╠═〘 DONASI 〙 ═
╠➥ Gopay : 085891927691
╠➥ Tsel : 082137299043
╠➥ Indosat: 085891927691
╠➥ Saweria : https://saweria.co/fantod
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
