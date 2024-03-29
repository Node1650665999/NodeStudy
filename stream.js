
/*
*  输入流
* */
/*var fs = require("fs");
var data = '';

// 创建可读流
var readerStream = fs.createReadStream('test.txt');

// 设置编码为utf8
readerStream.setEncoding('UTF8');

// 处理流事件 --> data, end, and error
readerStream.on('data', function(chunk){
    data += chunk;
    console.log(data);
});

readerStream.on('end',function(){
    console.log(data);
});

readerStream.on('error', function(err){
    console.log(err.stack);
});

console.log("程序执行完毕");*/

    /*
    * 输出流
    *
    * */
    var fs = require("fs");
    var data = 'W3Cschool教程官网地址：www.w3cschool.cn';

    // 创建一个可以写入的流，写入到文件 output.txt 中
    var writerStream = fs.createWriteStream('output.txt');

    // 使用 utf8 编码写入数据
    // writerStream.write(data,'UTF8');

    // 标记文件末尾
    writerStream.end('abc');

    // 处理流事件 --> data, end, and error
    writerStream.on('finish', function() {
        console.log("写入完成。");
    });

    writerStream.on('error', function(err){
        console.log(err.stack);
    });

    console.log("程序执行完毕");

    /*
    *   管道流
    * */

    var fs = require("fs");
    // 创建一个可读流
    var readerStream = fs.createReadStream('output.txt');
    // 创建一个可写流
    var writerStream = fs.createWriteStream('test.txt');
    // 管道读写操作
    readerStream.pipe(writerStream); //output.txt => test.txt
    console.log("程序执行完毕");

    /*
    * 链式流--压缩文件
    *
    * */
    var fs = require("fs");
    var zlib = require('zlib');

    // 压缩 input.txt 文件为 input.txt.gz
    fs.createReadStream('output.txt')
        .pipe(zlib.createGzip())
        .pipe(fs.createWriteStream('input.txt.gz'));

    console.log("文件压缩完成。");

/*
* 链式流--解压文件
*
* */
var fs   = require("fs");
var zlib = require('zlib');
// 解压 input.txt.gz 文件为 output.txt
fs.createReadStream('input.txt.gz')
    .pipe(zlib.createGunzip())
    .pipe(fs.createWriteStream('output.txt'));

console.log("文件解压完成。");
