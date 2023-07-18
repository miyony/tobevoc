package com.tobevoc.voc.common.service.impl;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import com.tobevoc.voc.common.service.MenuService;
import com.tobevoc.voc.common.service.StatService;
import com.tobevoc.voc.common.service.mapper.MenuMapper;
import com.tobevoc.voc.common.service.mapper.StatMapper;
import com.tobevoc.voc.login.web.LoginController;

import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

@Service("statService")
public class StatServiceImpl extends EgovAbstractServiceImpl implements StatService {

	private Logger log = LoggerFactory.getLogger(LoginController.class);
	
	@Resource(name = "statMapper")
	StatMapper statMapper;
	
	@Override
    public List<Map<String,Object>> selectStat01() {
        return statMapper.selectStat01();
    }
	@Override
	public List<Map<String,Object>> selectStat02() {
		return statMapper.selectStat02();
	}
	@Override
	public List<Map<String,Object>> selectStat03() {
		return statMapper.selectStat03();
	}
	@Override
	public List<Map<String,Object>> selectStat04() {
		return statMapper.selectStat04();
	}
	

}
