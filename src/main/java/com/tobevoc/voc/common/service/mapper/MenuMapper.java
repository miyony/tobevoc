package com.tobevoc.voc.common.service.mapper;

import java.util.List;
import java.util.Map;

import egovframework.rte.psl.dataaccess.mapper.Mapper;

@Mapper("menuMapper")
public interface MenuMapper {
	
	//public int deleteList(Map<String,Object> saveList);
	
	public List<Map<String,Object>> selectMenu(Map<String, String> searchMap);
	public List<Map<String,Object>> selectMenuAuth(Map<String, String> searchMap);
	void saveMenu(Map<String, Object> searchMap);
	void updateMenu(Map<String, Object> searchMap);
	void insertMenuAuth(Map<String, Object> authList);
	void deleteMenu(Map<String, String> deleteMap);
	void deleteMenuAuth(Map<String, String> deleteMap);
}
