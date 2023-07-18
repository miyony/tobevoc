package com.tobevoc.voc.common.web;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;

public class AuthController {
	

	public String getCookie(HttpServletRequest req){
	    Cookie[] cookies=req.getCookies(); // 모든 쿠키 가져오기
	    if(cookies!=null){
	        for (Cookie c : cookies) {
	            String name = c.getName(); // 쿠키 이름 가져오기
	            String value = c.getValue(); // 쿠키 값 가져오기
	            if (name.equals("userId")) {
	                return value;
	            }
	        }
	    }
	    return null;
	}
	

}
