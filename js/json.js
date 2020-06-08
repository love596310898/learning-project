/* JSON序列化注意事项 */
/**
 * RegExp Error 序列化后是一个空对象（node 10.0.15 环境下）
 * undefined 属性值为在序列化后会被省略掉
 * NaN infinity -infinity 序列化后的值时null
 * Date 序列化后的值是 IOS格式的日期字符串， 反序列化后不能解析为时间对象。
 * 只能够序列化对象的可枚举自有属性
 * 接受第二个参数，类似与对数据库操作时的投影，只序列化/反序列化第二个参数指定的属性list
 */
const obj = {
  err: new Error('测试错误'),
  reg: /\.\s/,
  notFined: undefined,
  nan: NaN,
  max: Infinity,
  min: -Infinity,
  date: new Date(),
  other: '...',
  arr: [new Error('测试错误'), /\.\s/, NaN, Infinity, -Infinity, new Date(), '...'],
};
Object.defineProperty(obj, 'intorate', {
  value: 'intorate',
  configurable: true,
  enumerable: false,
  writable: true,
});
const ojbStr = JSON.stringify(obj);
const extypalObj = JSON.parse(ojbStr);
global.console.log(ojbStr, '\n\n', extypalObj);
