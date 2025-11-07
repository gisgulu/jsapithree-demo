# React + Vite

这是一个基于 Vite 和 React 的简单项目模板。

## 开始使用

1. 安装依赖：
```bash
npm install
```

2. 启动开发服务器：
```bash
npm run dev
```

3. 构建生产版本：
```bash
npm run build
```

4. 预览生产构建：
```bash
npm run preview
```

## 环境变量配置

项目使用环境变量来管理敏感信息（如百度地图AK）。请按以下步骤配置：

1. 复制环境变量示例文件：
```bash
cp .env.example .env
```

2. 编辑 `.env` 文件，填入您的百度地图AK值：
```
VITE_BAIDU_MAP_AK=your_actual_ak_here
```

**重要提示：**
- `.env` 文件已添加到 `.gitignore`，不会被提交到版本控制
- 环境变量必须以 `VITE_` 开头才能在客户端代码中访问
- 修改环境变量后需要重启开发服务器才能生效

## 项目结构

```
src/
├── examples/              # 地图示例组件（自动发现）
│   ├── Example1.jsx      # 示例1: 基础地球视图
│   ├── Example2.jsx      # 示例2: 上海区域视图
│   └── Example3.jsx      # 示例3: 广州区域视图
├── pages/                # 页面组件
│   ├── Home.jsx          # 首页（自动列出所有示例）
│   └── Home.css
├── utils/                # 工具函数
│   └── getExamples.js    # 自动发现示例的工具函数
├── App.jsx               # 主应用组件（自动路由配置）
├── main.jsx              # 应用入口文件
└── index.css             # 全局样式
```

## 路由说明

项目使用 React Router 实现多页面路由，**所有示例会自动发现并注册路由**：

- `/` - 首页，自动列出 `examples/` 目录下的所有示例链接
- `/example1` - 自动根据文件名生成的路由（Example1.jsx → /example1）
- `/example2` - 自动根据文件名生成的路由（Example2.jsx → /example2）
- `/example3` - 自动根据文件名生成的路由（Example3.jsx → /example3）

路由路径规则：组件文件名首字母小写（如 `Example1.jsx` → `/example1`）

## 添加新示例

**非常简单！** 只需要一步：

1. 在 `src/examples/` 目录下创建新的示例组件文件（如 `Example4.jsx`）

```jsx
import { useRef, useEffect } from 'react'
import * as mapvthree from '@baidumap/mapv-three';

mapvthree.BaiduMapConfig.ak = import.meta.env.VITE_BAIDU_MAP_AK || '';

function Example4() {
  const containerRef = useRef(null);
  
  useEffect(() => {
    if (!containerRef.current) return;
    const engine = new mapvthree.Engine(containerRef.current, {
      map: {
        center: [120, 30],
        range: 100000,
        pitch: 80,
        projection: 'ECEF',
      },
    });
    return () => {
      if (engine) engine.dispose();
    };
  }, []);

  return (
    <div ref={containerRef} style={{ width: '100%', height: '100vh' }}></div>
  )
}

export default Example4
```

完成！新示例会自动：
- ✅ 在首页显示链接
- ✅ 自动注册路由（`/example4`）
- ✅ 无需修改任何其他文件

## 功能特性

- ⚡️ Vite - 极速的开发体验
- ⚛️ React 18 - 最新的 React 特性
- 🗺️ MapV Three - 百度地图三维可视化
- 🧭 React Router - 多页面路由支持
- 🎨 CSS 样式支持
- 🔥 热重载
- 📦 现代构建工具
