(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("cmmMultiCheckBox");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(160,37);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new CheckBox("checkbox","5","4","150","29",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",160,37,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("cmmMultiCheckBox.xfdl", function() {
        /************************************************************************************************
        * FORM 변수 선언 영역
        ************************************************************************************************/
        this.fvFont = "";

        /************************************************************************************************
        * FORM EVENT 영역(onload, onbeforeclose)
        ************************************************************************************************/



        /************************************************************************************************
        * 사용자 FUNCTION 영역
        ************************************************************************************************/
        this.fnInit = function(){

        	this.reload();

        	//체크박스 너비 구하는데 필요한 font를 얻어온다.
        	this.fvFont = this.checkbox.font;

        	//현재 체크박스를 모두 지운다.
        	var arrComp = this.components;
        	//alert("arrComp: "+arrComp);

        	var nLength = arrComp.length;
        	//alert("nLength: "+nLength);

        	for(var i = 0 ; i < nLength; i++)
        	{
        		var comp = arrComp[i];
        		if(comp instanceof nexacro.CheckBox)
        		{
        			this.removeChild(comp.name);
        			comp.destroy();
        			comp = null;
        		}
        	}
        }

        // dataset의 값을 가져와 multi check box로 만들어줌
        this.fnMultiCheckBoxByDataSet = function(objDs, sCode, sValue){ // dataset,

        	this.fnInit(); //초기화

        	var objTarget = this.parent;	 //부모에 접근
        	//alert("objTarget"+objTarget)

        	this.checkboxinnerdataset 	  = objTarget.checkboxinnerdataset; 		//checkbox dataset
        	this.checkboxtextcolumn	  	  =	objTarget.checkboxtextcolumn;			//checkbox textcolumn
        	this.truevalue				  =	objTarget.truevalue;					//checkbox true  value
        	this.falsevalue				  =	objTarget.falsevalue;					//checkbox false value

        	this._objTarget = objTarget.parent;

        	if (this.gfnIsNull(sCode )) sCode 	= this.truevalue;
        	if (this.gfnIsNull(sValue)) sValue 	= this.checkboxtextcolumn;
        	if (this.gfnIsNull(objDs )) objDs	= this._objTarget.lookup(this.checkboxinnerdataset);

        	//동적 checkbox Component
        	var compChk;

        	var nLeft   	= 0;
        	var nTop    	= 10;
        	var nWidth  	= 165;
        	var nHeight 	= 20;

        	var nTopSpare  	= 20;
        	var nLeftSpare 	= 10;

        	//nWidth 설정
        	nWidth = this.fnGetMaxLangSize(objDs, sValue)+10;

        	for (var i=0; i<objDs.rowcount; i++)
        	{
        		//nLeft 설정 - 현제 체크박스가 div크기를 넘어서면 아래로 내려줌
        		if (this.getOffsetWidth()  < ( nLeft + nWidth + this.vscrollbar.width ) )
        		{
        			nTop = nTop + nHeight + nTopSpare;
        			nWidth = 123;
        			nLeft = 0;
        		}

        		var sText  = objDs.getColumn(i, sValue);
        		var sChkId = objDs.getColumn(i, sCode);

        		try
        		{
        			compChk = new CheckBox();
        			compChk.init(sChkId, nLeft, nTop, nWidth, nHeight, null, null);
        			compChk.set_text(sText);
        			//compChk.addEventHandler("onclick", this.fn_checkbox_onclick, this);


        			this.addChild(compChk.name, compChk);
        			compChk.show();
        		}
        		catch(e)
        		{
        			trace("error > " + this.name + " > fn_init > " + e);
        		}

        		//nLeft 설정
        		nLeft = nLeft + nLeftSpare + nWidth ;
        	}

        	this.resetScroll();

        }

        // 가장 긴 글자 size 구하기
        this.fnGetMaxLangSize = function(objDs, sCol)
        {
        	var nSize    = 60;
        	var nSpare   = 10;
        	var tempSize = 0;

        	for(var i = 0 ; i < objDs.rowcount; i++)
        	{
        		var sValue   = objDs.getColumn(i, sCol);
        		tempSize = nexacro.getTextSize(sValue, this.fvFont).nx + 75;
        		if(nSize < tempSize) nSize = tempSize;
        	}


        	return parseInt(nSize);
        };

        // 부모창으로 value return
        this.fnGetValue = function()
        {
        	var arrCode = [];

        	var nSize = this.components.length;
        	var comp;
        	for(var k = 0 ; k < nSize ; k++)
        	{
        		comp = this.components[k];
        		if (comp instanceof nexacro.CheckBox)
        		{
        			if(comp.value == true || comp.value == 1) arrCode.push(comp.name);
        		}
        	}
        	return arrCode;
        };


        // 값 체크
        this.fnSetValue = function(arr){
        	var arrValue = []
        	arrValue = arr.split(",");
        	//alert("오니222");

        	for( var i in arrValue){
        		var cnt = this.components.length;

        		for( var a =0; a<cnt; a++){
        			comp = this.components[a];
        			if(comp instanceof nexacro.CheckBox){
        				if(comp.id == arrValue[i]){
        					comp.set_value(true);
        				}
        			}
        		}
        	}

        }


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };
        this.loadIncludeScript("cmmMultiCheckBox.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
