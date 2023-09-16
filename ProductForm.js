/* Name Of Project :- ProductMaster.js
/*Name of Developer :- Devvrat Shukla
/*Last Modified By:-  Aman Shahu
/*Date of Modification :- 11/7/2023 */
import React, { useState } from "react";

const ProjectForm = () => {
  const [id, setId] = useState(1);
  const [wbsOption, setWBSOption] = useState("");
  const [WBSOptions, setWBSOptions] = useState([]);
  const [createdProject, setCreatedProject] = useState("");
  const [expired, setExpired] = useState("");
  const [allotedHours, setAllotedHours] = useState(0);

  const handleAddWBSOption = () => {
    if (wbsOption && !WBSOptions.includes(wbsOption)) {
      setWBSOptions([...WBSOptions, wbsOption]);
      setWBSOption("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (e.g., sending data to a backend)
    // You can access all the form fields' values using the corresponding state variables (id, WBSOptions, createdProject, expired, allotedHours)
    console.log({
      id,
      WBSOptions,
      createdProject,
      expired,
      allotedHours,
    });
  };

  return (
    <div>
      <h1>Project Form</h1>
      <form onSubmit={handleSubmit}>
        <label>ID:</label>
        <input type="text" value={id} readOnly />
        <br />

        <label>WBS:</label>
        <input
          type="text"
          value={wbsOption}
          onChange={(e) => setWBSOption(e.target.value)}
        />
        <button type="button" onClick={handleAddWBSOption}>
          Add WBS Option
        </button>
        <br />

        <label>Created Project:</label>
        <input
          type="date"
          value={createdProject}
          onChange={(e) => setCreatedProject(e.target.value)}
        />
        <br />

        <label>Expired:</label>
        <input
          type="date"
          value={expired}
          onChange={(e) => setExpired(e.target.value)}
        />
        <br />

        <label>Alloted Hours:</label>
        <input
          type="number"
          value={allotedHours}
          onChange={(e) => setAllotedHours(e.target.value)}
          min="0"
        />
        <br />

        <button type="submit">Submit</button>
      </form>

      <div>
        <label>WBS Options:</label>
        <select id="WBSOptions" multiple>
          {WBSOptions.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ProjectForm;
