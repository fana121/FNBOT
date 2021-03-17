let handler  = async (m, { conn }) => {
  conn.reply(m.chat,'https://u.photofunia.com/2/results/G/E/GEDJSmC5Pi6jnbKudCI9ow_r.jpg', m)
}
handler.help = ['kalender']
handler.tags = ['other']
handler.command = /^(kalender)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
