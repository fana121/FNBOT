let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
Prefix yg digunakan FNBOT adalah *( ${global.prefix} )*
`.trim() m)
}
handler.help = ['cekprefix']
handler.tags = ['info']
handler.command = /^(cekprefix)$/i

module.exports = handler
