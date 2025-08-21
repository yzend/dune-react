import { customAlphabet } from "nanoid";

// 定义字符集，包括大写字母、小写字母和数字
const alphabet =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

// 创建一个自定义的生成器，指定生成字符串的长度
export const nanoid = customAlphabet(alphabet, 16);
