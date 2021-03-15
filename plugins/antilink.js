if (!isGroup) return reply(mess.only.group)
 if (!isGroupAdmins) return reply(mess.only.admin)
 if (!isBotGroupAdmins) return reply(mess.only.Badmin)
 if (args.length < 1) return reply('ketik #antilink on untuk mengaktifkan')
 if ((args[0]) === 'on') {
	 if (isAntiLink) return reply('anti link sudah on')
	 antilink.push(from)
	 fs.writeFileSync('./database/json/antilink.json', JSON.stringify(antilink))
	 reply(`\`\`\`✓“Sukses mengaktifkan fitur anti link di group\`\`\` *${groupMetadata.subject}*`)
 } else if ((args[0]) === 'off') {
	 if (!isAntiLink) return reply('anti link sudah off')
	 antilink.splice(from, 1)
	 fs.writeFileSync('./database/json/antilink.json', JSON.stringify(antilink))
	 reply(`\`\`\`✓“Sukses menonaktifkan fitur anti link di group\`\`\` *${groupMetadata.subject}*`)
 } else {
     reply('on untuk mengaktifkan, off untuk menonaktifkan')
}
handler.help = ['antilink'].map(v => v + 'on/off')
handler.tags = ['admin']
handler.command = /^(antilink)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false

handler.admin = true
handler.botAdmin = true

handler.fail = null
handler.limit = true

module.exports = handler

