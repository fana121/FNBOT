let handler  = async (m, { conn }) => {
  conn.reply(m.chat,`${pickRandom(global.tembak)}`, m)
}
handler.help = ['tembak']
handler.tags = ['other']
handler.command = /^(tembak)$/i
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
global.tembak =
  [
"Setiap kali aku bersamamu, aku tidak bisa menghindari merasakan sesuatu yang sangat istimewa di hatiku. Satu-satunya alasan adalah aku akan senang bersamamu sepanjang hari dan membuat segalanya mungkin untuk membuatmu bahagia. Apakah kamu mau menjadi pacarku?",
"Meskipun aku memiliki banyak hal untuk dikatakan, tetapi kata-kataku bersembunyi dariku dan aku tidak bisa mengungkapkannya. Hal sederhana yang ingin aku katakan adalah aku mencintaimu hari ini dan selalu.",
"Kamu adalah satu-satunya yang lebih mengerti aku daripada diriku sendiri. Kamu adalah satu-satunya yang dapatku bagi segalanya, bahkan rahasia pribadiku. Aku ingin kamu selalu bersamaku. Aku mencintaimu.",
"Cinta bukan kata untuk diucapkan. Cinta bukanlah permainan untuk dimainkan. Cinta tidak dimulai pada bulan April dan berakhir pada bulan Mei. Cinta itu kemarin, besok, dan selamanya. Apakah kamu mau menjadi milikku selamanya?",
"Saatnya untuk membuka hatiku dan mengungkapkan perasaanku yang terdalam kepadamu. Aku ingin kamu tahu bahwa aku mencintaimu seperti aku tidak pernah mencintai siapa pun sebelumnya.",
"Ini cintaku, ambillah. Ini jiwaku, gunakan itu. Ini hatiku, jangan hancurkan. Ini tanganku, pegang dan bersama-sama kita akan membuatnya abadi.",
"Jika aku bisa memberimu hadiah, aku akan memberimu cinta dan tawa, hati yang damai, mimpi dan kegembiraan khusus selamanya. Biarkan aku melakukannya sekarang.",
"Cinta adalah emosi yang hebat, yang membuat kita terus kuat, aku mencintaimu dengan hatiku, tubuhku dan jiwaku, aku suka cara aku tetap mencintaimu.",
"Biarlah yang lalu menjadi masa laluku, namun untuk masa kini maukah kamu menjadi masa depanku?",
"Kamu telah hidup dalam mimpiku untuk waktu yang lama, bagaimana jika menjadikannya nyata untuk sekali saja?",
"Biarkan aku membuatmu bahagia selamanya. Kamu hanya perlu melakukan satu hal: jatuh cinta denganku.",
"Kamu harus membiarkan aku mencintaimu, biarkan aku menjadi orang yang memberimu semua yang kamu inginkan dan butuhkan.",
"Pertama kali aku melihatmu aku sudah dapat merasakan kalau engkaulah sebagian dari napasku, tanpamu aku hampa kehilangan sebagian nyawa. Jadilah kekasih hatiku. Tanpamu aku hampa, hanya badan tanpa nyawa.",
"Tak ada alasan yang pasti dan jelas kenapa aku cinta kamu, tapi yang pasti aku menginginkan aku bahagia denganmu dan tak ingin sampai kamu terluka.",
"Aku bukan yang terhebat, namun aku yakin kalau aku mampu membahagiakanmu dengan bermodalkan cinta dan kasih sayang, kamu mau kan denganku?",
"Biarlah yang lalu menjadi masa laluku, namun untuk masa kini maukah kamu menjadi masa depanku?",
"Telah banyak waktuku terlewati bersamamu, suka maupun duka senang maupun susah kamu telah menghiasi hariku saat aku bersamamu dan aku mau kita selamanya dekat denganmu. Karna aku mau kamu jadi pacar aku?",
"Ketika mata ini memandang raut wajahmu yang indah, hanya tiga kata yang terucap dari lubuk hatiku yang paling dalam *aku cinta kamu*",
"Aku hanya cowok biasa yang memiliki banyak kekurangan dan mungkin tak pantas mengharapkan cintamu, namun jika kamu bersedia menerimaku menjadi kekasih, aku berjanji akan melakukan apapun yang terbaik untukmu. Maukah kamu menerima cintaku?",
]
