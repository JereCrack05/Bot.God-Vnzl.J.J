
import axios from 'axios'
let handler = async(m, { conn, usedPrefix, command }) => {
	
	//let girl = (await axios.get(`https://raw.githubusercontent.com/FG98F/team-fg/main/img/girl.json`)).data
	let girl = await conn.getFile(global.API('fgmods', '/api/girl', { }, 'apikey'))
	let img = girl.data
   await conn.sendButton(m.chat, '🧑🏻‍💻 tú pedido', igfg, img, [['▷▷ SIGUIENTE', `${usedPrefix + command}`]],m)
}
handler.help = ['girl']
handler.tags = ['img']
handler.command = ['girl', 'woman']

export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
