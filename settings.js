const fs = require('fs')
const chalk = require('chalk')

{
	kodeprem = "OKE123"
}
//---------( APIKEY )---------//
global.APIs = {
zenz: 'https://zenzapis.xyz',
betabotz: 'https://betabotz-api.herokuapp.com/', 
}
global.APIKeys = {
'https://zenzapis.xyz': '211b1ef24c',
'https://betabotz-api.herokuapp.com/': 'BetaBotz', 
}

//---------( SETTING )---------//
global.owner = ['6282142001220']
global.premium = ['6282142001220']
global.ownernomer = '6282142001220'
global.ownername = 'π³ππ£π£'
global.botname = 'π³π°πππ±πΎπ'
global.footer = 'π³π°ππ'
global.thumb = fs.readFileSync('./image/fake.jpg')
global.veloriy = fs.readFileSync('./image/kagura.mp4')
global.sessionName = 'anjing'
global.packname = 'Β© π½π°ππππΎπ±πΎπ'
global.author = 'π½π°ππππΎππ³'
global.sp = 'β­'

//---------( INFO )---------//
global.youtube = ' '
global.ig = 'https://instagram.com/leomordbot'
global.mygc = 'https://chat.whatsapp.com/D4Ww2QJRs1lEKqkniexY3u'
global.myweb = ' '
global.email = 'botleomord@gmail.com'
global.region = 'indonesia'
global.prefa = ['','!','.','π¦','π€','πΏ']
global.BgWelcLeav = 'https://telegra.ph/file/ca207893ae26d531cd9c6.jpg'
global.limitawal = {
premium: "Infinity",
free: 15,
}

//---------( RANDOM IMAGE )---------//
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

//---------( MESSAGES )---------//
global.mess = {
success: '_Done._',
admin: '_Fitur Khusus Admin Group!_',
prem: '_Fitur Ini Untuk Orang Premium! _', 
botAdmin: '_Bot Harus Menjadi Admin Terlebih Dahulu!_',
owner: '_Fitur Khusus Owner Bot_',
group: '_Fitur Digunakan Hanya Untuk Group!_',
private: '_Fitur Digunakan Hanya Untuk Private Chat!_',
bot: '_Fitur Khusus Pengguna Nomor Bot_',
wait: '_Sedang Di Proses..._',
error: '_Fitur Sedang Error!_',
endLimit: '_Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12_',
}

//---------( PEMBATAS )---------//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update'${__filename}'`))
delete require.cache[file]
require(file)
})