package com.tobevoc.voc.common.service;

import java.util.List;
import java.util.Map;


public interface UserService {

	List<Map<String, Object>> selectUser(Map<String, String> searchMap); //유저검색
	List<Map<String,Object>> saveUser(List<Map<String,Object>> saveList); //유저저장
	void deleteUser(String deleteUserNo); //유저삭제
	
	List<Map<String, Object>> selectHoliday(String userName); //휴일검색
	int validationHoliday(Map<String, Object> validationList); //휴일유효성검사
	int saveHoliday(Map<String,Object> saveList); //휴일저장
	void deleteHoliday(Map<String, Object> deleteList); //휴일삭제
	int selectUserHoliday(String userId); // 개인휴일검색 (count)
}
