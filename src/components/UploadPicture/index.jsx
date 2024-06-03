import {useState} from 'react';
import person from '../../assets/person.png';
import AddIcon from '../../icons/AddIcon';

const UploadPicture = () => {
  const [fileUrl, setFileUrl] = useState(person);

  const onFileInput = (e) => {
    const file = e.target.files[0];
    const newURL = URL.createObjectURL(file);

    setFileUrl(newURL);
  };

  return (
    <div className="relative w-fit">
      <div className="relative">
        <div className="w-[150px] h-[150px] rounded-full border-2 border-primary-blue bg-slate-500 overflow-clip">
          <img src={fileUrl} alt="avatar" className="object-cover mx-auto" />
          <div className="absolute -bottom-4 inset-x-[30%] bg-white w-fit p-1 rounded-full">
            <AddIcon className={'fill-primary-blue w-[50px]'} />
          </div>
        </div>
      </div>
      <input
        onChange={onFileInput}
        type="file"
        accept=".png,.jpg, jpeg"
        className="absolute inset-0 h-full w-fit opacity-0 cursor-pointer"
      />
    </div>
  );
};

export default UploadPicture;
