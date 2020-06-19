const cron = require('node-cron');

const now = new Date();
let hour = now.getHours();
let min = now.getMinutes() + 1;
if(min == 59){
    min = 0;
    hour++;
}
let eat = false;
//cron.schedule('0 0 7 * * *', () => {
cron.schedule('00 ' + min + ' ' + hour + ' * * *', () => {
    console.log("もう我慢できない！ばくばくばくばく…( ･`д･´)");
    eat = true;
});
//cron.schedule('0 30 7 * * *', () => {
cron.schedule('00 ' + min + ' ' + hour + ' * * *', () => {
    if(eat) console.log("ケ■ッグコーンフ■スティ！ぐぅーれいとぉ！( ﾟДﾟ)");
});
