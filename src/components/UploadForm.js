"use client";
import { useState } from "react";
import UploadIcon from "./UploadIcon";
import axios from "axios";

export default function UploadForm() {
  const [isUploading, setIsUploading] = useState(false);

  async function upload(e) {
    e.preventDefault();
    // console.log(e);
    const files = e.target.files;
    if (files.length > 0) {
      const file = files[0];
      setIsUploading(true);
      const res = await axios.postForm("/api/upload", {
        file,
      });
      setIsUploading(false);
      console.log(res.data);
    }
  }
  return (
    <>
      <div className="text-center">
        {isUploading && (
          <div className="bg-black/90 text-white fixed inset-0 flex items-center">
            <div className="w-full text-center">
              <h2 className="text-4xl mb-4">Uploading....✨</h2>
              <h3 className="text-xl">
                Please wait for the magic to happen 😉
              </h3>
            </div>
          </div>
        )}
        <label className="bg-green-600 rounded-full px-4 py-2 inline-flex gap-2 border border-purple-700/50 cursor-pointer">
          <UploadIcon />
          <span>Choose file</span>
          <input onChange={upload} type="file" className="hidden" />
        </label>
      </div>
    </>
  );
}
