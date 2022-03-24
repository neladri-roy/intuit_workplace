import React, { useState, useEffect, useMemo } from "react";
import {
  Container,
  SecHeader,
  StyledButton,
  Card,
} from "../../common/commonStyle";
import { postedData } from "./EmployerData";
import {
  JobSection,
  JobTitle,
  JobType,
  SalarySection,
  SkillsSection,
} from "./Employer.style";
import { Link } from "react-router-dom";
import { JobInput } from "../JobListings/JobTable.style";
import EmployerImg from "../../assets/banner-img-3.png";
import debounce from 'lodash.debounce';

const Employer = () => {
  const [searchPostTxt, setSearchPostTxt] = useState("");
  const [data, setData] = useState([]);
  const handleSearch = (event) => {
    
    setSearchPostTxt(event.target.value);
  };

  const debouncedTextSearch = useMemo(
    () => debounce(handleSearch, 600)
  , []);

  
  useEffect(() => {
    const filteredData = postedData.filter((job) =>
      job.jobtitle.toLowerCase().includes(searchPostTxt.toLowerCase())
    );
    setData(filteredData);
  }, [searchPostTxt]);

  useEffect(() =>{
    setData(postedData);
  },[]);

  useEffect(() => {
    return () => {
      debouncedTextSearch.cancel();
    }
  }, []); 


  return (
    <div style={{margin:"15vh 25px", padding:"10px"}}>
      <Container style={{margin: 0}}>
        <div
          style={{
            background: `url(${EmployerImg})`,
            height: "100vh",
            position: "absolute",
            width: "400px",
            top: 0,
            opacity: 0.2,
            backgroundRepeat: "no-repeat",
            zIndex: -1,
            right: 0,
          }}
        ></div>
      </Container>
      <h1><span>Company: </span>Intuit</h1>
      <div style={{marginTop:"25px"}}>
        <SecHeader>
          <JobInput
            placeholder="Search Jobs"
            onChange={debouncedTextSearch}
          />
         
        </SecHeader>
  
        <div>
        
          {data?.map((job) => (
            <Card key={job.postid} >
              <JobSection >
                <JobTitle> {`${job.jobtitle}`}</JobTitle>
                <SkillsSection> {`${job.skills}`}</SkillsSection>
                <SalarySection> {`${job.salary}`}</SalarySection>
                <JobType>{`${job.jobtype}`}</JobType>
                <Link  to="/applicants" state={{ ...job }}>
                  <StyledButton>Check Applicants</StyledButton>
                </Link>
              </JobSection>
            </Card>
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default Employer;
