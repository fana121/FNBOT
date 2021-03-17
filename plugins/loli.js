let handler  = async (m, { conn }) => {
  conn.reply(m.chat,`“${pickRandom(global.loli)}”`, m)
}
handler.help = ['loli']
handler.tags = ['anime']
handler.command = /^(loli)$/i
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
global.loli =
[
"https://user-images.githubusercontent.com/79257110/111416011-9ba0c600-8715-11eb-8724-47c38abd9291.jpg",
"https://user-images.githubusercontent.com/79257110/111416018-9d6a8980-8715-11eb-9be5-0ad8df999624.jpg",
"https://user-images.githubusercontent.com/79257110/111416020-9e9bb680-8715-11eb-976b-a1a0bff817b5.jpg",
"https://user-images.githubusercontent.com/79257110/111416022-9f344d00-8715-11eb-8588-6d9d763e9543.jpg",
"https://user-images.githubusercontent.com/79257110/111416024-a0657a00-8715-11eb-912d-e2c356eedaac.jpg",
"https://user-images.githubusercontent.com/79257110/111416030-a196a700-8715-11eb-83e1-d7b2e44055a9.jpg",
"https://user-images.githubusercontent.com/79257110/111416031-a2c7d400-8715-11eb-9146-e5e8abe2c8cb.jpg",
"https://user-images.githubusercontent.com/79257110/111416032-a3606a80-8715-11eb-9d8a-63f25521a861.jpg",
"https://user-images.githubusercontent.com/79257110/111416034-a3f90100-8715-11eb-9ff3-fe5e99a1b135.jpg",
"https://user-images.githubusercontent.com/79257110/111416040-a52a2e00-8715-11eb-80fa-1d9885dc35da.jpg",
"https://user-images.githubusercontent.com/79257110/111416041-a65b5b00-8715-11eb-9ab3-13391ab371c0.jpg",
]
