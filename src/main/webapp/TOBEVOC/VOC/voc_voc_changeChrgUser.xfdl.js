(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("voc_voc_changeChrgUser");
            this.set_titletext("VOC담당자변경");
            this.set_dragscrolltype("none");
            if (Form == this.constructor)
            {
                this._setFormPosition(1050,770);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"STAR_DTTM\" type=\"STRING\" size=\"256\"/><Column id=\"END_DTTM\" type=\"STRING\" size=\"256\"/><Column id=\"CHRG_USER\" type=\"STRING\" size=\"256\"/><Column id=\"QSTN_TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"records\" type=\"INT\" size=\"256\"/><Column id=\"recordsOffset\" type=\"INT\" size=\"256\"/><Column id=\"page\" type=\"INT\" size=\"256\"/><Column id=\"pageCount\" type=\"INT\" size=\"256\"/><Column id=\"VOC_STAT\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_CHRG_USER\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPagingInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"totalCount\" type=\"STRING\" size=\"256\"/><Column id=\"STAR_DTTM\" type=\"STRING\" size=\"256\"/><Column id=\"END_DTTM\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"GUBUN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsVoc", this);
            obj._setContents("<ColumnInfo><Column id=\"VOC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"VOC_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"QSTN_TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"QSTN_CNTN\" type=\"STRING\" size=\"256\"/><Column id=\"INDUSTRY_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"QUESTION_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PLATFORM_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"VOC_STAT\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DTTM\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER\" type=\"STRING\" size=\"256\"/><Column id=\"END_DTTM\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_DTTM\" type=\"STRING\" size=\"256\"/><Column id=\"DEVICE\" type=\"STRING\" size=\"256\"/><Column id=\"QSTN_ATTACH_YN\" type=\"STRING\" size=\"256\"/><Column id=\"REG_CUST_ID\" type=\"STRING\" size=\"256\"/><Column id=\"HIT_CNT\" type=\"INT\" size=\"256\"/><Column id=\"ANSW_TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"ANSW_CNTN\" type=\"STRING\" size=\"256\"/><Column id=\"ANSW_DTTM\" type=\"STRING\" size=\"256\"/><Column id=\"ANSW_ATTACH_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CHRG_USER\" type=\"STRING\" size=\"256\"/><Column id=\"ANSW_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"rownum\" type=\"STRING\" size=\"256\"/><Column id=\"CHRG_USER_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsVocCategory", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"UP_CODE_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ETC01\" type=\"STRING\" size=\"256\"/><Column id=\"ETC02\" type=\"STRING\" size=\"256\"/><Column id=\"ETC03\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsServiceCode", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"UP_CODE_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ETC01\" type=\"STRING\" size=\"256\"/><Column id=\"ETC02\" type=\"STRING\" size=\"256\"/><Column id=\"ETC03\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsVocStat", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","0","0","5","720",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("W10");
            obj.set_visible("false");
            obj.set_background("pink");
            this.addChild(obj.name, obj);

            obj = new Static("title_stat","10","10","147","18",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("VOC 담당자변경");
            obj.set_cssclass("sta_WF_FrmTitle");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","8","40","1031","85",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("");
            obj.set_cssclass("sta_WF_box01");
            this.addChild(obj.name, obj);

            obj = new Static("sub_stat1","18","44","86","30",null,null,null,null,null,null,this.Div00.form);
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

            obj = new Static("sub_stat2","522","9","86","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("담당자");
            obj.set_cssclass("sta_WF_LabelTxt");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("calForm","106","9","294","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_text("Div00");
            obj.set_url("Work::comp_calFromTo.xfdl");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("search_user_edit","605","9","394","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_visible("true");
            obj.set_enable("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sub_stat3","10","125","74","50",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("조회결과");
            obj.set_cssclass("sta_WF_SubtitleDown");
            this.addChild(obj.name, obj);

            obj = new Grid("voc_grid","6","171","1034","558",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_binddataset("dsVoc");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"92\"/><Column size=\"130\"/><Column size=\"326\"/><Column size=\"159\"/><Column size=\"215\"/></Columns><Rows><Row size=\"26\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell text=\"NO\"/><Cell col=\"1\" text=\"VOC유형\"/><Cell col=\"2\" text=\"VOC상태\"/><Cell col=\"3\" text=\"제목\"/><Cell col=\"4\" text=\"요청 담당자\"/><Cell col=\"5\" text=\"접수일\"/></Band><Band id=\"body\"><Cell text=\"bind:rownum\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:VOC_TYPE\" displaytype=\"combotext\" combodataset=\"dsServiceCode\" combocodecol=\"CODE_ID\" combodatacol=\"CODE_NAME\"/><Cell col=\"2\" text=\"bind:VOC_STAT\" displaytype=\"combotext\" combodataset=\"dsVocStat\" combocodecol=\"CODE\" combodatacol=\"CODE_NAME\"/><Cell col=\"3\" text=\"bind:QSTN_TITLE\"/><Cell col=\"4\" text=\"bind:CHRG_USER\"/><Cell col=\"5\" text=\"bind:REG_DTTM\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("init_btn",null,"5","65","30","81",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("초기화");
            obj.set_font("13px/normal \"Verdana\",\"Malgun Gothic\"");
            obj.set_cssclass("btn_WF_basic02");
            this.addChild(obj.name, obj);

            obj = new Button("select_btn",null,"5","65","30","8",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_basic02");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","1040","0","10","720",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("W10");
            obj.set_visible("false");
            obj.set_background("pink");
            this.addChild(obj.name, obj);

            obj = new Div("divPage","9","734","1031","37",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("Div01");
            obj.set_url("cmm::cmmPaging.xfdl");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","1060","0","140","20",null,null,null,null,null,null,this);
            obj.set_taborder("9");
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
        this.registerScript("voc_voc_changeChrgUser.xfdl", function() {
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
        this.voc_voc_changeChrgUser_onload = function(obj,e){
        	//this.objApp.gdsOpenBoard.deleteRow(0);

        	// login한 user앞으로 와있는 담당자변경만 보여줌
        	var userId = this.objApp.gdsUserInfo.getColumn(0, "userId");
        	var userName = this.objApp.gdsUserInfo.getColumn(0, "userName");

        	//alert(userId+":"+userName);
        	this.Div00.form.search_user_edit.set_value(userName);
        	this.Edit00.set_value(userId)

        	this.fnPageInit(2);

        };

        /************************************************************************************************
        * 버튼 영역
        ************************************************************************************************/
        /* 조회 버튼 */
        this.select_btn_onclick = function(obj,e){
        	this.fnPageInit(2); // vocStat 2: 담당자변경

        };


        /* 초기화 버튼 */
        this.init_btn_onclick = function(obj,e)
        {
        	var objForm = this.Div00.form.calForm.form;
        	objForm.fnSetFromDate("");
        	objForm.fnSetToDate("");

        	this.Div00.form.search_title_edit.set_value("");

        	// login한 user앞으로 와있는 담당자변경만 보여줌
        	var userId = this.objApp.gdsUserInfo.getColumn(0, "userId");
        	var userName = this.objApp.gdsUserInfo.getColumn(0, "userName");

        	this.Div00.form.search_user_edit.set_value(userName);
        	this.Edit00.set_value(userId);

        };

        /************************************************************************************************
        * TRANSACTION 영역
        ************************************************************************************************/
        /* selectVoc */
        this.selectVoc = function(vocStat){
        	var objForm = this.Div00.form.calForm.form;

        	var ststDttm = objForm.fnGetFromDate();
        	var endDttm = objForm.fnGetToDate();
        	var chrgUser = this.Edit00.text;
        	var title = this.Div00.form.search_title_edit.text;

        	this.dsSearch.clearData();
        	var nRow = this.dsSearch.addRow();

        	this.dsSearch.setColumn(nRow, "STAR_DTTM",ststDttm);
        	this.dsSearch.setColumn(nRow, "END_DTTM",endDttm);
        	this.dsSearch.setColumn(nRow, "REQ_CHRG_USER",chrgUser);
        	this.dsSearch.setColumn(nRow, "QSTN_TITLE",title);
        	this.dsSearch.setColumn(nRow, "records", this.fvRecords); // select할갯수*pageNo
        	this.dsSearch.setColumn(nRow, "recordsOffset", this.fvRecordsOffset)
        	this.dsSearch.setColumn(nRow, "VOC_STAT", vocStat);

        	//trace(this.dsSearch.saveXML());

        	var strSvcId    = "selectVoc";
        	var strSvcUrl   = "svcUrl::selectVoc.do";
        	var inData      = "dsSearch=dsSearch";
        	var outData     = "dsVoc=dsVoc dsPagingInfo=dsPagingInfo dsVocCategory=dsVocCategory dsVocStat=dsVocStat";
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

        	case "selectVoc":

        		this.fnPagingSetting();

        		break;



        	}
        };


        /************************************************************************************************
        * 사용자 FUNCTION 영역
        ************************************************************************************************/

        /* voc 클릭 했을 때 */
        this.voc_grid_oncellclick = function(obj,e)
        {
        	this.fn_openForm(obj, e);
        };


        this.fn_openForm = function(obj, e){
        	var objDs = obj.getBindDataset(); //bind되어있는 dataset를 가져옴
        	var objCF = new ChildFrame();

        	objCF.init("custSearch", 0, 0, 300, 400, null, null, "cmm::cmmChangeChrgUserDetail.xfdl"); // 초기값 세팅

        	objCF.set_showtitlebar(true);
        	objCF.set_openalign("center middle"); // childFrame의 위치를 지정하는 속성, 중간에 화면을 위치시킴
        	objCF.set_showstatusbar(false);
        	var objCust = { vocId : objDs.getColumn(e.row, "VOC_ID")
        				, chrgUserId : objDs.getColumn(e.row, "CHRG_USER_ID")};

        	objCF.showModal( this.getOwnerFrame(), objCust, this, "fn_popup" );
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

        	this.selectVoc(); //조회함수호출
        };


         this.fnPageInit = function (vocStat) {
         	this.fvRecords=20; //목록갯수
        	this.fvPage=0;	 								 //페이지번호
        	this.fvRecordsOffset=0;							 //시작rownum
        	this.fvPageCount = 10;

        	this.selectVoc(vocStat);
         };




        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.voc_voc_changeChrgUser_onload,this);
            this.Div00.form.search_user_edit.addEventHandler("onchanged",this.Div00_search_user_edit_onchanged,this);
            this.voc_grid.addEventHandler("oncellclick",this.voc_grid_oncellclick,this);
            this.init_btn.addEventHandler("onclick",this.init_btn_onclick,this);
            this.select_btn.addEventHandler("onclick",this.select_btn_onclick,this);
        };
        this.loadIncludeScript("voc_voc_changeChrgUser.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
