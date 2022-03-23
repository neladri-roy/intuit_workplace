import React, { Fragment, useState } from "react";
import {
  Container,
  Label,
  StyledButton,
  Input,
} from "../../common/commonStyle";
import {
  SearchContainer,
  SearchBtn,
  ProfileBtn,
  CloseModal,
} from "./Freelancer.style";
import FreelancerLogo from "../../assets/image.png";
import Modal from "react-modal";
import JobTable from "../JobListings/JobTable";

const Freelancer = (props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [submit, setSubmit] = useState(false); 
  const [validGithub, setValidGithub] = useState('');
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    skills: "",
    github: "",
  });

  const handleFirstNameInputChange = (event) => {
    setValues({ ...values, firstName: event.target.value });
  };
  const handleLastNameInputChange = (event) => {
    setValues({ ...values, lastName: event.target.value });
  };
  const handleEmailInputChange = (event) => {
    setValues({ ...values, email: event.target.value });
  };
  const handleSkillsInputChange = (event) => {
    setValues({ ...values, skills: event.target.value });
  };
  const handleGithubInputChange = (event) => {
    setValues({ ...values, github: event.target.value });
  };

  const fetchGitHubProfiles =(event) =>{
    fetch("https://api.github.com/users/"+ values.github + "/repos")
    .then((res) => {
      const data = res.json();
      if (!res.ok) {
        const error = (data && data.message) || res.status;
        return Promise.reject(error);
      }
    })
    .then((json) => {
      setValidGithub("https://api.github.com/users/"+ values.github + "/repos");
    })
    .catch(error => {
      alert('Invalid URL. Reponse code: ', error);
  });
    console.log(validGithub);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmit(true);
  };

 
  return (
    <Fragment>
      <Container style={{marginTop: "15vh"}}>
        <div
          style={{
            background: `url(${FreelancerLogo})`,
            height: "300px",
            position: "absolute",
            width: "500px",
            top: 0,
            right: 0,
          }}
        ></div>
        {/* <FreelancerImage src={FreelancerLogo} alt="logo"></FreelancerImage> */}
        
        <SearchContainer>
          <Modal isOpen={modalIsOpen} ariaHideApp={false} style={{color: `${(props) => props.theme.BodyColor}`}}>
            <CloseModal onClick={() => setModalIsOpen(false)}>X</CloseModal>

            <Label>Profile Settings</Label>
            <Input
                type="text"
                defaultValue={values.github}
                onChange={handleGithubInputChange}
                placeholder="Github Username"
                name="github"
              ></Input>
              <StyledButton onClick={fetchGitHubProfiles} >Validate</StyledButton>
              { validGithub ? (<span >
              <a target="_blank" href={`${validGithub}`} rel="noreferrer">Github Link</a>
              </span>) : null}
              <form onSubmit={handleSubmit}>
              {submit ? (
                <div className="success-message">Success! Changes Saved...</div>
              ) : null}

              <Input
                required
                type="text"
                defaultValue={values.firstName}
                onChange={handleFirstNameInputChange}
                placeholder="First Name"
                name="firstName"
              ></Input>
              <Input
                required
                type="text"
                defaultValue={values.lastName}
                onChange={handleLastNameInputChange}
                placeholder="Last Name"
                name="lastName"
              ></Input>
              <Input
                required
                type="email"
                defaultValue={values.email}
                onChange={handleEmailInputChange}
                placeholder="Email ID"
                name="firstName"
              ></Input>
              <Input
                required
                type="text"
                defaultValue={values.skills}
                onChange={handleSkillsInputChange}
                placeholder="Skills"
                name="skills"
              ></Input>
              
              <div>
              
              {/* {githubProfiles &
                githubProfiles.map((profile)=>(
                  <span>{`${profile.name}`}</span>
              ))} */}
                 
              </div>
            </form>
            <SearchBtn>Save</SearchBtn>
          </Modal>
          {/* <Input type="text" placeholder="Find Jobs"></Input>
          <SearchBtn>Find Jobs</SearchBtn> */}
           
        </SearchContainer>
        
        <Container style={{display:"flex"}}>
            <ProfileBtn onClick={() => setModalIsOpen(true)}>Settings</ProfileBtn>
        </Container>
        <JobTable />
      </Container>
    </Fragment>
  );
};

export default Freelancer;
