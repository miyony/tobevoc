package com.tobevoc.voc.common.service;

import java.util.List;
import java.util.Map;


public interface MenuService {

	List<Map<String, Object>> selectMenu(Map<String, String> searchMap); //메뉴검색
	List<Map<String, Object>> selectMenuAuth(Map<String, String> searchMap); //메뉴권한검색
	List<Map<String,Object>> saveMenu(List<Map<String, Object>> saveMenu); //메뉴저장
	void insertMenuAuth(Map<String, Object> authList); //메뉴저장
	void deleteMenu(Map<String, String> deleteMap); //메뉴삭제
	void deleteMenuAuth(Map<String, String> deleteMap); //권한삭제
}
