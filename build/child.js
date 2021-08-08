// const {spawn}=require("child_process")

// const ls=spawn('ls',['-1h','/usr'])

// ls.stdout.on('data',(data)=>{
//     console.log("stdout:"+data);
// })
// ls.stderr.on("data",(data)=>{
//     console.error(`stderr:${data}`);
// })
// ls.on("close",(data)=>{
//     console.log(`child_process exit:${data}`);
// })
const fs=require("fs")
const path=require("path")
const index= fs.readFileSync(path.resolve(__dirname,'../demo.js'))
console.log(index.toString());