package com.tobevoc.voc.common.service;

import java.util.List;
import java.util.Map;

import com.tobevoc.voc.common.vo.attachVO;


public interface CommonService {

	void insertFile(List<attachVO> saveFile);
	void deleteFile(List<attachVO> deleteFile);
	
	void insertFile1(attachVO saveFile);
	void deleteFile1(attachVO deleteFile);
	
	List<Map<String, Object>> selectFile(String no);
	List<Map<String, Object>> selectVocFile(Map<String, String> searchMap);
	
	List<Map<String, Object>> selectPos(Map<String, String> searchMap);
	List<Map<String, Object>> selectDept(Map<String, String> searchMap);
	
	
	List<Map<String, Object>> selectComCode(String code);
	
	List<Map<String, Object>> selectCategoryCode();
	
}
