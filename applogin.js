const express = require('express');
const app = express();
const port = 3000;
app.get('/',(req,res) => {
	res.send('Xin moi chuyen gia dang nhap:');
});
app.listen(port,() => {
	console.log(`App listen on port ${port}`)
});
