package com.tobevoc.voc.login.vo;

import com.tobevoc.voc.common.vo.defaultVO;

/**
 * 
 * @author Education
 * @since 20220501
 * @version 1.0
 * @see
 */
public class LoginVO extends defaultVO {

	private String userNo;
	private String userId;
	private String password;
	private String name;
	private String deptCode;
	private String hireDttm;
	private String retireDttm;
	private String gender;
	private String posCode;
	private String wordCode;
	private String memo;
	
	
	public String getUserNo() {
		return userNo;
	}
	public void setUserNo(String userNo) {
		this.userNo = userNo;
	}
	public String getUserId() {
		return userId;
	}
	public void setUserId(String userId) {
		this.userId = userId;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getDeptCode() {
		return deptCode;
	}
	public void setDeptCode(String deptCode) {
		this.deptCode = deptCode;
	}
	public String getHireDttm() {
		return hireDttm;
	}
	public void setHireDttm(String hireDttm) {
		this.hireDttm = hireDttm;
	}
	public String getRetireDttm() {
		return retireDttm;
	}
	public void setRetireDttm(String retireDttm) {
		this.retireDttm = retireDttm;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public String getPosCode() {
		return posCode;
	}
	public void setPosCode(String posCode) {
		this.posCode = posCode;
	}
	public String getWordCode() {
		return wordCode;
	}
	public void setWordCode(String wordCode) {
		this.wordCode = wordCode;
	}
	public String getMemo() {
		return memo;
	}
	public void setMemo(String memo) {
		this.memo = memo;
	}
		

}