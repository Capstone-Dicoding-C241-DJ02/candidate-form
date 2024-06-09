import {useEffect, useState} from 'react';
import Card from '../components/Card';
import InputText from '../components/InputText';
import UploadCV from '../components/UploadCV';
import UploadPicture from '../components/UploadPicture';
import {useNavigate, useParams} from 'react-router-dom';
import api from '../utils/api';
import {toast} from 'react-toastify';

const ApplyForm = () => {
  const {id} = useParams();
  const navigate = useNavigate();

  const [data, setData] = useState({
    fullname: '',
    email: '',
    phone: '',
    title: '',
    additional_link: '',
    cv: null,
    passphoto: null,
  });

  useEffect(() => {
    return () => {
      setData({
        fullname: '',
        email: '',
        phone: '',
        title: '',
        additional_link: '',
        cv: null,
        passphoto: null,
      });
    };
  }, []);

  const handleChange = (e) => {
    setData((prev) => ({...prev, [e.target.name]: e.target.value}));
  };

  const handleFileInput = (type, file) => {
    setData((prev) => ({...prev, [type]: file}));
  };

  const applyJob = async (e) => {
    e.preventDefault();

    const fields = Object.keys(data);
    const formData = new FormData();
    fields.forEach((field) => {
      if (field) formData.append(field, data[field]);
    });

    try {
      await api().post(`/candidates/apply/jobs/${id}`, formData);
      toast.success('Berhasil melamar pekerjaan', {
        hideProgressBar: true,
        className: 'border border-success text-success',
        style: {background: 'rgb(220, 252, 231)'},
      });
      navigate('/jobs');
    } catch (error) {
      toast.error(error.response.data.message, {
        hideProgressBar: true,
        className: 'border border-danger text-danger',
        style: {background: 'rgb(254, 202, 202)'},
      });
    }
  };

  return (
    <Card className="h-[650px] py-5 overflow-y-auto px-6 w-full bg-white">
      <form
        onChange={handleChange}
        className="flex flex-col items-center space-y-10"
      >
        <div className="space-y-3 text-center flex flex-col items-center">
          <UploadPicture onFileInput={handleFileInput} />
          <span className="text-silver">
            Unggah foto dalam format JPG/JPEG/PNG (maksimal 2 MB)
          </span>
        </div>
        <div className="w-full space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <InputText
              label={'Nama Lengkap'}
              name="fullname"
              id={'fullname'}
              placeholder={'John doe'}
            />
            <InputText
              label={'Email'}
              type={'email'}
              name="email"
              id={'email'}
              placeholder={'johndoe@mail.com'}
            />
          </div>
          <div className="grid md:grid-cols-3 gap-3">
            <InputText
              label={'No. Telp'}
              type="number"
              name="phone"
              id={'phone'}
              placeholder={'08xxxxxxxx'}
            />
            <InputText
              label={'Title'}
              type="text"
              name="title"
              id={'title'}
              placeholder={'Engineer'}
            />
            <InputText
              label={'Linkedin/Portofolio link'}
              name="additional_link"
              id={'additional_link'}
              placeholder={'https://yourportofolio.com'}
            />
          </div>
        </div>
        <div className="w-full">
          <UploadCV onFileInput={handleFileInput} />
        </div>
        <div className="self-end">
          <button
            className="px-3 py-2 rounded bg-primary-blue text-white w-[200px]"
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
