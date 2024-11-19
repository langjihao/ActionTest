const app = require('./app');
const http = require('http');
const server = http.createServer(app);

// 启动服务器进行测试
server.listen(3000, () => {
  console.log('Test server started on port 3000');
  
  // 测试根路由
  http.get('http://localhost:3000/', (res) => {
    let data = '';
    res.on('data', (chunk) => { data += chunk; });
    res.on('end', () => {
      console.log('Testing /: ', data);
      if (!data.includes('Hello World')) {
        console.error('Root endpoint test failed');
        process.exit(1);
      }
    });
  });

  // 测试 items 路由
  http.get('http://localhost:3000/items/1', (res) => {
    let data = '';
    res.on('data', (chunk) => { data += chunk; });
    res.on('end', () => {
      console.log('Testing /items/1: ', data);
      if (!data.includes('1')) {
        console.error('Items endpoint test failed');
        process.exit(1);
      }
      server.close();
    });
  });
});
