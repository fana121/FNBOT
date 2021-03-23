let handler = function (m) {
  if (!m.quoted) throw 'Reply pesan bot!'
  let { fromMe, id, isBaileys } = m.quoted
  if (!fromMe) throw 'Hanya bisa menghapus pesan dariku'
  if (!isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
  this.deleteMessage(m.chat, {
    fromMe,
    id,
    remoteJid: m.chat
  })
}
handler.help = ['d','del','delete']
handler.tags = ['info']

handler.command = /^(d)el(ete)?$/i

module.exports = handler
