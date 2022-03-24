import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Section,
  StyledButton,
  Input,
  Card,
  Container,
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
import { HeaderContainer, Title } from "../Header/Header.style";

import { ApplyBtn, JobInput } from "./JobTable.style";
import { jobData } from "./JobData";
import { Table } from "../Applicants";

const JobTable = () => {
  const [jobslist, setJobslist] = useState([]);
  const [searchText, setSearchText] = useState("");
  //console.log(jobslist);

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
          onChange={(e) => setSearchText(e.target.value)}
        />
         
      </SecHeader>
      </div>
      <Table>
        {jobslist?.map((job) => (
          <Card>
            <JobSection>
              <JobTitle key={job.jobtitle}> {`${job.jobtitle}`}</JobTitle>
              <JobCompany key={job.company}>{`${job.company}`}</JobCompany>

              <SkillsSection key={job.skills}> {`${job.skills}`}</SkillsSection>
              <SalarySection key={job.salary}> {`${job.salary}`}</SalarySection>
              <JobType key={job.jobtype}>{`${job.jobtype}`}</JobType>
              
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
      </Table>
    </div>
  );
};

export default JobTable;
