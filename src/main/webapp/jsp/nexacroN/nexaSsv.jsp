<%@ page contentType="text/html;charset=euc-kr" %>
<%@ page language="java"%>
<%@ page import="java.io.*" %>
<%@ page import="java.sql.*" %>
<%@ page import="java.util.*" %>
<%
	char a = (char) 0x1e;
	char b = (char) 0x1f;  

	String RS = String.valueOf(a);
	String US = String.valueOf(b);
	
	out.print("SSV:utf-8"+RS);
	out.print("ErrorCode=0"+US+"ErrorMsg=Succ!!!!!!!"+RS);
	out.print("Dataset:output"+RS);
	out.print("_RowType_"+US+"no:String(6)"+US+"empName:String(32)"+US+"zipCode:String(6)"+US+"tel:String(11)"+RS);  
	for(int idx=0; idx<10; idx++)
	{
		out.print("N"+US+Integer.toString(idx)+US+"Mason"+US+"123456"+US+"01045678901"+RS);
	}
	out.print(RS);
%>