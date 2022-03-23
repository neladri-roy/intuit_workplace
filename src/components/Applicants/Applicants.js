import React, { useState } from "react";
import { Section, Container } from "../../common/commonStyle";
import { Table } from "./index";
import { applicantsData } from "./ApplicantsData";
import { Link,  useLocation } from "react-router-dom";
import { Title } from "../Header/Header.style";
import { JobSection, JobType, SalarySection, SkillsSection } from "../Employer/Employer.style";

const Applicants = (props) => {
  const [applicants, setApplicants] = useState(applicantsData);
  const applicantProps = useLocation().state;
  //console.log(applicantProps);
  return (
    <Container style={{marginTop: "15vh"}}>
     
         <Title><span>Current Opening: </span>{applicantProps.jobtitle}</Title>
         <div style={{margin: "25px"}}>
         <h1><span>Salary: </span>{applicantProps.salary}</h1>
         <h3><span>Job Id: </span>TECH{applicantProps.postid}</h3>
         <h3><span>Position: </span>{applicantProps.jobtype}</h3>
         <h3><span>Skills Required: </span>{applicantProps.skills}</h3>
         </div>
        <Table>
          <Table.Head>
            <Table.TR>
              <Table.TH>Applicant Name</Table.TH>
              <Table.TH>Candidate Org</Table.TH>
              <Table.TH>Salary</Table.TH>
              <Table.TH>Skills</Table.TH>
              <Table.TH>Applied for</Table.TH>
            </Table.TR>
          </Table.Head>
          <Table.Body>
          {applicants?.map((applicant) => (
            <Table.TR>
              <Table.TD><Link to={`/applicants/${applicant.applicantId}`} state= {{...applicant}}>{`${applicant.applicantname}`}</Link></Table.TD>
              <Table.TD>{`${applicant.companyname}`}</Table.TD>
              <Table.TD><SalarySection>{`${applicant.salary}`}</SalarySection></Table.TD>
              <Table.TD><SkillsSection>{`${applicant.skills}`}</SkillsSection></Table.TD>
              <Table.TD><JobType>{`${applicant.jobtype}`}</JobType></Table.TD>
            </Table.TR>
          ))}
          </Table.Body>
        </Table>
      
    </Container>
  );
};

export default Applicants;
