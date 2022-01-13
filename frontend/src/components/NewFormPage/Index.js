import React, { useState } from "react";
import { useSelector } from "react-redux";
import { csrfFetch } from "../../store/csrf";
import AddressSection from "./AddressSection";
import AmenitieSection from "./AmenitieSection";
import DescriptionSection from "./DescriptionSection";
import GuestSection from "./GuestSection";
import PhotoSection from "./PhotoSection";
import PlaceSection from "./PlaceSection";
import PriceSection from "./PriceSection";
import QuestionSection from "./QuestionSection";
import SpaceSection from "./SpaceSection";
import TitleSeciton from "./TitleSection/Index";
import TypeSection from "./TypeSection";

const NewFormPage = () => {

  const { id:userId } = useSelector(state => state.session.user);
  const [index, setIndex] = useState(0);

  const [formData, setFormData] = useState({
    place: '',
    type: '',
    space: '',
    guests: 0,
    beds: 0,
    bedrooms: 0,
    bathrooms: 0,
    address: '',
    amenities: new Set(),
    photos: [],
    title: '',
    description: '',
    price: 0,
  });

  const submit = async e => {
    e.preventDefault();
    const {
      place, type, space, description,
      guests, beds, bedrooms, bathrooms,
      address, city, state, photos,
      amenities, title, price
    } = formData;

    const spotResponse = await csrfFetch('/api/spots', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        userId, place, type, space, description,
        guests, beds, bedrooms, bathrooms,
        address, city, state, title, price
      })
    });

    const { spot } = await spotResponse.json();

    const imageResponse = await csrfFetch('/api/images', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: photos[0]
    })

    console.log(imageResponse, 'imageResponse');

    const amenitiesResponse = await csrfFetch('/api/amenities', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        spotId: spot.id,
        amenities: [...amenities]
      })
    });

    console.log(amenitiesResponse, 'amenitiesResponse');

  }

  const questions = [
    {
      question: 'What kind of place will you host?',
      options: <PlaceSection setFormData={ setFormData } formPlace={ formData.place } />
    },
    {
      question: 'Which of these best describes your place?',
      options: <TypeSection setFormData={ setFormData } formType={ formData.type } />
    },
    {
      question: 'What kind of space will guests have?',
      options: <SpaceSection setFormData={ setFormData } formSpace={ formData.space } />
    },
    {
      question: 'Where is your place?',
      options: <AddressSection setFormData={ setFormData } />
    },
    {
      question: 'How many guests would you like to welcome?',
      options: <GuestSection formData={formData} setFormData={ setFormData } />
    },
    {
      question: 'Let guests know what your place has to offer',
      options: <AmenitieSection setFormData={ setFormData } formAmenities={ formData.amenities } />
    },
    {
      question: 'Next, let\'s add some photos of your place',
      options: <PhotoSection setFormData={ setFormData } />
    },
    {
      question: 'Let\'s give your place a name',
      options: <TitleSeciton setFormData={ setFormData } formTitle={ formData.title} />
    },
    {
      question: 'Now, let\'s describe your place',
      options: <DescriptionSection setFormData={ setFormData } formDescription={ formData.description }/>
    },
    {
      question: 'Now for the fun part—set your price',
      options: <PriceSection setFormData={ setFormData } formPrice={ formData.price }/>
    }
  ];

  const prevQuestion = () => {
    if (0 < index) {
      setIndex(prevIndex => prevIndex - 1);
    }
  };

  const nextQuestion = () => {
    if (index < questions.length) {
      setIndex(prevIndex => prevIndex + 1);
    }
  };

  return (
    <div className="w100p flex">
      <QuestionSection question={questions[index].question} />
      <div className="ml50vw w50p">
        <div className="flex pz8 overflowY-auto w100p mt-88 mb-82 scrollbar-none" style={{height: 'calc(-170px + 100vh)'}}>
          <div className="mz-auto w100p">
            {questions[index].options}
          </div>
        </div>
        <div className="width-50vw fixed b0">
          <div className="flex">
            <div className="overflowX-hidden bg-gray" style={{height: '2px', flexGrow: '1'}}>

            </div>
          </div>
          <div className="py2-5 flex align-center justify-space-between">
            <div className="ml8">
              <button onClick={prevQuestion} className="btn btn-back font-size--16 font-weight--600">Back</button>
            </div>
            <div className="mr8">
              {
                index === questions.length - 1
                ? <button onClick={submit} className="btn btn-next font-size--16 font-weight--600">Submit your listing</button>
                : <button onClick={nextQuestion} className="btn btn-next font-size--16 font-weight--600">Next</button>
              }
            </div>
          </div>
        </div>
      </div>
      <div onClick={() => console.log(formData)}>log</div>
    </div>
  )
}

export default NewFormPage;
