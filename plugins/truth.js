let handler  = async (m, { conn }) => {
  conn.reply(m.chat,`“${pickRandom(global.truth)}”`, m)
}
handler.help = ['truth']
handler.tags = ['fun']
handler.command = /^(truth)$/i
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

// global truth
global.truth =
 ["Pernah suka sama siapa aja? berapa lama?",
  "Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)",
  "apa ketakutan terbesar kamu?",
  "pernah suka sama orang dan merasa orang itu suka sama kamu juga?",
  "Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?",
  "pernah gak nyuri uang nyokap atau bokap? Alesanya?",
  "hal yang bikin seneng pas lu lagi sedih apa",
  "pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?",
  "pernah jadi selingkuhan orang?",
  "hal yang paling ditakutin",
  "siapa orang yang paling berpengaruh kepada kehidupanmu",
  "hal membanggakan apa yang kamu dapatkan di tahun ini",
  "siapa orang yang bisa membuatmu sange",
  "siapa orang yang pernah buatmu sange",
  "(bgi yg muslim) pernah ga solat seharian?",
  "Siapa yang paling mendekati tipe pasangan idealmu di sini",
  "suka mabar(main bareng)sama siapa?",
  "pernah nolak orang? alasannya kenapa?",
  "Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget",
  "pencapaian yang udah didapet apa aja ditahun ini?",
  "kebiasaan terburuk lo pas di sekolah apa?"
 ]