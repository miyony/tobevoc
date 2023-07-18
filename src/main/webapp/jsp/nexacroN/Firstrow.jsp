<%@ page contentType="text/xml; charset=UTF-8" %>
<%@ page language="java"%>
<!--
/**
 * @author TOBESOFT

 */
-->
<%@ page import = "com.nexacro.java.xapi.data.*" %>
<%@ page import = "com.nexacro.java.xapi.tx.*" %>
<%!
/**
 * 
 * @author TOBESOFT
 * @version 1.0
   * @param ds 
   * @param row 
   * @param nCnt 
   * @return 
 */
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
  PlatformRequest platformRequest = new PlatformRequest(request.getInputStream(), PlatformType.CONTENT_TYPE_XML, "UTF-8");
  platformRequest.receiveData();
  
  HttpPartPlatformResponse res = new HttpPartPlatformResponse(response, PlatformType.CONTENT_TYPE_XML);
  
  PlatformData outPD = new PlatformData();
    
  int nErrorCode = 0;
  String strErrorMsg = "SUCC";
    
  try {
    int firstCnt = Integer.parseInt(request.getParameter("First"));
	int nextCnt = Integer.parseInt(request.getParameter("Next"));
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
    
    int i ;
    int	row;
    int cntRow = 0 ;
	//System.out.println("firstCnt:"+firstCnt+",Next:"+nextCnt+",Count:"+nCnt);    
	
	for(i = 0 ; i < firstCnt ; i++ ){
		if(cntRow >= nCnt) break ;			
		row = objDs.newRow();				
		fn_setUpRecord(objDs,row,nCnt);		
		cntRow++ ;							
		if(sleep > 0)Thread.sleep(sleep);	
	}
	res.sendDataSet(objDs);					
	while(nCnt > cntRow){					
		for(i = 0 ; i < nextCnt ; i++ ){	
			if(cntRow >= nCnt) break ;		
			row = objDs.newRow();			
			fn_setUpRecord(objDs,row,nCnt);	
			cntRow++ ;						
			if(sleep > 0)Thread.sleep(sleep);
		}
		res.sendDataSet(objDs);				// Setting data into res
	}
	nErrorCode = 0;						    // Setting ErrorCode 
	strErrorMsg = "SUCC";					// Setting success message

  } catch (Throwable th) {
  	nErrorCode = -1;
  	strErrorMsg = th.getMessage();
  }
  
  VariableList outVL = outPD.getVariableList();
  outVL.add("ErrorCode", nErrorCode);		// Setting ErrorCode
  outVL.add("ErrorMsg", strErrorMsg);		// Setting ErrorMessage

  res.setData(outPD);
  res.end();

%>