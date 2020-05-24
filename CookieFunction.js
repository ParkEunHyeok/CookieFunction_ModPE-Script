/*Made by Cookiesand.*/

//CookieFunction V1

var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get(); 
var btn = null;
var menu = null;
const CD = android.graphics.drawable.ColorDrawable;
const white = android.graphics.Color.parseColor("#FFFFFF");9
const black = android.graphics.Color.parseColor("#000000");9
var terror1 = false;
var terror2 = false;
var terror3 = false;
var terror4 = false;

function dip2px(ctx, dips){
return Math.ceil(dips * ctx.getResources().getDisplayMetrics().density);
}

function toast(msg) {
ctx.runOnUiThread(new java.lang.Runnable({
run: function() {
var toast = android.widget.Toast.makeText(ctx, msg, android.widget.Toast.LENGTH_LONG);
toast.show();
}
}));
}

function makeButton(){
ctx.runOnUiThread(new java.lang.Runnable({
run : function(){
try{
btn = new android.widget.PopupWindow();
var layout = new android.widget.RelativeLayout(ctx);
var button = new android.widget.Button(ctx);
button.setText("C.F");
button.setOnClickListener(new android.view.View.OnClickListener({
onClick : function(v){
if(menu==null){
openMenu();
}
else if(menu!=null){
closeMenu();
}
}
}));
layout.addView(button);
btn.setContentView(layout);
btn.setWidth(dip2px(ctx, 45));
btn.setHeight(dip2px(ctx, 40));
btn.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
btn.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT | android.view.Gravity.CENTER, 0, 0);
}
catch(e){
clientMessage(e+", "+e.lineNumber);
}
}
}));
}


function removeButton(){
ctx.runOnUiThread(new java.lang.Runnable({
run : function(){
try{
if(button!=null){
button.dismiss();
button = null;
}
}
catch(e){
clientMessage(e+", "+e.lineNumber);
}
}
}));
}


function newLevel(){
makeButton();
}

function leaveGame(){
removeButton(); 
}

function openMenu(){
ctx.runOnUiThread(new java.lang.Runnable({
run : function(){
try{
menu = new android.widget.PopupWindow();
var title = new android.widget.TextView(ctx);
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
title.setText("Cookie Function\n");
title.setTextSize(25);
title.setGravity(android.view.Gravity.CENTER);
layout.addView(title);

var btn1 = new android.widget.Button(ctx);
btn1.setText("인벤토리 수정");
btn1.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
itemmenu();
}
});
var btn2 = new android.widget.Button(ctx);
btn2.setText("명령어");
btn2.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
command();
}
});
var btn3 = new android.widget.Button(ctx);
btn3.setText("테러 기능");
btn3.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
TerrorOption();
}
});
var btn4 = new android.widget.Button(ctx);
btn4.setText("제작자 관련");
btn4.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
producer();
}
});
var exit = new android.widget.Button(ctx);
exit.setText("나가기");
exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v){
menu.dismiss();
menu = null;
}
});
layout.addView(btn1);
layout.addView(btn2);
layout.addView(btn3);
layout.addView(btn4);
layout.addView(exit);
var scroll = new android.widget.ScrollView(ctx);
scroll.addView(layout);
menu.setContentView(scroll);
menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.WHITE));
menu.setWidth(ctx.getWindowManager().getDefaultDisplay().getWidth()*1/3);
menu.setHeight(ctx.getWindowManager().getDefaultDisplay().getHeight());
menu.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.RIGHT|android.view.Gravity.TOP, 0, 0);
}
catch(e){
clientMessage(e+", "+e.lineNumber);
}
}
}));
}

