package com.tobevoc.voc.common.service;

import java.util.List;
import java.util.Map;


public interface CustomerService {

	List<Map<String, Object>> selectCust(Map<String, String> searchMap); //유저검색
}
