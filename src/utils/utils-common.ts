/**
 * @description 过滤对象中的空值
 * @param obj 要过滤的对象
 * @returns 过滤后的对象
 */
export function filterEmptyValues(obj: Record<string, any>) {
  if (!obj || typeof obj !== "object") {
    return {};
  }
  const filtered: Record<string, any> = {};
  Object.entries(obj).forEach(([key, value]) => {
    if (value !== "" && value !== null && value !== undefined) {
      filtered[key] = value;
    }
  });

  return filtered;
}
