let handler = function (m) {
  // this.sendContact(m.chat, '62895712546050', 'SHP', m)
  this.sendContact(m.chat, '62895712546050', 'SHP', m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
