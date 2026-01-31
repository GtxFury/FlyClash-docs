---
title: AI 助手
---
# AI 助手

FlyClash Android 内置了强大的 AI 助手功能，可以通过自然语言对话来管理代理服务、编辑配置文件、查询状态等。AI 助手支持多种大语言模型，并具备丰富的工具调用能力。

## 快速开始

### 进入 AI 助手

在应用底部导航栏点击「AI 助手」图标，或从设置页面进入。

### 配置 API

首次使用需要配置 AI 接口：

1. 点击右上角设置图标进入「AI 助手设置」
2. 选择 API 格式（推荐使用 Claude v1/message 格式）
3. 填写 API Key 和 Base URL
4. 选择模型并保存   

### 支持的 API 格式

| 格式 | 说明 | 推荐服务商 |
|------|------|-----------|
| v1/message | Claude 原生格式（推荐） | Anthropic API、兼容网关 |
| v1/chat | OpenAI 兼容格式 | OpenAI、各类兼容 API |

::: tip
API 模型需要支持 Function Calling 能力，推荐使用 Claude 格式体验最佳。如果使用 OpenAI 兼容格式且 API 不支持原生 Function Calling，可以尝试使用「工具调用兼容模式」，默认建议关闭并使用支持 Function Calling 的 API 模型。
:::

## 功能概览

AI 助手可以帮你完成以下任务：

- **服务控制**：启动/停止代理服务、切换代理模式
- **节点管理**：查询代理组、切换节点、节点测速
- **配置编辑**：读取和编辑配置文件（代理、规则、DNS 等）
- **状态查询**：查看连接信息、流量统计、应用设置
- **配置管理**：管理配置文件、覆写脚本、代理图标规则

## 工具列表

AI 助手内置了丰富的工具，可以直接操作 FlyClash 的各项功能。

### 服务控制类

#### control_service - 服务控制

控制 Clash 代理服务的启动、停止，或查询当前运行状态。

| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| action | string | 是 | 操作类型：`start`（启动）、`stop`（停止）、`status`（查询状态） |

**示例对话：**
- "启动代理服务"
- "停止服务"
- "查看服务状态"

---

#### switch_mode - 切换代理模式

切换代理模式：规则模式、全局模式、直连模式。

| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| mode | string | 是 | 代理模式：`rule`（规则）、`global`（全局）、`direct`（直连） |

**示例对话：**
- "切换到全局模式"
- "使用规则模式"
- "切换直连"

---

#### switch_proxy - 切换代理节点

切换代理组中的代理节点。

| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| group_name | string | 是 | 代理组名称 |
| proxy_name | string | 是 | 要切换到的节点名称 |

**示例对话：**
- "把节点选择组切换到香港节点"
- "切换到延迟最低的节点"

---

#### health_check - 节点测速

对代理组或单个节点进行延迟测试。

| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| group_name | string | 否 | 代理组名称，不指定则测试所有组 |
| proxy_name | string | 否 | 节点名称，指定则只测点 |

**示例对话：**
- "测速所有节点"
- "测试香港节点的延迟"

---

### 查询类

#### query_proxies - 查询代理信息

查询代理组和节点信息。

| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| group_name | string | 否 | 代理组名称，不指定则返回所有组概览 |
| include_nodes | boolean | 否 | 是否包含节点详情（延迟等），默认 false |

**示例对话：**
- "查看所有代理组"
- "显示节点选择组的所有节点"
- "查看节点延迟"

---

#### query_connections - 查询连接信息

查询当前的网络连接信息。

| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| limit | integer | 否 | 返回的最大连接数量，默认 20 |

**示例对话：**
- "查看当前连接"
- "有多少个活动连接"

---

#### query_traffic - 查询流量统计

查询流量统计信息，包括实时速度和累计流量。

| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| type | string | 否 | 查询类型：`now`（实时）、`total`（累计）、`all`（全部，默认） |

**示例对话：**
- "查看流量统计"
- "当前网速多少"
- "今天用了多少流量"

---

#### query_settings - 查询应用设置

查询应用的各项设置。

| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| category | string | 否 | 设置分类：`service`（服务）、`ui`（界面）、`all`（全部，默认） |

**示例对话：**
- "查看当前设置"
- "DNS 劫持开了吗"

---

### 配置文件编辑类

这是 AI 助手最强大的功能之一，可以直接编辑配置文件。

#### read_config - 读取配置

读取配置文件的 YAML 内容，支持分段读取。

| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| profile_name | string | 否 | 配置文件名称，不指定则读取当前激活的配置 |
| section | string | 否 | 要读取的部分：`all`、`proxies`、`proxy-groups`、`rules`、`dns` |
| offset | integer | 否 | 从第几行开始读取（用于大文件分页） |
| limit | integer | 否 | 读取多少行 |

**示例对话：**
- "读取当前配置"
- "查看配置文件的规则部分"
- "显示 DNS 配置"

---

#### edit_config - 编辑配置

使用精确字符串替换编辑配置文件，类似 Claude Code 的 Edit 模式。

| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| old_string | string | 是* | 要替换的原文本，必须与配置中完全一致 |
| new_string | string | 是* | 替换后的新文本，可为空（表示删除） |
| anchor | string | 否 | 锚点文本，可代替 old_string 或配合插入模式使用 |
| insert | string | 否 | 要插入的文本（配合 insert_before/insert_after 使用） |
| mode | string | 否 | 编辑模式：`replace`（默认）、`insert_before`、`insert_after` |
| profile_name | string | 否 | 配置文件名称 |

**编辑示例：**

修改端口：
```yaml
old_string: "mixed-port: 7890"
new_string: "mixed-port: 7891"
```

添加规则：
```yaml
old_string: "rules:\n  - DOMAIN-SUFFIX,google.com,PROXY"
new_string: "rules:\n  - DOMAIN-SUFFIX,github.com,PROXY\n  - DOMAIN-SUFFIX,google.com,PROXY"
```

删除节点：
```yaml
old_string: "  - name: 旧节点\n    type: ss\n    server: 1.2.3.4\n    port: 443"
new_string: ""
```

**示例对话：**
- "把端口改成 7891"
- "添加一条规则让 github.com 走代理"
- "删除名为'旧节点'的代理"

---

#### validate_config - 验证配置

验证配置文件的 YAML 格式是否正确。

| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| content | string | 是 | 要验证的配置内容（YAML 格式） |

---

### 配置管理类

#### manage_profiles - 配置文件管理

管理配置文件的增删改查。

| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| action | string | 是 | 操作类型（见下表） |
| profile_name | string | 否 | 配置文件名称 |
| new_profile_name | string | 否 | 新配置名称 |
| content | string | 否 | 配置内容（YAML） |
| url | string | 否 | 订阅 URL |
| activate_after | string | 否 | 创建后是否激活：`true`/`false` |

**支持的操作：**

| action | 说明 |
|--------|------|
| list | 列出所有配置 |
| activate | 激活指定配置 |
| delete | 删除配置 |
| create_file | 用 YAML 创建配置 |
| create_url | 用订阅 URL 创建配置 |
| duplicate | 复制配置 |

**示例对话：**
- "查看所有配置文件"
- "激活名为'机场A'的配置"
- "添加一个订阅"

---

#### modify_settings - 修改应用设置

修改应用的各项设置。

| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| key | string | 是 | 设置项名称 |
| value | string | 是 | 设置值 |

**支持的设置项：**

| 设置项 | 说明 | 可选值 |
|--------|------|--------|
| bypassPrivateNetwork | 绕过私有网络 | true/false |
| dnsHijacking | DNS 劫持 | true/false |
| systemProxy | 系统代理 | true/false |
| allowBypass | 允许绕过 | true/false |
| allowIpv6 | 允许 IPv6 | true/false |
| dynamicNotification | 动态通知 | true/false |
| autoControlOnWifi | WiFi 自动控制 | true/false |
| autoControlOnMobile | 移动网络自动控制 | true/false |
| lightweightMode | 轻量模式 | true/false |
| tunStackMode | TUN 栈模式 | system/gvisor/mixed |
| enableVpn | VPN 模式 | true/false |
| darkMode | 深色模式 | Auto/ForceLight/ForceDark |
| proxyLine | 代理显示行数 | 数字 |

**示例对话：**
- "开启 DNS 劫持"
- "关闭轻量模式"
- "切换到深色模式"

---

#### manage_js_scripts - 覆写脚本管理

管理覆写脚本（JavaScript 或 YAML 覆写）。

| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| action | string | 是 | 操作类型 |
| id | string | 否 | 脚本 ID |
| name | string | 否 | 脚本名称 |
| content | string | 否 | 脚本内容 |
| script_type | string | 否 | 脚本类型：`JAVASCRIPT`、`YAML_OVERRIDE` |
| scope_type | string | 否 | 覆写范围：`CURRENT_ONLY`、`GLOBAL`、`SELECTED` |
| profile_name | string | 否 | 配置名称（关联覆写时使用） |
| enabled | string | 否 | 是否启用：`true`/`false` |

