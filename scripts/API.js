/*

data 에 저장

data["FS"][["name","Base64 data"]]
FileStream 에서 다룸

data["Log"][["type : debug, error, info","msg","time"]]
Log 에서 다룸

data["ChatData"]["방이름"][["sender", "profile Base64", "msg", "time"]]
replier 이랑 Api.replyRoom 에서 다룸

data["Base64code"]["type : blockly or 단자응 or js", ".js or .xml or .txt 의 base64 인코딩된 문자열"]
저장시 사용함
*/

/*************************************************************************************************************/
var isOn = false;
var botName = "봇이름";
var code = "";
/*************************************************************************************************************/

const scriptName = botName;

function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {}

function onCreate(savedInstanceState, activity) {}

function onStart(activity) {}

function onResume(activity) {}

function onPause(activity) {}

function onStop(activity) {}

/*************************************************************************************************************/

const Api = {};
//getContext()	android.content.Context	앱의 컨텍스트를 가져옵니다.
Api.getContext = function() {return "com.xfl.msgbot.application.MainApplication@4ac74d5";};
/*reload() 또는 compile()	Boolean	모든 스크립트를 재컴파일합니다. 반환값은 항상 true입니다.
reload(String scriptName, Boolean throwOnError = false)
또는
compile(String scriptName, Boolean throwOnError = false)	Boolean	특정 스크립트를 재컴파일합니다.
throwOnError가 true라면, 컴파일 에러시 예외를 throw합니다.
에러 발생시, 또는 스크립트가 존재하지 않을 시 false를 반환하고, 컴파일 성공시 true를 반환합니다.
*/
Api.reload = function(srcName, throwErr){
  if(srcName == botName){
     try{
       eval(code);
       onCreate();
       onStart();
       onResume();
       onPause();
       onStop();
     }catch(e){
       if(throwErr == true){
         return e;
       }
       new Toast({
       message: '에러 발생!!\n'+e,
       type: 'danger'
       });
     }
  }else{
  return false;   
  }
};
Api.compile = function(srcName, throwErr){return true;};
/*prepare(String scriptName)	int	해당 스크립트가 한번도 컴파일 된 적이 없을 경우에만 컴파일합니다.
컴파일 실패시 에러를 throw하고, 스크립트가 존재하지 않을 시 0, 컴파일 성공시 1, 한번이라도 컴파일 된 적이 있을 시 2를 반환합니다.
*/
Api.prepare = function(){return 1;};
/*
unload(String scriptName)	Boolean	해당 스크립트를 컴파일되지 않은 상태로 전환합니다.
원래부터 컴파일되지 않은 상태였거나, 스크립트가 존재하지 않을 시 false를 반환하며, 그렇지 않은 경우에는 true를 반환합니다.
*/
Api.unload = function(){return true;};
/*
off()	Boolean	모든 스크립트의 전원을 끕니다. 반환값은 항상 true입니다.
off(String scriptName)	Boolean	해당 스크립트의 전원을 끕니다.
스크립트가 존재하지 않거나, 스크립트의 설정에서 Api.off를 무시하도록 설정했을 경우 false를 반환하고, 그렇지 않은 경우에는 true를 반환합니다.
*/
Api.off = function(name){
  if(name != botName || name != null){
    isOn = true;   
  }else{
    isOn = false;
  }
  return true;
};
/*
on()	Boolean	모든 스크립트의 전원을 켭니다. 반환값은 항상 true입니다.
on(String scriptName)	Boolean	해당 스크립트의 전원을 켭니다.
스크립트가 존재하지 않을 시 false, 존재할 시 true를 반환합니다.
*/
Api.on = function(name){
  if(name == botName || name == null){
    isOn = true;   
  }else{
    isOn = false;
  }
  return true;
};
/*
isOn(String scriptName)	Boolean	해당 스크립트의 전원 상태를 반환합니다.
isCompiled(String scriptName)	Boolean	해당 스크립트의 컴파일 완료 여부를 반환합니다.
isCompiling(String scriptName)	Boolean	해당 스크립트가 컴파일 진행 중 인지 여부를 반환합니다.
*/
Api.isOn = function(){return isOn;};
Api.isCompiled = function(){return true;};
Api.isCompiling = function(){return false;};
/*
getScriptNames()	String[]	모든 스크립트의 이름을 배열로 반환합니다.
*/
Api.getScriptNames = function(){return [scriptName];};
/*
replyRoom(String room, String message, Boolean hideToast = false)	Boolean	해당 룸에 메시지를 보냅니다. hideToast가 true일 경우 방 세션이 없어도 토스트를 띄우지 않습니다.
방 세션이 있을 시 true, 없을 시 false를 반환합니다. (이는 일반적인 상황에서 전송 성공 여부를 나타냅니다.)
*/
Api.replyRoom = function(targRoom, msg, hideToast){
  if(!data["ChatData"][targRoom]){
    data["ChatData"][targRoom] = data["ChatData"][targRoom][["sender", "profile Base64", "msg", "time"]];
  }else{
    data["ChatData"][targRoom].push(["sender", "profile Base64", "msg", "time"]);
  }
};
/*
canReply(String room)	Boolean	해당 룸으로의 메시지 전송 가능 여부를 반환합니다.
*/
Api.canReply = function(){return true;};
/*
showToast(String content, Int length)	void	토스트 메시지를 발생시킵니다.
*/
Api.showToast = function(msg){new Toast({message: msg});};
/*
makeNoti(String title, String content, int id)	String[]	알림을 띄웁니다. id값은 알림의 고유 아이디로,
같은 아이디로 makeNoti를 다시 한번 호출하면 알림이 새로 뜨지 않고 내용이 수정됩니다.
*/
Api.makeNoti = function(msg){alert(msg);};
/*
papagoTranslate(String sourceLanguage, String targetLanguage, String content, Boolean errorToString = false)	String	번역 결과를 제공합니다.
errorToString이 true일 경우 에러를 throw하지 않고 String으로 반환합니다.
*/
Api.papagoTranslate = function(source, target, text){
clientId = "rKCvcA2N5Djbw2eqTP3W";
clientSecret = "pmfSez5oBS";
text = encodeURI(text);
apiURL = "https://openapi.naver.com/v1/papago/n2mt";
url = new URL(apiURL);
con = url.openConnection();
con.setRequestMethod("POST");
con.setRequestProperty("X-Naver-Client-Id", clientId);
con.setRequestProperty("X-Naver-Client-Secret", clientSecret);
postParams = "source="+source+"&target="+target+"&text=" + text;
con.setDoOutput(true);
wr = new DataOutputStream(con.getOutputStream());
wr.writeBytes(postParams);
wr.flush();
wr.close();
br = new BufferedReader(new InputStreamReader(con.getInputStream()))
var inputLine;
var res = ""
while ((inputLine = br.readLine()) != null) res += inputLine;
br.close();
return JSON.parse(res).message.result.translatedText;
};
/*
gc()	void	가비지 컬렉팅을 강제로 시작합니다.
*/
Api.gc = function(){return;};
/*
UIThread(Function func, Function onComplete)	void	UI 쓰레드에서 func함수를 실행합니다.
onComplete함수는 error, result의 인자를 가지며, func실행 후 에러 발생시 error에 에러객체가 전달되고,
성공적으로 실행됐을 시 반환값을 result에 전달합니다.
*/
Api.UIThread = function(func, onCompile){return;};
/*************************************************************************************************************/

