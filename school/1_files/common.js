$(function(){isPhone();shareLink()
$(".sele-cur").hover(function(){$(this).find("ul").show();},function(){$(this).find("ul").hide();});$(".sele-cur li").on("click",function(){var txt=$(this).html();var nsid=$(this).attr("data-ns");$(".deft span").html(txt);$(".nsid").attr("value",nsid);$(this).parent().hide();});var sKey="输入关键词，比如：毕业、爱、EXO";$("input.in-key").removeClass("key-focus");$("input.in-key").on({focus:function(){$(this).addClass("key-focus");if($(this).val()==sKey){$(this).val("");}},blur:function(){if($(this).val()==""){$(this).removeClass("key-focus").val(sKey);}}});$(".llast").hover(function(){$(this).find(".sele-gj").show();},function(){$(this).find(".sele-gj").hide();});$(".copyView").on("mouseover","span",function(){bAction.copyTxt(this,$(this).attr("id").substr(1));});$(".txtContent").on("mouseover","p",function(){bAction.fzCopyTxt(this)});var idList="";$(".plIco").each(function(i){idList+=$(this).attr("data-id");if((i+1)<$(".plIco").length){idList+=",";}});if(idList!=""){PUB.Ajax({url:"/ajax/listload/",data:"listID="+idList+"&bclassid="+$(".pMain").attr("data-classid"),}).then(function(result){$(".plIco").each(function(){var dvID=$(this).attr("data-id");for(var i=0;i<result.length;i++){var iID=result[i].split(":");if(iID[0]==dvID){$(this).find(".t").html(iID[1]);$(this).find(".d").html(iID[2]);$(this).find(".f").html(iID[3]);}}});});}
$(".click_chg").click(function(){$(".blockUI").fadeIn(200);});$(".mask-close").click(function(){$(".blockUI").fadeOut(200);$(".tableform .ipt").val('');$(".chg_msg").html('');});$("#changeUp").click(function(){var id=$(this).data("userid");var username=$.trim($(".ipt").val());if(username==""){$(".chg_msg").html("亲，昵称还是空着的哟！");}
else{PUB.Ajax({url:"/ajax/c_name/",data:"userid="+id+"&username="+username,}).then(function(rs){if(rs.status==0){$(".chg_msg").html(rs.msg);return false;}else{$(".chg_msg").html(rs.msg);$(".chg_msg").css("color","#1E90FF");setTimeout("window.location.href='/e/member/EditInfo/'",3000);return true;}});}});var frollSet=$(".rollBD");var hasclass=$(".has_class").length;var framenr=$(".frame_nr").length;if(frollSet.length){var foffset=frollSet.offset();var fheight=frollSet.height();if(hasclass){var ftop=$(".has_class").offset().top;}else if(framenr){var ftop=$(".frame_nr").offset().top;}else{var ftop=$(".footAD").offset().top;}
$(window).scroll(function(){var fscrollTop=$(window).scrollTop();var vHeight=fscrollTop+fheight;if(fscrollTop>=foffset.top&&vHeight<=$(".footAD").offset().top){frollSet.css({'position':'fixed','top':0})}else if(fscrollTop>=foffset.top&&vHeight>=$(".footAD").offset().top){frollSet.css({'position':'absolute','top':$(".footAD").offset().top-fheight+'px'})}else{frollSet.css({'position':'relative','top':0})}});}
$(".fzUl li").on("mouseover",function(){bAction.fzCopyTxt($(this));});$(".bdcontShare").hover(function(){$(this).find(".contShare").fadeIn(200);},function(){$(this).find(".contShare").hide();});$("#fava_list").on({mouseover:function(){$(this).addClass("favaTxhover");},mouseout:function(){$(this).removeClass("favaTxhover");}},".favaTx");$(".dInput").on({focus:function(){$(this).parents(".inputNum").addClass("onNum");},blur:function(){$(this).parents(".inputNum").removeClass("onNum");}});$(".inBorder").on({focus:function(){$(this).css("border-color","#0af");},blur:function(){$(this).css("border-color","#dedede");}});$(".dInput").on("keyup change keydown",function(){var _max=$(this).attr("maxlength");var Count=$(this).attr("msg");var curVal=$(this).val();var curLen=getLen(curVal);if(curLen<_max){if(Count!=""){$("."+Count).text(parseInt((_max-curLen)/2));}}else{if(Count!=""){$("."+Count).text(0);}
$(this).val(cutString(curVal,_max));}});$(".closeBttom").on("click",function(){$(this).parent().remove();$("#footer").css({"height":"auto"});});$(".uploadBtn").on('click','a.saveBtn',function(){var _upic=$(this).data("url");var _uid=$(this).data("uid");if(_upic!=''&&_uid!=''){$.ajax({type:'post',url:'/ajax/tx/add/',dataType:'json',data:'uid='+_uid+'&upic='+_upic,success:function(res){if(res.stats==1){$("#avatar_upload-queue").html("");$("#avatar_upload-button").show();$(".uploadify object").css({"width":"180px","height":"30px"});$("#avatar_upload").css({"margin-top":"0"});$(".userImgLeft img").eq(0).remove();var pic=$(".userImgLeft img").attr('src');$(".nameLink img").attr('src',pic);}}});}});$(".uploadBtn").on('click','a.cancelBtn',function(){$("#avatar_upload-queue").html("");$("#avatar_upload-button").show();$(".uploadify object").css({"width":"180px","height":"30px"});$("#avatar_upload").css({"margin-top":"0"});$(".userImgLeft img").eq(1).remove();$(".userImgLeft img").eq(0).show();});$('#s_pic').click(function(){$('#b_pic').removeClass('on');$('#s_pic').addClass('on');var size=$(this).attr("size");$('.artCont img').attr('style','width:'+size+'px;height:'+size+'px');})
$('#b_pic').click(function(){$('#s_pic').removeClass('on');$('#b_pic').addClass('on');var size=$(this).attr("size");$('.artCont img').attr('style','width:'+size+'px;height:'+size+'px');})
$('#rod_pic').click(function(){$('#square_pic').removeClass('on');$('#rod_pic').addClass('on');$('.artCont img').addClass('pic_rd');})
$('#square_pic').click(function(){$('#rod_pic').removeClass('on');$('#square_pic').addClass('on');$('.artCont img').removeClass('pic_rd');})
$('.reg-email').click(function(){var a=regLogin.formSubmit('register-email',function(){$('#reg-email').addClass('hide');$('#reg-email-bind').removeClass('hide');});})
$('#login-submit').click(function(e){regLogin.formSubmit('login',function(){e.preventDefault();});})
$('.phoneCodeBtn').click(function(){if(!$(this).hasClass('js-send'))return;var obj=$(this);var phone=$('#phone').val();var type=$(this).data('type');PUB.Ajax({url:'/ajax/send/',type:'post',data:{phone:phone,type:type},}).then(function(data){time(obj)})})});function isPhone(){var phone=navigator.userAgent.toLowerCase().match(/(iPhone)|(iPod)|(Android)|(PlayBook)|(BB10)|(BlackBerry)|(Opera Mini)|(IEMobile)|(webOS)|(MeeGo)/i)!==null;if(phone){window.location.host='m.woyaogexing.com';}}
function isFull(pChar){if((pChar.charCodeAt(0)>255)){return true;}else{return false;}}
function cutString(pStr,pLen){var strLen=pStr.length;var cutString;var lenCount=0;if(strLen<=pLen/2){cutString=pStr;}else{for(var i=0;i<strLen;i++){if(isFull(pStr.charAt(i))){lenCount+=2;}else{lenCount+=1;}
if(lenCount>pLen){cutString=pStr.substring(0,i);break;}else if(lenCount==pLen){cutString=pStr.substring(0,i+1);break;}}}
return cutString;}
function getString(str,n){var r="/[^\x00-\xff]/g";if(getLen(str)<=n){return str;}
var m=Math.floor(n/2);for(var i=m;i<str.length;i++){if(str.substr(0,i).replace(r,"xx").length>=n){return str.substr(0,i);}}
return str;}
function getLen(str)
{return str.replace(/[^\x00-\xff]/g,"xx").length;}
function regInput(name,type){$.when(regLogin[name](type)).done(function(){console.log('success')}).fail(function(){console.log('fail')})}
var regLogin={logAccount:function(){var df=$.Deferred();var account=$('#useraccount').val();if(account!==''){PUB.Ajax({url:"/ajax/login/",data:"filedVal="+account+"&filed=account&type=login"}).done(function(rs){if(rs.status!=0){$("#checkAccount").attr("class","tipRight").html(rs.msg);df.resolve();}else{$("#checkAccount").attr("class","tipError").html(rs.msg);df.reject();}})}else{$("#checkAccount").attr("class","tipError").html("请输入账号");df.reject();}
return df.promise();},checkEmail:function(type){var df=$.Deferred();var emailVar=$.trim($("#email").val());if(emailVar!=""){var reg=/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;if(reg.test(emailVar)){PUB.Ajax({url:"/ajax/login/",data:"filedVal="+emailVar+"&filed=email&type="+type}).done(function(rs){if(rs.status!=0){$("#checkEmail").attr("class","tipRight").html(rs.msg);df.resolve();}else{$("#checkEmail").attr("class","tipError").html(rs.msg);df.reject();}})}else{$("#checkEmail").attr("class","tipError").html("请输入正确的邮箱格式");df.reject();}}else{$("#checkEmail").attr("class","tipError").html("请输入邮箱地址");df.reject();}
return df.promise();},checkPhone:function(type){var df=$.Deferred();var phoneVar=$.trim($("#phone").val());if(phoneVar!=""){var reg=/^[1][3,4,5,7,8][0-9]{9}$/;if(reg.test(phoneVar)){PUB.Ajax({url:"/ajax/login/",data:"filedVal="+phoneVar+"&filed=phone&type="+type}).done(function(rs){if(rs.status!=0){$("#checkPhone").attr("class","tipRight").html(rs.msg);$('.phoneCodeBtn').addClass('js-send');df.resolve();}else{$("#checkPhone").attr("class","tipError").html(rs.msg);df.reject();}});}else{$("#checkPhone").attr("class","tipError").html("请输入正确的手机格式");df.reject();}}else{$("#checkPhone").attr("class","tipError").html("请输入手机号码");df.reject();}
return df.promise()},checkPhoneCode:function(type){var df=$.Deferred();var code=$('#phoneCode').val();var phone=$('#phone').val();if(code==''||phone==''||code.length!==6){$("#checkPhoneCode").attr("class","tipError").html("请输入验证码");df.reject();}else{PUB.Ajax({url:'/ajax/check/',type:'post',data:'phone='+phone+'&code='+code}).done(function(rs){if(rs.code!=0){$("#checkPhoneCode").attr("class","tipRight");$('.phoneCodeBtn').removeClass('js-send');df.resolve();}else{$("#checkPhoneCode").attr("class","tipError").html(rs.msg);df.reject();}})}
return df.promise()},checkPasswd:function(type){var df=$.Deferred();if(type=="newpass"){var passwdVar=$.trim($("#newpassword").val());}else{var passwdVar=$.trim($("#password").val());}
if(passwdVar!=""){if(type=="login"){$("#checkPasswd").attr("class","").html("");df.resolve()}
if(passwdVar.length<6||passwdVar.length>16){$("#checkPasswd").attr("class","tipError").html("密码长度在6~16个字符之间");df.reject()}else{$("#checkPasswd").attr("class","tipRight").html("");df.resolve()}}else{$("#checkPasswd").attr("class","tipError").html("请输入你的密码");df.reject()};return df.promise()},checkRepasswd:function(type){if(type=="newpass"){var repassVar=$.trim($("#newpassword").val());var passwdVar=$.trim($("#renewpassword").val());}else{var repassVar=$.trim($("#repassword").val());var passwdVar=$.trim($("#password").val());}
if(repassVar!=""){if(repassVar===passwdVar){$("#checkRepasswd").attr("class","tipRight").html("");return true;}else{$("#checkRepasswd").attr("class","tipError").html("两次输入的密码不一样");return false;}}else{$("#checkRepasswd").attr("class","tipError").html("请输入你的确认密码");return false;}},checkNick:function(type){var nickVar=$.trim($("#username").val());if(nickVar!=""){PUB.Ajax({url:"/ajax/login/",data:"filedVal="+nickVar+"&filed=username&type="+type,}).then(function(rs){if(rs.status!=0){$("#checkNick").attr("class","tipRight").html(rs.msg);return true;}else{$("#checkNick").attr("class","tipError").html(rs.msg);return false;}});}else{$("#checkNick").attr("class","tipError").html("请输入你的昵称");return false;}},checkKey:function(type){var keyVar=$.trim($("#key").val());if(keyVar!=""){PUB.Ajax({url:"/ajax/login/",data:"action=key&keyVal="+keyVar+"&type="+type,}).then(function(rs){if(rs.status!=0){$("#checkKey").attr("class","tipRight").html(rs.msg);return true;}else{$("#checkKey").attr("class","tipError").html(rs.msg);return false;}});}else{$("#checkKey").attr("class","tipError").html("请输入验证码");return false;}},formSubmit:function(type,fn){if(type=="register-email"){$.when(regLogin.checkEmail("register"),regLogin.checkPasswd()).done(function(){console.log('success')
fn()}).fail(function(){console.log('fail')})}
if(type=="bindphone"){$.when(regLogin.checkPhone("register"),regLogin.checkPhoneCode()).done(function(){console.log('success')}).fail(function(){console.log('fail')
fn()})}
if(type=="login"){$.when(regLogin.logAccount("login"),regLogin.checkPasswd()).done(function(){console.log('success')}).fail(function(){console.log('fail')
fn()})}
if(type=="findpass"){if(regLogin.checkEmail()===false){return false;}
if(regLogin.checkKey("getpass")===false){return false;}
return true;}
if(type=="newpass"){if(regLogin.checkPasswd('newpass')===false){return false;}
if(regLogin.checkRepasswd('newpass')===false){return false;}
return true;}
if(type=="editpsd"){if(regLogin.checkOldPs()==false){return false;}
if(regLogin.checkNewPs()==false){return false;}
if(regLogin.checkReNesps()==false){return false;}
$("#"+type+"form").submit();}},checkOldPs:function(){if($("#oldpassword").val()==""){$("#checkOld").addClass("checkError").html("请输入旧密码");return false;}else{$("#checkOld").removeClass("checkError").html("");}},checkNewPs:function(){var psd=$("#password").val();if(psd!=""){if(psd.length<6||psd.length>16){$("#checkNew").addClass("checkError").html("密码长度只能在6~16这个字符之间");return false;}else{$("#checkNew").removeClass("").html("");return true;}}else{$("#checkNew").addClass("checkError").html("请输入新密码");return false;}},checkReNesps:function(){var psd=$("#repassword").val();if(psd!=""){if(psd===$("#password").val()){$("#checkRenew").removeClass("").html("");return true;}else{$("#checkRenew").addClass("checkError").html("两次输入的密码不相同");return false;}}else{$("#checkRenew").addClass("checkError").html("请输入确认密码");return false;}}};function formSubmit(type){if(type=="fz"){var newsText=$("textarea:visible").filter("#newstext").val();var newsTextX=$("textarea:visible").filter("#newstextx").val();}else{var newsText=$("input:visible").filter("#newstext").val();var newsTextX=$("input:visible").filter("#newstextx").val();}
var newsTitle=$("input:visible").filter("#title").val();var biaobai=$("input:visible").filter("#biaobai").val();var sayCont=$("textarea:visible").filter("#saycontent").val();var classID=$("input[name='classid']").val();var sub_classid=$("input[name='sub_classid']").val();var memberChecked=$("input[name='memberupload']");if(classID==""){alert("选择一个栏目");return false;}
if(type=='jxqm'||type=='jxwm'){if(sub_classid==''){alert("选择一个类型");return false;}}
if(type=="fz"||type=="tx"||type=="pf"||type=='jxqm'||type=='jxwm'){if(newsTitle==""){alert("写个标题吧！");$("input[name='title']").focus();return false;}}
if(biaobai==""){alert("你想对谁说!");$("input[name='biaobai']").focus();return false;}
if(sayCont==""){alert("请输入完整的内容!");$("#saycontent").focus();return false;}
if(type!="tx"){if(newsText==""||newsTextX==""){alert("请输入完整的内容");return false}}
if(memberChecked.length>0&&!memberChecked.is(":checked")){alert("请仔细阅读用户上传须知！");return false}
if(type=="tx"){if($("input[name='img[]']").length<6){alert("最少上传6张图片哦!");return false;}}
if(type=="pf"){if($("input[name='img[]']").length<=0){alert("请上传图片!");return false;}}
$("#"+type+"Form").submit();};var PUB={setCookie:function(name,value,expiredays){var exdate=new Date();exdate.setDate(exdate.getDate()+expiredays);document.cookie=name+"="+escape(value)+((expiredays==null)?"":";expires="+exdate.toGMTString());},getCookie:function(c_name){if(document.cookie.length>0)
{c_start=document.cookie.indexOf(c_name+"=");if(c_start!=-1)
{c_start=c_start+c_name.length+1;c_end=document.cookie.indexOf(";",c_start);if(c_end==-1)
{c_end=document.cookie.length;}
return unescape(document.cookie.substring(c_start,c_end));}}
return null;},Ajax:function(options){var defaults={type:"post",data:"",dataType:"json",before:function(){}};var opts=$.extend(defaults,options);var rndstr=((opts.url.indexOf("?")==-1)?"?":"&")+"_rnd="+Math.random();return $.ajax({url:opts.url+rndstr,type:opts.type,dataType:opts.dataType,data:opts.data})},tipHtml:function(clsName,x,y,ty){$(".tipImg").remove();$("body").append("<div class='tipImg "+clsName+"'></div>");$("."+clsName).css({"position":"absolute","left":x,"top":y,"z-index":700}).animate({"top":ty},150);setTimeout(function(){$("."+clsName).hide();},1000);}};var bAction={copyTxt:function(o,id){ZeroClipboard.setMoviePath("https://www.woyaogexing.com/source/js/ZeroClipboard.swf");var clip=new ZeroClipboard.Client();clip.setHandCursor(true);var glueID=$(o).attr("id");var text=$("#txt-"+id).html();text=text.replace(/<p>|<\/p>|<p class=\"fst\">/g,'');var x=$(o).offset().left-85;var y=$(o).offset().top-70;clip.setText(text);clip.glue(glueID);clip.addEventListener("complete",function(){$("#cSuccess").remove();$("body").append("<div id='cSuccess'>内容已经复制到剪切板</div>");$("#cSuccess").css({"position":"absolute","left":x,"top":y,"z-index":1000});setTimeout(function(){$("#cSuccess").fadeOut("200");},500);});clip.addEventListener("mouseover",function(){$(o).siblings().show();});},addFava:function(o,action,id,clsID){var x=$(o).offset().left-45;var y=$(o).offset().top-23;var yy=y-40;PUB.Ajax({url:'/ajax/fava/',data:'action='+action+'&id='+id+'&classid='+clsID,}).then(function(result){if(result.status==1){PUB.tipHtml("tipFava",x,y,yy);$(o).html(result.count);}else if(result.status==0){PUB.tipHtml("tipWasFava",x,y,yy);}else{$(".u-box").remove();$("#footer").after(result.msg);$(".u-box").popupFn();}});},Digg:function(o,action,id,clsID){var x=$(o).offset().left-45;var y=$(o).offset().top-23;var yy=y-40;var gKID=PUB.getCookie("voteID");if(gKID!=null){var gBool=false;var strCookie=gKID.split(",");for(i=0;i<strCookie.length;i++){if(id==strCookie[i]){gBool=true;break;}}
if(!gBool){gKID+=","+id;PUB.setCookie("voteID",gKID,1);if(action=="good"){PUB.tipHtml("tipLike",x,y,yy);}else if(action=="not"){PUB.tipHtml("tipNot",x,y,yy);}
PUB.Ajax({url:"/ajax/vote/",data:"action="+action+"&classid="+clsID+"&id="+id,}).then(function(result){$(o).html(result.num);});}else{PUB.tipHtml("tipWas",x,y,yy);return false;}}else{PUB.setCookie("voteID",id,1);if(action=="good"){PUB.tipHtml("tipLike",x,y,yy);}else if(action=="not"){PUB.tipHtml("tipNot",x,y,yy);}
PUB.Ajax({url:"/ajax/vote/",data:"action="+action+"&classid="+clsID+"&id="+id,}).then(function(result){$(o).html(result.num);});}},newDigg:function(o,action,id,clsID){var x=$(o).offset().left-45;var y=$(o).offset().top-23;var yy=y-40;var gKID=PUB.getCookie("voteID");if(gKID!=null){var gBool=false;var strCookie=gKID.split(",");for(i=0;i<strCookie.length;i++){if(id==strCookie[i]){gBool=true;break;}}
if(!gBool){gKID+=","+id;PUB.setCookie("voteID",gKID,1);if(action=="good"){PUB.tipHtml("tipLike",x,y,yy);}else if(action=="not"){PUB.tipHtml("tipNot",x,y,yy);}
PUB.Ajax({url:"/ajax/vote/",data:"action="+action+"&classid="+clsID+"&id="+id,}).then(function(result){$(o).siblings('div').html(result.num);});}else{PUB.tipHtml("tipWas",x,y,yy);return false;}}else{PUB.setCookie("voteID",id,1);if(action=="good"){PUB.tipHtml("tipLike",x,y,yy);}else if(action=="not"){PUB.tipHtml("tipNot",x,y,yy);}
PUB.Ajax({url:"/ajax/vote/",data:"action="+action+"&classid="+clsID+"&id="+id,}).then(function(result){$(o).siblings('div').html(result.num);});}},fzCopyTxt:function(o){ZeroClipboard.setMoviePath("https://www.woyaogexing.com/source/js/ZeroClipboard.swf");var clip=new ZeroClipboard.Client();clip.setHandCursor(true);var glueID=$(o).attr("id");var text=$("#"+glueID).html();var x=$(o).offset().left-15;var y=$(o).offset().top-60;clip.setText(text);clip.glue(glueID);clip.addEventListener("complete",function(){$("#cSuccess").remove();$("body").append("<div id='cSuccess'>内容已经复制到剪切板</div>");$("#cSuccess").css({"position":"absolute","left":x,"top":y,"z-index":1000});setTimeout(function(){$("#cSuccess").fadeOut("200");},500);});},converCopy:function(o){ZeroClipboard.setMoviePath("https://www.woyaogexing.com/source/js/ZeroClipboard.swf");var clip=new ZeroClipboard.Client();clip.setHandCursor(true);var text=$("#converText").val();var x=$(o).offset().left-180;var y=$(o).offset().top-100;clip.setText(text);clip.glue("changeA");clip.addEventListener("mouseover",function(client){var test=document.getElementById("converText");client.setText(test.value);});clip.addEventListener("mouseout",function(client){$(".flashBoxs").remove();});clip.addEventListener("complete",function(){$("#cSuccess").remove();$("body").append("<div id='cSuccess'>内容已经复制到剪切板</div>");$("#cSuccess").css({"position":"absolute","left":x,"top":y,"z-index":1000});setTimeout(function(){$("#cSuccess").fadeOut("200");},500);});},checkLabel:function(ck){if($(ck).attr("class")=="on"){$(ck).attr("class","");tagsID.pop();}else{if(tagsID.length>=3){alert("标签最多选择三个");return false;}else{$(ck).attr("class","on");tagsID.push($(ck).attr('data'));}}
var zt_ids="";var zt_fg="";$(".tagsList a").each(function(){if($(this).attr("class")=="on"){zt_ids=zt_ids+zt_fg+$(this).attr("data");zt_fg=",";}})
$("#zt_ids").val(zt_ids);},qmChange:function(o){var thisID=$(o).attr("data-id");$(o).addClass("on").siblings("a").removeClass("on");$(o).siblings("input").val(thisID);var ztid=$(o).attr('data-ztid');if(ztid){$('#zt_ids').val(ztid);}
tagsID=[];if(thisID==47||thisID==7||thisID==56||thisID==66){$(".qlInput").show();}else{$(".qlInput").hide();}
if(thisID==62){$(".qmwmShow").hide();$(".biaobaiShow").show();}else{$(".qmwmShow").show();$(".biaobaiShow").hide();}
PUB.Ajax({url:"/ajax/change/",data:"classid="+thisID,}).then(function(rs){$(".tagsList").html(rs.html);});},chanSelect:function(o){var id=$(o).val();PUB.Ajax({url:"/ajax/city/",data:"id="+id,}).then(function(result){$("#city").html(result.html);});},delFava:function(id,classid,infoid){if(confirm("确定要取消收藏吗？")){PUB.Ajax({url:"/ajax/delfav/",data:"id="+id+"&classid="+classid+"&infoid="+infoid,}).then(function(result){if(result.status){$("#delID"+id).remove();};});};},reGbook:function(gid,uname){$(".rebookP,input[name='gid']").remove();$("input[name='enews']").val('ReMemberGbook');$(".keySubmit input[name='Submit']").val('回复');var html='<p class="rebookP">回复@'+uname+"</p><input name='gid' type='hidden' id='gid' value='"+gid+"' />";$(".gbkArea textarea").before(html).focus().height('40px').attr({name:'retext',id:'retext'});;$(".key").hide();},addFollow:function(o){var uid=$(o).data("uid");if(uid!=''){$.post("/ajax/follow/",{uid:uid},function(result){if(result.status==0){$(".u-box").remove();$("#footer").after(result.html);$(".u-box").popupFn();}else if(result.status==1){$(o).addClass("refollow").attr({"onclick":''});}},"json");}}};(function($){$.fn.popupFn=function(){var $scrHeight=document.body.scrollHeight;var $winHeight=$(window).height();var $offsettop=$(".u-box").offset().top;$h=$winHeight-this.height();$h=$h/2-40+$offsettop;var $winWidth=$(window).width();$w=$winWidth-this.width();$w=$w/2;$(".u-block").height($scrHeight).show();this.css({"top":$h+"px","left":$w+"px"}).fadeIn(300);this.find(".hide-box").click(function(){$(".u-block").fadeOut(200);$(this).parents(".u-box").fadeOut(300);});};})(jQuery);var upload={avatar:function(timestamp,verify,uid){$('#avatar_upload').uploadify({'formData':{'timestamp':timestamp,'token':verify,'uid':uid},'swf':'/source/js/uploadify.swf','uploader':'/ajax/tx/','onUploadStart':function(file){$("#avatar_upload-button").hide();$("#avatar_upload").css({"margin-top":"-30px"});},'onFallback':function(){alert("您未安装FLASH控件，无法上传图片！请安装FLASH控件后再试。");},'removeCompleted':false,'buttonClass':'some-class','buttonText':'','fileSizeLimit':'','fileTypeDesc':'图片','fileTypeExts':'*.jpg;*.gif;*.png','width':'108','height':'30','queueSizeLimit':'30','uploadLimit':'30','multi':false,'itemTemplate':'<div class="uploading">正在上传<img src="/source/images/loading.gif" /></div>','onUploadSuccess':function(file,data,response){data=$.parseJSON(data);$(".userImgLeft img").eq(0).hide();$(".userImgLeft").append('<img src="'+data.url+'" width="150" height="150" />');$(".uploadify object").css({"width":"0","height":"0"});$("#avatar_upload-queue").html("").append("<a href='javascript:;' class='saveBtn' data-uid='"+data.uid+"' data-url='"+data.source+"'>保存</a><a href='javascript:;' class='cancelBtn'>取消</a>");}});}};var wait=60;function time(o){if(wait==0){o.addClass("js-send");o.text("重新发送");wait=60;}else{o.removeClass("js-send");var str=wait+"s";o.text(str);wait--;setTimeout(function(){time(o)},1000)}}
function shareLink(){var link={'t_qq':'http://connect.qq.com/widget/shareqq/index.html','t_qzone':'http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey','t_weibo':'http://service.weibo.com/share/share.php'}
$config={title:document.title,url:location.href}
var share=document.getElementById("wg-share")
if(share){share.onclick=function(e){if(e.target.nodeName=='A'){var target=e.target.getAttribute('data-type')
window.location.href=link[target]+'?'+serlizeArray($config).join('&')}}}}
function serlizeArray(obj){var p=obj
var s=[]
for(var i in p){s.push(i+'='+encodeURIComponent(p[i]||''))}
return s}