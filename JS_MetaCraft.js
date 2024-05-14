/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's

// We start by creating a variable NFTs which is an array. This array will store all the NFT objects we create.
const NFTs = [];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.

//This function, mintNFT, takes four parameters: name, eyeColor, shirtType, and bling.

function mintNFT (name,eyeColor,shirtType,bling) {
    const NFT={
        "name": name,
        "eyeColor": eyeColor,
        "shirtType": shirtType,
        "bling": bling
    }
    NFTs.push(NFT);
    console.log("Minted: \t "+ name);
}

/*
    This function, mintNFT, takes four parameters: name, eyeColor, shirtType, and bling.
    Inside the function, an object NFT is created using these parameters to set its metadata.
    The NFT object is then added to the NFTs array using the push method.
    A message is logged to the console indicating that the NFT has been minted, showing its name.
*/

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    for (let i=0; i < NFTs.length; i++) {
        console.log("\nID: \t\t" + (i + 1));
        console.log("Name: \t\t" + NFTs[i].name);
        console.log("Eye Color: \t"+ NFTs[i].eyeColor);
        console.log("Shirt Type: "+ NFTs[i].shirtType);
        console.log("Bling: \t\t" + NFTs[i].bling);
    }

}

/*
The listNFTs function loops through the NFTs array.
For each NFT in the array, it logs the NFT's ID (position in the array + 1), 
name, eye color, shirt type, and bling to the console.
*/

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
console.log("\n" + NFTs.length);
}
/*
The getTotalSupply function logs the total number of NFTs that have been minted, which is the length of the NFTs array.
*/

// call your functions below this line

mintNFT("Gerard","Red","Polo","Silver Chain");
mintNFT("Jose","Black","Toxido","Golden Chain");
mintNFT("Jigs","Maroon","Jacket","Diamond Chain");
listNFTs();
getTotalSupply();

/*
Here, we call the mintNFT function three times, creating three different NFTs.
Then, we call listNFTs to print out all the NFTs' metadata.
Finally, we call getTotalSupply to print the total number of minted NFTs.
*/
