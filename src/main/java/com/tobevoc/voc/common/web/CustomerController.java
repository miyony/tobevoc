package com.tobevoc.voc.common.web;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.uiadapter.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter.spring.core.data.NexacroResult;
import com.tobevoc.voc.common.service.CustomerService;

@Controller
public class CustomerController {

	private Logger log = LoggerFactory.getLogger(MenuController.class);

	@Resource(name = "customerService")
	private CustomerService customerService;

	@RequestMapping(value = "selectCust.do")
	public NexacroResult selectCust(@ParamDataSet(name = "dsSearch", required = false) Map<String, String> searchMap) {

		List<Map<String, Object>> resultList = customerService.selectCust(searchMap);

		NexacroResult result = new NexacroResult();
		result.addDataSet("dsCust", resultList);

		// result.addDataSet("out_emp", resultList);

		return result;
	}

	

}
