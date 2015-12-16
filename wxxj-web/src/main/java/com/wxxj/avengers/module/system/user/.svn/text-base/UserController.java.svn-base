package com.wxxj.avengers.module.system.user;

import java.util.List;

import com.jfinal.core.Controller;

/**
 * 
 * @ClassName: UserController
 * @Description: 用户controller
 * @author xuewenyu
 * @date 2015-11-29 下午7:55:23
 * 
 */
public class UserController extends Controller {

    /**
     * 进入列表界面
     */
    public void viewList() {
        List<User> users = User.me.queryAll();
        setAttr("WXXJ_USER", users);
        render("user_list.jsp");
    }

}
