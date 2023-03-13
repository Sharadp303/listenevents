const ethers=require('ethers')
const ABI=require('./abi.json')


async function getT(){
const usdtadd='0x72B7D61E8fC8cF971960DD9cfA59B8C829D91991';

const provider=new ethers.WebSocketProvider(`wss://mainnet.infura.io/v3/your-project-id`)

const contract=new ethers.Contract(usdtadd,ABI,provider)
 await contract.on("Transfer",(from,to,value,event)=>{
    let transobj={
        from:from,
        to:to,
        value:value,
        eventData:event
        
    }
    console.log(JSON.stringify(transobj,null,4))

})
console.log(contract)
}
getT()