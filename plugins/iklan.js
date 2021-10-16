let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
🔰 -----[ *「 IKLAN 」* ]----- 🔰

Mahal? Sewa tempat lain kontlo! Kuota mahal
──────────────────────────────
➥ 🤖*DAFTAR SEWA :*🤖
├➤ *SEWA : 10K/GRUP (1 Minggu)*
├➤ *PEMBAYARAN BISA MELALUI :*
├➤ *GOPAY, TRI (+5K), INDOSAT(+5K)*
──────────────────────────────
➥ 🤖*KEUNTUNGAN SEWA BOT :*🤖
├➤ *1. BISA MEMASUKAN BOT KE GROUP*
├➤ *2. BISA MENGGUNAKAN FITUR PREMIUM*
├➤ *NB: 1. GUNAKAN BOT SECUKUPNYA, JANGAN SPAM KARENA BOT BISA KENON OLEH PIHAK WHATSAPP*
├➤     *2. DILARANG KERAS CHAT PRIB BOT*
──────────────────────────────
├➤ *JIKA MINAT IKLAN DIATAS*
├➤ *HARAP HUBUNGI NOMOR DIBAWAH :*
├➤ *wa.me/62895712546050*
──────────────────────────────
🔰 -----[ *「 POWERED BY SHP 」* ]----- 🔰
`.trim(), m)
}
handler.help = ['iklan']
handler.tags = ['info']
handler.command = /^(iklan)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

