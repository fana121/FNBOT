let handler  = async (m, { conn }) => {
  conn.reply(m.chat,`${pickRandom(global.toxic)}`, m)
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
  "Woi kontol",
  "Bapaklu jagoan mana ngentot",
  "Bewan sini asu",
  "Memeklu item kan",
  "Pasti kontolnya item",
  "Muka lo mirip asu",
  "Muka lo mirip babi",
  ]
