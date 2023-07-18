package com.tobevoc.voc.schedule.service;

import java.util.List;
import java.util.Map;


public interface ScheduleService {

	List<Map<String, Object>> selectSchedule(Map<String, String> searchMap); //메뉴검색
//	List<Map<String, Object>> selectMenuAuth(Map<String, String> searchMap); //메뉴권한검색
//	List<Map<String,Object>> saveMenu(List<Map<String, Object>> saveMenu); //메뉴저장
	void insertRegularSch(Map<String, String> insertMap); //메뉴저장
	void deleteRegularSch(Map<String, String> deletemap); //메뉴삭제
//	void deleteMenuAuth(Map<String, String> deleteMap); //권한삭제
}
