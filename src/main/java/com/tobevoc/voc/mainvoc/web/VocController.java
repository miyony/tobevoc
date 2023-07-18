package com.tobevoc.voc.mainvoc.web;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.java.xapi.data.DataSet;
import com.nexacro.uiadapter.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter.spring.core.annotation.ParamVariable;
import com.nexacro.uiadapter.spring.core.data.NexacroResult;
import com.tobevoc.voc.board.service.BoardService;
import com.tobevoc.voc.common.service.CommonService;
import com.tobevoc.voc.common.service.CustomerService;
import com.tobevoc.voc.common.vo.attachVO;
import com.tobevoc.voc.common.web.AuthController;
import com.tobevoc.voc.mainvoc.service.VocService;

@Controller
public class VocController extends AuthController {

	private Logger log = LoggerFactory.getLogger(VocController.class);

	@Resource(name = "vocService")
	private VocService vocService;

	@Resource(name = "commonService")
	private CommonService commonService;

	@Resource(name = "customerService")
	private CustomerService customerService;

	/* 목록 */
	@RequestMapping(value = "selectVoc.do")
	public NexacroResult selectVoc(@ParamDataSet(name="dsSearch", required=false) Map<String, String> searchMap, HttpServletRequest req) {
		
		log.debug(" >>> client param searchMap : " + searchMap);
    	
		List<Map<String, Object>> resultList = vocService.selectVoc(searchMap);
		List<Map<String, Object>> resultListCount = vocService.selectVocCount(searchMap);
		List<Map<String, Object>> resultCodeList = commonService.selectCategoryCode();
		List<Map<String, Object>> resultVocStatList = commonService.selectComCode("J001");

		NexacroResult result = new NexacroResult();
		result.addDataSet("dsVoc", resultList);
		result.addDataSet("dsPagingInfo",resultListCount);
		result.addDataSet("dsVocCategory",resultCodeList);
		result.addDataSet("dsVocStat",resultVocStatList);

		// result.addDataSet("out_emp", resultList);

		return result;
	}
	
	/* 등록 */
	@RequestMapping(value = "insertVoc.do")
    public NexacroResult saveNotice(@ParamDataSet(name="dsVoc", required=false) Map<String, Object> saveVoc
    								, @ParamDataSet(name="dsCust", required=false) Map<String, Object> saveCust
    								, @ParamDataSet(name="dsCustUpload", required=false) List<attachVO> saveFile
    								, HttpServletRequest req) throws Exception  {

		NexacroResult result = new NexacroResult();
		
    	String no = vocService.insertVoc(saveVoc); // 게시글 저장 및 게시글 no 반환
    	
    	
    	    	
    	if(!saveFile.isEmpty()) {
    		for(int i=0; i<saveFile.size(); i++) {
        		saveFile.get(i).setBOARD_NO(no);
        	}
    		commonService.insertFile(saveFile);    		
    	}    	
    	
    
		return result;
	}
	
	/* 상세보기 */
	@RequestMapping(value = "detailVoc.do")
    public NexacroResult detailVoc(@ParamVariable(name="no") String no, HttpServletRequest req) throws Exception  {

		NexacroResult result = new NexacroResult();
		
		List<Map<String,String>> resultList = vocService.detailVoc(no);
		
		Map<String, String> searchMap = new HashMap<String, String>();
		Map<String, String> fileSearch = new HashMap<String, String>();
		searchMap.put("CUST_ID", resultList.get(0).get("CUST_ID"));
		
		List<Map<String,Object>> resultCustList = customerService.selectCust(searchMap);
		
		fileSearch.put("BOARD_NO", no);
		
		
		if("Y".equals(resultList.get(0).get("QSTN_ATTACH_YN"))) {
			fileSearch.put("FILE_GUBUN", "QSTN_VOC");
			List<Map<String,Object>> resultAttachList = commonService.selectVocFile(fileSearch);
			result.addDataSet("dsCustUpload",resultAttachList);
		}
		
		if("Y".equals(resultList.get(0).get("ANSW_ATTACH_YN"))) {
			fileSearch.put("FILE_GUBUN", "ANSW_VOC");
			List<Map<String,Object>> resultAttachList = commonService.selectVocFile(fileSearch);
			result.addDataSet("dsUserUpload",resultAttachList);
		}
		
    	result.addDataSet("dsVoc",resultList);
    	result.addDataSet("dsCust",resultCustList);
    	
		return result;
	}
	
