


function getFileURL(files) {

  // 获取文件预览地址
  const getSingleFileUrl = (file) => {
    const url = window.URL.createObjectURL(file);
    file.previewUrl = url;
    window.URL.revokeObjectURL(url);
    return file;
  }

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
  getFileURL,
}