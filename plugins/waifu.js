let handler  = async (m, { conn }) => {
  conn.sendFile(m.chat,`${pickRandom(global.waifu)}`, m)
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
"https://user-images.githubusercontent.com/79257110/111774965-bb391980-88e2-11eb-91ea-48c23712d03e.jpg",
"https://user-images.githubusercontent.com/79257110/111774971-bd9b7380-88e2-11eb-80aa-0cb1a3061f69.jpg",
"https://user-images.githubusercontent.com/79257110/111774974-becca080-88e2-11eb-9491-e26eeacdb2cb.jpg",
"https://user-images.githubusercontent.com/79257110/111774979-bffdcd80-88e2-11eb-983d-a1f944c26ae9.jpg",
"https://user-images.githubusercontent.com/79257110/111774985-c12efa80-88e2-11eb-8872-6a06eb0cc1a6.jpg",
"https://user-images.githubusercontent.com/79257110/111774989-c2602780-88e2-11eb-8bb3-0a9d57e072db.jpg",
"https://user-images.githubusercontent.com/79257110/111774991-c2f8be00-88e2-11eb-98a7-cba8c4a888c6.jpg",
"https://user-images.githubusercontent.com/79257110/111774992-c3915480-88e2-11eb-9078-109cdadb4135.jpg",
"https://user-images.githubusercontent.com/79257110/111775000-c55b1800-88e2-11eb-9177-67753851939f.jpg",
"https://user-images.githubusercontent.com/79257110/111775004-c5f3ae80-88e2-11eb-9e69-0773d13407d4.jpg",
"https://user-images.githubusercontent.com/79257110/111775008-c724db80-88e2-11eb-8d9b-bb479648f38e.jpg",
"https://user-images.githubusercontent.com/79257110/111775012-c8560880-88e2-11eb-8256-6924d8746989.jpg",
"https://user-images.githubusercontent.com/79257110/111775013-c9873580-88e2-11eb-8296-669ec1525d2b.jpg",
]
