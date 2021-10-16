let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
╭──────「 *ABOUT CREATOR* 」
┴
HALO KAWAN KAWAN👋
SINGKAT PENJELASAN AJA, BUAT KALIAN YANG INGIN AMBIL CASE TOLONG IZIN, DAN BUAT KALIAN REMAKE HINGGA SEMUANYA DI UBAH, TOLONG JANGAN SEPERTI ITU, JANGAN HILANGKAN SAYA DALAM DATABASE SCRIPT BOT WHATSAPP, DAN JANGAN HILANGKAN JUGA CREDIT CREATOR-CREATOR SANAD KARANGAN SCRIPT WHATSAPP BOT SEBELUMNYA.MUNGKIN  ITU AJA YANG AKU SAMPAIKAN, DI BAWAH INI ADA BEBERAPA INFO TENTANG AKU

● *DEVELOPER :*

├♡ۣۜۜ፝͜͜͡͡✿➤ Name : SHP
├♡ۣۜۜ፝͜͜͡͡✿➤ Number : 62895712546050@s.whatsapp.net
├♡ۣۜۜ፝͜͜͡͡✿➤ Link : https://wa.me/62895712546050


● *SOSIAL MEDIA :*

├♡ۣۜۜ፝͜͜͡͡✿➤ *INSTAGRAM :*
├     http://instagram.com/nickname_.safana
├♡ۣۜۜ፝͜͜͡͡✿➤ *YOUTUBE :*
├     https://youtube.com/channel/UC9bYTKtZy6qfV09VAPHR6HA
├♡ۣۜۜ፝͜͜͡͡✿➤*FACEBOOK :*
├     https://www.facebook.com/kang.id.9693



● *DONASI :*

 اتَّقوا النَّارَ ولو بشقِّ تمرةٍ ، فمن لم يجِدْ فبكلمةٍ طيِّبةٍ
_“jauhilah api neraka, walau hanya dengan bersedekah sebiji kurma (sedikit). Jika kamu tidak punya, maka bisa dengan kalimah thayyibah” [HR. Bukhari 6539, Muslim 1016]_

*DONASI SEIKHLASNYA KAK, AGAR DEVELOPER SEMANGAT UNTUK UPDATE/TAMBAHIN FITUR TERBARU DI BOT INI😊*

├♡ۣۜۜ፝͜͜͡͡✿➤ *GOPAY :*
├     0895 7125 46050
├♡ۣۜۜ፝͜͜͡͡✿➤ *INDOSAT :*
├     0858 6792 8862
├♡ۣۜۜ፝͜͜͡͡✿➤ *TRI :*
├     0895 7125 46050

*BEBAS KALIAN MAU DONASI BERAPA, YG PENTING IKHLAS, SEMOGA KALIAN SEMUA DI MUDAHKAN REZEKINYA AMIIN.*
`.trim(), m)
}
handler.help = ['developer']
handler.tags = ['info']
handler.command = /^(developer)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
