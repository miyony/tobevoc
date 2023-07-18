(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("voc_voc_select");
            this.set_titletext("공지사항 조회");
            this.set_dragscrolltype("none");
            if (Form == this.constructor)
            {
                this._setFormPosition(1050,770);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"STAR_DTTM\" type=\"STRING\" size=\"256\"/><Column id=\"END_DTTM\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"records\" type=\"INT\" size=\"256\"/><Column id=\"recordsOffset\" type=\"INT\" size=\"256\"/><Column id=\"page\" type=\"INT\" size=\"256\"/><Column id=\"pageCount\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsNotice", this);
            obj._setContents("<ColumnInfo><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DTTM\" type=\"STRING\" size=\"256\"/><Column id=\"HIT_CNT\" type=\"INT\" size=\"256\"/><Column id=\"NO\" type=\"INT\" size=\"256\"/><Column id=\"UPDATE_DTTM\" type=\"STRING\" size=\"256\"/><Column id=\"UPDATE_USER\" type=\"STRING\" size=\"256\"/><Column id=\"rownum\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"UPDATE_USER_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPagingInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"totalCount\" type=\"STRING\" size=\"256\"/><Column id=\"STAR_DTTM\" type=\"STRING\" size=\"256\"/><Column id=\"END_DTTM\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"GUBUN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","0","0","5","720",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("W10");
            obj.set_visible("false");
            obj.set_background("pink");
            this.addChild(obj.name, obj);

            obj = new Static("title_stat","10","10","107","18",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("공지사항");
            obj.set_cssclass("sta_WF_FrmTitle");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","8","40","1031","85",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("");
            obj.set_cssclass("sta_WF_box01");
            this.addChild(obj.name, obj);

            obj = new Static("sub_stat2","18","43","86","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("제목");
            obj.set_cssclass("sta_WF_LabelTxt");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sub_stat","18","9","86","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("작성일자");
            obj.set_cssclass("sta_WF_LabelTxt");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("search_title_edit","106","46","894","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sub_stat1","522","9","86","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("작성자");
            obj.set_cssclass("sta_WF_LabelTxt");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("calForm","106","9","294","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_text("Div00");
            obj.set_url("Work::comp_calFromTo.xfdl");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("search_user_edit","606","9","364","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sub_stat3","10","128","74","50",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("조회결과");
            obj.set_cssclass("sta_WF_SubtitleDown");
            this.addChild(obj.name, obj);

            obj = new Grid("board_grid","6","171","1034","558",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_binddataset("dsNotice");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\" band=\"left\"/><Column size=\"405\"/><Column size=\"118\"/><Column size=\"138\"/><Column size=\"118\"/><Column size=\"138\"/></Columns><Rows><Row size=\"26\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell text=\"NO\"/><Cell col=\"1\" text=\"제목\"/><Cell col=\"2\" text=\"작성자\"/><Cell col=\"3\" text=\"작성일\"/><Cell col=\"4\" text=\"수정자\"/><Cell col=\"5\" text=\"수정일\"/></Band><Band id=\"body\"><Cell text=\"bind:rownum\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:TITLE\"/><Cell col=\"2\" text=\"bind:REG_USER_NAME\"/><Cell col=\"3\" text=\"bind:REG_DTTM\" calendardateformat=\"yyyy-MM-dd\" displaytype=\"date\"/><Cell col=\"4\" text=\"bind:UPDATE_USER_NAME\"/><Cell col=\"5\" text=\"bind:UPDATE_DTTM\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("insert_btn",null,"5","65","30","5",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("등록");
            obj.set_cssclass("btn_WF_basic02");
            this.addChild(obj.name, obj);

            obj = new Button("init_btn",null,"5","65","30","151",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("초기화");
            obj.set_font("13px/normal \"Verdana\",\"Malgun Gothic\"");
            obj.set_cssclass("btn_WF_basic02");
            this.addChild(obj.name, obj);

            obj = new Button("select_btn",null,"5","65","30","78",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_basic02");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","1040","0","10","720",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("W10");
            obj.set_visible("false");
            obj.set_background("pink");
            this.addChild(obj.name, obj);

            obj = new Div("divPage","9","734","1031","37",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("Div01");
            obj.set_url("cmm::cmmPaging.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("search_name_btn","977","49","31","30",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_cssclass("btn_WF_inquiry");
            this.addChild(obj.name, obj);

            obj = new Edit("search_userId_edit","1054","55","140","20",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div00.form.calForm
            obj = new Layout("default","",0,0,this.Div00.form.calForm.form,function(p){});
            this.Div00.form.calForm.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divPage
            obj = new Layout("default","",0,0,this.divPage.form,function(p){});
            this.divPage.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1050,770,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","Work::comp_calFromTo.xfdl");
            this._addPreloadList("fdl","cmm::cmmPaging.xfdl");
        };
        
        // User Script
        this.registerScript("temp_notice_select.xfdl", function() {
        /************************************************************************************************
        * FORM 변수 선언 영역
        ************************************************************************************************/
        this.fvRecords=0; 			//목록갯수
        this.fvPage=0;	 			//페이지번호
        this.fvRecordsOffset=0;		//시작rownum
        this.fvTotalCount=0;		//전체데이터갯수
        this.fvPageCount=0; 		//실제표출페이지갯수

        this.objApp = nexacro.getApplication();

        /************************************************************************************************
        * FORM EVENT 영역(onload, onbeforeclose)
        ************************************************************************************************/
        this.temp_notice_select_onload = function(obj,e)
        {
        	this.objApp.gdsOpenBoard.deleteRow(0);
        	this.fnPageInit();
        };

        /************************************************************************************************
        * 버튼 영역
        ************************************************************************************************/
        /* 조회 버튼 */
        this.btn_save_onclick = function(obj,e)
        {
        	this.fnPageInit();

        };


        /* 등록 버튼 */
        this.btn_add_onclick = function(obj,e)
        {
        	//this.fn_openForm(obj, e);
        	this.go("TEMP::temp_notice_insert.xfdl");
        };


        /* 초기화 버튼 */
        this.btn_del_onclick = function(obj,e)
        {
        	var objForm = this.Div00.form.calForm.form;
        	objForm.fnSetFromDate("");
        	objForm.fnSetToDate("");

        	this.search_userId_edit.set_value("");
        	this.Div00.form.search_user_edit.set_value("");
        	this.Div00.form.search_title_edit.set_value("");

        };



        /************************************************************************************************
        * TRANSACTION 영역
        ************************************************************************************************/
        /* selectNotice */
        this.selectNotice = function(){
        	var objForm = this.Div00.form.calForm.form;

        	var ststDttm = objForm.fnGetFromDate();
        	var endDttm = objForm.fnGetToDate();
        	var regUser = this.search_userId_edit.text;
        	var title = this.Div00.form.search_title_edit.text;
        	var gubun = "01"; //공지사항 gubun

        	this.dsSearch.clearData();
        	var nRow = this.dsSearch.addRow();

        	this.dsSearch.setColumn(nRow, "STAR_DTTM",ststDttm);
        	this.dsSearch.setColumn(nRow, "END_DTTM",endDttm);
        	this.dsSearch.setColumn(nRow, "GUBUN",gubun);
        	this.dsSearch.setColumn(nRow, "REG_USER",regUser);
        	this.dsSearch.setColumn(nRow, "TITLE",title);
        	this.dsSearch.setColumn(nRow, "records", this.fvRecords); // select할갯수*pageNo
        	//alert(this.dsSearch.getColumn(0, "records"));
        	// 이부분init 제대로 해줘야함
        	this.dsSearch.setColumn(nRow, "recordsOffset", this.fvRecordsOffset)

        	//trace(this.dsSearch.saveXML());

        	var strSvcId    = "selectNotice";
        	var strSvcUrl   = "svcUrl::selectNotice.do";
        	var inData      = "dsSearch=dsSearch";
        	var outData     = "dsNotice=dsNotice dsPagingInfo=dsPagingInfo";
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

        	case "selectNotice":

        		this.fnPagingSetting();

        		break;


        	}
        };


        /************************************************************************************************
        * 사용자 FUNCTION 영역
        ************************************************************************************************/
        /* 게시물 클릭 했을 때 */
        this.Grid00_oncellclick = function(obj,e)
        {
        	this.fn_openForm(obj, e);
        };


        this.fn_openForm = function(obj, e)
        {
        	var objDs = obj.getBindDataset(); //bind되어있는 dataset를 가져옴

        	this.objApp.gdsOpenBoard.deleteRow(0);
        	this.objApp.gdsOpenBoard.addRow();
        	this.objApp.gdsOpenBoard.setColumn(0,"NO", objDs.getColumn(e.row, "NO"));

        	trace(this.objApp.gdsOpenBoard.saveXML());

        	this.go("TEMP::temp_notice_insert.xfdl");
        }

        /* 페이징 */
        this.fnPagingSetting = function ()
        {
        	this.fvTotalCount = nexacro.toNumber(this.dsPagingInfo.getColumn("totalCount")); //전체로우갯수
        	//create page
        	this.divPage.form.fnCreatePage("fnPagingCallback",
        									this.fvTotalCount,
        									this.fvRecords,
        									this.fvPage,
        									this.fvPageCount);
        };

        /* 페이징콜백 페이징화면에서 눌린페이지 넘겨줌 */
        this.fnPagingCallback = function(nPage, nRecordsOffset)
        {
        	this.fvPage = nPage;
        	this.fvRecordsOffset = nRecordsOffset;

        	this.selectNotice(); //조회함수호출
        };


         this.fnPageInit = function () {
         	this.fvRecords=20; //목록갯수
        	this.fvPage=0;	 								 //페이지번호
        	this.fvRecordsOffset=0;							 //시작rownum
        	this.fvPageCount = 10;

        	this.selectNotice();
         };

        this.fn_popupSearch = function(sPopId, sRtn)
        {
        	this.search_userId_edit.set_value(""); // 초기화
        	if(sPopId == "userSearch")
        	{
        		if( sRtn.length> 0 )
        		{
        			var arrRtn = sRtn.split(":");
        			this.Div00.form.search_user_edit.set_value(arrRtn[0]); // edit에 값 세팅
        			this.search_userId_edit.set_value(arrRtn[1]);
        		}
        	}
        };

        /* userPopUp */
        this.search_name_btn_onclick = function(obj,e)
        {
        	var objCF = new ChildFrame();

        	objCF.init("userSearch", 0, 0, 300, 400, null, null, "cmm::cmmUserPopup.xfdl"); // 초기값 세팅


        	objCF.set_showtitlebar(true);
        	objCF.set_openalign("center middle"); // childFrame의 위치를 지정하는 속성, 중간에 화면을 위치시킴
        	objCF.set_showstatusbar(false);
        	var objUser = { pStr1 : this.Div00.form.search_user_edit.value};

        	objCF.showModal( this.getOwnerFrame(), objUser, this, "fn_popupSearch" );
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.temp_notice_select_onload,this);
            this.title_stat.addEventHandler("onclick",this.Static01_onclick,this);
            this.board_grid.addEventHandler("oncellclick",this.Grid00_oncellclick,this);
            this.insert_btn.addEventHandler("onclick",this.btn_add_onclick,this);
            this.init_btn.addEventHandler("onclick",this.btn_del_onclick,this);
            this.select_btn.addEventHandler("onclick",this.btn_save_onclick,this);
            this.search_name_btn.addEventHandler("onclick",this.search_name_btn_onclick,this);
        };
        this.loadIncludeScript("temp_notice_select.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
