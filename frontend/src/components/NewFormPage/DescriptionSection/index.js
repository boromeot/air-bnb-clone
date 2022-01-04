import React, { useEffect, useState } from "react";

const DescriptionSection = ({ setFormData, formDescription }) => {

  const [description, setDescription] = useState(formDescription)

  const handleChange = e => {
    e.preventDefault();
    setDescription(e.target.value);
  }

  useEffect(() => {
    setFormData(prevState => {
      return {
        ...prevState,
        description
      };
    });
  }, [description, setFormData])

  return (
    <div id="FMP-target" className="FMP-target">
      <div className="flex flex-column align-center justify-center w100p">
        <div style={{width: '80%'}}>
          <h2 className="font-size--22 pb4">Create your description</h2>
          <div>
            <textarea
              className="mh50vh p4 w100p border-light-gray radius-8 font-size--18 font-weight--600 soft-black"
              rows='4'
              value={description}
              onChange={handleChange}
              maxLength={500}
            />
          </div>
          <div className="pt--16">
            <span className="font-size--14 soft-gray font-weight--600">{description.length}/500</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DescriptionSection;
