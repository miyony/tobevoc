package com.tobevoc.voc.board.service.mapper;

import java.util.List;
import java.util.Map;

import egovframework.rte.psl.dataaccess.mapper.Mapper;

@Mapper("boardMapper")
public interface BoardMapper {
	
	//public int deleteList(Map<String,Object> saveList);
	
	public List<Map<String,Object>> selectNotice(Map<String, String> searchMap);
	public List<Map<String,Object>> selectBottomNotice();
	public List<Map<String,Object>> selectBoardCount(Map<String, String> searchMap);
	public List<Map<String, String>> detailBoard(String no);
	
	public int insertBoard(Map<String,Object> saveList);	
	public int updateBoard(Map<String,Object> saveList);
	public int deleteBoard(Map<String,Object> saveList);
}
