let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
🔰 -----[ *「 IKLAN 」* ]----- 🔰
──────────────────────────────
➥ 🤖*DAFTAR SEWA & BUAT BOT :*🤖
├➤ *SEWA : 15K/GRUP (BULAN)*
├➤ *BUAT : 50K (BISA JADI OWNER)*
├➤ *PEMBAYARAN BISA MELALUI :*
├➤ *GOPAY, TELKOMSEL(+10K), INDOSAT(+5K)*
──────────────────────────────
➥ 🤖*KEUNTUNGAN SEWA BOT :*🤖
├➤ *1. BISA MEMASUKAN BOT KE GROUP*
├➤ *2. BISA MENGGUNAKAN FITUR PREMIUM*
├➤ *NB: 1. GUNAKAN BOT SECUKUPNYA, JANGAN SPAM KARENA BOT BISA KENON OLEH PIHAK WHATSAPP*
├➤     *2. DILARANG KERAS CHAT PRIB BOT*
➥ 🤖*KEUNTUNGAN BUAT BOT :*🤖
├➤ *1. BISA MENJADI OWNER BOT SENDIRI*
├➤ *2. BISA MENGGANTI NAMA BOT SENDIRI*
├➤ *3. BISA MEMBAWA BOT KE GROUP*
├➤ *4. BISA MENGGUNAKAN COMMAND OWNER*
├➤ *5. BISA MENYEWAKAN BOT KEMBALI*
├➤ *NB: DIKASIH TUTOR BUAT BOT, WORK? YA PASTI (PAHAMI DULU BARU PRAKTEKIN)
──────────────────────────────
├➤ *JIKA MINAT IKLAN DIATAS*
├➤ *HARAP HUBUNGI NOMOR DIBAWAH :*
├➤ *wa.me/6285891927691*
──────────────────────────────
🔰 -----[ *「 POWERED BY FANA 」* ]----- 🔰
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

