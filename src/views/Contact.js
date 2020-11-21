import React from 'react';

const Contact = () => {
  return (
    <section>
      <div className="contact-section">
        <h2 className="title">Contact us</h2>
      </div>
      <form className="container card card-body my-5" style={{width: "50%"}}>
        <h2>Reach Out to us</h2>
        <div class="form-row my-3">
          <div class="col">
            <input type="text" class="form-control" placeholder="First name" />
          </div>
        </div>
        <div className="form-row my-3">
          <div class="col">
            <input type="text" class="form-control" placeholder="Last name" />
          </div>
        </div>
        <div className="form-row my-3">
        <div class=" col">
          <input
            type="email"
            class="form-control"
            id="inputEmail4"
            placeholder="Email"
          />
        </div>
        </div>
        <button type="submit" class="btn btn-primary">Sign in</button>
      </form>
    </section>
  );
};

export default Contact;
