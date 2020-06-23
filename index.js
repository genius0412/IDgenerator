let con = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];
let vow = ["a", "e", "i", "o", "u"];
let id="", type, typebef;

function rand(max) {
    max = Math.floor(max);
    return Math.floor(Math.random() * max); 
}
function start(){
    alert('아이디 생성기');
    const len = parseInt(prompt('아이디의 글자수 입력'));
    typebef = -1;
    type = rand(2);
    for(var i=0; i<len; i++){
        if(typebef == type){
            typebef = type;
            type = (typebef+1)%2;
        }else{
            typebef = type;
            type = rand(2);
        }
        if(type == 0) id+=con[rand(con.length)];
        else id+=vow[rand(vow.length)];
    }
    alert(`아이디가 복사되었습니다\n${id}`);
    copy(id);
    return confirm('다시 하시려면 확인버튼을 눌러주세요.');
}
while(start()){}
