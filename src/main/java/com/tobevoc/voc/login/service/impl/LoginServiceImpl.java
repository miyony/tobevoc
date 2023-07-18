package com.tobevoc.voc.login.service.impl;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import com.tobevoc.voc.login.service.LoginService;
import com.tobevoc.voc.login.service.mapper.LoginMapper;
import com.tobevoc.voc.login.web.LoginController;

import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

@Service("loginService")
public class LoginServiceImpl extends EgovAbstractServiceImpl implements LoginService {

	private Logger log = LoggerFactory.getLogger(LoginController.class);
	
	@Resource(name = "loginMapper")
	LoginMapper loginMapper;
	
	@Override
    public List<Map<String,Object>> loginVoc(Map<String, String> searchMap) {
        return loginMapper.loginVoc(searchMap);
    }

}
