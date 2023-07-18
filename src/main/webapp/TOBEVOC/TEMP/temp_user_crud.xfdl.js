(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("temp_user_crud");
            this.set_titletext("사용자 관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1050,770);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsUser", this);
            obj._setContents("<ColumnInfo><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PASSWORD\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"HIRE_DTTM\" type=\"STRING\" size=\"256\"/><Column id=\"RETIRE_DTTM\" type=\"STRING\" size=\"256\"/><Column id=\"GENDER\" type=\"STRING\" size=\"256\"/><Column id=\"POS_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"MEMO\" type=\"STRING\" size=\"256\"/><Column id=\"SALARY\" type=\"STRING\" size=\"256\"/><Column id=\"EMAIL\" type=\"STRING\" size=\"256\"/><Column id=\"PHONE_NO\" type=\"STRING\" size=\"256\"/><Column id=\"BIRTH_DTTM\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NO\" type=\"STRING\" size=\"256\"/><Column id=\"RETIRE_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDept", this);
            obj._setContents("<ColumnInfo><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"UP_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"LEVEL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPos", this);
            obj._setContents("<ColumnInfo><Column id=\"POS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"POS_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","0","0","5","720",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("W10");
            obj.set_visible("false");
            obj.set_background("pink");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","1040","0","10","720",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("W10");
            obj.set_visible("false");
            obj.set_background("pink");
            this.addChild(obj.name, obj);

            obj = new Static("title_stat","10","10","150","19",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("사용자 관리");
            obj.set_cssclass("sta_WF_FrmTitle");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"440","65","30","5",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_basic01");
            this.addChild(obj.name, obj);

            obj = new Button("btn_delete",null,"440","65","30","150",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("퇴사");
            obj.set_font("13px/normal \"Verdana\",\"Malgun Gothic\"");
            obj.set_cssclass("btn_WF_basic01");
            this.addChild(obj.name, obj);

            obj = new Static("sub_stat3","10","426","89","50",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("사용자정보");
            obj.set_cssclass("sta_WF_SubtitleDown");
            this.addChild(obj.name, obj);

            obj = new Static("sub_stat11","522","475","120","42",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("생년월일");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.addChild(obj.name, obj);

            obj = new Static("sub_stat25","641","516","398","42",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("");
            obj.set_cssclass("sta_WF_DetailArea");
            this.addChild(obj.name, obj);

            obj = new Static("sub_stat29","641","680","398","83",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("");
            obj.set_cssclass("sta_WF_DetailArea");
            this.addChild(obj.name, obj);

            obj = new Static("sub_stat16","522","680","120","83",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("메모");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.addChild(obj.name, obj);

            obj = new Static("sub_stat13","522","557","120","42",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("연봉");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.addChild(obj.name, obj);

            obj = new Static("sub_stat15","522","639","120","42",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("E-mail");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.addChild(obj.name, obj);

            obj = new Static("sub_stat12","522","516","120","42",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("비밀번호");
            obj.set_cssclass("sta_WF_DetailEssential");
            this.addChild(obj.name, obj);

            obj = new Static("sub_stat24","641","475","398","42",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("");
            obj.set_cssclass("sta_WF_DetailArea");
            this.addChild(obj.name, obj);

            obj = new Calendar("birth_cal","648","481","260","30",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            this.addChild(obj.name, obj);

            obj = new Static("sub_stat26","641","557","398","42",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("");
            obj.set_cssclass("sta_WF_DetailArea");
            this.addChild(obj.name, obj);

            obj = new Edit("salary_edit","648","563","260","30",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            this.addChild(obj.name, obj);

            obj = new TextArea("memo_textarea","648","687","260","70",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            this.addChild(obj.name, obj);

            obj = new Static("sub_stat6","6","557","120","42",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("성별");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.addChild(obj.name, obj);

            obj = new Static("sub_stat4","6","475","120","42",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_DetailEssential");
            this.addChild(obj.name, obj);

            obj = new Static("sub_stat28","641","639","398","42",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("");
            obj.set_cssclass("sta_WF_DetailArea");
            this.addChild(obj.name, obj);

            obj = new Static("sub_stat19","125","557","398","42",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("");
            obj.set_cssclass("sta_WF_DetailArea");
            this.addChild(obj.name, obj);

            obj = new Radio("gender_radio","133","563","260","30",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_rowcount("1");
            var gender_radio_innerdataset = new nexacro.NormalDataset("gender_radio_innerdataset", obj);
            gender_radio_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">M</Col><Col id=\"datacolumn\">남자</Col></Row><Row><Col id=\"codecolumn\">W</Col><Col id=\"datacolumn\">여자</Col></Row></Rows>");
            obj.set_innerdataset(gender_radio_innerdataset);
            obj.set_text("");
            obj.set_value("");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("sub_stat22","125","680","398","42",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("");
            obj.set_cssclass("sta_WF_DetailArea");
            this.addChild(obj.name, obj);

            obj = new Static("sub_stat14","522","598","120","42",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("직급");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.addChild(obj.name, obj);

            obj = new Static("sub_stat5","6","516","120","42",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("아이디");
            obj.set_cssclass("sta_WF_DetailEssential");
            this.addChild(obj.name, obj);

            obj = new Static("sub_stat8","6","639","120","42",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("전화번호");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.addChild(obj.name, obj);

            obj = new Static("sub_stat17","125","475","398","42",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("");
            obj.set_cssclass("sta_WF_DetailArea");
            this.addChild(obj.name, obj);

            obj = new Static("sub_stat18","125","516","398","42",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("");
            obj.set_cssclass("sta_WF_DetailArea");
            this.addChild(obj.name, obj);

            obj = new Edit("name_edit","132","481","260","30",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            this.addChild(obj.name, obj);

            obj = new Static("sub_stat9","6","680","120","42",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("입사일자");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.addChild(obj.name, obj);

            obj = new Edit("email_edit","647","645","260","30",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            this.addChild(obj.name, obj);

            obj = new Calendar("hire_cal","131","686","260","30",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            this.addChild(obj.name, obj);

            obj = new Static("sub_stat27","641","598","398","42",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("");
            obj.set_cssclass("sta_WF_DetailArea");
            this.addChild(obj.name, obj);

            obj = new Static("sub_stat21","125","639","398","42",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("");
            obj.set_cssclass("sta_WF_DetailArea");
            this.addChild(obj.name, obj);

            obj = new Edit("phone_edit","131","645","260","30",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            this.addChild(obj.name, obj);

            obj = new Combo("pos_combo","647","603","260","30",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_innerdataset("dsPos");
            obj.set_codecolumn("POS_CD");
            obj.set_datacolumn("POS_NAME");
            obj.set_visible("true");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","8","40","1031","50",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_text("");
            obj.set_cssclass("sta_WF_box01");
            this.addChild(obj.name, obj);

            obj = new Static("sub_stat","28","9","58","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("부서");
            obj.set_cssclass("sta_WF_LabelTxt");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sub_stat1","594","9","58","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_LabelTxt");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("search_dept_edit","95","9","260","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("search_name_btn","924","9","31","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_inquiry");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("search_name_edit","665","9","260","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            this.Div00.addChild(obj.name, obj);

            obj = new Grid("user_grid","6","135",null,"295","10",null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_binddataset("dsUser");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\" band=\"left\"/><Column size=\"130\"/><Column size=\"130\"/><Column size=\"130\"/><Column size=\"130\"/><Column size=\"130\"/><Column size=\"318\"/></Columns><Rows><Row size=\"26\" band=\"head\"/><Row size=\"29\"/></Rows><Band id=\"head\"><Cell text=\"NO\"/><Cell col=\"1\" text=\"아이디\"/><Cell col=\"2\" text=\"이름\"/><Cell col=\"3\" text=\"부서\"/><Cell col=\"4\" text=\"입사일\"/><Cell col=\"5\" text=\"직급\"/><Cell col=\"6\" text=\"메일\"/></Band><Band id=\"body\"><Cell text=\"expr:dataset.rowcount - rowidx\"/><Cell col=\"1\" text=\"bind:USER_ID\"/><Cell col=\"2\" text=\"bind:NAME\"/><Cell col=\"3\" text=\"bind:DEPT_CODE\" combodataset=\"dsDept\" combocodecol=\"DEPT_CD\" combodatacol=\"DEPT_NAME\" displaytype=\"combotext\" edittype=\"none\"/><Cell col=\"4\" text=\"bind:HIRE_DTTM\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"5\" text=\"bind:POS_CODE\" combodataset=\"dsPos\" combocodecol=\"POS_CD\" combodatacol=\"POS_NAME\" displaytype=\"combotext\"/><Cell col=\"6\" text=\"bind:EMAIL\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("sub_stat2","10","88","74","50",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_text("조회결과");
            obj.set_cssclass("sta_WF_SubtitleDown");
            this.addChild(obj.name, obj);

            obj = new Button("search_dept_btn","362","49","31","30",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_cssclass("btn_WF_inquiry");
            this.addChild(obj.name, obj);

            obj = new Edit("pw_edit","648","522","260","30",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            this.addChild(obj.name, obj);

            obj = new Static("sub_stat7","6","598","120","42",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_text("부서");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.addChild(obj.name, obj);

            obj = new Static("sub_stat20","125","598","398","42",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_text("");
            obj.set_cssclass("sta_WF_DetailArea");
            this.addChild(obj.name, obj);

            obj = new Combo("dept_combo","131","603","260","30",null,null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_innerdataset("dsDept");
            obj.set_codecolumn("DEPT_CD");
            obj.set_datacolumn("DEPT_NAME");
            obj.set_visible("true");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Static("sub_stat23","125","721","398","42",null,null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_text("");
            obj.set_cssclass("sta_WF_DetailArea");
            this.addChild(obj.name, obj);

            obj = new Static("sub_stat10","6","721","120","42",null,null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_text("퇴사일자");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.addChild(obj.name, obj);

            obj = new Calendar("retire_cal","131","728","260","30",null,null,null,null,null,null,this);
            obj.set_taborder("47");
            this.addChild(obj.name, obj);

            obj = new Edit("id_edit","132","522","260","30",null,null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_visible("true");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_insert",null,"440","65","30","77",null,null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_basic01");
            this.addChild(obj.name, obj);

            obj = new Button("search_btn",null,"5","65","30","5",null,null,null,null,null,this);
            obj.set_taborder("50");
            obj.set_text("검색");
            obj.set_cssclass("btn_WF_basic02");
            this.addChild(obj.name, obj);

            obj = new Edit("dept_code_edit","1108","25","140","20",null,null,null,null,null,null,this);
            obj.set_taborder("51");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1050,770,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","name_edit","value","dsUser","NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","id_edit","value","dsUser","USER_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","birth_cal","value","dsUser","BIRTH_DTTM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","pw_edit","value","dsUser","PASSWORD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","salary_edit","value","dsUser","SALARY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","dept_combo","value","dsUser","DEPT_CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","pos_combo","value","dsUser","POS_CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","phone_edit","value","dsUser","PHONE_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","email_edit","value","dsUser","EMAIL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","memo_textarea","value","dsUser","MEMO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","hire_cal","value","dsUser","HIRE_DTTM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","retire_cal","value","dsUser","RETIRE_DTTM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","gender_radio","value","dsUser","GENDER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","dept_combo","acceptvaluetype","dsDept","DEPT_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","pos_combo","text","dsPos","POS_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("temp_user_crud.xfdl", function() {
        /************************************************************************************************
        * FORM 변수 선언 영역
        ************************************************************************************************/
        this.objApp = nexacro.getApplication();

        /************************************************************************************************
        * FORM EVENT 영역(onload, onbeforeclose)
        ************************************************************************************************/
        this.temp_user_crud_onload = function(obj,e)
        {
        	this.seletUser();
        };

        /************************************************************************************************
        * 버튼 영역
        ************************************************************************************************/
        /* 추가 버튼 */
        this.btn_insert_onclick = function(obj,e){
        	var nRow = this.dsUser.addRow(); // 그리드에 row 추가!
        	this.id_edit.set_enable("true");
        	this.btn_delete.set_text("줄삭제");

        	this.dsUser.setColumn(nRow, "HIRE_DTTM", this.gfnGetDate());
        };

        /* 검색 버튼*/
        this.btn_save01_onclick = function(obj,e){
        	this.seletUser();

        };

        /* 퇴사, 줄삭제 버튼 */
        this.btn_del00_onclick = function(obj,e)
        {

        	var getText =  this.btn_delete.text;

        	if(getText == "줄삭제"){
        		if(!this.dsUser.getColumn(this.dsUser.rowposition, "USER_NO")){
        			this.dsUser.deleteRow(this.dsUser.rowposition);
        		}
        	}else{
        		this.deleteUser();
        	}
        };

        /* 저장 버튼 */
        this.btn_save_onclick = function(obj,e){
        	this.saveUser();
        };


        /************************************************************************************************
        * TRANSACTION 영역
        ************************************************************************************************/
        /* user 검색 */
        this.seletUser = function(){

        	var name = this.Div00.form.search_name_edit.text;
        	var deptCode = this.dept_code_edit.text;

        	this.dsSearch.setColumn(0, "DEPT_CODE",deptCode);
        	this.dsSearch.setColumn(0, "NAME",name);

        	//trace(this.dsSearch.saveXML());

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

        /* saveUser */
        this.saveUser = function(){
        	//trace(this.dsUser.saveXML());
        	var strSvcId    = "saveUser";
        	var strSvcUrl   = "svcUrl::saveUser.do";
        	var inData      = "dsUser=dsUser:u";
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

        /* deleteUser */
        this.deleteUser = function(){

        	var deleteUserNo = this.dsUser.getColumn(this.dsUser.rowposition, "USER_NO")

        	var strSvcId    = "deleteUser";
        	var strSvcUrl   = "svcUrl::deleteUser.do";
        	var inData      = "";
        	var outData     = "";
        	var strArg      = "deleteUserNo="+deleteUserNo;
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

        	case "saveUser":
        		alert("등록되었습니다");

        		this.seletUser();

        		break;

        	case "selectUser":

        		break;

        	case "deleteUser":
        		alert("해당 직원을 퇴사 처리하였습니다");

        		this.seletUser();

        		break;
        	}

        };


        /************************************************************************************************
        * 사용자 FUNCTION 영역
        ************************************************************************************************/

        this.user_grid_oncellclick = function(obj,e){

        	//trace(this.dsUser.saveXML());
        	var userYn = this.dsUser.getColumn(e.row, "USER_NO");

        	if(!userYn){
        		this.btn_delete.set_text("줄삭제");
        	}else{
        		this.btn_delete.set_text("퇴사");
        	}


        };

        this.user_grid_oncellposchanged = function(obj,e)
        {
        	//trace(this.dsUser.saveXML());
        	var userYn = this.dsUser.getColumn(e.row, "USER_NO");

        	if(!userYn){
        		this.btn_delete.set_text("줄삭제");
        	}else{
        		this.btn_delete.set_text("퇴사");
        	}
        };

        /* 사원검색 popup */
        this.Button00_onclick = function(obj,e){
        	var objCF = new ChildFrame();

        	objCF.init("userSearch", 0, 0, 300, 400, null, null, "cmm::cmmUserPopup.xfdl"); // 초기값 세팅


        	objCF.set_showtitlebar(true);
        	objCF.set_openalign("center middle"); // childFrame의 위치를 지정하는 속성, 중간에 화면을 위치시킴
        	objCF.set_showstatusbar(false);
        	var objUser = { pStr1 : this.Div00.form.search_name_edit.value};

        	objCF.showModal( this.getOwnerFrame(), objUser, this, "fn_popupSearch" );
        };

        /* 부서검색 */
        this.search_dept_btn_onclick = function(obj,e){

        	var objCF = new ChildFrame();

        	objCF.init("deptSearch", 0, 0, 300, 400, null, null, "cmm::cmmDeptPopup.xfdl"); // 초기값 세팅


        	objCF.set_showtitlebar(true);
        	objCF.set_openalign("center middle"); // childFrame의 위치를 지정하는 속성, 중간에 화면을 위치시킴
        	objCF.set_showstatusbar(false);
        	var objDept = { pStr1 : this.Div00.form.search_dept_edit.value};

        	objCF.showModal( this.getOwnerFrame(), objDept, this, "fn_popupSearch" );

        };


        this.fn_popupSearch = function(sPopId, sRtn){

        	this.dept_code_edit.set_value(""); // deptCode 초기화
        	if(sPopId == "userSearch"){
        		if( sRtn.length> 0 ){
        			var arrRtn = sRtn.split(":");
        			this.Div00.form.search_name_edit.set_value(arrRtn[0]); // edit에 값 세팅
        		}

        	}else if(sPopId == "deptSearch"){
        		alert(sRtn);
        		if( sRtn.length> 0 ){
        			var arrRtn = sRtn.split(":");
        			this.Div00.form.search_dept_edit.set_value(arrRtn[0]);// edit에 deptName 값 세팅
        			this.dept_code_edit.set_value(arrRtn[1]); // edit에 deptCode 값 세팅
        		}
        	}
        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.temp_user_crud_onload,this);
            this.title_stat.addEventHandler("onclick",this.Static01_onclick,this);
            this.btn_save.addEventHandler("onclick",this.btn_save_onclick,this);
            this.btn_delete.addEventHandler("onclick",this.btn_del00_onclick,this);
            this.gender_radio.addEventHandler("onitemchanged",this.Radio00_onitemchanged,this);
            this.Div00.form.search_name_btn.addEventHandler("onclick",this.Button00_onclick,this);
            this.user_grid.addEventHandler("oncellclick",this.user_grid_oncellclick,this);
            this.user_grid.addEventHandler("oncellposchanged",this.user_grid_oncellposchanged,this);
            this.search_dept_btn.addEventHandler("onclick",this.search_dept_btn_onclick,this);
            this.btn_insert.addEventHandler("onclick",this.btn_insert_onclick,this);
            this.search_btn.addEventHandler("onclick",this.btn_save01_onclick,this);
        };
        this.loadIncludeScript("temp_user_crud.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
