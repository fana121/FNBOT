let handler = async (m, { conn, text }) => {
  conn.reply(m.chat, `
*Pertanyaan:* ${m.text}
*Jawaban:* ${pickRandom(['Pintar','Baik','Sombong','Penyayang','Pemurah','Bijaksana','Goblok','Agak pintar','Mungkin baik','Mungkin sombong','Mungkin penyayang','Mungkin pemurah','Mungkin bijaksana'])}
`.trim(), m)
}
handler.help = ['watak <teks>?']
handler.tags = ['kerang']
handler.command = /^watak$/i
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
