﻿/**
 *  index.js 数据库配置索引页面 
 *  @author: JY
 *  @since: 2013-03-02
 */
var mongoose = require('mongoose');
var settings = require('../settings').settings;

mongoose.connect(settings.db, function (err) {
    if (err) {
        console.log('连接数据库出错: ', settings.db, err.message);
        process.exit(1);
    }
});

// 加载模型
require('./user');
require('./topic');
require('./comment');
require('./category');

exports.User = mongoose.model('User');
exports.Topic = mongoose.model('Topic');
exports.Comment = mongoose.model('Comment');
exports.Category = mongoose.model('Category');
