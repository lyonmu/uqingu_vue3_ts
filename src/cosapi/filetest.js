const fs = require("fs");
const dayjs = require("dayjs");

fs.stat(`${__dirname}`, function (err, stats) {
  console.log(`${__dirname}`);

  //Checking for errors
  if (err) {
    console.log(err);
  } else {
    //Logging the stats Object
    console.log(stats);
    console.log("测试对时间的修改");
    console.log(dayjs(stats.mtime).format("YYYY年MM月DD日 HH时mm分ss秒"));
  }
});

/* 
Stats {
  dev: 16777232,                        包含文件的设备的 id。(bigInt 或 number)
  mode: 16877,                          给定文件的文件类型和模式的位域描述。(bigInt 或 number)
  nlink: 4,                             文件的硬链接数。(bigInt 或 number)
  uid: 501,                             文件所有者的用户标识。(bigInt 或 number)
  gid: 20,                              文件所有者的组标识。(bigInt 或 number)
  rdev: 0,                              文件的设备 id 如果是特殊文件。(bigInt 或 number)
  blksize: 4096,                        文件系统输入/输出的块大小。(bigInt 或 number)
  ino: 13372856,                        文件索引节点号。它包含文件的基本信息。(bigInt 或 number)
  size: 128,                            文件的总大小，以字节为单位。(bigInt 或 number)
  blocks: 0,                            分配给给定文件的块数。(bigInt 或 number)
  atimeMs: 1655183440250.4697,          代表文件上次访问时间的时间戳。(bigInt 或 number)
  mtimeMs: 1655183439683.3577,          代表文件上次修改时间的时间戳。(bigInt 或 number)
  ctimeMs: 1655183439683.3577,          表示文件上次更改时间的时间戳，即索引节点更改的时间。(bigInt 或 number)
  birthtimeMs: 1655121253694.1743,      表示文件创建时间的时间戳。(bigInt 或 number)
  atime: 2022-06-14T05:10:40.250Z,      代表文件最后访问时间的 Date 对象。(日期)
  mtime: 2022-06-14T05:10:39.683Z,      代表文件上次修改时间的日期对象。(日期)
  ctime: 2022-06-14T05:10:39.683Z,      代表文件最后更改时间的 Date 对象。(日期)
  birthtime: 2022-06-13T11:54:13.694Z   表示文件创建时间的 Date 对象。(日期)
}
 */
