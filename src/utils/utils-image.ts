import axios from "axios";
import FileSaver from "file-saver";
import { blobToBase64 } from "./utils-canvas.ts";

/**
 * 下载图片
 * @param url 图片URL
 */
export function downloadImage(url: string) {
  const a = document.createElement("a");
  a.href = url;
  a.target = "_blank";
  a.download = "my-labubu.png";
  a.click();
}

/**
 * @description 获取网络图片
 * @param url
 */
export async function fetchHasOnlineFile(url: string) {
  const res = await fetch(url, {
    method: "head",
  });
  if (res.status === 200) {
    return Number(res.headers.get("Content-Length"));
  } else {
    return false;
  }
}

/**
 * @description 判断文件类型是否有效
 * @param file
 * @param validExtensions
 * @param validMimeTypes
 */
export const isValidFileType = (
  file: File | string,
  validExtensions: string[] = [".jpg", ".jpeg", ".png", ".gif", ".webp"],
  validMimeTypes: string[] = [
    "image/jpeg",
    "image/png",
    "image/gif",
    "image/webp",
  ]
): boolean => {
  if (typeof file === "string") {
    return validExtensions.some((ext) => file.toLowerCase().endsWith(ext));
  } else if (file instanceof File) {
    return validMimeTypes.includes(file.type);
  }
  return false;
};

/**
 * @description 判断文件大小是否有效
 * @param file
 * @param maxSize
 */
export const isValidFileSize = (
  file: File,
  maxSize: number = 10 * 1024 * 1024
) => {
  return file.size <= maxSize;
};

/**
 * @description getBase64 by tempUrl
 * @param tempUrl
 */
export const getBase64Client = async (tempUrl: string) => {
  const response = await fetch(tempUrl);
  const blob = await response.blob();
  const base64 = await blobToBase64(blob);
  return base64 as string;
};

/**
 * @description 下载图片
 * @param url
 */
export const downloadImageClient = async (url: string) => {
  const response = await axios.get(url, { responseType: "blob" });
  const blob = response.data;
  const tempUrl = URL.createObjectURL(blob);
  const uuid = Math.random().toString(36).substring(2);
  FileSaver.saveAs(tempUrl, `${uuid}.png`);
};
