let handler  = async (m, { conn }) => {
  conn.reply(m.chat,`“${pickRandom(global.quran)}”`, m)
}
handler.help = ['quran']
handler.tags = ['islam']
handler.command = /^(quran)$/i
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
global.quran =
[
"Q.S. Al Baqarah ayat 165\nوَالَّذِينَ آمَنُوا أَشَدُّ حُبًّا لِلَّهِ\nArtinya: Orang-orang yang beriman lebih kuat cintanya kepada Allah. ",
"Q.S. Ali Imran ayat 31\nقُلْ إِنْ كُنْتُمْ تُحِبُّونَ اللَّهَ فَاتَّبِعُونِي يُحْبِبْكُمُ اللَّهُ وَيَغْفِرْ لَكُمْ ذُنُوبَكُمْ ۗ وَاللَّهُ غَفُورٌ رَحِيمٌ\nArtinya: Katakanlah: "Jika kamu (benar-benar) mencintai Allah, ikutilah aku, niscaya Allah mengasihi dan mengampuni dosa-dosamu". Allah Maha Pengampun lagi Maha Penyayang.",
"Q.S. Maryam ayat 96\nإِنَّ الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ سَيَجْعَلُ لَهُمُ الرَّحْمَٰنُ وُدًّا\nArtinya: Sesungguhnya orang-orang yang beriman dan beramal saleh, kelak Allah Yang Maha Pemurah akan menanamkan dalam (hati) mereka rasa kasih sayang.",
"Q.S. An-Nisa' ayat 59\nيَا أَيُّهَا الَّذِينَ آمَنُوا أَطِيعُوا اللَّهَ وَأَطِيعُوا الرَّسُولَ\nArtinya: Hai orang-orang yang beriman, taatilah Allah dan taatilah Rasul-Nya…",
"Q.S. An-Naba' ayat 8\nوَخَلَقْنَاكُمْ أَزْوَاجًا\nArtinya: Dan Kami jadikan kamu berpasang-pasangan,...",
"Q.S. Az-Zariyat ayat 49\nوَمِنْ كُلِّ شَيْءٍ خَلَقْنَا زَوْجَيْنِ لَعَلَّكُمْ تَذَكَّرُونَ\nArtinya: Dan segala sesuatu Kami ciptakan berpasang-pasangan supaya kamu mengingat kebesaran Allah.",
]
