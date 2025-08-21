import dayjs from "dayjs";

/**
 * 计算距离现在多少时间
 * @param date 目标日期
 * @param options 配置选项
 * @returns 格式化的时间差字符串
 */
export function timeAgo(
  date: string | Date,
  options: {
    lang?: "zh" | "en";
    showSeconds?: boolean;
    showZero?: boolean;
  } = {}
): string {
  const { lang = "zh", showSeconds = false, showZero = false } = options;

  const now = new Date();
  const targetDate = typeof date === "string" ? new Date(date) : date;
  const diffInMs = now.getTime() - targetDate.getTime();

  // 如果日期无效或未来时间
  if (isNaN(diffInMs) || diffInMs < 0) {
    return lang === "zh" ? "刚刚" : "just now";
  }

  const diffInSeconds = Math.floor(diffInMs / 1000);
  const diffInMinutes = Math.floor(diffInSeconds / 60);
  const diffInHours = Math.floor(diffInMinutes / 60);
  const diffInDays = Math.floor(diffInHours / 24);
  const diffInWeeks = Math.floor(diffInDays / 7);
  const diffInMonths = Math.floor(diffInDays / 30);
  const diffInYears = Math.floor(diffInDays / 365);

  // 中文
  if (lang === "zh") {
    if (diffInYears > 0) {
      return `${diffInYears}年前`;
    }
    if (diffInMonths > 0) {
      return `${diffInMonths}个月前`;
    }
    if (diffInWeeks > 0) {
      return `${diffInWeeks}周前`;
    }
    if (diffInDays > 0) {
      return `${diffInDays}天前`;
    }
    if (diffInHours > 0) {
      return `${diffInHours}小时前`;
    }
    if (diffInMinutes > 0) {
      return `${diffInMinutes}分钟前`;
    }
    if (showSeconds && diffInSeconds > 0) {
      return `${diffInSeconds}秒前`;
    }
    return showZero ? "0秒前" : "刚刚";
  }

  // 英文
  else {
    if (diffInYears > 0) {
      return `${diffInYears} year${diffInYears > 1 ? "s" : ""} ago`;
    }
    if (diffInMonths > 0) {
      return `${diffInMonths} month${diffInMonths > 1 ? "s" : ""} ago`;
    }
    if (diffInWeeks > 0) {
      return `${diffInWeeks} week${diffInWeeks > 1 ? "s" : ""} ago`;
    }
    if (diffInDays > 0) {
      return `${diffInDays} day${diffInDays > 1 ? "s" : ""} ago`;
    }
    if (diffInHours > 0) {
      return `${diffInHours} hour${diffInHours > 1 ? "s" : ""} ago`;
    }
    if (diffInMinutes > 0) {
      return `${diffInMinutes} minute${diffInMinutes > 1 ? "s" : ""} ago`;
    }
    if (showSeconds && diffInSeconds > 0) {
      return `${diffInSeconds} second${diffInSeconds > 1 ? "s" : ""} ago`;
    }
    return showZero ? "0 seconds ago" : "just now";
  }
}

/**
 * 格式化日期为相对时间（简化版）
 * @param date 目标日期
 * @returns 格式化的时间差字符串
 */
export function formatTimeAgo(date: string | Date): string {
  return timeAgo(date, { lang: "en" });
}

/**
 * 获取详细的时间信息
 * @param date 目标日期
 * @returns 包含各种时间单位的对象
 */
export function getTimeDetails(date: string | Date) {
  const now = new Date();
  const targetDate = typeof date === "string" ? new Date(date) : date;
  const diffInMs = now.getTime() - targetDate.getTime();

  if (isNaN(diffInMs) || diffInMs < 0) {
    return {
      seconds: 0,
      minutes: 0,
      hours: 0,
      days: 0,
      weeks: 0,
      months: 0,
      years: 0,
      isValid: false,
    };
  }

  return {
    seconds: Math.floor(diffInMs / 1000),
    minutes: Math.floor(diffInMs / (1000 * 60)),
    hours: Math.floor(diffInMs / (1000 * 60 * 60)),
    days: Math.floor(diffInMs / (1000 * 60 * 60 * 24)),
    weeks: Math.floor(diffInMs / (1000 * 60 * 60 * 24 * 7)),
    months: Math.floor(diffInMs / (1000 * 60 * 60 * 24 * 30)),
    years: Math.floor(diffInMs / (1000 * 60 * 60 * 24 * 365)),
    isValid: true,
  };
}

/**
 * 获取时间戳
 * @returns 时间戳
 */
export const getTimestamp = () => {
  const time = Date.parse(new Date().toUTCString());
  return time / 1000;
};

/**
 * 睡眠
 * @param ms 睡眠时间
 * @returns 睡眠后的Promise
 */
export const sleep = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

/**
 * 格式化时间
 * @param time 时间
 * @returns 格式化后的时间
 */
export const formatTimeString = (time: Date) => {
  return dayjs(time).format("YYYY-MM-DD HH:mm:ss");
};
