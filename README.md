# wxapp-startkit
微信小程序 StartKit (Gulp + Babel + Sass)

[![Build Status](https://travis-ci.org/zarknight/wxapp-startkit.svg?branch=master)](https://travis-ci.org/zarknight/wxapp-startkit)
[![Dependency Status](https://david-dm.org/zarknight/wxapp-startkit.svg)](https://david-dm.org/zarknight/wxapp-startkit)
[![devDependency Status](https://david-dm.org/zarknight/wxapp-startkit/dev-status.svg)](https://david-dm.org/zarknight/wxapp-startkit#info=devDependencies)

#### 下载代码
    git clone https://github.com/zce/weapp-boilerplate.git
    
#### 安装依赖库
    npm install

#### 开发模式（监听文件改动并进行实时编译）
    gulp

#### 清空输出目录并编译
    gulp build:clean
    
#### 编译一个生产版本(代码压缩优化)
    gulp build:prod
    
#### 问题记录/功能待完善:
目前微信小程序框架在模块系统方面存在一些问题，导致当前很多成熟的ES6 polyfill库，工具库(如lodash, underscore)没有办法直接顺利运行。

#### 许可

MIT &copy; [zarknight](http://github.com/zarknight)