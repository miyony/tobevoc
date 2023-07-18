
 
<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>

<%@ page import="org.apache.commons.fileupload.servlet.ServletFileUpload"%>
<%@ page import="org.apache.commons.fileupload.FileItemFactory"%>
<%@ page import="org.apache.commons.fileupload.FileUploadException"%>
<%@ page import="org.apache.commons.fileupload.FileItem"%>
<%@ page import="org.apache.commons.fileupload.disk.DiskFileItemFactory"%>
<%@ page import="org.apache.commons.io.FilenameUtils"%>

<%@ page import="javax.servlet.http.HttpServlet"%>
<%@ page import="javax.servlet.http.HttpServletRequest"%>
<%@ page import="javax.servlet.http.HttpServletResponse"%>
<%@ page import="javax.servlet.ServletException"%>
<%@ page import="java.io.IOException"%>
<%@ page import="java.io.File"%>
<%@ page import="java.util.*"%>
<%@ page import="java.util.List"%>
<%@ page import="java.util.Iterator"%>
<%@ page import="java.text.SimpleDateFormat"%>


<%@ page import="com.nexacro.java.xapi.data.*"%>
<%@ page import="com.nexacro.java.xapi.tx.*"%>

<%
PlatformData resData = new PlatformData();
VariableList resVarList = resData.getVariableList();

System.out.println("111111111188888888888888888888");

//Check that we have a file upload request
boolean isMultipart = ServletFileUpload.isMultipartContent(request);

if (isMultipart) 
{
	String contextRealPath = request.getServletContext().getRealPath("/upload/");
	String path = request.getParameter("path");
	String savePath = contextRealPath + path;
	
	System.out.println("===> savePath : " + savePath);
	
	// Create a factory for disk-based file items
	DiskFileItemFactory factory = new DiskFileItemFactory();
	
	// Sets the size threshold beyond which files are written directly to disk
	factory.setSizeThreshold(4096);
	
	// Create a new file upload handler
	ServletFileUpload upload = new ServletFileUpload(factory);

	// Specifies the character encoding to be used when reading the headers of individual part
	upload.setHeaderEncoding("utf-8");
	
	// Set overall request size constraint
	upload.setSizeMax(50000 * 1024 * 1024); 
	
	// Sets the maximum allowed size of a single uploaded file
	upload.setFileSizeMax(50000 * 1024 * 1024); 
	
	try 
	{
		File filePath = new File(savePath); 
		if (!filePath.exists()) {
			filePath.mkdirs();
		}

		// Sets the directory used to temporarily store files that are larger than the configured size threshold
		factory.setRepository(new File(System.getProperty("java.io.tmpdir")));
		//System.out.println("---> getRepository:"+factory.getRepository());

		// Parse the request
		List<FileItem> items = upload.parseRequest(request);
		
		System.out.println("===> size :" + items.size());
		Iterator<FileItem> iter = items.iterator();

		DataSet ds = new DataSet("ds_output");
		ds.addColumn(new ColumnHeader("fileid", DataTypes.STRING));
		ds.addColumn(new ColumnHeader("fileimg", DataTypes.STRING));
		ds.addColumn(new ColumnHeader("filename", DataTypes.STRING));
		ds.addColumn(new ColumnHeader("filesize", DataTypes.INT));
		ds.addColumn(new ColumnHeader("tranfilesize", DataTypes.INT));
		//ds.addColumn(new ColumnHeader("prog", DataTypes.INT));
		//ds.addColumn(new ColumnHeader("removeFlag", DataTypes.STRING));

		// Parse the request
		while (iter.hasNext()) 
		{
			FileItem item = (FileItem) iter.next();
			if (item.isFormField()) {
				
				System.out.println("nxPostData -------------------> getFieldName : " + item.getFieldName() + " value : " + item.getString());
				
				String name = item.getFieldName();
				String encoding = upload.getHeaderEncoding();
				//String valField = item.getString();
                String valField = java.net.URLDecoder.decode(item.getString(), "utf-8");
                
                if (name.equals("infoDatasets")) {
				    //input dataset이 없을 경우 check.
   				    if (valField == null || valField.equals("") || valField.equals("undefined")) {
				    	continue;
				    }						
					
   				 	Integer nIdx = valField.indexOf("SSV:utf-8");
   				 	System.out.println("\n nIdx ===> " + nIdx);
				    
    				PlatformData pd = new PlatformData();
    								
    				if (nIdx == -1) {
    					pd.loadXml(valField);
    				} else {
    					pd.loadSsv(valField);
    				}
    				
    				DataSetList inputDslist = pd.getDataSetList();
    				System.out.println("\n Dataset Len ===> " + inputDslist.size());
    				
    				DataSet inputDs;
    				for (int i=0; i<inputDslist.size(); i++) {
    					DataSet localDs = inputDslist.get(i);
    					System.out.println("\n dsName  ===> " + localDs.getName());
    					
    					inputDs = new DataSet();
    					inputDs.setName(localDs.getName());
    					
    					if (nIdx == -1) {
    						inputDs.loadXml(localDs.saveXml());
    					} else {
    						inputDs.loadSsv(localDs.saveSsv());
    					}
    					
    					System.out.println("\n " + inputDs.getName() + "결과는===>\n" + inputDs.saveXml());
    				}
    				
    				//TODO
					//이후 처리는 각 업무로직에 맞게 사용할 것.					
    				continue;
    				
    			} else if (name.equals("removeFile")) {		// File remove
					File f = new File(savePath + File.separator, valField);
					
					if (f.exists()) {
						System.out.println("f==>"+f);
						f.delete();
					}
    			}
		
			} else {
				// Process a file upload
				// filename on the client
				String fieldName = item.getFieldName();
				String fileName = item.getName();
				long fileSize = item.getSize();
				System.out.println(">>>>> fileName:"+fileName + "   fieldName:" + fieldName + "   fileSize:" + fileSize);
				
				if (fileName == null || fileName.equals("")) {
					continue;
				} else {
					fileName = FilenameUtils.getName(fileName);
					
					//File uploadedFile = new File(filePath + File.separator + fileName);
					File uploadedFile = new File(filePath + File.separator, fileName);
					//System.out.println(uploadedFile.getAbsolutePath());
					
					item.write(uploadedFile);
					item.delete();
					
					int row = ds.newRow();
					ds.set(row, "fileid", fieldName);
					ds.set(row, "filename", fileName);
					ds.set(row, "filesize", fileSize);
					//ds.set(row, "prog", 0);
					
				}
			}
		}
		resData.addDataSet(ds);
		resVarList.add("ErrorCode", 0);
		resVarList.add("ErrorMsg", "SUCCESS");
	}
	catch (FileUploadException e) 
	{
		resVarList.add("ErrorCode", -1);
		resVarList.add("ErrorMsg", e);
		e.printStackTrace();
	} 
	catch (Exception e) 
	{
		resVarList.add("ErrorCode", -1);
		resVarList.add("ErrorMsg", e);
		e.printStackTrace();
	}
}
else
{
	resVarList.add("ErrorCode", -1);
	resVarList.add("ErrorMsg", "Invalid Request");
}


HttpPlatformResponse res = new HttpPlatformResponse(response);
res.setData(resData);
res.sendData();
%>
