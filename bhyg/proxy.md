# 代理服务

## 我们为什么需要代理服务

::: warning
根据最新的测试和程序适配，如果你的多开数量约在30开及以下，则您不需要使用代理服务，不使用代理服务的效果将更好。

如果必须30开及以上，请优先考虑使用多个网络资源，再行考虑代理。
:::

当我们频繁请求某一bilibili API时，尤其是多开时，可能会导致 频率限制 或 HTTP: 412 的情况。这意味着触发了哔哩哔哩安全风控策略，当前请求IP会被暂时阻止。

解决方案有两个，一是等待风控结束，二是更换IP。显然，前者将浪费大量时间。

后者的实现方法一般有以下几种：

- 向运营商获取新的IP，您需要重新拨号（重启路由器），重新连接基站（重启手机或重启电话卡），这也将耗费大量时间成本。
- 更换网络环境，虽然这种方法迅速，但是我们没有足够的网络环境更换，且需要大量人力成本。
- 使用代理池，缺点只有两个：一点长一点的延时和需要一些可以被接受的金钱成本。

所以，我们提供了可选的代理支持。

## 什么时候需要使用

当你多开BHYG抢票时，由于你的IP复用了多次，可能会触发频率限制，此时我们需要使用。

但是如果你不进行多开，**不建议**使用代理，这将使你降低请求速率，从而错过最佳时机。

在多开数量不大时，同样不建议使用代理。一般我们会在**30开**以上使用代理，而这是一般使用不到的。

## 如何使用

我们使用**快代理**作为我们的代理提供商，选用了其隧道代理服务。

我们推荐其隧道代理-按量计费-一分钟款。

购买相关服务后，您需要前往[API设置-密钥管理](https://www.kuaidaili.com/uc/api/secret/)获取你的**订单级API密钥信息**分别获得 `SecretId` 和 `SecretKey`

而后在产品详情页找到登陆用户名和密码，以及域名和端口，拼接成该格式：

```
[SecretId] [SecretKey] http://[用户名]:[密码]@[域名]:[端口]
```

你需要将`[SecretId]` `[SecretKey]` `[用户名]` `[密码]` `[域名]` `[端口]` 替换为你获取到的内容

完成上述内容后，在询问是否使用代理选择是，将上述参数填入代理认证信息。
