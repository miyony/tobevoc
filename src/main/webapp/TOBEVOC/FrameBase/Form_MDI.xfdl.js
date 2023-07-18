(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_MDI");
            this.set_titletext("New Form");
            this.set_background("#F5F7FC");
            this.set_scrolltype("none");
            this.set_scrollbartype("none none");
            if (Form == this.constructor)
            {
                this._setFormPosition(1053,35);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Button("btn_Home","-7","4","56","31",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_cssclass("btn_MDI_Home");
            this.addChild(obj.name, obj);

            obj = new Tab("tab_mdi","47","8","776","31",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_tabindex("0");
            obj.set_showextrabutton("true");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.tab_mdi);
            obj.set_text("Tabpage2");
            this.tab_mdi.addChild(obj.name, obj);

            obj = new Div("Div00",null,"8","143","24","7",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Area");
            obj.set_border("0px none");
            this.addChild(obj.name, obj);

            obj = new Button("btn_maximize","5","3","23","21",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_MDI_Max");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_cascade","32","3","23","21",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_MDI_Min");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_horizontal","59","3","23","21",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_MDI_H");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_vertical","86","3","23","21",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_MDI_V");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_closeAll","113","3","21","21",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_MDI_Allx");
            this.Div00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.tab_mdi.Tabpage2
            obj = new Layout("default","",0,0,this.tab_mdi.Tabpage2.form,function(p){});
            this.tab_mdi.Tabpage2.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1053,35,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_MDI.xfdl", function() {
        this.objApp = nexacro.getApplication();

        this.Form_MDI_onload = function(obj,e)
        {
        	this.tab_mdi.removeTabpage(0); // tab Page 지워줌

        };

        // tabPage 추가
        // 이 함수는 완전 다른frame에서 호출 Form_Left
        this.fn_addTab = function(objParam)
        {
        	this.tab_mdi.insertTabpage(objParam.FORM_ID, -1, "", objParam.MENU_NAME);
        	// id, 삽입된 위치(-1 = 맨마지막), TabpageControl 에 연결할 Form 의 URL , TabButton 에 표시할 텍스트
        }

        this.tab_mdi_onchanged = function(obj,e)
        {

        	var sFormID = obj.tabpages[e.postindex].name; // tabPage ID
        	this.objApp.mainframe.VFrameSet.HFrameSet.VFrameSet1.framesetWork[sFormID].form.setFocus();

        };

        // x누르면 닫힘
        this.tab_mdi_onextrabuttonclick = function(obj,e)
        {
        	var sFormID = obj.tabpages[e.index].name;

        	obj.removeTabpage(e.index); // tab page 지움
        	this.objApp.mainframe.VFrameSet.HFrameSet.VFrameSet1.framesetWork[sFormID].form.close(); //tab page 종료

        	var nRow = this.objApp.gds_openForm.findRow("FORM_ID", sFormID);
        	this.objApp.gds_openForm.deleteRow(nRow);

        };


        // 버튼 눌렀을 때
        this.fn_arrange = function(obj,e)
        {
        	var WorkFrame = this.objApp.mainframe.VFrameSet.HFrameSet.VFrameSet1.framesetWork; // console 찍어볼 것
        	var arrObj = WorkFrame.all; // 전부
        	var sType = obj.name.replace("btn_", "") // obj.name = btn_cascade, btn_horizontal .. 등이므로 replace함

        	if( sType == "maximize"){
        		for( var i = 0; i<arrObj.length; i++){
        			WorkFrame.frames[i].set_openstatus(sType); // workframe의 i번째의 창크기를 설정
        			WorkFrame.frames[i].set_border("0px none;");
        		}

        	}else if(sType == "closeAll"){
        		for( var i = arrObj.length-1; i >= 0; i--){ // 뒤부터 지워줌(역순)
        			arrObj[i].form.close(); // tab 닫아줌
        			this.tab_mdi.removeTabpage(i); // tab 지워줌
        		}
        		this.objApp.gds_openFrom.clearData(); // dataset에 있는 data를 지워줌

        	}else{
        		WorkFrame.arrange(sType);

        		for( var i = 0; i<arrObj.length; i++){
        			WorkFrame.frames[i].set_border("1px solid black");
        		}
        	}


        };

        this.allClose = function(){
        	var WorkFrame = this.objApp.mainframe.VFrameSet.HFrameSet.VFrameSet1.framesetWork;
        	var arrObj = WorkFrame.all; // 전부

        	for( var i = arrObj.length-1; i >= 0; i--){ // 뒤부터 지워줌(역순)
        			arrObj[i].form.close(); // tab 닫아줌
        			this.tab_mdi.removeTabpage(i); // tab 지워줌
        		}
        		this.objApp.gds_openFrom.clearData(); // dataset에 있는 data를 지워줌

        }

        //해당 form을 활성화시킴
        this.fn_tabFocus = function(sFromID)
        {
        	for(var i = 0; i<this.tab_mdi.getTabpageCount(); i++){
        		if(this.tab_mdi.tabpages[i].name == sFromID){
        			this.tab_mdi.set_tabindex(i);  //?뭐야이거...존나 모르는거 많이나옴...;
        			// TabPag 중 화면에 표시되고 있는 TabPage의 인덱스를 갖는 속성입니다
        			return;
        		}
        	}
        }

        //main으로 감
        this.btn_Home_onclick = function(obj,e)
        {
        	this.objApp.mainframe.VFrameSet.HFrameSet.VFrameSet1.set_separatesize("35,0,*");

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_MDI_onload,this);
            this.btn_Home.addEventHandler("onclick",this.btn_Home_onclick,this);
            this.tab_mdi.addEventHandler("onchanged",this.tab_mdi_onchanged,this);
            this.tab_mdi.addEventHandler("onextrabuttonclick",this.tab_mdi_onextrabuttonclick,this);
            this.Div00.form.btn_maximize.addEventHandler("onclick",this.fn_arrange,this);
            this.Div00.form.btn_cascade.addEventHandler("onclick",this.fn_arrange,this);
            this.Div00.form.btn_horizontal.addEventHandler("onclick",this.fn_arrange,this);
            this.Div00.form.btn_vertical.addEventHandler("onclick",this.fn_arrange,this);
            this.Div00.form.btn_closeAll.addEventHandler("onclick",this.fn_arrange,this);
        };
        this.loadIncludeScript("Form_MDI.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
