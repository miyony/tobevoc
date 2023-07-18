package com.tobevoc.voc.common.service.mapper;

import java.util.List;
import java.util.Map;

import egovframework.rte.psl.dataaccess.mapper.Mapper;

@Mapper("statMapper")
public interface StatMapper {
	
	public List<Map<String,Object>> selectStat01();
	public List<Map<String,Object>> selectStat02();
	public List<Map<String,Object>> selectStat03();
	public List<Map<String,Object>> selectStat04();
	
}
