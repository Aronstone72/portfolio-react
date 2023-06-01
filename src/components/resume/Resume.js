import React, {  useState } from 'react'
import Title from '../layouts/Title';
import Education from './Education';

const Resume = () => {
   const [educationData, setEducationData] = useState(true);
  return (
    <section id="resume" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title title="Year of Passout 2022" des="Education" />
      </div>
      {educationData && <Education />}
    </section>
  );
}

export default Resume;