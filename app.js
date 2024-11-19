const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// 根路由
app.get('/', (req, res) => {
  res.json({ message: 'Hello World!' });
});

// 获取项目路由
app.get('/items/:id', (req, res) => {
  res.json({ itemId: req.params.id });
});

// 启动服务器
if (require.main === module) {
  app.listen(port, () => {
    console.log(`API server running on port ${port}`);
  });
}

module.exports = app;
