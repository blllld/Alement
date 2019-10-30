import roughjs from 'roughjs/dist/rough.umd';
// 这里导入的是一个{}对象，不知道是什么情况
import roughType from 'roughjs'

export default {
  ...roughjs,
} as typeof roughType;


