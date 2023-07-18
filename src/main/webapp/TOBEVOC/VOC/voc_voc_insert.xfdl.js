(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("voc_voc_insert");
            this.set_titletext("VOC등록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1350,770);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCustUpload", this);
            obj._setContents("<ColumnInfo><Column id=\"FILE_ID\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SIZE\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DTTM\" type=\"STRING\" size=\"256\"/><Column id=\"BOARD_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsVocCategory", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"UP_CODE_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ETC01\" type=\"STRING\" size=\"256\"/><Column id=\"ETC02\" type=\"STRING\" size=\"256\"/><Column id=\"ETC03\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsServiceCode", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"UP_CODE_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ETC01\" type=\"STRING\" size=\"256\"/><Column id=\"ETC02\" type=\"STRING\" size=\"256\"/><Column id=\"ETC03\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsServiceGoods", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"UP_CODE_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ETC01\" type=\"STRING\" size=\"256\"/><Column id=\"ETC02\" type=\"STRING\" size=\"256\"/><Column id=\"ETC03\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCustIndustry", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"UP_CODE_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ETC01\" type=\"STRING\" size=\"256\"/><Column id=\"ETC02\" type=\"STRING\" size=\"256\"/><Column id=\"ETC03\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRequestType", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"UP_CODE_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ETC01\" type=\"STRING\" size=\"256\"/><Column id=\"ETC02\" type=\"STRING\" size=\"256\"/><Column id=\"ETC03\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPartnerType", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"UP_CODE_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ETC01\" type=\"STRING\" size=\"256\"/><Column id=\"ETC02\" type=\"STRING\" size=\"256\"/><Column id=\"ETC03\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPhone", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsEmail", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsReplyType", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearchCode", this);
            obj._setContents("<ColumnInfo><Column id=\"phone\" type=\"STRING\" size=\"256\"/><Column id=\"email\" type=\"STRING\" size=\"256\"/><Column id=\"reply\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"phone\">G001</Col><Col id=\"email\">I001</Col><Col id=\"reply\">H001</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsVoc", this);
            obj._setContents("<ColumnInfo><Column id=\"VOC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"VOC_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"QSTN_TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"QSTN_CNTN\" type=\"STRING\" size=\"256\"/><Column id=\"INDUSTRY_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"QUESTION_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PLATFORM_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"VOC_STAT\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DTTM\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER\" type=\"STRING\" size=\"256\"/><Column id=\"END_DTTM\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_DTTM\" type=\"STRING\" size=\"256\"/><Column id=\"DEVICE\" type=\"STRING\" size=\"256\"/><Column id=\"QSTN_ATTACH_YN\" type=\"STRING\" size=\"256\"/><Column id=\"REG_CUST_ID\" type=\"STRING\" size=\"256\"/><Column id=\"HIT_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"ANSW_TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"ANSW_CNTN\" type=\"STRING\" size=\"256\"/><Column id=\"ANSW_DTTM\" type=\"STRING\" size=\"256\"/><Column id=\"ANSW_ATTACH_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CHRG_USER\" type=\"STRING\" size=\"256\"/><Column id=\"ANSW_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCust", this);
            obj._setContents("<ColumnInfo><Column id=\"CUST_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PHONE\" type=\"STRING\" size=\"256\"/><Column id=\"COMPANY\" type=\"STRING\" size=\"256\"/><Column id=\"JOB_POSITION\" type=\"STRING\" size=\"256\"/><Column id=\"EMAIL\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new FileUpTransfer("FileUpTransfer00", this);
            this.addChild(obj.name, obj);


            obj = new FileDialog("FileDialog00", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("voc_type_stat","7","79","120","42",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("제품 및 서비스 문의");
            obj.set_cssclass("sta_WF_DetailEssential");
            obj.set_textAlign("left");
            obj.set_font("11px/normal \"Verdana\",\"Malgun Gothic\"");
            this.addChild(obj.name, obj);

            obj = new Static("title_sub_stat","7","120","120","42",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("제목");
            obj.set_cssclass("sta_WF_DetailEssential");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("sub_stat19","126","79","200","42",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("");
            obj.set_cssclass("sta_WF_DetailArea");
            this.addChild(obj.name, obj);

            obj = new Static("sub_stat21","126","120","518","42",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("");
            obj.set_cssclass("sta_WF_DetailArea");
            this.addChild(obj.name, obj);

            obj = new Static("goods_edit","325","79","120","42",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("서비스 상세항목");
            obj.set_cssclass("sta_WF_DetailEssential");
            this.addChild(obj.name, obj);

            obj = new Static("sub_stat20","444","79","200","42",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("");
            obj.set_cssclass("sta_WF_DetailArea");
            this.addChild(obj.name, obj);

            obj = new Edit("title_edit","133","126","503","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Static("sub_stat","10","29","74","50",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("입력사항");
            obj.set_cssclass("sta_WF_SubtitleDown");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","5","770",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("W10");
            obj.set_visible("false");
            obj.set_background("pink");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","1340","0","10","770",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("W10");
            obj.set_visible("false");
            obj.set_background("pink");
            this.addChild(obj.name, obj);

            obj = new Static("title_stat","10","10","150","19",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("VOC 등록");
            obj.set_cssclass("sta_WF_FrmTitle");
            this.addChild(obj.name, obj);

            obj = new Button("select_btn",null,"5","65","30","79",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("목록");
            obj.set_cssclass("btn_WF_basic02");
            this.addChild(obj.name, obj);

            obj = new Button("insert_btn",null,"5","65","30","4.994999999999891",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_basic02");
            this.addChild(obj.name, obj);

            obj = new Static("sub_stat2","7","609","120","144",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("첨부파일");
            obj.set_cssclass("sta_WF_DetailLabel");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("sub_stat4","126","609","518","144",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("");
            obj.set_cssclass("sta_WF_DetailArea");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","77","668","30","28",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_cssclass("btn_WF_inquiry");
            this.addChild(obj.name, obj);

            obj = new Grid("cust_file_grid","131","617","505","127",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_binddataset("dsCustUpload");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"97\"/><Column size=\"223\"/><Column size=\"111\"/><Column size=\"63\"/></Columns><Rows><Row size=\"26\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell text=\"파일아이디\"/><Cell col=\"1\" text=\"파일명\"/><Cell col=\"2\" text=\"확장자\"/><Cell col=\"3\"/></Band><Band id=\"body\"><Cell text=\"bind:FILE_ID\"/><Cell col=\"1\" text=\"bind:FILE_NAME\"/><Cell col=\"2\" text=\"bind:FILE_TYPE\"/><Cell col=\"3\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"삭제\" cssclass=\"btn_WF_DeleteIcon\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("change_edit1","7","161","120","42",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("고객산업군");
            obj.set_cssclass("sta_WF_DetailEssential");
            obj.set_textAlign("left");
            obj.set_font("14px/normal \"Verdana\",\"Malgun Gothic\"");
            this.addChild(obj.name, obj);

            obj = new Static("change_edit2","126","161","518","42",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("");
            obj.set_cssclass("sta_WF_DetailArea");
            this.addChild(obj.name, obj);

            obj = new Static("change_edit3","7","202","120","42",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("문의유형");
            obj.set_cssclass("sta_WF_DetailEssential");
            this.addChild(obj.name, obj);

            obj = new Static("change_edit4","126","202","518","42",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("");
            obj.set_cssclass("sta_WF_DetailArea");
            this.addChild(obj.name, obj);

            obj = new Static("sub_stat1","7","243","120","367",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("내용");
            obj.set_cssclass("sta_WF_DetailEssential");
            this.addChild(obj.name, obj);

            obj = new Static("sub_stat3","126","243","518","367",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sub_stat5","683","79","120","42",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("문의답변");
            obj.set_cssclass("sta_WF_DetailEssential");
            obj.set_textAlign("left");
            obj.set_font("14px/normal \"Verdana\",\"Malgun Gothic\"");
            this.addChild(obj.name, obj);

            obj = new Static("sub_stat28","680","29","74","50",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("고객정보");
            obj.set_cssclass("sta_WF_SubtitleDown");
            this.addChild(obj.name, obj);

            obj = new Static("sub_stat7","683","161","120","42",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("직위");
            obj.set_cssclass("sta_WF_DetailEssential");
            this.addChild(obj.name, obj);

            obj = new Static("sub_stat8","683","202","120","42",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("전화번호");
            obj.set_cssclass("sta_WF_DetailEssential");
            this.addChild(obj.name, obj);

            obj = new Static("sub_stat9","683","243","120","42",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("이메일");
            obj.set_cssclass("sta_WF_DetailEssential");
            this.addChild(obj.name, obj);

            obj = new Static("sub_stat10","683","283","120","42",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("소속/기관");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.addChild(obj.name, obj);

            obj = new Static("sub_stat11","802","79","518","42",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("");
            obj.set_cssclass("sta_WF_DetailArea");
            this.addChild(obj.name, obj);

            obj = new Static("sub_stat13","1120","120","200","42",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("");
            obj.set_cssclass("sta_WF_DetailArea");
            this.addChild(obj.name, obj);

            obj = new Static("sub_stat14","802","161","518","42",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("");
            obj.set_cssclass("sta_WF_DetailArea");
            this.addChild(obj.name, obj);

            obj = new Static("sub_stat15","802","202","518","42",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("");
            obj.set_cssclass("sta_WF_DetailArea");
            this.addChild(obj.name, obj);

            obj = new Static("sub_stat16","802","243","518","42",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("");
            obj.set_cssclass("sta_WF_DetailArea");
            this.addChild(obj.name, obj);

            obj = new Static("sub_stat17","802","283","518","42",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("");
            obj.set_cssclass("sta_WF_DetailArea");
            this.addChild(obj.name, obj);

            obj = new Edit("name_edit","1127","126","156","30",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            this.addChild(obj.name, obj);

            obj = new Button("search_cust_name_btn","1282","126","31","30",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_cssclass("btn_WF_inquiry");
            this.addChild(obj.name, obj);

            obj = new Combo("voc_type_combo","134","85","158","30",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_displaynulltext("선택해주세요.");
            obj.set_text("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Combo("comboGoods","450","85","158","30",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_displaynulltext("선택해주세요.");
            this.addChild(obj.name, obj);

            obj = new Div("multiCheckDiv","134","212","506","35",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_text("Div00");
            obj.set_url("cmm::cmmMultiCheckBox.xfdl");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("pos_edit","809","167","503","30",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("company_edit","809","290","503","30",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Combo("comboEmail","1153","249","158","30",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_displaynulltext("직접입력");
            obj.set_innerdataset("dsEmail");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NAME");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Combo("comboPhone","810","208","158","30",null,null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_displaynulltext("선택해주세요.");
            obj.set_innerdataset("dsPhone");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NAME");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Radio("answ_type_radio","810","79","280","50",null,null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_innerdataset("dsReplyType");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NAME");
            obj.set_rowcount("1");
            this.addChild(obj.name, obj);

            obj = new Edit("email_edit","810","249","158","30",null,null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("email_domain_edit","989","249","158","30",null,null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","972","241","33","45",null,null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_text("@");
            this.addChild(obj.name, obj);

            obj = new Edit("phone_edit","984","209","158","30",null,null,null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("phone_edit1","1153","209","158","30",null,null,null,null,null,null,this);
            obj.set_taborder("50");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01","973","202","33","45",null,null,null,null,null,null,this);
            obj.set_taborder("51");
            obj.set_text("-");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01_00","1144","202","33","45",null,null,null,null,null,null,this);
            obj.set_taborder("52");
            obj.set_text("-");
            this.addChild(obj.name, obj);

            obj = new Static("sub_stat12","802","120","200","42",null,null,null,null,null,null,this);
            obj.set_taborder("53");
            obj.set_text("");
            obj.set_cssclass("sta_WF_DetailArea");
            this.addChild(obj.name, obj);

            obj = new Static("sub_stat6","683","120","120","42",null,null,null,null,null,null,this);
            obj.set_taborder("54");
            obj.set_text("아이디");
            obj.set_cssclass("sta_WF_DetailEssential");
            obj.set_textAlign("left");
            obj.set_font("14px/normal \"Verdana\",\"Malgun Gothic\"");
            this.addChild(obj.name, obj);

            obj = new Static("sub_stat18","1001","120","120","42",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_DetailEssential");
            this.addChild(obj.name, obj);

            obj = new Button("search_cust_id_btn","964","126","31","30",null,null,null,null,null,null,this);
            obj.set_taborder("55");
            obj.set_cssclass("btn_WF_inquiry");
            this.addChild(obj.name, obj);

            obj = new Edit("id_edit","809","126","156","30",null,null,null,null,null,null,this);
            obj.set_taborder("56");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.multiCheckDiv
            obj = new Layout("default","",0,0,this.multiCheckDiv.form,function(p){});
            this.multiCheckDiv.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1350,770,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmMultiCheckBox.xfdl");
        };
        
        // User Script
        this.registerScript("voc_voc_insert.xfdl", function() {

        /************************************************************************************************
         * FORM 변수 선언 영역
         ************************************************************************************************/
        this.objApp = nexacro.getApplication();

        /************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose)
         ************************************************************************************************/
        this.voc_voc_insert_onload = function(obj,e)
        {

        	var sUrl = "http://localhost:8088/edupack_egov/smartEditor/SmartEditor2.html";
        	var webEditor = new WebBrowser("webEditor", 133, 250, 502, 350);
        	this.addChild("webEditor", webEditor);
        	webEditor.set_url(sUrl);

        	webEditor.show();

        	this.seleteVocCategory(); // voc category

        };

        /************************************************************************************************
         * 버튼 영역
         ************************************************************************************************/

        /* 목록 버튼 */
        this.select_btn_onclick = function(obj,e)
        {
        	this.go("VOC::voc_voc_select.xfdl");
        };

        /* 저장버튼 */
        this.insert_btn_onclick = function(obj,e){

        	this.insertVoc();
        };


        /************************************************************************************************
         * TRANSACTION 영역
         ************************************************************************************************/

        /* insertVoc */
        this.insertVoc = function(){

        	this.fn_data();

        	var strSvcId    = "insertVoc";
        	var strSvcUrl   = "svcUrl::insertVoc.do";
        	var inData      = "dsVoc=dsVoc dsCustUpload=dsCustUpload dsCust=dsCust";
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

        /* seleteVocCategory */
        this.seleteVocCategory = function(){

        	var strSvcId    = "selectCategoryCode";
        	var strSvcUrl   = "svcUrl::selectCategoryCode.do";
        	var inData      = "dsSearchCode=dsSearchCode";
        	var outData     = "dsVocCategory=dsVocCategory dsPhone=dsPhone dsEmail=dsEmail dsReplyType=dsReplyType";
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

        	case "insertVoc":

        		if(this.dsCustUpload.rowcount > 0){ //첨부파일이 있으면 업로드 실행
        			this.fnFileUpload();
        		}

        		alert("등록되었습니다");
        		this.go("VOC::voc_voc_select.xfdl");

        		break;


        	case "selectCategoryCode":

        		this.vocCategoryInit();
        		this.voc_type_combo.set_value("LCL001");
        		this.fnVocTypeComboChanged("LCL001");
        		this.comboGoods.set_value("MCL001");

        		break;

        	}
        };

        /************************************************************************************************
         * 사용자 FUNCTION 영역
         ************************************************************************************************/

        /* data 가공 */
        this.fn_data = function(){

        	// 초기화
        	this.dsVoc.deleteRow(0);
        	this.dsVoc.addRow();

        	this.dsCust.deleteRow(0);
        	this.dsCust.addRow();

        	// 네이버에디터 getCntn
        	var objDom =this.webEditor.getProperty("document").getProperty("all"); //editor의 전체 프로퍼티를 받아옴
        	objDom.getProperty("editorGetBtn").callMethod("click");
        	var sData = objDom.getProperty("ir1").getProperty("value");

        	// 글쓴이
        	var regUser = this.objApp.gdsUserInfo.getColumn(0, "userId");

        	this.dsVoc.setColumn(0, "REG_DTTM", this.gfnGetDate());
        	this.dsVoc.setColumn(0, "REG_USER", regUser);
        	this.dsVoc.setColumn(0, "UPDATE_DTTM", this.gfnGetDate());
        	this.dsVoc.setColumn(0, "UPDATE_USER", regUser);

        	//voc 정보
        	var vocType = this.voc_type_combo.value;
        	this.dsVoc.setColumn(0,"VOC_TYPE", vocType); // 제품및서비스문의
        	this.dsVoc.setColumn(0,"PLATFORM_TYPE", this.comboGoods.value); // 서비스 상세목록

        	if(vocType == "LCL001"){ //제품,서비스
        		this.dsVoc.setColumn(0,"INDUSTRY_TYPE", this.custIndustry.value); // 고객산업군
        		this.dsVoc.setColumn(0,"QUESTION_TYPE", this.requestType.value); // 문의유형

        	}else if(vocType == "LCL002"){	//파트너십
        		this.dsVoc.setColumn(0,"QUESTION_TYPE", this.requestType.value); // 문의유형
        		this.dsVoc.setColumn(0,"DEVICE", this.multiCheckDiv.form.fnGetValue()); // multi 협력분류

        	}else if(vocType == "LCL003"){	//유지보수
        		this.dsVoc.setColumn(0,"QUESTION_TYPE", this.multiCheckDiv.form.fnGetValue()); // multi 문의유형

        	}else if(vocType == "LCL004"){  //교육문의
        		this.dsVoc.setColumn(0,"INDUSTRY_TYPE", this.multiCheckDiv.form.fnGetValue()); // multi 고객산업군
        		this.dsVoc.setColumn(0,"QUESTION_TYPE", this.requestType.value); // 문의유형

        	}

        	this.dsVoc.setColumn(0,"QSTN_TITLE", this.title_edit.text); // 제목
        	this.dsVoc.setColumn(0, "QSTN_CNTN", sData); // 내용
        	this.dsVoc.setColumn(0, "VOC_STAT", "0"); // voc 상태
        	this.dsVoc.setColumn(0,"ANSW_TYPE", this.answ_type_radio.value); // 답변타입

        	// 고객정보
        	this.dsCust.setColumn(0, "CUST_ID", this.id_edit.text);
        	this.dsVoc.setColumn(0, "CUST_ID", this.id_edit.text); // voc db에도 등록

        	this.dsCust.setColumn(0, "CUST_NAME", this.name_edit.text);
        	this.dsCust.setColumn(0, "JOB_POSITION", this.pos_edit.text);

        	var phone = this.comboPhone.text+"-"+this.phone_edit.text+"-"+this.phone_edit1.text;
        	this.dsCust.setColumn(0, "PHONE", phone);

        	var email = this.email_edit.text+"@"+this.email_domain_edit.text;
        	this.dsCust.setColumn(0, "EMAIL", email);

        	this.dsCust.setColumn(0, "COMPANY", this.company_edit.text);

        	// 파일 업로드
        	var gubun = "QSTN_VOC";
        	var uploadCnt = this.dsCustUpload.getRowCount();
        	if(uploadCnt > 0 ){	// 첨부파일 있음
        		this.dsVoc.setColumn(0, "QSTN_ATTACH_YN", "Y");
        		for(var i=0; i<uploadCnt; i++){
        			this.dsCustUpload.setColumn(i, "REG_DTTM", this.gfnGetDate());
        			this.dsCustUpload.setColumn(i, "REG_USER", regUser);
        			this.dsCustUpload.setColumn(i, "FILE_GUBUN", gubun);
        		}
        	}else{  //첨부파일 없음
        		this.dsVoc.setColumn(0, "QSTN_ATTACH_YN", "N");
        	}

        }

        /* 1. 제품 및 서비스 문의*/
        this.vocCategoryInit = function(){

        	this.dsVocCategory.filter("String(CODE_ID).indexOf('LCL') >= 0");
        	this.dsServiceCode.copyData(this.dsVocCategory, true);
        	this.dsVocCategory.filter("");

        	this.voc_type_combo.set_innerdataset(this.dsServiceCode);
        	this.voc_type_combo.set_datacolumn("CODE_NAME");
        	this.voc_type_combo.set_codecolumn("CODE_ID");

        	this.voc_type_combo.set_displaynulltext("선택해주세요.");

        }

        /* 2. combo change
          제품 및 서비스 combo 에 따른 서비스상세항목, 고객산업군, 유형, 협력분류 제어
        */
        this.voc_type_combo_onitemchanged = function(obj,e){

        	this.fnVocTypeComboChanged(e.postvalue)
        };


        this.fnVocTypeComboChanged = function(value){
        	/* 1) 제품 및 서비스에 따른
        	    서비스상세항목 combo 동적 생성 */
        	this.dsVocCategory.filter("String(UP_CODE_ID).indexOf('"+value+"') >= 0 && String(CODE_ID).indexOf('MCL') >= 0");
        	this.dsServiceGoods.copyData(this.dsVocCategory, true);
        	trace(this.dsVocCategory.saveXML());
        	this.dsVocCategory.filter("");

        	this.comboGoods.set_innerdataset(this.dsServiceGoods);
        	this.comboGoods.set_datacolumn("CODE_NAME");
        	this.comboGoods.set_codecolumn("CODE_ID");

        	this.comboGoods.set_displaynulltext("선택해주세요.");

        	/* 2) 제품 및 서비스에 따른
        	    stat 이름, size 등 변경 */
        	if(value == "LCL001"){
        		this.change_edit1.set_text("고객산업군");
        		this.change_edit3.set_text("문의유형");

        		this.change_edit3.set_visible(true);
        		this.change_edit4.set_visible(true);

        		this.change_edit1.set_height(42);
        		this.change_edit2.set_height(42);


        	}else if(value == "LCL002"){
        		this.change_edit1.set_text("문의유형");
        		this.change_edit3.set_text("협력분류");

        		this.change_edit3.set_visible(true);
        		this.change_edit4.set_visible(true);

        		this.change_edit1.set_height(42);
        		this.change_edit2.set_height(42);

        	}else if(value == "LCL003"){
        		this.change_edit1.set_text("문의유형");

        		this.change_edit1.set_height(84);
        		this.change_edit2.set_height(84);

        		this.change_edit3.set_visible(false);
        		this.change_edit4.set_visible(false);

        	}else if(value == "LCL004"){
        		this.change_edit1.set_text("고객산업군");
        		this.change_edit3.set_text("문의유형");

        		this.change_edit3.set_visible(true);
        		this.change_edit4.set_visible(true);

        		this.change_edit1.set_height(42);
        		this.change_edit2.set_height(42);
        	}

        	/* 3) 제품 및 서비스에 따른 component 동적 생성
        	    filter를 이용해서 각자 dataset에 넣어줌 */
        	if(value == "LCL001"){
        		trace("LCL001로 옴2");
        		this.fnComponentInit();

        		//고객산업군 radio 생성
        		var custIndustry = new Radio("custIndustry", 134, 167, 500, 30);
        		this.addChild("custIndustry", custIndustry);

        		this.dsVocCategory.filter("String(UP_CODE_ID).indexOf('"+value+"') >= 0 && String(CODE_ID).indexOf('NCL') >= 0");
        		this.dsCustIndustry.copyData(this.dsVocCategory, true);
        		trace(this.dsCustIndustry.saveXML());
        		this.dsVocCategory.filter("");

        		this.custIndustry.set_innerdataset(this.dsCustIndustry);
        		this.custIndustry.set_datacolumn("CODE_NAME");
        		this.custIndustry.set_codecolumn("CODE_ID");
        		this.custIndustry.set_rowcount("1");
        		this.custIndustry.set_fittocontents("width");

        		//문의유형 radio생성
        		var requestType = new Radio("requestType", 134, 209, 500, 30);
        		this.addChild("requestType", requestType);

        		this.dsVocCategory.filter("String(UP_CODE_ID).indexOf('"+value+"') >= 0 && String(CODE_ID).indexOf('SCL') >= 0");
        		this.dsRequestType.copyData(this.dsVocCategory, true);
        		this.dsVocCategory.filter("");

        		this.requestType.set_innerdataset(this.dsRequestType);
        		this.requestType.set_datacolumn("CODE_NAME");
        		this.requestType.set_codecolumn("CODE_ID");
        		this.requestType.set_rowcount("1");
        		this.requestType.set_fittocontents("width");

        		//this.fnComponentCreate("requestTypeRadio", "Radio", "134", "209", "500", "30", e.postvalue, "SCL", "dsRequestType");

        		custIndustry.show();
        		requestType.show();

        	}else if(value == "LCL002"){
        		this.fnComponentInit();

        		//문의유형 radio생성
        		var requestType = new Radio("requestType", 134, 167, 500, 30);
        		this.addChild("requestType", requestType);

        		this.dsVocCategory.filter("String(UP_CODE_ID).indexOf('"+value+"') >= 0 && String(CODE_ID).indexOf('SCL') >= 0");
        		this.dsRequestType.copyData(this.dsVocCategory, true);
        		this.dsVocCategory.filter("");

        		this.requestType.set_innerdataset(this.dsRequestType);
        		this.requestType.set_datacolumn("CODE_NAME");
        		this.requestType.set_codecolumn("CODE_ID");
        		this.requestType.set_rowcount("1");
        		this.requestType.set_fittocontents("width");

        		this.dsVocCategory.filter("String(UP_CODE_ID).indexOf('"+value+"') >= 0 && String(CODE_ID).indexOf('PCL') >= 0");
        		this.dsPartnerType.copyData(this.dsVocCategory, true);
        		this.dsVocCategory.filter("");

        		this.requestType.set_value(this.dsVoc.getColumn(0, "QUESTION_TYPE")); // db에서 가지고온 값 세팅

        		//multi check box true visible
        		this.multiCheckDiv.set_top(206);
        		this.multiCheckDiv.set_visible(true);
        		this.multiCheckDiv.form.fnMultiCheckBoxByDataSet(this.dsPartnerType, "CODE_ID", "CODE_NAME");

        		requestType.show();

        	}else if(value == "LCL003"){
        		this.fnComponentInit();

        		//문의유형 radio생성
        		this.dsVocCategory.filter("String(UP_CODE_ID).indexOf('"+value+"') >= 0 && String(CODE_ID).indexOf('SCL') >= 0");
        		this.dsRequestType.copyData(this.dsVocCategory, true);
        		this.dsVocCategory.filter("");

        		this.multiCheckDiv.set_top(164);
        		this.multiCheckDiv.set_height(330);
        		this.multiCheckDiv.set_visible(true);
        		this.multiCheckDiv.form.fnMultiCheckBoxByDataSet(this.dsRequestType, "CODE_ID", "CODE_NAME");

        	}else if(value == "LCL004"){
        		this.fnComponentInit();

        		//고객산업군 multi check 생성
        		this.dsVocCategory.filter("String(UP_CODE_ID).indexOf('"+value+"') >= 0 && String(CODE_ID).indexOf('NCL') >= 0");
        		this.dsCustIndustry.copyData(this.dsVocCategory, true);
        		this.dsVocCategory.filter("");

        		this.multiCheckDiv.set_top(164);
        		this.multiCheckDiv.set_visible(true);
        		this.multiCheckDiv.form.fnMultiCheckBoxByDataSet(this.dsCustIndustry, "CODE_ID", "CODE_NAME");

        		//문의유형 radio생성
        		var requestType = new Radio("requestType", 134, 209, 500, 30);
        		this.addChild("requestType", requestType);

        		this.dsVocCategory.filter("String(UP_CODE_ID).indexOf('"+value+"') >= 0 && String(CODE_ID).indexOf('SCL') >= 0");
        		this.dsRequestType.copyData(this.dsVocCategory, true);
        		this.dsVocCategory.filter("");

        		this.requestType.set_innerdataset(this.dsRequestType);
        		this.requestType.set_datacolumn("CODE_NAME");
        		this.requestType.set_codecolumn("CODE_ID");
        		this.requestType.set_rowcount("1");
        		this.requestType.set_fittocontents("width");

        		requestType.show();

        	}

        }

        /* 3. component init
        	제품 및 서비스에 따른 서비스상세항목, 고객산업군, 유형, 협력분류 초기화
        */
        this.fnComponentInit = function(){

        	this.multiCheckDiv.set_visible(false);

        	for( var i=0; i < 3; i++){
        		if(this.isValidObject("custIndustry")){
        			this.custIndustry.destroy();
        		}else if(this.isValidObject("requestType")){
        			this.requestType.destroy()
        		}else if(this.isValidObject("partnerType")){
        			this.partnerType.destroy()
        		}
        	}
        }


        this.fnFileUpload = function(){

        	var sUploadUrl = "http://localhost:8088/edupack_egov/fileUpload.do";
        	this.FileUpTransfer00.upload(sUploadUrl);
        }



        /* file upload 로직 */
        this.Button00_onclick = function(obj,e)
        {
        	this.FileDialog00.open("fileselect", 3, "%UserApp%"); // fileDialog
        };

        this.FileUpTransfer00_onsuccess = function(obj,e)
        {
        	var objDs = e.datasets[0];

        	for(var i=0; i< objDs.rowcount; i++){
        		var nRow = this.dsCustUpload.findRow("FILE_NAME", objDs.getColumn(i, "filename"));
        		if(nRow > -1){
        			this.dsCustUpload.setColumn(nRow, "FILE_ID", objDs.getColumn(i, "fileid"));
        			this.dsCustUpload.setColumn(nRow, "FILE_NAME", objDs.getColumn(i, "filename"));
        			this.dsCustUpload.setColumn(nRow, "FILE_SIZE", objDs.getColumn(i, "filesize"));
        		}
        	}
        };

        this.FileDialog00_onclose = function(obj,e)
        {

        	var objFileList = e.virtualfiles;

        	for(var i=0; i<objFileList.length; i++){ //선택한 파일을 FileUpTransfer에 넣음

        		var bExist = this.FileUpTransfer00.existFile(objFileList[i]);
        		// 중복으로 들어가지 않게 일단 FileUpTransfer에 있는지 check

        		if(!bExist){ // FileUpTransfer에 없으면
        			var sFileName = objFileList[i].filename;
        			var sTemp = sFileName.lastIndexOf(".") + 1; // 역순으로 "."을 찾아서 인덱스(자리수)를 반환
        			var sFileType = sFileName.substr(sTemp);

        			var nIdx = this.FileUpTransfer00.addFile(sFileName, objFileList[i]);
                    // FileUpTransfer에 선택한 파일 넣음

        			if(nIdx != -1){
        				var nRow = this.dsCustUpload.addRow();
        				this.dsCustUpload.setColumn(nRow, "FILE_ID", sFileName);
        				this.dsCustUpload.setColumn(nRow, "FILE_NAME", sFileName);
        				this.dsCustUpload.setColumn(nRow, "FILE_TYPE", sFileType);

        			}
        		}
        	}


        };

        /* 파일업로드 grid 버튼이벤트 */
        this.file_grid_oncellclick = function(obj,e)
        {

        	//var dnCellIdx = 5;
        	var rmCellIdx = 3;

        	/*if(e.col == dnCellIdx){ // 5번째 cell(다운로드버튼)이 눌리면
        	var sFileId = this.dsCustUpload.getColumn(e.row, "fileid");
        	var sDownUrl = "http://localhost:8088/edupack_egov/filedownload.do";

        	var sFileInfo = "aaa.js, bbb.png, ccc.xml"; // 이상태로 서버로 넘겨서 이걸 잘라서 사용함


        	this.FileDownTransfer00.setPostData("downfilename", sFileId);
        	this.FileDownTransfer00.download(sDownUrl);

        	}else */

        	if(e.col == rmCellIdx){ // 4번째 cell(삭제버튼)이 눌리면
        		var sFileName = this.dsCustUpload.getColumn(e.row, "FILE_NAME");
        		//alert(sFileName);

        		if(this.gfnIsNull(this.dsCustUpload.getColumn(e.row, "FILE_SIZE"))){
        			this.dsCustUpload.deleteRow(e.row);
        			this.FileUpTransfer00.removeFile(sFileName);

        		}else{
        			// file 서버 삭제
        			this.dsCustUpload.deleteRow(e.row);

        			var sFileId = this.dsCustUpload.getColumn(e.row, "FILE_ID");
        			var sDeleteUrl = "http://localhost:8088/edupack_egov/deleteUploadFile.do";

        			this.gfnTransaction("svcFileDelete"
        				, "deleteUploadFile.do"
        				, ""
        				, ""
        				, "deletefilename="+nexacro.wrapQuote(sFileName)
        				, "fnCallback");


        		}
        	}
        };


        /* email domain combo change event*/
        this.comboEmail_canitemchange = function(obj,e)
        {
        	this.email_domain_edit.set_value("");
        	if(e.posttext != "직접입력"){
        		this.email_domain_edit.set_value(e.posttext);
        	}


        };


        /* cust NAME search */
        this.search_cust_name_btn_onclick = function(obj,e)
        {
        	this.custSearch( this.name_edit.text ,"CUST_NAME");
        };


        /* cust ID search */
        this.search_cust_id_btn_onclick = function(obj,e)
        {
        	this.custSearch(this.id_edit.text,"CUST_ID");
        };

        /* custPopup open */
        this.custSearch = function(text, type){

        	var objCF = new ChildFrame();

        	objCF.init("custSearch", 0, 0, 300, 400, null, null, "cmm::cmmCustPopup.xfdl"); // 초기값 세팅


        	objCF.set_showtitlebar(true);
        	objCF.set_openalign("center middle"); // childFrame의 위치를 지정하는 속성, 중간에 화면을 위치시킴
        	objCF.set_showstatusbar(false);
        	var objCust = { pStr1 : text
        					,  pStr2 : type};

        	objCF.showModal( this.getOwnerFrame(), objCust, this, "fn_popupSearch" );

        }


        this.fn_popupSearch = function(sPopId, sRtn){

        	if(sPopId == "custSearch"){
        		if( sRtn.length> 0 ){
        			var arrRtn = sRtn.split(":");
        			this.id_edit.set_value(arrRtn[0]); // id

        			this.name_edit.set_value(arrRtn[1]); // name

        			var phone = arrRtn[2].split("-");// phone
        			this.comboPhone.set_value(phone[0]);
        			this.phone_edit.set_value(phone[1]);
        			this.phone_edit1.set_value(phone[2]);

        			var email = arrRtn[3].split("@");
        			this.email_edit.set_value(email[0]); // email
        			this.email_domain_edit.set_value(email[1]); // email domain

        			this.company_edit.set_value(arrRtn[4]); // company

        			this.pos_edit.set_value(arrRtn[5]); // job position

        		}
        	}
        };








        /*
        this.fnComponentCreate = function(comName, comType, top, left, width, height, str1, str2, datasetName){ //컴포넌트이름, 컴포넌트 유형, 필터조건1, 필터조건2, bind dataset
        trace(">>>>>>>>1111오니");

        var com1 = new comType("comName", top, left, width, height);
        this.addChild(comName, com1);

        this.dsVocCategory.filter("String(UP_CODE_ID).indexOf('"+str1+"') >= 0 && String(CODE_ID).indexOf('"+str2+"') >= 0");
        this.datasetName.copyData(this.dsVocCategory, true);
        this.dsVocCategory.filter("");

        this.comName.set_innerdataset(datasetName);
        this.comName.set_datacolumn("CODE_NAME");
        this.comName.set_codecolumn("CODE_ID");
        this.comName.set_rowcount("1");
        this.comName.set_fittocontents("width");

        comName.show();
        }*/



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.voc_voc_insert_onload,this);
            this.select_btn.addEventHandler("onclick",this.select_btn_onclick,this);
            this.insert_btn.addEventHandler("onclick",this.insert_btn_onclick,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.cust_file_grid.addEventHandler("oncellclick",this.file_grid_oncellclick,this);
            this.search_cust_name_btn.addEventHandler("onclick",this.search_cust_name_btn_onclick,this);
            this.voc_type_combo.addEventHandler("onitemchanged",this.voc_type_combo_onitemchanged,this);
            this.comboEmail.addEventHandler("canitemchange",this.comboEmail_canitemchange,this);
            this.search_cust_id_btn.addEventHandler("onclick",this.search_cust_id_btn_onclick,this);
            this.FileUpTransfer00.addEventHandler("onsuccess",this.FileUpTransfer00_onsuccess,this);
            this.FileDialog00.addEventHandler("onclose",this.FileDialog00_onclose,this);
        };
        this.loadIncludeScript("voc_voc_insert.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
