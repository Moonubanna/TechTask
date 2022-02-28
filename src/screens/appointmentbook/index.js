import React, {useEffect} from 'react';
import {BookContext} from '../../contexts';
import AppointmentBook from './AppointmentBook';

const WorldPage = ({navigation, route}) => {
  useEffect(() => {}, []);

  return (
    <BookContext.Provider value={{navigation, route}}>
      <AppointmentBook />
    </BookContext.Provider>
  );
};

export default WorldPage;
