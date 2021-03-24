let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
╔════「 *ZODIAK LIST* 」
╠✎ Aries (21 Maret – 20 April)
╠✎ Taurus (21 April – 20 Mei)
╠✎ Gemini (21 Mei – 20 Juni)
╠✎ Cancer (21 Juni – 20 Juli)
╠✎ Leo (21 Juli – 21 Agustus)
╠✎ Virgo (22 Agustus – 22 September)
╠✎ Libra (23 September – 22 Oktober)
╠✎ Scorpio (23 Oktober – 22 November)
╠✎ Sagittarius (23 November – 20 Desember)
╠✎ Capricorn (21 Desember – 19 Januari)
╠✎ Aquarius (20 Januari – 18 Februari)
╠✎ Pisces (19 Februari – 20 Maret)
╚════ 「 *FNBOT* 」
`.trim(), m)
}
handler.help = ['listzodiak']
handler.tags = ['tools']
handler.command = /^(listzodiak)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
