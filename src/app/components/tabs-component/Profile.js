"use client";

import styled from "styled-components";

const InputGroup = styled.div`
  label {
    width: 6%;
  }
  input {
    width: 20%;
    height: 32px;
    border-radius: 4px;
    padding: 8px;
    margin-right: 8px;
  }
  span {
    color: red;
  }
`;

export default function Profile({ errors, formData, setFormData }) {
  const { name, age, email } = formData;

  const handleInputChange = (e, item) => {
    setFormData((prev) => ({
      ...prev,
      [item]: e.target.value,
    }));
  };
  return (
    <div>
      <InputGroup className="dF mb24">
        <label>Name: </label>
        <input
          className="c333"
          type="text"
          label="Name"
          value={name}
          onChange={(e) => handleInputChange(e, "name")}
        />
        {errors.name && <span className="dFA">{errors.name}</span>}
      </InputGroup>
      <InputGroup className="dF mb24">
        <label>Age: </label>
        <input
          className="c333"
          type="number"
          label="Name"
          value={age}
          onChange={(e) => handleInputChange(e, "age")}
        />
        {errors.age && <span className="dFA">{errors.age}</span>}
      </InputGroup>

      <InputGroup className="dF mb24">
        <label>Email: </label>
        <input
          className="c333"
          type="text"
          label="Name"
          value={email}
          onChange={(e) => handleInputChange(e, "email")}
        />
        {errors.email && <span className="dFA">{errors.email}</span>}
      </InputGroup>
      <InputGroup className="dF mb24">
        <label>Mobile No.: </label>
        <input
          className="c333"
          type="text"
          label="Mobile"
          placeholder="Mobile Number"
          value={formData.mobile || ""}
          onChange={(e) => handleInputChange(e, "mobile")}
        />
        {errors.mobile && <span className="dFA">{errors.mobile}</span>}
      </InputGroup>
    </div>
  );
}
