package com.tobevoc.voc.common.service.impl;

import java.io.File;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.ServletContext;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.context.WebApplicationContext;

import com.nexacro.java.xapi.data.DataSet;
import com.tobevoc.voc.common.service.CommonService;
import com.tobevoc.voc.common.service.MenuService;
import com.tobevoc.voc.common.service.mapper.CommonMapper;
import com.tobevoc.voc.common.service.mapper.MenuMapper;
import com.tobevoc.voc.common.vo.attachVO;
import com.tobevoc.voc.login.web.LoginController;

import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

@Service("commonService")
public class CommonServiceImpl extends EgovAbstractServiceImpl implements CommonService {

	private Logger log = LoggerFactory.getLogger(LoginController.class);

	@Autowired
	private WebApplicationContext appContext;

	private static final String SP = File.separator; // \<-임
	private static final String PATH = "upload";
	private static final String sUserPath = "edupack";

	@Resource(name = "commonMapper")
	CommonMapper commonMapper;

	@Override
	public void insertFile(List<attachVO> saveFile) {
		commonMapper.insertFile(saveFile);			
	}
	@Override
	public void insertFile1(attachVO saveFile) {
		commonMapper.insertFile1(saveFile);			
	}

	@Override
	public List<Map<String, Object>> selectFile(String no) {
		return commonMapper.selectFile(no);
	}
	
	@Override
	public List<Map<String, Object>> selectVocFile(Map<String, String> searchMap) {
		return commonMapper.selectVocFile(searchMap);
	}
	
	@Override
    public List<Map<String,Object>> selectPos(Map<String, String> searchMap) {
        return commonMapper.selectPos(searchMap);
    }
	
	@Override
    public List<Map<String,Object>> selectDept(Map<String, String> searchMap) {
        return commonMapper.selectDept(searchMap);
    }
	
	@Override
	public List<Map<String, Object>> selectComCode(String code) {				
		return commonMapper.selectComCode(code);
	}

	public void deleteFile(List<attachVO> deleteFile) {
		commonMapper.deleteFile(deleteFile);
		 //file 삭제
		String deletefilename = null;
		for (int i = 0; i < deleteFile.size(); i++) {
			deletefilename = deleteFile.get(i).getFILE_NAME();
			deleteUploadFile(deletefilename);			
		}
	}
	
	public void deleteFile1(attachVO deleteFile) {
		commonMapper.deleteFile1(deleteFile);
		//file 삭제
		String deletefilename = deleteFile.getFILE_NAME();
		deleteUploadFile(deletefilename);			
		
	}
		
	public void deleteUploadFile(String deletefilename) {

		String filePath = getUploadFilePath();
		String realFile = filePath + SP + deletefilename;

		File file = new File(realFile);

		if (file.exists()) { // 파일있는지 확인
			file.delete();
		}

	}

	private String getUploadFilePath() { // uploadFile 경로
		ServletContext sc = appContext.getServletContext();
		String realPath = sc.getRealPath("/");
		String uploadPath = realPath + PATH + SP + sUserPath;

		log.debug(">>>>>>>>>>>>> realPath >>>>>>>>>" + realPath);
		log.debug(">>>>>>>>>>>>> uploadPath >>>>>>>>>" + uploadPath);

		return uploadPath;
	}
	
	
	@Override
    public List<Map<String,Object>> selectCategoryCode() {
        return commonMapper.selectCategoryCode();
    }

}
