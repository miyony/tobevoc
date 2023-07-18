(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Main");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1050,780);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsData", this);
            obj._setContents("<ColumnInfo><Column id=\"Month\" type=\"STRING\" size=\"256\"/><Column id=\"Vancouver\" type=\"INT\" size=\"256\"/><Column id=\"Toronto\" type=\"STRING\" size=\"256\"/><Column id=\"Calgary\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Month\">Jan</Col><Col id=\"Vancouver\">91</Col><Col id=\"Toronto\">85</Col><Col id=\"Calgary\">45</Col></Row><Row><Col id=\"Month\">Feb</Col><Col id=\"Vancouver\">87</Col><Col id=\"Toronto\">75</Col><Col id=\"Calgary\">75</Col></Row><Row><Col id=\"Month\">Mar</Col><Col id=\"Vancouver\">88</Col><Col id=\"Toronto\">87</Col><Col id=\"Calgary\">65</Col></Row><Row><Col id=\"Month\">Apr</Col><Col id=\"Vancouver\">86</Col><Col id=\"Toronto\">78</Col><Col id=\"Calgary\">78</Col></Row><Row><Col id=\"Month\">May</Col><Col id=\"Vancouver\">82</Col><Col id=\"Toronto\">84</Col><Col id=\"Calgary\">56</Col></Row><Row><Col id=\"Month\">Jun</Col><Col id=\"Vancouver\">80</Col><Col id=\"Toronto\">68</Col><Col id=\"Calgary\">65</Col></Row><Row><Col id=\"Month\">Jul</Col><Col id=\"Vancouver\">79</Col><Col id=\"Toronto\">57</Col><Col id=\"Calgary\">54</Col></Row><Row><Col id=\"Month\">Aug</Col><Col id=\"Vancouver\">72</Col><Col id=\"Toronto\">67</Col><Col id=\"Calgary\">79</Col></Row><Row><Col id=\"Month\">Sep</Col><Col id=\"Vancouver\">90</Col><Col id=\"Toronto\">87</Col><Col id=\"Calgary\">85</Col></Row><Row><Col id=\"Month\">Oct</Col><Col id=\"Vancouver\">95</Col><Col id=\"Toronto\">75</Col><Col id=\"Calgary\">79</Col></Row><Row><Col id=\"Month\">Nov</Col><Col id=\"Vancouver\">40</Col><Col id=\"Toronto\">84</Col><Col id=\"Calgary\">65</Col></Row><Row><Col id=\"Month\">Dec</Col><Col id=\"Vancouver\">60</Col><Col id=\"Toronto\">65</Col><Col id=\"Calgary\">79</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsStat01", this);
            obj._setContents("<ColumnInfo><Column id=\"Month\" type=\"STRING\" size=\"256\"/><Column id=\"Count\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsStat04", this);
            obj._setContents("<ColumnInfo><Column id=\"VocType\" type=\"STRING\" size=\"256\"/><Column id=\"Count\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsStat03", this);
            obj._setContents("<ColumnInfo><Column id=\"chrgUser\" type=\"STRING\" size=\"256\"/><Column id=\"Count\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsStat02", this);
            obj._setContents("<ColumnInfo><Column id=\"Month\" type=\"STRING\" size=\"256\"/><Column id=\"Count\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div00","7","36","516","360",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_url("cmm::cmmRmateChartAll.xfdl");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Div("Div01","532","36","516","360",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_url("cmm::cmmRmateChartAll.xfdl");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Div("Div02","7","431","516","370",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_url("cmm::cmmRmateChartAll.xfdl");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Div("Div03","532","431","516","370",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_url("cmm::cmmRmateChartAll.xfdl");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Static("sub_stat01","9","-15","150","60",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("월간 접수 VOC 통계");
            obj.set_cssclass("sta_WF_SubtitleDown");
            this.addChild(obj.name, obj);

            obj = new Static("sub_stat02","532","-15","160","60",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("월간 종결 VOC 통계");
            obj.set_cssclass("sta_WF_SubtitleDown");
            this.addChild(obj.name, obj);

            obj = new Static("sub_stat03","10","380","180","60",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("담당자별 담당 VOC 통계");
            obj.set_cssclass("sta_WF_SubtitleDown");
            this.addChild(obj.name, obj);

            obj = new Static("sub_stat04","533","380","140","60",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("VOC 타입 별 통계 ");
            obj.set_cssclass("sta_WF_SubtitleDown");
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
            obj = new Layout("default","",1050,780,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmRmateChartAll.xfdl");
        };
        
        // User Script
        this.addIncludeScript("Form_Main.xfdl","lib::rMateChartH5.xjs");
        this.registerScript("Form_Main.xfdl", function() {

        /************************************************************************************************
         * include 영역
         ************************************************************************************************/
        this.executeIncludeScript("lib::rMateChartH5.xjs"); /*include "lib::rMateChartH5.xjs"*/;

        /************************************************************************************************
         * FORM 변수 선언 영역
         ************************************************************************************************/
        this.layoutStr1;
        this.layoutStr2;
        this.layoutStr3;
        this.layoutStr4;

        /************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose)
         ************************************************************************************************/
         this.Form_Main_onload = function(obj, e)
        {
        	this.selectStat01();
        	this.selectStat02()
        	this.selectStat03();
        	this.selectStat04();

        }

        /************************************************************************************************
        * TRANSACTION 영역
        ************************************************************************************************/
        /* selectStat01 */
        this.selectStat01 = function(){
        	var strSvcId    = "selectStat01";
        	var strSvcUrl   = "svcUrl::selectStat01.do";
        	var inData      = "";
        	var outData     = "dsStat01=dsStat01";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.transaction(strSvcId
        		,strSvcUrl
        		,inData
        		,outData
        		,strArg
        		,callBackFnc);
        }

        this.selectStat02 = function(){
        	var strSvcId    = "selectStat02";
        	var strSvcUrl   = "svcUrl::selectStat02.do";
        	var inData      = "";
        	var outData     = "dsStat02=dsStat02";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.transaction(strSvcId
        		,strSvcUrl
        		,inData
        		,outData
        		,strArg
        		,callBackFnc);
        }

        this.selectStat03 = function(){
        	var strSvcId    = "selectStat03";
        	var strSvcUrl   = "svcUrl::selectStat03.do";
        	var inData      = "";
        	var outData     = "dsStat03=dsStat03";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.transaction(strSvcId
        		,strSvcUrl
        		,inData
        		,outData
        		,strArg
        		,callBackFnc);
        }

        this.selectStat04 = function(){
        	var strSvcId    = "selectStat04";
        	var strSvcUrl   = "svcUrl::selectStat04.do";
        	var inData      = "";
        	var outData     = "dsStat04=dsStat04";
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

        	case "selectStat01":
        		this.setStat01();

        		break;

        	case "selectStat02":
        		this.setStat02();

        		break;

        	case "selectStat03":
        		this.setStat03();

        		break;

        	case "selectStat04":
        		this.setStat04();

        		break;
        	}
        };

        /************************************************************************************************
         * 사용자 FUNCTION 영역
         ************************************************************************************************/

        this.setStat01 = function(){
        	this.layoutStr1 = '<rMateChart backgroundColor="#FFFFFF"  borderThickness="1" borderStyle="none">'
        		 +'<Options>'
        			  +'<Caption text="Monthly Report by VOC" textAlign="center" />'
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
        				   +'<Line2DSeries yField="Count" displayName="합계">'
        				  +'</Line2DSeries>'
        				+'</series>'
        			  +'<annotationElements>'
        				   +'<CrossRangeZoomer enableZooming="false" horizontalLabelFormatter="{numFmt}" horizontalStrokeEnable="false"/>'
        			   +'</annotationElements>'
        		  +'</Line2DChart>'
        	 +'</rMateChart>';

        		this.Div00.form.fnSetChart("chart1", this.layoutStr1, this.rMateChartDataSetToXml(this.dsStat01));
        }

        this.setStat02 = function(){
        	this.layoutStr2 =
        					'<rMateChart backgroundColor="#FFFFFF"  borderStyle="none">'
        					  +'<Options>'
        						  +'<Caption text="Monthly report by VOC in end" textAlign="center" />'
        							+'<SubCaption text="( mm )" textAlign="right" />'
        						 +'<Legend />'
        					 +'</Options>'
        					 +'<Bar2DChart showDataTips="true">'
        						   +'<horizontalAxis>'
        							   +'<LinearAxis maximum="50"/>'
        							+'</horizontalAxis>'
        						  +'<verticalAxis>'
        							 +'<CategoryAxis categoryField="Month"/>'
        						 +'</verticalAxis>'
        							+'<series>'
        							   +'<Bar2DSeries labelPosition="inside" xField="Count" displayName="합계" showValueLabels="[6,7]" color="#ffffff" insideLabelYOffset="-2">'
        									+'<showDataEffect>'
        									   +'<SeriesInterpolate/>'
        								  +'</showDataEffect>'
        							  +'</Bar2DSeries>'
        						 +'</series>'
        					  +'</Bar2DChart>'
        				  +'</rMateChart>';


        	this.Div01.form.fnSetChart("chart2", this.layoutStr2, this.rMateChartDataSetToXml(this.dsStat02));


        }

        this.setStat03 = function(){

        	// 스트링 형식으로 레이아웃 정의.
        	this.layoutStr3 =
        					'<rMateChart backgroundColor="#FFFFFF"  borderStyle="none">'
        					  +'<Options>'
        						  +'<Caption text="chrgUser by VOC" textAlign="center" />'
        						/* +'<SubCaption text="GDP Growth (In %)" textAlign="center" />'*/
        					 +'</Options>'
        					 +'<SeriesInterpolate id="ss"/>'
        					   +'<Column2DChart showDataTips="true" selectionMode="multiple" columnWidthRatio="0.48">'
        						   +'<horizontalAxis>'
        							   +'<CategoryAxis categoryField="chrgUser"/>'
        							+'</horizontalAxis>'
        						  +'<verticalAxis>'
        							 +'<LinearAxis maximum="100" interval="10"/>'
        						  +'</verticalAxis>'
        							+'<series>'
        							   +'<Column2DSeries labelPosition="outside" yField="Count" displayName="담당 VOC 총계" showDataEffect="{ss}" showValueLabels="[4]">'
        							  +'</Column2DSeries>'
        						  +'</series>'
        					  +'</Column2DChart>'
        				   +'</rMateChart>';


        	this.Div02.form.fnSetChart("chart3", this.layoutStr3, this.rMateChartDataSetToXml(this.dsStat03));

        }

        this.setStat04 = function(){
        	this.layoutStr4 = '<rMateChart backgroundColor="#FFFFFF" borderStyle="none" >'
        					  +'<Options>'
        						  +'<Caption text="Voc Type Report" textAlign="center" />'
        							+'<SubCaption text="2022"/>'
        						  +'<Legend useVisibleCheck="true"/>'
        					   +'</Options>'
        					 +'<Pie2DChart showDataTips="true">'
        				   /* Pie2D 차트 생성시에 필요한 Pie2DChart 정의합니다. */
        				   /* showDataTips : 데이터에 마우스를 가져갔을 때 나오는 Tip을 보이기/안보이기 속성입니다. */
        						  +'<series>'
        							   +'<Pie2DSeries nameField="VocType" field="Count" labelPosition="inside" color="#ffffff" startAngle="136">'
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
        	/*this.chartData4 = [ {"Month":"Jan", "Profit":350},
        						{"Month":"Feb", "Profit":80},
        						{"Month":"Mar", "Profit":60},
        						{"Month":"Apr", "Profit":170},
        						{"Month":"May", "Profit":280}];*/

        	this.Div03.form.fnSetChart("chart4", this.layoutStr4, this.rMateChartDataSetToXml(this.dsStat04));

        }


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_Main_onload,this);
        };
        this.loadIncludeScript("Form_Main.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
