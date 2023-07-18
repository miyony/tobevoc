package com.tobevoc.voc.board.service;

import java.util.List;
import java.util.Map;


public interface BoardService {

	List<Map<String, Object>> selectNotice(Map<String, String> searchMap); //게시판검색
	List<Map<String, Object>> selectBottomNotice(); //하단 공지검색
	List<Map<String,Object>> selectBoardCount(Map<String,String> searchMap); //게시판 총count
	List<Map<String, String>> detailBoard(String no); //게시판상세보기
	String insertBoard(Map<String,Object> saveList); // 게시판등록
	void updateBoard(Map<String,Object> updateList); // 게시판수정
	List<Map<String,Object>> deleteBoard(List<Map<String,Object>> deleteList); // 게시판삭제
	
}
