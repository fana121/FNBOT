let handler = async (m, { conn }) => {
  global.DATABASE._data.chats[m.chat].isBanned = false
  m.reply('*SUCCESS UNBANNED*' + │ Number: ${PhoneNumber('+' + who.replace('@s.whatsapp.net', '')).getNumber('international')})
}
handler.help = ['unbanchat']
handler.tags = ['owner']
handler.command = /^unbanchat$/i
handler.owner = true

module.exports = handler
