let handler  = async (m, { conn }) => {
  conn.reply(m.chat,`${pickRandom(global.fana)}`, m)
}
handler.help = ['katafana']
handler.tags = ['quotes']
handler.command = /^(katafana)$/i
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

// by fana gans:V
global.fana =
  [
  "Dimana ada manusia, disitu ada saia",
  "Jika kalian sedang mengalami masalah, maka bersikap bodohlah agar semua masalah bisa terselesaikan dengan mudah",
  "Jika semua orang boleh, kenapa saya gak boleh?",
  "Jika bisa melakukannya sendiri, kenapa harus disuruh?",
  "Jika kita tidak mau, kenapa kita di paksa?",
  "Terus berjuang agar bisa meraih impian",
  "Jangan tempatkan aku bersama wajah-wajah sendu pada hari bahagiamu.",
  "Aku tak ingin memilikimu, supaya aku tak pernah merasa kehilanganmu.",
  "Aku tak mampu melupakanmu tapi aku sanggup melepaskanmu.",
  ]
