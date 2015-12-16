package com.wxxj.avengers.config;

import com.jfinal.config.Constants;
import com.jfinal.config.Handlers;
import com.jfinal.config.Interceptors;
import com.jfinal.config.JFinalConfig;
import com.jfinal.config.Plugins;
import com.jfinal.config.Routes;
import com.jfinal.plugin.activerecord.ActiveRecordPlugin;
import com.jfinal.plugin.activerecord.dialect.SqlServerDialect;
import com.jfinal.plugin.druid.DruidPlugin;
import com.jfinal.plugin.druid.DruidStatViewHandler;
import com.jfinal.plugin.ehcache.EhCachePlugin;
import com.jfinal.render.ViewType;
import com.wxxj.avengers.config.routes.ContractRoute;
import com.wxxj.avengers.config.routes.SystemRoute;
import com.wxxj.avengers.module.system.user.User;

/**
 * 
 * @ClassName: WXXJJFinalConfig
 * @Description: JFinal配置
 * @author xuewenyu
 * @date 2015-11-29 下午6:03:29
 * 
 */
public class WXXJJFinalConfig extends JFinalConfig {

	/**
	 * 配置常量
	 */
	@Override
	public void configConstant(Constants me) {
		// load property配置
		loadPropertyFile("config.properties");
		me.setDevMode(getPropertyToBoolean("devMode", false));

		// 设置文件上传配置
		me.setUploadedFileSaveDirectory(getProperty("wxxj.file.upload.path"));
		me.setMaxPostSize(2048000);

		// 设置jfinal视图
		me.setViewType(ViewType.JSP);
	}

	/**
	 * 配置路由
	 */
	@Override
	public void configRoute(Routes me) {
		me.add(new SystemRoute());
		me.add(new ContractRoute());
	}

	/**
	 * 配置插件
	 */
	@Override
	public void configPlugin(Plugins me) {
		DruidPlugin druidPlugin = new DruidPlugin(getProperty("wxxj.jdbc.url"), getProperty("wxxj.jdbc.user"), getProperty("wxxj.jdbc.password").trim());
		druidPlugin.setFilters("stat,wall");
		druidPlugin.setDriverClass(getProperty("wxxj.jdbc.driverClassName"));
		me.add(druidPlugin);
		me.add(new EhCachePlugin());
		// 配置ActiveRecord插件
		ActiveRecordPlugin arp = new ActiveRecordPlugin(druidPlugin);
		arp.setShowSql(getPropertyToBoolean("wxxj.jdbc.showSql", false));
		arp.setDialect(new SqlServerDialect());
		me.add(arp);
		arp.addMapping("users", User.class);
	}

	/**
	 * 配置全局拦截器
	 */
	@Override
	public void configInterceptor(Interceptors me) {
	}

	/**
	 * 配置处理器
	 */
	@Override
	public void configHandler(Handlers me) {
		// 配置druid的监听，可以在浏览器里输入http://localhost:8080/druid 查看druid监听的数据
		me.add(new DruidStatViewHandler("/druid"));
	}

}
