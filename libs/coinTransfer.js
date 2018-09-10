var Web3 = require("web3");
var CoinTransfer = module.exports = function(){
    this.transferRewardsToUlord = function(fromAddress, toAddress, callback){
        var web3 = new Web3();
        web3.setProvider(new web3.providers.HttpProvider("http://192.168.14.197:58858"));
        web3.eth.getBalance(fromAddress, function(err1, balance){
			console.log('balance', balance);
            var balanceInHex = web3.utils.toHex(balance);
            if(balance >= web3.utils.toWei("10")) // amount >=10 SUT(10e18 wei)
            {
                web3.eth.getGasPrice(function(err2, gasPrice){
					console.log('gasPrice', gasPrice);
                    var gasPriceInHex = web3.utils.toHex(gasPrice);
                    
                    web3.eth.estimateGas({"from":fromAddress , "to":toAddress, "value":balanceInHex}, function(err3, estimateGas){
                        var estimateGasInHex = web3.utils.toHex(estimateGas);
                        
                        web3.eth.sendTransaction({"from": fromAddress,"to": toAddress,"gas": estimateGasInHex,"gasPrice": gasPriceInHex,"value": balanceInHex}, function(err4,transactionHash){
                            if(!err4)
                                callback(transactionHash);
                        })
                    });
                });
            }
        });
    }
}