	/* 수정 */
	@RequestMapping(value = "updateVoc.do")
    public NexacroResult updateVoc(@ParamDataSet(name="dsVoc", required=false) Map<String, Object> updateList
    								, @ParamDataSet(name="dsCustUpload", required=false) List<attachVO> updateCustFile
    								, @ParamDataSet(name="dsUserUpload", required=false) List<attachVO> updateUserFile
    								, HttpServletRequest req) throws Exception  {

		NexacroResult result = new NexacroResult();
		
		vocService.updateVoc(updateList);
		
//		if(!updateFile.isEmpty()) { // update시 업로드파일을 '전부'삭제한 경우	
//    		commonService.deleteFile(updateList);    		
//    	}
		
		// 수정 시 upload file이 기존 insert는 list로 받아왔는데 7이건 아님 그래서 문제인거같음
		String no = updateList.get("VOC_ID").toString();
		
		int type;
		
		attachVO custlist = new attachVO();
		attachVO userlist = new attachVO();
		
		if(!updateCustFile.isEmpty()) {
    		for(int i=0; i<updateCustFile.size(); i++) {    			
    			updateCustFile.get(i).setBOARD_NO(no);
    			
    			type = updateCustFile.get(i).getRowType();
    			custlist = updateCustFile.get(i);
    			if(type == DataSet.ROW_TYPE_DELETED) {
    				commonService.deleteFile1(custlist);   
    				
    			}else {
    				commonService.insertFile1(custlist);    				
    			}
        	}    		 		
    	} 
		
		if(!updateUserFile.isEmpty()) {
    		for(int i=0; i<updateUserFile.size(); i++) {    			
    			updateUserFile.get(i).setBOARD_NO(no);
    			
    			type = updateUserFile.get(i).getRowType();
    			userlist = updateUserFile.get(i);
    			if(type == DataSet.ROW_TYPE_DELETED) {
    				commonService.deleteFile1(userlist);   
    				
    			}else {
    				commonService.insertFile1(userlist);    				
    			}
        	}    		 		
    	} 
			
		 	
		return result;
	}
	
	/* 삭제 */
	@RequestMapping(value = "deleteVoc.do")
    public NexacroResult deleteVoc(@ParamDataSet(name="dsVoc", required=false) List<Map<String, Object>> deleteList
    								, @ParamDataSet(name="dsUpload", required=false) List<attachVO> deleteFile
    								, HttpServletRequest req) throws Exception  {

		NexacroResult result = new NexacroResult();
		
		vocService.deleteVoc(deleteList);
		
		if(!deleteFile.isEmpty()) {    	
    		commonService.deleteFile(deleteFile);    		
    	}  		
		 	
		return result;
	}
	
	/* 종결 */
	@RequestMapping(value = "endVoc.do")
    public NexacroResult endVoc(@ParamDataSet(name="dsVoc", required=false) Map<String, Object> updateList ) throws Exception  {

		NexacroResult result = new NexacroResult();
		
		vocService.endVoc(updateList);
		
		return result;
	}
	
	/* 담당자변경요청 */
	@RequestMapping(value = "changeChrgUser.do")
	public NexacroResult changeChrgUser(@ParamDataSet(name="dsChageDetail", required=false) Map<String, Object> detailList ) throws Exception  {
		
		NexacroResult result = new NexacroResult();
		
		int cnt = vocService.changeChrgUser(detailList);
		if( cnt != 1) {
			result.setErrorCode(-1);
			result.setErrorMsg("담당자 변경에 실패하였습니다.");
		}
		
		
		return result;
	}
	
	
	/* history 목록 */
	@RequestMapping(value = "selectHistory.do")
	public NexacroResult selectHistory(@ParamDataSet(name="dsSearch", required=false) Map<String, String> searchMap) {
		
		log.debug(" >>> client param searchMap : " + searchMap);
    	
		NexacroResult result = new NexacroResult();
		
		List<Map<String, Object>> resultList = vocService.selectHistory(searchMap);
		List<Map<String, Object>> resultVocHistoryStatList = commonService.selectComCode("K001");
		
		
		result.addDataSet("dsVocHistory",resultList);
		result.addDataSet("dsHistoryStat",resultVocHistoryStatList);
		return result;
	}
	
	/* history 상세보기 */
	@RequestMapping(value = "detailHistory.do")
    public NexacroResult detailHistory(@ParamDataSet(name="dsSearch", required=false) Map<String, String> searchMap) throws Exception  {

		NexacroResult result = new NexacroResult();
		
		List<Map<String,String>> resultList = vocService.detailHistory(searchMap);		
    	result.addDataSet("dsChageDetail",resultList);
    	
		return result;
	}
	
	
	/* history 수정 */
	@RequestMapping(value = "updateHistory.do")
    public NexacroResult updateHistory(@ParamDataSet(name="dsChageDetail", required=false) Map<String, Object> updateHistory ) throws Exception  {

		NexacroResult result = new NexacroResult();
		
		vocService.updateHistory(updateHistory);
		 	
		return result;
	}
	

}
