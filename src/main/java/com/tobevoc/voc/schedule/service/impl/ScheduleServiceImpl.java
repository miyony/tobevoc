package com.tobevoc.voc.schedule.service.impl;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import com.nexacro.java.xapi.data.DataSet;
import com.tobevoc.voc.common.service.mapper.MenuMapper;
import com.tobevoc.voc.login.web.LoginController;
import com.tobevoc.voc.schedule.service.ScheduleService;
import com.tobevoc.voc.schedule.service.mapper.ScheduleMapper;

import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

@Service("scheduleService")
public class ScheduleServiceImpl extends EgovAbstractServiceImpl implements ScheduleService {

	private Logger log = LoggerFactory.getLogger(LoginController.class);

	@Resource(name = "scheduleMapper")
	ScheduleMapper scheduleMapper;

	public List<Map<String, Object>> selectSchedule(Map<String, String> searchMap) {
		return scheduleMapper.selectSchedule(searchMap);
	}
//
//	@Override
//	public List<Map<String, Object>> selectMenuAuth(Map<String, String> searchMap) {
//		return menuMapper.selectMenuAuth(searchMap);
//	}
//
//	@Override
//	public List<Map<String, Object>> saveMenu(List<Map<String, Object>> searchMap) {
//		int size = searchMap.size();
//		List<Map<String, Object>> result = null;
//
//		for (int i = 0; i < size; i++) {
//			Map<String,Object> sample = searchMap.get(i);//DataSetRowType
//			
//			if ((int)sample.get("DataSetRowType") == DataSet.ROW_TYPE_INSERTED) {
//				menuMapper.saveMenu(sample);
//
//			} else if ((int)sample.get("DataSetRowType") == DataSet.ROW_TYPE_UPDATED) {
//				menuMapper.updateMenu(sample);
//
//			}
//		}
//
//		return result;
//	}
//
	@Override
	public void insertRegularSch(Map<String, String> insertMap) {
		scheduleMapper.insertRegularSch(insertMap);
	}

	@Override
	public void deleteRegularSch(Map<String, String> deletemap) {
		scheduleMapper.deleteRegularSch(deletemap);
		// 정기업무 시 쿼츠테이블 데이터도 삭제
//		menuMapper.deleteMenuAuth(deleteMap); 
	}
//
//	@Override
//	public void deleteMenuAuth(Map<String, String> deleteMap) {
//		menuMapper.deleteMenuAuth(deleteMap);
//	}

	

}
