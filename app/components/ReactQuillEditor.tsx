"use client"
import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import Quill's styles
import './ReactQuillEditor.module.css';

const modules = {
   toolbar: [
      [{ header: [1, 2, 3, 4, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ size: ["small", false, "large", "huge"] }], // 字号大小
      [{ color: [] }, { background: [] }],
      [
         { list: "ordered" },
         { list: "bullet" },
         { indent: "-1" },
         { indent: "+1" },
      ],
      ["link", "image", "video"],
      ["clean"],
   ],
};

const formats = [
   "header",
   "bold",
   "italic",
   "underline",
   "strike",
   "size",
   "color",
   "background",
   "blockquote",
   "list",
   "bullet",
   "indent",
   "link",
   "image",
   "video",
];


const ReactQuillEditor = () => {
   const [value, setValue] = useState('');

   return (
      <div className='px-96 mt-12'>
         <h1>React Quill Editor Example</h1>
         <div>
            <ReactQuill modules={modules}
               formats={formats} theme="snow" value={value} onChange={setValue} />
         </div>
      </div>
   );
};

export default ReactQuillEditor;
