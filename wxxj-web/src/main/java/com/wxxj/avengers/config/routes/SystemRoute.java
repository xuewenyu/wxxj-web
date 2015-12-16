package com.wxxj.avengers.config.routes;

import com.jfinal.config.Routes;
import com.wxxj.avengers.common.constants.WXXJConstant;
import com.wxxj.avengers.module.system.IndexController;
import com.wxxj.avengers.module.system.user.UserController;

/**
 * 
 * @ClassName: SystemRoute
 * @Description: 系统模块路由配置
 * @author xuewenyu
 * @date 2015-12-9 下午10:49:34
 * 
 */
public class SystemRoute extends Routes {

    @Override
    public void config() {
        super.add("/system/user", UserController.class, WXXJConstant.JFINAL_ROUTE_PREFIX + "/user/");
        super.add("/", IndexController.class, WXXJConstant.JFINAL_ROUTE_PREFIX + "/");
    }

}
