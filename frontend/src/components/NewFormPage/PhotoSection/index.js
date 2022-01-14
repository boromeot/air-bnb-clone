import React from "react";
import Photos from "../../SVGs/Photos";
import Cookies from 'js-cookie';

const PhotoSection = ({ setFormData }) => {

  const onDropHandler = async e => {
    e.preventDefault();
    const file = e.dataTransfer.items[0].getAsFile();

    setFormData(prevState => {
      return {
        ...prevState,
        photos: [...prevState.photos, file]
      };
    });
  };

  return (
    <div id="FMP-target" name='photo1' className="FMP-target relative mz--24 w100p"
      onDragOver={e => e.preventDefault()}
      onDrop={onDropHandler}
    >
      <div className="h65vh" style={{maxWidth: '500px', maxHeight: '700px', minHeight: '440px'}}>
        <div className='flex absolute t0 l0 w100p h100p pr--8'>
          <div className="flex absolute t0 l0 w100p h100p border-dotted-gray">
            <div className="flex align-center flex-column text-center soft-black m-auto">
              <Photos className='icon-64' viewBox='0 0 64 64' />
              <div className="pb--8 pt--16 font-size--22 font-weight--600 ">Drag your photos here</div>
              <div className="pz--64 font--size--16">Add at least 5 photos</div>
              <div className='absolute' style={{bottom: '80px'}}>Upload from your device</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PhotoSection;