function itemSearch(){

ctx.runOnUiThread(new java.lang.Runnable({

run: function(){

try{

var dialog = new android.app.AlertDialog.Builder(ctx);

var layout = new android.widget.LinearLayout(ctx);

layout.setOrientation(1);

var txt = new android.widget.EditText(ctx);

txt.setHint("검색어를 입력하세요...");

layout.addView(txt);

var scroll = android.widget.ScrollView(ctx);

scroll.addView(layout);

dialog.setView(scroll);

dialog.setTitle("아이템 검색");

dialog.setNegativeButton("취소", null);

dialog.setPositiveButton("확인", new android.content.DialogInterface.OnClickListener({

onClick: function(v){

try{

var items = [];

var codes = [0, 9, 11, 64, 95, 97, 140, 144, 246, 248, 249, 255, 373, 383, 439];

var names = ["공기", "멈춘 물", "멈춘 용암", "문(블록)", "보이지 않는 베드락", "몬스터 스폰알(?)", "화분", "머리", "빛나는 옵시디언", "업데이트 블록 1", "업데이트 블록 2", "오류 돌", "물병(포션)", "스폰알", "카메라"];

var codes2 = [1, 5, 6, 17, 18, 24, 35, 38, 43, 44, 79, 97, 98, 155, 159, 161, 162, 171, 175, 333, 349, 350, 351, 373, 438];

var lengths = [7, 6, 6, 4, 4, 3, 16, 9, 8, 8, 2, 6, 3, 3, 16, 2, 2, 16, 6, 6, 4, 4, 16, 36, 36];

for(var n=0;n<4096;n++){

if(net.zhuoweizhang.mcpelauncher.ScriptManager.nativeIsValidItem(n)){

if(codes.indexOf(n)==-1){

items.push([n, 0, net.zhuoweizhang.mcpelauncher.ScriptManager.nativeGetItemName(n, 0, false)]);

}

else if(n==383){

var entityIds = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45];

var codes3 = [20, 21, 44];

var names3 = ["아이언 골램 생성", "스노우 골램 생성", "좀비 주민 생성"];

for(var m=0;m<entityIds.length;m++){

if(codes3.indexOf(m)!=-1) items.push([383, entityIds[m], names3[codes3.indexOf(m)]]);

else items.push([383, entityIds[m], net.zhuoweizhang.mcpelauncher.ScriptManager.nativeGetItemName(383, entityIds[m], false)]);

}

}

else{

items.push([n, 0, names[codes.indexOf(n)]]);

}

if(codes2.indexOf(n)!=-1){

for(var m=1;m<lengths[codes2.indexOf(n)];m++){

items.push([n, m, net.zhuoweizhang.mcpelauncher.ScriptManager.nativeGetItemName(n, m, false)]);

}

}

}

}

var str = txt.getText().toString();

var result = [];

var result2 = [];

for(var n in items){

if(items[n].toString().search(str)!=-1){

result.push(items[n]);

result2.push("아이디 : "+items[n][0]+", 데미지 : "+items[n][1]+", 이름 : "+items[n][2]);

}

}

if(result[0]!=null) showResult(str, result, result2);

else print("검색 결과가 없습니다.");

}

catch(e){

clientMessage(e+", "+e.lineNumber);

}

}

}));

dialog.show();

}

catch(e){

clientMessage(e+", "+e.lineNumber);

}

}

}));

}

function showResult(str, items, names){
ctx.runOnUiThread(new java.lang.Runnable({
run : function(){
try{
var dialog = new android.app.AlertDialog.Builder(ctx);
dialog.setItems(names, new android.content.DialogInterface.OnClickListener({
onClick: function(m, w){
Entity.setCarriedItem(Player.getEntity(), items[w][0], 5, items[w][1]);
print("설정되었습니다.");
}
}));
dialog.setTitle("아이템 검색 - 검색 결과 ("+str+")");
dialog.setNegativeButton("취소", null);
dialog.show();
}
catch(e){
clientMessage(e+", "+e.lineNumber);
}
}
}));
}

function closeMenu(){
ctx.runOnUiThread(new java.lang.Runnable({
run : function(){
try{
if(menu!=null){
menu.dismiss();
menu = null;
}
}
catch(e){
clientMessage(e+", "+e.lineNumber);
}
}
}));
}

function itemmenu(){
ctx.runOnUiThread(new java.lang.Runnable({
run : function(){
try{
menu2 = new android.widget.PopupWindow();
var layout = new android.widget.LinearLayout(ctx);
var layout2 = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
layout2.setOrientation(1);

var title = new android.widget.TextView(ctx);
title.setText("인벤토리 수정\n");
title.setTextColor(black);              
title.setTextSize(25);
title.setGravity(android.view.Gravity.CENTER);
				
var btn1 = new android.widget.Button(ctx);
btn1.setText("아이템 코드 검색");			
btn1.setTextColor(black);        
btn1.setOnClickListener(new android.view.View.OnClickListener({
onClick : function(v){
itemSearch();                                                                    
}
}));
				
var btn2 = new android.widget.Button(ctx);
btn2.setText("아이템 지급");			
btn2.setTextColor(black);        
btn2.setOnClickListener(new android.view.View.OnClickListener({
onClick : function(v){
giveItem();                                                                    
}
}));
				
var btn3 = new android.widget.Button(ctx);
btn3.setText("갑옷 지급");			
btn3.setTextColor(black);        
btn3.setOnClickListener(new android.view.View.OnClickListener({
onClick : function(v){
armorMenu();                                                                  
}
}));
		
var btn4 = new android.widget.Button(ctx);
btn4.setText("인벤토리 슬롯 리셋");			
btn4.setTextColor(black);        
btn4.setOnClickListener(new android.view.View.OnClickListener({
onClick : function(v){
for(var i = 0; i <55; i++) {
Player.clearInventorySlot(i);
}
toast("<C.F>인벤토리가 초기화 되었습니다.");
}
}));
		
var exit = new android.widget.Button(ctx);
exit.setText("나가기");
exit.setTextColor(black);
exit.setOnClickListener(new android.view.View.OnClickListener({
onClick : function(v){
menu2.dismiss();
}
}));
			
var scroll = new android.widget.ScrollView(ctx);
layout.addView(title);
layout2.addView(btn1);
layout2.addView(btn2);
layout2.addView(btn3);
layout2.addView(btn4);
layout2.addView(exit);
scroll.addView(layout2);
layout.addView(scroll);
menu2.setContentView(layout);
menu2.setFocusable(true);
menu2.setWidth(ctx.getWindowManager().getDefaultDisplay().getWidth()*1/3);
menu2.setHeight(ctx.getWindowManager().getDefaultDisplay().getHeight());
menu2.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.WHITE));       
menu2.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.CENTER | android.view.Gravity.BOTTOM,0,0);
}
catch(e){print(e+","+e.lineNumber); }
}
}));
}

