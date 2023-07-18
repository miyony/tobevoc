(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frame_Botton");
            this.set_titletext("New Form");
            this.set_scrolltype("none");
            this.set_background("#f1f1f1");
            this.set_stepitemsize("0");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,30);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsNotice", this);
            obj._setContents("<ColumnInfo><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"POST_DTTM\" type=\"STRING\" size=\"256\"/><Column id=\"NO\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("notice_stat","10","2","780","25",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,30,this,function(p){});
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_Botton.xfdl", function() {
        /************************************************************************************************
        * FORM 변수 선언 영역
        ************************************************************************************************/
        this.objApp = nexacro.getApplication();
        this.fvStep = 0;

        /************************************************************************************************
        * FORM EVENT 영역(onload, onbeforeclose)
        ************************************************************************************************/
        this.frame_Botton_onload = function(obj,e)
        {
        	//this.selectBottomNotice(); //일단 한번 들고옴
        	//this.setTimer("1",900000); // 15분에 한번 갱신
        	//this.set_stepshowtype("action");

        	//this.selectBottomNotice();
        };


        /*this.frame_Botton_ontimer = function(obj:nexacro.Form,e:nexacro.TimerEventInfo)
        {
        	//alert("ontimer");
        	if(e.timerid == 0){
        		//alert("selectBottomNotice");
        		this.selectBottomNotice();

        	}
        };
        */

        /************************************************************************************************
        * TRANSACTION 영역
        ************************************************************************************************/
        /* selectBottomNotice */
        this.selectBottomNotice = function(){

        	var strSvcId    = "selectBottomNotice";
        	var strSvcUrl   = "svcUrl::selectBottomNotice.do";
        	var inData      = "";
        	var outData     = "dsNotice=dsNotice";
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

        	case "selectBottomNotice":
        		var cnt = this.dsNotice.rowcount;
        		this.setStepCount(cnt);

        		for(var i=0; i<cnt; i++){
        			//alert("notice"+i);
        			var bottom = new Static("notice_stat0"+i, 10, 2, 780, 25);
        			this.addChild(bottom.name, bottom);
        			//alert(this.dsNotice.getColumn(i-1, "TITLE"));
        			bottom.set_text("📢공지사항 : "+ this.dsNotice.getColumn(i, "TITLE"));
        			//bottom.set_font("bold 11pt/normal Verdana, Malgun Gothic");
        			bottom.set_positionstep(i);
        			bottom.show();
        		}

        		this.setBottomTime();
        		break;

        	}
        };

        this.setBottomTime = function(){
        	this.setTimer(0, 5000);

        }



        this.frame_Botton_ontimer = function(obj,e){

        	if (e.timerid == 0)	{
        		if (this.fvStep == 2) {
        			this.fvStep = 0;
        			this.stepselector.set_stepindex(0);
        		}
        		else {
        			this.stepselector.set_stepindex(++this.fvStep);
        		}
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("ontimer",this.frame_Botton_ontimer,this);
            this.addEventHandler("onload",this.frame_Botton_onload,this);
        };
        this.loadIncludeScript("Form_Botton.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
