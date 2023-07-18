package com.tobevoc.voc.schedule.service.mapper;

import java.util.List;
import java.util.Map;

import egovframework.rte.psl.dataaccess.mapper.Mapper;

@Mapper("scheduleMapper")
public interface ScheduleMapper {
	
	//public int deleteList(Map<String,Object> saveList);
	
	public List<Map<String,Object>> selectSchedule(Map<String, String> searchMap);
//	public List<Map<String,Object>> selectMenuAuth(Map<String, String> searchMap);
//	void saveMenu(Map<String, Object> searchMap);
//	void updateMenu(Map<String, Object> searchMap);
	void insertRegularSch(Map<String, String> insertMap);
	void deleteRegularSch(Map<String, String> deletemap);
//	void deleteMenuAuth(Map<String, String> deleteMap);
}
