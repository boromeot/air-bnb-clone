import React, { useEffect, useState } from "react";

const TitleSeciton = ({ setFormData, formTitle }) => {

  const [title, setTitle] = useState(formTitle);

  const handleChange = e => {
    e.preventDefault();
    setTitle(e.target.value);
  }

  useEffect(() => {
    setFormData(prevState => {
      return {
        ...prevState,
        title
      }
    });
  }, [title, setFormData])

  return (
    <div id="FMP-target" className="FMP-target">
      <div className="flex flex-column align-center justify-center w100p">
        <div style={{width: '80%'}}>
          <h2 className="font-size--22 pb4">Create your title</h2>
          <div>
            <textarea
              className="mh50vh p4 w100p border-light-gray radius-8 font-size--32 font-weight--600 soft-black"
              placeholder="Cheerful 1-bedroom cabin with pool"
              rows='3'
              value={title}
              onChange={handleChange}
              maxLength={50}
            />
          </div>
          <div className="pt--16">
            <span className="font-size--14 soft-gray font-weight--600">{title.length}/50</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TitleSeciton;
