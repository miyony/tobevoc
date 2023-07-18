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
            this.set_titletext("담당자변경요청");
            if (Form == this.constructor)
            {
                this._setFormPosition(330,400);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsUser", this);
            obj._setContents("<ColumnInfo><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"POS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"POS_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsChageDetail", this);
            obj._setContents("<ColumnInfo><Column id=\"HISTORY_STAT\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_CHRG_USER\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_CNTN\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DTTM\" type=\"STRING\" size=\"256\"/><Column id=\"CHRG_USER\" type=\"STRING\" size=\"256\"/><Column id=\"VOC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"VOC_STAT\" type=\"STRING\" size=\"256\"/><Column id=\"MEMO\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("title_stat","10","10","114","18",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("담당자변경요청");
            obj.set_cssclass("sta_WF_FrmTitle");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","9","40","313","50",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_cssclass("sta_WF_box01");
            this.addChild(obj.name, obj);

            obj = new Static("sub_stat","4","8","88","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("담당자");
            obj.set_cssclass("sta_WF_LabelTxt");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("insert_btn",null,"5","65","30","7",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("요청");
            obj.set_cssclass("btn_WF_basic02");
            this.addChild(obj.name, obj);

            obj = new Combo("chrg_user_combo","98","50","198","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_innerdataset("dsUser");
            obj.set_codecolumn("USER_ID");
            obj.set_datacolumn("NAME");
            obj.set_displaynulltext("담당자를 선택해주세요.");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new TextArea("detail_textarea","10","126","310","264",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new Static("sub_stat1","10","79","114","50",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("요청상세사유");
            obj.set_cssclass("sta_WF_SubtitleDown");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",330,400,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","detail_textarea","value","dsChageDetail","MEMO");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("cmmChangeChrgUser.xfdl", function() {

        /************************************************************************************************
        * FORM 변수 선언 영역
        ************************************************************************************************/



        /************************************************************************************************
        * FORM EVENT 영역(onload, onbeforeclose)
        ************************************************************************************************/
        this.cmmUserPopup_onload = function(obj,e)
        {
        	this.selectUser();
        };


        /************************************************************************************************
        * 버튼 영역
        ************************************************************************************************/

        /* 요청버튼 */
        this.insert_btn_onclick = function(obj,e)
        {

        	if(this.confirm("담당자변경 요청 하시겠습니까?")){
        		if( this.parent.chrgUserId == this.chrg_user_combo.value){
        			alert("본인 외의 다른 담당자를 선택해주세요.");

        		}else{
        			this.dsChageDetail.setColumn(0, "VOC_ID", this.parent.vocId	);
        			this.dsChageDetail.setColumn(0, "HISTORY_STAT", "2");
        			this.dsChageDetail.setColumn(0, "VOC_STAT", "2");
        			this.dsChageDetail.setColumn(0, "REG_DTTM", this.gfnGetDate());
        			this.dsChageDetail.setColumn(0, "CHRG_USER", this.parent.chrgUserId);
        			this.dsChageDetail.setColumn(0, "REQ_CHRG_USER", this.chrg_user_combo.value);
        			this.dsChageDetail.setColumn(0, "REQ_CNTN", "담당자 변경요청하였습니다.");

        			var strSvcId    = "changeChrgUser";
        			var strSvcUrl   = "svcUrl::changeChrgUser.do";
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
        	}
        };

        /************************************************************************************************
        * TRANSACTION 영역
        ************************************************************************************************/
        this.selectUser = function(){

        	this.dsSearch.setColumn(0, "DEPT_CODE","0106");

        	var strSvcId    = "selectUser";
        	var strSvcUrl   = "svcUrl::selectUser.do";
        	var inData      = "dsSearch=dsSearch";
        	var outData     = "dsUser=dsUser";
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
        	case "changeChrgUser":
        		if(errorCode == -1){
        			alert(errorMsg);
        		}else{
        			alert("담당자 변경 요청을 하였습니다");
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
            this.insert_btn.addEventHandler("onclick",this.insert_btn_onclick,this);
            this.chrg_user_combo.addEventHandler("canitemchange",this.Combo00_canitemchange,this);
        };
        this.loadIncludeScript("cmmChangeChrgUser.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
