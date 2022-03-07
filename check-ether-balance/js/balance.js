function checkBalance(a) {
    $("#contactForm").submit(function(e) {
        e.preventDefault();
    });

    web3 = new Web3(new Web3.providers.HttpProvider('https://mainnet.infura.io/v3/46029432230d43959613ea1e9bf4b3ae'));

    // Write to the console the script will run shortly.
    console.log('Getting Ethereum address info.....');
    var addr = a;
    // Show the address in the console.
    console.log('Address:', addr);
    // Use Wb3 to get the balance of the address, convert it and then show it in the console.
    web3.eth.getBalance(addr, function (error, result) {
        if (!error){
            document.getElementById('ETHBalance').innerHTML = web3.utils.fromWei(result,'ether') + "Ξ";
        }
        else
            console.log('Huston we have a problem: ', error); // Should dump errors here
    });
}
