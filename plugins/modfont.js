let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
✎ 「 *Font* 」
• Ingin mendownload sesuatu?


• Kumpulan Font Untuk Quotes
https://realsht.mobi/JkmXx

• 800 Font Picsay/Pixelab
https://realsht.mobi/brKhI

• 400 Font Picsay/Pixelab
https://realsht.mobi/gBHyt

• 200 Font Picsay/Pixelab
https://realsht.mobi/iJQbj

• 100 Font Picsay/Pixelab
https://realsht.mobi/hrTdE
`.trim(), m)
}
handler.help = ['font']
handler.tags = ['downloader']
handler.command = /^(font)$/i
handler.limit = true

module.exports = handler
