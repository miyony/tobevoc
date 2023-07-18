(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("WM_Support_Pop");
            this.set_background("#6954E1");
            if (Form == this.constructor)
            {
                this._setFormPosition(400,250);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_user", this);
            obj._setContents("<ColumnInfo><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"ROLE_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ICON_IMG\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_support", this);
            obj._setContents("<ColumnInfo><Column id=\"MGMT_NO\" type=\"INT\" size=\"10\"/><Column id=\"PRODUCT_CD\" type=\"STRING\" size=\"1\"/><Column id=\"RECEPTION_CD\" type=\"STRING\" size=\"1\"/><Column id=\"START_DATE\" type=\"STRING\" size=\"8\"/><Column id=\"END_DATE\" type=\"STRING\" size=\"8\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"32\"/><Column id=\"TOPS_YN\" type=\"STRING\" size=\"1\"/><Column id=\"TASK_ID\" type=\"STRING\" size=\"20\"/><Column id=\"CUSTOMER_NAME\" type=\"STRING\" size=\"45\"/><Column id=\"PROJECT_NAME\" type=\"STRING\" size=\"45\"/><Column id=\"MEMO\" type=\"STRING\" size=\"1000\"/><Column id=\"STATE_CD\" type=\"STRING\" size=\"1\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_sch_date", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"JOB_ID\" type=\"STRING\" size=\"256\"/><Column id=\"JOB_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"JOB_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"CRON\" type=\"STRING\" size=\"256\"/><Column id=\"JOB_CNTN\" type=\"STRING\" size=\"256\"/><Column id=\"POPUP_NOTI_YN\" type=\"STRING\" size=\"256\"/><Column id=\"MAIL_NOTI_YN\" type=\"STRING\" size=\"256\"/><Column id=\"DEL_YN\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER\" type=\"STRING\" size=\"256\"/><Column id=\"UPDATE_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"UPDATE_USER\" type=\"STRING\" size=\"256\"/><Column id=\"DATE_CATEGORY\" type=\"STRING\" size=\"256\"/><Column id=\"SUB_CATEGORY\" type=\"STRING\" size=\"256\"/><Column id=\"BIMONTHLY_YN\" type=\"STRING\" size=\"256\"/><Column id=\"WEEK_DETAILS\" type=\"STRING\" size=\"256\"/><Column id=\"MONTH_DETAILS\" type=\"STRING\" size=\"256\"/><Column id=\"DAY_DETAILS\" type=\"STRING\" size=\"256\"/><Column id=\"COMPLATE_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static01_00","0","40",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_background("#ffffff");
            obj.set_text("");
            obj.set_cssclass("sta_MWF_descBg");
            obj.set_font("normal 12pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static_Header","85","4",null,"30","85",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_MWF_descTitle");
            obj.set_text("정기 업무 알림");
            obj.set_font("normal 12pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose",null,"-5","50","50","3",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("btn_MWF_closeDesc");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","4","45","392","201",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_binddataset("ds_sch_date");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"202\"/><Column size=\"188\"/></Columns><Rows><Row size=\"30\"/></Rows><Band id=\"body\"><Cell text=\"bind:JOB_NAME\"/><Cell col=\"1\" text=\"bind:JOB_DATE\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("cmmScheduleAlarm.xfdl", function() {

        this.Btn_Cancel_onclick = function(obj,e)
        {
        	this.close("0");
        };

        this.WM_Support_Pop_onload = function(obj,e)
        {
        	//var objAni = new nexacro.Animation("Animation00", this);
        	//this.addChild( "Animation00", objAni );
        	//objAni.addTarget( "AniItem00", this.Static01_00, "opacity:[1,0,1]" );
        	this.ds_sch_date.copyData(this.parent.ds_sch_date);
        	this.ds_sch_date.filter("POPUP_NOTI_YN == 'Y'")

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.WM_Support_Pop_onload,this);
            this.btnClose.addEventHandler("onclick",this.Btn_Cancel_onclick,this);
        };
        this.loadIncludeScript("cmmScheduleAlarm.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
