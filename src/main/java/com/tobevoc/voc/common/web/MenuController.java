package com.tobevoc.voc.common.web;

import java.io.Console;
import java.util.HashMap;
import java.util.List;
import java.util.Map;


import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.uiadapter.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter.spring.core.annotation.ParamVariable;
import com.nexacro.uiadapter.spring.core.data.NexacroResult;
import com.tobevoc.voc.common.service.CommonService;
import com.tobevoc.voc.common.service.MenuService;

@Controller
public class MenuController extends AuthController {

	private Logger log = LoggerFactory.getLogger(MenuController.class);

	@Resource(name = "menuService")
	private MenuService menuService;
	
	@Resource(name = "commonService")
	private CommonService commonService;

	@RequestMapping(value = "selectMenu.do")
	public NexacroResult selectMenu(Map<String, String> searchMap, 
			@ParamVariable(name="userId") String userId, HttpServletRequest req) {

		searchMap.put("userId",userId);
		
		System.out.println(">>>>>>>>>>>>>>>>>>>>>>"+getCookie(req));
		
		List<Map<String, Object>> resultList = menuService.selectMenu(searchMap);

		NexacroResult result = new NexacroResult();
		result.addDataSet("dsMenu", resultList);

		// result.addDataSet("out_emp", resultList);

		return result;
	}
	
	
	@RequestMapping(value = "saveMenu.do")
	public NexacroResult saveMenu(@ParamDataSet(name="dsMenu", required=false) List<Map<String, Object>> saveMenu) throws Exception{

		menuService.saveMenu(saveMenu);

		NexacroResult result = new NexacroResult();

		// result.addDataSet("out_emp", resultList);

		return result;
	}
		
	
	@RequestMapping(value = "deleteMenu.do")
    public NexacroResult deleteMenu(@ParamDataSet(name="dsDelete", required=false) Map<String, String> deleteMap) throws Exception  {

		NexacroResult result = new NexacroResult();
		
		menuService.deleteMenu(deleteMap);
		
		return result;
	}
	
	@RequestMapping(value = "selectMenuAuth.do")
	public NexacroResult selectMenuAuth(Map<String, String> searchMap, @ParamVariable(name="menuId") String menuId) {
		
		searchMap.put("MENU_ID",menuId); 
		
		List<Map<String, Object>> resultList = menuService.selectMenuAuth(searchMap);
		List<Map<String, Object>> resultDept = commonService.selectDept(searchMap);

		NexacroResult result = new NexacroResult();
		result.addDataSet("dsUser", resultList);
		result.addDataSet("dsDept", resultDept);

		// result.addDataSet("out_emp", resultList);

		return result;
	}
	
	@RequestMapping(value = "insertMenuAuth.do")
	public NexacroResult insertMenuAuth(@ParamDataSet(name="dsUser", required=false) List<Map<String, String>> saveUser) throws Exception{

		Map<String, Object> authList = new HashMap<String, Object>();
		authList.put("list", saveUser);
		menuService.insertMenuAuth(authList);

		NexacroResult result = new NexacroResult();

		// result.addDataSet("out_emp", resultList);

		return result;
	}
	

	@RequestMapping(value = "deleteMenuAuth.do")
    public NexacroResult deleteMenuAuth(@ParamDataSet(name = "dsList", required = false) Map<String, String> deleteMap) throws Exception  {

		NexacroResult result = new NexacroResult();
		
		
		menuService.deleteMenuAuth(deleteMap);
		
		return result;
	}
	

}
