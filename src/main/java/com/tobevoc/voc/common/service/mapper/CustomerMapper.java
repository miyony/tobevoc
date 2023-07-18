package com.tobevoc.voc.common.service.mapper;

import java.util.List;
import java.util.Map;

import egovframework.rte.psl.dataaccess.mapper.Mapper;

@Mapper("customerMapper")
public interface CustomerMapper {
	
	//public int deleteList(Map<String,Object> saveList);
	
	public List<Map<String,Object>> selectCust(Map<String, String> searchMap);
}
