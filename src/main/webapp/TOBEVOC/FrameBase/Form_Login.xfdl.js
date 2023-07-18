(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Login");
            this.set_titletext("New Form");
            this.set_scrolltype("none");
            this.set_scrollbartype("none none");
            this.set_background("#f1f1f1");
            if (Form == this.constructor)
            {
                this._setFormPosition(290,293);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsUser", this);
            obj._setContents("<ColumnInfo><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PASSWORD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div00","0","0","320","350",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","4","210","282","57",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("로그인");
            obj.set_cssclass("btn_WF_basic02");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_id","4","82","282","50",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_displaynulltext("아이디를 입력하세요");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_pw","4","146","282","50",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_displaynulltext("비밀번호를 입력하세요");
            obj.set_password("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta01","6","5","280","79",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("TOBEVOC");
            obj.set_font("bold 45px/normal \"Arial Black\"");
            obj.set_textAlign("center");
            obj.set_color("#6836f1");
            this.Div00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",290,293,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","Div00.form.edt_id","value","dsUser","USER_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","Div00.form.edt_pw","value","dsUser","PASSWORD");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_Login.xfdl", function() {

        this.objApp = nexacro.getApplication();

        this.Button00_onclick = function(obj,e)
        {
        	var sId = this.Div00.form.edt_id.value;
        	var sPw = this.Div00.form.edt_pw.value;

        	if(sId == null || sId.length == 0 ){
        	 	this.alert("아이디를 입력해주세요");
        		this.Div00.form.edt_id.setFocus();
        		return;
        	}

        	this.fnLogin();	//서버와통신

        	/* 아이디 저장
        	if(this.Div00.form.chk_idSave.value == true){ // id check가 true면 id를 저장
        	nexacro.setPrivateProfile("USER_ID", sId) // key, value
        	}*/

        	/*
        	var sMyMenu = nexacro.getPrivateProfile("MY_MENU");
        	this.objApp.gds_myMenu.loadXML(sMyMenu); // xml에 있는 data를 받아서 dataset에 저장
        	*/

        };

        /* form위치 가운데로 */
        this.Form_Login_onsize = function(obj,e)
        {
        	var nLeft = (this.objApp.mainframe.width/2) - (this.Div00.width/2);
        	var nTop = (this.objApp.mainframe.height/2) - (this.Div00.height/2);

        	this.Div00.set_left(nLeft);
        	this.Div00.set_top(nTop);
        };


        /* login form 로딩 시 */
        this.Form_Login_onload = function(obj,e)
        {
        	this.Form_Login_onsize();
        	//사용자 id가 저장이 되어있는지 check
        	/*var sUserId = nexacro.getPrivateProfile("USER_ID");

        	if(sUserId != null && sUserId.length > 0){
        	this.Div00.form.edt_id.set_value(sUserId);
        	this.Div00.form.chk_idSave.set_value(true);
        	}*/
        };

        /* 로그인 */
        this.fnLogin = function()
        {
        	var strSvcId    = "login";
        	var strSvcUrl   = "svcUrl::loginVoc.do";
        	var inData      = "dsUser=dsUser";
        	var outData     = "dsList=dsList";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.transaction(strSvcId
        		,strSvcUrl
        		,inData
        		,outData
        		,strArg
        		,callBackFnc);
        };

        /* 콜백 */
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	switch(svcID) {

        	case "login":
        		if (this.dsList.rowcount == 1 ) {
        			// 사용자 정보 글로벌데이타셋에 저장
        			this.objApp.gdsUserInfo.deleteRow(0);
        			this.objApp.gdsUserInfo.addRow();
        			this.objApp.gdsUserInfo.setColumn(0,"userId",    this.dsList.getColumn(0, "USER_ID"));
        			this.objApp.gdsUserInfo.setColumn(0,"userName",  this.dsList.getColumn(0, "NAME"));

        			//alert(this.objApp.gdsUserInfo.saveXML());

        			// 프레임 변경
        			this.fnLoginAfter();
        			return;
        		}

        		// 해당하는 사용자 정보가 없습니다.
        		alert("해당하는 사용자 정보가 없습니다.");
        		break;


        	}
        };


        this.fnLoginAfter = function(){
        	// Grid 개인화 정보 load
        	/* 그리그 개인화 할지 안할지 모르겟음
        	var objGds = this.objApp.gdsGridPersonal;
        	var sGdsGridXML = nexacro.getPrivateProfile("gdsGridPersonal");
        	objGds.loadXML(sGdsGridXML);
        	*/
        	// 서버와 SSO 체크로직을 위해 Cookies에 값 설정 예제
        	//nexacro.setCookieVariable("jsessionidTest","AAAAA");
        	//nexacro.setHTTPHeaderVariable("headerTest","BBBBB");

        	//alert("로그인 완료");
        	//this.objApp.gvLogIn = "Y";

        	this.objApp.mainframe.VFrameSet.set_separatesize("0,40,*,30");
        	this.objApp.mainframe.VFrameSet.HFrameSet.VFrameSet1.set_separatesize("35,0,*");

        	//gloval variable 세팅
        	nexacro.setEnvironmentVariable("evUserId", this.objApp.gdsUserInfo.getColumn(0,"userId"));
        	nexacro.setEnvironmentVariable("evUserNm", this.objApp.gdsUserInfo.getColumn(0,"userName"));

        	// cookie로 userId를 서버단으로 전송해서 권한검사를 계속함
        	nexacro.setCookieVariable("userId", this.objApp.gdsUserInfo.getColumn(0,"userId"));
        	//alert(nexacro.getCookieVariable("userId"));

        	// top => 환영합니다. user님
        	this.objApp.mainframe.VFrameSet.frameTop.form.fnLoad();

        	// left 메뉴 => menu tree select
        	this.objApp.mainframe.VFrameSet.HFrameSet.frameLeft.form.fnMenuLoad(this.objApp.gdsUserInfo.getColumn(0,"userId"));

        	// bottom => 공지사항 띄우기
        	this.objApp.mainframe.VFrameSet.frameBottom.form.selectBottomNotice();

        	// 정기업무 => 팝업 유무 확인 후 띄우기
        	this.transaction("selectRegularJob", "svcUrl::selectRegularSch.do","","gdsRegularJob=ds_sch_date","complate=Y","fn_callback");

        };

        this.fn_callback = function (strID, strErrCode, strErrMsg){
        	if (strID == "selectRegularJob"){
        		this.objApp.gdsRegularJob.filter("POPUP_NOTI_YN == 'Y'");

        		//var complate = this.ds_sch_date.getColumn("COMPLATE_YN");
        		var num = this.objApp.gdsRegularJob.getRowCount();
        		if(num > 0){
        			// 팝업띄우기
        			this.objApp.popupOpen(this.getOwnerFrame(), "정기업무 확인", "SCH_ALARM", {ds_sch_date:this.objApp.gdsRegularJob}, "cmm::cmmScheduleAlarm.xfdl", "fn_popCallBack", 400, 250, true, this);
        		}
        		this.objApp.gdsRegularJob.filter("")

        		return true;
        	}
        }


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_Login_onload,this);
            this.Div00.addEventHandler("onsize",this.Form_Login_onsize,this);
            this.Div00.form.Button00.addEventHandler("onclick",this.Button00_onclick,this);
        };
        this.loadIncludeScript("Form_Login.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
