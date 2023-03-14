const ethers=require('ethers');
const ABI=require('./abi.json')
require("dotenv").config();
//console.log(process.env.ALCHEMY_KEY)

async function gTransfer(){
const usdtadd='0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56';
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