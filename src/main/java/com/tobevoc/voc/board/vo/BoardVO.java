package com.tobevoc.voc.board.vo;

import com.tobevoc.voc.common.vo.defaultVO;

/**
 * 
 * @author Education
 * @since 20220501
 * @version 1.0
 * @see
 */
public class BoardVO extends defaultVO {

	
	private String no;
	private String gubun;
	private String title;
	private String cntn;
	private String regUser;
	private String regDttm;
	private String delYn;
	private String attachNo;
	private String attachYn;
	private String category;
	private String noticeYn;
	private String hitCnt;
	
	private String strtDttm;
	private String endDttm;
	
	public String getNo() {
		return no;
	}
	public void setNo(String no) {
		this.no = no;
	}
	public String getGubun() {
		return gubun;
	}
	public void setGubun(String gubun) {
		this.gubun = gubun;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getCntn() {
		return cntn;
	}
	public void setCntn(String cntn) {
		this.cntn = cntn;
	}
	public String getRegUser() {
		return regUser;
	}
	public void setRegUser(String regUser) {
		this.regUser = regUser;
	}
	public String getRegDttm() {
		return regDttm;
	}
	public void setRegDttm(String regDttm) {
		this.regDttm = regDttm;
	}
	public String getDelYn() {
		return delYn;
	}
	public void setDelYn(String delYn) {
		this.delYn = delYn;
	}
	public String getAttachNo() {
		return attachNo;
	}
	public void setAttachNo(String attachNo) {
		this.attachNo = attachNo;
	}
	public String getAttachYn() {
		return attachYn;
	}
	public void setAttachYn(String attachYn) {
		this.attachYn = attachYn;
	}
	public String getCategory() {
		return category;
	}
	public void setCategory(String category) {
		this.category = category;
	}
	public String getNoticeYn() {
		return noticeYn;
	}
	public void setNoticeYn(String noticeYn) {
		this.noticeYn = noticeYn;
	}
	public String getHitCnt() {
		return hitCnt;
	}
	public void setHitCnt(String hitCnt) {
		this.hitCnt = hitCnt;
	}
	public String getStrtDttm() {
		return strtDttm;
	}
	public void setStrtDttm(String strtDttm) {
		this.strtDttm = strtDttm;
	}
	public String getEndDttm() {
		return endDttm;
	}
	public void setEndDttm(String endDttm) {
		this.endDttm = endDttm;
	}
	
	
	
}