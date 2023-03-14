const ethers=require('ethers');
const ABI=require('./abi.json')
require("dotenv").config();
//console.log(process.env.ALCHEMY_KEY)

async function gTransfer(){
const usdtadd='0xdAC17F958D2ee523a2206206994597C13D831ec7';
const provider=new ethers.WebSocketProvider(
    `wss://eth-mainnet.g.alchemy.com/v2/${process.env.ALCHEMY_KEY}`
)
const contract=new ethers.Contract(usdtadd,ABI,provider);

contract.on("Transfer",(from,to,value)=>{
    let transobj={
        from:from,
        to:to,
        value:value,
        //eventData:event
        
    }
    console.log(JSON.stringify(transobj,null,4))

})

}
gTransfer()