function giveItem(){
ctx.runOnUiThread(new java.lang.Runnable({ run: function() {
try{
var dialog = new android.app.AlertDialog.Builder(ctx);
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
layout.setGravity(android.view.Gravity.CENTER);

var loc1 = new android.widget.TextView(ctx);
var loc2 = new android.widget.EditText(ctx);
var loc3 = new android.widget.TextView(ctx);
var loc4 = new android.widget.EditText(ctx);
var loc5 = new android.widget.TextView(ctx);
var loc6 = new android.widget.EditText(ctx);

loc1.setText("아이템코드 : ");
loc1.setTextSize(19);
loc2.setHint("아이템코드를 입력하세요");
loc2.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
loc3.setText("아이템 개수 : ");
loc3.setTextSize(19);
loc4.setHint("아이템 개수를 입력하세요");
loc4.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
loc5.setText("아이템 데미지 : ");
loc5.setTextSize(19);
loc6.setHint("아이템 데미지를 입력하세요");
loc6.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);

layout.addView(loc1);
layout.addView(loc2);
layout.addView(loc3);
layout.addView(loc4);
layout.addView(loc5);
layout.addView(loc6);

var scroll = android.widget.ScrollView(ctx);
scroll.addView(layout);
dialog.setView(scroll);
dialog.setTitle("아이템 지급");
dialog.setNegativeButton("취소", null);
dialog.setPositiveButton("확인", new android.content.DialogInterface.OnClickListener({
onClick: function(v){
addItemInventory(loc2.getText(), loc4.getText(), loc6.getText());
print("아이템이 지급되었습니다.");
}
}));
dialog.show();
}
catch(e){
clientMessage(e+", "+e.lineNumber);
}
}
}));
}

function command(){
ctx.runOnUiThread(new java.lang.Runnable({
run : function(){
try{
menu3 = new android.widget.PopupWindow();
var layout = new android.widget.LinearLayout(ctx);
var layout2 = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
layout2.setOrientation(1);

var title = new android.widget.TextView(ctx);
title.setText("명령어 사용\n");
title.setTextColor(black);              
title.setTextSize(25);
title.setGravity(android.view.Gravity.CENTER);
				
var btn = new android.widget.Button(ctx);
btn.setText("주의사항");
btn.setTextColor(black);        
btn.setOnClickListener(new android.view.View.OnClickListener({
onClick : function(v){
commandRule();
}
}));
			
var btn1 = new android.widget.Button(ctx);
btn1.setText("크리에이티브");
btn1.setTextColor(black);        
btn1.setOnClickListener(new android.view.View.OnClickListener({
onClick : function(v){
Level.executeCommand("/gamemode 1 @a", true);
toast("<C.F>크리에이티브로 설정되었습니다");
}
}));
				
var btn2 = new android.widget.Button(ctx);
btn2.setText("서바이벌");			
btn2.setTextColor(black);        
btn2.setOnClickListener(new android.view.View.OnClickListener({
onClick : function(v){
Level.executeCommand("/gamemode 0 @a", true);
toast("<C.F>서바이벌로 설정되었습니다");                                                                
}
}));

var btn8 = new android.widget.Button(ctx);
btn8.setText("게임 난이도 설정");			
btn8.setTextColor(black);        
btn8.setOnClickListener(new android.view.View.OnClickListener({
onClick : function(v){
difficulty();                            
}
}));

var btn6 = new android.widget.Button(ctx);
btn6.setText("셋홈 지정");			
btn6.setTextColor(black);        
btn6.setOnClickListener(new android.view.View.OnClickListener({
onClick : function(v){
xx = getPlayerX();
yy = getPlayerY();
zz = getPlayerZ();
toast("<C.F>셋홈 저장");                                                                
}
}));

var btn7 = new android.widget.Button(ctx);
btn7.setText("셋홈 이동");			
btn7.setTextColor(black);        
btn7.setOnClickListener(new android.view.View.OnClickListener({
onClick : function(v){
if(xx==null)
{
toast("<C.F>셋홈이 지정되지 않았습니다"); 
}   
if(xx!=null)
{
setPosition(getPlayerEnt(), xx, yy, zz);
toast("<C.F>셋홈으로 이동하였습니다"); 
}                                                                
}
}));

var sw1 = new android.widget.Switch(ctx); 
sw1.setText("좌표 보기");
sw1.setChecked(false);
sw1.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged: function(swit, isChecked) {
if(isChecked) {
Level.executeCommand("/gamerule showcoordinates true", true);
toast("<C.F>좌표보기 사용 ON");      
} else {
Level.executeCommand("/gamerule showcoordinates false",true);
toast("<C.F>좌표보기 사용 OFF");      
}
}
}));
		
var sw2 = new android.widget.Switch(ctx); 
sw2.setText("인벤세이브");
sw2.setChecked(false);
sw2.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged: function(swit, isChecked) {
if(isChecked) {
Level.executeCommand("/gamerule keepinventory true", true);
toast("<C.F>인벤세이브 ON");      
} else {
 Level.executeCommand("/gamerule keepinventory false",true);
toast("<C.F>인벤세이브 OFF");
}
}
}));

