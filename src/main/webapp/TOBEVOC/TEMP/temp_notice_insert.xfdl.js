(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("temp_notice_insert");
            this.set_titletext("공지사항 상세보기");
            if (Form == this.constructor)
            {
                this._setFormPosition(1050,770);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsBoard", this);
            obj._setContents("<ColumnInfo><Column id=\"ID\" type=\"STRING\" size=\"256\"/><Column id=\"GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"CNTN\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DTTM\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER\" type=\"STRING\" size=\"256\"/><Column id=\"DEL_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ATTACH_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CATEGORY\" type=\"STRING\" size=\"256\"/><Column id=\"NOTICE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"HIT_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"POST_DTTM\" type=\"STRING\" size=\"256\"/><Column id=\"NO\" type=\"INT\" size=\"256\"/><Column id=\"UPDATE_DTTM\" type=\"STRING\" size=\"256\"/><Column id=\"UPDATE_USER\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUpload", this);
            obj._setContents("<ColumnInfo><Column id=\"FILE_ID\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SIZE\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DTTM\" type=\"STRING\" size=\"256\"/><Column id=\"BOARD_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new FileUpTransfer("FileUpTransfer00", this);
            this.addChild(obj.name, obj);


            obj = new FileDialog("userFileDialog", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sub_stat1","7","79","120","42",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("하단 노출 여부");
            obj.set_cssclass("sta_WF_DetailLabel");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("sub_stat2","7","120","120","42",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("제목");
            obj.set_cssclass("sta_WF_DetailEssential");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("sub_stat3","7","161","120","449",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("내용");
            obj.set_cssclass("sta_WF_DetailEssential");
            this.addChild(obj.name, obj);

            obj = new Static("sub_stat6","126","79","387","42",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("");
            obj.set_cssclass("sta_WF_DetailArea");
            this.addChild(obj.name, obj);

            obj = new Static("sub_stat8","126","120","893","42",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("");
            obj.set_cssclass("sta_WF_DetailArea");
            this.addChild(obj.name, obj);

            obj = new Static("sub_stat9","126","161","893","449",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("");
            obj.set_cssclass("sta_WF_DetailArea");
            this.addChild(obj.name, obj);

            obj = new Static("sub_stat5","512","79","120","42",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("상단 게시기간");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.addChild(obj.name, obj);

            obj = new Static("sub_stat7","631","79","388","42",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("");
            obj.set_cssclass("sta_WF_DetailArea");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_name","133","126","878","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Static("sub_stat","10","29","74","50",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("입력사항");
            obj.set_cssclass("sta_WF_SubtitleDown");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","5","720",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("W10");
            obj.set_visible("false");
            obj.set_background("pink");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","1040","0","10","720",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("W10");
            obj.set_visible("false");
            obj.set_background("pink");
            this.addChild(obj.name, obj);

            obj = new Static("title_stat","10","10","150","19",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("공지사항 등록");
            obj.set_cssclass("sta_WF_FrmTitle");
            this.addChild(obj.name, obj);

            obj = new Button("select_btn",null,"5","65","30","151",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("목록");
            obj.set_font("13px/normal \"Verdana\",\"Malgun Gothic\"");
            obj.set_cssclass("btn_WF_basic02");
            this.addChild(obj.name, obj);

            obj = new Button("insert_btn",null,"5","65","30","5",null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_basic02");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00","137","85","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_falsevalue("N");
            obj.set_truevalue("Y");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("calForm","637","85","294","30",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("Div00");
            obj.set_url("Work::comp_calFromTo.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("sub_stat4","7","609","120","151",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("첨부파일");
            obj.set_cssclass("sta_WF_DetailLabel");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("sub_stat10","126","609","893","151",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("");
            obj.set_cssclass("sta_WF_DetailArea");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","77","672","29","28",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_cssclass("btn_WF_inquiry");
            this.addChild(obj.name, obj);

            obj = new Grid("file_grid","135","617","875","134",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_binddataset("dsUpload");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"300\"/><Column size=\"300\"/><Column size=\"111\"/><Column size=\"96\"/><Column size=\"63\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"파일아이디\"/><Cell col=\"1\" text=\"파일명\"/><Cell col=\"2\" text=\"확장자\"/><Cell col=\"3\" text=\"파일크기\"/><Cell col=\"4\"/></Band><Band id=\"body\"><Cell text=\"bind:FILE_ID\"/><Cell col=\"1\" text=\"bind:FILE_NAME\"/><Cell col=\"2\" text=\"bind:FILE_TYPE\"/><Cell col=\"3\" text=\"bind:FILE_SIZE\"/><Cell col=\"4\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"삭제\" cssclass=\"btn_WF_DeleteIcon\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("del_btn",null,"5","65","30","78",null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("삭제");
            obj.set_font("13px/normal \"Verdana\",\"Malgun Gothic\"");
            obj.set_cssclass("btn_WF_basic02");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.calForm
            obj = new Layout("default","",0,0,this.calForm.form,function(p){});
            this.calForm.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1050,770,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","edt_name","value","dsBoard","TITLE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","CheckBox00","value","dsBoard","NOTICE_YN");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","Work::comp_calFromTo.xfdl");
        };
        
        // User Script
        this.registerScript("temp_notice_insert.xfdl", function() {

        /************************************************************************************************
        * FORM 변수 선언 영역
        ************************************************************************************************/
        this.objApp = nexacro.getApplication();
        var crud = this.objApp.gdsOpenBoard.rowcount;

        /************************************************************************************************
        * FORM EVENT 영역(onload, onbeforeclose)
        ************************************************************************************************/
        this.temp_notice_insert_onload = function(obj,e)
        {

        	this.fnNoticeCheck();
        	var sUrl = "http://localhost:8088/edupack_egov/smartEditor/SmartEditor2.html";
        	var webEditor = new WebBrowser("webEditor", 133, 170, 879, 430);
        	this.addChild("webEditor", webEditor);
        	webEditor.set_url(sUrl);

        	webEditor.show();

        	// update인 경우
        	if(crud == "1"){
        		this.detailBoard();
        		this.insert_btn.set_text("수정");
        		this.title_stat.set_text("공지사항 상세보기");

        		//var postDttm = this.dsUpload.getColumn("0","POST_DTTM");
        	}
        };

        /************************************************************************************************
        * 버튼 영역
        ************************************************************************************************/

        /* 저장버튼 */
        this.insert_btn_onclick = function(obj,e)
        {
        	var crud = this.objApp.gdsOpenBoard.rowcount;
        	//alert(crud);
        	if(crud == "1"){ //수정버튼
        		this.updateBoard();

        	}else{ //저장버튼
        		this.insertBoard();
        	}
        };


        /* 삭제버튼 */
        this.del_btn_onclick = function(obj,e)
        {
        	this.deleteBoard();
        };


        /* 목록버튼 */
        this.select_btn_onclick = function(obj,e)
        {
        	this.go("TEMP::temp_notice_select.xfdl");
        };


        /************************************************************************************************
        * TRANSACTION 영역
        ************************************************************************************************/

        /* insertBoard */
        this.insertBoard = function(){

        	this.fn_data();

        	var strSvcId    = "insertBoard";
        	var strSvcUrl   = "svcUrl::insertBoard.do";
        	var inData      = "dsBoard=dsBoard:u dsUpload=dsUpload";
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

        /* updateBoard */
        this.updateBoard = function(){
        	this.fn_data();

        	var strSvcId    = "updateBoard";
        	var strSvcUrl   = "svcUrl::updateBoard.do";
        	var inData      = "dsBoard=dsBoard dsUpload=dsUpload:u";
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

        /* detailBoard */
        this.detailBoard = function(){

        	var no = this.objApp.gdsOpenBoard.getColumn(0,"NO");

        	var strSvcId    = "detailNotice";
        	var strSvcUrl   = "svcUrl::detailBoard.do";
        	var inData      = "";
        	var outData     = "dsBoard=dsBoard dsUpload=dsUpload";
        	var strArg      = "no='" + no + "'";
        	var callBackFnc = "fnCallback";

        	this.transaction(strSvcId
        		,strSvcUrl
        		,inData
        		,outData
        		,strArg
        		,callBackFnc);

        }

        /* deleteBoard */
        this.deleteBoard = function(){
        	if(this.confirm("삭제하시겠습니까?")){

        		// file db 삭제
        		var strSvcId    = "deleteBoard";
        		var strSvcUrl   = "svcUrl::deleteBoard.do";
        		var inData      = "dsBoard=dsBoard dsUpload=dsUpload";
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

        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	switch(svcID) {

        	case "insertBoard":

        		if(this.dsUpload.rowcount > 0){ //첨부파일이 있으면 업로드 실행
        			this.fnFileUpload();
        		}

        		alert("등록되었습니다");
        		this.go("TEMP::temp_notice_select.xfdl");

        		break;

        	case "detailNotice":

        		var objDom =this.webEditor.getProperty("document").getProperty("all");
        		objDom.getProperty("ir1").setProperty("value", this.dsBoard.getColumn(0, "CNTN"));
        		var date = this.dsBoard.getColumn(0,"POST_DTTM").split(",");
        		var fromDate = date[0];
        		var toDate = date[1];
        		this.calForm.form.fnSetFromDate(fromDate);
        		this.calForm.form.fnSetToDate(toDate);

        		this.fnNoticeCheck();

        		break;

        	case "deleteBoard":

        		if(this.dsUpload.rowcount > 0){ //첨부파일이 있으면 업로드 실행
        			this.fnFileUpload();
        		}


        		alert("삭제되었습니다");
        		this.go("TEMP::temp_notice_select.xfdl");

        		break;

        	case "updateBoard":

        		if(this.dsUpload.rowcount > 0){ //첨부파일이 있으면 업로드 실행
        			this.fnFileUpload();
        		}

        		alert("수정되었습니다");

        		break;

        	}
        };



        /************************************************************************************************
        * 사용자 FUNCTION 영역
        ************************************************************************************************/

        /* data 가공 */
        this.fn_data = function(){

        	// 네이버에디터 getCntn
        	var objDom =this.webEditor.getProperty("document").getProperty("all"); //editor의 전체 프로퍼티를 받아옴
        	objDom.getProperty("editorGetBtn").callMethod("click");
        	var sData = objDom.getProperty("ir1").getProperty("value");

        	//alert(sData);

        	// 게시기간
        	if(this.CheckBox00.value == 'Y' ){
        		var objForm = this.calForm.form;
        		var ststDttm = objForm.fnGetFromDate();
        		var endDttm = objForm.fnGetToDate();
        		var postDttm = ststDttm +","+endDttm;

        		this.dsBoard.setColumn(0, "POST_DTTM", postDttm);
        	}

        	var gubun = "01"; //공지사항 gubun

        	// 글쓴이
        	var regUser = this.objApp.gdsUserInfo.getColumn(0, "userId");

        	// 게시판
        	var crud = this.objApp.gdsOpenBoard.rowcount;
        	if(crud == "1"){
        		this.dsBoard.setColumn(0, "UPDATE_DTTM", this.gfnGetDate());
        		this.dsBoard.setColumn(0, "UPDATE_USER", regUser);
        	}else{
        		this.dsBoard.setColumn(0, "REG_DTTM", this.gfnGetDate());
        		this.dsBoard.setColumn(0, "REG_USER", regUser);
        		this.dsBoard.setColumn(0, "UPDATE_DTTM", this.gfnGetDate());
        		this.dsBoard.setColumn(0, "UPDATE_USER", regUser);
        	}

        	this.dsBoard.setColumn(0, "CNTN", sData);
        	this.dsBoard.setColumn(0, "GUBUN", gubun);


        	// 파일 다운로드
        	var uploadCnt = this.dsUpload.getRowCount();
        	if(uploadCnt > 0 ){	// 첨부파일 있음
        		this.dsBoard.setColumn(0, "ATTACH_YN", "Y");
        		for(var i=0; i<uploadCnt; i++){
        			this.dsUpload.setColumn(i, "REG_DTTM", this.gfnGetDate());
        			this.dsUpload.setColumn(i, "REG_USER", regUser);
        			this.dsUpload.setColumn(i, "FILE_GUBUN", gubun);
        		}
        	}else{  //첨부파일 없음
        		this.dsBoard.setColumn(0, "ATTACH_YN", "N");
        	}

        }


        /* 상단 게시할 경우 */
        this.CheckBox00_onchanged = function(obj,e)
        {
        	this.fnNoticeCheck();
        };

        this.fnNoticeCheck = function(){
        	if(this.CheckBox00.value == 'Y' ){
        		this.calForm.set_enable(true);
        	}else{
        		this.calForm.form.fnSetFromDate("");
        		this.calForm.form.fnSetToDate("");
        		this.calForm.set_enable(false);
        	}

        }


        /* fileUpload */
        this.fnFileUpload = function(){

        	var sUploadUrl = "http://localhost:8088/edupack_egov/fileUpload.do";
        	this.FileUpTransfer00.upload(sUploadUrl);
        }

        /* file upload 로직 */
        this.Button00_onclick = function(obj,e)
        {
        	this.userFileDialog.open("fileselect", 3, "%UserApp%"); // fileDialog
        	//alert("오니");
        };

        this.FileUpTransfer00_onsuccess = function(obj,e)
        {
        	var objDs = e.datasets[0];

        	for(var i=0; i< objDs.rowcount; i++){
        		var nRow = this.dsUpload.findRow("FILE_NAME", objDs.getColumn(i, "filename"));
        		if(nRow > -1){
        			this.dsUpload.setColumn(nRow, "FILE_ID", objDs.getColumn(i, "fileid"));
        			this.dsUpload.setColumn(nRow, "FILE_NAME", objDs.getColumn(i, "filename"));
        			this.dsUpload.setColumn(nRow, "FILE_SIZE", objDs.getColumn(i, "filesize"));
        		}
        	}
        };

        this.userFileDialog_onclose = function(obj,e){
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
        				var nRow = this.dsUpload.addRow();
        				this.dsUpload.setColumn(nRow, "FILE_ID", sFileName);
        				this.dsUpload.setColumn(nRow, "FILE_NAME", sFileName);
        				this.dsUpload.setColumn(nRow, "FILE_TYPE", sFileType);

        			}
        		}
        	}
        };

        /* 파일업로드 grid 버튼이벤트 */
        this.Grid00_oncellclick = function(obj,e)
        {

        	//var dnCellIdx = 5;
        	var rmCellIdx = 4;

        	/*if(e.col == dnCellIdx){ // 5번째 cell(다운로드버튼)이 눌리면
        	var sFileId = this.dsUpload.getColumn(e.row, "fileid");
        	var sDownUrl = "http://localhost:8088/edupack_egov/filedownload.do";

        	var sFileInfo = "aaa.js, bbb.png, ccc.xml"; // 이상태로 서버로 넘겨서 이걸 잘라서 사용함


        	this.FileDownTransfer00.setPostData("downfilename", sFileId);
        	this.FileDownTransfer00.download(sDownUrl);

        	}else */

        	if(e.col == rmCellIdx){ // 4번째 cell(삭제버튼)이 눌리면
        		var sFileName = this.dsUpload.getColumn(e.row, "FILE_NAME");
        		//alert(sFileName);

        		if(this.gfnIsNull(this.dsUpload.getColumn(e.row, "FILE_SIZE"))){
        			this.dsUpload.deleteRow(e.row);
        			this.FileUpTransfer00.removeFile(sFileName);

        		}else{
        			// file 서버 삭제
        			this.dsUpload.deleteRow(e.row);

        			var sFileId = this.dsUpload.getColumn(e.row, "FILE_ID");
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



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.temp_notice_insert_onload,this);
            this.title_stat.addEventHandler("onclick",this.Static01_onclick,this);
            this.select_btn.addEventHandler("onclick",this.select_btn_onclick,this);
            this.insert_btn.addEventHandler("onclick",this.insert_btn_onclick,this);
            this.CheckBox00.addEventHandler("onchanged",this.CheckBox00_onchanged,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.file_grid.addEventHandler("oncellclick",this.Grid00_oncellclick,this);
            this.del_btn.addEventHandler("onclick",this.del_btn_onclick,this);
            this.FileUpTransfer00.addEventHandler("onsuccess",this.FileUpTransfer00_onsuccess,this);
            this.userFileDialog.addEventHandler("onclose",this.userFileDialog_onclose,this);
        };
        this.loadIncludeScript("temp_notice_insert.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
