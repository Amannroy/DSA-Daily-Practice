function bestTimeToSell(prices){
    
            let minPrice = prices[0];
            let maxProfit = 0;
    
            for(let i=1;i<prices.length;i++){
                minPrice = Math.min(minPrice, prices[i]);
                maxProfit = Math.max(prices[i] - minPrice, maxProfit);
            }
            return maxProfit;
    
}
console.log(bestTimeToSell([10,1,5,6,7,1]));// 6

// TC = O(n)
// SC = O(1)
