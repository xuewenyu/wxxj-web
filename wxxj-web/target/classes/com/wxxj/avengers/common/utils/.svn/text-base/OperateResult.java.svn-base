package com.wxxj.avengers.common.utils;

import java.util.Map;

import com.google.common.collect.Maps;

/**
 * 
 * @ClassName: OperateResult
 * @Description: 操作结果
 * @author xuewenyu
 * @date 2015-11-29 下午11:13:10
 * 
 */
public class OperateResult {

	/**
	 * 
	 * 成功、失败
	 */
	public enum ResultType {
		SUCCESS, FAILURE
	}

	private ResultType resultType;

	/**
	 * 结果描述
	 */
	private String resultDesc;

	/**
	 * 返回数据
	 */
	private Map<String, Object> values;

	public OperateResult(ResultType resultType, String resultDesc) {
		super();
		this.resultType = resultType;
		this.resultDesc = resultDesc;
	}

	public ResultType getResultType() {
		return resultType;
	}

	public void setResultType(ResultType resultType) {
		this.resultType = resultType;
	}

	public String getResultDesc() {
		return resultDesc;
	}

	public void setResultDesc(String resultDesc) {
		this.resultDesc = resultDesc;
	}

	public Map<String, Object> getValues() {
		return values;
	}

	public void setValues(Map<String, Object> values) {
		this.values = values;
	}

	public void addValue(String key, String value) {
		if (values == null) {
			values = Maps.newHashMap();
		}
		values.put(key, value);
	}
}
