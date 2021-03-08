let handler = m => m

let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i
handler.before = m => {
  if (m.isBaileys && m.fromMe) return true
  let chat = global.DATABASE.data.chats[m.chat]
  let isGroupLink = linkRegex.exec(m.text)

  if (chat.antiLink && isGroupLink) m.reply('Hapus!!')
  for (let user of users) if (user.endsWith('@s.whatsapp.net')) aw>
}
handler.help = ['antilink']
handler.tags = ['owner']
handler.command = /^antilink$/i
handler.owner = true
handler.admin = true
  
  module.exports = handler
