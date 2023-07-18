(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("temp_aut_crud");
            this.set_titletext("권한 관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1050,770);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"AUTH\" type=\"STRING\" size=\"256\"/><Column id=\"etc1\" type=\"STRING\" size=\"256\"/><Column id=\"etc2\" type=\"STRING\" size=\"256\"/><Column id=\"etc3\" type=\"STRING\" size=\"256\"/><Column id=\"UP_MENU\" type=\"STRING\" size=\"256\"/><Column id=\"LEVEL\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_URL\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUser", this);
            obj._setContents("<ColumnInfo><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"NO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDept", this);
            obj._setContents("<ColumnInfo><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"UP_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"LEVEL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
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
            obj.set_text("권한 관리");
            obj.set_cssclass("sta_WF_FrmTitle");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"5","65","30","6",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("등록");
            obj.set_cssclass("btn_WF_basic02");
            this.addChild(obj.name, obj);

            obj = new Button("del_btn",null,"5","65","30","79",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("삭제");
            obj.set_font("13px/normal \"Verdana\",\"Malgun Gothic\"");
            obj.set_cssclass("btn_WF_basic02");
            this.addChild(obj.name, obj);

            obj = new Static("sub_stat14","526","28","89","50",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("메뉴정보");
            obj.set_cssclass("sta_WF_SubtitleDown");
            this.addChild(obj.name, obj);

            obj = new Static("sub_stat4","523","157","120","42",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.addChild(obj.name, obj);

            obj = new Static("sub_stat2","523","75","120","42",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("메뉴 ID");
            obj.set_cssclass("sta_WF_DetailEssential");
            this.addChild(obj.name, obj);

            obj = new Static("sub_stat10","642","157","398","42",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("");
            obj.set_cssclass("sta_WF_DetailArea");
            this.addChild(obj.name, obj);

            obj = new Radio("useYn_radio","650","163","260","30",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_rowcount("1");
            obj.set_enable("false");
            var useYn_radio_innerdataset = new nexacro.NormalDataset("useYn_radio_innerdataset", obj);
            useYn_radio_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">미사용</Col></Row></Rows>");
            obj.set_innerdataset(useYn_radio_innerdataset);
            obj.set_text("");
            obj.set_value("");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("sub_stat3","523","116","120","42",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("메뉴명");
            obj.set_cssclass("sta_WF_DetailEssential");
            this.addChild(obj.name, obj);

            obj = new Static("sub_stat8","642","75","398","42",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("");
            obj.set_cssclass("sta_WF_DetailArea");
            this.addChild(obj.name, obj);

            obj = new Static("sub_stat9","642","116","398","42",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("");
            obj.set_cssclass("sta_WF_DetailArea");
            this.addChild(obj.name, obj);

            obj = new Grid("menu_grid","6","75","507","685",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_binddataset("dsMenu");
            obj.set_treeinitstatus("expand,all");
            obj.set_treeusecheckbox("false");
            obj.set_treeuseline("false");
            obj.set_treeuseimage("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"500\"/></Columns><Rows><Row size=\"33\"/></Rows><Band id=\"body\"><Cell displaytype=\"treeitemcontrol\" edittype=\"tree\" text=\"bind:MENU_NAME\" treelevel=\"bind:LEVEL\" tooltiptext=\"bind:MENU_NAME\" treestartlevel=\"0\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("sub_stat1","10","28","74","50",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("메뉴");
            obj.set_cssclass("sta_WF_SubtitleDown");
            this.addChild(obj.name, obj);

            obj = new Edit("menu_name_edit","648","122","260","30",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("menu_id_edit","648","81","260","30",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("sub_stat16","642","198","398","42",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("");
            obj.set_cssclass("sta_WF_DetailArea");
            this.addChild(obj.name, obj);

            obj = new Edit("menu_url_edit","648","204","260","30",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("sub_stat15","523","198","120","42",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("메뉴 URL");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.addChild(obj.name, obj);

            obj = new Static("sub_stat17","526","240","139","50",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("권한정보");
            obj.set_cssclass("sta_WF_SubtitleDown");
            this.addChild(obj.name, obj);

            obj = new Static("sub_stat2_00","523","289","125","43",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("사용자 추가");
            obj.set_cssclass("sta_WF_DetailEssential");
            this.addChild(obj.name, obj);

            obj = new Static("sub_stat8_00","642","289","398","43",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("");
            obj.set_cssclass("sta_WF_DetailArea");
            this.addChild(obj.name, obj);

            obj = new Edit("user_name_edit","648","295","231","30",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Button("search_btn","879","295","31","30",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_cssclass("btn_WF_inquiry");
            this.addChild(obj.name, obj);

            obj = new Grid("auth_user_grid","523","339","388","421",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_binddataset("dsUser");
            obj.set_scrolltype("vertical");
            obj.set_scrollbartype("auto auto");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"128\"/><Column size=\"105\"/><Column size=\"153\"/></Columns><Rows><Row size=\"26\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell text=\"사용자 ID\"/><Cell col=\"1\" text=\"성함\"/><Cell col=\"2\" text=\"부서\"/></Band><Band id=\"body\"><Cell text=\"bind:USER_ID\"/><Cell col=\"1\" text=\"bind:USER_NAME\"/><Cell col=\"2\" text=\"bind:DEPT_CODE\" displaytype=\"combotext\" combodataset=\"dsDept\" combocodecol=\"DEPT_CD\" combodatacol=\"DEPT_NAME\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1050,770,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item7","useYn_radio","value","dsMenu","USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","menu_id_edit","value","dsMenu","MENU_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","menu_name_edit","value","dsMenu","MENU_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","menu_url_edit","value","dsMenu","MENU_URL");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("temp_auth_crud.xfdl", function() {

        /************************************************************************************************
        * FORM 변수 선언 영역
        ************************************************************************************************/
        this.objApp = nexacro.getApplication();


        /************************************************************************************************
        * FORM EVENT 영역(onload, onbeforeclose)
        ************************************************************************************************/

        this.temp_menu_crud_onload = function(obj,e)
        {
        	this.selectMenu();
        };

        /************************************************************************************************
        * 버튼 영역
        ************************************************************************************************/

        /* 삭제 버튼 */
        this.del_btn_onclick = function(obj,e)
        {
        	if(this.confirm("권한을 삭제하시겠습니까?")){
        		if(this.dsUser.getColumn(this.dsUser.rowposition, "NO") == null){
        			this.dsUser.deleteRow(this.dsUser.rowposition);

        		}else{
        			var delNo = this.dsMenu.getColumn(this.dsMenu.rowposition, "MENU_ID");
        			var id  = this.dsUser.getColumn(this.dsUser.rowposition, "USER_ID");

        			this.dsList.setColumn(0, "MENU_ID", delNo);
        			this.dsList.setColumn(0, "USER_ID", id);

        			this.deleteMenuAuth();
        		}
        	}
        };

        /* 저장 버튼 */
        this.btn_save_onclick = function(obj,e)
        {
        	if(this.confirm("등록하시겠습니까?")){
        		if(this.dsUser.rowcount == 0){
        			alert("등록된 사용자가 없습니다");
        		}else{
        			this.saveMenuAuth()
        		}

        	}

        };


        /************************************************************************************************
        * TRANSACTION 영역
        ************************************************************************************************/
        /* selectMenu */
        this.selectMenu = function(){

        	var userId = "";

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

        /* menuAuthSelect */
        this.selectMenuAuth = function(menuId){

        	var strSvcId    = "selectMenuAuth";
        	var strSvcUrl   = "svcUrl::selectMenuAuth.do";
        	var inData      = "";
        	var outData     = "dsUser=dsUser dsDept=dsDept";
        	var strArg      = "menuId=" + menuId;
        	var callBackFnc = "fnCallback";

        	this.transaction(strSvcId
        		,strSvcUrl
        		,inData
        		,outData
        		,strArg
        		,callBackFnc);

        }

        /* saveMenu */
        this.saveMenuAuth = function(){

        	var strSvcId    = "insertMenuAuth";
        	var strSvcUrl   = "svcUrl::insertMenuAuth.do";
        	var inData      = "dsUser=dsUser:u";
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

        /* deleteMenu */
        this.deleteMenuAuth = function(){

        	var strSvcId    = "deleteMenuAuth";
        	var strSvcUrl   = "svcUrl::deleteMenuAuth.do";
        	var inData      = "dsList=dsList";
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

        	case "selectMenu":
        		//trace(this.dsMenu.saveXML());

        		return;


        	case "selectMenuAuth":

        		return;

        	case "insertMenuAuth":
        		alert("등록되었습니다");
        		this.selectMenu();

        		return;

        	case "deleteMenuAuth":
        		alert("삭제되었습니다");
        		this.selectMenu();

        		return;
        	}
        };


        /************************************************************************************************
        * 사용자 FUNCTION 영역
        ************************************************************************************************/
        this.menu_grid_oncellclick = function(obj,e)
        {

        	var objDs = this.menu_grid.getBindDataset();
        	var menuId = objDs.getColumn(e.row, "MENU_ID");
        	this.selectMenuAuth(menuId);
        };

        this.search_btn_onclick = function(obj,e)
        {
        	var objCF = new ChildFrame();

        	objCF.init("userSearch", 0, 0, 300, 400, null, null, "cmm::cmmUserPopup.xfdl"); // 초기값 세팅
        	objCF.set_showtitlebar(true);
        	objCF.set_openalign("center middle"); // childFrame의 위치를 지정하는 속성, 중간에 화면을 위치시킴
        	objCF.set_showstatusbar(false);
        	var objUser = { pStr1 : this.user_name_edit.value};

        	objCF.showModal( this.getOwnerFrame(), objUser, this, "fn_popupSearch" );
        };


        this.fn_popupSearch = function(sPopId, sRtn){

        	var obj = this.auth_user_grid.getBindDataset();

        	if(sPopId == "userSearch"){
        		if( sRtn.length> 0 ){
        			var arrRtn = sRtn.split(":");


        			for( var i = 0; i < obj.rowcount; i++){
        				var name = obj.getColumn(i, "USER_NAME");
        				if( name == arrRtn[0]){
        					alert("중복된 사용자 입니다.");
        					return;
        				}
        			}
        			var nRow = obj.addRow();
        			var menuId = this.dsMenu.getColumn(this.dsMenu.rowposition, "MENU_ID");

        			obj.setColumn(nRow, "MENU_ID", menuId);
        			obj.setColumn(nRow, "USER_NAME", arrRtn[0]);
        			obj.setColumn(nRow, "USER_ID", arrRtn[1]);
        			obj.setColumn(nRow, "DEPT_CODE", arrRtn[2]);

        		}
        	}
        };

        this.useYn_radio_onitemchanged = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.temp_menu_crud_onload,this);
            this.btn_save.addEventHandler("onclick",this.btn_save_onclick,this);
            this.del_btn.addEventHandler("onclick",this.del_btn_onclick,this);
            this.useYn_radio.addEventHandler("onitemchanged",this.useYn_radio_onitemchanged,this);
            this.menu_grid.addEventHandler("oncellclick",this.menu_grid_oncellclick,this);
            this.search_btn.addEventHandler("onclick",this.search_btn_onclick,this);
        };
        this.loadIncludeScript("temp_auth_crud.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
