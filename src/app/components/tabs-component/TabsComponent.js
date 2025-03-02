"use client";

import { useState } from "react";
import Profile from "./Profile";
import Interests from "./Interests";
import Settings from "./Settings";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 24px;
  .ml12 {
    margin-left: 12px;
  }
`;

const TabsWrapper = styled.div`
  div {
    padding: 12px;
    border: 1px solid gray;
    margin-right: 8px;
  }
`;

const ActiveComponentWrapper = styled.div`
  border: 1px solid gray;
  padding: 24px;
  height: 50vh;
`;

const StyledButton = styled.button`
  border: 1px solid gray;
  padding: 12px;
  .submitButton {
    margin-left: 12px;
  }
`;

export default function TabsComponent() {
  const [activeTab, setActiveTab] = useState(0);
  const [formData, setFormData] = useState({
    name: "Jai",
    age: 24,
    email: "khanchandanijai58@gmail.com",
    interests: ["Travelling", "Gym"],
    theme: "Dark",
  });
  const [errors, setErrors] = useState({});

  const TABS = [
    {
      name: "Profile",
      component: Profile,
      validate: () => {
        const err = {};
        if (!formData.name || formData.name.length < 2) {
          err.name = "Name is not valid";
        }
        if (!formData.age || formData.age < 18) {
          err.age = "Age is not valid";
        }
        if (!formData.email || formData.email.length < 2) {
          err.email = "Email is not valid";
        }
        if (!formData.mobile || !/^\d{10}$/.test(formData.mobile)) {
          err.mobile = "Enter a valid mobile number";
        }

        setErrors(err);
        return err.name || err.age || err.email || err.mobile ? false : true;
      },
    },
    {
      name: "Interests",
      component: Interests,
      validate: () => {
        const err = {};
        if (formData.interests.length < 1) {
          err.interests = "Add atleast one interest";
        }

        setErrors(err);
        return err.interests ? false : true;
      },
    },
    {
      name: "Settings",
      component: Settings,
      validate: () => {
        return true;
      },
    },
  ];

  const ActiveComponent = TABS[activeTab].component;
  console.log({ ActiveComponent });

  const handleNextClick = () => {
    if (TABS[activeTab].validate()) {
      setActiveTab((prev) => prev + 1);
    }
  };
  const handlePrevClick = () => {
    if (TABS[activeTab].validate()) {
      setActiveTab((prev) => prev - 1);
    }
  };
  const handleSubmitClick = () => {
    if (TABS[activeTab].validate()) {
      alert(JSON.stringify(formData, null, 2));
    }
    console.log({ formData });
  };
  return (
    <Wrapper>
      <TabsWrapper className="dF">
        {TABS.map((tab, index) => {
          return (
            <div
              className="cP"
              key={index}
              onClick={() => TABS[activeTab].validate() && setActiveTab(index)}
            >
              {tab.name}
            </div>
          );
        })}
      </TabsWrapper>
      <ActiveComponentWrapper className="mb12">
        <ActiveComponent
          formData={formData}
          setFormData={setFormData}
          errors={errors}
        />
      </ActiveComponentWrapper>
      <div className="dF jcSB">
        {activeTab > 0 && (
          <StyledButton onClick={handlePrevClick}>Prev</StyledButton>
        )}
        <div className="dF jcFE w100">
          {activeTab !== TABS.length - 1 && (
            <StyledButton onClick={handleNextClick}>Next</StyledButton>
          )}
          {activeTab === TABS.length - 1 && (
            <StyledButton className="submitButton" onClick={handleSubmitClick}>
              Submit
            </StyledButton>
          )}
        </div>
      </div>
    </Wrapper>
  );
}
