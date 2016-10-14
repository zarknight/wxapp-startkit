# wxapp-startkit
微信小程序 StartKit (Gulp + Babel + Sass)

#### 下载代码后，安装依赖库
    npm install

#### 开发模式，监听文件改动并进行实时编译
    gulp 或 gulp watch:clean

#### 清空输出目录并编译
    gulp build:clean
    
#### 问题记录/功能待完善:
目前微信小程序框架在模块系统方面存在一些问题，导致当前很多成熟的ES6 polyfill库，工具库(如lodash, underscore)没有办法直接顺利运行。