let handler = async m => m.reply(`
╭─「 Donasi 」
├➤ Gopay/Dana/Indosat
│   [085891927691]
├➤ Telkomsel
│   [082137299043]
├➤ Saweria
│   https://saweria.co/fantod
╰────
╭─「 Hubungi 」
├➤ Ingin Sewa Bot ? Wa.me/6285891927691
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
           *©FANAGANS*
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
