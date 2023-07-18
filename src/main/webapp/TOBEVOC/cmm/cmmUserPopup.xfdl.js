(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("cmmUserPopup");
            this.set_titletext("사원 조회");
            if (Form == this.constructor)
            {
                this._setFormPosition(330,400);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsUser", this);
            obj._setContents("<ColumnInfo><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"POS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDept", this);
            obj._setContents("<ColumnInfo><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"UP_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"LEVEL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPos", this);
            obj._setContents("<ColumnInfo><Column id=\"POS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"POS_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"POS_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("title_stat","10","10","107","18",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("사원 조회");
            obj.set_cssclass("sta_WF_FrmTitle");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","9","40","313","50",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_cssclass("sta_WF_box01");
            this.addChild(obj.name, obj);

            obj = new Static("sub_stat","4","8","58","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_LabelTxt");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("search_edit","57","9","249","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_select",null,"5","65","30","7",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_basic02");
            this.addChild(obj.name, obj);

            obj = new Grid("user_grid","7","99","315","292",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_binddataset("dsUser");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"87\"/><Column size=\"92\"/><Column size=\"93\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"NO\"/><Cell col=\"1\" text=\"이름\"/><Cell col=\"2\" text=\"부서\"/><Cell col=\"3\" text=\"직위\"/></Band><Band id=\"body\"><Cell text=\"expr:dataset.rowcount - rowidx\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:NAME\"/><Cell col=\"2\" displaytype=\"combotext\" combodataset=\"dsDept\" combocodecol=\"DEPT_CD\" combodatacol=\"DEPT_NAME\" text=\"bind:DEPT_CODE\"/><Cell col=\"3\" text=\"bind:POS_CODE\" displaytype=\"combotext\" combodataset=\"dsPos\" combocodecol=\"POS_CD\" combodatacol=\"POS_NAME\"/></Band></Format></Formats>");
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
        this.registerScript("cmmUserPopup.xfdl", function() {
        /************************************************************************************************
        * FORM 변수 선언 영역
        ************************************************************************************************/

        /************************************************************************************************
        * FORM EVENT 영역(onload, onbeforeclose)
        ************************************************************************************************/

        this.cmmUserPopup_onload = function(obj,e)
        {
        	var sParam1 = this.parent.pStr1;
        	this.selectUser(sParam1);

        	var aa = "안녕";
        };

        /************************************************************************************************
        * 버튼 영역
        ************************************************************************************************/
        /* 조회 버튼 */
        this.btn_select_onclick = function(obj,e)
        {
        	var sParam1 = this.Div00.form.search_edit.text;
        	this.selectUser(sParam1);
        };

        /************************************************************************************************
        * TRANSACTION 영역
        ************************************************************************************************/
        /* selectUser */
        this.selectUser = function(sParam1){
        	this.dsSearch.setColumn(0, "NAME",sParam1);
        	this.dsSearch.setColumn(0, "DEPT_CODE",this.parent.deptCode);

        	var strSvcId    = "selectUser";
        	var strSvcUrl   = "svcUrl::selectUser.do";
        	var inData      = "dsSearch=dsSearch";
        	var outData     = "dsUser=dsUser dsPos=dsPos dsDept=dsDept";
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
        	var sCode = this.dsUser.getColumn(e.row, "NAME")+":"+this.dsUser.getColumn(e.row, "USER_ID")+":"+this.dsUser.getColumn(e.row, "DEPT_CODE");
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
        this.loadIncludeScript("cmmUserPopup.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
