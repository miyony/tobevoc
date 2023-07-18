package com.tobevoc.voc.common.service.mapper;

import java.util.List;
import java.util.Map;

import com.tobevoc.voc.common.vo.attachVO;

import egovframework.rte.psl.dataaccess.mapper.Mapper;

@Mapper("commonMapper")
public interface CommonMapper {
	
	//public int deleteList(Map<String,Object> saveList);
	
	public List<Map<String,Object>> selectFile(String no);
	public List<Map<String,Object>> selectVocFile(Map<String, String> searchMap);
	
	public int insertFile(List<attachVO> saveFile);
	public int deleteFile(List<attachVO> deleteFile);
	
	public int insertFile1(attachVO saveFile);
	public int deleteFile1(attachVO deleteFile);
	
	public List<Map<String,Object>> selectPos(Map<String, String> searchMap);
	public List<Map<String,Object>> selectDept(Map<String, String> searchMap);
	public List<Map<String,Object>> selectCategoryCode();
	public List<Map<String,Object>> selectComCode(String code);
}
