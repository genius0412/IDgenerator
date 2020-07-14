let con = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];
let vow = ["a", "e", "i", "o", "u"];
let id="", type, typebef, pw, se;

function rand(max) {
    max = Math.floor(max);
    return Math.floor(Math.random() * max); 
}
function start(){
    alert('엔트리 계정 생성기 (with 닉네임 생성기) ');
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
    alert(id);
    return confirm('이 아이디를 만족하신다면 확인버튼을 눌러주세요.');
}
while(!start()) id="";

pw = prompt('비밀번호를 입력해주세요.\n! 이 정보는 아이디를 생성할 때에만 사용합니다. 아이디 생성을 완료하면 정보는 사라집니다 !');
se = prompt("성별 (male/female)\n! 이 정보는 아이디를 생성할 때에만 사용합니다. 아이디 생성을 완료하면 정보는 사라집니다 !");
$.ajax({
    url:"https://playentry.org/api/users/create",
    type:"POST",
    data:{
       username: id,
       password: pw,
       sex: se,
       job: "student",
       email: "",
       grade: "e_1",
       netffice: {}
    }
});
fetch('https://playentry.org/api/users/auth', {
    method: "POST",
    body: `{
        "username": "${id}",
        "password": "${pw}"
    }`,
    headers: {
        'Content-Type': 'application/json'
    }
})
alert("생성됨");
