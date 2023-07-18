(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Top");
            this.set_titletext("Form_Top");
            this.set_scrollbartype("none none");
            this.set_background("#F5F7FC");
            if (Form == this.constructor)
            {
                this._setFormPosition(1278,40);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static00","10","-2","230","41",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("TOBEVOC💁‍♀");
            obj.set_font("normal 35px/normal \"Arial Black\"");
            obj.set_textAlign("center");
            obj.set_color("#6836f1");
            this.addChild(obj.name, obj);

            obj = new Button("btnLogOut",null,"18","62","22","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("LOGOUT");
            obj.getSetter("uWord").set("frame.logOut");
            obj.set_cssclass("btn_WF_basic01");
            obj.set_font("12px/normal \"Arial Black\"");
            this.addChild(obj.name, obj);

            obj = new Static("staName",null,"16","183","23","btnLogOut:0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("sta_TF_Welcome");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1278,40,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_Top.xfdl", function() {

        this.objApp = nexacro.getApplication();
        this.Form_Top_onload = function(obj,e)
        {



        };


        this.fnLoad = function(){
        	var userName = nexacro.getApplication().gdsUserInfo.getColumn(0, "userName");
        	this.staName.set_text(userName+"님, 환영합니다🔆");

        }
        this.btnLogOut_onclick = function(obj,e)
        {
        	if(this.confirm("로그아웃 하시겠습니까?")){

        		this.objApp.mainframe.VFrameSet.frameLogin.form.Div00.form.edt_id.set_value("");
        		this.objApp.mainframe.VFrameSet.frameLogin.form.Div00.form.edt_pw.set_value("");

        		this.objApp.mainframe.VFrameSet.set_separatesize("*,0,0,0");
        		this.objApp.mainframe.VFrameSet.HFrameSet.VFrameSet1.frameNavi.form.allClose(); //모두닫기

        		//this.go("FrameBase::Form_Login.xfdl");

        	}

        };

        this.Static00_onclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_Top_onload,this);
            this.Static00.addEventHandler("onclick",this.Static00_onclick,this);
            this.btnLogOut.addEventHandler("onclick",this.btnLogOut_onclick,this);
        };
        this.loadIncludeScript("Form_Top.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
