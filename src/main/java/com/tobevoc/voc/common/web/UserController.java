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
public class UserController {

	private Logger log = LoggerFactory.getLogger(MenuController.class);

	@Resource(name = "userService")
	private UserService userService;

	@Resource(name = "commonService")
	private CommonService commonService;

	@RequestMapping(value = "selectUser.do")
	public NexacroResult selectUser(@ParamDataSet(name = "dsSearch", required = false) Map<String, String> searchMap) {

		List<Map<String, Object>> resultList = userService.selectUser(searchMap);

		List<Map<String, Object>> resultPos = commonService.selectPos(searchMap);
		List<Map<String, Object>> resultDept = commonService.selectDept(searchMap);

		NexacroResult result = new NexacroResult();
		result.addDataSet("dsUser", resultList);
		result.addDataSet("dsPos", resultPos);
		result.addDataSet("dsDept", resultDept);

		// result.addDataSet("out_emp", resultList);

		return result;
	}

	@RequestMapping(value = "saveUser.do")
	public NexacroResult saveUser(@ParamDataSet(name = "dsUser", required = false) List<Map<String, Object>> saveList) {

		NexacroResult result = new NexacroResult();
		userService.saveUser(saveList);
		return result;
	}

	@RequestMapping(value = "deleteUser.do")
	public NexacroResult deleteUser(@ParamVariable(name = "deleteUserNo") String deleteUserNo) {

		NexacroResult result = new NexacroResult();
		userService.deleteUser(deleteUserNo);
		return result;
	}
	
	
	
	
	@RequestMapping(value = "selectHoliday.do")
	public NexacroResult selectHoliday(@ParamVariable(name="userName") String userName) throws Exception {
		
		List<Map<String, Object>> resultList = userService.selectHoliday(userName);
		
		NexacroResult result = new NexacroResult();
		result.addDataSet("dsHoliday", resultList);
		
		// result.addDataSet("out_emp", resultList);
		
		return result;
	}
	
	@RequestMapping(value = "saveHoliday.do")
	public NexacroResult saveHoliday(@ParamDataSet(name = "dsHolidaySave", required = false) Map<String, Object> saveList) throws Exception {
		
		NexacroResult result = new NexacroResult();
		userService.saveHoliday(saveList);
		return result;
	}
	
	@RequestMapping(value = "validationHoliday.do")
	public NexacroResult validationHoliday(@ParamDataSet(name = "dsHolidaySave", required = false) Map<String, Object> validationList) throws Exception {
		
		NexacroResult result = new NexacroResult();
		int cnt = userService.validationHoliday(validationList);
		
		if(cnt > 0) {
			result.setErrorCode(-1);
			result.setErrorMsg("중복된 일정은 휴일로 지정할 수 없습니다.\n해당 일정을 삭제 하시겠습니까?");
		}else {
			result.setErrorCode(0);			
		}
		
		return result;
	}
	
	@RequestMapping(value = "deleteHoliday.do")
	public NexacroResult deleteHoliday(@ParamDataSet(name = "dsHolidaySave", required = false) Map<String, Object> deleteList) throws Exception {
		
		NexacroResult result = new NexacroResult();
		userService.deleteHoliday(deleteList);
		return result;
	}

}
