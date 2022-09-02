import React from 'react';
import { useQuery } from '@apollo/client';

import selectLanguage from '../components/LanguageForm.js/selectLanguage';

import { 'Our Querys Here' } from 'Utils Location'

const Home = () => {
    const { data here } = useQuery(OUR_QUERY);
    const 'query' = data?.'query' || [];

    return (

    );
 };