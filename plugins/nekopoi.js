let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
Mau akses/nonton nekopoi tanpa download vpn? Klik link dibawah ini lalu scroll kebawah terus ketik setuju & hubungkan.

https://www.hidemyass-freeproxy.com/proxy/id-id/aHR0cHM6Ly9uZWtvcG9pLmNhcmUv

*Selamat Menonton*
`.trim(), m)
}
handler.help = ['nekopoi']
handler.tags = ['tools']
handler.command = /^(nekopoi)$/i
handler.limit = true

module.exports = handler
