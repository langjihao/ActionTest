# Simple Node.js API

这是一个使用 Node.js 和 Express 构建的简单 API 示例。

## API 端点

- `GET /`: 返回欢迎消息
  ```json
  { 
    "message": "Hello World!",
    "environment": "development",
    "port": 3000
  }
  ```

- `GET /items/:id`: 返回指定 ID 的项目
  ```json
  { "itemId": "123" }
  ```

## 环境变量

项目支持以下环境变量：

- `PORT`: 服务器端口号（默认：3000）
- `NODE_ENV`: 运行环境（development/production，默认：development）

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
   # 使用默认端口 (3000)
   npm start

   # 或指定自定义端口
   PORT=8080 npm start
   ```

4. 测试 API：
   ```bash
   # 使用默认端口
   curl http://localhost:3000/

   # 使用自定义端口
   curl http://localhost:8080/

   # 测试 items 路由
   curl http://localhost:3000/items/123
   ```

## 自动化测试

项目使用 GitHub Actions 进行自动化测试。每次推送代码或创建 Pull Request 时，都会：

1. 安装依赖
2. 运行单元测试
3. 启动服务器并测试 API 端点

你可以在 GitHub 的 Actions 标签页查看测试结果。

## 部署

这是一个纯后端 API 服务，你可以将它部署到任何支持 Node.js 的平台。大多数平台会自动设置 `PORT` 环境变量：

- Heroku: 自动设置 PORT
- DigitalOcean App Platform: 自动设置 PORT
- AWS Elastic Beanstalk: 自动设置 PORT
- Azure App Service: 自动设置 PORT
- Google Cloud Run: 自动设置 PORT

部署时无需手动指定端口，平台会自动处理。例如：

1. Heroku 部署：
   ```bash
   # Heroku 会自动设置 PORT 和 NODE_ENV
   heroku create
   git push heroku main
   ```

2. Docker 部署：
   ```bash
   # Dockerfile 会使用环境变量
   docker build -t my-api .
   docker run -p 80:3000 -e PORT=3000 my-api
   ```

3. PM2 部署：
   ```bash
   # 使用环境变量启动
   PORT=80 pm2 start app.js
   ```