var sw3 = new android.widget.Switch(ctx); 
sw3.setText("자연 채력재생");
sw3.setChecked(false);
sw3.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged: function(swit, isChecked) {
if(isChecked) {
Level.executeCommand("/gamerule naturalregeneration true", true);
toast("<C.F>자연 채력재생 ON");      
} else {
Level.executeCommand("/gamerule naturalregeneration false",true); 
toast("<C.F>자연 채력재생 OFF");
}
}
}));

var sw4 = new android.widget.Switch(ctx); 
sw4.setText("익사데미지 면역");
sw4.setChecked(false);
sw4.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged: function(swit, isChecked) {
if(isChecked) {
Level.executeCommand("/gamerule drowningdamege false", true);
toast("<C.F>익사데미지 면역 ON");      
} else {
Level.executeCommand("/gamerule drowningdamege true",true); 
toast("<C.F>익사데미지 면역 OFF");
}
}
}));

var sw5 = new android.widget.Switch(ctx); 
sw5.setText("화염데미지 면역");
sw5.setChecked(false);
sw5.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged: function(swit, isChecked) {
if(isChecked) {
Level.executeCommand("/gamerule firedamege false", true);
toast("<C.F>화염데미지 면역 ON");      
} else {
Level.executeCommand("/gamerule firedamege true",true); 
toast("<C.F>화염데미지 면역 OFF");
}
}
}));

var sw6 = new android.widget.Switch(ctx); 
sw6.setText("낙사데미지 면역");
sw6.setChecked(false);
sw6.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged: function(swit, isChecked) {
if(isChecked) {
Level.executeCommand("/gamerule falldamege false", true);
toast("<C.F>낙사데미지 면역 ON");      
} else {
Level.executeCommand("/gamerule falldamege true",true); 
toast("<C.F>낙사데미지 면역 OFF");
}
}
}));

var sw7 = new android.widget.Switch(ctx); 
sw7.setText("플레이어 간의 전투");
sw7.setChecked(false);
sw7.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged: function(swit, isChecked) {
if(isChecked) {
Level.executeCommand("/gamerule pvp true", true);
toast("<C.F>플레이어 간의 전투 허용");      
} else {
Level.executeCommand("/gamerule pvp false",true); 
toast("<C.F>플레이어 간의 전투 비허용");
}
}
}));

var btn3 = new android.widget.Button(ctx);
btn3.setText("날씨:맑음");			
btn3.setTextColor(black);        
btn3.setOnClickListener(new android.view.View.OnClickListener({
onClick : function(v){
Level.executeCommand("/weather sun", true);
toast("<C.F>날씨 설정 : 맑음");                                                                
}
}));

var btn4 = new android.widget.Button(ctx);
btn4.setText("날씨:비옴");			
btn4.setTextColor(black);        
btn4.setOnClickListener(new android.view.View.OnClickListener({
onClick : function(v){
Level.executeCommand("/weather rain", true);
toast("<C.F>날씨 설정 : 비옴");                                                                
}
}));

