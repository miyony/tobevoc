package com.tobevoc.voc.login.service.mapper;

import java.util.List;
import java.util.Map;

import egovframework.rte.psl.dataaccess.mapper.Mapper;

@Mapper("loginMapper")
public interface LoginMapper {
	
	//public int deleteList(Map<String,Object> saveList);
	
	public List<Map<String,Object>> loginVoc(Map<String, String> searchMap);
}
