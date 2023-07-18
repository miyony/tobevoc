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
            this.set_titletext("담당자변경상세보기");
            if (Form == this.constructor)
            {
                this._setFormPosition(330,450);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsUser", this);
            obj._setContents("<ColumnInfo><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"POS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"VOC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"HISTORY_STAT\" type=\"STRING\" size=\"256\"/><Column id=\"CHRG_USER\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_CHRG_USER\" type=\"STRING\" size=\"256\"/><Column id=\"END_DTTM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsChageDetail", this);
            obj._setContents("<ColumnInfo><Column id=\"HISTORY_STAT\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_CHRG_USER\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_CNTN\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DTTM\" type=\"STRING\" size=\"256\"/><Column id=\"CHRG_USER\" type=\"STRING\" size=\"256\"/><Column id=\"VOC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"VOC_STAT\" type=\"STRING\" size=\"256\"/><Column id=\"CHRG_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"END_DTTM\" type=\"STRING\" size=\"256\"/><Column id=\"MEMO\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("title_stat","10","10","174","18",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("담당자변경 상세보기");
            obj.set_cssclass("sta_WF_FrmTitle");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","9","40","313","50",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_cssclass("sta_WF_box01");
            this.addChild(obj.name, obj);

            obj = new Static("sub_stat","4","8","108","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("요청 담당자");
            obj.set_cssclass("sta_WF_LabelTxt");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("user_name_edit","104","9","194","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_enable("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_save","85","400","65","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("승인");
            this.addChild(obj.name, obj);

            obj = new TextArea("detail_textarea","10","126","310","264",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Static("sub_stat1","10","79","114","50",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("요청상세사유");
            obj.set_cssclass("sta_WF_SubtitleDown");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save00",null,"400","65","30","85",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("반려");
            this.addChild(obj.name, obj);

            obj = new Edit("user_id_edit","348","21","140","20",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",330,450,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","detail_textarea","value","dsChageDetail","MEMO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","user_id_edit","value","dsChageDetail","CHRG_USER_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","Div00.form.user_name_edit","value","dsChageDetail","CHRG_USER");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("cmmChangeChrgUserDetail.xfdl", function() {
        /************************************************************************************************
        * FORM 변수 선언 영역
        ************************************************************************************************/


        /************************************************************************************************
        * FORM EVENT 영역(onload, onbeforeclose)
        ************************************************************************************************/
        this.cmmUserPopup_onload = function(obj,e)
        {
        	this.detailHistory();
        };


        /************************************************************************************************
        * 버튼 영역
        ************************************************************************************************/
        /* 승인버튼 */
        this.btn_save_onclick = function(obj,e)
        {

        	if(this.confirm("승인 하시겠습니까?")){
        		this.dsChageDetail.setColumn(0, "VOC_ID", this.parent.vocId);
        		this.dsChageDetail.addColumn("APV_STAT", "STRING");
        		this.dsChageDetail.setColumn(0, "APV_STAT", "승인");
        		this.dsChageDetail.setColumn(0, "END_DTTM", this.gfnGetDate());
        		//alert(this.dsChageDetail.saveXML());

        		this.updateHistory();
        	}
        };


        /*반려 버튼*/
        this.btn_save00_onclick = function(obj,e)
        {
        	if(this.confirm("반려 하시겠습니까?")){
        		this.dsChageDetail.setColumn(0, "VOC_ID", this.parent.vocId	);
        		this.dsChageDetail.addColumn("APV_STAT", "STRING");
        		this.dsChageDetail.setColumn(0, "APV_STAT", "반려");
        		this.dsChageDetail.setColumn(0, "END_DTTM", this.gfnGetDate());

        		this.updateHistory();
        	}
        };



        /************************************************************************************************
        * TRANSACTION 영역
        ************************************************************************************************/
        /* detailHistory */
        this.detailHistory = function(){

        	this.dsSearch.setColumn(0, "VOC_ID", this.parent.vocId);
        	this.dsSearch.setColumn(0, "HISTORY_STAT", "2");
        	this.dsSearch.setColumn(0, "CHRG_USER", this.parent.chrgUserId);



        	var strSvcId    = "detailHistory";
        	var strSvcUrl   = "svcUrl::detailHistory.do";
        	var inData      = "dsSearch=dsSearch";
        	var outData     = "dsChageDetail=dsChageDetail";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.transaction(strSvcId
        		,strSvcUrl
        		,inData
        		,outData
        		,strArg
        		,callBackFnc);

        }


        /* updateHistory */
        this.updateHistory = function(){
        	var strSvcId    = "updateHistory";
        	var strSvcUrl   = "svcUrl::updateHistory.do";
        	var inData      = "dsChageDetail=dsChageDetail";
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

        this.fnCallback = function(svcID, errorCode, errorMsg){
        	switch(svcID) {

        	case "updateHistory":
        		if(errorCode == -1){
        			alert(errorMsg);

        		}else if(this.dsChageDetail.getColumn(0, "APV_STAT") == "승인"){
        			alert("승인하였습니다.");
        			this.close();

        		}else if(this.dsChageDetail.getColumn(0, "APV_STAT") == "반려"){
        			alert("반려하였습니다.");
        			this.close();
        		}

        		break;
        	}
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.cmmUserPopup_onload,this);
            this.title_stat.addEventHandler("onclick",this.Static01_onclick,this);
            this.btn_save.addEventHandler("onclick",this.btn_save_onclick,this);
            this.btn_save00.addEventHandler("onclick",this.btn_save00_onclick,this);
        };
        this.loadIncludeScript("cmmChangeChrgUserDetail.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
