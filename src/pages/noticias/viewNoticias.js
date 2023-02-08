import React from 'react';
import Noticias from '../../components/noticias/Noticias';
import Tiempo from '../../components/tiempo/Tiempo';
import './noticias.css'

function ViewNoticias() {
    return (
        <>
          <Tiempo />
          <Noticias />
        </>
    );

}
export default ViewNoticias