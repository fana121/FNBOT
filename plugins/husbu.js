let handler  = async (m, { conn }) => {
  conn.reply(m.chat,`${pickRandom(global.husbu)}`, m)
}
handler.help = ['husbu']
handler.tags = ['anime']
handler.command = /^(husbu)$/i
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
global.husbu =
  [
"Mikoto Mikoshiba\nhttp://storage.jurnalotaku.com/wp-content/uploads/2017/08/joi-mikorin-featured-700x394.jpg",
"(Top Leader) Mikazuki Augus,\nhttp://storage.jurnalotaku.com/wp-content/uploads/2018/12/joi-mikazuki-top5-700x394.jpg",
"Azusagawa Sakuta,\nhttp://storage.jurnalotaku.com/wp-content/uploads/2018/12/Sakuta_Azusagawa_Anime_-_Screenshot_1-700x394.png",
"Hideyuki Maya,\nhttp://storage.jurnalotaku.com/wp-content/uploads/2017/01/joi-maya-featured-700x458.jpg",
"Willem Kmetsch,\nhttp://storage.jurnalotaku.com/wp-content/uploads/2019/02/Films-TV-15_02_2019-21_33_37-700x394.png",
"(Top Leader) Mikazuki Augus,\nhttp://storage.jurnalotaku.com/wp-content/uploads/2018/12/joi-mikazuki-top5-700x394.jpg",
"Hideyuki Maya,\nhttp://storage.jurnalotaku.com/wp-content/uploads/2017/01/joi-maya-featured-700x458.jpg",
"Willem Kmetsch,\nhttp://storage.jurnalotaku.com/wp-content/uploads/2019/02/Films-TV-15_02_2019-21_33_37-700x394.png",
"Azusagawa Sakuta,\nhttp://storage.jurnalotaku.com/wp-content/uploads/2018/12/Sakuta_Azusagawa_Anime_-_Screenshot_1-700x394.png",
"(Top Leader) Mikazuki Augus,\nhttp://storage.jurnalotaku.com/wp-content/uploads/2018/12/joi-mikazuki-top5-700x394.jpg",
]
