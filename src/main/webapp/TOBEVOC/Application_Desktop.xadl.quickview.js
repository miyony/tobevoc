(function()
{
    return function()
    {
        this.on_loadAppVariables = function()
        {		
            var obj = null;
            
			// global dataobject
		
            // global dataset
            obj = new Dataset("gdsUserInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"userId\" type=\"STRING\" size=\"256\"/><Column id=\"userName\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gdsMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"menuNo\" type=\"STRING\" size=\"256\"/><Column id=\"menuId\" type=\"STRING\" size=\"256\"/><Column id=\"menuName\" type=\"STRING\" size=\"256\"/><Column id=\"auth\" type=\"STRING\" size=\"256\"/><Column id=\"etc1\" type=\"STRING\" size=\"256\"/><Column id=\"etc2\" type=\"STRING\" size=\"256\"/><Column id=\"etc3\" type=\"STRING\" size=\"256\"/><Column id=\"upMenu\" type=\"STRING\" size=\"256\"/><Column id=\"level\" type=\"STRING\" size=\"256\"/><Column id=\"menuUrl\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gdsOpenForm", this);
            obj._setContents("<ColumnInfo><Column id=\"FORM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_URL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gdsOpenBoard", this);
            obj._setContents("<ColumnInfo><Column id=\"NO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gdsRegularJob", this);
            obj._setContents("<ColumnInfo><Column id=\"JOB_ID\" type=\"STRING\" size=\"256\"/><Column id=\"JOB_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"JOB_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"CRON\" type=\"STRING\" size=\"256\"/><Column id=\"JOB_CNTN\" type=\"STRING\" size=\"256\"/><Column id=\"POPUP_NOTI_YN\" type=\"STRING\" size=\"256\"/><Column id=\"MAIL_NOTI_YN\" type=\"STRING\" size=\"256\"/><Column id=\"DEL_YN\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER\" type=\"STRING\" size=\"256\"/><Column id=\"UPDATE_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"UPDATE_USER\" type=\"STRING\" size=\"256\"/><Column id=\"DATE_CATEGORY\" type=\"STRING\" size=\"256\"/><Column id=\"SUB_CATEGORY\" type=\"STRING\" size=\"256\"/><Column id=\"BIMONTHLY_YN\" type=\"STRING\" size=\"256\"/><Column id=\"WEEK_DETAILS\" type=\"STRING\" size=\"256\"/><Column id=\"MONTH_DETAILS\" type=\"STRING\" size=\"256\"/><Column id=\"DAY_DETAILS\" type=\"STRING\" size=\"256\"/><Column id=\"COMPLATE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"BEFORE_CRON\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);
            
            // global variable
            this._addVariable("evUserId","");
            this._addVariable("evUserNm","");
            
            obj = null;
        };
        
        // property, event, createMainFrame
        this.on_initApplication = function()
        {
            // properties
            this.set_id("Application_Desktop");
            this.set_screenid("Desktop_screen,phone");
            this.set_licenseurl("NexacroN_client_license.xml");

            if (this._is_attach_childframe)
            	return;
            
            // frame
            var mainframe = this.createMainFrame("mainframe","0","0","1280","940",null,null,this);
            mainframe.set_showtitlebar("true");
            mainframe.set_showstatusbar("false");
            mainframe.set_titletext("TOBEVOC");
            mainframe.set_showcascadetitletext("false");
            mainframe.set_openalign("center middle");
            mainframe.set_statusbarheight("0");
            mainframe.set_background("#F5F7FC");
            mainframe.on_createBodyFrame = this.mainframe_createBodyFrame;
            // tray

        };
        
        this.loadPreloadList = function()
        {

        };
        
        this.mainframe_createBodyFrame = function()
        {
            var obj = new ChildFrame("QuickViewFrame", null, null, null, null, null, null, "", this);
            
            obj.set_showtitlebar("false");
            obj.set_showstatusbar("false");
            obj.set_border("0px none");
			
            this.addChild(obj.name, obj);
            obj.set_formurl(nexacro._quickview_formurl);
            this.frame = obj;
            
            obj = null;
        };
        
        this.on_initEvent = function()
        {
        };
		// script Compiler
        this.registerScript("Application_Desktop.xadl", function() {

        this.gvVFrameSet   = "";
        this.gvLoginFrame  = "";
        this.gvHFrame      = "";
        this.gvLeftFrame   = "";
        this.gvVFrameSet1  = "";
        this.gvTopFrame    = "";
        this.gvWorkFrame   = "";
        this.gvMainFrame   = "";
        this.gvMdiFrame    = "";
        this.gvBottomFrame = "";


        this.objApp = nexacro.getApplication();
        this.Application_onload = function(obj,e){


        	// Frame 변수 저장
        	this.gvVFrameSet	= this.objApp.mainframe.VFrameSet;                                			// VFrameSet
        	this.gvLoginFrame	= this.objApp.mainframe.VFrameSet.frameLogin; 				   				// Login Frame
        	this.gvHFrame       = this.objApp.mainframe.VFrameSet.HFrameSet;                      			// HFrame
        	this.gvLeftFrame    = this.objApp.mainframe.VFrameSet.HFrameSet.frameLeft;            			// Left Frame
        	this.gvVFrameSet1   = this.objApp.mainframe.VFrameSet.HFrameSet.VFrameSet1;           			// VFrameSet1
        	this.gvTopFrame     = this.objApp.mainframe.VFrameSet.frameTop;  								// Top Frame
        	this.gvWorkFrame    = this.objApp.mainframe.VFrameSet.HFrameSet.VFrameSet1.framesetWork;         // Work Form
        	this.gvMainFrame    = this.objApp.mainframe.VFrameSet.HFrameSet.VFrameSet1.frameMain;  			// Main Form
        	this.gvMdiFrame     = this.objApp.mainframe.VFrameSet.HFrameSet.VFrameSet1.frameNavi;  			// Mdi Navi Frame
        	this.gvBottomFrame	= this.objApp.mainframe.VFrameSet.frameBottom;  								// Bottom Frame

        	if (system.navigatorname != "nexacro")	{
        		// 새로고침 방지(ctrl+N, ctrl+R, F5)
        		document.onkeydown = function() {
        			if ( (event.ctrlKey == true && (event.keyCode == 78 || event.keyCode == 82)) || (event.keyCode == 116) )
        			{
        				event.keyCode = 0;

        				// 현재 열려져 있는 화면 reload
        				var curWinId = objApp.gvMdiFrame.form.fnGetCurTab();

        				if(curWinId != false) {
        					var objFrame = objApp.gvWorkFrame.frames;
        					objFrame[curWinId].form.fnFormReload();
        				}

        				return false;
        			}
        		};
        	}

        	// 로그인 화면 open
        	this.gvLoginFrame.set_formurl("FrameBase::Form_Login.xfdl");

        }

        /*******************************************************************************
         * Function명 : gfn_Today
         * 설명       : 해당 PC의 오늘 날짜를 가져온다.
         * parameter  : None
         * return     : string
         ******************************************************************************/
        this.gfn_Today = function ()
        {
        	var strToday = "";
        	var objDate = new Date();

        	var strToday = objDate.getFullYear() + "";
        	strToday += this.gfn_Right("0" + (objDate.getMonth() + 1), 2);
        	strToday += this.gfn_Right("0" + objDate.getDate(), 2);

        	return strToday;
        };

        /*******************************************************************************
         * Function Name: gfn_AddDate
         * Description  : 입력값으로 날짜계산
         * Arguments    : date 기준일( 예 : "20160909" ) , nOffSet 증가, 감소 일 (+3 , -3)
         * Return       : yyyyMMdd형태의 날짜 ( 예 : "20160906" )
        ******************************************************************************/
        this.gfn_AddDate = function (date, nOffSet)
        {
        	var nYear = parseInt(date.substr(0, 4));
            var nMonth = parseInt(date.substr(4, 2));
            var nDate = parseInt(date.substr(6, 2)) + nOffSet;

            return this.gfn_Datetime(nYear, nMonth, nDate);
        }

        /**********************************************************************************
         * 함수명      : gfn_Right
         * 설명        : 문자열의 오른쪽부분을 지정한 길이만큼 Return 한다.
         * argument    : strString (오른부분을 얻어올 원본 문자열)
         *                     nSize (얻어올 크기. [Default Value = 0])
         * return Type : String
         * return 내용 : 오른쪽 부분이 얻어진 문자열.
         **********************************************************************************/
        this.gfn_Right = function (strString, nSize)
        {
        	if (this.gfn_IsEmpty(strString) || this.gfn_IsEmpty(nSize))
        	{
        		return "";
        	}
        	var nStart = String(strString).length;
        	var nEnd = Number(nStart) - Number(nSize);
        	var rtnVal = strString.substring(nStart, nEnd);

        	return rtnVal;
        };

        /******************************************************************************
         * Function명 : gfn_IsEmpty
         * 설명       : 값이 존재하는지 여부 체크
         * Params     : val   값
         * Return     : true  값이 존재하지 않음
         *              false 값이 존재
         ******************************************************************************/
        this.gfn_IsEmpty = function (val)
        {
        	var sVal = new String(val);
        	val = new String(val);
        	if (val == null || val == "null" || sVal.trim().length <= 0 || escape(val) == "undefined")
        	{
        		return true;
        	}
        	else
        	{
        		return false;
        	}
        };

        this.gfn_Datetime = function (nYear, nMonth, nDate)
        {
            if (this.gfn_Trim(nYear.toString()).length >= 5)
            {
                var sDate    = new String(nYear);
                var nYear    = sDate.substr(0,4);
                var nMonth   = sDate.substr(4,2);
                var nDate    = ((sDate.substr(6,2) == "") ? 1 : sDate.substr(6,2));
                var nHours   = ((sDate.substr(8,2) == "") ? 0 : sDate.substr(8,2));
                var nMinutes = ((sDate.substr(10,2) == "") ? 0 : sDate.substr(10,2));
                var nSeconds = ((sDate.substr(12,2) == "") ? 0 : sDate.substr(12,2));

                var objDate = new Date(parseInt(nYear), parseInt(nMonth)-1, parseInt(nDate), parseInt(nHours), parseInt(nMinutes), parseInt(nSeconds));
            }
            else {
                var objDate = new Date(parseInt(nYear), parseInt(nMonth)-1, parseInt(((nDate == null) ? 1 : nDate)));
            }

        	var strYear   = objDate.getFullYear().toString();
        	var strMonth  = (objDate.getMonth() + 1).toString();
        	var strDate   = objDate.getDate().toString();

        	if (strMonth.length == 1)  strMonth  = "0" + strMonth;
        	if (strDate.length == 1)   strDate   = "0" + strDate;

        	return strYear + strMonth + strDate;
        }

        this.gfn_Trim = function (sValue)
        {
        	if (sValue == null) return "";
        	if (new String(sValue).valueOf() == "undefined") return "";
        	if (new String(sValue) == null) return "";

            var retVal = (new String(sValue)).replace(/^\s+|\s+$/g, '');

            return retVal;
        }

        /*******************************************************************************
         * Function Name: gfn_isNull
         * Description  : 입력값이 null에 해당하는 경우 모두를 한번에 체크한다.
         * Arguments    : Val : 체크할 문자열( 예 : null 또는 undefined 또는 "" 또는 "abc" )
         * Return       : Boolean,  Val이 undefined, null, NaN, "", Array.length = 0인 경우 = true
         이외의 경우 = false
         ******************************************************************************/
        this.gfn_isNull = function (Val)
        {
        	if (new String(Val).valueOf() == "undefined")
        	{
        		return true;
        	}
        	if (Val == null)
        	{
        		return true;
        	}
        	if (("x" + Val == "xNaN") && (new String(Val.length).valueOf() == "undefined"))
        	{
        		return true;
        	}
        	if (Val.length == 0)
        	{
        		return true;
        	}

        	return false;
        }

        /*******************************************************************************
         * Function Name: gfn_ToString
         * Description  : 입력값을 String으로 변경한다.
         * Arguments    : Val
         * Return       : String
         *******************************************************************************/
        this.gfn_ToString = function (Val)
        {
        	if (this.gfn_isNull(Val))
        	{
        		return new String();
        	}
        	return new String(Val);
        }

        /*******************************************************************************************
        	FUNCTION	: gfnIsUpdateDs(objDs)
        	DESCRIPTION	: 데이타셋 변경유무 반환
        	PARAMETERS	:
        		- obj	: 데이타셋
        	RETURN		: true/false
        *******************************************************************************************/
        this.gfnIsUpdateDs = function(objDs)
        {
        	//trace("objDs.rowcount::"+objDs.rowcount);

        	if(objDs.getDeletedRowCount() > 0) return true;

        	if(objDs.rowcount <= 0) return false;

        	for(var i=0;i<objDs.rowcount;i++)
        	{
        		var nRowType = objDs.getRowType(i);
        		if(nRowType == 2
        			|| nRowType == 4
        			|| nRowType == 8)
        		{
        			return true;
        		}
        	}

        	return false;
        }

        //
        this.gfnGetDays = function (strYYYYMMDD)
        {
        	var tmpDate = new Date(strYYYYMMDD.substr(0, 4), String(Number(strYYYYMMDD.substr(4, 2)) -1 ), strYYYYMMDD.substr(6, 2));
        	var tmpCnt = tmpDate.getDay(); // 0: sunday, 1: monday ....

        	if (tmpCnt == 0)
        	{
        		tmpCnt = 6;
        	}
        	else
        	{
        		tmpCnt = tmpCnt - 1;
        	}
        	return tmpCnt;
        }

        // if ojbValue == null, Return value : false
        this.gfn_NullCheck = function (objValue)
        {
        	// null Check
        	if ((objValue != "") && (objValue != null) && (typeof objValue != "undefined"))
        	{
        		return true;
        	}
        	else
        	{
        		return false;
        	}
        }

        this.popupOpen = function (parentFrame, titleName, popupId, argumentsList, popupUrl, popupCallback, popupWidth, popupHeight, titlebarShowFlag, obj)
        {
        	var objFrame = new ChildFrame();

        	objFrame.init(popupId, 0, 0, popupWidth, popupHeight, null, null, popupUrl);
        	//objFrame.set_titletext(titleName);
        	objFrame.set_openalign("center middle");
        	objFrame.set_autosize(false);
        	objFrame.set_showstatusbar(false);

        // 	if (titlebarShowFlag == true)
        // 	{
        // 		objFrame.set_showtitlebar(true);
        // 	}
        // 	else
        // 	{
        // 		objFrame.set_showtitlebar(false);
        // 	}
        	objFrame.set_showtitlebar(false);

        	objFrame.showModal(parentFrame, argumentsList, obj, popupCallback, true);
        }

        this.popupOpenModeless = function (parentFrame, titleName, popupId, argumentsList, popupUrl, popupCallback, popupWidth, popupHeight, titlebarShowFlag, obj)
        {
        	var childFrame = new ChildFrame;
        	//var parentFrame = this.getOwnerFrame();

        	//var nX = (this.width / 2) - (popupWidth / 2);
        	//var nY = (this.height / 2) - (popupHeight / 2);
        	//childFrame.setEventHandler("onmove", this.fn_onmove, this);

        	childFrame.init(popupId, 0, 0, popupWidth, popupHeight, null, null, popupUrl);
        	childFrame.set_titletext(titleName);
        	childFrame.set_openalign("center middle");
        	childFrame.set_autosize(false);
        	childFrame.set_showstatusbar(false);

        	if (titlebarShowFlag == true)
        	{
        		childFrame.set_showtitlebar(true);
        	}
        	else
        	{
        		childFrame.set_showtitlebar(false);
        	}

        	childFrame.showModeless(parentFrame, argumentsList, obj, popupCallback, true);
        }

        //메인프레임 사이즈 변경시 중앙표시
        this.mainframe_onsize = function(obj,e)
        {
        	var objApp = nexacro.getApplication();
        	var mainWidth = objApp.mainframe.width ;

        	var topWidth = objApp.mainframe.childframe.form.Div_Top.width ;

        	if(topWidth < mainWidth)
        	{
        		var nLeft = (mainWidth - topWidth)/2;
        	//	objApp.mainframe.childframe.form.Div_Left.set_left(nLeft);
        	}
        }

        this.gfn_PosReverse = function (sOrg, sFind, nStart)
        {
        	var sVal = new String(sOrg);
        	var pos;

        	if (this.gfn_IsEmpty(sOrg) || this.gfn_IsEmpty(sFind))
        	{
        		return -1;
        	}
        	if (this.gfn_IsEmpty(nStart))
        	{
        		nStart = sOrg.length - 1;
        	}

        	for (pos = nStart; pos >= 0; pos--)
        	{
        		if (sVal.substr(pos, sFind.length) == sFind)
        		{
        			break;
        		}
        	}

        	return pos;
        };


        this.popupAlarmOpen = function (parentFrame, titleName, popupId, argumentsList, popupUrl, popupCallback, popupWidth, popupHeight, titlebarShowFlag, obj)
        {
        	var objFrame = new ChildFrame();
        	var popupRigth = 1200;
        	var popupBotton = 700;

        	objFrame.init(popupId, null, null, popupWidth, popupHeight, "0%", "0%", popupUrl);
        	//objFrame.set_titletext(titleName);
        	//objFrame.set_openalign("center middle");
        	objFrame.set_autosize(false);
        	objFrame.set_showstatusbar(false);

        // 	if (titlebarShowFlag == true)
        // 	{
        // 		objFrame.set_showtitlebar(true);
        // 	}
        // 	else
        // 	{
        // 		objFrame.set_showtitlebar(false);
        // 	}
        	objFrame.set_showtitlebar(false);


        	objFrame.showModal(parentFrame, argumentsList, obj, popupCallback, true);
        }
        });
		this.checkLicense("NexacroN_client_license.xml");
        
        this.loadPreloadList();
        this.loadCss("xcssrc::Styles.xcss");
        this.loadCss("xcssrc::tutorial_asset.xcss");
        this.loadIncludeScript("Application_Desktop.xadl");
    };
}
)();
