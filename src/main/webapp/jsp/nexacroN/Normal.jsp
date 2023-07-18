<%@ page contentType="text/xml; charset=UTF-8" %>
<%@ page language="java"%>

<%@ page import = "com.nexacro.java.xapi.data.*" %>
<%@ page import = "com.nexacro.java.xapi.tx.*" %>
<%!
public void fn_setUpRecord(DataSet ds, int row, int nCnt)
{
	String today1 = new java.text.SimpleDateFormat("yyyyMMdd").format(new java.util.Date());
	String today2 = new java.text.SimpleDateFormat("HHmmssSSS").format(new java.util.Date());
	String today3 = new java.text.SimpleDateFormat("yyyyMMddHHmmssSSS").format(new java.util.Date());

	ds.set(row, "col_0", "abCD!@#$_" + row);
	ds.set(row, "col_1", row);
	ds.set(row, "col_2", row + (float)row/100);
	ds.set(row, "col_3", today1);
	ds.set(row, "col_4", today2);
	ds.set(row, "col_5", today3);
	ds.set(row, "col_6", row * nCnt);
}
%>
<%
// http://partner.tobesoft.co.jp/kasai/nxTest/Normal.jsp?Count=100&Sleep=100
  PlatformRequest platformRequest = new PlatformRequest(request.getInputStream(), PlatformType.CONTENT_TYPE_XML, "UTF-8");
  platformRequest.receiveData();
  
  HttpPlatformResponse res = new HttpPlatformResponse(response, PlatformType.CONTENT_TYPE_XML);
  
  PlatformData outPD = new PlatformData();
    
  int nErrorCode = 0;
  String strErrorMsg = "SUCC";
    
  try {
    int nCnt = Integer.parseInt(request.getParameter("Count"));
    int sleep = Integer.parseInt(request.getParameter("Sleep"));
    DataSet objDs = new DataSet("ds_output");
    objDs.addColumn("col_0", DataTypes.STRING, 255);
    objDs.addColumn("col_1", DataTypes.INT, 255);
    objDs.addColumn("col_2", DataTypes.FLOAT, 255);
    objDs.addColumn("col_3", DataTypes.DATE, 255);
    objDs.addColumn("col_4", DataTypes.TIME, 255);
    objDs.addColumn("col_5", DataTypes.DATE_TIME, 255);
    objDs.addColumn("col_6", DataTypes.BIG_DECIMAL, 255);
    
    int row;
    int totRow = 0;
	for( int i=0 ; i < nCnt ; i++ ){
		totRow++;
		row = objDs.newRow();			
		fn_setUpRecord(objDs,row,nCnt);		
		if(sleep > 0)Thread.sleep(sleep);	
    }
    outPD.addDataSet(objDs);	

	nErrorCode = 0;
	strErrorMsg = "SUCC";
  } catch (Throwable th) {
  	nErrorCode = -1;
  	strErrorMsg = th.getMessage();
  }

  VariableList outVL = outPD.getVariableList();
  outVL.add("ErrorCode", nErrorCode);	
  outVL.add("ErrorMsg", strErrorMsg);	
//  outVL.add("ErrorCode", -2);		
//  outVL.add("ErrorMsg", "YYY");	
  res.setData(outPD);
  res.sendData();					
%>
