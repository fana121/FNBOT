let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
Syarat dan Ketentuan *FNBOT*
1. Dilarang keras spam/telpon bot!!
2. Dilarang keras chat prib bot!!
3. Kami tidak menyimpan gambar, video, file, audio, dan dokumen yang anda kirim
4. Kami tidak pernah meminta anda untuk memberikan *informasi pribadi* anda
5. Jika menemukan Bug/Error silahkan langsung lapor ke *Owner* bot
6. Apapun yang anda perintah pada bot ini, *OWNER/DEVELOPER TIDAK AKAN BERTANGGUNG JAWAB!*

Thanks !
`.trim(), m)
}
handler.help = ['rules']
handler.tags = ['info']
handler.command = /^(rules)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
