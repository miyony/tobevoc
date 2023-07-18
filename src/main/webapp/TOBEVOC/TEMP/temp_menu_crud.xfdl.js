(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("temp_menu_crud");
            this.set_titletext("메뉴 관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1050,770);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"AUTH\" type=\"STRING\" size=\"256\"/><Column id=\"etc1\" type=\"STRING\" size=\"256\"/><Column id=\"etc2\" type=\"STRING\" size=\"256\"/><Column id=\"etc3\" type=\"STRING\" size=\"256\"/><Column id=\"UP_MENU\" type=\"STRING\" size=\"256\"/><Column id=\"LEVEL\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_URL\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DTTM\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDelete", this);
            obj._setContents("<ColumnInfo><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"AUTH\" type=\"STRING\" size=\"256\"/><Column id=\"etc1\" type=\"STRING\" size=\"256\"/><Column id=\"etc2\" type=\"STRING\" size=\"256\"/><Column id=\"etc3\" type=\"STRING\" size=\"256\"/><Column id=\"UP_MENU\" type=\"STRING\" size=\"256\"/><Column id=\"LEVEL\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_URL\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DTTM\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj.set_text("메뉴 관리");
            obj.set_cssclass("sta_WF_FrmTitle");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"5","65","30","6",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_basic02");
            this.addChild(obj.name, obj);

            obj = new Button("del_btn",null,"5","65","30","152",null,null,null,null,null,this);
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

            obj = new Static("sub_stat2","523","75","120","42",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("메뉴 ID");
            obj.set_cssclass("sta_WF_DetailEssential");
            this.addChild(obj.name, obj);

            obj = new Static("sub_stat13","642","280","398","42",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("");
            obj.set_cssclass("sta_WF_DetailArea");
            this.addChild(obj.name, obj);

            obj = new Static("sub_stat3","523","116","120","42",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("메뉴명");
            obj.set_cssclass("sta_WF_DetailEssential");
            this.addChild(obj.name, obj);

            obj = new Static("sub_stat6","523","239","120","42",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("ETC2");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.addChild(obj.name, obj);

            obj = new Static("sub_stat8","642","75","398","42",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("");
            obj.set_cssclass("sta_WF_DetailArea");
            this.addChild(obj.name, obj);

            obj = new Static("sub_stat9","642","116","398","42",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("");
            obj.set_cssclass("sta_WF_DetailArea");
            this.addChild(obj.name, obj);

            obj = new Static("sub_stat7","523","280","120","42",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("ETC3");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.addChild(obj.name, obj);

            obj = new Static("sub_stat12","642","239","398","42",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("");
            obj.set_cssclass("sta_WF_DetailArea");
            this.addChild(obj.name, obj);

            obj = new Edit("edt2_edit","648","245","260","30",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Grid("menu_grid","6","75","507","685",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_binddataset("dsMenu");
            obj.set_treeinitstatus("expand,all");
            obj.set_treeusecheckbox("false");
            obj.set_treeuseline("false");
            obj.set_treeuseimage("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"500\"/></Columns><Rows><Row size=\"33\"/></Rows><Band id=\"body\"><Cell displaytype=\"treeitemcontrol\" edittype=\"tree\" text=\"bind:MENU_NAME\" treelevel=\"bind:LEVEL\" tooltiptext=\"bind:MENU_NAME\" treestartlevel=\"0\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("sub_stat1","10","28","74","50",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("메뉴");
            obj.set_cssclass("sta_WF_SubtitleDown");
            this.addChild(obj.name, obj);

            obj = new Static("sub_stat5","523","198","120","42",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("ETC1");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.addChild(obj.name, obj);

            obj = new Static("sub_stat11","642","198","398","42",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("");
            obj.set_cssclass("sta_WF_DetailArea");
            this.addChild(obj.name, obj);

            obj = new Button("btn_insert",null,"5","65","30","79",null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_basic02");
            this.addChild(obj.name, obj);

            obj = new Edit("edt3_edit","648","286","260","30",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Edit("menu_name_edit","648","122","260","30",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Edit("etc_edit","648","204","260","30",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Edit("menu_id_edit","648","81","260","30",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Button("up_btn","454","48","27","24",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_cssclass("btn_WF_btnUp");
            this.addChild(obj.name, obj);

            obj = new Button("down_btn","485","48","27","24",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_cssclass("btn_WF_btnDown");
            this.addChild(obj.name, obj);

            obj = new Static("sub_stat16","642","157","398","42",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("");
            obj.set_cssclass("sta_WF_DetailArea");
            this.addChild(obj.name, obj);

            obj = new Edit("menu_url_edit","648","163","260","30",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Static("sub_stat15","523","157","120","42",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("메뉴 URL");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1050,770,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
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
        this.registerScript("temp_menu_crud.xfdl", function() {

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

        /* 추가 버튼 */
        this.btn_insert_onclick = function(obj,e)
        {
        	var dsCnt = this.dsMenu.getRowCount();
        	var menuIdArr = [];
        	var menuId = ""
        	// 글쓴이
        	var regUser = this.objApp.gdsUserInfo.getColumn(0, "userId");

        	for(var i =0; i<=dsCnt; i++){
        		menuId = this.dsMenu.getColumn(i, "MENU_ID");
        		menuIdArr.push(menuId);
        	}
        	if(!menuIdArr.some(function(elem,index,arr){
        		return elem == "0";
        	})){
        		var nRow = this.dsMenu.addRow(); // 행 추가
        		this.dsMenu.setColumn(nRow, "UP_MENU"  , "00000");
        		this.dsMenu.setColumn(nRow, "LEVEL", "0");
        		this.dsMenu.setColumn(nRow, "REG_USER", regUser);
        		this.dsMenu.setColumn(nRow, "REG_DTTM", this.gfnGetDate());
        		this.dsMenu.setColumn(nRow, "USE_YN", "Y");
        	}else{
        		alert("행은 한개만 추가할 수 있습니다.");
        	}

        };

        this.del_btn_onclick = function(obj,e)
        {
        	var getText =  this.del_btn.text;
        	if(getText == "줄삭제"){
        		if(!this.dsMenu.getColumn(this.dsMenu.rowposition, "MENU_NAME")){
        			this.dsMenu.deleteRow(this.dsMenu.rowposition);
        		}
        	}else{ // 메뉴삭제
        		if(this.confirm("선택한 메뉴를 삭제하시겠습니까?")){
        			var fromRow = this.dsMenu.rowposition;
        			var toRow = this.dsDelete.addRow();
        			this.dsDelete.copyRow(toRow, this.dsMenu, fromRow);
        			//alert(this.dsDelete.saveXML());
        			this.deleteMenu();
        		}
        	}
        };

        /* menu up 버튼 */
        this.up_btn_onclick = function(obj,e)
        {
        	var num = this.dsMenu.rowposition;
        	//alert("up: "+num);

        	var a = this.dsMenu.getColumn(num, "MENU_ID");
        	var b = this.dsMenu.getColumn(num, "MENU_NAME");
        	var c = this.dsMenu.getColumn(num-1, "LEVEL");
        	var d = this.dsMenu.getColumn(num-1, "UP_MENU");

        	// 글쓴이
        	var regUser = this.objApp.gdsUserInfo.getColumn(0, "userId");

        	if(num > 0){
        		var bl  = this.dsMenu.deleteRow(num);
        	}

        	if(bl){
        		var ar = this.dsMenu.insertRow(num-1)
        		this.dsMenu.setColumn(num-1, "MENU_ID"  , a);
        		this.dsMenu.setColumn(num-1, "MENU_NAME", b);
        		this.dsMenu.setColumn(num-1, "LEVEL"    , c);
        		this.dsMenu.setColumn(num-1, "UP_MENU"  , d);
        		this.dsMenu.setColumn(num-1, "REG_USER"  , regUser);
        		this.dsMenu.setColumn(num-1, "REG_DTTM"  , this.gfnGetDate());
        		this.dsMenu.setColumn(num-1, "USE_YN"  , "Y");
        	}


        };

        /* menu down 버튼 */
        this.down_btn_onclick = function(obj,e)
        {
        	var num = this.dsMenu.rowposition;
        	//alert("down: "+num);
        	//alert(this.dsMenu.rowcount-1);

        	// 글쓴이
        	var regUser = this.objApp.gdsUserInfo.getColumn(0, "userId");

        	var a = this.dsMenu.getColumn(num, "MENU_ID");
        	var b = this.dsMenu.getColumn(num, "MENU_NAME");
        	var c = this.dsMenu.getColumn(num+1, "LEVEL");
        	var d = this.dsMenu.getColumn(num+1, "UP_MENU");

        	var bl = true;
        	if(num == this.dsMenu.rowcount){
        		bl = false;
        	}

        	if(bl){
        		this.dsMenu.deleteRow(num);
        		var ar = this.dsMenu.insertRow(num+1);
        		this.dsMenu.setColumn(num+1, "MENU_ID"  , a);
        		this.dsMenu.setColumn(num+1, "MENU_NAME", b);
        		this.dsMenu.setColumn(num+1, "LEVEL"    , c);
        		this.dsMenu.setColumn(num+1, "UP_MENU"  , d);
        		this.dsMenu.setColumn(num+1, "REG_USER"  , regUser);
        		this.dsMenu.setColumn(num+1, "REG_DTTM"  , this.gfnGetDate());
        		this.dsMenu.setColumn(num+1, "USE_YN"  , "Y");

        	}else{
        		this.dsMenu.deleteRow(num);
        		var ar = this.dsMenu.addRow();
        		this.dsMenu.setColumn(ar, "MENU_ID"  , a);
        		this.dsMenu.setColumn(ar, "MENU_NAME", b);
        		this.dsMenu.setColumn(ar, "LEVEL"    , "0");
        		this.dsMenu.setColumn(ar, "UP_MENU"  , "00000");
        		this.dsMenu.setColumn(ar, "REG_USER"  , regUser);
        		this.dsMenu.setColumn(ar, "REG_DTTM"  , this.gfnGetDate());
        		this.dsMenu.setColumn(ar, "USE_YN"  , "Y");
        	}
        };

        /* 저장 버튼 */
        this.btn_save_onclick = function(obj,e)
        {
        	this.saveMenu()

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

        /* saveMenu */
        this.saveMenu = function(){

        	var strSvcId    = "saveMenu";
        	var strSvcUrl   = "svcUrl::saveMenu.do";
        	var inData      = "dsMenu=dsMenu:u";
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
        this.deleteMenu = function(){

        	var strSvcId    = "deleteMenu";
        	var strSvcUrl   = "svcUrl::deleteMenu.do";
        	var inData      = "dsDelete=dsDelete";
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

        	case "saveMenu" :
        		alert("저장되었습니다");
        		this.selectMenu();
        		// 좌측메뉴 리로드

        		return;

        	case "deleteMenu":
        		alert("삭제되었습니다");
        		this.dsMenu.filter("");
        		this.selectMenu();
        		return;

        	}
        };


        /************************************************************************************************
        * 사용자 FUNCTION 영역
        ************************************************************************************************/

        /* 메뉴grid가 바뀔 때 마다 column data 확인하여 변경 */
        this.menu_grid_oncellposchanged = function(obj,e)
        {

        	var menuYn = this.dsMenu.getColumn(e.row, "USE_YN");
        	//alert(menuYn);
        	if(menuYn == "Y"){
        		this.del_btn.set_text("삭제");
        	}else{
        		this.del_btn.set_text("줄삭제");
        	}

        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.temp_menu_crud_onload,this);
            this.title_stat.addEventHandler("onclick",this.Static01_onclick,this);
            this.btn_save.addEventHandler("onclick",this.btn_save_onclick,this);
            this.del_btn.addEventHandler("onclick",this.del_btn_onclick,this);
            this.menu_grid.addEventHandler("oncellposchanged",this.menu_grid_oncellposchanged,this);
            this.btn_insert.addEventHandler("onclick",this.btn_insert_onclick,this);
            this.up_btn.addEventHandler("onclick",this.up_btn_onclick,this);
            this.down_btn.addEventHandler("onclick",this.down_btn_onclick,this);
        };
        this.loadIncludeScript("temp_menu_crud.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
