let handler  = async (m, { conn }) => {
  conn.reply(m.chat,`“${pickRandom(global.waifu)}”`, m)
}
handler.help = ['waifu']
handler.tags = ['quotes']
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
    {
	"teks": "Yui Hirasawa from K-ON!",
	"image": "http://randomwaifu.altervista.org/images/0030.png"
    },
    {
	"teks": "Mea Kurosaki from To Love-Ru",
	"image": "http://randomwaifu.altervista.org/images/0008.png"
    },
    {
	"teks": "Ochaco Uraraka from My Hero Academia",
	"image": "http://randomwaifu.altervista.org/images/0057.png"
    },
    {
	"teks": "Jibril from No Game No Life",
	"image": "http://randomwaifu.altervista.org/images/0056.png"
    },
    {
	"teks": "Tohru from Miss Kobayashi's Dragon Maid",
	"image": "http://randomwaifu.altervista.org/images/0045.png"
    },
    {
	"teks": "Android N21 from Dragon Ball",
	"image": "http://randomwaifu.altervista.org/images/0078.png"
    },
    {
	"teks": "Misaki Okusawa from BanG Dream!",
	"image": "http://randomwaifu.altervista.org/images/0035.png"
    },
    {
	"teks": "Reina Kousaka from Hibike! Euphonium",
	"image": "http://randomwaifu.altervista.org/images/0027.png"
    },
    {
	"teks": "Tohru from Miss Kobayashi's Dragon Maid",
	"image": "http://randomwaifu.altervista.org/images/0045.png"
    },
    {
	"teks": "Azusa Azuki from Hentai oji to warawanai neko",
	"image": "http://randomwaifu.altervista.org/images/0086.png"
    },
    {
	"teks": "Raphtalia from The Rising of the Shield Hero",
	"image": "http://randomwaifu.altervista.org/images/0085.png"
    },
    {
	"teks": "Kurumi Tokisaki from Date a Live!",
	"image": "http://randomwaifu.altervista.org/images/0044.png"
    },
    {
	"teks": "Tsurumaki Kokoro from BanG Dream!",
	"image": "http://randomwaifu.altervista.org/images/0069.png"
    },
    {
	"teks": "Satsuki Kiryuin from Kill la Kill",
	"image": "http://randomwaifu.altervista.org/images/0022.png"
    },
    {
	"teks": "Ruri Gokou from Oreimo",
	"image": "http://randomwaifu.altervista.org/images/0004.png"
    },
    {
	"teks": "Dono from Dono-san chi no doe",
	"image": "http://randomwaifu.altervista.org/images/0015.png"
    },
    {
	"teks": "Reina Kousaka from Hibike! Euphonium",
	"image": "http://randomwaifu.altervista.org/images/0027.png"
    },
    {
	"teks": "Yuri Nakamura from Angel Beats!",
	"image": "http://randomwaifu.altervista.org/images/0050.png"
    },
    {
	"teks": "Uzaki Hana from Uzaki-chan wa Asobitai",
	"image": "http://randomwaifu.altervista.org/images/0013.png"
    },
    {
	"teks": "Shuten Douji from Fate/Grand Order",
	"image": "http://randomwaifu.altervista.org/images/0083.png"
    },
    {
	"teks": "Mirai Kuriyama from Kyoukai no Kanata",
	"image": "http://randomwaifu.altervista.org/images/0025.png"
    },
    {
	"teks": "Kyouko Toshinou from Yuru Yuri!",
	"image": "http://randomwaifu.altervista.org/images/0018.png"
    },
    {
	"teks": "Ochaco Uraraka from My Hero Academia",
	"image": "http://randomwaifu.altervista.org/images/0057.png"
    },
    {
	"teks": "Unknown from Unknown",
	"image": "http://randomwaifu.altervista.org/images/0067.png"
    },
    {
	"teks": "Nadeshiko Kagamihara from Yuru Camp",
	"image": "http://randomwaifu.altervista.org/images/0099.png"
    },
    {
	"teks": "Albedo from Overlord",
	"image": "http://randomwaifu.altervista.org/images/0093.png"
    },
    {
	"teks": "Reina Kousaka from Hibike! Euphonium",
	"image": "http://randomwaifu.altervista.org/images/0027.png"
    },
    {
	"teks": "Sasaki Chiho from Hataraku Maou-sama!",
	"image": "http://randomwaifu.altervista.org/images/0041.png"
    },
    {
	"teks": "Unknown from Unknown",
	"image": "http://randomwaifu.altervista.org/images/0067.png"
    },
    {
	"teks": "Kaori Miyazono from Your Lie in April",
	"image": "http://randomwaifu.altervista.org/images/0097.png"
    },
    {
	"teks": "Shuten Douji from Fate/Grand Order",
	"image": "http://randomwaifu.altervista.org/images/0083.png"
    },
    {
	"teks": "Himari Uehara from BanG Dream!",
	"image": "http://randomwaifu.altervista.org/images/0084.png"
    },
    {
	"teks": "Haruhi Suzumiya from The Melancholy of Haruhi Suzumiya",
	"image": "http://randomwaifu.altervista.org/images/0006.png"
    },
    {
	"teks": "Misaki Okusawa from BanG Dream!",
	"image": "http://randomwaifu.altervista.org/images/0035.png"
    },
    {
	"teks": "Azusa Miura from The Idolmaster",
	"image": "http://randomwaifu.altervista.org/images/0036.png"
    },
    {
	"teks": "Manami Tamura from Oreimo",
	"image": "http://randomwaifu.altervista.org/images/0059.png"
    },
    {
	"teks": "Yoshiko Tsushima from Love Live! Sunshine",
	"image": "http://randomwaifu.altervista.org/images/0087.png"
    },
    {
	"teks": "Francesca Lucchini from Strike Witches",
	"image": "http://randomwaifu.altervista.org/images/0061.png"
    },
    {
	"teks": "Rikka Takarada from SSSS. Gridman",
	"image": "http://randomwaifu.altervista.org/images/0071.png"
    },
    {
	"teks": "Ran Mitake from BanG Dream!",
	"image": "http://randomwaifu.altervista.org/images/0066.png"
    },
    {
	"teks": "Himiko Toga from My Hero Academia",
	"image": "http://randomwaifu.altervista.org/images/0009.png"
    },
    {
	"teks": "Karen Aijo from Shoujo-Kageki Revue Starlight",
	"image": "http://randomwaifu.altervista.org/images/0075.png"
    },
    {
	"teks": "Uzaki Hana from Uzaki-chan wa Asobitai",
	"image": "http://randomwaifu.altervista.org/images/0013.png"
    },
    {
	"teks": "Ako Udagawa from BanG Dream!",
	"image": "http://randomwaifu.altervista.org/images/0095.png"
    },
    {
	"teks": "Sasaki Chiho from Hataraku Maou-sama!",
	"image": "http://randomwaifu.altervista.org/images/0041.png"
    },
    {
	"teks": "Rimi Ushigome from BanG Dream!",
	"image": "http://randomwaifu.altervista.org/images/0052.png"
    },
    {
	"teks": "Kirino Kousaka from Oreimo",
	"image": "http://randomwaifu.altervista.org/images/0048.png"
    },
    {
	"teks": "Lilliluka Arde from DanMachi",
	"image": "http://randomwaifu.altervista.org/images/0026.png"
    },
    {
	"teks": "Princess King Boo from Internet",
	"image": "http://randomwaifu.altervista.org/images/0082.png"
    },
    {
	"teks": "Elizabeth Lyonesse from The Seven Deadly Sins",
	"image": "http://randomwaifu.altervista.org/images/0079.png"
    },
    {
	"teks": "Albedo from Overlord",
	"image": "http://randomwaifu.altervista.org/images/0093.png"
    },
    {
	"teks": "Nadeshiko Kagamihara from Yuru Camp",
	"image": "http://randomwaifu.altervista.org/images/0099.png"
    },
    {
	"teks": "Lilliluka Arde from DanMachi",
	"image": "http://randomwaifu.altervista.org/images/0026.png"
    },
    {
	"teks": "Madoka Kaname from Puella Magi Madoka Magica",
	"image": "http://randomwaifu.altervista.org/images/0032.png"
    },
    {
	"teks": "Nano Shinonome from Nichijou",
	"image": "http://randomwaifu.altervista.org/images/0011.png"
    },
    {
	"teks": "Uzaki Hana from Uzaki-chan wa Asobitai",
	"image": "http://randomwaifu.altervista.org/images/0013.png"
    },
    {
	"teks": "Nadeko Sengoku from Monogatari Series",
	"image": "http://randomwaifu.altervista.org/images/0017.png"
    },
    {
	"teks": "Illyasviel von Einzbern from Fate/Stay Night",
	"image": "http://randomwaifu.altervista.org/images/0012.png"
    },
    {
	"teks": "Shuten Douji from Fate/Grand Order",
	"image": "http://randomwaifu.altervista.org/images/0083.png"
    },
    {
	"teks": "Elizabeth Lyonesse from The Seven Deadly Sins",
	"image": "http://randomwaifu.altervista.org/images/0079.png"
    },
    {
	"teks": "Shinobu Oshino from Monogatari Series",
	"image": "http://randomwaifu.altervista.org/images/0010.png"
    },
    {
	"teks": "Madoka Kaname from Puella Magi Madoka Magica",
	"image": "http://randomwaifu.altervista.org/images/0032.png"
    },
    {
	"teks": "Tohru from Miss Kobayashi's Dragon Maid",
	"image": "http://randomwaifu.altervista.org/images/0045.png"
    },
    {
	"teks": "Tobiichi Origami from Date a Live!",
	"image": "http://randomwaifu.altervista.org/images/0043.png"
    },
    {
	"teks": "Sasaki Chiho from Hataraku Maou-sama!",
	"image": "http://randomwaifu.altervista.org/images/0041.png"
    },
    {
	"teks": "Mai Sakurajima from Seishun buta yar?",
	"image": "http://randomwaifu.altervista.org/images/0063.png"
    },
    {
	"teks": "Nadeko Sengoku from Monogatari Series",
	"image": "http://randomwaifu.altervista.org/images/0017.png"
    },
    {
	"teks": "Ai-chan from Getsuyoubi no Tawawa",
	"image": "http://randomwaifu.altervista.org/images/0096.png"
    },
    {
	"teks": "Kirino Kousaka from Oreimo",
	"image": "http://randomwaifu.altervista.org/images/0048.png"
    },
    {
	"teks": "Mea Kurosaki from To Love-Ru",
	"image": "http://randomwaifu.altervista.org/images/0008.png"
    },
    {
	"teks": "Nadeshiko Kagamihara from Yuru Camp",
	"image": "http://randomwaifu.altervista.org/images/0099.png"
    },
    {
	"teks": "Lily Hoshikawa from Zombieland Saga",
	"image": "http://randomwaifu.altervista.org/images/0064.png"
    },
    {
	"teks": "Unknown from Unknown",
	"image": "http://randomwaifu.altervista.org/images/0089.png"
    },
    {
	"teks": "Makoto Kikuchi from The Idolmaster",
	"image": "http://randomwaifu.altervista.org/images/0034.png"
    },
    {
	"teks": "Ruri Gokou from Oreimo",
	"image": "http://randomwaifu.altervista.org/images/0004.png"
    },
    {
	"teks": "Rikka Takanashi from Chuunibyou Demo Koi Ga Shitai!",
	"image": "http://randomwaifu.altervista.org/images/0049.png"
    },
    {
	"teks": "Ako Udagawa from BanG Dream!",
	"image": "http://randomwaifu.altervista.org/images/0095.png"
    },
    {
	"teks": "Kurumi Tokisaki from Date a Live!",
	"image": "http://randomwaifu.altervista.org/images/0044.png"
    },
    {
	"teks": "Kurisu Makise from Steins;Gate",
	"image": "http://randomwaifu.altervista.org/images/0005.png"
    },
    {
	"teks": "Mirai Kuriyama from Kyoukai no Kanata",
	"image": "http://randomwaifu.altervista.org/images/0025.png"
    },
    {
	"teks": "Sarashiki Tatenashi from Infinite Stratos",
	"image": "http://randomwaifu.altervista.org/images/0040.png"
    },
    {
	"teks": "Yukiho Hagiwara from The Idolmaster",
	"image": "http://randomwaifu.altervista.org/images/0031.png"
    },
    {
	"teks": "Ako Udagawa from BanG Dream!",
	"image": "http://randomwaifu.altervista.org/images/0095.png"
    },
    {
	"teks": "Android N18 from Dragon Ball",
	"image": "http://randomwaifu.altervista.org/images/0094.png"
    },
    {
	"teks": "Yoko Littner from Tengen Toppa Gurren Lagann",
	"image": "http://randomwaifu.altervista.org/images/0046.png"
    },
    {
	"teks": "Ako Udagawa from BanG Dream!",
	"image": "http://randomwaifu.altervista.org/images/0095.png"
    },
    {
	"teks": "Satsuki Kiryuin from Kill la Kill",
	"image": "http://randomwaifu.altervista.org/images/0022.png"
    },
    {
	"teks": "Shuchi from Shuchi no ryouko",
	"image": "http://randomwaifu.altervista.org/images/0016.png"
    },
    {
	"teks": "Illyasviel von Einzbern from Fate/Stay Night",
	"image": "http://randomwaifu.altervista.org/images/0012.png"
    },
    {
	"teks": "Ranko Kanzaki from The Idolmaster",
	"image": "http://randomwaifu.altervista.org/images/0088.png"
    },
    {
	"teks": "Eru Chitanda from Hyouka",
	"image": "http://randomwaifu.altervista.org/images/0054.png"
    },
    {
	"teks": "Chitoge Kirisaki from Nisekoi",
	"image": "http://randomwaifu.altervista.org/images/0020.png"
    },
    {
	"teks": "Ai-chan from Getsuyoubi no Tawawa",
	"image": "http://randomwaifu.altervista.org/images/0096.png"
    },
    {
	"teks": "Satsuki Kiryuin from Kill la Kill",
	"image": "http://randomwaifu.altervista.org/images/0022.png"
    },
    {
	"teks": "Ochaco Uraraka from My Hero Academia",
	"image": "http://randomwaifu.altervista.org/images/0057.png"
    },
    {
	"teks": "Unknown from Unknown",
	"image": "http://randomwaifu.altervista.org/images/0067.png"
    },
    {
	"teks": "Azusa Azuki from Hentai oji to warawanai neko",
	"image": "http://randomwaifu.altervista.org/images/0086.png"
    },
    {
	"teks": "Satsuki Kiryuin from Kill la Kill",
	"image": "http://randomwaifu.altervista.org/images/0022.png"
    },
    {
	"teks": "Kurumi Tokisaki from Date a Live!",
	"image": "http://randomwaifu.altervista.org/images/0044.png"
    },
    {
	"teks": "Isuzu Sento from Amagi Brilliant Park",
	"image": "http://randomwaifu.altervista.org/images/0023.png"
    },
    {
	"teks": "Yuri Nakamura from Angel Beats!",
	"image": "http://randomwaifu.altervista.org/images/0050.png"
    },
    {
	"teks": "Moca Aoba from BanG Dream!",
	"image": "http://randomwaifu.altervista.org/images/0068.png"
    },
    {
	"teks": "Mea Kurosaki from To Love-Ru",
	"image": "http://randomwaifu.altervista.org/images/0008.png"
    },
    {
	"teks": "Mikoto Misaka from A Certain Magical Index",
	"image": "http://randomwaifu.altervista.org/images/0047.png"
    },
    {
	"teks": "Aqua from Konosuba",
	"image": "http://randomwaifu.altervista.org/images/0098.png"
    },
    {
	"teks": "Manami Tamura from Oreimo",
	"image": "http://randomwaifu.altervista.org/images/0059.png"
    },
    {
	"teks": "Misaki Okusawa from BanG Dream!",
	"image": "http://randomwaifu.altervista.org/images/0035.png"
    },
    {
	"teks": "Dono from Dono-san chi no doe",
	"image": "http://randomwaifu.altervista.org/images/0015.png"
    },
    {
	"teks": "Rimi Ushigome from BanG Dream!",
	"image": "http://randomwaifu.altervista.org/images/0052.png"
    },
    {
	"teks": "Tamaki Ako from Netoge no yome wa onna no ko janai to omotta?",
	"image": "http://randomwaifu.altervista.org/images/0092.png"
    },
    {
	"teks": "Kanade Tachibana from Angel Beats!",
	"image": "http://randomwaifu.altervista.org/images/0058.png"
    },
    {
	"teks": "Ako Udagawa from BanG Dream!",
	"image": "http://randomwaifu.altervista.org/images/0095.png"
    },
    {
	"teks": "Satsuki Kiryuin from Kill la Kill",
	"image": "http://randomwaifu.altervista.org/images/0022.png"
    },
    {
	"teks": "Ochaco Uraraka from My Hero Academia",
	"image": "http://randomwaifu.altervista.org/images/0057.png"
    },
    {
	"teks": "Misaki Okusawa from BanG Dream!",
	"image": "http://randomwaifu.altervista.org/images/0035.png"
    },
    {
	"teks": "Kurisu Makise from Steins;Gate",
	"image": "http://randomwaifu.altervista.org/images/0005.png"
    },
    {
	"teks": "Tsurumaki Kokoro from BanG Dream!",
	"image": "http://randomwaifu.altervista.org/images/0069.png"
    },
    {
	"teks": "RO500 from Kantai Collection",
	"image": "http://randomwaifu.altervista.org/images/0072.png"
    },
    {
	"teks": "Lilliluka Arde from DanMachi",
	"image": "http://randomwaifu.altervista.org/images/0026.png"
    },
    {
	"teks": "Unknown from Unknown",
	"image": "http://randomwaifu.altervista.org/images/0067.png"
    },
    {
	"teks": "Princess King Boo from Internet",
	"image": "http://randomwaifu.altervista.org/images/0082.png"
    },
    {
	"teks": "Illyasviel von Einzbern from Fate/Stay Night",
	"image": "http://randomwaifu.altervista.org/images/0012.png"
    },
    {
	"teks": "Kurisu Makise from Steins;Gate",
	"image": "http://randomwaifu.altervista.org/images/0005.png"
    },
    {
	"teks": "Saber Alter from Fate/Stay Night",
	"image": "http://randomwaifu.altervista.org/images/0076.png"
    },
    {
	"teks": "Himiko Toga from My Hero Academia",
	"image": "http://randomwaifu.altervista.org/images/0009.png"
    },
    {
	"teks": "Tsubasa Hanekawa from Monogatari Series",
	"image": "http://randomwaifu.altervista.org/images/0055.png"
    },
    {
	"teks": "Saber from Fate/Stay Night",
	"image": "http://randomwaifu.altervista.org/images/0077.png"
    },
    {
	"teks": "Chitoge Kirisaki from Nisekoi",
	"image": "http://randomwaifu.altervista.org/images/0020.png"
    },
    {
	"teks": "Mikoto Misaka from A Certain Magical Index",
	"image": "http://randomwaifu.altervista.org/images/0047.png"
    },
    {
	"teks": "Zero Two from Darling in the Franxx",
	"image": "http://randomwaifu.altervista.org/images/0081.png"
    },
    {
	"teks": "Saori Makishima from Oreimo",
	"image": "http://randomwaifu.altervista.org/images/0037.png"
    },
    {
	"teks": "Azusa Miura from The Idolmaster",
	"image": "http://randomwaifu.altervista.org/images/0036.png"
    },
    {
	"teks": "Eru Chitanda from Hyouka",
	"image": "http://randomwaifu.altervista.org/images/0054.png"
    },
    {
	"teks": "Kyouko Toshinou from Yuru Yuri!",
	"image": "http://randomwaifu.altervista.org/images/0018.png"
    },
    {
	"teks": "Unknown from Unknown",
	"image": "http://randomwaifu.altervista.org/images/0051.png"
    },
    {
	"teks": "Lilliluka Arde from DanMachi",
	"image": "http://randomwaifu.altervista.org/images/0026.png"
    },
    {
	"teks": "Mirai Kuriyama from Kyoukai no Kanata",
	"image": "http://randomwaifu.altervista.org/images/0025.png"
    },
    {
	"teks": "Tamaki Ako from Netoge no yome wa onna no ko janai to omotta?",
	"image": "http://randomwaifu.altervista.org/images/0092.png"
    },
    {
	"teks": "Sarashiki Tatenashi from Infinite Stratos",
	"image": "http://randomwaifu.altervista.org/images/0040.png"
    },
    {
	"teks": "Himari Uehara from BanG Dream!",
	"image": "http://randomwaifu.altervista.org/images/0084.png"
    },
    {
	"teks": "Revy from Black Lagoon",
	"image": "http://randomwaifu.altervista.org/images/0062.png"
    },
    {
	"teks": "Android N18 from Dragon Ball",
	"image": "http://randomwaifu.altervista.org/images/0094.png"
    },
    {
	"teks": "Ai-chan from Getsuyoubi no Tawawa",
	"image": "http://randomwaifu.altervista.org/images/0096.png"
    },
    {
	"teks": "Android N21 from Dragon Ball",
	"image": "http://randomwaifu.altervista.org/images/0078.png"
    },
    {
	"teks": "Unknown from Unknown",
	"image": "http://randomwaifu.altervista.org/images/0090.png"
    },
    {
	"teks": "Revy from Black Lagoon",
	"image": "http://randomwaifu.altervista.org/images/0062.png"
    },
    {
	"teks": "Himiko Toga from My Hero Academia",
	"image": "http://randomwaifu.altervista.org/images/0009.png"
    },
    {
	"teks": "Marisa Kirisame from Touhou Project",
	"image": "http://randomwaifu.altervista.org/images/0065.png"
    },
    {
	"teks": "Nadeshiko Kagamihara from Yuru Camp",
	"image": "http://randomwaifu.altervista.org/images/0099.png"
    },
    {
	"teks": "Yuno Gasai from Mirai Nikki",
	"image": "http://randomwaifu.altervista.org/images/0019.png"
    },
    {
	"teks": "Abigail Williams from Fate/Grand Order",
	"image": "http://randomwaifu.altervista.org/images/0074.png"
    },
    {
	"teks": "Nadeshiko Kagamihara from Yuru Camp",
	"image": "http://randomwaifu.altervista.org/images/0099.png"
    },
    {
	"teks": "RO500 from Kantai Collection",
	"image": "http://randomwaifu.altervista.org/images/0072.png"
    },
    {
	"teks": "Ran Mitake from BanG Dream!",
	"image": "http://randomwaifu.altervista.org/images/0066.png"
    },
    {
	"teks": "Rei Ayanami from Neon Genesis Evangelion",
	"image": "http://randomwaifu.altervista.org/images/0003.png"
    },
    {
	"teks": "Shinobu Oshino from Monogatari Series",
	"image": "http://randomwaifu.altervista.org/images/0010.png"
    },
    {
	"teks": "Lisa Imai from BanG Dream!",
	"image": "http://randomwaifu.altervista.org/images/0038.png"
    },
    {
	"teks": "Manami Tamura from Oreimo",
	"image": "http://randomwaifu.altervista.org/images/0059.png"
    },
    {
	"teks": "Gertrud Barkhorn from Strike Witches",
	"image": "http://randomwaifu.altervista.org/images/0060.png"
    },
    {
	"teks": "Madoka Kaname from Puella Magi Madoka Magica",
	"image": "http://randomwaifu.altervista.org/images/0032.png"
    },
    {
	"teks": "Unknown from Unknown",
	"image": "http://randomwaifu.altervista.org/images/0067.png"
    },
    {
	"teks": "Abigail Williams from Fate/Grand Order",
	"image": "http://randomwaifu.altervista.org/images/0074.png"
    },
    {
	"teks": "Shinobu Oshino from Monogatari Series",
	"image": "http://randomwaifu.altervista.org/images/0010.png"
    },
    {
	"teks": "Manami Tamura from Oreimo",
	"image": "http://randomwaifu.altervista.org/images/0059.png"
    },
    {
	"teks": "Abigail Williams from Fate/Grand Order",
	"image": "http://randomwaifu.altervista.org/images/0074.png"
    },
    {
	"teks": "Saori Makishima from Oreimo",
	"image": "http://randomwaifu.altervista.org/images/0037.png"
    },
    {
	"teks": "Isuzu Sento from Amagi Brilliant Park",
	"image": "http://randomwaifu.altervista.org/images/0023.png"
    },
    {
	"teks": "Misaki Okusawa from BanG Dream!",
	"image": "http://randomwaifu.altervista.org/images/0035.png"
    },
    {
	"teks": "Elizabeth Lyonesse from The Seven Deadly Sins",
	"image": "http://randomwaifu.altervista.org/images/0079.png"
    },
    {
	"teks": "Ranko Kanzaki from The Idolmaster",
	"image": "http://randomwaifu.altervista.org/images/0088.png"
    },
    {
	"teks": "Rei Ayanami from Neon Genesis Evangelion",
	"image": "http://randomwaifu.altervista.org/images/0003.png"
    },
    {
	"teks": "Rei Ayanami from Neon Genesis Evangelion",
	"image": "http://randomwaifu.altervista.org/images/0003.png"
    },
    {
	"teks": "Mai Sakurajima from Seishun buta yar?",
	"image": "http://randomwaifu.altervista.org/images/0063.png"
    },
    {
	"teks": "Aqua from Konosuba",
	"image": "http://randomwaifu.altervista.org/images/0098.png"
    },
    {
	"teks": "Chitoge Kirisaki from Nisekoi",
	"image": "http://randomwaifu.altervista.org/images/0020.png"
    },
    {
	"teks": "Dono from Dono-san chi no doe",
	"image": "http://randomwaifu.altervista.org/images/0015.png"
    },
    {
	"teks": "Satsuki Kiryuin from Kill la Kill",
	"image": "http://randomwaifu.altervista.org/images/0022.png"
    },
    {
	"teks": "Ran Mitake from BanG Dream!",
	"image": "http://randomwaifu.altervista.org/images/0066.png"
    },
    {
	"teks": "Inori Yuzuriha from Guilty Crown",
	"image": "http://randomwaifu.altervista.org/images/0029.png"
    },
    {
	"teks": "Tomoe Udagawa from BanG Dream!",
	"image": "http://randomwaifu.altervista.org/images/0039.png"
    },
    {
	"teks": "Dono from Dono-san chi no doe",
	"image": "http://randomwaifu.altervista.org/images/0015.png"
    },
    {
	"teks": "Aqua from Konosuba",
	"image": "http://randomwaifu.altervista.org/images/0098.png"
    },
    {
	"teks": "Makoto Kikuchi from The Idolmaster",
	"image": "http://randomwaifu.altervista.org/images/0034.png"
    },
    {
	"teks": "Holo from Spice and Wolf",
	"image": "http://randomwaifu.altervista.org/images/0007.png"
    },
    {
	"teks": "Unknown from Unknown",
	"image": "http://randomwaifu.altervista.org/images/0053.png"
    },
    {
	"teks": "Yuno Gasai from Mirai Nikki",
	"image": "http://randomwaifu.altervista.org/images/0019.png"
    },
    {
	"teks": "Rin Shibuya  from The Idolmaster",
	"image": "http://randomwaifu.altervista.org/images/0042.png"
    },
    {
	"teks": "Jibril from No Game No Life",
	"image": "http://randomwaifu.altervista.org/images/0056.png"
    },
    {
	"teks": "Satsuki Kiryuin from Kill la Kill",
	"image": "http://randomwaifu.altervista.org/images/0022.png"
    },
    {
	"teks": "Himiko Toga from My Hero Academia",
	"image": "http://randomwaifu.altervista.org/images/0009.png"
    },
    {
	"teks": "Tamaki Ako from Netoge no yome wa onna no ko janai to omotta?",
	"image": "http://randomwaifu.altervista.org/images/0092.png"
    },
    {
	"teks": "Yuno Gasai from Mirai Nikki",
	"image": "http://randomwaifu.altervista.org/images/0019.png"
    },
    {
	"teks": "Lisa Imai from BanG Dream!",
	"image": "http://randomwaifu.altervista.org/images/0038.png"
    },
    {
	"teks": "Tomoe Udagawa from BanG Dream!",
	"image": "http://randomwaifu.altervista.org/images/0039.png"
    },
    {
	"teks": "Sakura Kinomoto from Card Captor Sakura",
	"image": "http://randomwaifu.altervista.org/images/0070.png"
    },
    {
	"teks": "Haruhi Suzumiya from The Melancholy of Haruhi Suzumiya",
	"image": "http://randomwaifu.altervista.org/images/0006.png"
    },
    {
	"teks": "Azusa Azuki from Hentai oji to warawanai neko",
	"image": "http://randomwaifu.altervista.org/images/0086.png"
    },
    {
	"teks": "Ochaco Uraraka from My Hero Academia",
	"image": "http://randomwaifu.altervista.org/images/0057.png"
    },
    {
	"teks": "Yui Hirasawa from K-ON!",
	"image": "http://randomwaifu.altervista.org/images/0030.png"
    },
    {
	"teks": "Yuri Nakamura from Angel Beats!",
	"image": "http://randomwaifu.altervista.org/images/0050.png"
    }
]
