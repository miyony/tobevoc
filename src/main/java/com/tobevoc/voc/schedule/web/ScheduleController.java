package com.tobevoc.voc.schedule.web;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.mariadb.jdbc.internal.util.scheduler.SchedulerServiceProviderHolder;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.uiadapter.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter.spring.core.annotation.ParamVariable;
import com.nexacro.uiadapter.spring.core.data.NexacroResult;
import com.tobevoc.voc.common.service.CommonService;
import com.tobevoc.voc.common.service.UserService;
import com.tobevoc.voc.common.web.MenuController;
import com.tobevoc.voc.schedule.service.ScheduleService;

@Controller
public class ScheduleController {

	private Logger log = LoggerFactory.getLogger(MenuController.class);

	@Resource(name = "scheduleService")
	private ScheduleService scheduleService;

	@RequestMapping(value = "selectRegularSch.do")
	public NexacroResult selectRegularSch(@ParamVariable(name="complate") String complate ) {

		Map<String, String> searchMap = new HashMap<String, String>();
		searchMap.put("COMPLATE", complate);
		List<Map<String, Object>> resultDept = scheduleService.selectSchedule(searchMap);

		NexacroResult result = new NexacroResult();
		result.addDataSet("ds_sch_date", resultDept);

		return result;
	}

	@RequestMapping(value = "insertRegularSch.do")
	public NexacroResult insertRegularSch(@ParamDataSet(name = "ds_sch_date", required = false) Map<String, String> insertMap) {

		NexacroResult result = new NexacroResult();
		scheduleService.insertRegularSch(insertMap);
		return result;
	}

	@RequestMapping(value = "deleteRegularSch.do")
	public NexacroResult deleteRegularSch(@ParamDataSet(name = "ds_sch_del", required = false) Map<String, String> deletemap) {

		NexacroResult result = new NexacroResult();
		scheduleService.deleteRegularSch(deletemap);
		return result;
	}
	
	
}
