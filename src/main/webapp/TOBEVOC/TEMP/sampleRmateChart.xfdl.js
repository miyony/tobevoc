(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("sampleRmateChart");
            this.set_titletext("rMate 챠트(웹브라우져 방식)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1033,728);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsData", this);
            obj._setContents("<ColumnInfo><Column id=\"Month\" type=\"STRING\" size=\"256\"/><Column id=\"Vancouver\" type=\"INT\" size=\"256\"/><Column id=\"Toronto\" type=\"STRING\" size=\"256\"/><Column id=\"Calgary\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Month\">Jan</Col><Col id=\"Vancouver\">91</Col><Col id=\"Toronto\">85</Col><Col id=\"Calgary\">45</Col></Row><Row><Col id=\"Month\">Feb</Col><Col id=\"Vancouver\">87</Col><Col id=\"Toronto\">75</Col><Col id=\"Calgary\">75</Col></Row><Row><Col id=\"Month\">Mar</Col><Col id=\"Vancouver\">88</Col><Col id=\"Toronto\">87</Col><Col id=\"Calgary\">65</Col></Row><Row><Col id=\"Month\">Apr</Col><Col id=\"Vancouver\">86</Col><Col id=\"Toronto\">78</Col><Col id=\"Calgary\">78</Col></Row><Row><Col id=\"Month\">May</Col><Col id=\"Vancouver\">82</Col><Col id=\"Toronto\">84</Col><Col id=\"Calgary\">56</Col></Row><Row><Col id=\"Month\">Jun</Col><Col id=\"Vancouver\">80</Col><Col id=\"Toronto\">68</Col><Col id=\"Calgary\">65</Col></Row><Row><Col id=\"Month\">Jul</Col><Col id=\"Vancouver\">79</Col><Col id=\"Toronto\">57</Col><Col id=\"Calgary\">54</Col></Row><Row><Col id=\"Month\">Aug</Col><Col id=\"Vancouver\">72</Col><Col id=\"Toronto\">67</Col><Col id=\"Calgary\">79</Col></Row><Row><Col id=\"Month\">Sep</Col><Col id=\"Vancouver\">90</Col><Col id=\"Toronto\">87</Col><Col id=\"Calgary\">85</Col></Row><Row><Col id=\"Month\">Oct</Col><Col id=\"Vancouver\">95</Col><Col id=\"Toronto\">75</Col><Col id=\"Calgary\">79</Col></Row><Row><Col id=\"Month\">Nov</Col><Col id=\"Vancouver\">40</Col><Col id=\"Toronto\">84</Col><Col id=\"Calgary\">65</Col></Row><Row><Col id=\"Month\">Dec</Col><Col id=\"Vancouver\">60</Col><Col id=\"Toronto\">65</Col><Col id=\"Calgary\">79</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btnLine","10","112","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Line");
            this.addChild(obj.name, obj);

            obj = new Button("btnBar","95","112","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Bar");
            this.addChild(obj.name, obj);

            obj = new Button("btnPie","265","112","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Pie");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00",null,"152","240",null,"10","10",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_binddataset("dsData");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"Month\"/><Cell col=\"1\" text=\"Vancouver\"/><Cell col=\"2\" text=\"Toronto\"/></Band><Band id=\"body\"><Cell text=\"bind:Month\"/><Cell col=\"1\" text=\"bind:Vancouver\"/><Cell col=\"2\" text=\"bind:Toronto\" textAlign=\"right\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnLine00","370","112","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Line - Multi");
            this.addChild(obj.name, obj);

            obj = new Button("btnBar00","495","112","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Bar - Multi");
            this.addChild(obj.name, obj);

            obj = new Button("btnColumn","180","112","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Column");
            this.addChild(obj.name, obj);

            obj = new Button("btnColumn00","620","112","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Column - Multi");
            this.addChild(obj.name, obj);

            obj = new Button("btnCombination","765","112","230","30",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("Combination(Column+Line) ");
            this.addChild(obj.name, obj);

            obj = new Div("div00","10","152",null,null,"258","10",null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("div00");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Div("div00","7","7",null,"458","7",null,null,null,null,null,this.div00.form);
            obj.set_taborder("0");
            obj.set_text("div00");
            obj.set_cssclass("div_WF_Area");
            this.div00.addChild(obj.name, obj);

            obj = new WebBrowser("webChart","7","7",null,"442","7",null,null,null,null,null,this.div00.form.div00.form);
            obj.set_taborder("0");
            this.div00.form.div00.addChild(obj.name, obj);

            obj = new Static("sta02","10","0","251","50",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("rMate 챠트(웹브라우져 방식)");
            obj.set_cssclass("sta_WF_FrmTitle");
            this.addChild(obj.name, obj);

            obj = new Static("sta03","10","50",null,"42","10",null,"980",null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("rMate Chart 연동 샘플");
            obj.set_verticalAlign("top");
            obj.set_cssclass("st_WF_Description");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div00.form.div00.form
            obj = new Layout("default","",0,0,this.div00.form.div00.form,function(p){});
            this.div00.form.div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div00.form
            obj = new Layout("default","",0,0,this.div00.form,function(p){});
            this.div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1033,728,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("sampleRmateChart.xfdl","lib::rMateChartH5.xjs");
        this.registerScript("sampleRmateChart.xfdl", function() {
        /**
        *  Necacro EduPack
        *  @MenuPath    개발가이드 > 컴포넌트 및 연동 > rMate 챠트(웹브라우져 방식)
        *  @FileName 	sampleRmateChart.xfdl
        *  @Creator 	Education
        *  @CreateDate 	2022.05.01
        *  @Desction    rrMate 챠트(웹브라우져 방식)
        ************** 소스 수정 이력 ***********************************************
        *  date          	Modifier            Description
        *******************************************************************************
        *  2022.05.01     	Education 	       	최초 생성
        *******************************************************************************
        */

        /************************************************************************************************
         * include 영역(업무화면에서 꼭 필요한 경우에만 사용하세요)
         ************************************************************************************************/
        this.executeIncludeScript("lib::rMateChartH5.xjs"); /*include "lib::rMateChartH5.xjs"*/;

        /************************************************************************************************
         * FORM 변수 선언 영역
         ************************************************************************************************/

        /************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose)
         ************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnLoad(this);
        	this.gfnCreateChart(this.div00.form.div00.form.webChart);
        };

        /************************************************************************************************
         * CALLBACK 콜백 처리부분(Transaction, Popup)
         ************************************************************************************************/

        /************************************************************************************************
         * CRUD 및 TRANSACTION 서비스 호출 처리
         ************************************************************************************************/

        /************************************************************************************************
         * 사용자 FUNCTION 영역
         ************************************************************************************************/
        //아래 함수명 변경 불가
        this.rMateChartOnLoad = function()
        {
        	trace('============= rMateChartOnLoad');

        	var arrOption = {title:"Rainfall", subtitle:"( mm )", xfield:"Month", yfield:"Vancouver", displayName : "Vancouver", minimum:"40",  maximum:"100", interval:"5"};
        	var sType = "Line";
        	this.gfnSetChart(this.div00.form.div00.form.webChart, this.dsData, sType, arrOption);
        };

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/
        /**
        * 라인형 차트 그리기
        * @param  : obj		   - [object]Button
        * @param  : e		   - [string]ClickEventInfo
        * @return : N/A
        * @example :
        */
        this.btnLine_onclick = function(obj,e)
        {
        	var arrOption = {title:"Rainfall", subtitle:"( mm )", xfield:"Month", yfield:"Vancouver", displayName : "Vancouver", minimum:"40",  maximum:"100", interval:"5"};
        	var sType = "Line";
        	this.gfnSetChart(this.div00.form.div00.form.webChart, this.dsData, sType, arrOption);
        };

        /**
        * 바형 차트 그리기
        * @param  : obj		   - [object]Button
        * @param  : e		   - [string]ClickEventInfo
        * @return : N/A
        * @example :
        */
        this.btnBar_onclick = function(obj,e)
        {
        	var arrOption = {title:"Rainfall", subtitle:"( mm )", yfield:"Month", xfield:"Vancouver", xfielddisplayname : "Vancouver", minimum:"40",  maximum:"100", interval:"5"};
        	var sType = "Bar";
        	this.gfnSetChart(this.div00.form.div00.form.webChart, this.dsData, sType, arrOption);
        };

        /**
        * 컬럼 차트 그리기
        * @param  : obj		   - [object]Button
        * @param  : e		   - [string]ClickEventInfo
        * @return : N/A
        * @example :
        */
        this.btnColumn_onclick = function(obj,e)
        {
        	var arrOption = {title:"Rainfall", subtitle:"( mm )", xfield:"Month", yfield:"Vancouver", displayName : "Vancouver", minimum:"40",  maximum:"100", interval:"5"};
        	var sType = "Column";
        	this.gfnSetChart(this.div00.form.div00.form.webChart, this.dsData, sType, arrOption);
        };

        /**
        * 파이형 차트 그리기
        * @param  : obj		   - [object]Button
        * @param  : e		   - [string]ClickEventInfo
        * @return : N/A
        * @example :
        */
        this.btnPie_onclick = function(obj,e)
        {
        	var arrOption = {title:"Annual Report", subtitle:"2013", field:"Vancouver", fieldname : "Month"};
        	var sType = "Pie";
        	this.gfnSetChart(this.div00.form.div00.form.webChart, this.dsData, sType, arrOption);
        };

        /**
        * 라인 멀티시리즈 차트 그리기
        * @param  : obj		   - [object]Button
        * @param  : e		   - [string]ClickEventInfo
        * @return : N/A
        * @example :
        */
        this.btnLine00_onclick = function(obj,e)
        {
        	var arrOption = {title:"Rainfall", subtitle:"( mm )", xfield:"Month", yfield:"Vancouver,Toronto", displayName:"Vancouver,Toronto", minimum:"40",  maximum:"100", interval:"5"};
        	var sType = "Line";
        	this.gfnSetMultiChart(this.div00.form.div00.form.webChart, this.dsData, sType, arrOption);
        };

        /**
        * 바 멀티시리즈 차트 그리기
        * @param  : obj		   - [object]Button
        * @param  : e		   - [string]ClickEventInfo
        * @return : N/A
        * @example :
        */
        this.btnBar00_onclick = function(obj,e)
        {
        	var arrOption = {title:"Rainfall", subtitle:"( mm )", yfield:"Month", xfield:"Vancouver,Toronto", xfielddisplayname : "Vancouver,Toronto", minimum:"40",  maximum:"100", interval:"5"};
        	var sType = "Bar";
        	this.gfnSetMultiChart(this.div00.form.div00.form.webChart, this.dsData, sType, arrOption);
        };

        /**
        * 컬럼 멀티시리즈 차트 그리기
        * @param  : obj		   - [object]Button
        * @param  : e		   - [string]ClickEventInfo
        * @return : N/A
        * @example :
        */
        this.btnColumn00_onclick = function(obj,e)
        {
        	var arrOption = {title:"Rainfall", subtitle:"( mm )", xfield:"Month", yfield:"Vancouver,Toronto", displayName : "Vancouver,Toronto", minimum:"40",  maximum:"100", interval:"5"};
        	var sType = "Column";
        	this.gfnSetMultiChart(this.div00.form.div00.form.webChart, this.dsData, sType, arrOption);
        };

        /**
        * 콤비네이션(Column+Line) 차트 그리기
        * @param  : obj		   - [object]Button
        * @param  : e		   - [string]ClickEventInfo
        * @return : N/A
        * @example :
        */
        this.btnCombination_onclick = function(obj,e)
        {
        	var arrOption = {title:"Rainfall", subtitle:"( mm )", xfield:"Month", yfield:"Vancouver,Toronto", displayName : "Vancouver,Toronto"};
        	this.gfnSetCombinationChart(this.div00.form.div00.form.webChart, this.dsData, arrOption);
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btnLine.addEventHandler("onclick",this.btnLine_onclick,this);
            this.btnBar.addEventHandler("onclick",this.btnBar_onclick,this);
            this.btnPie.addEventHandler("onclick",this.btnPie_onclick,this);
            this.btnLine00.addEventHandler("onclick",this.btnLine00_onclick,this);
            this.btnBar00.addEventHandler("onclick",this.btnBar00_onclick,this);
            this.btnColumn.addEventHandler("onclick",this.btnColumn_onclick,this);
            this.btnColumn00.addEventHandler("onclick",this.btnColumn00_onclick,this);
            this.btnCombination.addEventHandler("onclick",this.btnCombination_onclick,this);
        };
        this.loadIncludeScript("sampleRmateChart.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
