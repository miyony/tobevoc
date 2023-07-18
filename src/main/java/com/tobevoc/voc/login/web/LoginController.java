package com.tobevoc.voc.login.web;

import java.security.InvalidAlgorithmParameterException;
import java.security.InvalidKeyException;
import java.security.NoSuchAlgorithmException;
import java.util.List;
import java.util.Map;

import java.util.Base64;
import java.util.Base64.Encoder;

import javax.annotation.Resource;
import javax.crypto.BadPaddingException;
import javax.crypto.Cipher;
import javax.crypto.IllegalBlockSizeException;
import javax.crypto.NoSuchPaddingException;
import javax.crypto.spec.SecretKeySpec;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.uiadapter.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter.spring.core.annotation.ParamVariable;
import com.nexacro.uiadapter.spring.core.data.NexacroResult;
import com.tobevoc.voc.login.service.LoginService;

@Controller
public class LoginController {

	private Logger log = LoggerFactory.getLogger(LoginController.class);

	@Resource(name = "loginService")
	private LoginService loginService;

	@RequestMapping(value = "loginVoc.do")
	public NexacroResult loginVoc(@ParamDataSet(name = "dsUser", required = false) Map<String, String> searchMap) {

		
		String key = searchMap.get("PASSWORD");
		//String encryptPw = encrypt(key.getBytes());

		//searchMap.put("PASSWORD", encryptPw);

		List<Map<String, Object>> resultList = loginService.loginVoc(searchMap);

		NexacroResult result = new NexacroResult();
		result.addDataSet("dsList", resultList);

		// result.addDataSet("out_emp", resultList);

		return result;
	}
	
	

}
