import React from "react";

const TitleSeciton = ({ setFormData }) => {
  return (
    <div id="FMP-target" className="FMP-target">
      <div className="flex flex-column align-center justify-center w100p">
        <div style={{width: '80%'}}>
          <h2 className="font-size--22 pb4">Create your title</h2>
          <div>
            <textarea
              className="mh50vh p4 w100p border-light-gray radius-8 font-size--32 font-weight--600 soft-black"
              placeholder="Cheerful 1-bedroom cabin with pool"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default TitleSeciton;
