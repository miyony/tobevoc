package com.tobevoc.voc.mainvoc.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import com.tobevoc.voc.board.service.BoardService;
import com.tobevoc.voc.board.service.mapper.BoardMapper;
import com.tobevoc.voc.common.service.mapper.UserMapper;
import com.tobevoc.voc.login.web.LoginController;
import com.tobevoc.voc.mainvoc.service.VocService;
import com.tobevoc.voc.mainvoc.service.mapper.VocMapper;

import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

@Service("vocService")
public class VocServiceImpl extends EgovAbstractServiceImpl implements VocService {

	private Logger log = LoggerFactory.getLogger(LoginController.class);

	@Resource(name = "vocMapper")
	VocMapper vocMapper;

	@Resource(name = "userMapper")
	UserMapper userMapper;

	@Override
	public String insertVoc(Map<String, Object> saveVoc) {

		// 고객정보 있으면 insert 없으면 update

		// default
		saveVoc.put("DEL_YN", "N");
		saveVoc.put("HIT_CNT", 0);

		// 담당자 배정 로직
		String vocType = saveVoc.get("VOC_TYPE").toString();
		String date = saveVoc.get("REG_DTTM").toString();

		Map<String, String> searchMap = new HashMap<String, String>();
		searchMap.put("WORK_CODE", vocType); // workCode를 추출하여 map으로 만듬

		List<Map<String, Object>> userMap = userMapper.selectUser(searchMap); // workCode에 맞는 담당자 id추출
		String userId = userMap.get(0).get("USER_ID").toString(); // 담당자id를 string으로 형변환

		int count = userMapper.selectUserHoliday(userId); // 담당자id로 금일 휴가인지 아닌지 확인 (0:휴가아님, 1:휴가중)

		if (count == 1) { // 휴가중일때
			searchMap.remove("WORK_CODE");
			searchMap.put("MEMO", vocType);
			userMap = userMapper.selectUser(searchMap); // workCode를 삭제하고 memo에 wordCode를 넣어서 부담당자 id추출
			userId = userMap.get(0).get("USER_ID").toString();
			saveVoc.put("CHRG_USER", userId);
			saveVoc.put("VOC_STAT", "1");

		} else { // 휴가아닐때
			saveVoc.put("CHRG_USER", userId);
			saveVoc.put("VOC_STAT", "1");
		}

		vocMapper.insertVoc(saveVoc);
				
		String test = saveVoc.get("VOC_ID").toString();
		
		Map<String, Object> insertHistory = new HashMap<String, Object>(); //history생성용 map
		insertHistory.put("VOC_ID", test);
		insertHistory.put("HISTORY_STAT", "0");
		insertHistory.put("REQ_CNTN", "VOC가 등록되었습니다.");
		insertHistory.put("REG_DTTM", date);
		insertHistory.put("END_DTTM", date);
		vocMapper.insertHistory(insertHistory); // 등록 history 찍어줌
		
		insertHistory.clear(); //초기화
		insertHistory.put("VOC_ID", test);
		insertHistory.put("HISTORY_STAT", "1");
		insertHistory.put("REQ_CNTN", "VOC담당자가 배정되어 답변 대기중 입니다.");
		insertHistory.put("REG_DTTM", date);
		insertHistory.put("CHRG_USER", saveVoc.get("CHRG_USER").toString());
		vocMapper.insertHistory(insertHistory); // 담당자 배정history 찍어줌
		
		return test;
	}

	@Override
	public List<Map<String, Object>> selectVoc(Map<String, String> searchMap) {
		return vocMapper.selectVoc(searchMap);
	}

	@Override
	public List<Map<String, Object>> selectVocCount(Map<String, String> searchMap) {
		return vocMapper.selectVocCount(searchMap);
	}

	@Override
	public List<Map<String, String>> detailVoc(String no) {
		return vocMapper.detailVoc(no);
	}

	@Override
	public void updateVoc(Map<String, Object> updateVoc) {

		vocMapper.updateVoc(updateVoc);
		//String vocType = (String) updateVoc.get("VOC_TYPE");

		/*Map<String, String> searchMap = new HashMap<String, String>();
		searchMap.put("WORK_CODE", vocType); // workCode를 추출하여 map으로 만듬

		List<Map<String, Object>> userMap = userMapper.selectUser(searchMap); // workCode에 맞는 담당자 id추출
		String userId = userMap.get(0).get("USER_ID").toString(); // 담당자id를 string으로 형변환

		int count = userMapper.selectUserHoliday(userId); // 담당자id로 금일 휴가인지 아닌지 확인 (0:휴가아님, 1:휴가중)

		if (count == 1) { // 휴가중일때
			searchMap.remove("WORK_CODE");
			searchMap.put("MEMO", vocType);
			userMap = userMapper.selectUser(searchMap); // workCode를 삭제하고 memo에 wordCode를 넣어서 부담당자 id추출
			userId = userMap.get(0).get("USER_ID").toString();
			updateVoc.put("CHRG_USER", userId);
			updateVoc.put("VOC_STAT", "1");

		} else { // 휴가아닐때
			updateVoc.put("CHRG_USER", userId);
			updateVoc.put("VOC_STAT", "1");
		}*/

	}
	@Override
	public void endVoc(Map<String, Object> endVoc) {		
		vocMapper.endVoc(endVoc); // voc 종결
		
		String vocId = endVoc.get("VOC_ID").toString();
		String date = endVoc.get("END_DTTM").toString();
		String user = endVoc.get("CHRG_USER_ID").toString();
			
		Map<String, Object> insertHistory = new HashMap<String, Object>(); //종결 history 생성용 map
		Map<String, Object> updateHistory = new HashMap<String, Object>(); //답변대기중 history update용 map
		
		insertHistory.put("VOC_ID", vocId);
		insertHistory.put("HISTORY_STAT", "3");
		insertHistory.put("REQ_CNTN", "VOC가 종결되었습니다.");
		insertHistory.put("CHRG_USER", user);
		insertHistory.put("REG_DTTM", date);
		insertHistory.put("END_DTTM", date);
		vocMapper.insertHistory(insertHistory); // 완료 history 찍어줌
		
		updateHistory.put("VOC_ID", vocId);
		updateHistory.put("HISTORY_STAT", "1");
		updateHistory.put("END_DTTM", date);		
		vocMapper.updateHistory(updateHistory); // 답변대기중 history 종결 endDttm update
	}

