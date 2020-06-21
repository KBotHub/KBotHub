# KBotHub

scripts/debug.js

에서 레거시 api에 있는 스크립트를 정의

컴파일 버튼 누르면

try{
  eval(code);
}catch(e){
  log("error", e);
}

log()는 
log(type, msg)

일케 만들어서

type 가 "error" "success"
이런식으로 되서 아이콘이랑 색 바뀌게

console.log() 랑 다른거임
