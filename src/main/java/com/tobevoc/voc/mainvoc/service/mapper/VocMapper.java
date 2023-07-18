package com.tobevoc.voc.mainvoc.service.mapper;

import java.util.List;
import java.util.Map;

import egovframework.rte.psl.dataaccess.mapper.Mapper;

@Mapper("vocMapper")
public interface VocMapper {
	
	//public int deleteList(Map<String,Object> saveList);
	
	public void insertVoc(Map<String,Object> saveVoc);	

	public List<Map<String,Object>> selectVoc(Map<String, String> searchMap);	
	public List<Map<String,Object>> selectVocCount(Map<String, String> searchMap);
	public List<Map<String, String>> detailVoc(String no);

	public int updateVoc(Map<String,Object> updateVoc);
	public int endVoc(Map<String,Object> endVoc);
	public int deleteVoc(Map<String,Object> deleteList);
	
	public int changeChrgUser(Map<String,Object> changeList);
	public int insertChangeChrgUser(Map<String,Object> changeList);
	
	public List<Map<String,Object>> selectHistory(Map<String, String> searchMap);
	public List<Map<String,String>> detailHistory(Map<String, String> searchMap);
	public void updateHistory(Map<String,Object> updateHistory);
	public void insertHistory(Map<String,Object> insertHistory);	
}
