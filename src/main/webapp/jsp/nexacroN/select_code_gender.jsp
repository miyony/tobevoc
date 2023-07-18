<%@ page import = "org.apache.commons.logging.*" %>
<%@ page import = "com.nexacro.java.xapi.data.*" %>
<%@ page import = "com.nexacro.java.xapi.tx.*" %>
<%@ page import = "java.util.*" %>
<%@ page import = "java.sql.*" %>
<%@ page import = "java.io.*" %>
<%@ page contentType = "text/xml; charset=UTF-8" %>
<%@ include file="../connection_edu.jsp" %>
<%
// PlatformData
PlatformData out_pData = new PlatformData();
String sDept = (request.getParameter("sDept") == null) ? "" : request.getParameter("sDept");
	
int    nErrorCode  = 0;
String strErrorMsg = "START";

try {    
	/******* JDBC Connection *******/
	Connection conn = null;
	Statement  stmt = null;
	ResultSet  rs   = null;
	
	try { 
//      Class.forName("org.sqlite.JDBC");
//		conn = DriverManager.getConnection("jdbc:sqlite:C:\\Tomcat 8.0\\webapps\\EduProject\\File\\nexacro_edu_db.sqlite");

		conn = DriverManager.getConnection(url, id , pw);
		stmt = conn.createStatement();
	  
	  
		DataSet ds = new DataSet("out_gender");
		ds.addColumn("CODE" 	  ,DataTypes.STRING  ,(short)10 );
		ds.addColumn("CODE_NAME"  ,DataTypes.STRING  ,(short)50 );

		int row = ds.newRow();
		ds.set(row ,"CODE"       ,"M");
		ds.set(row ,"CODE_NAME"  ,"Male");

		row = ds.newRow();
		ds.set(row ,"CODE"       ,"W");
		ds.set(row ,"CODE_NAME"  ,"Female");
		  
		// #1 dataset -> PlatformData
		out_pData.addDataSet(ds);

		// #2 dataset -> PlatformData
		//DataSetList dsList = out_pData.getDataSetList();
		//dsList.add(ds);

		nErrorCode  = 0;
		strErrorMsg = "SUCC";
		
	} catch (SQLException e) {
		nErrorCode = -1;
		strErrorMsg = e.getMessage();
	}    
	
	/******** JDBC Close ********/
	if ( stmt != null ) try { stmt.close(); } catch (Exception e) {nErrorCode = -1; strErrorMsg = e.getMessage();}
	if ( conn != null ) try { conn.close(); } catch (Exception e) {nErrorCode = -1; strErrorMsg = e.getMessage();}
			
	} catch (Throwable th) {
		nErrorCode = -1;
		strErrorMsg = th.getMessage();
}

VariableList varList = out_pData.getVariableList();
varList.add("ErrorCode", nErrorCode);
varList.add("ErrorMsg" , strErrorMsg);



/*
Variable varErrCD = new Variable("ErrorCode");
varErrCD.set(nErrorCode);

Variable varErrMSG = new Variable("ErrorMsg");
varErrMSG.set(strErrorMsg);

out_pData.addVariable(varErrCD);
out_pData.addVariable(varErrMSG);
*/

HttpPlatformResponse pRes = new HttpPlatformResponse(response, PlatformType.CONTENT_TYPE_XML, "utf-8");
pRes.setData(out_pData);

// Send data
pRes.sendData();
%>
