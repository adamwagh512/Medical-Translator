import React, { useState } from 'react';
import { useMutation } from '@apollo/client';

import { ADD_MEDICAL_HISTORY } from 'history location';

const medicalHistoryForm = ({ profileId }) => {
  const [medicalHistory, setMedicalHistory] = useState('');

  const [addMedicalHistory, { error }] = useMutation(ADD_MEDICAL_HISTORY);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addMedicalHistory({
        variables: { profileId, medicalHistory },
      });

      setMedicalHistory('');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h4>Endorse some more skills below.</h4>
      <form
        className="flex-row justify-center justify-space-between-md align-center"
        onSubmit={handleFormSubmit}
      >
        <div className="col-12 col-lg-9">
          <input
            placeholder="Medical History..."
            value={medicalHistory}
            className="form-input w-100"
            onChange={(event) => setMedicalHistory(event.target.value)}
          />
        </div>

        <div className="col-12 col-lg-3">
          <button className="btn btn-info btn-block py-3" type="submit">
            Submit Medical History...
          </button>
        </div>
        {error && (
          <div className="col-12 my-3 bg-danger text-white p-3">
            Something went wrong...
          </div>
        )}
      </form>
    </div>
  );
};

export default medicalHistoryForm;