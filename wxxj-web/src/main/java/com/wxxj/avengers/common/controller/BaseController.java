package com.wxxj.avengers.common.controller;

import com.jfinal.core.Controller;
import com.jfinal.kit.PropKit;
import com.jfinal.plugin.ehcache.CacheKit;
import com.wxxj.avengers.common.utils.OperateErrorPage;
import com.wxxj.avengers.common.utils.OperateMessCode;
import com.wxxj.avengers.common.utils.OperateResult;
import com.wxxj.avengers.common.utils.OperateResult.ResultType;

/**
 * 
 * @ClassName: BaseController
 * @Description: 基础BaseController，封装常用的方法
 * @author xuewenyu
 * @date 2015-11-29 下午11:02:11
 * 
 */
public abstract class BaseController extends Controller {

	/**
	 * view list page
	 */
	protected abstract void viewList();

	/**
	 * view detail page
	 */
	protected abstract void viewDetail();

	/**
	 * view create page
	 */
	protected abstract void viewCreate();

	/**
	 * view update page
	 */
	protected abstract void viewUpdate();

	/**
	 * delete operate
	 */
	protected abstract void delete();

	/**
	 * create operate
	 */
	protected abstract void create();

	/**
	 * update operate
	 */
	protected abstract void update();

	/**
	 * response success
	 * 
	 * @param obj
	 */
	protected OperateResult genSuccessOperate() {
		return new OperateResult(ResultType.SUCCESS, PropKit.get(OperateMessCode.WM_OPERATE_SUCCESS));
	}

	/**
	 * response error
	 */
	protected OperateResult genErrorOperate() {
		return new OperateResult(ResultType.FAILURE, PropKit.get(OperateMessCode.WM_OPERATE_ERROR));
	}

	/**
	 * render 403 error
	 */
	protected void error403() {
		renderError(403, OperateErrorPage.ERROR_PAGE_403);
	}

	/**
	 * render 404 error
	 */
	protected void error404() {
		renderError(404, OperateErrorPage.ERROR_PAGE_404);
	}

	/**
	 * render 500 error
	 */
	protected void error500() {
		renderError(500, OperateErrorPage.ERROR_PAGE_500);
	}

	/**
	 * 根据cacheName, cacheKey来清除缓存 cacheName 必填，cacheKey选填，不填的话为null
	 * 
	 * @param cacheName
	 * @param cacheKey
	 */
	protected void clearCache(String cacheName, Object cacheKey) {
		if (cacheKey == null) {
			CacheKit.removeAll(cacheName);
		} else {
			CacheKit.remove(cacheName, cacheKey);
		}
	}
}
