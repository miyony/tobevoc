package com.tobevoc.voc.common.service.mapper;

import java.util.List;
import java.util.Map;

import egovframework.rte.psl.dataaccess.mapper.Mapper;

@Mapper("userMapper")
public interface UserMapper {
	
	//public int deleteList(Map<String,Object> saveList);
	
	public List<Map<String,Object>> selectUser(Map<String, String> searchMap);
	public int insertUser(Map<String,Object> saveList);
	public int updateUser(Map<String,Object> saveList);
	public void deleteUser(String deleteUserNo);
	
	
	public List<Map<String,Object>> selectHoliday(String userName);
	public int validationHoliday(Map<String, Object> validationList);
	public int saveHoliday(Map<String,Object> saveList);
	public void deleteHoliday(Map<String, Object> deleteList);
	public int selectUserHoliday(String userId);
	
}
