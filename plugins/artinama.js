let handler = async (m, { conn, command, text }) => {
  conn.reply(m.chat, `
*Pertanyaan:* ${command} ${text}
*Jawaban:* Analitis, memahami, pengetahuan, senang belajar, bermeditasi, penuh kesadaran.  Anda orang yang memerlukan tempat dimana anda bisa merasa nyaman dengan yang lain. Anda terlalu menutup diri sehingga seringkali dengan mudah mengalami depresi. Keinginan anda untuk menemukan jawaban-jawaban tersembunyai adalah dengan bantuan supranatural atau hal-hal lain yang tidak disangka karena kepribadian anda yang memang sangat tertutup dan lebih baik tidak berbicara. Perasaan anda tidak terdeteksi oleh orang-orang disekitar karena anda tidak pernah membicarakan tentang diri secara benar. Percakapan anda hanya akan menjadi tidak bernilai. Ketahuilah bahwa anda perlu menjadi diri sendiri dan berusaha menjadi teman yang nyata bagi banyak orang.
`.trim(), m, m.mentionedJid ? {
    contextInfo: {
      mentionedJid: m.mentionedJid
    }
  } : {})
}
handler.help = ['artinama <nama>']
handler.tags = ['kerang']
handler.command = /^artinama$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

