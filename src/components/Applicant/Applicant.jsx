import React, { useState} from 'react';
import { useLocation } from "react-router-dom";
import { Card, Container, Label } from "../../common/commonStyle";
import { Title } from '../Header/Header.style';

const Applicant = () => {
    
    const applicant = useLocation().state;
    //console.log(applicant);
    return (
        <>
    <Container style={{marginTop: "15vh"}}>
     
     <Title><span> Applicant Name: </span>{applicant.applicantname}</Title>
     <div style={{margin: "25px"}}>
     <h1><span> Current Title: </span> {applicant.jobtitle}</h1>   
     <h2><span> Company: </span> {applicant.companyname}</h2>
     <h3><span> Job Type: </span> {applicant.jobtype}</h3>
     <h3><span> Skills: </span> {applicant.skills}</h3>
     <h3><span> Salary: </span> {applicant.salary}</h3>
     </div>
        <Card>
            <h4>
            Hi, Thank you for visiting my page. Myself <span>{applicant.applicantname}</span>, <span>{applicant.jobtitle}</span> by profression. 
            I'm currently working with <span>{applicant.companyname}</span>. My expertise in various areas of technology includes <span>{applicant.skills}</span>. 

            If you would like to get in touch with me, shoot me an <i >{applicant.email}</i>
            </h4>
        </Card>
     </Container>

        </>
    )
}

export default Applicant