var btn5 = new android.widget.Button(ctx);
btn5.setText("날씨:눈");			
btn5.setTextColor(black);        
btn5.setOnClickListener(new android.view.View.OnClickListener({
onClick : function(v){
Level.executeCommand("/weather snow", true);
toast("<C.F>날씨 설정 : 눈");                                                                
}
}));
		
var exit = new android.widget.Button(ctx);
exit.setText("나가기");
exit.setTextColor(black);
exit.setOnClickListener(new android.view.View.OnClickListener({
onClick : function(v){
menu3.dismiss();
}
})) ;
			
var scroll = new android.widget.ScrollView(ctx);
layout.addView(title);
layout2.addView(btn);
layout2.addView(btn1);
layout2.addView(btn2);
layout2.addView(btn6);
layout2.addView(btn7);
layout2.addView(btn8);
layout2.addView(sw1);
layout2.addView(sw2);
layout2.addView(sw3);
layout2.addView(sw4);
layout2.addView(sw5);
layout2.addView(sw6);
layout2.addView(sw7);
layout2.addView(btn3);
layout2.addView(btn4);
layout2.addView(btn5);
layout2.addView(exit);
scroll.addView(layout2);
layout.addView(scroll);
menu3.setContentView(layout);
menu3.setFocusable(true);
menu3.setWidth(ctx.getWindowManager().getDefaultDisplay().getWidth()*1/3);
menu3.setHeight(ctx.getWindowManager().getDefaultDisplay().getHeight());
menu3.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.WHITE));       
menu3.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.CENTER | android.view.Gravity.BOTTOM,0,0);
}
catch(e){print(e+","+e.lineNumber); }
}
}));
}



function armorMenu(){
{
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
ctx.runOnUiThread(new java.lang.Runnable({
run : function(){
try{
var dialog = new android.app.AlertDialog.Builder(ctx);
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);

var btn1 = new android.widget.Button(ctx);
btn1.setText("다이아 갑옷 세트");
btn1.setOnClickListener(new android.view.View.OnClickListener() {
onClick: function(v){
addItemInventory(310,1);
addItemInventory(311,1);
addItemInventory(312,1);
addItemInventory(313,1);
toast("<C.F>다이아 갑옷 세트가 정상적으로 지급되었습니다");
}
});        		         
layout.addView(btn1);

var btn2 = new android.widget.Button(ctx);
btn2.setText("철 갑옷 세트");
btn2.setOnClickListener(new android.view.View.OnClickListener() {
onClick: function(v){
addItemInventory(306,1);
addItemInventory(307,1);
addItemInventory(308,1);
addItemInventory(309,1);
toast("<C.F>철 갑옷 세트가 정상적으로 지급되었습니다");
}
});        		         
layout.addView(btn2);

var btn3 = new android.widget.Button(ctx);
btn3.setText("금 갑옷 세트");
btn3.setOnClickListener(new android.view.View.OnClickListener() {
onClick: function(v){
addItemInventory(314,1);
addItemInventory(315,1);
addItemInventory(316,1);
addItemInventory(317,1);
toast("<C.F>금 갑옷 세트가 정상적으로 지급되었습니다");
}
});        		         
layout.addView(btn3);

var btn4 = new android.widget.Button(ctx);
btn4.setText("사슬 갑옷 세트");
btn4.setOnClickListener(new android.view.View.OnClickListener() {
onClick: function(v){
addItemInventory(302,1);
addItemInventory(303,1);
addItemInventory(304,1);
addItemInventory(305,1);
toast("<C.F>사슬 갑옷 세트가 정상적으로 지급되었습니다");
}
});        		         
layout.addView(btn4);

var btn5 = new android.widget.Button(ctx);
btn5.setText("가죽 갑옷 세트");
btn5.setOnClickListener(new android.view.View.OnClickListener() {
onClick: function(v){
addItemInventory(298,1);
addItemInventory(299,1);
addItemInventory(300,1);
addItemInventory(301,1);
toast("<C.F>가죽 갑옷 세트가 정상적으로 지급되었습니다");
}
});        		         
layout.addView(btn5);

var scroll = android.widget.ScrollView(ctx);
scroll.addView(layout);
dialog.setView(scroll);
dialog.setTitle("갑옷 지급");
dialog.setNegativeButton("취소", null);
dialog.show();
}
catch(e){
clientMessage(e+", "+e.lineNumber);
}
}
}));
}
}
 
function commandRule() {
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{
var dialog = new android.app.AlertDialog.Builder(ctx);
dialog.setTitle("주의사항");
dialog.setMessage("게임 설정의 내 치트를 켜주셔야 사용 가능합니다.<<게임룰 명령어가 블록런쳐에서 오류나네요 빠른 일시 내에 해결하도록 하겠습니다 죄송합니다");
dialog.setNegativeButton("확인", null);
dialog.show();
}
catch(e){
clientMessage(e+", "+e.lineNumber);
}
}
}));
}

