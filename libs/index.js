var coinTransfer = require('./coinTransfer.js');
var coinTransfer = new coinTransfer();
var fromAddress = "0xbf3d5e4d82cf4c499e04d6aed2aa5d8e484b8184";
var toAddress = "0x0000000000000000000000000000000001000006";
coinTransfer.transferRewardsToUlord(fromAddress, toAddress, function(response){    
	console.log("Response: "+ response);
});
