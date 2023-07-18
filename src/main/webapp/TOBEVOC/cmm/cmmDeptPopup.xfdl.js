(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("cmmDeptPopup");
            this.set_titletext("부서 조회");
            if (Form == this.constructor)
            {
                this._setFormPosition(330,400);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsDept", this);
            obj._setContents("<ColumnInfo><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"UP_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"LEVEL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPos", this);
            obj._setContents("<ColumnInfo><Column id=\"POS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"POS_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"POS_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("title_stat","10","10","107","18",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("부서 조회");
            obj.set_cssclass("sta_WF_FrmTitle");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","9","40","313","50",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_cssclass("sta_WF_box01");
            this.addChild(obj.name, obj);

            obj = new Static("sub_stat","4","8","98","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("부서명");
            obj.set_cssclass("sta_WF_LabelTxt");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("search_edit","72","9","230","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_select",null,"5","65","30","7",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_basic02");
            this.addChild(obj.name, obj);

            obj = new Grid("user_grid","7","99","315","292",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_binddataset("dsDept");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"43\"/><Column size=\"256\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"NO\"/><Cell col=\"1\" text=\"부서명\"/></Band><Band id=\"body\"><Cell text=\"expr:dataset.rowcount - rowidx\"/><Cell col=\"1\" text=\"bind:DEPT_NAME\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",330,400,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("cmmDeptPopup.xfdl", function() {
        /************************************************************************************************
        * FORM 변수 선언 영역
        ************************************************************************************************/


        /************************************************************************************************
        * FORM EVENT 영역(onload, onbeforeclose)
        ************************************************************************************************/
        this.cmmUserPopup_onload = function(obj,e)
        {
        	var sParam1 = this.parent.pStr1;
        	this.selectDept(sParam1);
        };


        /************************************************************************************************
        * 버튼 영역
        ************************************************************************************************/
        /* 조회 버튼 */
        this.btn_select_onclick = function(obj,e)
        {
        	var sParam1 = this.Div00.form.search_edit.text;
        	this.selectDept(sParam1);
        };

        /************************************************************************************************
        * TRANSACTION 영역
        ************************************************************************************************/
        /* selectDept */
        this.selectDept = function(sParam1){
        	this.dsSearch.setColumn(0, "DEPT_NAME",sParam1);

        	var strSvcId    = "selectDept";
        	var strSvcUrl   = "svcUrl::selectDept.do";
        	var inData      = "dsSearch=dsSearch";
        	var outData     = "dsDept=dsDept";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.transaction(strSvcId
        		,strSvcUrl
        		,inData
        		,outData
        		,strArg
        		,callBackFnc);

        }

        /************************************************************************************************
        * 사용자 FUNCTION 영역
        ************************************************************************************************/
        /* grid 더블 클릭 시 */
        this.Grid00_oncelldblclick = function(obj,e)
        {
        	var sCode = this.dsDept.getColumn(e.row, "DEPT_NAME")+":"+this.dsDept.getColumn(e.row, "DEPT_CD");
        	this.close(sCode);

        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.cmmUserPopup_onload,this);
            this.title_stat.addEventHandler("onclick",this.Static01_onclick,this);
            this.btn_select.addEventHandler("onclick",this.btn_select_onclick,this);
            this.user_grid.addEventHandler("oncelldblclick",this.Grid00_oncelldblclick,this);
        };
        this.loadIncludeScript("cmmDeptPopup.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
