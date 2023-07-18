(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("sampleRmateChartAll");
            this.set_titletext("rMate 챠트(공통화면 방식)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1033,728);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsData", this);
            obj._setContents("<ColumnInfo><Column id=\"Month\" type=\"STRING\" size=\"256\"/><Column id=\"Vancouver\" type=\"INT\" size=\"256\"/><Column id=\"Toronto\" type=\"STRING\" size=\"256\"/><Column id=\"Calgary\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Month\">Jan</Col><Col id=\"Vancouver\">91</Col><Col id=\"Toronto\">85</Col><Col id=\"Calgary\">45</Col></Row><Row><Col id=\"Month\">Feb</Col><Col id=\"Vancouver\">87</Col><Col id=\"Toronto\">75</Col><Col id=\"Calgary\">75</Col></Row><Row><Col id=\"Month\">Mar</Col><Col id=\"Vancouver\">88</Col><Col id=\"Toronto\">87</Col><Col id=\"Calgary\">65</Col></Row><Row><Col id=\"Month\">Apr</Col><Col id=\"Vancouver\">86</Col><Col id=\"Toronto\">78</Col><Col id=\"Calgary\">78</Col></Row><Row><Col id=\"Month\">May</Col><Col id=\"Vancouver\">82</Col><Col id=\"Toronto\">84</Col><Col id=\"Calgary\">56</Col></Row><Row><Col id=\"Month\">Jun</Col><Col id=\"Vancouver\">80</Col><Col id=\"Toronto\">68</Col><Col id=\"Calgary\">65</Col></Row><Row><Col id=\"Month\">Jul</Col><Col id=\"Vancouver\">79</Col><Col id=\"Toronto\">57</Col><Col id=\"Calgary\">54</Col></Row><Row><Col id=\"Month\">Aug</Col><Col id=\"Vancouver\">72</Col><Col id=\"Toronto\">67</Col><Col id=\"Calgary\">79</Col></Row><Row><Col id=\"Month\">Sep</Col><Col id=\"Vancouver\">90</Col><Col id=\"Toronto\">87</Col><Col id=\"Calgary\">85</Col></Row><Row><Col id=\"Month\">Oct</Col><Col id=\"Vancouver\">95</Col><Col id=\"Toronto\">75</Col><Col id=\"Calgary\">79</Col></Row><Row><Col id=\"Month\">Nov</Col><Col id=\"Vancouver\">40</Col><Col id=\"Toronto\">84</Col><Col id=\"Calgary\">65</Col></Row><Row><Col id=\"Month\">Dec</Col><Col id=\"Vancouver\">60</Col><Col id=\"Toronto\">65</Col><Col id=\"Calgary\">79</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div00","10","202","496","350",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_url("cmm::cmmRmateChartAll.xfdl");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Div("Div01","515","202","496","350",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_url("cmm::cmmRmateChartAll.xfdl");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Div("Div02","10","622","496","350",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_url("cmm::cmmRmateChartAll.xfdl");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Div("Div03","515","622","496","350",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_url("cmm::cmmRmateChartAll.xfdl");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Static("sta02","10","0","221","50",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("rMate 챠트(공통화면 방식)");
            obj.set_cssclass("sta_WF_FrmTitle");
            this.addChild(obj.name, obj);

            obj = new Static("sta03","10","60",null,"82","10",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("1. 브라우져에 따라 rMateChart를 실행해 줍니다.\r\n    상용 브라우져 : DIV 컴포넌트에 직접 rMateChart를 실행합니다.\r\n    runtime 브라우져 : 웹 브라우져로 rMateChart를 실행합니다.");
            obj.set_cssclass("st_WF_Description");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","10","162","178","30",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("1) Line ");
            obj.set_cssclass("sta_WF_LabelTxt13");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","515","162","178","30",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("2) Bar");
            obj.set_cssclass("sta_WF_LabelTxt13");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","10","582","178","30",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("3) Column");
            obj.set_cssclass("sta_WF_LabelTxt13");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","515","582","178","30",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("4) Pie");
            obj.set_cssclass("sta_WF_LabelTxt13");
            this.addChild(obj.name, obj);

            obj = new Button("btnChangData","899","587","110","30",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("Data 변경");
            this.addChild(obj.name, obj);

            obj = new Button("btnChangLayout","784","587","110","30",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("Layout 변경");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div00
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div01
            obj = new Layout("default","",0,0,this.Div01.form,function(p){});
            this.Div01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div02
            obj = new Layout("default","",0,0,this.Div02.form,function(p){});
            this.Div02.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div03
            obj = new Layout("default","",0,0,this.Div03.form,function(p){});
            this.Div03.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmRmateChartAll.xfdl");
        };
        
        // User Script
        this.addIncludeScript("sampleRmateChartAll.xfdl","lib::rMateChartH5.xjs");
        this.registerScript("sampleRmateChartAll.xfdl", function() {
        /**
        *  Necacro EduPack
        *  @MenuPath    개발가이드 > 컴포넌트 및 연동 > rMate 챠트(공통화면 방식)
        *  @FileName 	sampleRmateChartDiv2.xfdl
        *  @Creator 	Education
        *  @CreateDate 	2022.05.01
        *  @Desction    rMate 챠트(공통화면 방식)
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
        this.layoutStr1;
        this.layoutStr2;
        this.layoutStr3;
        this.layoutStr4;

        this.chartData1;
        this.chartData2;
        this.chartData3;
        this.chartData4;

        /************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose)
         ************************************************************************************************/
         this.form_onload = function(obj, e)
        {
        	// 스트링 형식으로 레이아웃 정의.
        	this.layoutStr1 = '<rMateChart backgroundColor="#FFFFFF"  borderThickness="1" borderStyle="none">'
        		 +'<Options>'
        			  +'<Caption text="Rainfall" textAlign="center" />'
        				+'<SubCaption text="( mm )" textAlign="right" />'
        			 +'<Legend />'
        		 +'</Options>'
        		 +'<NumberFormatter id="numFmt" precision="0"/>'
        		   +'<Line2DChart showDataTips="true" dataTipDisplayMode="axis" paddingTop="0">'
        			 +'<horizontalAxis>'
        				   +'<CategoryAxis categoryField="Month"/>'
        			  +'</horizontalAxis>'
        			  +'<verticalAxis>'
        				 +'<LinearAxis minimum="0" maximum="100" interval="10" />'
        			 +'</verticalAxis>'
        				+'<series>'
        				   +'<Line2DSeries yField="Vancouver" displayName="Vancouver">'
        				  +'</Line2DSeries>'
        				+'</series>'
        			  +'<annotationElements>'
        				   +'<CrossRangeZoomer enableZooming="false" horizontalLabelFormatter="{numFmt}" horizontalStrokeEnable="false"/>'
        			   +'</annotationElements>'
        		  +'</Line2DChart>'
        	 +'</rMateChart>';

        	// 차트 데이터
        	this.chartData1 = [  {"Month":"Jan","Vancouver":40},
        						{"Month":"Feb","Vancouver":50},
        						{"Month":"Mar","Vancouver":47},
        						{"Month":"Apr","Vancouver":57},
        						{"Month":"May","Vancouver":68},
        						{"Month":"Jun","Vancouver":52},
        						{"Month":"Jul","Vancouver":36},
        						{"Month":"Aug","Vancouver":42},
        						{"Month":"Sep","Vancouver":33},
        						{"Month":"Oct","Vancouver":39},
        						{"Month":"Nov","Vancouver":45},
        						{"Month":"Dec","Vancouver":40}];

        	// 스트링 형식으로 레이아웃 정의.
        	this.layoutStr2 =
        					'<rMateChart backgroundColor="#FFFFFF"  borderStyle="none">'
        					  +'<Options>'
        						  +'<Caption text="Rainfall" textAlign="center" />'
        							+'<SubCaption text="( mm )" textAlign="right" />'
        						 +'<Legend />'
        					 +'</Options>'
        					 +'<Bar2DChart showDataTips="true">'
        						   +'<horizontalAxis>'
        							   +'<LinearAxis maximum="100"/>'
        							+'</horizontalAxis>'
        						  +'<verticalAxis>'
        							 +'<CategoryAxis categoryField="Month"/>'
        						 +'</verticalAxis>'
        							+'<series>'
        							   +'<Bar2DSeries labelPosition="inside" xField="Vancouver" displayName="Vancouver" showValueLabels="[6,7]" color="#ffffff" insideLabelYOffset="-2">'
        									+'<showDataEffect>'
        									   +'<SeriesInterpolate/>'
        								  +'</showDataEffect>'
        							  +'</Bar2DSeries>'
        						 +'</series>'
        					  +'</Bar2DChart>'
        				  +'</rMateChart>';

        	// 차트 데이터
        	this.chartData2 = [  {"Month":"Jan", "Vancouver":21},
        						{"Month":"Feb", "Vancouver":29},
        						{"Month":"Mar", "Vancouver":48},
        						{"Month":"Apr", "Vancouver":38},
        						{"Month":"May", "Vancouver":59},
        						{"Month":"Jun", "Vancouver":77.2},
        						{"Month":"Jul", "Vancouver":68},
        						{"Month":"Aug", "Vancouver":58},
        						{"Month":"Sep", "Vancouver":44},
        						{"Month":"Oct", "Vancouver":23}];


        	// 스트링 형식으로 레이아웃 정의.
        	this.layoutStr3 =
        					'<rMateChart backgroundColor="#FFFFFF"  borderStyle="none">'
        					  +'<Options>'
        						  +'<Caption text="World Top 10 - Fastest Growing Economies (2017)" textAlign="center" />'
        						 +'<SubCaption text="GDP Growth (In %)" textAlign="center" />'
        					 +'</Options>'
        					 +'<SeriesInterpolate id="ss"/>'
        					   +'<Column2DChart showDataTips="true" selectionMode="multiple" columnWidthRatio="0.48">'
        						   +'<horizontalAxis>'
        							   +'<CategoryAxis categoryField="Country"/>'
        							+'</horizontalAxis>'
        						  +'<verticalAxis>'
        							 +'<LinearAxis maximum="100" interval="10"/>'
        						  +'</verticalAxis>'
        							+'<series>'
        							   +'<Column2DSeries labelPosition="outside" yField="GDP" displayName="GDP Growth (In %)" showDataEffect="{ss}" showValueLabels="[4]">'
        							  +'</Column2DSeries>'
        						  +'</series>'
        					  +'</Column2DChart>'
        				   +'</rMateChart>';

        	// 차트 데이터
        	this.chartData3 = [  {"Country":"SouthSudan", "GDP":20},
        						{"Country":"Libya", "GDP":30},
        						{"Country":"SierraLeone", "GDP":51.2},
        						{"Country":"Mongolia", "GDP":44.5},
        						{"Country":"Paraguay", "GDP":62.35},
        						{"Country":"TimorLeste", "GDP":84.46},
        						{"Country":"Iraq", "GDP":48.9},
        						{"Country":"Panama", "GDP":38},
        						{"Country":"Gambia", "GDP":60.5},
        						{"Country":"Mozam-bique", "GDP":40.1}];

        	this.layoutStr4 = '<rMateChart backgroundColor="#FFFFFF" borderStyle="none" >'
        					  +'<Options>'
        						  +'<Caption text="Annual Report" textAlign="center" />'
        							+'<SubCaption text="2013"/>'
        						  +'<Legend useVisibleCheck="true"/>'
        					   +'</Options>'
        					 +'<Pie2DChart showDataTips="true">'
        				   /* Pie2D 차트 생성시에 필요한 Pie2DChart 정의합니다. */
        				   /* showDataTips : 데이터에 마우스를 가져갔을 때 나오는 Tip을 보이기/안보이기 속성입니다. */
        						  +'<series>'
        							   +'<Pie2DSeries nameField="Month" field="Profit" labelPosition="inside" color="#ffffff" startAngle="136">'
        							 /* Pie2DChart 정의 후 Pie2DSeries labelPosition="inside"정의합니다 */
        								   +'<showDataEffect>'
        								   /* 차트 생성시에 Effect를 주고 싶을 때 shoDataEffect정의합니다 */
        										+'<SeriesSlide duration="1000"/>'
        				 /* SeriesSlide 효과는 시리즈 데이터가 데이터로 표시될 때 한쪽에서 미끄러지듯 나타나는 효과를 적용합니다. */
        					/* elementOffset : effect를 지연시키는 시간을 지정합니다 default:20 */
        					/* minimumElementDuration : 각 엘리먼트의 최소 지속 시간을 설정합니다 default:0 */
        								 /* 이 값보다 짧은 시간에 effect가 실행되지 않습니다. */
        				  /* offset : effect개시의 지연시간을 설정합니다 default:0 */
        				  /* perElementOffset : 각 엘리먼트의 개시 지연시간을 설정합니다. */
        					/* direction : left:왼쪽, right:오른쪽, up:위, down:아래 default는 left입니다. */
        								   +'</showDataEffect>'
        							  +'</Pie2DSeries>'
        						 +'</series>'
        					  +'</Pie2DChart>'
        				  +'</rMateChart>';

        	// 차트 데이터
        	this.chartData4 = [ {"Month":"Jan", "Profit":350},
        						{"Month":"Feb", "Profit":80},
        						{"Month":"Mar", "Profit":60},
        						{"Month":"Apr", "Profit":170},
        						{"Month":"May", "Profit":280}];

        	this.Div00.form.fnSetChart("chart1", this.layoutStr1, this.rMateChartDataSetToXml(this.dsData));
        	this.Div01.form.fnSetChart("chart2", this.layoutStr2, this.rMateChartDataSetToXml(this.dsData));
        	this.Div02.form.fnSetChart("chart3", this.layoutStr3, this.chartData3);
        	this.Div03.form.fnSetChart("chart4", this.layoutStr4, this.chartData4);
        }

        /************************************************************************************************
         * CALLBACK 콜백 처리부분(Transaction, Popup)
         ************************************************************************************************/

        /************************************************************************************************
         * CRUD 및 TRANSACTION 서비스 호출 처리
         ************************************************************************************************/

        /************************************************************************************************
         * 사용자 FUNCTION 영역
         ************************************************************************************************/
        this.btnChangData_onclick = function(obj,e)
        {
        	// 차트 데이터
        	this.chartData4 = [ {"Month":"Jan", "Profit":350},
        						{"Month":"Feb", "Profit":80},
        						{"Month":"Mar", "Profit":60},
        						{"Month":"Apr", "Profit":170},
        						{"Month":"May", "Profit":100}];

        	this.Div03.form.fnSetData(this.chartData4);
        };

        this.btnChangLayout_onclick = function(obj,e)
        {
        	// 스트링 형식으로 레이아웃 정의.
        	this.layoutStr4 = '<rMateChart backgroundColor="#FFFFFF" borderStyle="none" >'
        					  +'<Options>'
        						  +'<Caption text="Annual Report"/>'
        							+'<SubCaption text="2015"/>'
        						  +'<Legend useVisibleCheck="true"/>'
        					   +'</Options>'
        					 +'<Pie2DChart showDataTips="true">'
        				   /* Pie2D 차트 생성시에 필요한 Pie2DChart 정의합니다. */
        				   /* showDataTips : 데이터에 마우스를 가져갔을 때 나오는 Tip을 보이기/안보이기 속성입니다. */
        						  +'<series>'
        							   +'<Pie2DSeries nameField="Month" field="Profit" labelPosition="inside" color="#ffffff" startAngle="136">'
        							 /* Pie2DChart 정의 후 Pie2DSeries labelPosition="inside"정의합니다 */
        								   +'<showDataEffect>'
        								   /* 차트 생성시에 Effect를 주고 싶을 때 shoDataEffect정의합니다 */
        										+'<SeriesSlide duration="1000"/>'
        				 /* SeriesSlide 효과는 시리즈 데이터가 데이터로 표시될 때 한쪽에서 미끄러지듯 나타나는 효과를 적용합니다. */
        					/* elementOffset : effect를 지연시키는 시간을 지정합니다 default:20 */
        					/* minimumElementDuration : 각 엘리먼트의 최소 지속 시간을 설정합니다 default:0 */
        								 /* 이 값보다 짧은 시간에 effect가 실행되지 않습니다. */
        				  /* offset : effect개시의 지연시간을 설정합니다 default:0 */
        				  /* perElementOffset : 각 엘리먼트의 개시 지연시간을 설정합니다. */
        					/* direction : left:왼쪽, right:오른쪽, up:위, down:아래 default는 left입니다. */
        								   +'</showDataEffect>'
        							  +'</Pie2DSeries>'
        						 +'</series>'
        					  +'</Pie2DChart>'
        				  +'</rMateChart>';

        	this.Div03.form.fnSetLayout(this.layoutStr4);
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btnChangData.addEventHandler("onclick",this.btnChangData_onclick,this);
            this.btnChangLayout.addEventHandler("onclick",this.btnChangLayout_onclick,this);
        };
        this.loadIncludeScript("sampleRmateChartAll.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
