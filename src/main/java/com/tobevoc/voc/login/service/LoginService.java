package com.tobevoc.voc.login.service;

import java.util.List;
import java.util.Map;


public interface LoginService {

	List<Map<String, Object>> loginVoc(Map<String, String> searchMap);
}
