package com.wxxj.avengers.module.system.user;

import java.util.List;

import com.jfinal.plugin.activerecord.Model;

/**
 * 
 * @ClassName: User
 * @Description: UserModel
 * @author xuewenyu
 * @date 2015-11-29 下午7:50:35
 * 
 */
public class User extends Model<User> {

	public static final User me = new User();

	/**
	 * 查询所有用户
	 * 
	 * @return 用户列表
	 */
	public List<User> queryAll() {
		return super.find("select * from users");
	}

}
