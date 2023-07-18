<%@page contentType="text/html; charset=UTF-8" %>
<%@page import="java.io.BufferedReader"%>
<%@page import="java.io.IOException"%>
<%@page import="java.io.InputStream"%>
<%@page import="java.io.InputStreamReader"%>
<%@page import="java.net.HttpURLConnection"%>
<%@page import="java.net.URL"%>
<%@page import="org.w3c.dom.*"%>
<%@page import="org.w3c.dom.Node"%>
<%@page import="org.w3c.dom.NodeList"%>
<%@page import="java.io.StringReader"%>
<%@page import="javax.xml.parsers.*"%>
<%@page import="javax.xml.xpath.XPath"%>
<%@page import="javax.xml.xpath.XPathConstants"%>
<%@page import="javax.xml.xpath.XPathExpressionException"%>
<%@page import="javax.xml.xpath.XPathFactory"%>
<%@page import="org.xml.sax.InputSource"%>
<%@page import="org.xml.sax.SAXException"%>
<%@page import="org.xml.sax.InputSource"%>
<%@page import="java.io.StringReader"%>
<%@page import="java.net.URLConnection"%>
<%@page import="com.nexacro.java.xapi.tx.*" %>
<%@page import="com.nexacro.java.xapi.data.*" %> 
<%@page import="com.nexacro.java.xapi.data.datatype.*" %>
<%  
out.clear();       
String strCharset = "UTF-8";
  
	  
PlatformRequest platformRequest = new PlatformRequest(request.getInputStream(), PlatformType.CONTENT_TYPE_XML, strCharset);
platformRequest.receiveData();  
PlatformData inPD = platformRequest.getData();

VariableList    inVariableList  = inPD.getVariableList();
DataSetList     inDataSetList   = inPD.getDataSetList();

PlatformData outPD = platformRequest.getData();
VariableList    outVariableList  = new VariableList();
DataSetList     outDataSetList   = new DataSetList();

String busRouteId = inVariableList.getString("busRouteId");
if(busRouteId == null)
{
	
	busRouteId = "100100055";
}

