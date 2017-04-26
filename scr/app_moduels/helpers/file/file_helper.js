exports.getFileName = function (full_path) {
    file_name = full_path.slice(full_path.lastIndexOf("/")+1);
    return file_name.substring(0, file_name.lastIndexOf("."));

};

exports.getFileNameWithExt = function (full_path) {
    return full_path.slice(full_path.length + 1);
};