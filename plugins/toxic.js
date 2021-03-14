let handler  = async (m, { conn }) => {
  conn.reply(m.chat,`“${pickRandom(global.ttoxic)}”`, m)
}
handler.help = ['toxic']
handler.tags = ['tools']
handler.command = /^(toxic)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

// global toxic
global.toxic =
  [
  "Asu",
  "Memek",
  "Kontol",
  "Bajingan",
  "Ngentod",
  "Jembod",
  "Silet",
  "Peler",
  ]

// global ttoxic
global.ttoxic =
  [
  "Muka lo kek ${pickRandom(global.toxic)}",
  "Woi ${pickRandom(global.toxic)}",
  "Dasar bocah ${pickRandom(global.toxic)}",
  ]
