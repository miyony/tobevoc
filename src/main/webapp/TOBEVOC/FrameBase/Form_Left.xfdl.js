(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Left");
            this.set_titletext("Form_Left");
            this.set_scrollbartype("none none");
            if (Form == this.constructor)
            {
                this._setFormPosition(225,940);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"MENU_NO\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"AUTH\" type=\"STRING\" size=\"256\"/><Column id=\"etc1\" type=\"STRING\" size=\"256\"/><Column id=\"etc2\" type=\"STRING\" size=\"256\"/><Column id=\"etc3\" type=\"STRING\" size=\"256\"/><Column id=\"UP_MENU\" type=\"STRING\" size=\"256\"/><Column id=\"LEVEL\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_URL\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("Grid00","0","36",null,null,"0","424",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("dsMenu");
            obj.set_treeusecheckbox("false");
            obj.set_treeinitstatus("expand,all");
            obj.set_enable("true");
            obj.set_treeuseline("false");
            obj.set_cssclass("grd_LF_Menu");
            obj.set_scrolltype("none");
            obj.set_scrollbartype("none none");
            obj.set_font("14px/normal \"Cafe24SsurroundAir\",\"Cafe24SsurroundAir\"");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"226\"/></Columns><Rows><Row size=\"30\"/></Rows><Band id=\"body\"><Cell text=\"bind:MENU_NAME\" displaytype=\"treeitemcontrol\" edittype=\"tree\" tooltiptext=\"bind:MENU_NAME\" treelevel=\"bind:LEVEL\" cssclass=\"expr:level==&apos;1&apos;? &quot;lev0&quot;:level==&apos;2&apos;? &quot;lev1&quot;:&quot;&quot;\" treestartlevel=\"0\" font=\"14px/normal &quot;Cafe24SsurroundAir&quot;,&quot;Cafe24SsurroundAir&quot;\"/></Band></Format><Format id=\"mymenu\"><Columns><Column size=\"205\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell text=\"bind:MENU_NAME\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static_Day00","0","Grid00:0","225","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("✨REGULAR WORK");
            obj.set_cssclass("sta_WF_widgetBox01");
            obj.set_font("14px/normal \"Arial Black\"");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00_00","0","Static_Day00:0","225","138",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("ds_sch_date");
            obj.set_useselcolor("false");
            obj.set_scrollbartype("none auto");
            obj.set_autofittype("col");
            obj.set_border("0px none, 1px solid #c4c4c4, 0px none, 0px none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"139\"/><Column size=\"28\"/></Columns><Rows><Row size=\"30\"/></Rows><Band id=\"body\"><Cell text=\"bind:JOB_NAME\"/><Cell col=\"1\" text=\"bind:COMPLATE_YN\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" checkboxtruevalue=\"Y\" checkboxfalsevalue=\"N\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static_Day00_00","0","0","225","36",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("✨MENU");
            obj.set_cssclass("sta_WF_widgetBox01");
            obj.set_textAlign("left");
            obj.set_font("14px/normal \"Arial Black\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static_Day00_01","0","Grid00_00:000","225","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("✨MEMO");
            obj.set_cssclass("sta_WF_widgetBox01");
            obj.set_font("14px/normal \"Arial Black\"");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","0","Static_Day00_01:0","225",null,null,"0",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_border("0px none, 1px solid #c4c4c4, 0px none, 0px none");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",225,940,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_Left.xfdl", function() {

        this.objApp = this.gfnGetApplication();

        this.Form_Left_onload = function(obj,e)
        {
        	// left 메뉴 로드 trasaction
        	var userId = this.objApp.gdsUserInfo.getColumn(0, "userId");

        	this.fnMenuLoad(userId);

        };



        // common.js처럼 사용하고싶지만 지금은 일단 여기에 모아둠
        this.fnMenuLoad = function(userId){

        	var menuName = "";
        	var strSvcId    = "selectMenu";
        	var strSvcUrl   = "svcUrl::selectMenu.do";
        	var inData      = "";
        	var outData     = "dsMenu=dsMenu";
        	var strArg      = "userId="+userId;
        	var callBackFnc = "fnCallback";

        	this.transaction(strSvcId
        		,strSvcUrl
        		,inData
        		,outData
        		,strArg
        		,callBackFnc);
        }

        /* 콜백 */
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	switch(svcID) {


        	case "selectMenu":

        		this.objApp.gdsMenu.copyData(this.dsMenu);
        		//trace(this.dsMenu.saveXML());
        		//this.dsMenu.copyData(this.objApp.gdsMenu);
        		return;

        	}
        };


        /* 그리드가 클릭 됐을 때 */
        this.Grid00_oncellclick = function(obj,e)
        {
        	// grid에 cell을 클릭 했을 때 화면 열림
        	this.fn_openForm(obj, e);
        };


        this.fn_openForm = function(obj, e)
        {
        	var objDs = obj.getBindDataset(); //bind되어있는 dataset를 가져옴

        	var sMenuID = objDs.getColumn(e.row, "MENU_ID");
        	var sMenuName = objDs.getColumn(e.row, "MENU_NAME");
        	var sFromURL = objDs.getColumn(e.row, "MENU_URL");

        	// Grid 가 트리 형식일 때 Root Row 에서 특정 Row 까지 각 Row 의 text 속성값을 반환
        	var sTreePath = obj.getTreePath(e.row);
        	sTreePath = nexacro.replaceAll(sTreePath, ".", ">");

        	if(sFromURL.length <= 0 ) return;

        	var objApp = nexacro.getApplication();
        	var WorkFrame = objApp.mainframe.VFrameSet.HFrameSet.VFrameSet1.framesetWork;
        	var sFormID = "FORM_"+sMenuID; //childFrame ID 생성

        	// 이미 열어본 페이지인지 확인하여 열려있는 페이지면 그곳으로 focus
        	var arrObj = WorkFrame.all
        	for( var i=0; i < arrObj.length; i++ ){

        		if(arrObj[i].name == sFormID){

        			arrObj[i].setFocus();
        			return;
        		}
        	}
        	var nWidth = WorkFrame.getOffsetWidth(); // size 알아오는것
        	var nHeight = WorkFrame.getOffsetHeight();

        	var objCF = new ChildFrame(sFormID, 0, 0, nWidth, nHeight); // childFrame 생성
        	WorkFrame.addChild(sFormID, objCF);

        	objCF.set_resizable(true);
        	objCF.set_openstatus("maximize");
        	objCF.set_showtitlebar(false);
        	objCF.set_formurl("FrameBase::Form_Work.xfdl");

        	var objParam = { FORM_ID : sFormID
        					, MENU_ID : sMenuID
        					, MENU_NAME : sMenuName
        					, FORM_URL : sFromURL
        					, TREE_PATH : sTreePath };
        	objCF.param = objParam;// 변수 설정하여 파라미터 전송

        	objCF.show();

        	// 열린 화면에 대한 정보를 gds_openForm dataset에 저장
        	var nRow = objApp.gdsOpenForm.addRow();

        	objApp.gdsOpenForm.setColumn(nRow, "FORM_ID", sFormID);
        	objApp.gdsOpenForm.setColumn(nRow, "MENU_ID", sMenuID);
        	objApp.gdsOpenForm.setColumn(nRow, "MENU_NAME", sMenuName);
        	objApp.gdsOpenForm.setColumn(nRow, "MENU_URL", sFromURL);

        	// form_MDI에 있는 함수를 호출하여 tab을 쌓음
        	objApp.mainframe.VFrameSet.HFrameSet.VFrameSet1.frameNavi.form.fn_addTab(objParam);


        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_Left_onload,this);
            this.Grid00.addEventHandler("oncellclick",this.Grid00_oncellclick,this);
            this.Grid00_00.addEventHandler("oncellclick",this.Grid00_oncellclick,this);
        };
        this.loadIncludeScript("Form_Left.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