function TerrorOption()
{
ctx.runOnUiThread(new java.lang.Runnable({
run : function(){
try{
menu4 = new android.widget.PopupWindow();
var layout = new android.widget.LinearLayout(ctx);
var layout2 = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
layout2.setOrientation(1);

var title = new android.widget.TextView(ctx);
title.setText("테러 기능\n");
title.setTextColor(black);              
title.setTextSize(25);
title.setGravity(android.view.Gravity.CENTER);
			
var tb1 = new android.widget.ToggleButton(ctx);
tb1.setTextOn("불도저 기능 사용");
tb1.setTextOff("불도저 기능 미사용");
tb1.setChecked(false);
tb1.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged: function(toggle, isChecked) {
if(isChecked) {
terror1 = true;
toast("<C.F>불도저 기능 on");
} else {
terror1 = false;
toast("<C.F>불도저 기능 off");
}
}
}));

var tb2 = new android.widget.ToggleButton(ctx);
tb2.setTextOn("포인터 블록 파괴 사용");
tb2.setTextOff("포인터 블록 파괴 사용해제");
tb2.setChecked(false);
tb2.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged: function(toggle, isChecked) {
if(isChecked) {
terror2 = true;
toast("<C.F>포인터 블록 파괴 사용");
} else {
terror2 = false;
toast("<C.F>포인터 블록 파괴 사용해제");
}
}
}));

var tb3 = new android.widget.ToggleButton(ctx);
tb3.setTextOn("포인터 블록 광역파괴 사용");
tb3.setTextOff("포인터 블록 광역파괴 사용해제");
tb3.setChecked(false);
tb3.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged: function(toggle, isChecked) {
if(isChecked) {
terror3= true;
toast("<C.F>on, 미잭카펫 기능과 사용하시는것을 권장합니다");
} else {
terror3 = false;
toast("<C.F>포인터 블록 광역파괴 사용해제");
}
}
}));

var tb4 = new android.widget.ToggleButton(ctx);
tb4.setTextOn("매직카펫 사용");
tb4.setTextOff("매직카펫 사용 해제");
tb4.setChecked(false);
tb4.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged: function(toggle, isChecked) {
if(isChecked) {
terror4= true;
toast("<C.F>매직카펫을 사용합니다");
} else {
terror4 = false;
toast("<C.F>매직카펫을 사용하지않습니다");
}
}
}));

var btn1 = new android.widget.Button(ctx);
btn1.setText("테러 포션 효과");
btn1.setTextColor(black);        
btn1.setOnClickListener(new android.view.View.OnClickListener({
onClick : function(v){
effectMenu();
}
}));

var exit = new android.widget.Button(ctx);
exit.setText("나가기");
exit.setTextColor(black);
exit.setOnClickListener(new android.view.View.OnClickListener({
onClick : function(v){
menu4.dismiss();
}
})) ;
			
var scroll = new android.widget.ScrollView(ctx);
layout.addView(title);
layout.addView(tb1);
layout2.addView(tb2);
layout2.addView(tb3);
layout2.addView(tb4);
layout2.addView(btn1);
layout2.addView(exit);
scroll.addView(layout2);
layout.addView(scroll);
menu4.setContentView(layout);
menu4.setFocusable(true);
menu4.setWidth(ctx.getWindowManager().getDefaultDisplay().getWidth()*1/3);
menu4.setHeight(ctx.getWindowManager().getDefaultDisplay().getHeight());
menu4.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.WHITE));       
menu4.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.CENTER | android.view.Gravity.BOTTOM,0,0);
}
catch(e){print(e+","+e.lineNumber); }
}
}));
}

function effectMenu(){
{
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
ctx.runOnUiThread(new java.lang.Runnable({
run : function(){
try{
var dialog = new android.app.AlertDialog.Builder(ctx);
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);

var sw1 = new android.widget.Switch(ctx); 
sw1.setText("야간 투시");
sw1.setChecked(false);
sw1.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged: function(swit, isChecked) {
if(isChecked) {
Entity.addEffect(getPlayerEnt(), 16, 99999, 0, true, false);
toast("<C.F>야간 투시 활성화");      
} else {
Entity.removeEffect(getPlayerEnt(), 16);
toast("<C.F>야간 투시 비활성화");
}
}
}));

var sw2 = new android.widget.Switch(ctx); 
sw2.setText("투명화");
sw2.setChecked(false);
sw2.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged: function(swit, isChecked) {
if(isChecked) {
Entity.addEffect(getPlayerEnt(), 14, 99999, 0, true, false);
toast("<C.F>투명화 활성화");      
} else {
Entity.removeEffect(getPlayerEnt(), 14);
toast("<C.F>투명화 비활성화");
}
}
}));

