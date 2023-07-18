package com.tobevoc.voc.common.web;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.uiadapter.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter.spring.core.annotation.ParamVariable;
import com.nexacro.uiadapter.spring.core.data.NexacroResult;
import com.tobevoc.voc.common.service.CommonService;
import com.tobevoc.voc.common.service.UserService;

@Controller
public class DeptController {

	private Logger log = LoggerFactory.getLogger(MenuController.class);

	@Resource(name = "userService")
	private UserService userService;

	@Resource(name = "commonService")
	private CommonService commonService;

	@RequestMapping(value = "selectDept.do")
	public NexacroResult selectUser(@ParamDataSet(name = "dsSearch", required = false) Map<String, String> searchMap) {

		List<Map<String, Object>> resultDept = commonService.selectDept(searchMap);

		NexacroResult result = new NexacroResult();
		result.addDataSet("dsDept", resultDept);

		// result.addDataSet("out_emp", resultList);

		return result;
	}

//	@RequestMapping(value = "saveUser.do")
//	public NexacroResult saveUser(@ParamDataSet(name = "dsUser", required = false) List<Map<String, Object>> saveList) {
//
//		NexacroResult result = new NexacroResult();
//		userService.saveUser(saveList);
//		return result;
//	}
//
//	@RequestMapping(value = "deleteUser.do")
//	public NexacroResult deleteUser(@ParamVariable(name = "deleteUserNo") String deleteUserNo) {
//
//		NexacroResult result = new NexacroResult();
//		userService.deleteUser(deleteUserNo);
//		return result;
//	}
	
	
}
