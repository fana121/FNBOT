let handler  = async (m, { conn }) => {
  conn.sendFile(m.chat,`${pickRandom(global.husbu)}`, m)
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
"https://user-images.githubusercontent.com/79257110/111766569-45c84b80-88d8-11eb-98db-437af8cb9796.jpeg",
"https://user-images.githubusercontent.com/79257110/111766580-47920f00-88d8-11eb-953a-bb9e944c5a31.jpeg",
"https://user-images.githubusercontent.com/79257110/111766583-48c33c00-88d8-11eb-9e4f-8439096dd24f.jpeg",
"https://user-images.githubusercontent.com/79257110/111766588-495bd280-88d8-11eb-8b94-36845bddb3d7.jpeg",
"https://user-images.githubusercontent.com/79257110/111766592-4a8cff80-88d8-11eb-9e4c-74ad8b6e5514.jpeg",
"https://user-images.githubusercontent.com/79257110/111766596-4bbe2c80-88d8-11eb-9d0b-1f571d7ccfc9.jpeg",
"https://user-images.githubusercontent.com/79257110/111766598-4c56c300-88d8-11eb-828b-e38dba26eb46.jpeg",
"https://user-images.githubusercontent.com/79257110/111766602-4d87f000-88d8-11eb-9622-9e0ff0e0a188.jpeg",
"https://user-images.githubusercontent.com/79257110/111766605-4e208680-88d8-11eb-9d10-8760e73116b3.jpeg",
"https://user-images.githubusercontent.com/79257110/111766607-4f51b380-88d8-11eb-90aa-10cf2f004393.jpeg",
"https://user-images.githubusercontent.com/79257110/111766610-4fea4a00-88d8-11eb-911a-5cfd8f1c24b4.jpeg",
"https://user-images.githubusercontent.com/79257110/111766616-511b7700-88d8-11eb-942d-4178adf22c62.jpeg",
"https://user-images.githubusercontent.com/79257110/111766619-51b40d80-88d8-11eb-8cdd-60519139ed83.jpeg",
]
