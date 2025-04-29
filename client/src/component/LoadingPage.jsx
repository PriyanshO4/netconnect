import { LoaderCircle } from "lucide-react";
import React from "react";

const LoadingPage = () => {
  return (
    <div className="fixed inset-0 items-center justify-center bg-gray-400 bg-opacity-50 flex z-50">
      <LoaderCircle className="animate-spin text-white" size={48} />
    </div>
  );
};

export default LoadingPage;
