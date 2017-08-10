/**
 * Created by Administrator on 2017/8/9.
 */
/*
* 创建数据库连接
* 该模块只会被加载一次，一直使用相同的实例
* */
//引入连接配置的模块
var settings=require("../settings");
var Db=require('mongodb').Db;
var Connection=require('mongodb').Connection;
var Server=require('mongodb').Server;

module.exports=new Db(settings.db,new Server(settings.host,27017,{}),{safe:true});