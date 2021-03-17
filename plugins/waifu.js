let handler  = async (m, { conn }) => {
  conn.reply(m.chat,`“${pickRandom(global.waifu)}”`, m)
}
handler.help = ['waifu']
handler.tags = ['anime']
handler.command = /^(waifu)$/i
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
global.waifu =
  [
"Mea Kurosaki from To Love-Ru,\nhttp://randomwaifu.altervista.org/images/0008.png",
"Ochaco Uraraka from My Hero Academia,\nhttp://randomwaifu.altervista.org/images/0057.png",
"Jibril from No Game No Life,\nhttp://randomwaifu.altervista.org/images/0056.png",
"Tohru from Miss Kobayashi's Dragon Maid,\nhttp://randomwaifu.altervista.org/images/0045.png",
"Android N21 from Dragon Ball,\nhttp://randomwaifu.altervista.org/images/0078.png",
"Misaki Okusawa from BanG Dream!,\nhttp://randomwaifu.altervista.org/images/0035.png",
"Reina Kousaka from Hibike! Euphonium,\nhttp://randomwaifu.altervista.org/images/0027.png",
"Tohru from Miss Kobayashi's Dragon Maid,\nhttp://randomwaifu.altervista.org/images/0045.png",
"Azusa Azuki from Hentai oji to warawanai neko,\nhttp://randomwaifu.altervista.org/images/0086.png",
"Raphtalia from The Rising of the Shield Hero,\nhttp://randomwaifu.altervista.org/images/0085.png",
"Uzaki Hana from Uzaki-chan wa Asobitai,\nhttp://randomwaifu.altervista.org/images/0013.png",
]
