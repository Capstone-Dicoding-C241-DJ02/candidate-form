import {Outlet, useParams} from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Card from '../components/Card';

const Jobs = () => {
  const {id} = useParams();
  return (
    <div className="flex items-center p-4 gap-5">
      <Sidebar />
      {id ? (
        <Outlet />
      ) : (
        <Card
          className={
            'bg-white h-[650px] rounded shadow-primary w-full grid place-content-center'
          }
        >
          Belum ada lowongan yang dipilih
        </Card>
      )}
    </div>
  );
};

export default Jobs;
