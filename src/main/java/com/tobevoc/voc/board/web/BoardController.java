package com.tobevoc.voc.board.web;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

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
import com.tobevoc.voc.common.vo.attachVO;

@Controller
public class BoardController {

	private Logger log = LoggerFactory.getLogger(BoardController.class);

	@Resource(name = "boardService")
	private BoardService boardService;

	@Resource(name = "commonService")
	private CommonService commonService;

	/* 목록 */
	@RequestMapping(value = "selectNotice.do")
	public NexacroResult selectNotice(@ParamDataSet(name="dsSearch", required=false) Map<String, String> searchMap) {
		
		log.debug(" >>> client param searchMap : " + searchMap);
    	
		List<Map<String, Object>> resultList = boardService.selectNotice(searchMap);
		List<Map<String, Object>> resultListCount = boardService.selectBoardCount(searchMap);

		NexacroResult result = new NexacroResult();
		result.addDataSet("dsNotice", resultList);
		result.addDataSet("dsPagingInfo",resultListCount);

		// result.addDataSet("out_emp", resultList);

		return result;
	}
	/* 목록 */
	@RequestMapping(value = "selectBottomNotice.do")
	public NexacroResult selectBottomNotice() {
		
		List<Map<String, Object>> resultList = boardService.selectBottomNotice();
		
		NexacroResult result = new NexacroResult();
		result.addDataSet("dsNotice", resultList);
		
		// result.addDataSet("out_emp", resultList);
		
		return result;
	}
	
	
	
	
	/* 등록 */
	@RequestMapping(value = "insertBoard.do")
    public NexacroResult saveNotice(@ParamDataSet(name="dsBoard", required=false) Map<String, Object> saveList
    								, @ParamDataSet(name="dsUpload", required=false) List<attachVO> saveFile ) throws Exception  {

		NexacroResult result = new NexacroResult();
		
    	String no = boardService.insertBoard(saveList); // 게시글 저장 및 게시글 no 반환
    	
    	if(!saveFile.isEmpty()) {
    		for(int i=0; i<saveFile.size(); i++) {
        		saveFile.get(i).setBOARD_NO(no);
        	}
    		commonService.insertFile(saveFile);    		
    	}    	
    
		return result;
	}
	
	/* 상세보기 */
	@RequestMapping(value = "detailBoard.do")
    public NexacroResult detailBoard(@ParamVariable(name="no") String no) throws Exception  {

		NexacroResult result = new NexacroResult();
		
		List<Map<String,String>> resultList = boardService.detailBoard(no);
		
		if("Y".equals(resultList.get(0).get("ATTACH_YN"))) {
			List<Map<String,Object>> resultAttachList = commonService.selectFile(no);
			result.addDataSet("dsUpload",resultAttachList);
		}
		
    	result.addDataSet("dsBoard",resultList);
    	
		return result;
	}
	
	/* 수정 */
	@RequestMapping(value = "updateBoard.do")
    public NexacroResult updateBoard(@ParamDataSet(name="dsBoard", required=false) Map<String, Object> updateList
    								, @ParamDataSet(name="dsUpload", required=false) List<attachVO> updateFile ) throws Exception  {

		NexacroResult result = new NexacroResult();
		
		boardService.updateBoard(updateList);
		
//		if(!updateFile.isEmpty()) { // update시 업로드파일을 '전부'삭제한 경우	
//    		commonService.deleteFile(updateList);    		
//    	}
		
		// 수정 시 upload file이 기존 insert는 list로 받아왔는데 이건 아님 그래서 문제인거같음
		String no = updateList.get("NO").toString();
		int type;
		
		attachVO list = new attachVO();
		
		if(!updateFile.isEmpty()) {
    		for(int i=0; i<updateFile.size(); i++) {    			
    			updateFile.get(i).setBOARD_NO(no);
    			
    			type = updateFile.get(i).getRowType();
    			list = updateFile.get(i);
    			if(type == DataSet.ROW_TYPE_DELETED) {
    				commonService.deleteFile1(list);   
    				
    			}else {
    				commonService.insertFile1(list);    				
    			}
        	}    		 		
    	} 
		 	
		return result;
	}
	
	/* 삭제 */
	@RequestMapping(value = "deleteBoard.do")
    public NexacroResult deleteBoard(@ParamDataSet(name="dsBoard", required=false) List<Map<String, Object>> deleteList
    								, @ParamDataSet(name="dsUpload", required=false) List<attachVO> deleteFile ) throws Exception  {

		NexacroResult result = new NexacroResult();
		
		boardService.deleteBoard(deleteList);
		
		if(!deleteFile.isEmpty()) {    	
    		commonService.deleteFile(deleteFile);    		
    	}  		
		 	
		return result;
	}

}
