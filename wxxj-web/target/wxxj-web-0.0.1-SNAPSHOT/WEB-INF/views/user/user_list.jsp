<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<c:forEach items="${WXXJ_USER}" var="user">
	<div>${user.account }/${user.module }</div>
</c:forEach>