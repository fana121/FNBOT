let util = require('util')
let path = require('path')
let { spawn } = require('child_process')

// Font By MFarelS:V
let fontPath = 'src/font/Zahraaa.ttf'
let handler  = async (m, { conn, args }) => {
  let inputPath ='src/music/alay.mp3'
  let outputPath = 'tmp/hasil.mp3'
  .on('error', e => conn.reply(m.chat, util.format(e), m))
  .on('exit', () => {
      conn.sendFile(m.chat, outputPath, 'music.mp3', m)
  })
}
handler.help = ['alay']
handler.tags = ['downloader']
handler.command = /^alay$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
