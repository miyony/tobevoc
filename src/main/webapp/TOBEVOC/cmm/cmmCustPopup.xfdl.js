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
            this.set_titletext("고객 조회");
            if (Form == this.constructor)
            {
                this._setFormPosition(330,400);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCust", this);
            obj._setContents("<ColumnInfo><Column id=\"CUST_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"COMPANY\" type=\"STRING\" size=\"256\"/><Column id=\"JOB_POSITION\" type=\"STRING\" size=\"256\"/><Column id=\"EMAIL\" type=\"STRING\" size=\"256\"/><Column id=\"PHONE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CUST_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCustType", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">CUST_ID</Col><Col id=\"CODE_NAME\">ID</Col></Row><Row><Col id=\"CODE\">CUST_NAME</Col><Col id=\"CODE_NAME\">성함</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("title_stat","10","10","107","18",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("고객 조회");
            obj.set_cssclass("sta_WF_FrmTitle");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","9","40","313","50",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_cssclass("sta_WF_box01");
            this.addChild(obj.name, obj);

            obj = new Edit("search_edit","111","9","194","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_select",null,"5","65","30","7",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_basic02");
            this.addChild(obj.name, obj);

            obj = new Grid("dept_grid","7","99","315","292",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_binddataset("dsCust");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"42\"/><Column size=\"100\"/><Column size=\"113\"/><Column size=\"144\"/><Column size=\"117\"/><Column size=\"80\"/><Column size=\"135\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"NO\"/><Cell col=\"1\" text=\"ID\"/><Cell col=\"2\" text=\"성함\"/><Cell col=\"3\" text=\"소속/기관\"/><Cell col=\"4\" text=\"직위\"/><Cell col=\"5\" text=\"이메일\"/><Cell col=\"6\" text=\"전화번호\"/></Band><Band id=\"body\"><Cell text=\"expr:dataset.rowcount - rowidx\"/><Cell col=\"1\" text=\"bind:CUST_ID\"/><Cell col=\"2\" text=\"bind:CUST_NAME\"/><Cell col=\"3\" text=\"bind:COMPANY\"/><Cell col=\"4\" text=\"bind:JOB_POSITION\"/><Cell col=\"5\" text=\"bind:EMAIL\"/><Cell col=\"6\" text=\"bind:PHONE\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Combo("dept_combo","14","50","99","29",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_innerdataset("dsCustType");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NAME");
            obj.set_text("Combo00");
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
        this.registerScript("cmmCustPopup.xfdl", function() {
        /************************************************************************************************
        * FORM 변수 선언 영역
        ************************************************************************************************/


        /************************************************************************************************
        * FORM EVENT 영역(onload, onbeforeclose)
        ************************************************************************************************/

        this.cmmUserPopup_onload = function(obj,e)
        {
        	var sParam1 = this.parent.pStr1;
        	var type = this.parent.pStr2;

        	this.dept_combo.set_value(type);

        	this.selectCust(type, sParam1);

        };

        /************************************************************************************************
        * 버튼 영역
        ************************************************************************************************/
        /* 조회 버튼 */
        this.btn_select_onclick = function(obj,e)
        {
        	var sParam1 = this.Div00.form.search_edit.text;

        	if(this.dept_combo.value == "CUST_ID"){
        		this.selectCust("CUST_ID", sParam1);
        	}else{
        		this.selectCust("CUST_NAME", sParam1);
        	}
        };

        /************************************************************************************************
        * TRANSACTION 영역
        ************************************************************************************************/
        /* selectCust */
        this.selectCust = function(type,sParam1){

        	this.dsSearch.setColumn(0, type, sParam1);

        	var strSvcId    = "selectCust";
        	var strSvcUrl   = "svcUrl::selectCust.do";
        	var inData      = "dsSearch=dsSearch";
        	var outData     = "dsCust=dsCust";
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
        /* grid 더블클릭 시 event*/
        this.Grid00_oncelldblclick = function(obj,e)
        {
        	var sCode = this.dsCust.getColumn(e.row, "CUST_ID")+":"+this.dsCust.getColumn(e.row, "CUST_NAME")+":"+this.dsCust.getColumn(e.row, "PHONE")+":"+this.dsCust.getColumn(e.row, "EMAIL")+":"+this.dsCust.getColumn(e.row, "COMPANY")+":"+this.dsCust.getColumn(e.row, "JOB_POSITION");
        	this.close(sCode);
        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.cmmUserPopup_onload,this);
            this.title_stat.addEventHandler("onclick",this.Static01_onclick,this);
            this.btn_select.addEventHandler("onclick",this.btn_select_onclick,this);
            this.dept_grid.addEventHandler("oncelldblclick",this.Grid00_oncelldblclick,this);
        };
        this.loadIncludeScript("cmmCustPopup.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
