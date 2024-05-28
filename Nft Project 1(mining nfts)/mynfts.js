

var mynfts = []

function mintNFT (Tagline,eyecolor,Clothestype,bling,TokenId) {
 var myMetadata = {
    "name":Tagline,
    "eyecolor":eyecolor,
    "Clothestype":Clothestype,
    "bling":bling,
    TokenId:TokenId   
    
 }
 mynfts.push(myMetadata)
 console.log("Name Of minted Nft : " + Tagline)
 console.log("");
}


function listNFTs () {
for (var i = 0; i < mynfts.length; i++) {
    console.log(" Name        :"+mynfts[i].name)
    console.log(" EyeColor    :"+mynfts[i].eyecolor)
    console.log(" ClothesType :"+mynfts[i].Clothestype)
    console.log(" bling       :"+mynfts[i].bling)
    console.log(" TokenId     :"+mynfts[i].TokenId)
    console.log("");
}
}
e
function getTotalSupply() {
console.log(mynfts.length)
}


mintNFT("Gojo","Blue","white Shirt","sun glasses",34);
mintNFT("Tanjiro","Red","green jacket","Hat",35);
mintNFT("Goku","Black","Martial art Uniform","beanie",36);
mintNFT("kazuma","brown","blue Jacket","golden Chain",37);
listNFTs();
getTotalSupply();
