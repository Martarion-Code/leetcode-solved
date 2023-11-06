function countGoodSubstrings(s: string): number {
    let maxSub:number = 3;
    let i:number = 0;
    let goodSubstrings:string[] = [];
    while(maxSub - 1 < s.length){
        if((s[i] !== s[i+1] &&  s[i] !== s[i+2]) && (s[i+1] !== s[i] &&  s[i+1] !== s[i+2]) ){
            goodSubstrings.push(`${s[i]}${s[i+1]}${s[i+2]}`)
        }
        
        i++;
        maxSub++;
    }
    return goodSubstrings.length;
    
};