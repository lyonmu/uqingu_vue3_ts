var COS = require("cos-nodejs-sdk-v5");
var dayjs = require("dayjs");
var cos = new COS({
  SecretId: "AKIDxjFUSBfsoTs0qPilW0D9oCNIwJPEm33m",
  SecretKey: "UhdIgncAfuQfdLlumOjnZ4JHxMVO1NSG",
});

cos.getBucket(
  {
    Bucket: "myimages-1305160569" /* 必须 */,
    Region: "ap-guangzhou" /* 必须 */,
    Prefix: "log/site-",
    Delimiter: "/" /* 非必须 */,
  },
  function (err, data) {
    console.log(err || data.Contents);
    console.log(
      dayjs(ISO8601DateStr2Date(data.Contents[0].LastModified)).format(
        "YYYY年MM月DD日 HH时mm分ss秒"
      )
    );
    console.log(
      dayjs(ISO8601DateStr2Date(data.Contents[1].LastModified)).format(
        "YYYY年MM月DD日 HH时mm分ss秒"
      )
    );
  }
);

function ISO8601DateStr2Date(string) {
  var regexp =
    "([0-9]{4})(-([0-9]{2})(-([0-9]{2})" +
    "(T([0-9]{2}):([0-9]{2})(:([0-9]{2})(.([0-9]+))?)?" +
    "(Z|(([-+])([0-9]{2}):([0-9]{2})))?)?)?)?";
  if (string) {
    var d = string.match(new RegExp(regexp));
    var offset = 0;
    var date = new Date(d[1], 0, 1);

    if (d[3]) {
      date.setMonth(d[3] - 1);
    }
    if (d[5]) {
      date.setDate(d[5]);
    }
    if (d[7]) {
      date.setHours(d[7]);
    }
    if (d[8]) {
      date.setMinutes(d[8]);
    }
    if (d[10]) {
      date.setSeconds(d[10]);
    }
    if (d[12]) {
      date.setMilliseconds(Number("0." + d[12]) * 1000);
    }
    if (d[14]) {
      offset = Number(d[16]) * 60 + Number(d[17]);
      offset *= d[15] == "-" ? 1 : -1;
    }
    offset -= date.getTimezoneOffset();
    var time = Number(date) + offset * 60 * 1000;
    return time;
  } else {
    return null;
  }
}
