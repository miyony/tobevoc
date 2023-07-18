package com.tobevoc.voc.mainvoc.service;

import java.util.List;
import java.util.Map;


public interface VocService {

	String insertVoc(Map<String,Object> saveVoc); // voc등록
	
	List<Map<String, Object>> selectVoc(Map<String, String> searchMap); //voc검색
	List<Map<String,Object>> selectVocCount(Map<String,String> searchMap); //voc 총count
	List<Map<String, String>> detailVoc(String no); //게시판상세보기
	void updateVoc(Map<String,Object> updateVoc); // 게시판수정
	void endVoc(Map<String,Object> endVoc); // voc 종결
	List<Map<String,Object>> deleteVoc(List<Map<String,Object>> deleteList); // 게시판삭제
	int changeChrgUser(Map<String,Object> changeList); // 담당자변경요청
	
	List<Map<String, Object>> selectHistory(Map<String, String> searchMap); //voc history 검색
	List<Map<String, String>> detailHistory(Map<String, String> searchMap); //voc history 상세보기
	void updateHistory(Map<String,Object> updateHistory); //voc history 수정
	void inesrtHistory(Map<String,Object> inesrtHistory); //voc history 등록
	
}
