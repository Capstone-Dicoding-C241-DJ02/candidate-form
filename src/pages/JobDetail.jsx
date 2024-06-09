import {useCallback, useEffect, useState} from 'react';
import Card from '../components/Card';
import JobHeader from '../components/JobHeader';
import parser from 'html-react-parser';
import {useParams} from 'react-router-dom';
import api from '../utils/api';

const JobDetail = () => {
  const {id} = useParams();
  const [job, setJob] = useState(null);

  const getJobDetail = useCallback(async () => {
    const {data} = await api().get(`/jobs/${id}`);

    return data.data.job;
  }, [id]);

  useEffect(() => {
    getJobDetail().then((data) => setJob(data));
  }, [id, getJobDetail]);

  return (
    <div className="space-y-5 w-full">
      <JobHeader
        id={job?.id}
        title={job?.title}
        logo={job?.logo}
        sector={job?.business_sector}
        city={job?.city}
      />
      <Card className="h-[517px] p-10 overflow-y-auto bg-white">
        <div className="mt-5">{parser(job?.desc ? job.desc : '')}</div>
      </Card>
    </div>
  );
};

export default JobDetail;
