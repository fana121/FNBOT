let handler  = async (m, { conn }) => {
  conn.reply(m.chat,`${pickRandom(global.katailham)}`, m)
}
handler.help = ['katailham']
handler.tags = ['quotes']
handler.command = /^(katailham)$/i
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

// Jangan diubah!!
global.katailham =
[
"” Nggak ada yang peduli denganmu di sosmed kecuali kamu cakep” - Kata ilham.",
"” Sesimpel ini deh, sibuk itu palsu, semua tergantung prioritas” – kata ilham.",
"” Dia hanya menghargaimu, bukan mencintaimu” – kata ilham.",
"” Keadilan sosial hanya berlaku bagi warna negara yang good looking ” – kata ilham.",
"” Jangan jadi pelangi untuk orang yang buta warna ” – kata ilham.",
"” Dia yang tertidur nyenyak setelah mematahkan hatimu tidak pantas untuk kamu ingat ” – kata ilham.",
"” Dia cuman bercanda, harusnya kamu ketawa, bukan malah jatuh cinta ” – kata ilham.",
"” Mencintaimu adalah seni menyakiti diri ‘ – kata ilham.",
"” Jika tidak bisa mewarnai hidup seseorang, maka jangan pudarkan warna aslinya ” – kata ilham.",
"” Cukup tahu namaku, jangan rupaku” – kata ilham.",
"” Sesuatu akan terasa berharga jika sudah kehilangan ” – kata ilham.",
"” Jangan pernah mengeluh ketika kopimu dingin, ia pernah hangat, namun kau diamkan ” – kata ilham."
]
