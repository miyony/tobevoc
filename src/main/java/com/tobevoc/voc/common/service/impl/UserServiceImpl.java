package com.tobevoc.voc.common.service.impl;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import com.nexacro.java.xapi.data.DataSet;
import com.tobevoc.voc.common.service.UserService;
import com.tobevoc.voc.common.service.mapper.UserMapper;
import com.tobevoc.voc.login.web.LoginController;

import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

@Service("userService")
public class UserServiceImpl extends EgovAbstractServiceImpl implements UserService {

	private Logger log = LoggerFactory.getLogger(LoginController.class);

	@Resource(name = "userMapper")
	UserMapper userMapper;

	@Override
	public List<Map<String, Object>> selectUser(Map<String, String> searchMap) {
		return userMapper.selectUser(searchMap);
	}

	@Override
	public List<Map<String, Object>> saveUser(List<Map<String, Object>> saveList) {
		int size = saveList.size();
		List<Map<String, Object>> result = null;

		for (int i = 0; i < size; i++) {
			Map<String, Object> sample = saveList.get(i);// DataSetRowType
			sample.put("RETIRE_YN", "N");

			if ((int) sample.get("DataSetRowType") == DataSet.ROW_TYPE_INSERTED) {
				userMapper.insertUser(sample);
			} else if ((int) sample.get("DataSetRowType") == DataSet.ROW_TYPE_UPDATED) {
				userMapper.updateUser(sample);
			}
		}
		return result;
	}
	
	@Override
	public void deleteUser(String deleteUserNo) {
		userMapper.deleteUser(deleteUserNo);

	}

	@Override
	public List<Map<String, Object>> selectHoliday(String userName) {
		return userMapper.selectHoliday(userName);
	}
	
	@Override
	public int selectUserHoliday(String userId) {
		return userMapper.selectUserHoliday(userId);
	}
	
	
	@Override
	public int validationHoliday(Map<String, Object> validationList) {
		return userMapper.validationHoliday(validationList);
	}

	@Override
	public int saveHoliday(Map<String, Object> saveList) {
		return userMapper.saveHoliday(saveList);
	}

	public void deleteHoliday(Map<String, Object> deleteList) {
		userMapper.deleteHoliday(deleteList);
	}

}
