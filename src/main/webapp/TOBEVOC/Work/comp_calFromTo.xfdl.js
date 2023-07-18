(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("EduComm_CalFromTo");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(280,30);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Calendar("cal_from","0","0","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_popuptype("none");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","cal_from:5","0","30","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("~");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_to","Static00_00:5","0","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_popuptype("none");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("pdiv01","0","40","310","198",null,null,null,null,null,null,this);
            obj.set_text("pdiv01");
            obj.set_visible("false");
            obj.set_border("1px solid");
            obj.set_background("white");
            this.addChild(obj.name, obj);

            obj = new Calendar("pCalFrom","2","6","150","150",null,null,null,null,null,null,this.pdiv01.form);
            obj.set_taborder("0");
            obj.set_type("monthonly");
            this.pdiv01.addChild(obj.name, obj);

            obj = new Calendar("pCalTo","155","6","150","150",null,null,null,null,null,null,this.pdiv01.form);
            obj.set_taborder("1");
            obj.set_type("monthonly");
            this.pdiv01.addChild(obj.name, obj);

            obj = new Button("btn00","82","166","64","21",null,null,null,null,null,null,this.pdiv01.form);
            obj.set_taborder("2");
            obj.set_text("확인");
            this.pdiv01.addChild(obj.name, obj);

            obj = new Button("btn01","159","167","60","21",null,null,null,null,null,null,this.pdiv01.form);
            obj.set_taborder("3");
            obj.set_text("취소");
            this.pdiv01.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.pdiv01.form
            obj = new Layout("default","",0,0,this.pdiv01.form,function(p){});
            this.pdiv01.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",280,30,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","pdiv01.form.pCalFrom","value","ds01","COL_FR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","pdiv01.form.pCalTo","value","ds01","COL_TO");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("comp_calFromTo.xfdl", function() {


        /************************************************************************************************
        * 사용자 FUNCTION 영역
        ************************************************************************************************/

        this.calondropdown = function(obj,e)
        {
        	this.pdiv01.form.pCalFrom.set_value(this.cal_from.value);
        	//popupDiv에 있는 pcalFrom달력에 calFrom날짜를 띄움
        	this.pdiv01.form.pCalTo.set_value(this.cal_to.value);

        	// 달력을 눌렀을 때 밑에 popupDiv를 띄움
        	this.pdiv01.trackPopupByComponent(this.cal_from, 0, obj.height); // popupDiv를 컴퍼넌트 기준으로 띄움
        	// this.calFrom 기준, left, top

        };

        	/* 확인 버튼 클릭 시 */
        this.pdiv01_btn00_onclick = function(obj,e)
        {
        	var sFr = this.pdiv01.form.pCalFrom.value;
        	var sTo = this.pdiv01.form.pCalTo.value;

        	this.cal_from.set_value(sFr);
        	this.cal_to.set_value(sTo);

        	this.pdiv01.closePopup(); // popupDiv 닫음!

        };


        /* 이 기능을 다른곳에서 호출해서 값을 가져올 수 있도록
         getter를 만듬*/
         this.fnGetFromDate = function(){

        	return this.cal_from.value;

         }

         this.fnGetToDate = function(){

        	return this.cal_to.value;

         }

         this.fnSetFromDate = function (sValue) {
         	this.cal_from.set_value(sValue);

         };

          this.fnSetToDate = function (sValue) {
         	this.cal_to.set_value(sValue);

         };

        this.EduComm_CalFromTo_onload = function(obj,e)
        {
        	this.cal_to.set_value(this.gfnGetDate());
        	this.cal_from.set_value(this.gfnGetFirstDate());
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.EduComm_CalFromTo_onload,this);
            this.cal_from.addEventHandler("ondropdown",this.calondropdown,this);
            this.cal_to.addEventHandler("ondropdown",this.calondropdown,this);
            this.pdiv01.form.pCalFrom.addEventHandler("ondayclick",this.pdiv01_pCalFrom_ondayclick,this);
            this.pdiv01.form.pCalFrom.addEventHandler("onchanged",this.pdiv01_pCalFrom_onchanged,this);
            this.pdiv01.form.pCalTo.addEventHandler("ondayclick",this.pdiv01_pCalTo_ondayclick,this);
            this.pdiv01.form.btn00.addEventHandler("onclick",this.pdiv01_btn00_onclick,this);
            this.pdiv01.form.btn01.addEventHandler("onclick",this.pdiv01_btn01_onclick,this);
        };
        this.loadIncludeScript("comp_calFromTo.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
