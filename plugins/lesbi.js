let handler = async (m, { conn, command, text }) => {
  conn.reply(m.chat, `
*Pertanyaan:* ${command} ${text}
*Jawaban:* ${Math.floor(Math.random() * 10)} ${pickRandom(['100% Hati hati dia kang lesbi*','87% *Woah*','68% *Lumayan*','50% *Setengah lesbi setengah normal*','29%','10%'])}
`.trim(), m)
}
handler.help = ['kadarlesbi <@user>')
handler.tags = ['kerang']
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
