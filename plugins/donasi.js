let handler = async m => m.reply(`
╭─「 *Donasi* 」
├➤ Gopay
│   [0895712546050]
├➤ Indosat
│   [085867928862]
├➤ Tri
│   [0895712546050]
╰────
╭─「 Hubungi 」
├➤ Ingin Sewa Bot ? Wa.me/62895712546050
╰────

Mau donasi ya kak ✨
 اتَّقوا النَّارَ ولو بشقِّ تمرةٍ ، فمن لم يجِدْ فبكلمةٍ طيِّبةٍ
_“jauhilah api neraka, walau hanya dengan bersedekah sebiji kurma (sedikit). Jika kamu tida k punya, maka bisa dengan kalimah thayyibah” [HR. Bukhari 6539, Muslim 1016]_ 🙏🏻🐦

Ini *#caranya untuk Donasi*
*Cara Donasi*:
1.) Beli ke pulsa/ konter terdekat semisal Indomaret
2.) Bilang ke konter terdekat..
"Beli pulsa telkomsel"
3.)Dan terus masukkan nomor kami diatas
4.) Jika sudah kirim bukti ke sini.. Terimakasih
*Kalau tidak juga gak papa*👍🏻

▌│█║▌║▌║║▌║▌║█│▌ ▌│█║▌║▌║║▌║▌║█│▌
             *©SHP2021*
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
