let handler = async (m, { conn, text }) => {
  conn.reply(m.chat, `
*Pertanyaan:* ${m.text}
*Jawaban:* ${pickRandom(['100% Hati hati dia kang lesbi*','87% *Woah*','68% *Lumayan*','50% *Setengah lesbi setengah normal*','29%','10%'])}
`.trim(), m)
}
handler.help = ['kadarlesbi']
handler.tags = ['kerang']
handler.customPrefix = /(\?$)/
handler.command = /^kadarlesbi$/i
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
  return list[Math.floor(Math.random() * list.length)]
}