var sw3 = new android.widget.Switch(ctx); 
sw3.setText("신속");
sw3.setChecked(false);
sw3.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged: function(swit, isChecked) {
if(isChecked) {
Entity.addEffect(getPlayerEnt(), 1, 99999, 4, true, false);
toast("<C.F>신속 활성화");      
} else {
Entity.removeEffect(getPlayerEnt(), 1);
toast("<C.F>신속 비활성화");
}
}
}));

var sw4 = new android.widget.Switch(ctx); 
sw4.setText("힘");
sw4.setChecked(false);
sw4.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged: function(swit, isChecked) {
if(isChecked) {
Entity.addEffect(getPlayerEnt(), 5, 99999, 9, true, false);
toast("<C.F>힘 활성화");      
} else {
Entity.removeEffect(getPlayerEnt(), 5);
toast("<C.F>힘 비활성화");
}
}
}));

var sw5 = new android.widget.Switch(ctx); 
sw5.setText("화염 저항");
sw5.setChecked(false);
sw5.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged: function(swit, isChecked) {
if(isChecked) {
Entity.addEffect(getPlayerEnt(), 12, 99999,0, true, false);
toast("<C.F>화염 저항 활성화");      
} else {
Entity.removeEffect(getPlayerEnt(), 12);
toast("<C.F>화염 저항 비활성화");
}
}
}));

var scroll = android.widget.ScrollView(ctx);
layout.addView(sw1);
layout.addView(sw2);
layout.addView(sw3);
layout.addView(sw4);
layout.addView(sw5);
scroll.addView(layout);
dialog.setView(scroll);
dialog.setTitle("테러용 포션 효과 지급");
dialog.setNegativeButton("취소", null);
dialog.show();
}
catch(e){
clientMessage(e+", "+e.lineNumber);
}
}
}));
}
}

function difficulty() {
{
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
ctx.runOnUiThread(new java.lang.Runnable({
run : function(){
try{
var dialog = new android.app.AlertDialog.Builder(ctx);
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);

var btn1 = new android.widget.Button(ctx);
btn1.setText("평화로움");
btn1.setOnClickListener(new android.view.View.OnClickListener() {
onClick: function(v){
Level.setDifficulty(0);
toast("<C.F>난이도 : 평화로움");
}
});

var btn2 = new android.widget.Button(ctx);
btn2.setText("쉬움");
btn2.setOnClickListener(new android.view.View.OnClickListener() {
onClick: function(v){
Level.setDifficulty(1);
toast("<C.F>난이도 : 쉬움");
}
});   

var btn3 = new android.widget.Button(ctx);
btn3.setText("보통");
btn3.setOnClickListener(new android.view.View.OnClickListener() {
onClick: function(v){
Level.setDifficulty(2);
toast("<C.F>난이도 : 보통");
}
});   

var btn4 = new android.widget.Button(ctx);
btn4.setText("어려움");
btn4.setOnClickListener(new android.view.View.OnClickListener() {
onClick: function(v){
Level.setDifficulty(3);
toast("<C.F>난이도 : 어려움");
}
});           		         

var scroll = android.widget.ScrollView(ctx);
layout.addView(btn1);
layout.addView(btn2);
layout.addView(btn3);
layout.addView(btn4);
scroll.addView(layout);
dialog.setView(scroll);
dialog.setTitle("게임 난이도 설정");
dialog.setNegativeButton("취소", null);
dialog.show();
}
catch(e){
clientMessage(e+", "+e.lineNumber);
}
}
}));
}
}

