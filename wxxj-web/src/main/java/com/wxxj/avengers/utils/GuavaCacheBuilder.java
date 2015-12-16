package com.wxxj.avengers.utils;

import java.util.concurrent.TimeUnit;

import com.google.common.cache.Cache;
import com.google.common.cache.CacheBuilder;
import com.wxxj.avengers.common.constants.WXXJConstant;

/**
 * 
 * @ClassName: GuavaCacheBuilder
 * @Description: 谷歌缓存配置
 * @author xuewenyu
 * @date 2015-12-10 下午9:03:29
 * 
 */
public class GuavaCacheBuilder {
	public static Cache<String, Integer> createUserLoginCache() {
		Cache<String, Integer> cache = CacheBuilder
				.newBuilder()
				.maximumSize(WXXJConstant.USER_LOGIN_CACHED_MAX)
				.expireAfterWrite(WXXJConstant.USER_LOGIN_INTERVAL,
						TimeUnit.SECONDS).build();
		return cache;
	}
}
