const Api = {};

Api.getContext = function() {return "com.xfl.msgbot.application.MainApplication@4ac74d5";};
const BufferedReader = java.io.BufferedReader
const DataOutputStream = java.io.DataOutputStream
const InputStreamReader = java.io.InputStreamReader
const HttpURLConnection = java.net.HttpURLConnection
const URL = java.net.URL
const URLEncoder = java.net.URLEncoder
Api.papagoTranslate = function(source, target, text){
clientId = "rKCvcA2N5Djbw2eqTP3W"
clientSecret = "pmfSez5oBS"
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
return JSON.parse(res).message.result.translatedText
}

const Utils = {};



const FileStream = {};



const DataBase = {};



const Log = {};



const Device = {};



const Bridge = {};



const AppData = {};



const replier = {};



const imageDB = {};

imageDB.getImage = function() {return null;};
