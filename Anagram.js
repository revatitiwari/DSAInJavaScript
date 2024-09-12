// Anagram String
// check if two strings are equal if reversed that
// input - Ana == ana output - true

const Anagram = (str, t) => {
     s = str.split('').sort().Join("")
     t = t.split('').sort().join('')

    return s === t;
}

// using objects
var isAnagram = function(s, t) {
    if(s.length !== t.length) return false 

    const obj1 = {};
    const obj2 = {};

    for(let i=0 ; i<s.length; i++) {
        obj1[s[i]] = (obj1[s[i]] || 0) + 1;
        obj2[t[i]] = (obj2[t[i]] || 0) + 1;
    }

    for (const key in obj1) {
        if (obj1[key] !== obj2[key]) return false;   
    }

    return true;
};
