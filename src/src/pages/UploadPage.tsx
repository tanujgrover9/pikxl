import { useCallback } from "react";
import { useDropzone, type FileWithPath } from "react-dropzone";
import { FiUploadCloud } from "react-icons/fi";
import { motion } from "framer-motion";

export default function UploadPage() {
  const onDrop = useCallback((acceptedFiles: FileWithPath[]) => {
    console.log("Uploaded files:", acceptedFiles);
    // TODO: send files to backend / API
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div className="relative min-h-screen flex items-center justify-center px-6 py-16 bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden">
      {/* Glow background circles */}
      <motion.div
        className="absolute w-96 h-96 bg-purple-500/20 blur-3xl rounded-full -top-10 -left-20"
        animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
      />
      <motion.div
        className="absolute w-80 h-80 bg-pink-500/20 blur-3xl rounded-full bottom-0 -right-20"
        animate={{ y: [0, -30, 0], x: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      {/* Upload card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full max-w-3xl p-10 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-xl text-center"
      >
        <h1 className="text-4xl font-extrabold mb-4 bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
          Upload Your AI Creations
        </h1>
        <p className="text-gray-400 mb-8">
          Drag & drop your AI-generated images, videos, or files below.
        </p>

        {/* Dropzone */}
      {/* Dropzone */}
<div
  {...getRootProps()} // use plain <div> for dropzone
  className={`border-2 border-dashed rounded-2xl p-16 cursor-pointer transition-all duration-300 ${
    isDragActive
      ? "border-pink-500/70 bg-pink-500/10"
      : "border-white/20 hover:border-pink-400/60 hover:bg-white/5"
  }`}
>
  <input {...getInputProps()} />
  <motion.div
    whileHover={{ scale: 1.02 }} // ✅ animation only here
    animate={{ y: [0, -8, 0] }}
    transition={{ duration: 1.5, repeat: Infinity }}
  >
    <FiUploadCloud size={60} className="mx-auto mb-4 text-pink-400" />
  </motion.div>
  {isDragActive ? (
    <p className="text-pink-400 font-semibold">Drop files here...</p>
  ) : (
    <p className="text-gray-400">
      <span className="text-white font-medium">Click</span> or drag & drop to upload
    </p>
  )}
</div>


        <p className="mt-6 text-xs text-gray-500">
          Supported formats: JPG, PNG, MP4, GIF, WebM • Max size: 50MB
        </p>
      </motion.div>
    </div>
  );
}
