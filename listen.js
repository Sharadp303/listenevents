const ethers=require('ethers');
const ABI=require('./abi.json')
require("dotenv").config();
//console.log(process.env.ALCHEMY_KEY)

async function gTransfer(){
const usdtadd='0x72B7D61E8fC8cF971960DD9cfA59B8C829D91991';
const provider=new ethers.WebSocketProvider(
    `wss://eth-mainnet.g.alchemy.com/v2/${process.env.ALCHEMY_KEY}`
)
console.log(provider)
const contract=new ethers.Contract(usdtadd,ABI,provider);

contract.on("Transfer",(from,to,value,event)=>{
    let transobj={
        from:from,
        to:to,
        value:value,
        eventData:event
        
    }
    console.log(JSON.stringify(transobj,null,4))

})

}
gTransfer()