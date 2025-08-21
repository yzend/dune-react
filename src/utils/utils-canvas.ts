/**
 * @description Blob转换File对象
 * @param blobData
 */
export function structureFile(blobData: Blob) {
  const fileType = blobData.type.split("/");
  const ext = fileType[1];
  const file = new window.File([blobData], `tag.${ext}`, {
    type: blobData.type,
  });
  return file;
}

/**
 * @description blobToUrl
 * @param {*} blobData
 */
export function blobToUrl(blobData: Blob) {
  return URL.createObjectURL(blobData);
}

/**
 * @description base64ToBlob
 * @param {*} base64
 */
export function convertBase64ToBlob(base64: string) {
  const base64Arr = base64.split(",");
  let imgType = "";
  let base64String = "";
  if (base64Arr.length > 1) {
    // 如果是图片base64，去掉头信息
    base64String = base64Arr[1];
    imgType = base64Arr[0].substring(
      base64Arr[0].indexOf(":") + 1,
      base64Arr[0].indexOf(";")
    );
  }
  // 将base64解码
  const bytes = atob(base64String);
  const bytesCode = new ArrayBuffer(bytes.length);
  // 转换为类型化数组
  const byteArray = new Uint8Array(bytesCode);
  // 将base64转换为ascii码
  for (let i = 0; i < bytes.length; i++) {
    byteArray[i] = bytes.charCodeAt(i);
  }
  // 生成Blob对象（文件对象）
  return new Blob([bytesCode], { type: imgType });
}

/**
 * @description base64ToUrl
 * @param {*} base64
 */
export function base64ToUrl(base64: string) {
  const blobData = convertBase64ToBlob(base64);
  return blobToUrl(blobData);
}

/**
 * @description base64ToFile
 * @param {*} base64
 */
export function base64ToFile(base64: string) {
  const blobData = convertBase64ToBlob(base64);
  return structureFile(blobData);
}

/**
 * @description blobToBase64
 * @param blob
 */
export function blobToBase64(blob: Blob) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
}
