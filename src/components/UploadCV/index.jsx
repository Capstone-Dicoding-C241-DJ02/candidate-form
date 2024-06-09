import {useState} from 'react';
import UploadIcon from '../../icons/UploadIcon';
import Types from 'prop-types';

const UploadCV = ({onFileInput}) => {
  const [filename, setFilename] = useState('');

  const handleFileInput = (e) => {
    const {name} = e.target.files[0];
    const file = e.target.files[0];
    setFilename(name);
    onFileInput('cv', file);
  };

  return (
    <div className="border-2 border-primary-blue rounded w-full h-[200px] relative">
      <div className="flex flex-col justify-center items-center h-full">
        <UploadIcon className={'fill-silver w-[120px]'} />
        <span className="text-heading2 font-medium text-silver">
          {filename ? filename : 'Upload CV dalam format pdf (maksimal 2 MB)'}
        </span>
      </div>
      <input
        onChange={handleFileInput}
        type="file"
        accept=".pdf"
        className="absolute h-full w-full opacity-0 top-0"
      />
    </div>
  );
};

UploadCV.propTypes = {
  onFileInput: Types.func,
};

export default UploadCV;
