
// 获取单个文件预览地址
const getSingleFileUrl = (file) => {
  const url = window.URL.createObjectURL(file);
  file.previewUrl = url;
  window.URL.revokeObjectURL(url);
  return file;
}

// 批量获取文件预览地址
function getFileURL(files) {
  if (Array.isArray(files)) {
    files = files.map(file => {
      return getSingleFileUrl(file);
    });
    return files;
  } else {
    return getSingleFileUrl(files);
  }
}


export default {
  getSingleFileUrl,
  getFileURL,
}