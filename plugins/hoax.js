let handler  = async (m, { conn }) => {
  conn.reply(m.chat,`${pickRandom(global.hoax)}`, m)
}
handler.help = ['hoax']
handler.tags = ['other']
handler.command = /^(hoax)$/i
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
global.hoax =
  [
"Memakai Emas Dapat Menyebabkan Alzheimer",
"1 Ramadhan 2021 Jatuh Pada Hari Jum’at dan Waktu Siang Terpanjang Selama 33 Tahun Terakhir",
"Video “Presiden Jokowi Ingatkan OJK/SWI||Jangan Menyusahkan Rakyat Di Masa Sulit",
"Gambar Papan Nama “RUMAH SAKIT JIWA KECEBONG",
"Tautan Subsidi Kuota Internet dan Pulsa Kemendikbud",
"Tautan Alfamart Bagikan Gift Card Senilai Rp800.000",
"Vaksinasi Covid-19 untuk Warga Non DKI Jakarta di Istora Senayan",
"Masjid dan Madrasah di Pakistan Terbakar Hingga Menimbulkan Korban Jiwa",
"Akun WhatsApp Bupati Sukoharjo Meminta Sejumlah Dana",
"Sanksi Denda E-Tilang  Mencapai 5 Juta",
"Rekrutment Umum PLN Group Tingkat SMA/SMK, D-III, D-IV dan S1 Pelaksanaan Tahun 2021",
"Ruang Kerja Anies Baswedan di Geledah KPK",
"Akun Facebook Wali Kota Malang “Sutiaji Sutiaji",
"Mobil Esemka Berbahan Dasar Kayu “Solo-Jakarta",
"Yosi Mokalu mengenakan kaos bertuliskan BADAN ARAHAN BUZZERP ISTANA",
"Pesan Berantai Whatsapp Bantuan Sosial Finansial Rp3.550.000 Dari BPJS Kesehatan",
"Akun Facebook Wali Kota Kendari Mengarahkan ke Link Whatsapp",
"Vaksin Sinovac, Vaksin yg sebenarnya di peruntukkan untuk ayam",
"Rusia Menemukan bahwa Covid-19 Tidak Disebabkan oleh Virus",
"3 Juta Orang Inggris Masuk Islam Secara Serentak",
]
