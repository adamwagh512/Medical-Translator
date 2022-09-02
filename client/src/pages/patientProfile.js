import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import Component from '../components/----';

import { QUERY_SINGLE_PATIENT } from '../utils/';

const Patient = () => {
    const { patientId } = useParams();
    const { loding, data } = useQuery ( QUERY_SINGLE_PATIENT, {
        variables: { patientId: patientId },
    });

    const patient = data?.patient || {};

    if (loading) {
        return <div>Loading...</div>;
        }
        return (
            <div>
            <h2 className="card-header">
            {patient.name}'s medical history.
            </h2>
            {patient.history?.length > 0 && <HistoryList history={patient.history} />}
            </div>
        );
    };

    export default Profile;