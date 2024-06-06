import React, { useState } from "react";
import { Container, Form } from "react-bootstrap";
import "./Missuse.css";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import Recaptcha from "react-recaptcha";
import Header from "../../../../shared/components/Header/HeaderContent";
import Footer from "../../../../shared/components/Footer/Footer";

function Missuse() {
    const modules = {
        toolbar: [
          [{ header: [1, 2, 3, 5, 6, false] }],
          ["bold", "italic", "underline", "code"],
          [{ list: 'bullet' }],
          [{ 'color': [] }],  
        ],
      };
      const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileInputChange = (event) => {
    const files = event.target.files;
    const newFiles = Array.from(files).map(file => file.name);
    setSelectedFiles(prevFiles => [...prevFiles, ...newFiles]);
  };

  const [captchaVerified, setCaptchaVerified] = useState(false);

  const handleCaptchaVerify = (response) => {
    // Handle captcha verification here, e.g. send response to server
    console.log("Captcha verified:", response);
    setCaptchaVerified(true);
  };

  return (
    <div>
        <Header />
      <div className="missuse-container">
        <Container>
          <Form>
            <div className="header-box">
              <p className="left-text">Write to Us</p>
              <div className="go-back-text">
                {" "}
                &lt; Go back to <span className="highlight-text">Help</span>
              </div>
            </div>
            <div className="input-box">
              <Form.Label>Type of Issue</Form.Label>

              <Form.Select>
                <option>Default select</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </div>

            <div className="input-box">
              <Form.Label>
                Subject<span className="color-dot">*</span>
              </Form.Label>

              <Form.Control size="sm" type="text" />
            </div>
            <div className="input-box">
              <Form.Label>
                Description
                <span className="color-dot">*</span>
              </Form.Label>
              <div className="react-quill">
              <ReactQuill
                  placeholder="Type your text here..."
                  name="description"
                  className="text-start min-h-200px"
                  modules={modules}
                  theme="snow"
                  required
                />
              </div>
            </div>
         
         
           <div id="attachFileBtn" onClick={() => document.getElementById('fileInput').click()}>+ Attach a file</div>
      <input type="file" id="fileInput" style={{ display: 'none' }} onChange={handleFileInputChange} multiple />
      <div id="selectedFiles">
        {selectedFiles.map((fileName, index) => (
          <div key={index}>{fileName}</div>
        ))}
        </div>
            <div className="input-box">
              <Form.Label>
              Requester<span className="color-dot">*</span>
              </Form.Label>

              <Form.Control size="sm" type="text" placeholder="email" />
            </div>
            <div className="form-actions">
  <input type="submit" name="commit" value="Submit" id="helpdesk_ticket_submit" className="btn btn-primary" fdprocessedid="q4by9q" />
  <a href="#" className="btn cancel-btn">Cancel</a>
</div>
<Recaptcha
        sitekey="your_site_key" 
        onChange={handleCaptchaVerify}
      />
      {captchaVerified && <div>Captcha Verified!</div>}
          </Form>
        </Container>
      </div>
      <Footer/>
    </div>
  );
}

export default Missuse;
