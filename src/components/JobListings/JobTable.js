import React, { useState, useEffect, useMemo } from "react";
import {
  StyledButton,
  Card,
  SecHeader,
} from "../../common/commonStyle"
import {
  JobType,
  SalarySection,
  JobSection,
  SkillsSection,
  JobTitle,
  JobCompany,
} from "../Employer/Employer.style";
import debounce from 'lodash.debounce';

import { JobInput } from "./JobTable.style";
import { jobData } from "./JobData";

const JobTable = () => {
  const [jobslist, setJobslist] = useState([]);
  const [searchText, setSearchText] = useState("");
  //console.log(jobslist);
  const handleTextSearch = (e) => {
    setSearchText(e.target.value);
  }

  const debouncedTextSearch = useMemo(() =>  debounce(handleTextSearch, 600), []);

  useEffect(() => {
    const filteredData = jobData.filter((job) =>
      job.jobtitle.toLowerCase().includes(searchText.toLowerCase())
    );
    setJobslist(filteredData);
  }, [searchText]);

  useEffect(()=>{
    setJobslist(jobData);
  },[])

  return (
    <div style={{padding:"10px"}}>
    
    <h1><span>Profile: </span>Neladri Roy</h1>
      <div style={{marginTop:"25px"}}>
      <SecHeader>
       
        <JobInput
          placeholder="Search Jobs"
          onChange={debouncedTextSearch}
        />
         
      </SecHeader>
      </div>
      <div>
        {jobslist?.map((job) => (
          <Card key={job.jobid}>
            <JobSection>
              <JobTitle> {`${job.jobtitle}`}</JobTitle>
              <JobCompany>{`${job.company}`}</JobCompany>

              <SkillsSection> {`${job.skills}`}</SkillsSection>
              <SalarySection> {`${job.salary}`}</SalarySection>
              <JobType>{`${job.jobtype}`}</JobType>
              
                <a
                  
                  href={`${job.joburl}`}
                  target="_blank" rel="noreferrer"
                >
                  <StyledButton>
                  Apply
                  </StyledButton>
                </a>
              
            </JobSection>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default JobTable;
