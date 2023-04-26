

function findLongestSubstring2(string) {
    let result =''
    let corrent = ''
    for (let i = 0; i < string.length; i++) {
        corrent += string[i]
        for (let j = i+1; j < string.length; j++) {
            if (result.includes(string[j])) {
                if (corrent.length > result.length) {
                    result = corrent
                    
                }
                corrent = ''
                break
                
            }
            corrent += string[j]
             
        }
        
    }
    return result
}


/*
function findLongestSubstring(s){
    let parola=''
    let res=''
    for (let i = 0; i < s.length; i++) {
        const lettera = s[i];
        if(parola.includes(lettera)){
            if(parola.length>res.length){
                res=parola
            }            
            i=parola.indexOf(lettera)
            parola=''
        }else{
            parola+=lettera
        }
    }
    if(parola.length>res.length){
        res=parola
    }
    return res
}
console.log(findLongestSubstring('abcdecfghil'));
console.log(findLongestSubstring('casesssroma'));
*/