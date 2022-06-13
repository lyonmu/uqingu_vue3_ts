import COS from "cos-nodejs-sdk-v5";
// var cos = new COS({
//   SecretId: "AKIDxjFUSBfsoTs0qPilW0D9oCNIwJPEm33m",
//   SecretKey: "UhdIgncAfuQfdLlumOjnZ4JHxMVO1NSG",
// });

let AboutMe = "test02";
// cos.getObject(
//   {
//     Bucket: "myimages-1305160569" /* 填入您自己的存储桶，必须字段 */,
//     Region: "ap-guangzhou" /* 存储桶所在地域，例如ap-beijing，必须字段 */,
//     Key: "log/site-about.md" /* 存储在桶里的对象键（例如1.jpg，a/b/test.txt），必须字段 */,
//   },
//   function (err, data) {
//     // AboutMe = data;
//     console.log(err);
//   }
// );

export { AboutMe };
