<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<script language="javascript">
	// window.NEXACROHTML 객체 초기화
	if (! window.NEXACROHTML) 
	{
		window.NEXACROHTML = {};
	}
	
	// Nexacro 부모창 객체 생성(가져오기)
	var oParent = window.NEXACROWEBBROWSER;
	
  // opener관련 오류가 발생하는 경우 아래 주석을 해지하고, 사용자의 도메인정보를 입력합니다. ("팝업API 호출 소스"도 동일하게 적용시켜야 합니다.)
  //document.domain = "abc.go.kr";

  
  function goPopup(){
  	// 호출된 페이지(jusopopup.jsp)에서 실제 주소검색URL(http://www.juso.go.kr/addrlink/addrLinkUrl.do)를 호출하게 됩니다.
    var pop = window.open("./jusoPopup.jsp","pop","width=570,height=420, scrollbars=yes, resizable=yes"); 
      
  	// 모바일 웹인 경우, 호출된 페이지(jusopopup.jsp)에서 실제 주소검색URL(http://www.juso.go.kr/addrlink/addrMobileLinkUrl.do)를 호출하게 됩니다.
    //var pop = window.open("/popup/jusoPopup.jsp","pop","scrollbars=yes, resizable=yes"); 
  }

  // 팝업호출
  goPopup();
  
  /** API 서비스 제공항목 확대 (2017.02) **/
  function jusoCallBack(roadFullAddr,roadAddrPart1,addrDetail,roadAddrPart2,engAddr, jibunAddr, zipNo, admCd, rnMgtSn, bdMgtSn
  						, detBdNmList, bdNm, bdKdcd, siNm, sggNm, emdNm, liNm, rn, udrtYn, buldMnnm, buldSlno, mtYn, lnbrMnnm, lnbrSlno, emdNo){
  	// 팝업페이지에서 주소입력한 정보를 받아서, 현 페이지에 정보를 등록합니다.
  	
		var sJusoInfo = "OK!!!:::" + roadAddrPart1 + ":::" + roadAddrPart2 + ":::" + addrDetail + ":::" + zipNo;
		callNexacro(sJusoInfo);
		
  	document.form.roadAddrPart1.value = roadAddrPart1;
  	document.form.roadAddrPart2.value = roadAddrPart2;
  	document.form.addrDetail.value = addrDetail;
  	document.form.zipNo.value = zipNo;
  }
  
  // Nexacro객체-도로명주소 호출 화면에 있는 onusernotify 이벤트 함수(=도로명주소 정보들 리턴 함수)
  function callNexacro(userdata)
  {
    var wb = window.NEXACROWEBBROWSER;
  
    if ( wb )	// 윈도우 html5, 안드로이드 html5, iOS html5, iOS 런타임
    {
      //alert(">>>>1");
    	// HTML
    	wb.on_fire_onusernotify(wb, userdata);
    }
    else if (typeof nexacro == "undefined")	//windows runtime
    {
      //alert(">>>>2");
    	// Runtime
    	window.document.title = userdata;
    }
    else if (nexacro) 					 //mobile runtime - Android
    {	
      //안드로이드 런타임
    	nexacro.fireUserNotify(userdata);	
    }
  }	
	
    // 종료 확인창을 출력하지않고 종료.
    function pageClose()
    {
    		window.open("change","_self").close();
    }  
</script>
<body>
<form name="form" id="form" method="post">
	<table >
			<colgroup>
				<col style="width:20%"><col>
			</colgroup>
			<tbody>
				<tr>
					<th>우편번호</th>
					<td>
					    <input type="hidden" id="confmKey" name="confmKey" value=""  >
						<input type="text" id="zipNo" name="zipNo" readonly style="width:100px">
						<input type="button"  value="주소검색" onclick="goPopup();">
					</td>
				</tr>
				<tr>
					<th><label>도로명주소</label></th>
					<td><input type="text" id="roadAddrPart1" style="width:85%"></td>
				</tr>
				<tr>
					<th>상세주소</th>
						<td>
							<input type="text" id="addrDetail" style="width:40%" value="">
							<input type="text" id="roadAddrPart2"  style="width:40%" value="">
						</td>
				</tr>
			</tbody>
		</table>
</form>
</body>
</html>