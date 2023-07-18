(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("WM_Regular_Schedule");
            this.set_titletext("정기메뉴");
            if (Form == this.constructor)
            {
                this._setFormPosition(1050,770);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_sch_date", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"JOB_ID\" type=\"STRING\" size=\"256\"/><Column id=\"JOB_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"JOB_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"CRON\" type=\"STRING\" size=\"256\"/><Column id=\"JOB_CNTN\" type=\"STRING\" size=\"256\"/><Column id=\"POPUP_NOTI_YN\" type=\"STRING\" size=\"256\"/><Column id=\"MAIL_NOTI_YN\" type=\"STRING\" size=\"256\"/><Column id=\"DEL_YN\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER\" type=\"STRING\" size=\"256\"/><Column id=\"UPDATE_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"UPDATE_USER\" type=\"STRING\" size=\"256\"/><Column id=\"DATE_CATEGORY\" type=\"STRING\" size=\"256\"/><Column id=\"SUB_CATEGORY\" type=\"STRING\" size=\"256\"/><Column id=\"BIMONTHLY_YN\" type=\"STRING\" size=\"256\"/><Column id=\"WEEK_DETAILS\" type=\"STRING\" size=\"256\"/><Column id=\"MONTH_DETAILS\" type=\"STRING\" size=\"256\"/><Column id=\"DAY_DETAILS\" type=\"STRING\" size=\"256\"/><Column id=\"COMPLATE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"BEFORE_CRON\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_year_sub", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">y1</Col><Col id=\"value\">월/일</Col></Row><Row><Col id=\"code\">y2</Col><Col id=\"value\">주/요일</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_month_sub", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">m1</Col><Col id=\"value\">일</Col></Row><Row><Col id=\"code\">m2</Col><Col id=\"value\">주/요일</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_job_date", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">year</Col><Col id=\"value\">매년</Col></Row><Row><Col id=\"code\">month</Col><Col id=\"value\">매월</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_sch_del", this);
            obj._setContents("<ColumnInfo><Column id=\"JOB_ID\" type=\"STRING\" size=\"256\"/><Column id=\"UPDATE_USER\" type=\"STRING\" size=\"256\"/><Column id=\"UPDATE_DATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static_Title","499","152","90","40",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("업무명");
            obj.set_cssclass("sta_WF_item");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit_Title","572","158","335","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_background("");
            this.addChild(obj.name, obj);

            obj = new Static("Static_Title02","499","289","90","313",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("업무내용");
            obj.set_cssclass("sta_WF_item");
            this.addChild(obj.name, obj);

            obj = new Static("Static_Title01","499","194","85","40",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("알림여부");
            obj.set_cssclass("sta_WF_item");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid_Wf_Date","6","75","467","685",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_binddataset("ds_sch_date");
            obj.set_scrollbartype("none auto");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"52\"/><Column size=\"52\"/><Column size=\"205\"/><Column size=\"135\"/></Columns><Rows><Row size=\"27\" band=\"head\"/><Row size=\"30\" band=\"head\"/><Row size=\"35\"/></Rows><Band id=\"head\"><Cell colspan=\"4\" text=\"정기 업무 리스트\" cssclass=\"Sunday2\"/><Cell row=\"1\" text=\"팝업\" background=\"#a598ef\"/><Cell row=\"1\" col=\"1\" text=\"메일\" background=\"#a598ef\"/><Cell row=\"1\" col=\"2\" text=\"스케줄\" background=\"#a598ef\"/><Cell row=\"1\" col=\"3\" text=\"제목\" background=\"#a598ef\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" border=\"\" cssclass=\"Sunday\" text=\"bind:POPUP_NOTI_YN\" checkboxtruevalue=\"Y\" checkboxfalsevalue=\"N\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" text=\"bind:MAIL_NOTI_YN\" color=\"\" expr=\"\" textAlign=\"center\" cssclass=\"Sunday\" edittype=\"checkbox\" checkboxfalsevalue=\"N\" checkboxtruevalue=\"Y\"/><Cell col=\"2\" displaytype=\"normal\" edittype=\"none\" color=\"\" text=\"bind:JOB_DATE\"/><Cell col=\"3\" text=\"bind:JOB_NAME\" edittype=\"none\" verticalAlign=\"top\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("Btn_Save",null,"5","65","30","79",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_basic01");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox_Wf_Status","572","199","90","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("TMS팝업");
            obj.set_textAlign("left");
            obj.set_border("0px none #808080");
            obj.getSetter("bottombase").set("");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_iconPosition("");
            obj.set_icon("");
            obj.set_color("#444444");
            obj.set_font("9pt Dotum");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea_Contents","572","241","335","519",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static_Title04","499","70","90","40",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("업무일정");
            obj.set_cssclass("sta_WF_item");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo_Schedule_select","572","75","163","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_codecolumn("code");
            obj.set_datacolumn("value");
            obj.set_innerdataset("ds_job_date");
            obj.set_text("매년");
            obj.set_value("year");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox_Wf_Suspended","687","199","70","30",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("메일");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            this.addChild(obj.name, obj);

            obj = new Button("Btn_Close",null,"5","65","30","6",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_basic01");
            this.addChild(obj.name, obj);

            obj = new Button("btn_add","411","47","26","26",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_cssclass("btn_WF_add");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btn_del","445","47","26","26",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_cssclass("btn_WF_delete");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo_SubSchedule_select","744","75","163","30",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_innerdataset("ds_year_sub");
            obj.set_datacolumn("value");
            obj.set_codecolumn("code");
            obj.set_text("월/일");
            obj.set_value("y1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Div("Div_Ymd","565","115","349","47",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("Div00");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit_month","85","2","105","30",null,null,null,null,null,null,this.Div_Ymd.form);
            obj.set_taborder("0");
            obj.set_background("");
            obj.set_inputtype("digit,comma");
            this.Div_Ymd.addChild(obj.name, obj);

            obj = new Edit("Edit_date","215","2","105","30",null,null,null,null,null,null,this.Div_Ymd.form);
            obj.set_taborder("1");
            obj.set_background("");
            obj.set_maxlength("2");
            obj.set_inputtype("digit");
            this.Div_Ymd.addChild(obj.name, obj);

            obj = new Static("Static_month","195","6","29","26",null,null,null,null,null,null,this.Div_Ymd.form);
            obj.set_taborder("2");
            obj.set_text("월");
            this.Div_Ymd.addChild(obj.name, obj);

            obj = new Static("Static_date","326","6","19","26",null,null,null,null,null,null,this.Div_Ymd.form);
            obj.set_taborder("3");
            obj.set_text("일");
            this.Div_Ymd.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox_Other_Month","7","1","90","30",null,null,null,null,null,null,this.Div_Ymd.form);
            obj.set_taborder("4");
            obj.set_text("격월");
            obj.set_textAlign("left");
            obj.set_border("0px none #808080");
            obj.getSetter("bottombase").set("");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_iconPosition("");
            obj.set_icon("");
            obj.set_color("#444444");
            obj.set_font("9pt Dotum");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            this.Div_Ymd.addChild(obj.name, obj);

            obj = new Combo("Combo_Other_Month","85","2","117","30",null,null,null,null,null,null,this.Div_Ymd.form);
            obj.set_taborder("5");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var Div_Ymd_form_Combo_Other_Month_innerdataset = new nexacro.NormalDataset("Div_Ymd_form_Combo_Other_Month_innerdataset", obj);
            Div_Ymd_form_Combo_Other_Month_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">odd</Col><Col id=\"datacolumn\">홀수달</Col></Row><Row><Col id=\"codecolumn\">even</Col><Col id=\"datacolumn\">짝수달</Col></Row></Rows>");
            obj.set_innerdataset(Div_Ymd_form_Combo_Other_Month_innerdataset);
            obj.set_text("홀수달");
            obj.set_value("odd");
            obj.set_index("0");
            this.Div_Ymd.addChild(obj.name, obj);

            obj = new Div("Div_week","572","116","345","39",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("Div00");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio_Week","105","-1","234","34",null,null,null,null,null,null,this.Div_week.form);
            obj.set_taborder("1");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_visible("true");
            var Div_week_form_Radio_Week_innerdataset = new nexacro.NormalDataset("Div_week_form_Radio_Week_innerdataset", obj);
            Div_week_form_Radio_Week_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">MON</Col><Col id=\"datacolumn\">월</Col></Row><Row><Col id=\"codecolumn\">TUE</Col><Col id=\"datacolumn\">화</Col></Row><Row><Col id=\"codecolumn\">WED</Col><Col id=\"datacolumn\">수</Col></Row><Row><Col id=\"datacolumn\">목</Col><Col id=\"codecolumn\">THU</Col></Row><Row><Col id=\"datacolumn\">금</Col><Col id=\"codecolumn\">FRI</Col></Row></Rows>");
            obj.set_innerdataset(Div_week_form_Radio_Week_innerdataset);
            obj.set_text("월");
            obj.set_value("MON");
            obj.set_index("0");
            this.Div_week.addChild(obj.name, obj);

            obj = new Combo("Combo_week","0","1","94","30",null,null,null,null,null,null,this.Div_week.form);
            obj.set_taborder("0");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var Div_week_form_Combo_week_innerdataset = new nexacro.NormalDataset("Div_week_form_Combo_week_innerdataset", obj);
            Div_week_form_Combo_week_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">1주차</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">2주차</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">3주차</Col></Row><Row><Col id=\"codecolumn\">4</Col><Col id=\"datacolumn\">4주차</Col></Row></Rows>");
            obj.set_innerdataset(Div_week_form_Combo_week_innerdataset);
            obj.set_text("1주차");
            obj.set_value("1");
            obj.set_index("0");
            this.Div_week.addChild(obj.name, obj);

            obj = new Div("Div_Month_Week","572","116","345","42",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo_week","0","1","94","30",null,null,null,null,null,null,this.Div_Month_Week.form);
            obj.set_taborder("0");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var Div_Month_Week_form_Combo_week_innerdataset = new nexacro.NormalDataset("Div_Month_Week_form_Combo_week_innerdataset", obj);
            Div_Month_Week_form_Combo_week_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">1주차</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">2주차</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">3주차</Col></Row><Row><Col id=\"codecolumn\">4</Col><Col id=\"datacolumn\">4주차</Col></Row></Rows>");
            obj.set_innerdataset(Div_Month_Week_form_Combo_week_innerdataset);
            obj.set_text("1주차");
            obj.set_value("1");
            obj.set_index("0");
            this.Div_Month_Week.addChild(obj.name, obj);

            obj = new Edit("Edit_month","106","1","105","30",null,null,null,null,null,null,this.Div_Month_Week.form);
            obj.set_taborder("1");
            obj.set_background("");
            obj.set_inputtype("digit,comma");
            this.Div_Month_Week.addChild(obj.name, obj);

            obj = new Static("Static_month","216","6","29","26",null,null,null,null,null,null,this.Div_Month_Week.form);
            obj.set_taborder("2");
            obj.set_text("월");
            this.Div_Month_Week.addChild(obj.name, obj);

            obj = new Combo("Combo_dayOfWeek","241","1","94","30",null,null,null,null,null,null,this.Div_Month_Week.form);
            obj.set_taborder("3");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var Div_Month_Week_form_Combo_dayOfWeek_innerdataset = new nexacro.NormalDataset("Div_Month_Week_form_Combo_dayOfWeek_innerdataset", obj);
            Div_Month_Week_form_Combo_dayOfWeek_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">MON</Col><Col id=\"datacolumn\">월요일</Col></Row><Row><Col id=\"codecolumn\">TUE</Col><Col id=\"datacolumn\">화요일</Col></Row><Row><Col id=\"codecolumn\">WED</Col><Col id=\"datacolumn\">수요일</Col></Row><Row><Col id=\"codecolumn\">THU</Col><Col id=\"datacolumn\">목요일</Col></Row><Row><Col id=\"codecolumn\">FRI</Col><Col id=\"datacolumn\">금요일</Col></Row></Rows>");
            obj.set_innerdataset(Div_Month_Week_form_Combo_dayOfWeek_innerdataset);
            obj.set_text("월요일");
            obj.set_value("MON");
            obj.set_index("0");
            this.Div_Month_Week.addChild(obj.name, obj);

            obj = new Div("Div_d","565","115","345","42",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("Div00");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static_date","326","6","19","26",null,null,null,null,null,null,this.Div_d.form);
            obj.set_taborder("0");
            obj.set_text("일");
            this.Div_d.addChild(obj.name, obj);

            obj = new Edit("Edit_date","7","2","313","30",null,null,null,null,null,null,this.Div_d.form);
            obj.set_taborder("1");
            obj.set_background("");
            obj.set_maxlength("2");
            obj.set_inputtype("digit");
            this.Div_d.addChild(obj.name, obj);

            obj = new Static("title_stat","10","10","150","19",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("정기업무");
            obj.set_cssclass("sta_WF_FrmTitle");
            this.addChild(obj.name, obj);

            obj = new Static("sub_stat1","10","28","74","50",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("정기업무");
            obj.set_cssclass("sta_WF_SubtitleDown");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div_Ymd.form
            obj = new Layout("default","",0,0,this.Div_Ymd.form,function(p){});
            this.Div_Ymd.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div_week.form
            obj = new Layout("default","",0,0,this.Div_week.form,function(p){});
            this.Div_week.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div_Month_Week.form
            obj = new Layout("default","",0,0,this.Div_Month_Week.form,function(p){});
            this.Div_Month_Week.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div_d.form
            obj = new Layout("default","",0,0,this.Div_d.form,function(p){});
            this.Div_d.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","TextArea_Contents","value","ds_sch_date","JOB_CNTN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","Edit_Title","value","ds_sch_date","JOB_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","CheckBox_Wf_Status","value","ds_sch_date","POPUP_NOTI_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","CheckBox_Wf_Suspended","value","ds_sch_date","MAIL_NOTI_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","Combo_Schedule_select","value","ds_sch_date","DATE_CATEGORY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","Combo_SubSchedule_select","value","ds_sch_date","SUB_CATEGORY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","Div_Ymd.form.CheckBox_Other_Month","value","ds_sch_date","BIMONTHLY_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","Div_Month_Week.form.Combo_dayOfWeek","value","ds_sch_date","DAY_DETAILS");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("temp_regular_schedule.xfdl", function() {
        /************************************************************************************************
        * FORM 변수 선언 영역
        ************************************************************************************************/
        this.objApp = nexacro.getApplication();

        /************************************************************************************************
        * FORM EVENT 영역(onload, onbeforeclose)
        ************************************************************************************************/
        this.WM_Regular_Schedule_onload = function(obj, e)
        {
        	this.selectRegularSch();

        }

        /************************************************************************************************
        * 버튼 영역
        ************************************************************************************************/
        /* 정기 스케줄 저장 */
        this.Btn_Save_onclick = function(obj,e)
        {
        	if(!this.fn_valCheck()){// 유효성체크
        		return;
        	}

        	this.insertRegularSch();
        };

        /* 정기 스케줄 창 닫기 */
        this.btnClose_onclick = function(obj,e)
        {
        	this.close("0");
        };

        /* 정기업무 추가 */
        this.btn_open_onclick = function(obj,e)
        {
        	var nRow = this.ds_sch_date.addRow(); // 그리드에 row 추가

        	this.ds_sch_date.setColumn(nRow, "POPUP_NOTI_YN", "N");
        	this.ds_sch_date.setColumn(nRow, "MAIL_NOTI_YN", "N");
        	this.ds_sch_date.setColumn(nRow, "BIMONTHLY_YN", "N");

        	this.fn_setting();

        };

        /* 정기업무 삭제 */
        this.btn_del_onclick = function(obj,e)
        {
        	var row = this.ds_sch_date.rowposition;
        	var jobId = this.ds_sch_date.getColumn(row, "JOB_ID");
        	if(this.confirm("정기일정을 삭제하시겠습니까?")){
        		if(jobId == "" || jobId == "undefined" || jobId == null ){
        			this.ds_sch_date.deleteRow(row);
        			this.setCategory(row, this.ds_sch_date.getColumn(row, "DATE_CATEGORY"), this.ds_sch_date.getColumn(row, "SUB_CATEGORY"));

        		}else{
        			var userId = this.objApp.gdsUserInfo.getColumn(0, "userId");
        			row = this.ds_sch_del.addRow();
        			this.ds_sch_del.setColumn(row, "UPDATE_DATE", this.objApp.gfn_Today());
        			this.ds_sch_del.setColumn(row, "UPDATE_USER", userId);
        			this.ds_sch_del.setColumn(row, "JOB_ID", jobId);
        			trace(this.ds_sch_del.saveXML());
        			this.deleteRegularSch();
        		}
        	}

        };

        /************************************************************************************************
        * TRANSACTION 영역
        ************************************************************************************************/
        this.selectRegularSch = function(){

        	var strSvcId    = "selectRegularSch";
        	var strSvcUrl   = "svcUrl::selectRegularSch.do";
        	var inData      = "";
        	var outData     = "ds_sch_date=ds_sch_date";
        	var strArg      = "complate=N";
        	var callBackFnc = "fnCallback";

        	this.transaction(strSvcId
        		,strSvcUrl
        		,inData
        		,outData
        		,strArg
        		,callBackFnc);
        }

        this.insertRegularSch = function(){

        	this.fn_insertData();

        	var strSvcId    = "insertRegularSch";
        	var strSvcUrl   = "svcUrl::insertRegularSch.do";
        	var inData      = "ds_sch_date=ds_sch_date:u";
        	var outData     = "";
        	var strArg      = "complate=N";
        	var callBackFnc = "fnCallback";

        	this.transaction(strSvcId
        	,strSvcUrl
        	,inData
        	,outData
        	,strArg
        	,callBackFnc);
        }

        this.deleteRegularSch = function(row){

        	var strSvcId    = "deleteRegularSch";
        	var strSvcUrl   = "svcUrl::deleteRegularSch.do";
        	var inData      = "ds_sch_del=ds_sch_del";
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

        	case "selectRegularSch":
        		this.fn_selectData();
        		break;

        	case "insertRegularSch":
        		alert("정기일정이 등록되었습니다");
        		this.reload();
        		break;

        	case "deleteRegularSch":
        		alert("정기 일정이 삭제되었습니다.");
        		this.reload();
        		break;

        	}
        }

        /************************************************************************************************
        * 사용자 FUNCTION 영역
        ************************************************************************************************/

        /* 일정combo 매년 매월 */
        this.Combo_Work_Category_onitemchanged = function(obj,e)
        {
        	this.schedule_init();

        	if(e.postvalue == "year"){
        		this.Combo_SubSchedule_select.set_innerdataset("ds_year_sub");
        		this.Combo_SubSchedule_select.updateToDataset();
        		this.Combo_SubSchedule_select.set_value("y1");

        		this.Div_Ymd.set_visible(true);

        	}else if(e.postvalue == "month"){
        		this.Combo_SubSchedule_select.set_innerdataset("ds_month_sub");
        		this.Combo_SubSchedule_select.updateToDataset();
        		this.Combo_SubSchedule_select.set_value("m1");

        		this.Div_d.set_visible(true);
        	}

        };

        /* 일정 서브combo 월/일, 격월/일, 주/요일 */
        this.Combo_SubSchedule_select_onitemchanged = function(obj,e)
        {
        	this.schedule_init();
        	var dateCategory = this.Combo_Schedule_select.value;
        	var subCategory = this.Combo_SubSchedule_select.value;
        	//alert(subCategory);

        	this.setCategory("N", dateCategory, e.postvalue);
        };


        /* 격월 체크박스 */
        this.Div_Ymd_CheckBox_Other_Month_onchanged = function(obj,e)
        {
        	this.Div_Ymd.form.Edit_month.set_value("");
        	if(e.postvalue == "Y"){ //격월
        		this.Div_Ymd.form.Edit_month.set_visible(false);
        		this.Div_Ymd.form.Static_month.set_visible(false);

        		this.Div_Ymd.form.Combo_Other_Month.set_visible(true);

        		this.Div_Ymd.form.CheckBox_Other_Month.set_value("odd");
        		this.Div_Ymd.form.Edit_month.set_value("odd");

        	}else if(e.postvalue == "N"){ //격월아님
        		this.Div_Ymd.form.Edit_month.set_visible(true);
        		this.Div_Ymd.form.Static_month.set_visible(true);

        		this.Div_Ymd.form.Combo_Other_Month.set_visible(false);
        	}
        };

        /* 격월 체크 시 짝수달 홀수달 */
        this.Div_Ymd_Combo_Other_Month_onitemchanged = function(obj,e)
        {
        	var month;

        	if(e.postvalue == "odd"){ //홀수 달
        		month = "odd";

        	}else if(e.postvalue == "even"){ //짝수 달
        		month = "even";
        	}
        	this.Div_Ymd.form.Edit_month.set_value(month);
        };

        /* 스케줄 init */
        this.schedule_init = function(){

        	this.Div_week.set_visible(false);
        	this.Div_Ymd.set_visible(false);
        	this.Div_Month_Week.set_visible(false);
        	this.Div_d.set_visible(false);

        	this.Div_Ymd.form.Edit_month.set_visible(true);
        	this.Div_Ymd.form.Static_month.set_visible(true);
        	this.Div_Ymd.form.Combo_Other_Month.set_visible(false);

        	this.Div_Ymd.form.CheckBox_Other_Month.set_value("N");//격월
        	this.Div_Ymd.form.Combo_Other_Month.set_value("odd");
        	this.Div_Ymd.form.Edit_date.set_value("");
        	this.Div_Ymd.form.Edit_month.set_value("");

        	this.Div_d.form.Edit_date.set_value("");

        	this.Div_week.form.Combo_week.set_value("1");//몇주차y
        	this.Div_week.form.Radio_Week.set_value("MON");//요일라디오

        	this.Div_Month_Week.form.Combo_week.set_value(1);//몇주차m
        	this.Div_Month_Week.form.Combo_dayOfWeek.set_value("MON");//요일콤보
        	this.Div_Month_Week.form.Edit_month.set_value("");
        }

        /*
        * cron 표현식 변환
        * 1. 시간 지정 : 오전 6시 0분 0초
        * 2. cron표현식은 사용자가 지정한 일자 cron code를 생성
        * 3. 일자를 지정한 경우(요일x), 그 일자가 토&일이면 지정일 기준 가장 가까운 영업일로 설정
        */
        this.makeCronCode = function(){

        	var data = this.Combo_Schedule_select.value;
        	var data2 = this.Combo_SubSchedule_select.value;
        	var cron;
        	var arrMonth = [];

        	var now = new Date();
        	var year = now.getFullYear();

        	/* 당일 cron code */
        	if(data == "year"){ //매년
        		if(data2 == "y1"){ //월,일
        			// 월, 일 가져옴
        			var month = this.Div_Ymd.form.Edit_month.value;
        			var date = this.Div_Ymd.form.Edit_date.value;
        			var subDate = new Date();

        			if(this.Div_Ymd.form.CheckBox_Other_Month.value == "N"){ //격월 false
        				if(month.includes(",")){ // 다중 월 지정인지 여부
        					month = month.split(",");
        					var newDate = new Date();
        					for(var i =0; i < month.length; i++){
        						var monthValue = parseInt(month[i]);
        						arrMonth.push(month);
        					}
        					month = arrMonth;
        				}

        			}else{ // 격월 true
        				if(this.Div_Ymd.form.Combo_Other_Month.value == "odd"){
        					month = [1,3,5,7,9,11];
        				}else if(this.Div_Ymd.form.Combo_Other_Month.value == "even"){
        					month = [2,4,6,8,10,12];
        				}
        			}
        			cron = "0 0 6 "+date+"W "+month+" ? *";

        		}else if(data2 == "y2"){ //주,요일
        			//n주차, 월(복수가능 "," split), 요일 가져옴
        			var nWeek = this.Div_Month_Week.form.Combo_week.value;
        			var month = this.Div_Month_Week.form.Edit_month.value;
        			var day =this.Div_Month_Week.form.Combo_dayOfWeek.value;

        			cron = "0 0 6 ? "+month+" "+day+"#"+nWeek+" *";
        		}

        	}else if(data == "month"){ //매월
        		var subDate = new Date();

        		if(data2 == "m1"){ //일
        			var date = this.Div_d.form.Edit_date.value;
        			cron = "0 0 6 "+date+"W"+" 1/1 ? *";

        		}else if(data2 == "m2"){ //주,요일
        			//n주차, 요일 가져옴
        			var nWeek = this.Div_week.form.Combo_week.value;
        			var day = this.Div_week.form.Radio_Week.value;

        			cron = "0 0 6 ? 1/1 "+day+"#"+nWeek+" *";
        		}
        	}

        	return cron;

        }

        /*
        * cron 표현식 변환
        * 1. 시간 지정 : 오전 6시 0분 0초
        * 2. 사용자가 지정한 일자 7일 이전의 cron code를 생성
        * 3. 일자를 지정한 경우(요일x), 그 일자가 토&일이면 지정일 기준 가장 가까운 영업일로 설정
        */
        this.makeBeforeCronCode = function(){

        	alert("2-1-1");
        	var data = this.Combo_Schedule_select.value;
        	var data2 = this.Combo_SubSchedule_select.value;
        	var beforeCron;
        	var arrMonth = [];

        	var now = new Date();
        	var year = now.getFullYear();

        	/* 7일전 cron code */
        	if(data == "year"){ //매년
        		if(data2 == "y1"){ //월,일
        			// 월, 일 가져옴
        			var month = this.Div_Ymd.form.Edit_month.value;
        			var date = this.Div_Ymd.form.Edit_date.value;
        			trace("1번째 date: "+date);
        			var subDate = new Date();

        			if(this.Div_Ymd.form.CheckBox_Other_Month.value == "N"){ //격월 false
        				if(date <= 7){
        					if(month.includes(",")){ // 다중 월 지정인지 여부
        						month = month.split(",");
        						var newDate = new Date();
        						for(var i =0; i < month.length; i++){
        							var monthValue = parseInt(month[i]);
        							subDate = new Date(year+"-"+monthValue+"-"+date);
        							newDate = new Date(subDate.getTime() - 7 * 24 * 60 * 60 * 1000);
        							month = newDate.toISOString().slice(5, 7);
        							arrMonth.push(month);
        						}
        						month = arrMonth;
        						subDate.setDate(date - 7);
        						date = subDate.getDate();
        						trace("다중월 x 1번째 date: "+date);

        					}else{ // 다중 월x
        						subDate = new Date(year+"-"+month+"-"+date);
        						newDate = new Date(subDate.getTime() - 7 * 24 * 60 * 60 * 1000);
        						month = newDate.toISOString().slice(5, 7);
        						date = newDate.toISOString().slice(8, 10);
        						trace("다중월 x 2번째 date: "+date);
        					}
        				}else{
        					month = arrMonth;
        					subDate.setDate(date - 7);
        					date = subDate.getDate();
        					trace("다중월 x 3번째 date: "+date);
        				}

        			}else{ // 격월 true
        				if(this.Div_Ymd.form.Combo_Other_Month.value == "odd"){
        					month = [1,3,5,7,9,11];
        				}else if(this.Div_Ymd.form.Combo_Other_Month.value == "even"){
        					month = [2,4,6,8,10,12];
        				}
        				for(var i =0; i < month.length; i++){
        					subDate = new Date(year+"-"+month[i]+"-"+date);
        					trace("subDate: "+subDate);
        					newDate = new Date(subDate.getTime() - 7 * 24 * 60 * 60 * 1000);
        					trace("newDate: "+newDate);
        					arrMonth.push(newDate.getMonth());
        				}
        				month = arrMonth
        				newDate.setDate(date - 7);
        				date = subDate.getDate();
        				trace("다중월 5번째 date: "+date);
        			}
        			beforeCron = "0 0 6 "+date+"W "+arrMonth+" ? *";

        		}else if(data2 == "y2"){ //주,요일
        			//n주차, 월(복수가능 "," split), 요일 가져옴
        			var nWeek = this.Div_Month_Week.form.Combo_week.value;
        			var month = this.Div_Month_Week.form.Edit_month.value;
        			var day =this.Div_Month_Week.form.Combo_dayOfWeek.value;

        			if(nWeek == 1){ // 1주차인 경우
        				if(month.includes(",")){ // 다중 월 지정인지 여부
        					month = month.split(",");
        					for(var i =0; i < month.length; i++){
        						var value = parseInt(month[i]);
        						if(value == 1){
        							arrMonth.push(12);
        						}else{
        							arrMonth.push(value-1);
        						}
        					}
        					month = arrMonth;
        				}else{
        					if(month == 1 ){
        						month = 12;
        					}else{
        						month = month-1;
        					}
        				}
        				nWeek = 4;

        			}else{
        				nWeek = nWeek-1;
        			}

        			beforeCron = "0 0 6 ? "+month+" "+day+"#"+nWeek+" *";
        		}

        	}else if(data == "month"){ //매월
        		var subDate = new Date();

        		if(data2 == "m1"){ //일
        			var date = this.Div_d.form.Edit_date.value;
        			subDate.setDate(date - 7);
        			date = subDate.getDate();

        			beforeCron = "0 0 6 "+date+"W"+" 1/1 ? *";

        		}else if(data2 == "m2"){ //주,요일
        			//n주차, 요일 가져옴
        			var nWeek = this.Div_week.form.Combo_week.value;
        			var day = this.Div_week.form.Radio_Week.value;

        			if(nWeek == 1){ // 1주차인 경우
        				nWeek = 4;
        			}else{
        				nWeek = nWeek - 1;
        			}
        			beforeCron = "0 0 6 ? 1/1 "+day+"#"+nWeek+" *";
        		}
        	}

        	return beforeCron;

        }

        /* insert data 정리 */
        this.fn_insertData = function(){
        	var row = this.ds_sch_date.rowposition;

        	var userId = this.objApp.gdsUserInfo.getColumn(0, "userId");
        	var dateCategory = this.ds_sch_date.getColumn(row, "DATE_CATEGORY");
        	var subCategory = this.ds_sch_date.getColumn(row, "SUB_CATEGORY");
        	var beforeCron = this.makeBeforeCronCode();
        	var cron = this.makeCronCode();
        	trace("beforeCron: "+beforeCron);
        	var jobDate = this.makeJobDate(dateCategory, subCategory);
        	this.ds_sch_date.setColumn(row, "REG_DATE", this.objApp.gfn_Today());
        	this.ds_sch_date.setColumn(row, "UPDATE_DATE", this.objApp.gfn_Today());
        	this.ds_sch_date.setColumn(row, "REG_USER", userId);
        	this.ds_sch_date.setColumn(row, "UPDATE_USER", userId);
        	this.ds_sch_date.setColumn(row, "CRON", cron);
        	this.ds_sch_date.setColumn(row, "JOB_DATE", jobDate);
        	this.ds_sch_date.setColumn(row, "BEFORE_CRON", beforeCron);
        	trace(this.ds_sch_date.saveXML());
        	/* 업무일정에 따른 값 setting */
        	if(dateCategory == "year"){
        		if(subCategory == "y1"){
        			var monthly = this.Div_Ymd.form.CheckBox_Other_Month.value;
        			var month = this.Div_Ymd.form.Edit_month.value;
        			var day = this.Div_Ymd.form.Edit_date.value;
        			// 여기
        			this.ds_sch_date.setColumn(row, "MONTH_DETAILS", month);
        			this.ds_sch_date.setColumn(row, "DAY_DETAILS", day);
        			this.ds_sch_date.setColumn(row, "WEEK_DETAILS", "");

        		}else if(subCategory == "y2"){
        			var week = this.Div_Month_Week.form.Combo_week.value;
        			var month =  this.Div_Month_Week.form.Edit_month.value;
        			var day = this.Div_Month_Week.form.Combo_dayOfWeek.value;

        			this.ds_sch_date.setColumn(row, "WEEK_DETAILS", week);
        			this.ds_sch_date.setColumn(row, "MONTH_DETAILS", month);
        			this.ds_sch_date.setColumn(row, "DAY_DETAILS", day);
        		}

        	}else if(dateCategory == "month"){
        		if(subCategory == "m1"){
        			var day = this.Div_d.form.Edit_date.value;

        			this.ds_sch_date.setColumn(row, "DAY_DETAILS", day);

        			this.ds_sch_date.setColumn(row, "MONTH_DETAILS", "");
        			this.ds_sch_date.setColumn(row, "WEEK_DETAILS", "");

        		}else if(subCategory == "m2"){
        			var week = this.Div_week.form.Combo_week.value;
        			var day = this.Div_week.form.Radio_Week.value;

        			this.ds_sch_date.setColumn(row, "WEEK_DETAILS", week);
        			this.ds_sch_date.setColumn(row, "DAY_DETAILS", day);
        			this.ds_sch_date.setColumn(row, "MONTH_DETAILS", "");
        		}
        	}
        }

        /* 유효성 체크 */
        this.fn_valCheck = function(){
        	// 업무일정
        	var data = this.Combo_Schedule_select.value;
        	var data2 = this.Combo_SubSchedule_select.value;

        	if(data == "year"){ //매년
        		var month;

        		if(data2 == "y1"){ //월,일
        			// 월, 일 가져옴
        			month = this.Div_Ymd.form.Edit_month.value;
        			var date = this.Div_Ymd.form.Edit_date.value;

        			if(month == "" || month == null){
        				alert("월을 입력해주세요.");
        				return false;
        			}

        			if(date == "" || date == null){
        				alert("일을 입력해주세요.");
        				return false;
        			}

        		}else if(data2 == "y2"){ //주,요일
        			month = this.Div_Month_Week.form.Edit_month.value;

        			if(month == "" || month == null){
        				alert("월을 입력해주세요.");
        				return false;
        			}
        		}

        	}else if(data == "month"){ //매월
        		var date = this.Div_d.form.Edit_date.value;

        		if(date == "" || date == null){
        			alert("일을 입력해주세요.");
        			return false;
        		}
        	}

        	// 업무명
        	var title = this.Edit_Title.value;

        	if( title == "" || title == null ){
        		alert("업무명을 입력해주세요.");
        		return false;
        	}
        	return true;
        }

        /* select data 정리 */
        this.fn_selectData = function(){
        	var dateCategory = this.ds_sch_date.getColumn(0, "DATE_CATEGORY");
        	var subCategory = this.ds_sch_date.getColumn(0, "SUB_CATEGORY");

        	this.setCategory(0, dateCategory, subCategory);
        }

        /* 정기업무 추가 버튼 클릭 시 기본 화면 세팅 */
        this.fn_setting = function(){
        	this.schedule_init();
        	this.Combo_Schedule_select.set_value("year");
        	this.Combo_SubSchedule_select.set_innerdataset("ds_year_sub");
        	this.Combo_SubSchedule_select.updateToDataset();
        	this.Combo_SubSchedule_select.set_value("y1");
        	this.Div_Ymd.set_visible(true);

        }

        /* grid 클릭 시 category 컨트롤 */
        this.Grid_Wf_Date_oncellclick = function(obj,e)
        {
        	//this.schedule_init();
        	var nRow = e.row;
        	var dateCategory = this.ds_sch_date.getColumn(nRow, "DATE_CATEGORY");
        	var subCategory = this.ds_sch_date.getColumn(nRow, "SUB_CATEGORY");
        	var jobId = this.ds_sch_date.getColumn(nRow, "JOB_ID");

        	if(jobId == "undefined" || jobId == null || jobId == ""){
        		this.schedule_init();
        		this.setCategory("N", dateCategory, subCategory);

        	}else{
        		this.setCategory(this.ds_sch_date.rowposition, dateCategory, subCategory);
        	}

        };

        /*
        * job 스케줄 카테고리 화면, data setting
        * row : "N" => data setting은 하지않고 Div visible옵션만 껐다켰다 수행
        */
        this.setCategory = function(row, dateCategory, subCategory){
        	//this.schedule_init();
        	var ds = this.ds_sch_date;

        	if(dateCategory == "year"){ // 매년
        		this.Combo_SubSchedule_select.set_innerdataset("ds_year_sub");
        		this.Combo_SubSchedule_select.updateToDataset();
        		this.Combo_SubSchedule_select.set_value(subCategory);

        		if(subCategory == "y1"){ // 월,일 /Div_Ymd 격월,월,일
        			this.Div_Ymd.set_visible(true);
        			this.Div_week.set_visible(false);
        			this.Div_Month_Week.set_visible(false);
        			this.Div_d.set_visible(false);

        			if(row != "N"){
        				var month = ds.getColumn(row, "MONTH_DETAILS");
        				var date = ds.getColumn(row, "DAY_DETAILS");
        				var monthly = ds.getColumn(row, "BIMONTHLY_YN");


        				if(monthly == "Y"){ //격월
        					this.Div_Ymd.form.CheckBox_Other_Month.set_value(monthly);
        					this.Div_Ymd.form.Edit_month.set_visible(false);
        					this.Div_Ymd.form.Static_month.set_visible(false);

        					this.Div_Ymd.form.Combo_Other_Month.set_visible(true);
        					this.Div_Ymd.form.Combo_Other_Month.set_value(month); //짝수달 홀수달

        				}else{ //격월 아님
        					this.Div_Ymd.form.Edit_month.set_visible(true);
        					this.Div_Ymd.form.Static_month.set_visible(true);

        					this.Div_Ymd.form.Combo_Other_Month.set_visible(false);
        					this.Div_Ymd.form.Edit_month.set_value(month); //월
        				}
        				this.Div_Ymd.form.Edit_date.set_value(date); //일
        			}

        		}else if(subCategory == "y2"){ // 주,요일 /Div_Month_Week n주차, 월, 요일
        			this.Div_Ymd.set_visible(false);
        			this.Div_week.set_visible(false);
        			this.Div_Month_Week.set_visible(true);
        			this.Div_d.set_visible(false);

        			if(row != "N"){
        				var week = ds.getColumn(row, "WEEK_DETAILS");
        				var month = ds.getColumn(row, "MONTH_DETAILS");
        				var date = ds.getColumn(row, "DAY_DETAILS");

        				this.Div_Month_Week.form.Combo_week.set_value(week); //n주차
        				this.Div_Month_Week.form.Edit_month.set_value(month); //월
        				this.Div_Month_Week.form.Combo_dayOfWeek.set_value(date); //요일
        			}
        		}

        	}else if(dateCategory == "month"){ // 매월
        		this.Combo_SubSchedule_select.set_innerdataset("ds_month_sub");
        		this.Combo_SubSchedule_select.updateToDataset();
        		this.Combo_SubSchedule_select.set_value(subCategory);

        		if(subCategory == "m1"){ // 일 /Div_d 일
        			this.Div_Ymd.set_visible(false);
        			this.Div_week.set_visible(false);
        			this.Div_Month_Week.set_visible(false);
        			this.Div_d.set_visible(true);

        			if(row != "N"){
        				var date = ds.getColumn(row, "DAY_DETAILS");
        				this.Div_d.form.Edit_date.set_value(date); //일
        			}

        		}else if(subCategory == "m2"){ //주, 요일 /Div_week n주차, 요일
        			this.Div_Ymd.set_visible(false);
        			this.Div_week.set_visible(true);
        			this.Div_Month_Week.set_visible(false);
        			this.Div_d.set_visible(false);

        			if(row != "N"){
        				var week = ds.getColumn(row, "WEEK_DETAILS");
        				var date = ds.getColumn(row, "DAY_DETAILS");

        				this.Div_week.form.Combo_week.set_value(week); //n주차
        				this.Div_week.form.Radio_Week.set_value(date); //요일
        			}
        		}
        	}
        }

        /* 사용자가 설정한 job date를 한글로 변환 (여기 해야함) */
        this.makeJobDate = function(dateCategory, subCategory){

        	var jobDate = "";
        	var month;
        	var date;
        	var arrMonth = [];

        	if(dateCategory == "year"){
        		jobDate += "매년/ ";
        		if(subCategory == "y1"){ // 월, 일
        			date = this.Div_Ymd.form.Edit_date.value;
        			var monthly = this.Div_Ymd.form.CheckBox_Other_Month.value;

        			if(monthly == "Y"){ // 격월o
        				month = this.Div_Ymd.form.Combo_Other_Month.value;

        				if(month == "odd"){
        					jobDate += "홀수달/ ";
        				}else if(month == "even"){
        					jobDate += "짝수달/ ";
        				}
        				jobDate += date+"일";

        			}else if(monthly == "N"){ // 격월x
        				month = this.Div_Ymd.form.Edit_month.value;
        				if(month.includes(",")){ // 다중 월 지정인지 여부
        					month = month.split(",");

        					for(var i =0; i < month.length; i++){
        						var value = parseInt(month[i]);
        						arrMonth.push(value);
        					}
        					month = arrMonth;
        				}
        				jobDate += month+"월/ "+date+"일";
        			}

        		}else if(subCategory == "y2"){ // 주, 요일
        			month = this.Div_Month_Week.form.Edit_month.value;
        			week = this.Div_Month_Week.form.Combo_week.value;
        			date = this.Div_Month_Week.form.Combo_dayOfWeek.value;

        			switch(date) {
        			case "MON":
        				date = "월요일";
        				break;
        			case "TUE":
        				date = "화요일";
        				break;
        			case "WED":
        				date = "수요일";
        				break;
        			case "THU":
        				date = "목요일";
        				break;
        			case "FRI":
        				date = "금요일";
        				break;
        			}
        			if(month.includes(",")){ // 다중 월 지정인지 여부
        				month = month.split(",");
        				for(var i =0; i < month.length; i++){
        					var value = parseInt(month[i]);
        					arrMonth.push(value-1);
        				}
        				month = arrMonth;
        			}

        			jobDate += month+"월/ "+week+"주차/ "+date;
        		}

        	}else if(dateCategory == "month"){
        		jobDate += "매월/ ";
        		if(subCategory == "m1"){
        			date = this.Div_d.form.Edit_date.value;
        			jobDate += date+"일";

        		}else if(subCategory == "m2"){
        			week = this.Div_week.form.Combo_week.value;
        			date = this.Div_week.form.Radio_Week.value;

        			switch(date) {
        			case "MON":
        				date = "월요일";
        				break;
        			case "TUE":
        				date = "화요일";
        				break;
        			case "WED":
        				date = "수요일";
        				break;
        			case "THU":
        				date = "목요일";
        				break;
        			case "FRI":
        				date = "금요일";
        				break;
        			}

        			jobDate += week+"주차/ "+date;
        		}
        	}
        	return jobDate;3
        }



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.WM_Regular_Schedule_onload,this);
            this.Edit_Title.addEventHandler("onsetfocus",this.common_onsetfocus,this);
            this.Edit_Title.addEventHandler("onkillfocus",this.common_onkillfocus,this);
            this.Grid_Wf_Date.addEventHandler("oncellclick",this.Grid_Wf_Date_oncellclick,this);
            this.Btn_Save.addEventHandler("onclick",this.Btn_Save_onclick,this);
            this.Combo_Schedule_select.addEventHandler("onitemchanged",this.Combo_Work_Category_onitemchanged,this);
            this.CheckBox_Wf_Suspended.addEventHandler("onchanged",this.CheckBox_Wf_Suspended_onchanged,this);
            this.Btn_Close.addEventHandler("onclick",this.btnClose_onclick,this);
            this.btn_add.addEventHandler("onclick",this.btn_open_onclick,this);
            this.btn_del.addEventHandler("onclick",this.btn_del_onclick,this);
            this.Combo_SubSchedule_select.addEventHandler("onitemchanged",this.Combo_SubSchedule_select_onitemchanged,this);
            this.Div_Ymd.form.CheckBox_Other_Month.addEventHandler("onchanged",this.Div_Ymd_CheckBox_Other_Month_onchanged,this);
            this.Div_Ymd.form.Combo_Other_Month.addEventHandler("onitemchanged",this.Div_Ymd_Combo_Other_Month_onitemchanged,this);
        };
        this.loadIncludeScript("temp_regular_schedule.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
