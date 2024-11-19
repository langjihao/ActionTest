# Simple Node.js API

这是一个使用 Node.js 和 Express 构建的简单 API 示例。

## API 端点

- `/`: 返回 Hello World 消息
- `/items/:id`: 返回指定的 item ID

## 本地运行

1. 克隆仓库：
   ```bash
   git clone [你的仓库URL]
   cd [仓库名称]
   ```

2. 安装依赖：
   ```bash
   npm install
   ```

3. 运行服务器：
   ```bash
   npm start
   ```

4. 访问 API：
   - http://localhost:3000/
   - http://localhost:3000/items/1

## GitHub Actions

这个项目使用 GitHub Actions 进行自动化测试和部署：

1. 当代码推送到 main 分支时，会自动：
   - 运行测试
   - 部署到 GitHub Pages

2. 你可以在 GitHub 的 Actions 标签页查看构建和部署状态

## 在线访问

API 部署在 GitHub Pages 上，你可以通过以下地址访问：
- https://[你的用户名].github.io/[仓库名]/
