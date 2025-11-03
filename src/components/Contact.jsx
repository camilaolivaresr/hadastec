import React from 'react'
import { useState } from 'react';

const Contact = () => {
   const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "d0f67db9-f2be-420d-af55-deed8e586322");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    setResult(data.success ? "Success!" : "Error");
  };

  return (

<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8 col-lg-6">
            <form class="contact-form" onSubmit={onSubmit}>
                <h2 class="text-center mb-4">Contact Us</h2>
                <div class="mb-3">
                    <label for="name" class="form-label">Name</label>
                    <input type="text" class="form-control" id="name" required/>
                </div>
                <div class="mb-3">
                    <label for="email" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="email" required/>
                </div>
                <div class="mb-3">
                    <label for="subject" class="form-label">Subject</label>
                    <input type="text" class="form-control" id="subject" required/>
                </div>
                <div class="mb-3">
                    <label for="message" class="form-label">Message</label>
                    <textarea class="form-control" id="message" rows="5" required></textarea>
                </div>
                <div class="d-grid">
                    <button type="submit" class="btn btn-primary btn-lg">Send Message</button>
                </div>
                 <p>{result}</p>
            </form>
        </div>
    </div>
</div>

  );
}

export default Contact
