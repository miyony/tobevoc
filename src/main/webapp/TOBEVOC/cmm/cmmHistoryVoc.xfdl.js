(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("cmmHistoryVoc");
            this.set_titletext("VOC 내역조회");
            if (Form == this.constructor)
            {
                this._setFormPosition(620,400);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CUST_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_ID\" type=\"STRING\" size=\"256\"/><Column id=\"VOC_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsVocHistory", this);
            obj._setContents("<ColumnInfo><Column id=\"VOC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"HISTORY_STAT\" type=\"STRING\" size=\"256\"/><Column id=\"CHRG_USER\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_CHRG_USER\" type=\"STRING\" size=\"256\"/><Column id=\"END_DTTM\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DTTM\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_CNTN\" type=\"STRING\" size=\"256\"/><Column id=\"MEMO\" type=\"STRING\" size=\"256\"/><Column id=\"CHRG_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_CHRG_USER_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHistoryStat", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("title_stat","10","10","147","18",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("VOC 변경 내역조회");
            obj.set_cssclass("sta_WF_FrmTitle");
            this.addChild(obj.name, obj);

            obj = new Grid("dept_grid","5","38","609","352",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("dsVocHistory");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"37\"/><Column size=\"143\"/><Column size=\"78\"/><Column size=\"78\"/><Column size=\"90\"/><Column size=\"280\"/><Column size=\"90\"/><Column size=\"155\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"NO\"/><Cell col=\"1\" text=\"내역 상태\"/><Cell col=\"2\" text=\"담당자\"/><Cell col=\"3\" text=\"변경 담당자\"/><Cell col=\"4\" text=\"등록일\"/><Cell col=\"5\" text=\"상세 내역\"/><Cell col=\"6\" text=\"종결일\"/><Cell col=\"7\" text=\"담당자 변경 상세사유\"/></Band><Band id=\"body\"><Cell text=\"expr:dataset.rowcount - rowidx\"/><Cell col=\"1\" text=\"bind:HISTORY_STAT\" combodataset=\"dsHistoryStat\" combocodecol=\"CODE\" combodatacol=\"CODE_NAME\" displaytype=\"combotext\"/><Cell col=\"2\" text=\"bind:CHRG_USER\"/><Cell col=\"3\" text=\"bind:REQ_CHRG_USER\"/><Cell col=\"4\" text=\"bind:REG_DTTM\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"5\" text=\"bind:REQ_CNTN\"/><Cell col=\"6\" text=\"bind:END_DTTM\" calendardateformat=\"yyyy-MM-dd\" displaytype=\"date\" calendardisplaynulltype=\"none\"/><Cell col=\"7\" text=\"bind:MEMO\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",620,400,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("cmmHistoryVoc.xfdl", function() {
        /************************************************************************************************
        * FORM 변수 선언 영역
        ************************************************************************************************/


        /************************************************************************************************
        * FORM EVENT 영역(onload, onbeforeclose)
        ************************************************************************************************/
        this.cmmHistoryVoc_onload = function(obj,e)
        {
        	var sParam1 = this.parent.vocId;
        	this.selectHistory(sParam1);

        };


        /************************************************************************************************
        * TRANSACTION 영역
        ************************************************************************************************/
        /* selectHistory */
        this.selectHistory = function(sParam1){

        	this.dsSearch.setColumn(0, "VOC_ID", sParam1);

        	var strSvcId    = "selectHistory";
        	var strSvcUrl   = "svcUrl::selectHistory.do";
        	var inData      = "dsSearch=dsSearch";
        	var outData     = "dsVocHistory=dsVocHistory dsHistoryStat=dsHistoryStat";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.transaction(strSvcId
        		,strSvcUrl
        		,inData
        		,outData
        		,strArg
        		,callBackFnc);
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.cmmHistoryVoc_onload,this);
            this.title_stat.addEventHandler("onclick",this.Static01_onclick,this);
            this.dept_grid.addEventHandler("oncelldblclick",this.Grid00_oncelldblclick,this);
        };
        this.loadIncludeScript("cmmHistoryVoc.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
