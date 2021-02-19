import React, {useContext, useState} from 'react';

const ScoreContext = React.createContext(-1);
const useScore = () => useContext(ScoreContext);

const ScoreProvider = ({children}) => {

    const [result, SetScore] = useState({
        score: -1,
        sum: 1000
    });

    return (<ScoreContext.Provider value={[result, SetScore]}>
        {children}
    </ScoreContext.Provider>)
};

export {ScoreProvider, useScore};