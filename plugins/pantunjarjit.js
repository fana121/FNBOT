let handler  = async (m, { conn }) => {
  conn.reply(m.chat,`“${pickRandom(global.pantunjarjit)}”`, m)
}
handler.help = ['pantunjarjit']
handler.tags = ['quotes']
handler.command = /^(pantunjarjit)$/i
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
  return list[Math.floor(list.length * Math.random())]
}

// jangan diubah ya asu
global.pantunjarjit =
  [
  "Dua tiga bunga raya, kamu bukan kawan saya",
  "Dua tiga burung kenari, apa hajat tuan hamba kemari",
  "Dua tiga bulu tangkis, kalo kalah jangan nangis",
  "Sepandai-pandai tupai melompat, polis lagi pandai lompat",
  "Dua tuga ular sawah, besoklah saya bawa",
  "Dua tiga jalan mati, saya sangat susah hati",
  "Dua tiga semua senang, boleh kasih saya menang",
  "Dua tiga kucing berlari, buku aktifity sudah lari",
  ]
