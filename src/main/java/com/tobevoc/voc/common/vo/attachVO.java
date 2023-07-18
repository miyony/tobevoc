package com.tobevoc.voc.common.vo;


import com.edupack.edu.vo.EduDefaultVO;

/**
 * 
 * @author Education
 * @since 20220501
 * @version 1.0
 * @see
 */
public class attachVO extends EduDefaultVO {

	private int NO;
	private String BOARD_NO;
	
	private String FILE_ID;
	private String FILE_GUBUN;
	private String FILE_NAME;
	private String REG_USER;
	private String REG_DTTM;
	private String FILE_TYPE;
	private String FILE_SIZE;
	private int rowType;
	
	public int getNO() {
		return NO;
	}
	public void setNO(int nO) {
		NO = nO;
	}
	public String getBOARD_NO() {
		return BOARD_NO;
	}
	public void setBOARD_NO(String bOARD_NO) {
		BOARD_NO = bOARD_NO;
	}
	public String getFILE_ID() {
		return FILE_ID;
	}
	public void setFILE_ID(String fILE_ID) {
		FILE_ID = fILE_ID;
	}
	public String getFILE_GUBUN() {
		return FILE_GUBUN;
	}
	public void setFILE_GUBUN(String fILE_GUBUN) {
		FILE_GUBUN = fILE_GUBUN;
	}
	public String getFILE_NAME() {
		return FILE_NAME;
	}
	public void setFILE_NAME(String fILE_NAME) {
		FILE_NAME = fILE_NAME;
	}
	public String getREG_USER() {
		return REG_USER;
	}
	public void setREG_USER(String rEG_USER) {
		REG_USER = rEG_USER;
	}
	public String getREG_DTTM() {
		return REG_DTTM;
	}
	public void setREG_DTTM(String rEG_DTTM) {
		REG_DTTM = rEG_DTTM;
	}
	public String getFILE_TYPE() {
		return FILE_TYPE;
	}
	public void setFILE_TYPE(String fILE_TYPE) {
		FILE_TYPE = fILE_TYPE;
	}
	public String getFILE_SIZE() {
		return FILE_SIZE;
	}
	public void setFILE_SIZE(String fILE_SIZE) {
		FILE_SIZE = fILE_SIZE;
	}
	public int getRowType() {
		return rowType;
	}
	public void setRowType(int rowType) {
		this.rowType = rowType;
	}
	
	
	

}