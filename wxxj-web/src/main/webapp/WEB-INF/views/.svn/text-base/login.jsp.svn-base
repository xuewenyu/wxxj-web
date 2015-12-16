<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ include file="/WEB-INF/includes/taglibs.jsp"%>
<%@ include file="/WEB-INF/layouts/wxxj-ui/head.jsp"%>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>欢迎登录后台管理系统</title>
<script type="text/javascript">
	$(function() {
		$('.loginbox').css({
			'position' : 'absolute',
			'left' : ($(window).width() - 692) / 2
		});
		$(window).resize(function() {
			$('.loginbox').css({
				'position' : 'absolute',
				'left' : ($(window).width() - 692) / 2
			});
		});
	});
</script>
<style type="text/css">
.login-page {
	background-color: #1c77ac;
	background-image: url(img/light.png);
	background-repeat: no-repeat;
	background-position: center top;
	overflow: hidden;
}

.login-page  .login-container {
	width: 100%;
	height: 100%;
	position: absolute;
	z-index: -1;
}

.login-page  .login-container .cloud {
	position: absolute;
	top: 0px;
	left: 0px;
	width: 100%;
	height: 100%;
	background: url(img/cloud.png) no-repeat;
	z-index: 1;
	opacity: 0.5;
}

#wxxj-cloud2 {
	z-index: 2;
}

.logintop {
	height: 47px;
	position: absolute;
	top: 0;
	background: url(img/loginbg1.png) repeat-x;
	z-index: 100;
	width: 100%;
}

.logintop span {
	color: #fff;
	line-height: 47px;
	background: url(img/loginsj.png) no-repeat 21px 18px;
	text-indent: 44px;
	color: #afc5d2;
	float: left;
}

.logintop ul {
	float: right;
	padding-right: 30px;
}

.logintop ul li {
	float: left;
	margin-left: 20px;
	line-height: 47px;
}

.logintop ul li a {
	color: #afc5d2;
}

.logintop ul li a:hover {
	color: #fff;
}

.loginbody {
	background: url(img/loginbg3.png) no-repeat center center;
	width: 100%;
	height: 585px;
	overflow: hidden;
	position: absolute;
	top: 47px;
}

.systemlogo {
	background: url(img/loginlogo.png) no-repeat center;
	width: 100%;
	height: 71px;
	margin-top: 75px;
}

.loginbox {
	width: 692px;
	height: 336px;
	background: url(img/logininfo.png) no-repeat;
	margin-top: 30px;
}

.loginbox .logininput {
	margin: 88px 110px 0 285px;
}

.loginbox .logininput .input-text {
	width: 299px;
	height: 48px;
	border: 1px solid #999;
	line-height: 48px;
	padding-left: 44px;
	font-size: 14px;
	color: #90a2bc;
	margin-bottom: 10px;
	background-color: #fff;
}

.loginbtn {
	width: 299px;
	height: 48px;
	background-color: #3c95c8;
	font-size: 16px;
	color: #fff;
}

.loginfooter {
	height: 50px;
	line-height: 50px;
	text-align: center;
	background: url(img/loginbg2.png) repeat-x;
	position: absolute;
	bottom: 0;
	width: 100%;
	color: #0b3a58;
}

.loginfooter a {
	font-weight: bold;
	color: #0b3a58;
}

.loginfooter a:hover {
	color: #fff;
}
</style>
</head>
<body class="login-page">
	<div class="login-container">
		<div id="wxxj-cloud1" class="cloud"></div>
		<div id="wxxj-cloud2" class="cloud"></div>
	</div>
	<div class="logintop">
		<span>欢迎登录后台管理界面平台</span>
		<ul>
			<li><a href="#">回首页</a></li>
			<li><a href="#">帮助</a></li>
			<li><a href="#">关于</a></li>
		</ul>
	</div>
	<form role="form" action="${contextPath}/login" method="post">
		<div class="loginbody">
			<span class="systemlogo"></span>
			<div class="loginbox">
				<div class="logininput">
					<input name="username" type="text" class="input-text wxxj-pi"
						data-wxxj-pi-icon-class="fa fa-lg fa-user" placeholder="请输入用户名"
						required /> <input name="password" type="password"
						class="input-text wxxj-pi"
						data-wxxj-pi-icon-class="fa fa-lg fa-lock" placeholder="请输入密码"
						required />
					<button type="submit" class="loginbtn">
						登 录 <i class="fa fa-sign-in"></i>
					</button>
				</div>
			</div>
		</div>
	</form>
	<div class="loginfooter">
		版权所有 2015 <a href="https://team.oschina.net/wxxj">team.oschina.net/wxxj</a>
		仅供学习交流，勿用于任何商业用途
	</div>
	<script src="${contextPath}/inc/wxxj/js/login.cloud.js"
		type="text/javascript"></script>
</body>
</html>
