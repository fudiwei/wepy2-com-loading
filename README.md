# wepy2-com-loading

一个阻塞页面的加载动画组件。

此组件依赖 [wepy](https://github.com/Tencent/wepy) 2.0.0+。

如果你正在使用 wepy 1.x，请移步 [wepy-com-loading](https://github.com/fudiwei/wepy-com-loading)。

---

## 用法

安装：

``` shell
npm install @skit/wepy2-com-loading --save
```

导入：

``` html
<template>
    <ui-loading ref="loading" />
</template>
<config>
{
    usingComponents: {
        'ui-loading': 'module:@skit/wepy2-com-loading'
    }
}
</config>
<script>
    import Wepy from 'wepy';

    Wepy.page({
        onShow() {
            this.$refs['loading'].show('loading ...');
        }
    });
</script>
```

> 注意：当前版本的 wepy-cli 存在 Bug，无法打包通过 `node_modules` 引入的 wpy 组件，解决方案请参考 [Issue#2554](https://github.com/Tencent/wepy/issues/2554)。

### 可配置项

#### 属性：

*无*

#### 方法：

``` javascript
/**
 * 显示加载对话框。
 * @param {Object} options 配置项。
 * @param {String} options.content 提示文本。
 */
this.$refs['loading'].show({
    content: '加载中'
});

/**
 * 显示加载对话框。
 * @param {String} content 提示文本。
 */
this.$refs['loading'].show('加载中');

/**
 * 隐藏加载对话框。
 */
this.$refs['loading'].hide();
```