	@Override
	public List<Map<String, Object>> deleteVoc(List<Map<String, Object>> deleteList) {

		List<Map<String, Object>> result = null;
		for (int i = 0; i < deleteList.size(); i++) {
			Map<String, Object> sample = deleteList.get(i);
			vocMapper.deleteVoc(sample);
		}

		return result;
	}

	@Override
	public int changeChrgUser(Map<String, Object> changeList) {
		int result = vocMapper.insertChangeChrgUser(changeList);
		vocMapper.changeChrgUser(changeList);

		return result;
	}

	@Override
	public List<Map<String, Object>> selectHistory(Map<String, String> searchMap) {
		return vocMapper.selectHistory(searchMap);
	}

	@Override
	public List<Map<String, String>> detailHistory(Map<String, String> searchMap) {
		return vocMapper.detailHistory(searchMap);
	}

	@Override
	public void updateHistory(Map<String, Object> updateHistory) {

		
		String vocId = updateHistory.get("VOC_ID").toString();
		String date = updateHistory.get("END_DTTM").toString();

		String apvStat = updateHistory.get("APV_STAT").toString(); //반려인지 승인인지 앞단에서 보내준 구분자

		Map<String, Object> updateVoc = new HashMap<String, Object>(); //voc수정용 map
		Map<String, Object> insertHistory = new HashMap<String, Object>(); //history생성용 map

		if (apvStat.equals("승인")) { // 승인
			
			updateVoc.put("VOC_ID", vocId);
			updateVoc.put("VOC_STAT", "1");
			updateVoc.put("CHRG_USER", updateHistory.get("REQ_CHRG_USER").toString());	//요청한 담당자로 변경	
			vocMapper.updateVoc(updateVoc); 
			
			vocMapper.updateHistory(updateHistory); // history 종결 endDttm update
			
			insertHistory.put("VOC_ID", vocId);
			insertHistory.put("HISTORY_STAT", "5");
			insertHistory.put("REQ_CNTN", "담당자 변경 요청이 승낙되었습니다.");
			insertHistory.put("CHRG_USER", updateHistory.get("REQ_CHRG_USER").toString());
			insertHistory.put("REG_DTTM", date);
			insertHistory.put("END_DTTM", date);
			vocMapper.insertHistory(insertHistory); // 반려한 history 찍어줌
			
			insertHistory.clear();
			insertHistory.put("VOC_ID", vocId);
			insertHistory.put("HISTORY_STAT", "1");
			insertHistory.put("REQ_CNTN", "VOC담당자가 배정되어 답변 대기중 입니다.");
			insertHistory.put("REG_DTTM", date);
			insertHistory.put("CHRG_USER", updateHistory.get("REQ_CHRG_USER").toString());
			vocMapper.insertHistory(insertHistory); // 담당자 배정history 찍어줌
			

		} else if (apvStat.equals("반려")) { // 반려

			updateVoc.put("VOC_ID", vocId);
			updateVoc.put("VOC_STAT", "1");
			updateVoc.put("CHRG_USER", updateHistory.get("CHRG_USER_ID").toString()); // 이전 담당자로 변경
			vocMapper.updateVoc(updateVoc);
			
			vocMapper.updateHistory(updateHistory); // history 종결 endDttm update
			
			insertHistory.put("VOC_ID", vocId);
			insertHistory.put("HISTORY_STAT", "4");
			insertHistory.put("REQ_CNTN", "담당자 변경 요청이 반려되었습니다.");
			insertHistory.put("CHRG_USER", updateHistory.get("CHRG_USER_ID").toString());
			insertHistory.put("REG_DTTM", date);
			insertHistory.put("END_DTTM", date);
			vocMapper.insertHistory(insertHistory); // 반려한 history 찍어줌
			
			insertHistory.clear();
			insertHistory.put("VOC_ID", vocId);
			insertHistory.put("HISTORY_STAT", "1");
			insertHistory.put("REQ_CNTN", "VOC담당자가 배정되어 답변 대기중 입니다.");
			insertHistory.put("REG_DTTM", date);
			insertHistory.put("CHRG_USER", updateHistory.get("CHRG_USER_ID").toString());
			vocMapper.insertHistory(insertHistory); // 담당자 배정history 찍어줌

		}

	}

	@Override
	public void inesrtHistory(Map<String, Object> inesrtHistory) {
		vocMapper.insertHistory(inesrtHistory);

	}

}
