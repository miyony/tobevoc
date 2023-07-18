(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Mobile_Sub");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(480,831);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_Cnt", this);
            obj._setContents("<ColumnInfo><Column id=\"CHECK_TIME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Attendance", this);
            obj._setContents("<ColumnInfo><Column id=\"EDU_PRODUCT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"ES_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"ESL_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"GUBUN_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"CHECK_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"STATUS_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_AttendFlag", this);
            obj._setContents("<ColumnInfo><Column id=\"EDU_PRODUCT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"ES_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"ESL_SEQ\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_IpList", this);
            obj._setContents("<ColumnInfo><Column id=\"XPUSH_IPLIST\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_XPushMessageTemp", this);
            obj._setContents("<ColumnInfo><Column id=\"TOPIC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"TOPIC_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"MSG\" type=\"STRING\" size=\"256\"/><Column id=\"MSG_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"YMD_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"MSG_KEY\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"Chk\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Notice", this);
            obj._setContents("<ColumnInfo><Column id=\"AN\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new XPush("XPush", this);
            obj.getSetter("onerror").set("XPush_onerror");
            obj.getSetter("onkeepalive").set("XPush_onkeepalive");
            obj.getSetter("onsuccess").set("XPush_onsuccess");
            obj.getSetter("protocolversion").set("3");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divBody","0","0","480","831",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div04");
            this.addChild(obj.name, obj);

            obj = new Button("btnHelp","23","16","40","40",null,null,null,null,null,null,this.divBody.form);
            obj.set_taborder("7");
            obj.set_cssclass("btn_TF_Help");
            obj.set_visible("false");
            this.divBody.addChild(obj.name, obj);

            obj = new Button("btnCont","247","559","203","70",null,null,null,null,null,null,this.divBody.form);
            obj.set_taborder("0");
            obj.set_text("찾아오는길");
            obj.set_cssclass("btn_WF_LinkMap");
            this.divBody.addChild(obj.name, obj);

            obj = new Button("btnEduInfo","30","559","203","70",null,null,null,null,null,null,this.divBody.form);
            obj.set_taborder("1");
            obj.set_text("교육과정안내");
            obj.set_cssclass("btn_WF_EduInfo");
            this.divBody.addChild(obj.name, obj);

            obj = new Button("btnQuest","30","225","203","150",null,null,null,null,null,null,this.divBody.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_Quest");
            this.divBody.addChild(obj.name, obj);

            obj = new Button("btnAttend","247","225","203","150",null,null,null,null,null,null,this.divBody.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_Attend");
            this.divBody.addChild(obj.name, obj);

            obj = new Button("btnEduHistory","30","389","203","150",null,null,null,null,null,null,this.divBody.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_EduHistory");
            this.divBody.addChild(obj.name, obj);

            obj = new Button("btnEduQegistration","247","389","203","150",null,null,null,null,null,null,this.divBody.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_EduQegistration");
            this.divBody.addChild(obj.name, obj);

            obj = new Static("Static00_01","0","70","480","2",null,null,null,null,null,null,this.divBody.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_MaintitleBg");
            this.divBody.addChild(obj.name, obj);

            obj = new Static("stCompanyLogo","7","107","248","84",null,null,null,null,null,null,this.divBody.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_TitleLogo");
            this.divBody.addChild(obj.name, obj);

            obj = new Static("stQuest1","115","254","91","37",null,null,null,null,null,null,this.divBody.form);
            obj.set_taborder("11");
            obj.set_text("자가진단");
            obj.set_cssclass("sta_WF_MainMnuTitle");
            this.divBody.addChild(obj.name, obj);

            obj = new Static("stQuest2","104","296","96","38",null,null,null,null,null,null,this.divBody.form);
            obj.set_taborder("12");
            obj.set_text("문진표 작성");
            obj.set_cssclass("sta_WF_MainMnuSub");
            this.divBody.addChild(obj.name, obj);

            obj = new Static("stAttend1","332","254","88","37",null,null,null,null,null,null,this.divBody.form);
            obj.set_taborder("13");
            obj.set_text("출결관리");
            obj.set_cssclass("sta_WF_MainMnuTitle");
            this.divBody.addChild(obj.name, obj);

            obj = new Static("stEduQegistration1","332","415","91","37",null,null,null,null,null,null,this.divBody.form);
            obj.set_taborder("14");
            obj.set_text("교육일정");
            obj.set_cssclass("sta_WF_MainMnuTitle");
            this.divBody.addChild(obj.name, obj);

            obj = new Static("stEduQegistration2","347","460","70","30",null,null,null,null,null,null,this.divBody.form);
            obj.set_taborder("15");
            obj.set_text("일정/신청");
            obj.set_cssclass("sta_WF_MainMnuSub");
            this.divBody.addChild(obj.name, obj);

            obj = new Static("stEduHistory1","115","415","91","37",null,null,null,null,null,null,this.divBody.form);
            obj.set_taborder("16");
            obj.set_text("과정관리");
            obj.set_cssclass("sta_WF_MainMnuTitle");
            this.divBody.addChild(obj.name, obj);

            obj = new Static("stEduHistory2","112","463","88","48",null,null,null,null,null,null,this.divBody.form);
            obj.set_taborder("17");
            obj.set_text("조회/취소\r\n수료증");
            obj.set_cssclass("sta_WF_MainMnuSub");
            this.divBody.addChild(obj.name, obj);

            obj = new Static("stLogin","288","20","122","32",null,null,null,null,null,null,this.divBody.form);
            obj.set_taborder("8");
            obj.set_text("로그인");
            obj.set_cssclass("sta_TF_Login");
            obj.set_textAlign("right");
            this.divBody.addChild(obj.name, obj);

            obj = new Button("Button01","418","20","32","32",null,null,null,null,null,null,this.divBody.form);
            obj.set_taborder("9");
            obj.set_cssclass("btn_TF_User");
            this.divBody.addChild(obj.name, obj);

            obj = new Button("btnMenu","23","16","40","40",null,null,null,null,null,null,this.divBody.form);
            obj.set_taborder("18");
            obj.set_cssclass("btn_TF_Mnu");
            obj.set_visible("false");
            this.divBody.addChild(obj.name, obj);

            obj = new Div("divInfo","30","91","420","112",null,null,null,null,null,null,this.divBody.form);
            obj.set_taborder("19");
            obj.set_text("Div00");
            this.divBody.addChild(obj.name, obj);

            obj = new Static("Static02","0","0","420","110",null,null,null,null,null,null,this.divBody.form.divInfo.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_UserInfoBg");
            obj.set_text("");
            this.divBody.form.divInfo.addChild(obj.name, obj);

            obj = new Static("stUserName","63","24","255","29",null,null,null,null,null,null,this.divBody.form.divInfo.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_UserInfoTxt");
            obj.set_usedecorate("true");
            this.divBody.form.divInfo.addChild(obj.name, obj);

            obj = new Static("Static08","30","27","23","23",null,null,null,null,null,null,this.divBody.form.divInfo.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_UserIcon");
            this.divBody.form.divInfo.addChild(obj.name, obj);

            obj = new Static("stEduTitle","26","65","334","24",null,null,null,null,null,null,this.divBody.form.divInfo.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_UserEduInfo");
            this.divBody.form.divInfo.addChild(obj.name, obj);

            obj = new Button("btnSelect","365","64","25","25",null,null,null,null,null,null,this.divBody.form.divInfo.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_EduSelect");
            this.divBody.form.divInfo.addChild(obj.name, obj);

            obj = new Button("btnSetup","365","26","25","25",null,null,null,null,null,null,this.divBody.form.divInfo.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_Setup");
            this.divBody.form.divInfo.addChild(obj.name, obj);

            obj = new Static("stNotice","329","19","26","39",null,null,null,null,null,null,this.divBody.form.divInfo.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_MainNoticeD");
            obj.set_usedecorate("true");
            this.divBody.form.divInfo.addChild(obj.name, obj);

            obj = new Static("stAttend2","273","298","143","30",null,null,null,null,null,null,this.divBody.form);
            obj.set_taborder("20");
            obj.set_text("QR코드생성");
            obj.set_cssclass("sta_WF_MainMnuSub");
            this.divBody.addChild(obj.name, obj);

            obj = new Static("stAttend3","273","328","143","30",null,null,null,null,null,null,this.divBody.form);
            obj.set_taborder("21");
            obj.set_text("퇴실( 19 : 00 )");
            obj.set_cssclass("sta_WF_AttendOut");
            obj.set_visible("false");
            this.divBody.addChild(obj.name, obj);

            obj = new Static("stStamp","187","146","225","208",null,null,null,null,null,null,this.divBody.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_Stamp");
            obj.set_text("");
            obj.set_visible("false");
            this.divBody.addChild(obj.name, obj);

            obj = new Static("stMessage","32","639","385","31",null,null,null,null,null,null,this.divBody.form);
            obj.set_taborder("23");
            obj.set_usedecorate("true");
            obj.set_text(" [ 공지 ] 투비교육포털 앱 개발 자료    2021-07-01");
            obj.set_cssclass("sta_WF_UserEduInfo");
            obj.set_textAlign("left");
            this.divBody.addChild(obj.name, obj);

            obj = new Button("btnSelect","425","644","25","25",null,null,null,null,null,null,this.divBody.form);
            obj.set_taborder("24");
            obj.set_cssclass("btn_WF_EduSelect");
            this.divBody.addChild(obj.name, obj);

            obj = new Div("divBottom","0",null,"480","141",null,"0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","0","82","100.00%","59",null,null,null,null,null,null,this.divBottom.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_MainBottomBg");
            obj.set_text("");
            this.divBottom.addChild(obj.name, obj);

            obj = new Button("btnMovie","15","100","190","22",null,null,null,null,null,null,this.divBottom.form);
            obj.set_taborder("1");
            obj.set_text("유튜브 교육동영상");
            obj.set_cssclass("btn_WF_Movie");
            this.divBottom.addChild(obj.name, obj);

            obj = new Button("btnPlaynexa","220","100","219","22",null,null,null,null,null,null,this.divBottom.form);
            obj.set_taborder("2");
            obj.set_text("넥사크로플랫폼 커뮤니티");
            obj.set_cssclass("btn_WF_Playnexa");
            this.divBottom.addChild(obj.name, obj);

            obj = new Button("btnSupport","454","100","199","22",null,null,null,null,null,null,this.divBottom.form);
            obj.set_taborder("3");
            obj.set_text("투비소프트고객지원");
            obj.set_cssclass("btn_WF_Support");
            this.divBottom.addChild(obj.name, obj);

            obj = new Button("btnFacebook","668","100","219","22",null,null,null,null,null,null,this.divBottom.form);
            obj.set_taborder("4");
            obj.set_text("투비소프트 공식 페이스북");
            obj.set_cssclass("btn_WF_Facebook");
            this.divBottom.addChild(obj.name, obj);

            obj = new Button("btnTobeTong","902","100","219","22",null,null,null,null,null,null,this.divBottom.form);
            obj.set_taborder("5");
            obj.set_text("투비소프트 신개념 웹진");
            obj.set_cssclass("btn_WF_TobeTong");
            this.divBottom.addChild(obj.name, obj);

            obj = new Button("Button02","41","0","170","55",null,null,null,null,null,null,this.divBottom.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_LinkPhone");
            obj.set_text("");
            this.divBottom.addChild(obj.name, obj);

            obj = new Static("Static05","241","9","1","35",null,null,null,null,null,null,this.divBottom.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_Split");
            this.divBottom.addChild(obj.name, obj);

            obj = new Static("Static04_00","101","32","102","27",null,null,null,null,null,null,this.divBottom.form);
            obj.set_taborder("8");
            obj.set_text("02-2140-7224");
            obj.set_cssclass("sta_WF_LinkSubTxtNo");
            this.divBottom.addChild(obj.name, obj);

            obj = new Static("Static00","101","4","97","25",null,null,null,null,null,null,this.divBottom.form);
            obj.set_taborder("9");
            obj.set_text("교육문의");
            obj.set_cssclass("sta_WF_LinkTxt");
            this.divBottom.addChild(obj.name, obj);

            obj = new Button("Button00","261","0","170","55",null,null,null,null,null,null,this.divBottom.form);
            obj.set_taborder("10");
            obj.set_cssclass("btn_WF_LinkFAQ");
            obj.set_text("");
            this.divBottom.addChild(obj.name, obj);

            obj = new Static("stFaq","320","4","61","25",null,null,null,null,null,null,this.divBottom.form);
            obj.set_taborder("11");
            obj.set_text("FAQ");
            obj.set_cssclass("sta_WF_LinkTxt");
            this.divBottom.addChild(obj.name, obj);

            obj = new Static("Static04_00_00","320","32","98","27",null,null,null,null,null,null,this.divBottom.form);
            obj.set_taborder("12");
            obj.set_text("자주하는 질문");
            obj.set_cssclass("sta_WF_LinkSubTxt");
            this.divBottom.addChild(obj.name, obj);

            obj = new CheckBox("chkBannerPause","441","67","30","30",null,null,null,null,null,null,this.divBottom.form);
            obj.set_taborder("13");
            obj.set_cssclass("chk_WF_Pause");
            this.divBottom.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divBody.form.divInfo.form
            obj = new Layout("default","",0,0,this.divBody.form.divInfo.form,function(p){});
            this.divBody.form.divInfo.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divBody.form
            obj = new Layout("default","",0,0,this.divBody.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.btnHelp.set_taborder("7");
                p.btnHelp.set_cssclass("btn_TF_Help");
                p.btnHelp.set_visible("false");
                p.btnHelp.move("23","16","40","40",null,null);

                p.btnCont.set_taborder("0");
                p.btnCont.set_text("찾아오는길");
                p.btnCont.set_cssclass("btn_WF_LinkMap");
                p.btnCont.move("247","559","203","70",null,null);

                p.btnEduInfo.set_taborder("1");
                p.btnEduInfo.set_text("교육과정안내");
                p.btnEduInfo.set_cssclass("btn_WF_EduInfo");
                p.btnEduInfo.move("30","559","203","70",null,null);

                p.btnQuest.set_taborder("2");
                p.btnQuest.set_cssclass("btn_WF_Quest");
                p.btnQuest.move("30","225","203","150",null,null);

                p.btnAttend.set_taborder("3");
                p.btnAttend.set_cssclass("btn_WF_Attend");
                p.btnAttend.move("247","225","203","150",null,null);

                p.btnEduHistory.set_taborder("4");
                p.btnEduHistory.set_cssclass("btn_WF_EduHistory");
                p.btnEduHistory.move("30","389","203","150",null,null);

                p.btnEduQegistration.set_taborder("5");
                p.btnEduQegistration.set_cssclass("btn_WF_EduQegistration");
                p.btnEduQegistration.move("247","389","203","150",null,null);

                p.Static00_01.set_taborder("6");
                p.Static00_01.set_cssclass("sta_WF_MaintitleBg");
                p.Static00_01.move("0","70","480","2",null,null);

                p.stCompanyLogo.set_taborder("10");
                p.stCompanyLogo.set_cssclass("sta_WF_TitleLogo");
                p.stCompanyLogo.move("7","107","248","84",null,null);

                p.stQuest1.set_taborder("11");
                p.stQuest1.set_text("자가진단");
                p.stQuest1.set_cssclass("sta_WF_MainMnuTitle");
                p.stQuest1.move("115","254","91","37",null,null);

                p.stQuest2.set_taborder("12");
                p.stQuest2.set_text("문진표 작성");
                p.stQuest2.set_cssclass("sta_WF_MainMnuSub");
                p.stQuest2.move("104","296","96","38",null,null);

                p.stAttend1.set_taborder("13");
                p.stAttend1.set_text("출결관리");
                p.stAttend1.set_cssclass("sta_WF_MainMnuTitle");
                p.stAttend1.move("332","254","88","37",null,null);

                p.stEduQegistration1.set_taborder("14");
                p.stEduQegistration1.set_text("교육일정");
                p.stEduQegistration1.set_cssclass("sta_WF_MainMnuTitle");
                p.stEduQegistration1.move("332","415","91","37",null,null);

                p.stEduQegistration2.set_taborder("15");
                p.stEduQegistration2.set_text("일정/신청");
                p.stEduQegistration2.set_cssclass("sta_WF_MainMnuSub");
                p.stEduQegistration2.move("347","460","70","30",null,null);

                p.stEduHistory1.set_taborder("16");
                p.stEduHistory1.set_text("과정관리");
                p.stEduHistory1.set_cssclass("sta_WF_MainMnuTitle");
                p.stEduHistory1.move("115","415","91","37",null,null);

                p.stEduHistory2.set_taborder("17");
                p.stEduHistory2.set_text("조회/취소\r\n수료증");
                p.stEduHistory2.set_cssclass("sta_WF_MainMnuSub");
                p.stEduHistory2.move("112","463","88","48",null,null);

                p.stLogin.set_taborder("8");
                p.stLogin.set_text("로그인");
                p.stLogin.set_cssclass("sta_TF_Login");
                p.stLogin.set_textAlign("right");
                p.stLogin.move("288","20","122","32",null,null);

                p.Button01.set_taborder("9");
                p.Button01.set_cssclass("btn_TF_User");
                p.Button01.move("418","20","32","32",null,null);

                p.btnMenu.set_taborder("18");
                p.btnMenu.set_cssclass("btn_TF_Mnu");
                p.btnMenu.set_visible("false");
                p.btnMenu.move("23","16","40","40",null,null);

                p.divInfo.set_taborder("19");
                p.divInfo.set_text("Div00");
                p.divInfo.move("30","91","420","112",null,null);

                p.stAttend2.set_taborder("20");
                p.stAttend2.set_text("QR코드생성");
                p.stAttend2.set_cssclass("sta_WF_MainMnuSub");
                p.stAttend2.move("273","298","143","30",null,null);

                p.stAttend3.set_taborder("21");
                p.stAttend3.set_text("퇴실( 19 : 00 )");
                p.stAttend3.set_cssclass("sta_WF_AttendOut");
                p.stAttend3.set_visible("false");
                p.stAttend3.move("273","328","143","30",null,null);

                p.stStamp.set_taborder("22");
                p.stStamp.set_cssclass("sta_WF_Stamp");
                p.stStamp.set_text("");
                p.stStamp.set_visible("false");
                p.stStamp.move("187","146","225","208",null,null);

                p.stMessage.set_taborder("23");
                p.stMessage.set_usedecorate("true");
                p.stMessage.set_text(" [ 공지 ] 투비교육포털 앱 개발 자료    2021-07-01");
                p.stMessage.set_cssclass("sta_WF_UserEduInfo");
                p.stMessage.set_textAlign("left");
                p.stMessage.move("32","639","385","31",null,null);

                p.btnSelect.set_taborder("24");
                p.btnSelect.set_cssclass("btn_WF_EduSelect");
                p.btnSelect.move("425","644","25","25",null,null);
            	}
            );
            this.divBody.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divBody.form
            obj = new Layout("Layout0","",0,0,this.divBody.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static05.move("30","762",null,"450","30",null);

                p.Static03.move("Static02:10","162",null,"130","30",null);

                p.Static02.move("30","162","44.71%","130",null,null);

                p.Static01.move("Static00:10","22",null,"130","30",null);

                p.divMain07.move("30","1222","46.24%","350",null,null);

                p.Static07.move("Static06:12","1222",null,"350","30",null);

                p.Static04.move("30","302",null,"450","30",null);

                p.Static00.move("30","22","44.71%","130",null,null);
            	}
            );
            this.divBody.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divBody.form
            obj = new Layout("Layout1","",0,0,this.divBody.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static01.set_maxwidth("");
                p.Static01.move("20","152",null,"120","20",null);

                p.Static02.set_maxwidth("");
                p.Static02.move("20","282",null,"120","20",null);

                p.Static03.set_text("");
                p.Static03.set_maxwidth("");
                p.Static03.move("20","412",null,"120","20",null);

                p.Static05.move("20","812",null,"250","20",null);

                p.Static07.move("20","1322",null,"250","20",null);

                p.divMain07.move("20","1072",null,"240","20",null);

                p.Static04.move("20","542",null,"260","20",null);

                p.Static00.set_maxwidth("");
                p.Static00.move("20","22",null,"120","20",null);
            	}
            );
            this.divBody.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divBottom.form
            obj = new Layout("default","",0,0,this.divBottom.form,function(p){});
            this.divBottom.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",480,831,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divBody.form.stMessage","text","ds_Notice","TITLE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Mobile_main_content.xfdl", function() {
        /**
        *  nexacro 17
        *  @Creator  교육서비스팀
        *  @CreateDate  2019.09.23
        *  @Desction    스크립트 표준 및 주석 표준 정의
        ************** 소스 수정 이력 ***********************************************
        *  date            Modifier                Description
        *******************************************************************************
        */

        this.Mobile_sub_onload = function(obj,e)
        {

        	this.fn_setBanner();

        };

        this.fn_setBanner = function()
        {
        	this.objAni = new nexacro.Animation("Animation00", this);
        	this.addChild("Animation00", this.objAni);
        	this.objAni.set_duration(2000);
        	this.objAni.set_delay(1000);
        	this.objAni.set_easing("linear");
        	this.objAni.setEventHandler("oncomplete", this.Animation00_oncomplete, this);

        	this.fn_bannerPlay();
        }

        this.arrObj = [this.divBottom.form.btnMovie, this.divBottom.form.btnPlaynexa, this.divBottom.form.btnSupport, this.divBottom.form.btnFacebook, this.divBottom.form.btnTobeTong];
        this.fn_bannerPlay = function()
        {
        	var nGap = 15;
        	for(var i=0; i<this.arrObj.length; i++)
        	{
        		this.objAni.addTarget( "AniItem"+i, this.arrObj[i], "left:["+this.arrObj[i].left+", "+(this.arrObj[i].left - this.arrObj[0].width - nGap)+"]" );	// left:[15, (15-190-15)]
        	}

        	this.objAni.play();
        };

        this.Animation00_oncomplete = function(obj, e)
        {
        	//맨 앞녀석 맨끝으로 좌표 변경
        	this.arrObj[0].set_left(this.arrObj[4].getOffsetRight() + 15);
         	this.objAni.removeTarget( "AniItem0");
         	this.objAni.removeTarget( "AniItem1");
         	this.objAni.removeTarget( "AniItem2");
         	this.objAni.removeTarget( "AniItem3");
         	this.objAni.removeTarget( "AniItem4");

        	//Array 첫번째를 삭제 후 마지막에 set(바로 하는 메소드가 있나 모르것네)
        	var btnObj = this.arrObj[0];
        	this.arrObj.splice(0, 1);
        	this.arrObj.push(btnObj);

        	this.fn_bannerPlay();
        }

        this.divBottom_chkBannerPause_onchanged = function(obj,e)
        {
        	if(e.postvalue){
        		this.objAni.pause();
        	}
        	else{
        		this.objAni.play();
        	}
        };


        this.divBottom_onlbuttondown = function(obj,e)
        {
        //	this.objAni.pause();
        };

        this.divBottom_onclick_Comm = function(obj,e)
        {
        //	this.objAni.play();
        	switch(obj.name)
        	{
        		case "btnMovie":
        			system.execBrowser("https://www.youtube.com/channel/UCWGq1rxVBf-sgqS2MpSo_Yw/playlists");
        			break;
        		case "btnSupport":
        			system.execBrowser("http://support.tobesoft.co.kr/Support/index.html");
        			break;

        		case "btnPlaynexa":
        			system.execBrowser("https://www.playnexacro.com");
        			break;

        		case "btnTobeTong":
        			system.execBrowser("http://tobetong.com/");
        			break;
        		case "btnFacebook":
        			system.execBrowser("https://www.facebook.com/TOBESOFTKOREA");
        			break;

        	}
        };

        this.fn_setUserName = function()
        {
        	var objGds = nexacro.getApplication().gdsUserInfo;

        	var icnt = objGds.getRowCount();
        	if(icnt > 0)
        	{
        		if(objGds.getColumn(objGds.rowposition,"ManagerChk") == '688')
        		{
        			this.divBody.form.btnMenu.set_visible(true);
        			this.divBody.form.btnMenu.bringToFront();
        			this.divBody.form.btnHelp.set_visible(false);
        		} else {
        			this.divBody.form.btnHelp.set_visible(true);
        			this.divBody.form.btnHelp.bringToFront();
        			this.divBody.form.btnMenu.set_visible(false);
        		}
        	} else {
        		this.divBody.form.btnHelp.set_visible(true);
        		this.divBody.form.btnHelp.bringToFront();
        		this.divBody.form.btnMenu.set_visible(false);
        	}

        	if(this.parent.parent.fn_loginCheck() == true)
        	{
        		this.divBody.form.divInfo.form.stUserName.set_text("<fs v='18px'><b v='true'>" + this.parent.parent.fn_getUserName() + "</b></fs> 님 반갑습니다.");
        		this.divBody.form.stLogin.set_text("로그아웃");
        		this.divBody.form.divInfo.bringToFront();
        		this.divBody.form.stCompanyLogo.set_visible(false);
        		this.divBody.form.divInfo.set_visible(true);
        		this.fn_setLoginPage();

        	} else {
        		this.divBody.form.divInfo.form.stUserName.set_text("");
        		this.divBody.form.stLogin.set_text("로그인");
        		this.divBody.form.stCompanyLogo.bringToFront();
        		this.divBody.form.stCompanyLogo.set_visible(true);
        		this.divBody.form.divInfo.set_visible(false);

        		this.divBody.form.btnAttend.addEventHandler("onclick", "", this);
        		this.divBody.form.stAttend1.addEventHandler("onclick", "", this);
        		this.divBody.form.stAttend2.set_visible(true)
        		//this.divBody.form.stAttend2.set_cssclass("sta_WF_AttendOut")
        		this.divBody.form.stAttend2.set_cssclass("sta_WF_MainMnuSub");
        		this.divBody.form.stAttend2.set_text("QR코드생성"); //sta_WF_MnuExclusion

        		this.divBody.form.stAttend3.set_visible(false);
        		this.divBody.form.stStamp.set_visible(false);
        	}
        }

        /**
         * @description 스텝/차트애니메이션
        */
        this.Mobile_sub_ontimer = function(obj,e)
        {

        };

        this.fn_setLoginPage = function()
        {
        	var objApp = nexacro.getApplication();
        	if(objApp.gdsUserEduList.getRowCount() == 0)
        	{

        		this.divBody.form.stAttend2.set_cssclass("sta_WF_MnuExclusion");
        		this.divBody.form.stAttend2.set_text("미대상");
        		this.divBody.form.stAttend3.set_visible(false);
        		this.divBody.form.stStamp.set_visible(false);

        		this.divBody.form.btnAttend.addEventHandler("onclick", "", this);
        		this.divBody.form.stAttend1.addEventHandler("onclick", "", this);
        		this.divBody.form.stAttend2.addEventHandler("onclick", "", this);
        		this.divBody.form.stAttend3.addEventHandler("onclick", "", this);

        		this.divBody.form.divInfo.form.btnSelect.set_visible(false);
        		this.fn_setEduTitle(false);
        		return;
        	} else {
        		this.fn_DailyChk();
        	}
        }

        this.divBody_btnQuest_onclick = function(obj,e)
        {
        	if(this.parent.parent.fn_loginCheck() == false)
        	{
        		nexacro.getApplication().GV_TARGET_TITLE = "자가진단";
        		nexacro.getApplication().GV_TARGET_URL = "mobile::Mobile_frmQuestionnaire.xfdl";

        		this.parent.parent.fn_Login();
        	} else {
        		this.parent.parent.fn_openMenu("1010","");
        	}
        };


        this.fn_divBody_btnAttend_onclick = function()
        {
        	if(this.parent.parent.fn_loginCheck() == false)
        	{
        //		this.alert("로그인 후 이용이 가능합니다.");
        		nexacro.getApplication().GV_TARGET_TITLE = "";
        		nexacro.getApplication().GV_TARGET_URL = "goMain";

        		this.parent.parent.fn_Login();
        	} else {
        		//로그인시 버튼에 대한 이벤트는 addEventHandler로 만들어짐

        	}
        }


        this.divBody_btnEduHistory_onclick = function(obj,e)
        {
        	if(this.parent.parent.fn_loginCheck() == false)
        	{
        		//this.alert("로그인 후 이용이 가능합니다.");
        		nexacro.getApplication().GV_TARGET_TITLE = "과정관리";
        		nexacro.getApplication().GV_TARGET_URL = "mobile::Mobile_frmEduHistory.xfdl";
        		this.parent.parent.fn_Login();
        	} else {
        		this.parent.parent.fn_openMenu("1030","");
        	}
        };


        this.divBody_btnEduInfo_onclick = function(obj,e)
        {
        	this.parent.parent.fn_openMenu("1050","");
        };

        this.divBody_btnCont_onclick = function(obj,e)
        {
        	this.parent.parent.fn_openMenu("1060","");
        };

        this.divBody_stFaq_onclick = function(obj,e)
        {
        //	this.parent.parent.fn_openMenu("1070","");
        };



        this.btnMenu_onclick = function(obj,e)
        {
        	this.parent.parent.fn_Menuclick();
        };

        this.divBody_btnHelp_onclick = function(obj,e)
        {
        	//this.parent.parent.fn_openMenu("1080","");
        	//this.parent.parent.fn_Login();
        	/*
        	var sPopupId  = "chf_popupSelect";
            var sUrl      = "mobile::Mobile_main_content_HelpDetail.xfdl";
        	var oArg      = "";//{pStr:"Nexacro", pNum:1234, pObj:this.ds_emp};
        	var sCallBack = "fn_popupCallback";
            var oOption   = {title : "이용안내"};
        	this.gfn_openEduPopup(sPopupId, sUrl, oArg, sCallBack, oOption);
        	*/
        	this.parent.parent.fn_openMenu("1080","");
        };

        this.divBody_ImageViewer02_onclick = function(obj,e)
        {

        };

        this.divBody_ImageViewer04_onclick = function(obj,e)
        {

        };




        this.divBody_btnEduQegistration_onclick = function(obj,e)
        {
        	if(this.parent.parent.fn_loginCheck() == false)
        	{
        		//this.alert("로그인 후 이용이 가능합니다.");
        		nexacro.getApplication().GV_TARGET_TITLE = "교육일정";
        		nexacro.getApplication().GV_TARGET_URL = "mobile::Mobile_frmEduRegistration.xfdl";
        		this.parent.parent.fn_Login();
        	} else {
        		this.parent.parent.fn_openMenu("1040","");
        	}
        };

        this.divBody_stLogin_onclick = function(obj,e)
        {
        	this.parent.parent.fn_Login();
        };


        this.fn_DailyChk = function()
        {
        	//해당일에 참가하는 교육과정을 확인한다.
        	//한건 이상인 경우 팝업을 통해 해당 과정을 선택하고,
        	//한건인 경우에는 진행한다.
        	var objGds = nexacro.getApplication().gdsUserEduList;
        	var objGEduSelect = nexacro.getApplication().gdsUserEduListSelect;

        	var sESL_SEQ = "";

        	if(objGds.getRowCount() > 1)
        	{
        		this.divBody.form.divInfo.form.btnSelect.set_visible(true);
        		if(objGEduSelect.getRowCount() == 0)
        		{
        			this.fn_popup();
        		} else {
        			this.fn_StudentCheckList();
        		}

        	} else {
        		this.divBody.form.divInfo.form.btnSelect.set_visible(false);
        		if(objGEduSelect.getRowCount() == 0)
        		{
        			objGEduSelect.addRow();
        		}
        		objGEduSelect.setColumn(objGEduSelect.rowposition,"EDU_PRODUCT_CODE",objGds.getColumn(objGds.rowposition,"EDU_PRODUCT_CODE"));
        		objGEduSelect.setColumn(objGEduSelect.rowposition,"ES_SEQ",objGds.getColumn(objGds.rowposition,"ES_SEQ"));
        		objGEduSelect.setColumn(objGEduSelect.rowposition,"ESL_SEQ",objGds.getColumn(objGds.rowposition,"ESL_SEQ"));
        		objGEduSelect.setColumn(objGEduSelect.rowposition,"EDU_SCHEDULE_CAPTION",objGds.getColumn(objGds.rowposition,"EDU_SCHEDULE_CAPTION"));
        		objGEduSelect.setColumn(objGEduSelect.rowposition,"EDU_AREA_CAPTION",objGds.getColumn(objGds.rowposition,"EDU_AREA_CAPTION"));
        		objGEduSelect.setColumn(objGEduSelect.rowposition,"EDU_DATE",objGds.getColumn(objGds.rowposition,"EDU_DATE"));
        		objGEduSelect.setColumn(objGEduSelect.rowposition,"EDU_SHORT_DATE",objGds.getColumn(objGds.rowposition,"EDU_SHORT_DATE"));
        		this.fn_StudentCheckList();
        	}
        };

        this.fn_popup = function()
        {
        	var sPopupId  = "EduListPop";
        	var sUrl      = "mobile::Mobile_frmUserEduListPop.xfdl";
        	var oArg      = "";//{pStr:"Nexacro", pNum:1234, pObj:this.ds_emp};
        	var sCallBack = "fn_popupCallback";
        	var oOption   = {title : this.gfn_getWord("msg.user.edulist")};

        	var objChildFrame = new ChildFrame();
        	objChildFrame.init("EduListPop"
        	                  , 0
        					  , 0
        					  , -1
        					  , -1
        					  , null
        					  , null
        					  , sUrl);

        	objChildFrame.set_openalign("center middle");

        	objChildFrame.set_overlaycolor("RGBA(0,0,0,0.80)");
        	objChildFrame.set_dragmovetype("all");
        	objChildFrame.set_showstatusbar(false);
        	objChildFrame.set_showtitlebar(false);

        	var objParam = "";

        	objChildFrame.showModal( this.getOwnerFrame()
        	                       , objParam
        						   , this
        						   , sCallBack);

        };


        //해당일자에 설문을 참여했는지 확인
        this.fn_CheckList = function()
        {
        	var objGEduSelect = nexacro.getApplication().gdsUserEduListSelect;

        	if(objGEduSelect.getRowCount() == 0) return;
        	var args = "EDU_PRODUCT_CODE=" + this.gfn_sQuote(objGEduSelect.getColumn(objGEduSelect.rowposition,"EDU_PRODUCT_CODE"))
        					  + "&ES_SEQ=" + this.gfn_sQuote(objGEduSelect.getColumn(objGEduSelect.rowposition,"ES_SEQ"))
        					 + "&ESL_SEQ=" + this.gfn_sQuote(objGEduSelect.getColumn(objGEduSelect.rowposition,"ESL_SEQ")) ;

        	this.gfn_transCOMMClear();
        	this.gfn_addTransInfo("","output",args,"001,frmQuestionnaire,1");

        	var strSvcId    = "CheckList";
        	var strSvcUrl   = "ServiceUrl::EduSqlManager/JspAgent.jsp";
        	var inData      = "";
        	var outData     = "ds_Cnt=output";
        	var strArg      = args;
        	var callBackFnc = "fnCallback";

        	this.gfn_xtransCommon( strSvcId , 	// transaction을 구분하기 위한 svc id값
        								strSvcUrl , 	// trabsaction을 요청할 주소
        								inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        								outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        								strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        								callBackFnc,
        								true); // 통신방법 정의 [생략가능]
        };

        this.fn_popupCallback = function(strPopupID, strReturn)
        {
        	if(strReturn == undefined){
        		return;
        	}

        	if(strPopupID == "EduListPop"){
         		var sRtn = strReturn.split(":");

        		if(sRtn[0] == "SUCC")
        		{
        			var objGEduSelect = nexacro.getApplication().gdsUserEduListSelect;

        			objGEduSelect.clearData();
        			objGEduSelect.addRow();
        			objGEduSelect.setColumn(objGEduSelect.rowposition,"EDU_PRODUCT_CODE",sRtn[1]);
        			objGEduSelect.setColumn(objGEduSelect.rowposition,"ES_SEQ",sRtn[2]);
        			objGEduSelect.setColumn(objGEduSelect.rowposition,"ESL_SEQ",sRtn[3]);
        			objGEduSelect.setColumn(objGEduSelect.rowposition,"EDU_SCHEDULE_CAPTION",sRtn[4]);
        			objGEduSelect.setColumn(objGEduSelect.rowposition,"EDU_AREA_CAPTION",sRtn[5]);
        			objGEduSelect.setColumn(objGEduSelect.rowposition,"EDU_DATE",sRtn[6]);
        			objGEduSelect.setColumn(objGEduSelect.rowposition,"EDU_SHORT_DATE",sRtn[7]);
        			this.fn_StudentCheckList();
        		}
        	} else if(strPopupID == "qrCode")
        	{
        		this.fn_setAttendFlag();
        	}
        };


        this.fn_setAttendFlag = function()
        {
        	var objGEduSelect = nexacro.getApplication().gdsUserEduListSelect;

        	var args = "EDU_PRODUCT_CODE=" + this.gfn_sQuote(objGEduSelect.getColumn(objGEduSelect.rowposition,"EDU_PRODUCT_CODE"))
        					  + "&ES_SEQ=" + this.gfn_sQuote(objGEduSelect.getColumn(objGEduSelect.rowposition,"ES_SEQ"))
        					 + "&ESL_SEQ=" + this.gfn_sQuote(objGEduSelect.getColumn(objGEduSelect.rowposition,"ESL_SEQ")) ;

        	this.ds_AttendFlag.clearData();
        	this.ds_AttendFlag.addRow();
        	this.ds_AttendFlag.setColumn(this.ds_AttendFlag.rowposition,"EDU_PRODUCT_CODE",objGEduSelect.getColumn(objGEduSelect.rowposition,"EDU_PRODUCT_CODE"));
        	this.ds_AttendFlag.setColumn(this.ds_AttendFlag.rowposition,"ES_SEQ",objGEduSelect.getColumn(objGEduSelect.rowposition,"ES_SEQ"));
        	this.ds_AttendFlag.setColumn(this.ds_AttendFlag.rowposition,"ESL_SEQ",objGEduSelect.getColumn(objGEduSelect.rowposition,"ESL_SEQ"));

        	this.gfn_transCOMMClear();
        	this.gfn_addTransInfo("input","",args,"","001,frmQrCode,2","","");

        	var strSvcId    = "saveAttendFlag";
        	var strSvcUrl   = "ServiceUrl::EduSqlManager/JspAgent.jsp";
        	var inData      = "input=ds_AttendFlag:U";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfn_xtransCommon( strSvcId , 	// transaction을 구분하기 위한 svc id값
        								strSvcUrl , 	// trabsaction을 요청할 주소
        								inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        								outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        								strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        								callBackFnc,
        								true); // 통신방법 정의 [생략가능]
        }

        //해당일자에 체크했는지 확인한다.
        this.fn_StudentCheckList = function()
        {
        	var objGEduSelect = nexacro.getApplication().gdsUserEduListSelect;

        	var args = "EDU_PRODUCT_CODE=" + this.gfn_sQuote(objGEduSelect.getColumn(objGEduSelect.rowposition,"EDU_PRODUCT_CODE"))
        					  + "&ES_SEQ=" + this.gfn_sQuote(objGEduSelect.getColumn(objGEduSelect.rowposition,"ES_SEQ"))
        					 + "&ESL_SEQ=" + this.gfn_sQuote(objGEduSelect.getColumn(objGEduSelect.rowposition,"ESL_SEQ")) ;

        	this.gfn_transCOMMClear();
        	this.gfn_addTransInfo("","output",args,"001,frmQrCode,1");

        	var strSvcId    = "StudentCheckList";
        	var strSvcUrl   = "ServiceUrl::EduSqlManager/JspAgent.jsp";
        	var inData      = "";
        	var outData     = "ds_Attendance=output";
        	var strArg      = args;
        	var callBackFnc = "fnCallback";

        	//일자 체크는 waitcursor를 보이지 않게 해야 화면 깜박임을 줄일 수 있다.
        	var objEnv = nexacro.getEnvironment();
        	objEnv.set_usewaitcursor(false);

        	this.gfn_xtransCommon( strSvcId , 	// transaction을 구분하기 위한 svc id값
        								strSvcUrl , 	// trabsaction을 요청할 주소
        								inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        								outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        								strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        								callBackFnc,
        								true); // 통신방법 정의 [생략가능]
        	objEnv.set_usewaitcursor(true);
        };

        /************************************************************************************************
         * CALLBACK 콜백 처리부분(Transaction, Popup)
         ************************************************************************************************/
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {

        	if(errorCode >= 0)
        	{
        		if(svcID == "IpList")
        		{
        			//메시지 초기화

        			this.ds_XPushMessageTemp.clearData();
        			this.fn_pushDisplay();
        			this.fn_setXPuxh();
        			this.fn_messageCheck();

        		} else if(svcID == "StudentCheckList")
        		{

        			if(this.ds_Attendance.getRowCount() == 2)
        			{
        				this.divBody.form.btnAttend.addEventHandler("onclick", "", this);
        				this.divBody.form.stAttend1.addEventHandler("onclick", "", this);
        				this.divBody.form.stAttend2.addEventHandler("onclick", "", this);
        				this.divBody.form.stAttend3.addEventHandler("onclick", "", this);

        				this.divBody.form.stAttend2.set_cssclass("sta_WF_AttendIn");
        				this.divBody.form.stAttend3.set_cssclass("sta_WF_AttendOut");

        				var iIRow = this.ds_Attendance.findRow("GUBUN","I");
        				if(iIRow >= 0)
        				{
        					if(this.divBody.form.stAttend2.text != "입실( " + this.ds_Attendance.getColumn(iIRow,"CHECK_TIME").substring(0,5) + " )")
        					{
        						this.divBody.form.stAttend2.set_text("입실( " + this.ds_Attendance.getColumn(iIRow,"CHECK_TIME").substring(0,5) + " )");
        					}
        				}

        				var iORow = this.ds_Attendance.findRow("GUBUN","O");
        				if(iORow >= 0)
        				{
        					this.divBody.form.stStamp.bringToFront();
        					this.divBody.form.stStamp.set_visible(true);
        					this.divBody.form.stAttend3.set_visible(true);
        					if(this.divBody.form.stAttend3.text != "퇴실( " + this.ds_Attendance.getColumn(iORow,"CHECK_TIME").substring(0,5) + " )")
        					{
        						this.divBody.form.stAttend3.set_text("퇴실( " + this.ds_Attendance.getColumn(iORow,"CHECK_TIME").substring(0,5) + " )");
        					}
        				} else {
        					this.divBody.form.stStamp.set_visible(false);
        					this.divBody.form.stAttend3.set_visible(false);
        				}

        				this.divBody.form.btnAttend.addEventHandler("onclick",this.fn_finish, this);
        				this.divBody.form.stAttend1.addEventHandler("onclick",this.fn_finish, this);
        				this.divBody.form.stAttend2.addEventHandler("onclick", this.fn_finish, this);
        				this.divBody.form.stAttend3.addEventHandler("onclick", this.fn_finish, this);

        			} else {
        				var iIRow = this.ds_Attendance.findRow("GUBUN","I");
        				if(iIRow >= 0)
        				{
        					if(this.divBody.form.stAttend2.text != "입실( " + this.ds_Attendance.getColumn(iIRow,"CHECK_TIME").substring(0,5) + " )")
        					{
        						this.divBody.form.stAttend2.set_cssclass("sta_WF_AttendIn");
        						this.divBody.form.stAttend2.set_text("입실( " + this.ds_Attendance.getColumn(iIRow,"CHECK_TIME").substring(0,5) + " )");
        					}
        				} else {
        					if(this.divBody.form.stAttend2.text != "대기(QR체크인)")
        					{
        						this.divBody.form.stAttend2.set_cssclass("sta_WF_MnuStandby");
        						this.divBody.form.stAttend2.set_text("대기(QR체크인)");
        					}
        				}

        				var iORow = this.ds_Attendance.findRow("GUBUN","O");
        				if(iORow >= 0)
        				{
        					this.divBody.form.stStamp.bringToFront();
        					this.divBody.form.stStamp.set_visible(true);
        					this.divBody.form.stAttend3.set_visible(true);

        					if(this.divBody.form.stAttend3.text != "퇴실( " + this.ds_Attendance.getColumn(iORow,"CHECK_TIME").substring(0,5) + " )")
        					{
        						this.divBody.form.stAttend3.set_cssclass("sta_WF_AttendOut");
        						this.divBody.form.stAttend3.set_text("퇴실( " + this.ds_Attendance.getColumn(iORow,"CHECK_TIME").substring(0,5) + " )");
        					}
        				} else {
        					this.divBody.form.stStamp.set_visible(false);
        					this.divBody.form.stAttend3.set_visible(false);
        				}
        				this.divBody.form.btnAttend.addEventHandler("onclick", this.fn_CheckList, this);
        				this.divBody.form.stAttend1.addEventHandler("onclick", this.fn_CheckList, this);
        				this.divBody.form.stAttend2.addEventHandler("onclick", this.fn_CheckList, this);
        				this.divBody.form.stAttend3.addEventHandler("onclick", this.fn_CheckList, this);
        			}

        			this.fn_setEduTitle(true);

        		} else if (svcID == "CheckList")
        		{
        			if(this.ds_Cnt.getRowCount() == 0)
        			{
        				var sMsgId = "edu.msg.edudatacheck.precheck";
        				var arrArg = "";
        				var sPopId = sMsgId;
        				this.gfn_alert(sMsgId, arrArg, sPopId, "fnMsgCallback");

        			} else {
        				this.fn_qrCodeCheck();
        			}
        		} else if (svcID == "saveAttendFlag")
        		{
        			this.fn_StudentCheckList();
        		}  else if(svcID == "MessageCheck")
        		{

        		}
        	}
        };



        /************************************************************************************************
         * CALLBACK 콜백 처리부분(Transaction, Popup)
         ************************************************************************************************/
        // Message Callback
        this.fnMsgCallback = function (strId, strVal)
        {
        	if(strId == "edu.msg.edudatacheck.precheck")
        	{
        		//this.parent.parent.divBody.set_url("mobile::Mobile_frmQuestionnaire.xfdl");
        //		this.parent.parent.divBody.set_url("mobile::Mobile_frmQuestionnaire.xfdl");
        		this.parent.parent.fn_openMenu("1010","");

        	} else if(strId == "edu.msg.server.error")
        	{
        		return;
        	}
        };

        this.fn_setEduTitle = function(flag)
        {
        	var objGEduSelect = nexacro.getApplication().gdsUserEduListSelect;


        	if(flag == false)
        	{
        		var stTitle = objGEduSelect.getColumn(objGEduSelect.rowposition,"EDU_SCHEDULE_CAPTION") + " / " + objGEduSelect.getColumn(objGEduSelect.rowposition,"EDU_AREA_CAPTION") + " /  "  +  objGEduSelect.getColumn(objGEduSelect.rowposition,"EDU_SHORT_DATE") ;
        		this.divBody.form.divInfo.form.stEduTitle.set_text("금일 참석가능한 교육과정이 없습니다.");
        	} else {
        		var stTitle = objGEduSelect.getColumn(objGEduSelect.rowposition,"EDU_SCHEDULE_CAPTION") + " / " + objGEduSelect.getColumn(objGEduSelect.rowposition,"EDU_AREA_CAPTION") + " /  "  +  objGEduSelect.getColumn(objGEduSelect.rowposition,"EDU_SHORT_DATE") ;
        		this.divBody.form.divInfo.form.stEduTitle.set_text(stTitle);
        	}
        }

        this.fn_finish = function()
        {

        	var sMsgId = "edu.msg.finish";
        	var arrArg = "";
        	var sPopId = sMsgId;
        	this.gfn_alert(sMsgId, arrArg, sPopId, "fnMsgCallback");
        	return;
        }

        this.fn_qrCodeCheck = function()
        {
        	var objGEduSelect = nexacro.getApplication().gdsUserEduListSelect;

        	if(objGEduSelect.getRowCount() == 0)
        	{

        		var sMsgId = "edu.msg.edudatacheck.select";
        		var arrArg = "";
        		var sPopId = sMsgId;
        		this.gfn_alert(sMsgId, arrArg, sPopId, "fnMsgCallback");
        		return;
        	}
        	var objChildFrame = new ChildFrame();
        /*
        	if(nexacro.getApplication().gdsUserInfo.getColumn(0,"UserID") == "larva74")
        	{
        */
        		objChildFrame.init("qrCode"
        						  , 0
        						  , 0
        						  , 400
        						  , 300
        						  , null
        						  , null
        						  , "mobile::Mobile_frmSeedQrCode.xfdl");
        /*
        	} else {

        		objChildFrame.init("qrCode"
        						  , 0
        						  , 0
        						  , 400
        						  , 300
        						  , null
        						  , null
        						  , "mobile::Mobile_frmQrCode.xfdl");
        	}
        */

        	objChildFrame.set_openalign("center middle");
        //	objChildFrame.set_overlaycolor("RGBA(196,196,196,0.5)")
        	objChildFrame.set_overlaycolor("RGBA(0,0,0,0.80)");
        	objChildFrame.set_dragmovetype("all");
        	objChildFrame.set_showstatusbar(false);
        	objChildFrame.set_showtitlebar(false);

        	var objParam = { pEDU_PRODUCT_CODE: objGEduSelect.getColumn(objGEduSelect.rowposition,"EDU_PRODUCT_CODE"),
        					 pESL_SEQ: objGEduSelect.getColumn(objGEduSelect.rowposition,"ESL_SEQ"),
        					 pES_SEQ: objGEduSelect.getColumn(objGEduSelect.rowposition,"ES_SEQ")
        					  };

        	objChildFrame.showModal( this.getOwnerFrame()
        	                       , objParam
        						   , this
        						   , "fn_popupCallback");
        }

        this.fn_PhoneCall = function()
        {
        	system.execBrowser("tel:02-2140-7224");
        }


        this.fn_faq = function(obj,e)
        {
        	this.parent.parent.fn_openMenu("1070","");
        };


        this.fn_setXPushIpList = function()
        {
        	if(this.fn_UserLoginXPushCheck())
        	{
        		var args = "UserID='" + nexacro.getApplication().GV_PUB_USER_ID + "'";
        		var objgdsUserInfo = nexacro.getApplication().gdsUserInfo;
        		if(objgdsUserInfo.getRowCount() > 0)
        		{

        			var args = "UserID='" + objgdsUserInfo.getColumn(objgdsUserInfo.rowposition,"UserID") + "'";
        		}

        		this.gfn_transCOMMClear();
        		this.gfn_addTransInfo("","output",args,"001,frmXPushMessage,6");
        		this.gfn_addTransInfo("","output2",args,"001,frmLogin,5");

        		var strSvcId    = "IpList";
        		var strSvcUrl   = "ServiceUrl::EduSqlManager/JspAgent.jsp";
        		var inData      = "";
        		var outData     = "ds_IpList=output gdsUserTopicList=output2";
        		var strArg      = args;
        		var callBackFnc = "fnCallback";

        		this.gfn_xtransCommon( strSvcId , 	// transaction을 구분하기 위한 svc id값
        									strSvcUrl , 	// trabsaction을 요청할 주소
        									inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        									outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        									strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        									callBackFnc,
        									true); // 통신방법 정의 [생략가능]

        	} else {

        	}
        }


        //XPush Message 송/수신을 위한 Layout세팅
        this.fn_setXPuxhDisconnect = function()
        {
        	this.XPush.disconnect();
        }

        //XPush Message 송/수신을 위한 Layout세팅
        this.fn_setXPuxh = function()
        {
        	var objGUser = nexacro.getApplication().gdsUserInfo;

        	if(this.fn_IsMobileRuntime())
        	{
        		this.XPush.set_layouturl("%USERAPP%XPushUrl/XPush_Message_Layout.xml");
        	} else
        	{
        		this.XPush.set_layouturl("XPushUrl::XPush_Message_Layout.xml");
        	}

        	if(objGUser.getRowCount() > 0)
        	{
        		if(objGUser.getColumn(objGUser.rowposition,"LoginGubun") == "U")
        		{
        			this.XPush.set_projectid("EduHub");	 //ProjectName
        			this.XPush.set_protocolversion(3);   //Protocal

        			/*
        			* connection 성공, 실패는 event 에서 발생
        			*/

        			this.XPush.set_iplist(this.ds_IpList.getColumn(this.ds_IpList.rowposition,"XPUSH_IPLIST"));

        			this.XPush.connect(objGUser.getColumn(objGUser.rowposition,"UserID"), "..."); //비번은 의미없음
        			this.XPush.set_userid(objGUser.getColumn(objGUser.rowposition,"UserID"));
        		}
        	}
        }

        this.fn_setregisterTopic = function()
        {
        	if(this.fn_UserLoginXPushCheck())
        	{

        		var objDs = nexacro.getApplication().gdsUserTopicList;
        		for(var i=0;i<objDs.getRowCount(); i ++)
        		{
        			var ret = this.XPush.registerTopic(objDs.getColumn(i,"TOPIC_TYPE"),  objDs.getColumn(i,"TOPIC_ID"));//개인별 신청교육내용
        		}

        		if(this.fn_IsMobileRuntime())
        		{
        //			trace("deviceID : [" +  system.notificationtoken + "]");
        			this.XPush.registerDevice();
        		}

        		this.fn_setsubscribe();
        	}
        }

        //사용자가 push메시지 미수신으로 설정을 바꾸는 경우
        this.fn_setunregisterTopic = function()
        {
        	var objDs = nexacro.getApplication().gdsUserTopicList;
        	for(var i=0;i<objDs.getRowCount(); i ++)
        	{
        		var ret = this.XPush.unregisterTopic(objDs.getColumn(i,"TOPIC_TYPE"),  objDs.getColumn(i,"TOPIC_ID"));//개인별 신청교육내용
        	}

        /* 미수신으로 바꿀때 굳이 모바일 정보는 unregisterDevice 해주지 않아도 메시지 전달안함
        	if(this.fn_IsMobileRuntime())
        	{
        		this.XPush.unregisterDevice();
        	}
        */
        }

        this.fn_setsubscribe = function()
        {
        	var objgdsXPushMessage = nexacro.getApplication().gdsXPushMessage;
        	var objDs = nexacro.getApplication().gdsUserTopicList;

        // 로그인 처리 필요
        	if(this.fn_UserLoginXPushCheck())
        	{
        		/* XPUSH 세팅정보 추가 2021-01-27  start */
        			for(var i=0;i<objDs.getRowCount(); i ++)
        			{
        				//this.XPush.subscribe(objDs.getColumn(i,"TOPIC_TYPE"), objDs.getColumn(i,"TOPIC_ID"), this, objgdsXPushMessage, "insert", "fn_push_callback")
        				this.XPush.subscribe(objDs.getColumn(i,"TOPIC_TYPE"), objDs.getColumn(i,"TOPIC_ID"), this, this.ds_XPushMessageTemp, "insert", "fn_push_callback")
        			}

        		/* XPUSH 세팅정보 추가 2021-01-27  end */
        		this.fn_requestMessageCount();
        	}
        }

        this.fn_requestMessageCount = function()
        {
        	var objDs = nexacro.getApplication().gdsUserTopicList;

        	for(var i=0;i<objDs.getRowCount(); i++)
        	{
        		this.XPush.requestMessageCount(objDs.getColumn(i,"TOPIC_TYPE"), objDs.getColumn(i,"TOPIC_ID"));
        	}
        }

        this.fn_pushDisplay = function()
        {

        	var objgdsXPushMessage = nexacro.getApplication().gdsXPushMessage;

        	//this.stNotice.set_visible(true);
        	//this.stNotice.set_usedecorate(true);
        	this.divBody.form.divInfo.form.stNotice.set_visible(true);
        	this.divBody.form.divInfo.form.stNotice.set_usedecorate(true);

        	if(objgdsXPushMessage.getRowCount() > 0)
        	{
        		this.divBody.form.divInfo.form.stNotice.set_cssclass("sta_WF_MainNotice");
        	} else {
        		this.divBody.form.divInfo.form.stNotice.set_cssclass("sta_WF_MainNoticeD");
        	}

        	//메시시 화면이 오픈되어 있는 경우 새롭게 갱신해 준다.
        	if(nexacro.getApplication().mainframe.ChildFrame.form.divMain.form.divBody.form["fn_createXpushMessage"])
        	{
        		nexacro.getApplication().mainframe.ChildFrame.form.divMain.form.divBody.form.fn_delete("noSave");
        	}


        }

        this.fn_push_callback = function(Row, ChangeColumn, AllColumns, Type, ActionType, MessageId)
        {
        /*
        	trace("XPush00_push_callback\n" +
        		" - ActionType : " + ActionType + "\n" +
        		" - Row : " + Row + "\n" +
        		" - MessageId : " + MessageId + "\n" +
        		" - Type : " + Type + "\n" +
        		" - ActionType : " + ActionType + "\n" +
        		"\n"
        //		 objgdsXPushMessage.saveXML()
        	);
        */

        	if(ActionType == "RELI")
        	{
        		/* 수신확인 메시지 전송 */
        		this.XPush.sendResponse(MessageId);

        		this.ds_XPushMessageTemp.set_enableevent(false);

        		this.ds_XPushMessageTemp.setColumn(Row,"MSG_KEY",MessageId);
        		this.ds_XPushMessageTemp.setColumn(Row,"USER_ID",this.XPush.userid);
        		this.ds_XPushMessageTemp.set_enableevent(true);
        	}

        	var objgdsXPushMessage = nexacro.getApplication().gdsXPushMessage;
        	var nDupliRowCnt = objgdsXPushMessage.getCaseCount("MSG_KEY == '"+ MessageId +"'");

        	if (nDupliRowCnt ==  0) {

        		var toRow = objgdsXPushMessage.addRow();
        		objgdsXPushMessage.copyRow(toRow,this.ds_XPushMessageTemp, Row);
        //		objgdsXPushMessage.set_keystring("S:-YMD_TIME");

        		this.fn_pushDisplay();
        	}
        }



        // e.statuscode------------------------------------
        // -100 - Push 서버가 “Byec”를 보냈거나 서버와의 규약에 따라 종료되었습니다. (e.action이 -1임)
        // -101 - 타임아웃 처리되었습니다.
        // -200 - Command Auth Error. 현재 선택된 IP에 대해인증에 오류가 발생하였습니다.
        // -201 - iplist 속성에 등록되어 있는 Push 서버로의 접속이 모두 실패했습니다.
        // -202 - 데이터 전송 채널 인증(authentication)에 오류가 발생하였습니다.
        // -300 - 서버로의 접속에 실패했습니다.
        // -301 - 패킷 전송(send/recv) 오류가 발생하였습니다.
        // -302 - 이미 PUSH서버에 접속되어 있습니다.
        // -401 - X-PUSH 서버와 접속해제(disconnect) 요청을 실패했습니다.
        // -501 - X-PUSH 서버로부터 메시지 수신중단(suspend) 요청을 실패했습니다.
        // -601 - X-PUSH 서버로부터 메시지 수신 재시작(resume) 요청을 실패했습니다.
        // -701 - X-PUSH 서버로 topic 등록/등록해제 요청을 실패했습니다.
        // -801 - 메시지 포맷 버전 정보가 일치하지 않습니다.
        // -901 - 신뢰성 메시지에 대한 수신응답 전송에 실패했습니다.
        // -902 - 미수신 메시지 요청을 실패했습니다.
        // -1001 - X-PUSH 서버로 모바일 DeviceToken 정보 등록요청을 실패했습니다.
        // -1002 - X-PUSH 서버로 유저 topic 정보 등록요청(reqisterUser)이 실패했습니다.
        // -1003 - X-PUSH 서버로 유저 topic 정보 등록해제(unregisterUser)요청이 실패했습니다.
        // -1004 - 미수신 메시지 정보요청을 실패했습니다.
        // -1072 - 디바이스 등록(RGST)시 중복된 경우 발생. registerDevice 기등록 정상오류
        // -1092 - registerTopic 기등록 정상오류
        this.XPush_onerror = function(obj,e)
        {

        	if(e.message != null) {
        /*
        		trace( "e.message != null\n" +
        			" - e.message.messagetype: " + e.message.messagetype + "\n" +
        			" - e.message.messagekey: " + e.message.messagekey + "\n" +
        			" - e.message.messageid: " + e.message.messageid + "\n" +
        			" - e.message.devicetoken: " + e.message.devicetoken
        		);
        */
        	}
        /*
        	if((e.action  == -1) && (e.statuscode == 100))
        	{
        		trace("server error");
        	}
        	if( e.action == 0 ) {
        		trace("connect() error");
        	}
        	if( e.action == 1 ) {
        		trace("disconnect() error");
        	}
        	if( e.action == 2) {
        		trace("subscribe() error");
        	}
        	if( e.action == 3) {
        		trace("unsubscribe() error");
        	}
        	if( e.action == 4) {
        		trace("requestMessage() error");
        	}
        	if( e.action == 5) {
        		trace("sendResponse() error");
        	}
        	if( e.action == 6) {
        		trace("reqisterDevice() error");
        	}
        	if( e.action == 7) {
        		trace("unreqisterDevice() error");
        	}
        	if( e.action == 8) {
        		trace("reqisterUser() error");
        	}
        	if( e.action == 9) {
        		trce("unreqisterUser() error");
        	}
        */
        };

        this.XPush_onkeepalive = function(obj,e)
        {
        //	trace("KEEP");
        };

        this.XPush_onsuccess = function(obj,e)
        {
        	/*
        	alert("XPush00_onsuccess Event\n" +
        			" - eventid: " + e.eventid + "\n" +
        			" - statuscode: " + e.statuscode + "\n" +
        			" - errormsg: " + e.errormsg + "\n" +
        			" - reason: " + e.reason + "\n" +
        			" - action: " + e.action + "\n" +
        			" - serverip: " + e.serverip + "\n" +
        			" - serverport: " + e.serverport + "\n" +
        			" - e.message: " + e.message + "\n" +
        			" - e.command : " + e.command + "\n" +
        			" - e.message : " + e.message + "\n" +
        			" - e.returnvalue : " + e.returnvalue);
        */
        	if(e.message != null) {
        /*
        		trace( "e.message != null\n" +
        			" - e.message.messagetype: " + e.message.messagetype + "\n" +
        			" - e.message.messagekey: " + e.message.messagekey + "\n" +
        			" - e.message.messageid: " + e.message.messageid + "\n" +
        			" - e.message.returnvalue: " + e.message.returnvalue + "\n" +
        			" - e.message.devicetoken: " + e.message.devicetoken
        		);


        */
        	}
        	if( e.action == 0 ) {
        //		trace("connect() success");
        		this.fn_setregisterTopic();
        //		trace("connect() success after fn_setregisterTopic");
        	}
        	if( e.action == 1 ) {
        //		trace("disconnect() success");
        	}
        	if( e.action == 2) {
        //		trace("subscribe() success");
        	}
        	if( e.action == 3) {
        //		trace("unsubscribe() success");
        	}
        	if( e.action == 4) {
        //		trace("requestMessage() success");
        	}
        	if( e.action == 5) {
        //		trace("sendResponse() success");
        	}
        	if( e.action == 6) {
        //		trace("reqisterDevice() success");
        	}
        	if( e.action == 7) {
        //		trace("unreqisterDevice() success");
        	}
        	if( e.action == 8) {
        //		trace("reqisterUser() success");
        	}
        	if( e.action == 9) {
        //		trace("unreqisterUser() success");
        	}
        	if( e.action == 10) {
        //		trace("requestMessageCount() success");
        		if(e.message.returnvalue != undefined || e.message.returnvalue != null) {
        			var returnvalue = e.message.returnvalue;
        //			trace("length : " + returnvalue.length);
        			for(var i = 0; i < returnvalue.length; i++) {
        //				trace("index:" + i + " : " + returnvalue[i].topictype + " : " + returnvalue[i].topicid + " : " + returnvalue[i].count);
        				if(returnvalue[i].count > 0)
        				{
        					this.XPush.requestMessage(returnvalue[i].topictype, returnvalue[i].topicid);
        				}
        			}
        		}
        	}
        };


        this.stNotice_onclick = function(obj,e)
        {
        	this.fn_xpush_openMessage();
        };

        this.fn_xpush_openMessage = function()
        {

        	if(this.parent.parent.fn_loginCheck() == false)
        	{
        		//this.alert("로그인 후 이용이 가능합니다.");
        		nexacro.getApplication().GV_TARGET_TITLE = "알림";
        		nexacro.getApplication().GV_TARGET_URL = "mobile::Mobile_frmXPushMessage.xfdl";
        		this.parent.parent.fn_Login();
        	} else {
        		this.parent.parent.fn_openMenu("1090","");
        	}
        }

        this.divBody_divInfo_btnSetup_onclick = function(obj,e)
        {
        	this.parent.parent.fn_openMenu("1091","");
        };

        this.fn_IsMobileRuntime = function ()
        {
        	var osVersion = system.osversion;
        	var sBrowser = system.navigatorname;

        	if ( !this.gfn_isNull(osVersion)  && !this.gfn_isNull(sBrowser) )
        	{
        		osVersion = osVersion.toUpperCase();
        		sBrowser = sBrowser.toUpperCase();

        		if ( ((osVersion.indexOf("ANDROID") >= 0) ||(osVersion.indexOf("IOS") >= 0)) && (sBrowser.indexOf("NEXACRO") >= 0) )
        		{
        			return true;
        		}
        	}

        	return false;
        };

        //사용자 로그인 및 수인 동의여부 확인
        this.fn_UserLoginXPushCheck = function()
        {
        	var objGUser = nexacro.getApplication().gdsUserInfo;
        	if(objGUser.getRowCount() > 0)
        	{
        		if(objGUser.getColumn(objGUser.rowposition,"LoginGubun") == "U")
        		{
        			if(nexacro.getApplication().gdsUserState.getRowCount() > 0)
        			{
        				if(nexacro.getApplication().gdsUserState.getColumn(nexacro.getApplication().gdsUserState.rowposition,"MESSAGE_STATE") == "N")
        				{
        					return false;
        				}
        			}
        			return true;
        		} else {
        			return false;
        		}
        	}  else {
        		return false;
        	}
        }


        //사용자 알림상태 체크
        this.fn_UserLoginXPushStatusCheck = function()
        {
        	var objGUser = nexacro.getApplication().gdsUserInfo;
        	if(objGUser.getRowCount() > 0)
        	{
        		if(objGUser.getColumn(objGUser.rowposition,"LoginGubun") == "U")
        		{
        			if(nexacro.getApplication().gdsUserState.getRowCount() > 0)
        			{
        				if(nexacro.getApplication().gdsUserState.getColumn(nexacro.getApplication().gdsUserState.rowposition,"MESSAGE_STATE") == "N")
        				{
        					return true;
        				}
        			}
        		}
        	}
        	return false
        }


        this.divBody_Button00_onclick = function(obj,e)
        {
        // 	var appDs = nexacro.getApplication().gdsXPushMessage;
        // 	for(var i=0; i<appDs.getRowCount(); i++)
        // 	{
        // 		trace("fn_row===" + appDs.getColumn(i,"YMD_TIME"));
        // 	}
        	this.fn_openNotice();
        };


        this.fn_openNotice = function()
        {
        	this.parent.parent.fn_openMenu("1092","");
        }

        this.divBody_stMessage_onclick = function(obj,e)
        {
        	this.fn_openNotice();
        };

        this.divBody_btnSelect_onclick = function(obj,e)
        {
        	this.fn_openNotice();
        };

        this.fn_messageCheck = function()
        {

        	this.gfn_transCOMMClear();
        	this.gfn_addTransInfo("","output","","001,frmNotice,6");
            var args  = "";
        	var strSvcId    = "MessageCheck";
        	var strSvcUrl   = "ServiceUrl::EduSqlManager/JspAgent.jsp";
        	var inData      = "";
        	var outData     = "ds_Notice=output";
        	var strArg      = args;
        	var callBackFnc = "fnCallback";

        	this.gfn_xtransCommon( strSvcId , 	// transaction을 구분하기 위한 svc id값
        								strSvcUrl , 	// trabsaction을 요청할 주소
        								inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        								outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        								strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        								callBackFnc,
        								true); // 통신방법 정의 [생략가능]
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Mobile_sub_onload,this);
            this.addEventHandler("ontimer",this.Mobile_sub_ontimer,this);
            this.divBody.form.btnHelp.addEventHandler("onclick",this.divBody_btnHelp_onclick,this);
            this.divBody.form.btnCont.addEventHandler("onclick",this.divBody_btnCont_onclick,this);
            this.divBody.form.btnEduInfo.addEventHandler("onclick",this.divBody_btnEduInfo_onclick,this);
            this.divBody.form.btnQuest.addEventHandler("onclick",this.divBody_btnQuest_onclick,this);
            this.divBody.form.btnAttend.addEventHandler("onclick",this.fn_divBody_btnAttend_onclick,this);
            this.divBody.form.btnEduHistory.addEventHandler("onclick",this.divBody_btnEduHistory_onclick,this);
            this.divBody.form.btnEduQegistration.addEventHandler("onclick",this.divBody_btnEduQegistration_onclick,this);
            this.divBody.form.stQuest1.addEventHandler("onclick",this.divBody_btnQuest_onclick,this);
            this.divBody.form.stQuest2.addEventHandler("onclick",this.divBody_btnQuest_onclick,this);
            this.divBody.form.stAttend1.addEventHandler("onclick",this.fn_divBody_btnAttend_onclick,this);
            this.divBody.form.stEduQegistration1.addEventHandler("onclick",this.divBody_btnEduQegistration_onclick,this);
            this.divBody.form.stEduQegistration2.addEventHandler("onclick",this.divBody_btnEduQegistration_onclick,this);
            this.divBody.form.stEduHistory1.addEventHandler("onclick",this.divBody_btnEduHistory_onclick,this);
            this.divBody.form.stEduHistory2.addEventHandler("onclick",this.divBody_btnEduHistory_onclick,this);
            this.divBody.form.stLogin.addEventHandler("onclick",this.divBody_stLogin_onclick,this);
            this.divBody.form.Button01.addEventHandler("onclick",this.divBody_stLogin_onclick,this);
            this.divBody.form.btnMenu.addEventHandler("onclick",this.btnMenu_onclick,this);
            this.divBody.form.divInfo.form.btnSelect.addEventHandler("onclick",this.fn_popup,this);
            this.divBody.form.divInfo.form.btnSetup.addEventHandler("onclick",this.divBody_divInfo_btnSetup_onclick,this);
            this.divBody.form.divInfo.form.stNotice.addEventHandler("onclick",this.stNotice_onclick,this);
            this.divBody.form.stAttend2.addEventHandler("onclick",this.fn_divBody_btnAttend_onclick,this);
            this.divBody.form.stAttend3.addEventHandler("onclick",this.fn_divBody_btnAttend_onclick,this);
            this.divBody.form.stMessage.addEventHandler("onclick",this.divBody_stMessage_onclick,this);
            this.divBody.form.btnSelect.addEventHandler("onclick",this.divBody_btnSelect_onclick,this);
            this.divBottom.addEventHandler("ontouchstart",this.divBottom_ontouchstart,this);
            this.divBottom.addEventHandler("ontouchend",this.divBottom_ontouchend,this);
            this.divBottom.form.Static03.addEventHandler("onclick",this.divBottom_Static03_onclick,this);
            this.divBottom.form.btnMovie.addEventHandler("onclick",this.divBottom_onclick_Comm,this);
            this.divBottom.form.btnPlaynexa.addEventHandler("onclick",this.divBottom_onclick_Comm,this);
            this.divBottom.form.btnSupport.addEventHandler("onclick",this.divBottom_onclick_Comm,this);
            this.divBottom.form.btnFacebook.addEventHandler("onclick",this.divBottom_onclick_Comm,this);
            this.divBottom.form.btnTobeTong.addEventHandler("onclick",this.divBottom_onclick_Comm,this);
            this.divBottom.form.Button02.addEventHandler("onclick",this.fn_PhoneCall,this);
            this.divBottom.form.Static04_00.addEventHandler("onclick",this.fn_PhoneCall,this);
            this.divBottom.form.Static00.addEventHandler("onclick",this.fn_PhoneCall,this);
            this.divBottom.form.Button00.addEventHandler("onclick",this.fn_faq,this);
            this.divBottom.form.stFaq.addEventHandler("onclick",this.fn_faq,this);
            this.divBottom.form.Static04_00_00.addEventHandler("onclick",this.fn_faq,this);
            this.divBottom.form.chkBannerPause.addEventHandler("onchanged",this.divBottom_chkBannerPause_onchanged,this);
        };
        this.loadIncludeScript("Mobile_main_content.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
