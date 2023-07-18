(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("aaaa");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds00", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"leval\" type=\"STRING\" size=\"256\"/><Column id=\"status\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"name\">A</Col><Col id=\"leval\">0</Col><Col id=\"status\">0</Col></Row><Row><Col id=\"name\">A-a</Col><Col id=\"leval\">1</Col><Col id=\"status\">3</Col></Row><Row><Col id=\"name\">A-b</Col><Col id=\"leval\">1</Col><Col id=\"status\">3</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grd00","55","49","265","254",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds00");
            obj.set_treeuseimage("false");
            obj.set_treeusecheckbox("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"144\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell/></Band><Band id=\"body\"><Cell text=\"bind:name\" treelevel=\"bind:leval\" treestate=\"bind:leval\" displaytype=\"treeitemcontrol\" edittype=\"tree\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","410","70","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Button00");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","365","185","375","270",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("ds00");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"name\"/><Cell col=\"1\" text=\"leval\"/><Cell col=\"2\" text=\"status\"/></Band><Band id=\"body\"><Cell text=\"bind:name\"/><Cell col=\"1\" text=\"bind:leval\"/><Cell col=\"2\" text=\"bind:status\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("testTree.xfdl", function() {

        this.Button00_onclick = function(obj,e)
        {
        	var nRow = this.ds00.addRow();
        	this.ds00.setColumn(nRow, "name", "B");
        	this.ds00.setColumn(nRow, "leval", 0);
        	this.ds00.setColumn(nRow, "status", 0);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.aaaa_onload,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
        };
        this.loadIncludeScript("testTree.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
