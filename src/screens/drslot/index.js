import React, {useEffect} from 'react';
import {BookContext} from '../../contexts';
import DrPannel from './DrPannel';

const WorldPage = ({navigation}) => {
  useEffect(() => {}, []);

  return (
    <BookContext.Provider value={{navigation}}>
      <DrPannel />
    </BookContext.Provider>
  );
};

export default WorldPage;