**支持的操作：**

| action | 说明 |
|--------|------|
| list | 列出所有脚本 |
| create | 创建脚本 |
| update | 更新脚本 |
| delete | 删除脚本 |
| enable | 启用脚本 |
| disable | 禁用脚本 |
| upsert_linked_override | 创建/更新关联覆写 |
| toggle_linked_override | 切换关联覆写状态 |

**示例对话：**
- "查看所有覆写脚本"
- "创建一个 YAML 覆写脚本"
- "启用名为'自定义规则'的脚本"

---

#### edit_js_script - 编辑覆写脚本

编辑覆写脚本内容，支持精确替换和全量替换两种模式。

| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| script_name | string | 否 | 脚本名称（与 script_id 二选一） |
| script_id | string | 否 | 脚本 ID |
| mode | string | 否 | 编辑模式：`replace`（默认）、`full` |
| old_string | string | 否 | 要替换的原文本（replace 模式） |
| new_string | string | 否 | 替换后的新文本（replace 模式） |
| full_content | string | 否 | 完整的新内容（full 模式） |

---

#### manage_proxy_icon_rules - 代理图标规则管理

管理代理组图标规则，用于给代理组匹配显示图标。

| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| action | string | 是 | 操作类型 |
| id | string | 否 | 规则 ID |
| name | string | 否 | 规则名称 |
| regex | string | 否 | 匹配正则表达式 |
| icon_type | string | 否 | 图标类型：`URL`、`BASE64` |
| icon_data | string | 否 | 图标数据 |
| enabled | string | 否 | 是否启用 |
| priority | string | 否 | 优先级（数字） |

**支持的操作：**

| action | 说明 |
|--------|------|
| list | 列出规则 |
| add | 添加规则 |
| update | 更新规则 |
| delete | 删除规则 |
| toggle | 启用/禁用规则 |
| set_global_enabled | 全局启用/禁用 |

---

## 使用技巧

### 快捷操作

AI 助手界面提供了四个快捷按钮：

- **查看状态**：快速查看服务运行状态
- **代理节点**：查看代理组和节点信息
- **流量统计**：查看实时速度和累计流量
- **编辑配置**：进入配置编辑模式

### 会话管理

- 点击左上角的会话按钮可以查看历史会话
- 支持创建新会话、切换会话、删除会话
- 会话会自动保存，下次打开时恢复

### 自动滚动

点击右上角的滚动按钮可以开启/关闭自动滚动功能。开启后，新消息会自动滚动到底部。

### 停止生成

在 AI 回复过程中，点击发送按钮（变为停止图标）可以中断当前生成。

## 高级设置

### 对话设置

在设置页面可以配置：

- **失败时自动重试**：网络错误时自动重试请求
- **重试次数**：设置最大重试次数
- **删除所有对话记录**：清除所有历史会话

### 工具调用兼容n如果使用的 OpenAI 兼容 API 不支持原生 Function Calling，可以开启此选项。开启后会使用文本解析的方式提取工具调用。

## 常见问题

### API Key 从哪里获取？

- **Anthropic API**：访问 [console.anthropic.com](https://console.anthropic.com) 注册并获取
- **OpenAI API**：访问 [platform.openai.com](https://platform.openai.com) 注册并获取
- **NVIDIA 构建平台**：访问 [build.nvidia.com](https://build.nvidia.com/explore/discover?integrate_nim=true&hosted_api=true&modal=integrate-nim) 注册可免费使用模型（限制 RPM 40）
- 也可以使用各类兼容的第三方 API 服务

### 为什么工具调用失败？

1. 确保服务已启动（部分工具需要服务运行）
2. 检查配置文件格式是否正确
3. 如果使用 OpenAI 兼容 API，尝试开启兼容模式

### 如何编辑配置文件？

1. 先让 AI 读取配置：「读取当前配置」
2. 描述你想要的修改：「把端口改成 7891」
3. AI it_config 工具进行修改

### 编辑配置时提示 old_string 不存在？

这通常是因为 old_string 与配置文件内容不完全一致（包括缩进和换行）。建议：

1. 让 AI 先读取配置文件
2. 提供更多上下文信息
3. 使用 anchor 参数代替 old_string

## 安全提示

::: warning
- AI 助手具有修改配置文件的能力，请谨慎操作
- 建议在修改重要配置前先备份
- 不要将 API Key 分享给他人
- 请使用自己信任的 API 供应商，使用未知的第三方供应商有泄露配置信息的风险
:::
