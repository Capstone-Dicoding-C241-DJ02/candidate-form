import Card from '../components/Card';
import InputText from '../components/InputText';
import UploadCV from '../components/UploadCV';
import UploadPicture from '../components/UploadPicture';

const ApplyForm = () => {
  return (
    <Card className="h-[650px] py-5 overflow-y-auto px-6">
      <div className="flex flex-col items-center space-y-10">
        <div className="space-y-5 text-center">
          <UploadPicture />
          <p>Upload Passphoto</p>
        </div>
        <div className="grid grid-cols-2 gap-4 w-full">
          <InputText label={'Nama Lengkap'} />
          <InputText label={'Email'} />
          <InputText label={'No. Telp'} />
          <InputText label={'Linkedin/Portofolio link'} />
        </div>
        <div className="w-full">
          <UploadCV />
        </div>
        <div className="self-end">
          <button className="px-3 py-2 rounded bg-primary-blue text-white">
            Submit
          </button>
        </div>
      </div>
    </Card>
  );
};

export default ApplyForm;
