import React, { useRef } from "react";
import html2canvas from "html2canvas";
import toast from "react-hot-toast";

function ImageDownload({ results, color, category, selectedItem, image }) {
  const downloadImageRef = useRef(null);

  const handleDownloadImage = async () => {
    toast.loading("Downloading");
    const element = downloadImageRef.current;
    const canvas = await html2canvas(element, {
      useCORS: true,
      scale: 6, // Increase the scale to improve image quality
    });
    const data = canvas.toDataURL("image/jpg");
    const link = document.createElement("a");

    link.href = data;
    link.download = `${category}-${selectedItem}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    toast.dismiss();
  };

  return (
    <>
      {results && (
        <div className="">
          <div
            className="relative mx-auto drop-shadow-xl   h-[350px] w-[350px] mb-24"
            ref={downloadImageRef}
            id="downloadImage"
          >
            <img
              className="max-w-full object-cover  h-full w-full"
              src={image}
              alt="Background"
            />
            <div className="absolute top-5 left-8  right-0 bottom-0 flex flex-col ">
              
               
                <div className="text-start ">
                  <div className={`text- poppins-semibold ${color}`}>
                    {results.category}
                  </div>
                  <div className={`text-sm poppins-semibold -mt-1  ${color}`}>
                    {results.item}
                  </div>
                
              </div>

              <div className="text-start mt-4 pl-4">
                {results.result.map((result, index) => (
                  <div key={index}>
                    <div className={`text-sm/[14px] poppins-medium ${color}`}>
                      {result.firstPrice ||
                        result.secPrice ||
                        result.thirdPrice}
                    </div>
                    <div className={`text-[10px] mb-2 poppins-light ${color}`}>
                      {result.firstUnit || result.secUnit || result.thirdUnit}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <button
              onClick={handleDownloadImage}
              className="mt-4 px-6 py-2 bg-black text-white font-semibold rounded-md hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-opacity-50"
            >
              Download
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default ImageDownload;
