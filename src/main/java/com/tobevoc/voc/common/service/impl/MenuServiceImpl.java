package com.tobevoc.voc.common.service.impl;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import com.nexacro.java.xapi.data.DataSet;
import com.tobevoc.voc.common.service.MenuService;
import com.tobevoc.voc.common.service.mapper.MenuMapper;
import com.tobevoc.voc.login.web.LoginController;

import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

@Service("menuService")
public class MenuServiceImpl extends EgovAbstractServiceImpl implements MenuService {

	private Logger log = LoggerFactory.getLogger(LoginController.class);

	@Resource(name = "menuMapper")
	MenuMapper menuMapper;

	@Override
	public List<Map<String, Object>> selectMenu(Map<String, String> searchMap) {
		return menuMapper.selectMenu(searchMap);
	}

	@Override
	public List<Map<String, Object>> selectMenuAuth(Map<String, String> searchMap) {
		return menuMapper.selectMenuAuth(searchMap);
	}

	@Override
	public List<Map<String, Object>> saveMenu(List<Map<String, Object>> searchMap) {
		int size = searchMap.size();
		List<Map<String, Object>> result = null;

		for (int i = 0; i < size; i++) {
			Map<String,Object> sample = searchMap.get(i);//DataSetRowType
			
			if ((int)sample.get("DataSetRowType") == DataSet.ROW_TYPE_INSERTED) {
				menuMapper.saveMenu(sample);

			} else if ((int)sample.get("DataSetRowType") == DataSet.ROW_TYPE_UPDATED) {
				menuMapper.updateMenu(sample);

			}
		}

		return result;
	}

	@Override
	public void insertMenuAuth(Map<String, Object> authList) {
		menuMapper.insertMenuAuth(authList);
	}

	@Override
	public void deleteMenu(Map<String, String> deleteMap) {
		menuMapper.deleteMenu(deleteMap);
		// 메뉴삭제 시 권한table의 해당 메뉴의 권한도 삭제
		menuMapper.deleteMenuAuth(deleteMap); 
	}

	@Override
	public void deleteMenuAuth(Map<String, String> deleteMap) {
		menuMapper.deleteMenuAuth(deleteMap);
	}

}
