import React from 'react';
import styles from './fileinput.css';
import { useState } from 'react';

export function FileInput() {
  const [selectedFile, setSelectedFile] = useState(null);
  
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };
  
  const handleRemoveFile = () => {
      setSelectedFile(null);
  };
  return (
    <div className={styles.input_file}>
      <input type="file" onChange={handleFileChange} />
      {selectedFile && (
        <div>
          <span>{selectedFile.name}</span>
          <button  onClick={handleRemoveFile}>+</button>
        </div>
      )}
    </div>
  );
}
