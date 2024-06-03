import {useState} from 'react';
import UploadIcon from '../../icons/UploadIcon';

const UploadCV = () => {
  const [filename, setFilename] = useState('');
  const onFileInput = (e) => {
    const {name} = e.target.files[0];
    setFilename(name);
  };

  return (
    <div className="border-2 border-primary-blue rounded w-full h-[200px] relative">
      <div className="flex flex-col justify-center items-center h-full">
        <UploadIcon className={'fill-primary-blue w-[120px]'} />
        <span className="text-heading2 font-medium text-primary-blue">
          {filename ? filename : 'Upload CV'}
        </span>
      </div>
      <input
        onChange={onFileInput}
        type="file"
        accept=".pdf"
        className="absolute h-full w-full opacity-0 top-0"
      />
    </div>
  );
};

export default UploadCV;