function producer()  {
ctx.runOnUiThread(new java.lang.Runnable({
run : function(){
try{
menu5 = new android.widget.PopupWindow();
var layout = new android.widget.LinearLayout(ctx);
var layout2 = new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
layout2.setOrientation(1);

var title = new android.widget.TextView(ctx);
title.setText("제작자 정보\n");
title.setTextColor(black);              
title.setTextSize(16);
title.setGravity(android.view.Gravity.CENTER);

var btn1 = new android.widget.Button(ctx);
btn1.setText("제작자가 남긴 말");
btn1.setTextColor(black);        
btn1.setOnClickListener(new android.view.View.OnClickListener({
onClick : function(v){
bye();
}
}));
var btn2 = new android.widget.Button(ctx);
btn2.setText("제작자 유튜브");
btn2.setTextColor(black);        
btn2.setOnClickListener(new android.view.View.OnClickListener({
onClick : function(v){
youtube();
}
}));
var btn3 = new android.widget.Button(ctx);
btn3.setText("제작자 블로그");
btn3.setTextColor(black);        
btn3.setOnClickListener(new android.view.View.OnClickListener({
onClick : function(v){
naverblog();
}
}));

var exit = new android.widget.Button(ctx);
exit.setText("나가기");
exit.setTextColor(black);
exit.setOnClickListener(new android.view.View.OnClickListener({
onClick : function(v){
menu5.dismiss();
}
})) ;
			
var scroll = new android.widget.ScrollView(ctx);
layout.addView(title);
layout2.addView(btn1);
layout2.addView(btn2);
layout2.addView(btn3);
layout2.addView(exit);
scroll.addView(layout2);
layout.addView(scroll);
menu5.setContentView(layout);
menu5.setFocusable(true);
menu5.setWidth(ctx.getWindowManager().getDefaultDisplay().getWidth()*1/3);
menu5.setHeight(ctx.getWindowManager().getDefaultDisplay().getHeight());
menu5.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.WHITE));       
menu5.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.CENTER | android.view.Gravity.BOTTOM,0,0);
}
catch(e){print(e+","+e.lineNumber); }
}
}));
}

function bye(){
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{
var dialog = new android.app.AlertDialog.Builder(ctx);
dialog.setTitle("안녕하세요 쿠키샌드입니다!");
dialog.setMessage("먼저 이 스크립트를 사용해주셔서 감사합니다!\nV2때 추가되었으면 하는 기능, 스크립트에서 발생하는 오류를 제 블로그 혹은 유튜브 댓글로 남겨주시면 적극 반영해드립니다\n도움:해커[HK07]");
dialog.setNegativeButton("닫기", null);
dialog.show();
}
catch(e){
clientMessage(e+", "+e.lineNumber);
}
}
}));
}

function youtube() {
ctx.runOnUiThread(new java.lang.Runnable({run: function(){
var webs = new android.webkit.WebView(ctx);
var webset = webs.getSettings();
webset.setJavaScriptEnabled(true);
webs.setWebChromeClient(new android.webkit.WebChromeClient());
webs.setWebViewClient(new android.webkit.WebViewClient());
webs.loadUrl('https://www.youtube.com/channel/UCfC_7T3ZM9euFI8Utb9Q_AA');
print("쿠키샌드 유튜브로 이동합니다..");
new android.app.AlertDialog.Builder(ctx).setView(webs).show();
}}));
}

function naverblog() {
ctx.runOnUiThread(new java.lang.Runnable({run: function(){
var webs = new android.webkit.WebView(ctx);
var webset = webs.getSettings();
webset.setJavaScriptEnabled(true);
webs.setWebChromeClient(new android.webkit.WebChromeClient());
webs.setWebViewClient(new android.webkit.WebViewClient());
webs.loadUrl('http://blog.naver.com/sandcookie20');
print("쿠키샌드 블로그로 이동합니다..");
new android.app.AlertDialog.Builder(ctx).setView(webs).show();
}}));
}

function modTick() {

if(terror1==true)
{
var px = Math.floor(Player.getX());
var py = Math.floor(Player.getY()) - 1;
var pz = Math.floor(Player.getZ());
for(var ix = -2; ix <= 2; ix++) {
for(var iy = 0; iy < 2; iy++) {
for(var iz = -2; iz <= 2; iz ++) {
Level.destroyBlock(px + ix, py + iy, pz + iz);
}}}
}

if(terror2==true)
{ 
Level.destroyBlock(Player.getPointedBlockX(), Player.getPointedBlockY(), Player.getPointedBlockZ());
}

if(terror3==true)
{
for(var jx = -1; jx <= 1; jx++) {
for(var jy = -1; jy <= 1; jy++) {
for(var jz = -1; jz <= 1; jz++) {
Level.destroyBlock(Player.getPointedBlockX()+ jx, Player.getPointedBlockY()+ jy, Player.getPointedBlockZ()+ jz);
}}}
}

if(terror4==true)
{
kx = Math.round(Player.getX()-0.5);
if(getPitch()==90){
ky = Player.getY()-3;
}
else{
ky = Player.getY()-2;
}
kz = Math.round(Player.getZ()-0.5);
for(var xx=kx-1;xx<kx+2;xx++)
for(var yy=ky-1;yy<ky+2;yy++)
for(var zz=kz-1;zz<kz+2;zz++)
if(getTile(xx, yy, zz)==20){
setTile(xx, yy, zz, 0);
}
if(getTile(kx, ky, kz)==0){
setTile(kx, ky, kz, 20);
}
}

}
