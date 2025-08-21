import { filterEmptyValues } from "./utils-common.ts";

/**
 * @description 将对象转换为URL参数
 * @param url 基础URL
 * @param params 参数对象
 * @returns 带参数的完整URL
 */
export function getUrlWithParams(
  url: string,
  params: Record<string, any>
): string {
  if (!params || Object.keys(params).length === 0) {
    return url;
  }

  const urlObj = new URL(url, window.location.origin);

  Object.entries(filterEmptyValues(params)).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== "") {
      if (Array.isArray(value)) {
        // 处理数组参数
        value.forEach((item) => {
          urlObj.searchParams.append(key, String(item));
        });
      } else {
        // 处理普通参数
        urlObj.searchParams.set(key, String(value));
      }
    }
  });

  return urlObj.toString();
}

/**
 * @description 大数字格式化工具函数
 * @param num 要格式化的数字
 * @param format 格式化配置
 * @returns 格式化后的字符串
 */
export function formatLargeNumber(
  num: number,
  format: { unit?: number; unitCN?: string } = {}
): string {
  const { unit = 10000, unitCN = "万" } = format;

  if (num < unit) {
    return `${unit}+`;
  }

  const result = Math.floor(num / unit);
  return `${result}${unitCN}+`;
}
