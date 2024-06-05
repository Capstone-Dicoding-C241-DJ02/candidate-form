import {useState} from 'react';
import Card from '../components/Card';
import InputText from '../components/InputText';
import UploadCV from '../components/UploadCV';
import UploadPicture from '../components/UploadPicture';
import {useParams} from 'react-router-dom';
import api from '../utils/api';

const ApplyForm = () => {
  const {id} = useParams();

  const [data, setData] = useState({
    fullname: '',
    email: '',
    phone: '',
    additional_link: '',
    cv: null,
    passphoto: null,
  });

  const handleChange = (e) => {
    setData((prev) => ({...prev, [e.target.name]: e.target.value}));
  };

  const handleFileInput = (type, file) => {
    setData((prev) => ({...prev, [type]: file}));
  };

  const applyJob = async (e) => {
    e.preventDefault();
    // const fields = Object.keys(data);
    // const formData = new FormData();
    // formData.append('fullname', data.fullname);

    // console.log(formData);
    // try {
    //   //   const response = await api().post(
    //   //     `/candidates/apply/jobs/${id}`,
    //   //     formData
    //   //   );
    // } catch (error) {
    //   console.log(error);
    // }
  };

  return (
    <Card className="h-[650px] py-5 overflow-y-auto px-6">
      <form
        onChange={handleChange}
        className="flex flex-col items-center space-y-10"
      >
        <div className="space-y-5 text-center">
          <UploadPicture onFileInput={handleFileInput} />
          <p>Upload Passphoto</p>
        </div>
        <div className="grid grid-cols-2 gap-4 w-full">
          <InputText label={'Nama Lengkap'} name="fullname" />
          <InputText label={'Email'} name="email" />
          <InputText label={'No. Telp'} type="number" name="phone" />
          <InputText
            label={'Linkedin/Portofolio link'}
            name="additional_link"
          />
        </div>
        <div className="w-full">
          <UploadCV onFileInput={handleFileInput} />
        </div>
        <div className="self-end">
          <button
            className="px-3 py-2 rounded bg-primary-blue text-white"
            onClick={applyJob}
          >
            Submit
          </button>
        </div>
      </form>
    </Card>
  );
};

export default ApplyForm;