DataSet outDataSet = null;
try {

	outDataSet = new DataSet("output");
	outDataSet.addColumn("arsId",		DataTypes.STRING, 100);
	outDataSet.addColumn("avgCf1",		DataTypes.STRING, 100);
	outDataSet.addColumn("avgCf2",		DataTypes.STRING, 100);
	outDataSet.addColumn("brdrde_Num1",	DataTypes.STRING, 100);
	outDataSet.addColumn("brdrde_Num2",	DataTypes.STRING, 100);
	outDataSet.addColumn("brerde_Div1",	DataTypes.STRING, 100);

	outDataSet.addColumn("busType1",	DataTypes.STRING, 100);
	outDataSet.addColumn("busType2",	DataTypes.STRING, 100);
       
	outDataSet.addColumn("dir",			DataTypes.STRING, 100);
       
	outDataSet.addColumn("expCf1",		DataTypes.STRING, 100);
	outDataSet.addColumn("expCf2",		DataTypes.STRING, 100);
	outDataSet.addColumn("exps1",		DataTypes.STRING, 100);
	outDataSet.addColumn("exps2",		DataTypes.STRING, 100);
	outDataSet.addColumn("firstTm",		DataTypes.STRING, 100);
	outDataSet.addColumn("full1",		DataTypes.STRING, 100);
	outDataSet.addColumn("full2",		DataTypes.STRING, 100);
	outDataSet.addColumn("goal1",		DataTypes.STRING, 100);
	outDataSet.addColumn("goal2",		DataTypes.STRING, 100);
	outDataSet.addColumn("isArrive1",	DataTypes.STRING, 100);
	outDataSet.addColumn("isArrive2",	DataTypes.STRING, 100);
	outDataSet.addColumn("isLast1",		DataTypes.STRING, 100);
	outDataSet.addColumn("isLast2",		DataTypes.STRING, 100);
	outDataSet.addColumn("kalCf1",		DataTypes.STRING, 100);
	outDataSet.addColumn("kalCf2",		DataTypes.STRING, 100);
	outDataSet.addColumn("kals1",		DataTypes.STRING, 100);
	outDataSet.addColumn("kals2",		DataTypes.STRING, 100);
	outDataSet.addColumn("lastTm",		DataTypes.STRING, 100);
	outDataSet.addColumn("mkTm",		DataTypes.STRING, 100);
	outDataSet.addColumn("namin2Sec1",	DataTypes.STRING, 100);
	outDataSet.addColumn("namin2Sec2",	DataTypes.STRING, 100);
       	
	outDataSet.addColumn("neuCf1",		DataTypes.STRING, 100);
	outDataSet.addColumn("neuCf2",		DataTypes.STRING, 100);
	outDataSet.addColumn("neus1",		DataTypes.STRING, 100);
	outDataSet.addColumn("neus2",		DataTypes.STRING, 100);
	outDataSet.addColumn("nmain2Ord1",	DataTypes.STRING, 100);
	outDataSet.addColumn("nmain2Ord2",	DataTypes.STRING, 100);
	outDataSet.addColumn("nmain2Stnid1",DataTypes.STRING, 100);
	outDataSet.addColumn("nmain2Stnid2",DataTypes.STRING, 100);
	outDataSet.addColumn("nmain3Ord1",	DataTypes.STRING, 100);
	outDataSet.addColumn("nmain3Ord2",	DataTypes.STRING, 100);
	outDataSet.addColumn("nmain3Sec1",	DataTypes.STRING, 100);
	outDataSet.addColumn("nmain3Sec2",	DataTypes.STRING, 100);
	outDataSet.addColumn("nmain3Stnid1",DataTypes.STRING, 100);
	outDataSet.addColumn("nmain3Stnid2",DataTypes.STRING, 100);
	outDataSet.addColumn("nmainOrd1",	DataTypes.STRING, 100);
	outDataSet.addColumn("nmainOrd2",	DataTypes.STRING, 100);
	outDataSet.addColumn("nmainSec1",	DataTypes.STRING, 100);
	outDataSet.addColumn("nmainSec2",	DataTypes.STRING, 100);
	outDataSet.addColumn("nmainStnid1",	DataTypes.STRING, 100);
	outDataSet.addColumn("nmainStnid2",	DataTypes.STRING, 100);
	outDataSet.addColumn("nstnId1",		DataTypes.STRING, 100);
	outDataSet.addColumn("nstnId2",		DataTypes.STRING, 100);
	outDataSet.addColumn("nstnOrd1",	DataTypes.STRING, 100);
	outDataSet.addColumn("nstnOrd2",	DataTypes.STRING, 100);
	outDataSet.addColumn("nstnSec1",	DataTypes.STRING, 100);
	outDataSet.addColumn("nstnSec2",	DataTypes.STRING, 100);
	outDataSet.addColumn("nstnSpd1",	DataTypes.STRING, 100);
	outDataSet.addColumn("nstnSpd2",	DataTypes.STRING, 100);
	outDataSet.addColumn("rerdie_Div1",	DataTypes.STRING, 100);
	outDataSet.addColumn("rerdie_Div2",	DataTypes.STRING, 100);
	outDataSet.addColumn("reride_Num1",	DataTypes.STRING, 100);
	outDataSet.addColumn("reride_Num2",	DataTypes.STRING, 100);
	outDataSet.addColumn("routeType",	DataTypes.STRING, 100);
       
	outDataSet.addColumn("rtNm",		DataTypes.STRING, 100);
	outDataSet.addColumn("sectOrd1",	DataTypes.STRING, 100);
	outDataSet.addColumn("sectOrd2",	DataTypes.STRING, 100);
	outDataSet.addColumn("stId",		DataTypes.STRING, 100);
	outDataSet.addColumn("stNm",		DataTypes.STRING, 100);
	outDataSet.addColumn("staOrd",		DataTypes.STRING, 100);
	outDataSet.addColumn("term",		DataTypes.STRING, 100);
	outDataSet.addColumn("traSpd1",		DataTypes.STRING, 100);
	outDataSet.addColumn("traSpd2",		DataTypes.STRING, 100);
	outDataSet.addColumn("traTime1",	DataTypes.STRING, 100);
	outDataSet.addColumn("traTime2",	DataTypes.STRING, 100);
	outDataSet.addColumn("vehId1",		DataTypes.STRING, 100);
	outDataSet.addColumn("vehId2",		DataTypes.STRING, 100);
	
	URL url = new URL("http://ws.bus.go.kr/api/rest/arrive/getArrInfoByRouteAll?serviceKey=qRTd2SDPZ7rq2W9xTqMYTvU5IWDnBaQQ0Ty52COzakFHShWNLf%2B4Il%2Faox9o%2B3xmefFny%2Fo%2F%2Bllj6d1aSmM37w%3D%3D&busRouteId=" + busRouteId);
	URLConnection connection;   
	connection = url.openConnection();
	HttpURLConnection httpconnection = (HttpURLConnection) connection;
	int responseCode = httpconnection.getResponseCode();
	if (responseCode == HttpURLConnection.HTTP_OK) {
  	    
	    //내용 읽기 시작   
	    InputStream in = httpconnection.getInputStream();
	    BufferedReader br = new BufferedReader(new InputStreamReader(in,  "UTF-8"));
	    
	    String line;
	    StringBuilder sb = new StringBuilder();
	    while ((line = br.readLine()) != null) {
	        sb.append(line);
	    }       
	    br.close();
	        
	    InputSource is = new InputSource(new StringReader(sb.toString()));
	    
        Document document = DocumentBuilderFactory.newInstance().newDocumentBuilder().parse(is);
        XPath xpath = XPathFactory.newInstance().newXPath(); // xpath 생성        
        NodeList books = (NodeList) xpath.evaluate("//ServiceResult/msgBody/itemList", document,XPathConstants.NODESET);
           
        int nRow;
        for (int i = 0; i < books.getLength(); i++) {
             Node node = books.item(i);    
             if (node.getNodeType() ==  node.ELEMENT_NODE) {
								Element elem = (Element) node;
                String arsId = elem.getElementsByTagName("arsId").item(0).getChildNodes().item(0).getNodeValue();
                String avgCf1 = elem.getElementsByTagName("avgCf1").item(0).getChildNodes().item(0).getNodeValue();
                String avgCf2 = elem.getElementsByTagName("avgCf2").item(0).getChildNodes().item(0).getNodeValue();
                String brdrde_Num1 = elem.getElementsByTagName("brdrde_Num1").item(0).getChildNodes().item(0).getNodeValue();
                String brdrde_Num2 = elem.getElementsByTagName("brdrde_Num2").item(0).getChildNodes().item(0).getNodeValue();
                String brerde_Div1 = elem.getElementsByTagName("brerde_Div1").item(0).getChildNodes().item(0).getNodeValue();
                  
                String busType1 = elem.getElementsByTagName("busType1").item(0).getChildNodes().item(0).getNodeValue();
                String busType2 = elem.getElementsByTagName("busType2").item(0).getChildNodes().item(0).getNodeValue();
                  
                String dir = elem.getElementsByTagName("dir").item(0).getChildNodes().item(0).getNodeValue();
                  
                String expCf1 = elem.getElementsByTagName("expCf1").item(0).getChildNodes().item(0).getNodeValue();
                String expCf2 = elem.getElementsByTagName("expCf2").item(0).getChildNodes().item(0).getNodeValue();
                String exps1 = elem.getElementsByTagName("exps1").item(0).getChildNodes().item(0).getNodeValue();
                String exps2 = elem.getElementsByTagName("exps2").item(0).getChildNodes().item(0).getNodeValue();
                String firstTm = elem.getElementsByTagName("firstTm").item(0).getChildNodes().item(0).getNodeValue();
                String full1 = elem.getElementsByTagName("full1").item(0).getChildNodes().item(0).getNodeValue();
                String full2 = elem.getElementsByTagName("full2").item(0).getChildNodes().item(0).getNodeValue();
                String goal1 = elem.getElementsByTagName("goal1").item(0).getChildNodes().item(0).getNodeValue();
                String goal2 = elem.getElementsByTagName("goal2").item(0).getChildNodes().item(0).getNodeValue();
                String isArrive1 = elem.getElementsByTagName("isArrive1").item(0).getChildNodes().item(0).getNodeValue();
                String isArrive2 = elem.getElementsByTagName("isArrive2").item(0).getChildNodes().item(0).getNodeValue();
                String isLast1 = elem.getElementsByTagName("isLast1").item(0).getChildNodes().item(0).getNodeValue();
                String isLast2 = elem.getElementsByTagName("isLast2").item(0).getChildNodes().item(0).getNodeValue();
                String kalCf1 = elem.getElementsByTagName("kalCf1").item(0).getChildNodes().item(0).getNodeValue();
                String kalCf2 = elem.getElementsByTagName("kalCf2").item(0).getChildNodes().item(0).getNodeValue();
                String kals1 = elem.getElementsByTagName("kals1").item(0).getChildNodes().item(0).getNodeValue();
                String kals2 = elem.getElementsByTagName("kals2").item(0).getChildNodes().item(0).getNodeValue();
                String lastTm = elem.getElementsByTagName("lastTm").item(0).getChildNodes().item(0).getNodeValue();
                String mkTm = elem.getElementsByTagName("mkTm").item(0).getChildNodes().item(0).getNodeValue();
                String namin2Sec1 = elem.getElementsByTagName("namin2Sec1").item(0).getChildNodes().item(0).getNodeValue();
                String namin2Sec2 = elem.getElementsByTagName("namin2Sec2").item(0).getChildNodes().item(0).getNodeValue();
                
                String neuCf1 = elem.getElementsByTagName("neuCf1").item(0).getChildNodes().item(0).getNodeValue();
                String neuCf2 = elem.getElementsByTagName("neuCf2").item(0).getChildNodes().item(0).getNodeValue();
                String neus1 = elem.getElementsByTagName("neus1").item(0).getChildNodes().item(0).getNodeValue();
                String neus2 = elem.getElementsByTagName("neus2").item(0).getChildNodes().item(0).getNodeValue();
                String nmain2Ord1 = elem.getElementsByTagName("nmain2Ord1").item(0).getChildNodes().item(0).getNodeValue();
                String nmain2Ord2 = elem.getElementsByTagName("nmain2Ord2").item(0).getChildNodes().item(0).getNodeValue();
                String nmain2Stnid1 = elem.getElementsByTagName("nmain2Stnid1").item(0).getChildNodes().item(0).getNodeValue();
                String nmain2Stnid2 = elem.getElementsByTagName("nmain2Stnid2").item(0).getChildNodes().item(0).getNodeValue();
                String nmain3Ord1 = elem.getElementsByTagName("nmain3Ord1").item(0).getChildNodes().item(0).getNodeValue();
                String nmain3Ord2 = elem.getElementsByTagName("nmain3Ord2").item(0).getChildNodes().item(0).getNodeValue();
                
                String nmain3Sec1 = elem.getElementsByTagName("nmain3Sec1").item(0).getChildNodes().item(0).getNodeValue();
                String nmain3Sec2 = elem.getElementsByTagName("nmain3Sec2").item(0).getChildNodes().item(0).getNodeValue();
                String nmain3Stnid1 = elem.getElementsByTagName("nmain3Stnid1").item(0).getChildNodes().item(0).getNodeValue();
                String nmain3Stnid2 = elem.getElementsByTagName("nmain3Stnid2").item(0).getChildNodes().item(0).getNodeValue();
                String nmainOrd1 = elem.getElementsByTagName("nmainOrd1").item(0).getChildNodes().item(0).getNodeValue();
                String nmainOrd2 = elem.getElementsByTagName("nmainOrd2").item(0).getChildNodes().item(0).getNodeValue();
                String nmainSec1 = elem.getElementsByTagName("nmainSec1").item(0).getChildNodes().item(0).getNodeValue();
                String nmainSec2 = elem.getElementsByTagName("nmainSec2").item(0).getChildNodes().item(0).getNodeValue();
                String nmainStnid1 = elem.getElementsByTagName("nmainStnid1").item(0).getChildNodes().item(0).getNodeValue();
                String nmainStnid2 = elem.getElementsByTagName("nmainStnid2").item(0).getChildNodes().item(0).getNodeValue();
                String nstnId1 = elem.getElementsByTagName("nstnId1").item(0).getChildNodes().item(0).getNodeValue();
                String nstnId2 = elem.getElementsByTagName("nstnId2").item(0).getChildNodes().item(0).getNodeValue();
                String nstnOrd1 = elem.getElementsByTagName("nstnOrd1").item(0).getChildNodes().item(0).getNodeValue();
                String nstnOrd2 = elem.getElementsByTagName("nstnOrd2").item(0).getChildNodes().item(0).getNodeValue();
                String nstnSec1 = elem.getElementsByTagName("nstnSec1").item(0).getChildNodes().item(0).getNodeValue();
                String nstnSec2 = elem.getElementsByTagName("nstnSec2").item(0).getChildNodes().item(0).getNodeValue();
                String nstnSpd1 = elem.getElementsByTagName("nstnSpd1").item(0).getChildNodes().item(0).getNodeValue();
                String nstnSpd2 = elem.getElementsByTagName("nstnSpd2").item(0).getChildNodes().item(0).getNodeValue();
                String rerdie_Div1 = elem.getElementsByTagName("rerdie_Div1").item(0).getChildNodes().item(0).getNodeValue();
                String rerdie_Div2 = elem.getElementsByTagName("rerdie_Div2").item(0).getChildNodes().item(0).getNodeValue();
                String reride_Num1 = elem.getElementsByTagName("reride_Num1").item(0).getChildNodes().item(0).getNodeValue();
                String reride_Num2 = elem.getElementsByTagName("reride_Num2").item(0).getChildNodes().item(0).getNodeValue();
                String routeType = elem.getElementsByTagName("routeType").item(0).getChildNodes().item(0).getNodeValue();
                
                String rtNm = elem.getElementsByTagName("rtNm").item(0).getChildNodes().item(0).getNodeValue();
                String sectOrd1 = elem.getElementsByTagName("sectOrd1").item(0).getChildNodes().item(0).getNodeValue();
                String sectOrd2 = elem.getElementsByTagName("sectOrd2").item(0).getChildNodes().item(0).getNodeValue();
                String stId = elem.getElementsByTagName("stId").item(0).getChildNodes().item(0).getNodeValue();
                String stNm = elem.getElementsByTagName("stNm").item(0).getChildNodes().item(0).getNodeValue();
                String staOrd = elem.getElementsByTagName("staOrd").item(0).getChildNodes().item(0).getNodeValue();
                String term = elem.getElementsByTagName("term").item(0).getChildNodes().item(0).getNodeValue();
                String traSpd1 = elem.getElementsByTagName("traSpd1").item(0).getChildNodes().item(0).getNodeValue();
                String traSpd2 = elem.getElementsByTagName("traSpd2").item(0).getChildNodes().item(0).getNodeValue();
                String traTime1 = elem.getElementsByTagName("traTime1").item(0).getChildNodes().item(0).getNodeValue();
                String traTime2 = elem.getElementsByTagName("traTime2").item(0).getChildNodes().item(0).getNodeValue();
                String vehId1 = elem.getElementsByTagName("vehId1").item(0).getChildNodes().item(0).getNodeValue();
                String vehId2 = elem.getElementsByTagName("vehId2").item(0).getChildNodes().item(0).getNodeValue();
                 
                                   
             	nRow = outDataSet.newRow();
             
				outDataSet.set(nRow, "arsId",		arsId);
            	outDataSet.set(nRow, "avgCf1",		avgCf1);
             	outDataSet.set(nRow, "avgCf2",		avgCf2);
           		outDataSet.set(nRow, "brdrde_Num1",	brdrde_Num1);
           		outDataSet.set(nRow, "brdrde_Num2", brdrde_Num2);
				outDataSet.set(nRow, "brerde_Div1",	brerde_Div1);
             
				outDataSet.set(nRow, "busType1",	busType1);
				outDataSet.set(nRow, "busType2",	busType2);
				             
				outDataSet.set(nRow, "dir",			dir);
				             
				outDataSet.set(nRow, "expCf1",		expCf1);
				outDataSet.set(nRow, "expCf2",		expCf2);
				outDataSet.set(nRow, "exps1",		exps1);
				outDataSet.set(nRow, "exps2",		exps2);
				outDataSet.set(nRow, "firstTm",		firstTm);
				outDataSet.set(nRow, "full1",		full1);
				outDataSet.set(nRow, "full2",		full2);
				outDataSet.set(nRow, "goal1",		goal1);
				outDataSet.set(nRow, "goal2",		goal2);
				outDataSet.set(nRow, "isArrive1",	isArrive1);  
				outDataSet.set(nRow, "isArrive2",	isArrive2);
				outDataSet.set(nRow, "isLast1",		isLast1);
				outDataSet.set(nRow, "isLast2",		isLast2);
				outDataSet.set(nRow, "kalCf1",		kalCf1);
				outDataSet.set(nRow, "kalCf2",		kalCf2);
				outDataSet.set(nRow, "kals1",		kals1);
				outDataSet.set(nRow, "kals2",		kals2);
				outDataSet.set(nRow, "lastTm",		lastTm);
				outDataSet.set(nRow, "mkTm",		mkTm);
				outDataSet.set(nRow, "namin2Sec1",	namin2Sec1);
				outDataSet.set(nRow, "namin2Sec2",	namin2Sec2);
				             
				outDataSet.set(nRow, "neuCf1",		neuCf1);
				outDataSet.set(nRow, "neuCf2",		neuCf2);
				outDataSet.set(nRow, "neus1",		neus1);
				outDataSet.set(nRow, "neus2",		neus2);
				outDataSet.set(nRow, "nmain2Ord1",		nmain2Ord1);
				outDataSet.set(nRow, "nmain2Ord2",		nmain2Ord2);
				outDataSet.set(nRow, "nmain2Stnid1",	nmain2Stnid1);
				outDataSet.set(nRow, "nmain2Stnid2",	nmain2Stnid2);
				outDataSet.set(nRow, "nmain3Ord1",	nmain3Ord1);
				outDataSet.set(nRow, "nmain3Ord2",	nmain3Ord2);
				outDataSet.set(nRow, "nmain3Sec1",	nmain3Sec1);
				outDataSet.set(nRow, "nmain3Sec2",	nmain3Sec2);
				outDataSet.set(nRow, "nmain3Stnid1",nmain3Stnid1);
				outDataSet.set(nRow, "nmain3Stnid2",nmain3Stnid2);
				outDataSet.set(nRow, "nmainOrd1",	nmainOrd1);
				outDataSet.set(nRow, "nmainOrd2",	nmainOrd2);
				outDataSet.set(nRow, "nmainSec1",	nmainSec1);
				outDataSet.set(nRow, "nmainSec2",	nmainSec2);
				outDataSet.set(nRow, "nmainStnid1",	nmainStnid1);
				outDataSet.set(nRow, "nmainStnid2", nmainStnid2);
				outDataSet.set(nRow, "nstnId1",		nstnId1);
				outDataSet.set(nRow, "nstnId2",		nstnId2);
				outDataSet.set(nRow, "nstnOrd1",	nstnOrd1);
				outDataSet.set(nRow, "nstnOrd2",	nstnOrd2);
				outDataSet.set(nRow, "nstnSec1",	nstnSec1);
				outDataSet.set(nRow, "nstnSec2",	nstnSec2);
				outDataSet.set(nRow, "nstnSpd1",	nstnSpd1);
				outDataSet.set(nRow, "nstnSpd2",	nstnSpd2);
				outDataSet.set(nRow, "rerdie_Div1",	rerdie_Div1);
				outDataSet.set(nRow, "rerdie_Div2",	rerdie_Div2);
				outDataSet.set(nRow, "reride_Num1",	reride_Num1);
				outDataSet.set(nRow, "reride_Num2",	reride_Num2);
				outDataSet.set(nRow, "routeType",	routeType);
				             
				outDataSet.set(nRow, "rtNm",		rtNm);
				outDataSet.set(nRow, "sectOrd1",	sectOrd1);  
				outDataSet.set(nRow, "sectOrd2",	sectOrd2);
				outDataSet.set(nRow, "stId",		stId);
				outDataSet.set(nRow, "stNm",		stNm);
				outDataSet.set(nRow, "staOrd",		staOrd);
				outDataSet.set(nRow, "term",		term);
				outDataSet.set(nRow, "traSpd1",		traSpd1);
				outDataSet.set(nRow, "traSpd2",		traSpd2);
				outDataSet.set(nRow, "traTime1",	traTime1);
				outDataSet.set(nRow, "traTime2",	traTime2);
				outDataSet.set(nRow, "vehId1",		vehId1);
				outDataSet.set(nRow, "vehId2",		vehId2);
             
             }
        }
       
	}
	
	outDataSetList.add(outDataSet);
    outVariableList.add("ErrorCode", 0);
    outVariableList.add("ErrorMsg",  "SUCCESS");

    outVariableList.add("strOutputData", "※ Output Vairable을 받으려면, 화면의 전역변수로 선언하면 됩니다.");
	
 

   

} catch(Exception e) {

    outVariableList.add("ErrorCode", -1);
    outVariableList.add("ErrorMsg",  e.toString());

} finally {

    outPD.setDataSetList(outDataSetList);
    outPD.setVariableList(outVariableList); 

    String Contents_type;  

	Contents_type = PlatformType.CONTENT_TYPE_XML;
    
   	HttpPlatformResponse res = new HttpPlatformResponse(response, Contents_type, "UTF-8");
   	res.setData(outPD);
    res.sendData();    
}	

%>