(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("temp_holiday_crud");
            this.set_titletext("휴가 관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1050,770);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsHoliday", this);
            obj._setContents("<ColumnInfo><Column id=\"NO\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"HOLIDAY\" type=\"STRING\" size=\"256\"/><Column id=\"MENO\" type=\"STRING\" size=\"256\"/><Column id=\"COLOR\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHolidaySave", this);
            obj._setContents("<ColumnInfo><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"HOLIDAY\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","0","0","5","720",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("W10");
            obj.set_visible("false");
            obj.set_background("pink");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","1040","0","10","720",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("W10");
            obj.set_visible("false");
            obj.set_background("pink");
            this.addChild(obj.name, obj);

            obj = new Static("title_stat","10","10","150","19",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("휴가 관리");
            obj.set_cssclass("sta_WF_FrmTitle");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","8","40","1031","50",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("");
            obj.set_cssclass("sta_WF_box01");
            this.addChild(obj.name, obj);

            obj = new Button("search_btn","714","10","31","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_inquiry");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sub_stat","197","9","73","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_LabelTxt");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("select_btn",null,"5","65","30","5",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("검색");
            obj.set_cssclass("btn_WF_basic02");
            this.addChild(obj.name, obj);

            obj = new Calendar("holiday_calendar","22","130","998","620",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_type("monthonly");
            obj.set_innerdataset("dsHoliday");
            obj.set_datecolumn("HOLIDAY");
            obj.set_backgroundcolumn("COLOR");
            this.addChild(obj.name, obj);

            obj = new Edit("search_edit","275","50","447","30",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            this.addChild(obj.name, obj);

            obj = new Static("guide_stat","25","92","607","50",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("");
            obj.set_font("12px/normal \"Verdana\",\"Malgun Gothic\"");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1050,770,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","search_edit","value","dsSearch","POS_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("temp_holiday_crud.xfdl", function() {
        /************************************************************************************************
        * FORM 변수 선언 영역
        ************************************************************************************************/
        this.objApp = nexacro.getApplication();


        /************************************************************************************************
        * FORM EVENT 영역(onload, onbeforeclose)
        ************************************************************************************************/
        this.temp_holiday_crud_onload = function(obj,e)
        {
        	this.fnHolidayLoad();
        };

        /************************************************************************************************
        * 버튼 영역
        ************************************************************************************************/

        this.select_btn_onclick = function(obj,e)
        {
        	this.selectHoliday2();
        };


        /************************************************************************************************
        * TRANSACTION 영역
        ************************************************************************************************/

        /* fnHolidayLoad */
        this.fnHolidayLoad = function(){

        	var userName = this.objApp.gdsUserInfo.getColumn(0,"userName");

        	var strSvcId    = "selectHoliday";
        	var strSvcUrl   = "svcUrl::selectHoliday.do";
        	var inData      = "";
        	var outData     = "dsHoliday=dsHoliday";
        	var strArg      = "userName="+userName;
        	var callBackFnc = "fnCallback";

        	this.transaction(strSvcId
        		,strSvcUrl
        		,inData
        		,outData
        		,strArg
        		,callBackFnc);
        }

        /* selectHoliday2 */
        this.selectHoliday2= function(){
        	var userName = this.search_edit.value;

        	var strSvcId    = "selectHoliday2";
        	var strSvcUrl   = "svcUrl::selectHoliday.do";
        	var inData      = "";
        	var outData     = "dsHoliday=dsHoliday";
        	var strArg      = "userName="+userName;
        	var callBackFnc = "fnCallback";

        	this.transaction(strSvcId
        		,strSvcUrl
        		,inData
        		,outData
        		,strArg
        		,callBackFnc);

        }

        /* fnHolidayValidation */
        this.fnHolidayValidation = function(){ // 일정이 중복 등록 되지 않도록 검사

        	var strSvcId    = "validationHoliday";
        	var strSvcUrl   = "svcUrl::validationHoliday.do";
        	var inData      = "dsHolidaySave=dsHolidaySave";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.transaction(strSvcId
        		,strSvcUrl
        		,inData
        		,outData
        		,strArg
        		,callBackFnc);
        }


        /* fnHolidaySave */
        this.fnHolidaySave = function(){

        	var strSvcId    = "saveHoliday";
        	var strSvcUrl   = "svcUrl::saveHoliday.do";
        	var inData      = "dsHolidaySave=dsHolidaySave";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.transaction(strSvcId
        		,strSvcUrl
        		,inData
        		,outData
        		,strArg
        		,callBackFnc);
        }

        /* fnHolidaydelete */
        this.fnHolidaydelete = function(){

        	var strSvcId    = "deleteHoliday";
        	var strSvcUrl   = "svcUrl::deleteHoliday.do";
        	var inData      = "dsHolidaySave=dsHolidaySave";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.transaction(strSvcId
        		,strSvcUrl
        		,inData
        		,outData
        		,strArg
        		,callBackFnc);
        }


        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	switch(svcID) {

        	case "selectHoliday":
        		for(var i=0; i<this.dsHoliday.rowcount; i++){
        			this.dsHoliday.addColumn("COLOR", "STRING");
        			this.dsHoliday.setColumn(i, "COLOR", "#D1B2FF");
        		}

        		this.guideStatic(this.objApp.gdsUserInfo.getColumn(0,"userName"));
        		break;

        	case "deleteHoliday":

        		alert("선택한 일정이 삭제되었습니다");
        		this.fnHolidayLoad(); // 캘린더 재로드

        		break;

        	case "saveHoliday":
        		this.fnHolidayLoad(); // 캘린더 재로드

        		break;

        	case "validationHoliday":
        		if(errorCode == -1){
        			if(this.confirm(errorMsg)){
        				this.fnHolidaydelete();
        			}
        		}else{
        			if(this.confirm("선택한 일정을 등록하시겠습니까?")){
        				this.fnHolidaySave();
        			}
        		}
        		break;

        	case "selectHoliday2":
        		var userId = this.objApp.gdsUserInfo.getColumn(0,"userId");
        		var searchId = this.dsHoliday.getColumn(0,"USER_ID");

        		//alert("userId: " +userId+", searchId: "+ searchId);

        		for(var i=0; i<this.dsHoliday.rowcount; i++){
        			this.dsHoliday.addColumn("COLOR", "STRING");
        			this.dsHoliday.setColumn(i, "COLOR", "#D1B2FF");
        		}

        		//alert("userId: "+userId+", searchId: "+searchId);
        		if( searchId == userId ){
        			this.holiday_calendar.set_enableevent(true);
        		}else{
        			//alert("달력 읽기전용");
        			this.holiday_calendar.set_enableevent(false);
        		}
        		this.guideStatic(this.search_edit.text);

        		break;
        	}


        };


        /************************************************************************************************
        * 사용자 FUNCTION 영역
        ************************************************************************************************/
        this.Calendar00_ondayclick = function(obj,e)
        {

        	var selectDay = e.date;
        	var userId = this.objApp.gdsUserInfo.getColumn(0,"userId");

        	this.dsHolidaySave.setColumn(0, "USER_ID", userId);
        	this.dsHolidaySave.setColumn(0, "HOLIDAY", selectDay);

        	//일정이 중복 등록 되지 않도록 검사
        	this.fnHolidayValidation();

        };


        this.guideStatic = function(name){

        	this.guide_stat.set_text(name+"님의 휴가일정 입니다. 본인 일정만 등록 가능하고, 타인의 일정은 확인만 가능합니다.");

        }

        /* 사원찾기 popup */
        this.search_btn_onclick = function(obj,e)
        {

        	var objCF = new ChildFrame();

        	objCF.init("userSearch", 0, 0, 300, 400, null, null, "cmm::cmmUserPopup.xfdl"); // 초기값 세팅


        	objCF.set_showtitlebar(true);
        	objCF.set_openalign("center middle"); // childFrame의 위치를 지정하는 속성, 중간에 화면을 위치시킴
        	objCF.set_showstatusbar(false);
        	var objUser = { pStr1 : this.search_edit.value};

        	objCF.showModal( this.getOwnerFrame(), objUser, this, "fn_popupSearch" );

        };

        this.fn_popupSearch = function(sPopId, sRtn)
        {
        	if(sPopId == "userSearch")
        	{
        		if( sRtn.length> 0 ){
        			var arrRtn = sRtn.split(":");
        			this.search_edit.set_value(arrRtn[0]); // edit에 값 세팅
        		}
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.temp_holiday_crud_onload,this);
            this.title_stat.addEventHandler("onclick",this.Static01_onclick,this);
            this.Div00.form.search_btn.addEventHandler("onclick",this.search_btn_onclick,this);
            this.select_btn.addEventHandler("onclick",this.select_btn_onclick,this);
            this.holiday_calendar.addEventHandler("ondayclick",this.Calendar00_ondayclick,this);
        };
        this.loadIncludeScript("temp_holiday_crud.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
