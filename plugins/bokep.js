let handler  = async (m, { conn }) => {
  conn.reply(m.chat,`${pickRandom(global.bokep)}`, m)
}
handler.help = ['bokep']
handler.tags = ['tools']
handler.command = /^(bokep)$/i
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
global.bokep =
[
"Nama : DilaPye Colmek\nSize : 90 MB\nDurasi : 5 Menit\nKualitas : HD\nRate : ⭐⭐⭐⭐\n\nDownload Link\nDownload : https://drive.google.com/file/d/1We9TeG1whjz2bmNCrahctK1-Hiy3BtWN/view \n PASSWORD FILE : AA18+#29",
"Nama : Missluttyv SMA\nSize : 74 MB\nDurasi : - Menit\nKualitas : HD\nRate : ⭐⭐⭐\n\nDownload Link\nDownload : https://drive.google.com/file/d/1TodhXRAHt6MHMqS2-3DYmCQoIFe7yuI-/view \nPASSWORD FILE : AA18+#21",
"Nama : Arce\nSize : 64 MB\nDurasi : - Menit\nKualitas : HD\nRate : ⭐⭐⭐⭐\n\nDownload Link\nDownload : https://drive.google.com/file/d/1SwXbmd2sXnYSNYmn_tdCiaBsHHXjYvQM/view \nPASSWORD FILE : AA18+#6",
"Nama : Annisa\nSize : 48 MB\nDurasi : - Menit\nKualitas : HD\nRate : ⭐⭐⭐\n\nDownload Link\nDownload : https://drive.google.com/file/d/1St_Pb9xNZnrSX_fPfaarno6Bpjc3ArUx/view\nPASSWORD FILE : AA18+#5",
"Nama : 038493040494_0[Ws_Gloia]\nSize : 379 MB\nDurasi : 8 Menit\nKualitas : HD++\nRate : ⭐⭐⭐⭐⭐\n\nDownload Link\nDownload : https://drive.google.com/file/d/1Y0ALFotYLT2F8kKjgxMZ_BFJ6vWKalck/view\nPASSWORD FILE : AA18+#30",
"Nama : ASD - Ria Bali\nSize : 165 MB\nDurasi : 45 Menit\nKualitas : HD\nRate : ⭐⭐⭐⭐\n\nDownload Link\nDownload : https://drive.google.com/file/d/1T84UWWj1oJlDAMXd-snZr6gP4Yt61P6P/view\nPASSWORD FILE : AA18+#7",
]
