let handler = async (m, { conn, usedPrefix; _p }) => {
  conn.reply(m.chat, `
Imsyak : 04:20
Subuh : 04:30
Dhuha : 06:30
Dzuhur : 12:00
Ashar : 15:15
Maghrib : 18:00
Isya : 19:00
`.trim(), m)
}
handler.help = ['jadwalsholat']
handler.tags = ['other']
handler.command = /^(jadwalsholat)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
