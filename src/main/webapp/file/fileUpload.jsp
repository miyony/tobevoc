<%@ page contentType="text/html;charset=euc-kr" %>
<%@ page language="java"%>
<%@ page import="java.io.File"%>
<%@ page import="java.util.Enumeration"%>
<%@ page import="com.oreilly.servlet.MultipartRequest"%>
<%@ page import="com.oreilly.servlet.multipart.DefaultFileRenamePolicy"%>
<%@ page import="com.nexacro.java.xapi.data.*" %>
<%@ page import="com.nexacro.java.xapi.tx.*" %>

<%
	String sHeader = request.getHeader("Content-Type");
	if (sHeader == null)
	{
		return;
	}
	request.setCharacterEncoding("utf-8");
	String sRealPath = request.getSession().getServletContext().getRealPath("/");
	String sPath     = request.getParameter("PATH");
	String sUpPath   = sRealPath + sPath; // target>m2e-wtp>web-resources>upload	
	//C:>nexacroDevStudio>worksapces>egov-workspace>.metadata>.plugins>org.eclipse.wst.server.core>tmp0>wtpwebapps>nexacro17-egov>upload
	System.out.println(sUpPath);
	int    nMaxSize  = 500 * 1024 * 1024; // �ִ� ���ε� ���� ũ�� 500MB(�ް�)�� ����
	
	PlatformData resData    = new PlatformData();
	VariableList resVarList = resData.getVariableList();


	String sMsg = " A ";
	try 
	{

		MultipartRequest multi = new MultipartRequest(request, sUpPath, nMaxSize, "utf-8", new DefaultFileRenamePolicy());
		Enumeration files      = multi.getFileNames();
		
		sMsg += "B ";
		DataSet ds = new DataSet("Dataset00");		
		ds.addColumn(new ColumnHeader("FILENAME", DataTypes.STRING));
		ds.addColumn(new ColumnHeader("FILETYPE", DataTypes.STRING));
		ds.addColumn(new ColumnHeader("FILESIZE", DataTypes.LONG));
		
		sMsg += "C ";
		String sFName = "";
		String sName  = "";
		String stype  = "";
		File   f      = null;
		
		while (files.hasMoreElements()) 
		{
			sMsg += "D ";
			sName  = (String)files.nextElement();
			sFName = multi.getFilesystemName(sName);
			stype  = multi.getContentType(sName);
			int nRow = ds.newRow();
			ds.set(nRow, "FILENAME", sFName);
			ds.set(nRow, "FILETYPE", stype);
			
			f = multi.getFile(sName);			
			if (f != null)
			{
				ds.set(nRow, "FILESIZE", f.length());
			}		
			sMsg += nRow +" ";
		}
		
		resData.addDataSet(ds);
		resVarList.add("ErrorCode", 200);
		resVarList.add("ErrorMsg", sUpPath+"/"+sFName);
	} 
	catch (Exception e) 
	{
		resVarList.add("ErrorCode", 500);
		resVarList.add("ErrorMsg", sMsg + " " + e);
	}
	//System.out.println("======================================== " + new Debugger().detail(resData));

	HttpPlatformResponse res = new HttpPlatformResponse(response);
	res.setData(resData);
	res.sendData();
%>
