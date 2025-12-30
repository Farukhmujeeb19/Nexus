// src/components/DocumentChamber.js
import { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import SignaturePad from 'react-signature-canvas';

export default function DocumentChamber() {
  const [files, setFiles] = useState([]);
  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (accepted) => setFiles(accepted),
  });

  return (
    <div>
      <h2>Document Chamber</h2>
      <div {...getRootProps()} className="dropzone">
        <input {...getInputProps()} />
        <p>Drag & drop documents or click to upload</p>
      </div>

      {files.map((file) => (
        <p key={file.name}>{file.name}</p>
      ))}

      <h3>E-Signature</h3>
      <SignaturePad canvasProps={{ width: 400, height: 200, className: 'sigCanvas' }} />
    </div>
  );
}
