package com.tobevoc.voc.common.service.impl;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import com.nexacro.java.xapi.data.DataSet;
import com.tobevoc.voc.common.service.CustomerService;
import com.tobevoc.voc.common.service.UserService;
import com.tobevoc.voc.common.service.mapper.CustomerMapper;
import com.tobevoc.voc.common.service.mapper.UserMapper;
import com.tobevoc.voc.login.web.LoginController;

import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

@Service("customerService")
public class CustomerServiceImpl extends EgovAbstractServiceImpl implements CustomerService {

	private Logger log = LoggerFactory.getLogger(LoginController.class);

	@Resource(name = "customerMapper")
	CustomerMapper customerMapper;

	@Override
	public List<Map<String, Object>> selectCust(Map<String, String> searchMap) {
		return customerMapper.selectCust(searchMap);
	}

	

}
