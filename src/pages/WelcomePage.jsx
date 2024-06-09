import {Link} from 'react-router-dom';
import dicodingLogo from '../assets/dicoding-logo-white.png';

const WelcomePage = () => {
  return (
    <div className="flex flex-col justify-between h-screen bg-homepage bg-no-repeat bg-cover w-full">
      <div className="self-end">
        <img src={dicodingLogo} alt="Dicoding logo" />
      </div>
      <div className="h-full w-[35%] flex flex-col gap-10 justify-center mx-[7rem]">
        <h1 className="text-center">
          Dapatkan pekerjaan impian di Dicoding Jobs
        </h1>
        <Link to={'/jobs'}>
          <button className="p-3 rounded bg-primary-blue w-full text-white">
            Termukan Lowongan yang Tersedia
          </button>
        </Link>
      </div>
      <footer className="bg-primary-blue p-4 text-white text-center">
        © 2024 Dicoding | Dicoding Jobs adalah merek milik PT Presentologics,
        perusahaan induk dari PT Dicoding Akademi Indonesia.
      </footer>
    </div>
  );
};

export default WelcomePage;
