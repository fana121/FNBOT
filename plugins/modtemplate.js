let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
✎ 「 *Template* 」
• Ingin mendownload sesuatu?


• Template Mine Imator
http://www.mediafire.com/file/cxa8io0j0i3a0x4/Mine-Imator_%2528Template_Pika_Gamer%2529_Edited.zip/file

• 50 Template Avee Player 1
https://realsht.mobi/teCTj

• 50 Template Avee Player 2
https://realsht.mobi/hhSMc

• Template Quotes Rainbow
https://realsht.mobi/LbmVw

• Template Quotes 1
https://realsht.mobi/GZuvl

• Template Quotes 2
https://realsht.mobi/lFLqm

• Template Quotes 3
https://realsht.mobi/prMyC

• Template Quotes 4
https://realsht.mobi/FyGha

• Template Quotes 5
https://realsht.mobi/LdpNd

• Template Quotes 6
https://realsht.mobi/BdlQe

• Template Quotes 7
https://realsht.mobi/fdZCs

• Template Quotes 8
https://realsht.mobi/YkqIk

• Template Quotes 9
https://realsht.mobi/BcKdr

• Template Quotes 10
https://realsht.mobi/MaZno

• Template Mega Colab
https://realsht.mobi/JinWs

• Template Colab 1
https://realsht.mobi/bocSM

• Template Colab 2
https://realsht.mobi/eJwLd

• Template Colab 3
https://realsht.mobi/tGMxp

• Template Colab 4
https://realsht.mobi/oQtWo

• Template Colab 5
https://realsht.mobi/rbvWQ

• Template Wajah Orang
https://realsht.mobi/tGMxp

• Template Kacamata
https://realsht.mobi/MpoKs

• Template Unix 1
https://realsht.mobi/dfToI

• Template Unix 2
https://realsht.mobi/hRMsq

• Template Partikel
https://realsht.mobi/wOMlc

• Template Pistol
https://realsht.mobi/exXCy

• Template Solo
https://realsht.mobi/MvYbm
`.trim(), m)
}
handler.help = ['template']
handler.tags = ['downloader']
handler.command = /^(template)$/i
handler.limit = true

module.exports = handler
