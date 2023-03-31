import React from "react";
import "../Styles/education.css";
function Education() {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Degree</th>
          <th>Department</th>
          <th>Institute</th>
          <th>Year</th>
        </tr>
      </thead>
      <tbody>
      <tr>
          <td>BS</td>
          <td>Computer Information Systems/Software Programming</td>
          <td>Devry University</td>
          <td>2023-2025</td>
        </tr>
        <tr>
          <td>AAS</td>
          <td>Computer Forensics/Counter Terrorism</td>
          <td>Tompkins Community College</td>
          <td>2009-2012</td>
        </tr>
        <tr>
          <td>The Complete 2022 Web Development Bootcamp</td>
          <td>Web Dev Bootcamp</td>
          <td>Dr.Angela Yu on Udemy</td>
          <td>2021-2022</td>
        </tr>
        <tr>
          <td>The Complete JavaScript Course 2022</td>
          <td>JavaScript Fundementals/Advanced Practices</td>
          <td>Jonas Schmedtmann on Udemy</td>
          <td>2021-2022</td>
        </tr>
      </tbody>
    </table>
  );
}

export default Education;
