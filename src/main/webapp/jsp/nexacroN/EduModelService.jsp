<%@ page contentType="text/xml; charset=utf-8" %>
<%@ page language="java"%>
<%@ page import="java.sql.*" %>
<%@ page import="com.nexacro.java.xapi.data.*" %>
<%@ page import="com.nexacro.java.xapi.tx.*" %>
<%@ include file="../connection_edu.jsp" %>
<%
    String str_group = request.getParameter("group")==null?"":request.getParameter("group");
    String str_id = request.getParameter("id")==null?"":request.getParameter("id");
    if(str_id.equals("")) 
    {  
        if(str_group.equals("/"))
        {
%>
<Root>
  <ErrorCode>0</ErrorCode>
  <ErrorMsg>Success</ErrorMsg>
  <ModelGroup id="Model_Common" type="group"/>
  <ModelGroup id="Model_Edu" type="group"/>
</Root>

<%
        } else if(str_group.equals("Model_Common")){
%>
<Root>
  <ErrorCode>0</ErrorCode>
  <ErrorMsg>Success</ErrorMsg>

  <ModelGroup id="Model_Common">
    <ModelGroup id="Model_Button" type="service"/>
    <ModelGroup id="Model_Search" type="service"/>
  </ModelGroup>        
</Root>
<%
        } else if(str_group.equals("Model_Edu")){
%>
<Root>
  <ErrorCode>0</ErrorCode>
  <ErrorMsg>Success</ErrorMsg>

  <ModelGroup id="Model_Edu">
    <ModelGroup id="Model_Edu" type="service"/>
  </ModelGroup>        
</Root>
<%
        } else {
%>
<Root>
  <ErrorCode>-1</ErrorCode>
  <ErrorMsg>Error</ErrorMsg>
</Root>
<%
        }
    }  else if(str_id.equals("Model_Button")){
%>  
<Root>
  <ErrorCode>0</ErrorCode>
  <ErrorMsg>Success</ErrorMsg>

<ModelInfo version="1.2">
<Models>
<Model id="Model_Button_CRUD" 			name="Model_Button_CRUD" iotype="output">
    <Field id="RETRIEVE" 	datatype="STRING" 	datasize="80"  label="Retrieve"  	fieldtype="FreeText"  description=""  required="" />
    <Field id="ADD"   		datatype="STRING" 	datasize="80"  label="Add"  			fieldtype="FreeText"  description=""  required="" />
    <Field id="DELETE"   	datatype="STRING" 	datasize="80"  label="Delete"  		fieldtype="FreeText"  description=""  required="" />
    <Field id="SAVE"   		datatype="STRING" 	datasize="80"  label="Save"  			fieldtype="FreeText"  description=""  required="" />
</Model>    
<Model id="Model_Button_Popup" name="Model_Button_Popup" iotype="output">
    <Field id="OK" 				datatype="STRING" 	datasize="80"  label="OK"  			fieldtype="FreeText"  description=""  required="" />
    <Field id="CANCEL"   	datatype="STRING" 	datasize="80"  label="CANCEL"  fieldtype="FreeText"  description=""  required="" />
</Model> 
</Models>      
</ModelInfo>      
</Root>
<%
    } else if(str_id.equals("Model_Search")){
%>  
<Root>
  <ErrorCode>0</ErrorCode>
  <ErrorMsg>Success</ErrorMsg>

<ModelInfo version="1.2">
<Models>
<Model id="Model_Search_Emp" 			name="Model_Button_CRUD" iotype="output">
    <Field id="DEPT_CD" 					datatype="STRING" 	datasize="80"  label="Department"  							fieldtype="FreeText"  description=""  required="" />
    <Field id="DEPT_POPUP_BTN"   	datatype="STRING" 	datasize="80"  label="Department Popup Button"  fieldtype="FreeText"  description=""  required="" />
    <Field id="DEPT_NAME"   			datatype="STRING" 	datasize="80"  label="Department Name"  				fieldtype="FreeText"  description=""  required="" />
    <Field id="GENDER"   					datatype="STRING" 	datasize="80"  label="Gender"  									fieldtype="FreeText"  description=""  required="" />
    <Field id="RESET_BTN"   			datatype="STRING" 	datasize="80"  label="Reset"  									fieldtype="FreeText"  description=""  required="" />
</Model>    
</Models>      
</ModelInfo>      
</Root>
<%
    }  else if(str_id.equals("Model_Edu")){
%>  
<Root>
  <ErrorCode>0</ErrorCode>
  <ErrorMsg>Success</ErrorMsg>

<ModelInfo version="1.2">
<Models>
<Model id="Model_Emp" 			name="Model_Emp" iotype="output">
    <Field id="EMPL_ID" 		datatype="STRING" 	datasize="80"  label="Emp ID"  				fieldtype="FreeText"  description=""  required="" />
    <Field id="FULL_NAME"   datatype="STRING" 	datasize="80"  label="Name"  					fieldtype="FreeText"  description=""  required="" />
    <Field id="DEPT_CD"   	datatype="STRING" 	datasize="80"  label="Department"  		fieldtype="FreeText"  description=""  required="" />
    <Field id="POS_CD"   		datatype="STRING" 	datasize="80"  label="Position"  			fieldtype="FreeText"  description=""  required="" />
    <Field id="HIRE_DATE"   datatype="DATE" 		datasize="80"  label="Hire Date"  		fieldtype="FreeText"  description=""  required="" />
		<Field id="SALARY"   		datatype="INT" 			datasize="80"  label="Annual Salary"  fieldtype="FreeText"  description=""  required="" />
		<Field id="GENDER"   		datatype="STRING" 	datasize="80"  label="Gender"  				fieldtype="FreeText"  description=""  required="" />
		<Field id="MARRIED"   	datatype="STRING" 	datasize="80"  label="Married"  			fieldtype="FreeText"  description=""  required="" />
		<Field id="MEMO"   			datatype="STRING" 	datasize="80"  label="Memo"  					fieldtype="FreeText"  description=""  required="" />			    	
</Model>    
<Model id="Model_Dept" 			name="Model_Dept" iotype="output">
    <Field id="DEPT_CD" 		datatype="STRING" 	datasize="80"  label="Dept Code"  		fieldtype="FreeText"  description=""  required="" />
    <Field id="DEPT_NAME"   datatype="STRING" 	datasize="80"  label="Dept Name"  		fieldtype="FreeText"  description=""  required="" />
</Model>   
</Models>      
</ModelInfo>      
</Root>
<%
    } else {
%>
<Root>
  <ErrorCode>-1</ErrorCode>
  <ErrorMsg>Error</ErrorMsg>
</Root>
<%
    }
%>