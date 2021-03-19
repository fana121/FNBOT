let handler  = async (m, { conn }) => {
  conn.reply(m.chat,`${pickRandom(global.katanaruto)}`, m)
}
handler.help = ['katanaruto']
handler.tags = ['quotes']
handler.command = /^(katanaruto)$/i
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

// Jangan diubah tod
global.katanaruto =
  [
  "Aku hanya ingin melindungi mereka, walau harus menjalani penderitaan seperti apapun. (Naruto Uzumaki, Chapter 373)",  
  "Aku harus percaya pada diriku sendiri, percaya bahwa aku adalah orang yang mereka percaya. (Naruto Uzumaki)",
  "Aku tak akan menarik kembali kata-kataku, karena itulah jalan ninjaku. (Naruto Uzumaki)",
  "Selemah apapun musuhku, aku tidak akan meremehkan mereka. (Aburame Shino)",
  "Kalau mau saling mengerti, lakukan saja setelah membuat lawan mengalami hal yang sama. (Yahiko, chapter 372)",
  "Penderitaan membuatku semakin kuat dan berkembang. (Pain, chapter 474)",
  "Takdir setiap manusia memang telah ditentukan sejak mereka lahir, tetapi dengan kerja keras kita dapat mengalahkan takdir. (Naruto Uzumaki)",
  "Aku tidak suka dengan orang yang membohongi dirinya sendiri di tengah turunnya salju. (Naruto Uzumaki)",
  "Memang luka di hati ini terasa lebih sakit, dibandingkan semua luka pada tubuhku. (Gaara)",
  "Menjadi Kuat tidak selamanya menyenangkan. Ketika kau kuat, Kau menjadi sombong dan menarik diri. Bahkan jika yang kau incar adalah mimpi. (Uchiha Itachi)",
  "Shinobi yang melanggar aturan memang disebut sampah, tetapi Shinobi yang meninggalkan sahabatnya lebih rendah dari sampah. (Uchiha Obito)",
  "Orang yang meninggalkan temannya lebih buruk dari sampah. (Naruto Uzumaki)",
  "Kelak nanti aku bisa menemanimu hingga akhir waktu. Takkan kubiarkan kau sendiri dalam pahitmu. (Naruto Uzumaki)",
  ]
