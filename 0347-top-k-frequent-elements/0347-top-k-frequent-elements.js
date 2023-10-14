/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
  const obj = {};
   nums.forEach((num) => {
       if(obj[num] === undefined){
       obj[num] = 1;
       }else{
           obj[num]++;
       }  
   })
    
   const sortedTopKFrequent = Object.entries(obj).sort((a1, a2) => (a1[1] < a2[1]) ? 1 : a1[1] > a2[1] ? -1 : 0);
   const mostFrequentElement = []
    for(let i = 0; i < k; i++){
        mostFrequentElement.push(parseInt(sortedTopKFrequent[i][0]))    
   }
 return mostFrequentElement;
    
//    const filteredToMostFrequentElement = Object.entries(nums).filter(num => {
        
//    })
};