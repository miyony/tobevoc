package com.tobevoc.voc.common.web;

import java.util.List;
import java.util.Map;


import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.uiadapter.spring.core.data.NexacroResult;
import com.tobevoc.voc.common.service.StatService;

@Controller
public class StatController extends AuthController {

	private Logger log = LoggerFactory.getLogger(StatController.class);

	@Resource(name = "statService")
	private StatService statService;
	

	@RequestMapping(value = "selectStat01.do")
	public NexacroResult selectStat01() {	
		
		List<Map<String, Object>> resultList = statService.selectStat01();

		NexacroResult result = new NexacroResult();
		result.addDataSet("dsStat01", resultList);

		// result.addDataSet("out_emp", resultList);

		return result;
	}
	
	@RequestMapping(value = "selectStat02.do")
	public NexacroResult selectStat02() {	
		
		List<Map<String, Object>> resultList = statService.selectStat02();
		
		NexacroResult result = new NexacroResult();
		result.addDataSet("dsStat02", resultList);
		
		// result.addDataSet("out_emp", resultList);
		
		return result;
	}
	
	@RequestMapping(value = "selectStat03.do")
	public NexacroResult selectStat03() {	
		
		List<Map<String, Object>> resultList = statService.selectStat03();
		
		NexacroResult result = new NexacroResult();
		result.addDataSet("dsStat03", resultList);
		
		// result.addDataSet("out_emp", resultList);
		
		return result;
	}
	
	@RequestMapping(value = "selectStat04.do")
	public NexacroResult selectStat04() {	
		
		List<Map<String, Object>> resultList = statService.selectStat04();
		
		NexacroResult result = new NexacroResult();
		result.addDataSet("dsStat04", resultList);
		
		// result.addDataSet("out_emp", resultList);
		
		return result;
	}
	
	
}
