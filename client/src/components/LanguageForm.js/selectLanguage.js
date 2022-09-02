import { useState } from 'react';

// function selectLanguage (){
//     const [language, setLanguage] = useState('');



    return (
        <div className="card-body">
          <p className="card-text">
            <h2>Select Language</h2>
          </p>
          <button
            type="button"
            className="btn"
            onChange={selectLanguage}
          >
          Language 1
          </button>
          <button
            type="button"
            className="btn"
            onChange={selectLanguage}
          >
          Language 2
          </button>
          <button
            type="button"
            className="btn"
            onChange={selectLanguage}
          >
          Language 3
          </button>
          <button
            type="button"
            className="btn"
            onChange={selectLanguage}
          >
          Language 4
          </button>
        </div>
    );

