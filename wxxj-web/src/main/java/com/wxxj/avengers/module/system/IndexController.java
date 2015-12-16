package com.wxxj.avengers.module.system;

import com.jfinal.core.Controller;

/**
 * 
 * @ClassName: IndexController
 * @Description: 首页、登陆登出controller
 * @author xuewenyu
 * @date 2015年12月16日 下午2:38:47
 *
 */
public class IndexController extends Controller {

    public void login() {
        render("login.jsp");
    }

    public void index() {
        render("index.jsp");
    }

}
