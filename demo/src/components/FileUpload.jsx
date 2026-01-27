import React, { useState } from "react";
import api from "./../api/axiosInstance";
const FileUpload = () => {
  const [file, setFile] = useState(null);
  const formData = new FormData();
  formData.append("avatar", file);
  api.post("/upload", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return <div></div>;
};

export default FileUpload;
