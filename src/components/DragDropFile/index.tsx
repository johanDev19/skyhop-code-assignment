import { useState } from "react";
import { DocumentTextIcon, PhotoIcon } from "@heroicons/react/20/solid";

import Button from "./../UI/Button";
import Divider from "./../UI/Divider";
import Progress from "./../UI/Progress";

function DragDropFile(): JSX.Element {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [progress, setProgress] = useState<number>(0);
  const [isFileDragOver, setIsFileDragOver] = useState<boolean>(false);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      setSelectedFile(file);
      handleUpload();
    }
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    if (event.dataTransfer.files && event.dataTransfer.files.length > 0) {
      const file = event.dataTransfer.files[0];
      setSelectedFile(file);
      handleUpload();
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsFileDragOver(true);
  };

  const handleUpload = () => {
    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += 33.3;
      setProgress(Math.min(currentProgress, 100));
      if (currentProgress >= 100) {
        clearInterval(interval);
      }
    }, 1000);
  };

  return (
    <div>
      <div
        onDrop={handleDrop}
        onDragLeave={() => setIsFileDragOver(false)}
        onDragOver={handleDragOver}
        className="border-2 border-solid border-gray-200 rounded-lg p-4"
      >
        <div
          className={`border-2 min-h-[150px] border-dashed  p-4 mb-4 flex justify-center border-gray-200 flex-col items-center ${
            isFileDragOver ? "bg-gray-200 border-gray-400" : ""
          }`}
        >
          <DocumentTextIcon className="w-10 h-10 text-orange-400 mb-2" />
          <input
            type="file"
            onChange={handleFileChange}
            style={{ display: "none" }}
          />
          <p>
            Drag & Drop Here Or <b>Browse</b>
          </p>
        </div>
        <div className="flex justify-center">
          <Button
            type="primary"
            onClick={() => {
              const fileInput = document?.querySelector(
                'input[type="file"]'
              ) as HTMLInputElement;

              if (fileInput) {
                fileInput.click();
              }
            }}
          >
            Upload Manifest
          </Button>
        </div>
      </div>
      {selectedFile && (
        <>
          <Divider className="my-4" />
          <div className="px-3 flex gap-4 items-center">
            <PhotoIcon className="w-6 text-orange-400" />
            <div className="w-full">
              <div className="flex justify-between w-full">
                <p>{selectedFile?.name}</p>
                <span>
                  {(selectedFile?.size / (1024 * 1024)).toFixed(2)} MB
                </span>
              </div>
              <Progress progress={progress} />
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default DragDropFile;