const Utils = {};

/*
getWebText(String url)	String	웹사이트의 HTML을 로드하여 문자열로 반환합니다. (동기적)
*/
Utils.getWebText = function(url){
  fetch('https://api.codetabs.com/v1/proxy?quest='+url).then((response) => response.text()).then((text) => console.log(text); var data = text;);
  return data;
}
/*
parse(String url)	org.jsoup.nodes	웹사이트의 HTML을 get하여 org.jsoup.nodes.Document로 반환합니다. (동기적)
*/

/*
getAndroidVersionCode()	int	앱 구동 환경의 안드로이드 버전 코드를 반환합니다.
*/

/*
getAndroidVersionName()	String	앱 구동 환경의 안드로이드 버전 이름을 반환합니다.
*/

/*
getPhoneBrand()	String	앱 구동 환경의 휴대폰 브랜드명을 반환합니다.
*/

/*
getPhoneModel()	String	앱 구동 환경의 휴대폰 모델명을 반환합니다.
*/


const FileStream = {};



const DataBase = {};



const Log = {};



const Device = {};



const Bridge = {};



const AppData = {};



const replier = {};



const imageDB = {};

/*
getImage()	null	호환성을 위해 존재하기 때문에 기능이 없는 메소드입니다. 이는 항상 null을 반환합니다.
*/
imageDB.getImage = function() {return null;};
