import Card from '../components/Card';
import JobHeader from '../components/JobHeader';
import parser from 'html-react-parser';

const html =
  "<p><strong>Accenture</strong>&nbsp;is an equal opportunities employer and welcomes applications from all sections of society. You will also have opportunities to hone your functional skills and expertise in an area of specialization.</p><h2><strong>Responsibilities</strong></h2><ul><li>Understand our customers' core business objectives and build end-to-end data centric solutions to address them.</li><li>Collaborate with technical business analyst, to understand business requirements, data, and optimize data pipeline performance.</li><li>Build solutions in big data or data management tools meeting projects’ requirements.</li><li>Construct code with good coding standard and practices to ensure high quality and minimum risks.</li><li>Closely working with project manager and technical leads to provide regular status reporting and support them to identify blockers for quick resolution.</li></ul><p><br></p><h2><strong>Minimum Qualifications</strong></h2><ul><li>Bachelor's degree, preferably in computer science/ information system/ industrial engineering</li><li>Experienced with Cloud Technologies (Data Lake, Azure, Google, AWS etc.) or experience with open-source technologies (Spark, Kafka, Presto, Hive, Cassandra etc.)</li><li>Experienced with SQL and/or NOSQL databases.</li><li>Production experience in building real-time analytics applications.</li><li>Experienced in both batch and stream processing technologies.</li><li>Experienced with 2 of 3 - Java, PL/SQL, and Python programming languages.</li><li>Machine learning experience with Spark or similar</li><li>Certified Data Engineers or Solution Architect in 1 or more Cloud Technologies (AWS, GCP, Azure)</li><li>Ability to manage numerous requests concurrently and be able to prioritize and deliver.</li></ul>";

const JobDetail = () => {
  return (
    <div className="space-y-5">
      <JobHeader />
      <Card className="h-[517px] p-10 overflow-y-auto">
        <h2>Deskripsi Pekerjaan</h2>
        <div className="mt-5">{parser(html)}</div>
      </Card>
    </div>
  );
};

export default JobDetail;
