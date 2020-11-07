var con = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"]
var vow = ["a", "e", "i", "o", "u"]
var phr = ["ext", "jit", "ker", "ex", "re", "xe"]

const rand = (max) => {
    max = Math.ceil(max)
    return Math.ceil(Math.random() * max)
}

const copy = (text) => {
    var input = document.createElement('textarea')
    input.innerHTML = text
    document.body.appendChild(input)
    input.select()
    var result = document.execCommand('copy')
    document.body.removeChild(input)
    return result;
}

const charType = (ch) => {
    if(con.includes(ch)) return "consonant"
    else return "vowel"
}

const gen = () => {
    alert('아이디 생성기 beta 2.0')
    const len = parseInt(prompt('아이디의 글자수 입력 (3 이상)'))
    var id = ""
    
    if(len < 3) console.error('Error: length should be larger than 3');
    var temp = rand(phr.length+7)
    if(temp <= (phr.length-1)) id += phr[temp]
    for(var i = id.length+1; i <= len; i++){
        if(charType(id[i-2]) == "consonant") id += vow[rand(vow.length-1)]
        else id += con[rand(con.length-1)]
    }
    alert(`아이디가 완성되었습니다\n${id}`)
    if(confirm("아이디를 복사할까요?")) copy(id)
}
