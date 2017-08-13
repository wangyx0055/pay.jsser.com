# 我的收款码

<a href="https://pay.jsser.com?src=github" target="_blank">在线预览 Preview</a>

本项目将支付宝、微信支付、QQ钱包支付 收款码合并成一张收款码。

![我的收款码](https://assets-cdn.dwz.st/50A85751-71E1-4346-83E2-EA108ABB061F.png)

### 依赖

打包工具

* Node.JS
* webpack3

### 安装

```bash
    git clone https://github.com/zhuzhenyu/pay.jsser.com
    cd pay.jsser.com
    npm install
```


### 修改配置

修改src/app.js中 `var payConfig 变量参数`


### 说明

* 由于自适应屏幕宽度会导致图片缩放模糊，所以没有采用支付宝、微信的付款码截图，采用前端js生成二维码。
* 支付宝、微信支付、QQ支付 付款码地址需要从付款码中提取。(读取二维码中地址)
* 由于微信支付、QQ支付扫码后不能直接到支付界面，所以有个二跳页，需要用户长按完成支付。




