# 🔍 X Search Helper

一款 Chrome 浏览器插件，帮助你快速执行 X (Twitter) 高级搜索，一键发现中文圈、日区、全球热门内容。

![Preview](https://img.shields.io/badge/Chrome-Extension-blue?logo=googlechrome)
![Version](https://img.shields.io/badge/version-1.0.0-green)
![License](https://img.shields.io/badge/license-MIT-orange)

## ✨ 功能特性

- **🇨🇳 中文圈** - 4小时热议 / 万赞神贴 / AI爆款 / 热门图片
- **🇯🇵 日区** - 刚起飞内容 / 二次元动向 / 投资理财
- **🌍 全球** - AI顶级神贴 / 疯传视频 / 金融观点 / 万赞干货

## 🚀 安装方法

### 方式一：开发者模式安装

1. 下载或克隆本仓库
   ```bash
   git clone https://github.com/shayangchinese/x-search-helper.git
   ```

2. 打开 Chrome，访问 `chrome://extensions/`

3. 开启右上角 **"开发者模式"**

4. 点击 **"加载已解压的扩展程序"**

5. 选择 `x-search-helper` 文件夹

6. 完成！点击工具栏插件图标即可使用

## 📖 使用说明

1. 点击浏览器工具栏中的插件图标
2. 选择区域标签（中文圈 / 日区 / 全球）
3. 点击任意搜索卡片，自动跳转到 X 搜索结果
4. 使用顶部搜索框快速筛选搜索项

## 🔧 预设搜索列表

### 中文圈
| 搜索名称 | 搜索语法 |
|---------|---------|
| 4小时热议 | `lang:zh-cn min_faves:300 within_time:4h` |
| 万赞神贴 | `lang:zh-cn min_faves:10000 -is:retweet` |
| AI爆款 | `"AI" OR "提示词" OR "大模型" lang:zh-cn min_faves:500` |
| 热门图片 | `filter:images lang:zh-cn min_faves:500 within_time:12h` |

### 日区
| 搜索名称 | 搜索语法 |
|---------|---------|
| 1小时起飞 | `lang:ja min_faves:500 within_time:1h -is:retweet` |
| 热门图片 | `lang:ja min_faves:2000 filter:images within_time:4h` |
| 二次元 | `#ポケモン OR #イラスト lang:ja min_faves:5000 within_time:24h` |

### 全球
| 搜索名称 | 搜索语法 |
|---------|---------|
| AI神贴 | `"AI" OR "ChatGPT" lang:en min_faves:5000 within_time:12h` |
| 疯传视频 | `lang:en min_faves:1000 filter:native_video within_time:4h` |
| 万赞干货 | `lang:en min_faves:10000 -filter:links within_time:12h` |

## 📁 项目结构

```
x-search-helper/
├── manifest.json    # 插件配置文件
├── popup.html       # 弹出窗口 HTML
├── popup.css        # 样式文件
├── popup.js         # 交互逻辑
├── icons/           # 插件图标
│   ├── icon16.png
│   ├── icon48.png
│   └── icon128.png
└── README.md        # 说明文档
```

## 🛠️ 技术栈

- Chrome Extension Manifest V3
- Vanilla JavaScript
- CSS3 (Gradient, Animation)

## 📄 License

MIT License - 随意使用和修改

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！
