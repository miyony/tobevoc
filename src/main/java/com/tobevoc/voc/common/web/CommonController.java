package com.tobevoc.voc.common.web;

import java.util.List;
import java.util.Map;


import javax.annotation.Resource;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.uiadapter.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter.spring.core.data.NexacroResult;
import com.tobevoc.voc.common.service.CommonService;

@Controller
public class CommonController {

	private Logger log = LoggerFactory.getLogger(CommonController.class);

	@Resource(name = "commonService")
	private CommonService commonService;

	@RequestMapping(value = "selectCategoryCode.do")
	public NexacroResult selectCategoryCode(@ParamDataSet(name="dsSearchCode", required=false) Map<String, String> searchCode) {
		List<Map<String, Object>> resultList = commonService.selectCategoryCode();
		
		String code1 = searchCode.get("phone");
		String code2 = searchCode.get("email");
		String code3 = searchCode.get("reply");
		
		List<Map<String, Object>> dsPhone = commonService.selectComCode(code1);
		List<Map<String, Object>> dsEmail = commonService.selectComCode(code2);
		List<Map<String, Object>> dsReplyType = commonService.selectComCode(code3);

		NexacroResult result = new NexacroResult();
		result.addDataSet("dsVocCategory", resultList);
		
		result.addDataSet("dsPhone", dsPhone);
		result.addDataSet("dsEmail", dsEmail);
		result.addDataSet("dsReplyType", dsReplyType);

		// result.addDataSet("out_emp", resultList);

		return result;
	}
	

}
