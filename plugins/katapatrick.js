let handler  = async (m, { conn }) => {
  conn.reply(m.chat,`${pickRandom(global.katapatrick)}`, m)
}
handler.help = ['katapatrick']
handler.tags = ['quotes']
handler.command = /^(katapatrick)$/i
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

// jangan diubah
global.katapatrick =
  [
  "Tenang saja Rocky, kamu bisa pergi saat kamu mau",
  "Mungkin aku bodoh, tapi aku tidak dungu",
  "Pengetahuan tidak bisa mengganti persahabatan. Aku lebih baik menjadi seorang idiot!",
  "Hidup ini memang tidak adil, maka biasakanlah dirimu!",
  "Kadang kita harus melihat jauh ke dalam diri kita untuk menyelesaikan masalah",
  "Sekarang yang kuperlukan adalah sebuah kumis ajaib dan semua mimpiku akan terwujud!",
  "Aku tidak berkomentar tentang caramu menjalani hidup",
  ]
