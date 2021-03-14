if (isBanned) return reply(mess.only.benned)    
if (!isUser) return reply(mess.only.userB)
if (args.length < 1) return reply(`Contoh: ${prefix}glitch fnbot/fana`)
gl = `${body.slice(7)}`
gel1 = gl.split("/")[0];
gel2 = gl.split("/")[1];
reply(mess.wait)
buffer = await getBuffer(`https://videfikri.com/api/textmaker/tiktokeffect/?text1=${gel1}&text2=${gel2}`, {method: 'get'})
denz.sendMessage(from, buffer, image, {quoted: mek})
await limitAdd(sender)

handler.help = ['glitch'].map(v => v + 'text/text')
handler.tags = ['tools']
handler.command = /^(glitch)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
