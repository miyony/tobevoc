package com.tobevoc.voc.board.service.impl;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import com.tobevoc.voc.board.service.BoardService;
import com.tobevoc.voc.board.service.mapper.BoardMapper;
import com.tobevoc.voc.login.web.LoginController;

import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

@Service("boardService")
public class BoardServiceImpl extends EgovAbstractServiceImpl implements BoardService {

	private Logger log = LoggerFactory.getLogger(LoginController.class);
	
	@Resource(name = "boardMapper")
	BoardMapper boardMapper;

	@Override
	public List<Map<String, Object>> selectNotice(Map<String, String> searchMap) {
		return boardMapper.selectNotice(searchMap);
	}
	@Override
	public List<Map<String, Object>> selectBottomNotice() {
		return boardMapper.selectBottomNotice();
	}
	@Override
	public List<Map<String, Object>> selectBoardCount(Map<String, String> searchMap) {
		return boardMapper.selectBoardCount(searchMap);
	}

	@Override
	public List<Map<String, String>> detailBoard(String no) {
		return boardMapper.detailBoard(no);
	}

	@Override
	public String insertBoard(Map<String, Object> saveList) {

		String no;
		// default
		saveList.put("DEL_YN", "N");
		saveList.put("HIT_CNT", 0);

		boardMapper.insertBoard(saveList);

		no = saveList.get("NO").toString();

		return no;
	}

	@Override
	public void updateBoard(Map<String, Object> updateList) {
		boardMapper.updateBoard(updateList);
	}

	@Override
	public List<Map<String, Object>> deleteBoard(List<Map<String, Object>> deleteList) {
		
		List<Map<String,Object>> result = null;
		for (int i=0; i<deleteList.size(); i++) {
			Map<String,Object> sample = deleteList.get(i);
			boardMapper.deleteBoard(sample);
		}
		
		return result;
	}
	
}
