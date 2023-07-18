(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Work");
            this.set_titletext("Form_Work");
            this.set_background("#F5F7FC");
            if (Form == this.constructor)
            {
                this._setFormPosition(1050,872);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Button("btn_myMenu","6","7","33","28",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_cssclass("btn_WT_Mymnu");
            this.addChild(obj.name, obj);

            obj = new Static("st_title","39","7","739","38",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Static00");
            obj.set_cssclass("sta_WF_Navi");
            this.addChild(obj.name, obj);

            obj = new Div("div_work","5","32",null,null,"5","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_border("0px none");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","0","320","10","100",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Button01");
            obj.set_cssclass("btn_LF_Close");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div_work.form
            obj = new Layout("default","",0,0,this.div_work.form,function(p){});
            this.div_work.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1050,872,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_Work.xfdl", function() {

        this.fv_formID = "";
        this.fv_menuID = "";
        this.fv_menuName = "";
        this.fv_formURL = "";

        this.Form_Work_onload = function(obj,e)
        {
        	var objCF = this.getOwnerFrame(); // 이게뭘까?

        	this.fv_formID = objCF.param.FORM_ID;
        	this.fv_menuID = objCF.param.MENU_ID;
        	this.fv_menuName = objCF.param.MENU_NAME;
        	this.fv_formURL = objCF.param.FORM_URL;

        	this.st_title.set_text(objCF.param.TREE_PATH);
        	this.div_work.set_url(this.fv_formURL);

        	this.form_onsize();

        	// 화면이 load가 될때 즐겨찾기dataset을 확인해줌
        	//var nRow = this.objApp.gds_myMenu.findRow("MENU_ID", this.fv_menuID);	//현재 페이지로 찾음
        	//if(nRow > -1){
        		//this.btn_myMenu.set_cssclass("btn_WT_MymnuS");
        	//}

        	/*권한처리*/
        	//this.fn_menuAuth(this.fv_menuID);
        };

        // 스크롤 재갱신
        this.form_onsize = function(obj, e)
        {
        	this.resetScroll();
        }


        this.fn_menuAuth = function(pMenuID){

        	var sMenuAuth = this.objApp.gds_menu.lookup("MENU_ID", pMenuID, "MENU_AUTH");
        	// lookup > 검색 컬럼 / 검색data 값 / 원하는 대상 컬럼
        	// YYYNN

        	if( sMenuAuth == null || sMenuAuth.length == 0 || sMenuAuth == "undefined"){
        		sMenuAuth = "YYYYY";
        	}

        	var arrObj = ["btn_search", "btn_add", "btn_delete", "btn_save", "btn_print"]; //버튼 종류

        	for(var i = 0; i<arrObj.length; i++){
        		var objBtn = this.components[arrObj[i]];

        		if(sMenuAuth.substr(i, 1) == "Y"){
        			//버튼을 활성화

        			// this.all > form에 있는 모든 것(dataset, btn 등 전부 들고옴)을 찾음
        			// this.components > form에 있는 componenet만 찾음

        			objBtn.set_enable(true);

        		}else{
        			//버튼을 비활성화
        			objBtn.set_enable(false);

        		}
        	}

        }


        this.Button00_onclick = function(obj,e)
        {
        	this.close();
        };

        this.objApp = nexacro.getApplication();

        // form이 활성화될 때 빌생하는 event
        this.Form_Work_onactivate = function(obj,e)
        {
        	// 지금 처음엔 mainFrame이 뜨므로 size변경을 해줘야함
        	this.objApp.mainframe.VFrameSet.HFrameSet.VFrameSet1.set_separatesize("35,*,0");

        	this.objApp.mainframe.VFrameSet.HFrameSet.VFrameSet1.frameNavi.form.fn_tabFocus(this.fv_formID); //fn_tabFocus 함수 호출

        };

        /* 즐겨찾기 */
        this.btn_myMenu_onclick = function(obj,e)
        {
        	var bIsMyMenu = false;
        	var sCssClass = obj.cssclass; //btn_WT_Mymnu, btn_WT_MymnuS 둘중하나 뜸

        	if(sCssClass == "btn_WT_MymnuS") bIsMyMenu = true;

        	if(bIsMyMenu == true){
        		trace(">>>>>>>>>>>>>>>>즐겨찾기 해제!")

        		var nRow = this.objApp.gds_myMenu.findRow("MENU_ID", this.fv_menuID);
        		this.objApp.gds_myMenu.deleteRow(nRow);

        		obj.set_cssclass("btn_WT_Mymnu");



        	}else{
        		trace(">>>>>>>>>>>>>>>>즐겨찾기 추가");

        		var nRow = this.objApp.gds_menu.findRow("MENU_ID", this.fv_menuID); // dataset에서 column찾음
        		var nNewRow = this.objApp.gds_myMenu.addRow();

        		this.objApp.gds_myMenu.copyRow(nNewRow, this.objApp.gds_menu, nRow) // row단위 copy
        		// copy할 dataset row, copy하는dataset, copyDataset row

        		/* 상기랑 같은 code
        		this.objApp.gds_myMenu.setColumn(nNewRow, "MENU_ID", this.fv_menuID);
        		this.objApp.gds_myMenu.setColumn(nNewRow, "MENU_NAME", this.fv_menuName);
        		this.objApp.gds_myMenu.setColumn(nNewRow, "FORM_URL", this.fv_forUrl);
        		*/

        		obj.set_cssclass("btn_WT_MymnuS");
        	}

        	nexacro.setPrivateProfile("MY_MENU", this.objApp.gds_myMenu.saveXML());

        };

        this.Button01_onclick = function(obj,e)
        {
        	var btnClick = false;
        	var btnClass = obj.cssclass;

        	if( btnClass == "btn_LF_Close"){
        		alert("left창닫아줌");
        		this.Button01.set_cssclass("btn_LF_Open"); //

        		this.objApp.mainframe.VFrameSet.HFrameSet.set_separatesize("0,*");
        		this.objApp.mainframe.VFrameSet.HFrameSet.VFrameSet1.set_separatesize("35,*,0");

        	}else{
        		alert("left창 열어줌");
        		this.Button01.set_cssclass("btn_LF_Close"); //

        		this.objApp.mainframe.VFrameSet.HFrameSet.set_separatesize("225,*");
        		this.objApp.mainframe.VFrameSet.HFrameSet.VFrameSet1.set_separatesize("35,*,0");
        	}

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_Work_onload,this);
            this.addEventHandler("onactivate",this.Form_Work_onactivate,this);
            this.btn_myMenu.addEventHandler("onclick",this.btn_myMenu_onclick,this);
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
        };
        this.loadIncludeScript("Form_Work.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
