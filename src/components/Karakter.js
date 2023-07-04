import React, { useState } from 'react';



import Filmler from "./Filmler.js";
import { KarakterBilgileri } from './styled.js';
// Karakter bileşeniniz buraya gelecek

import "bootstrap/dist/css/bootstrap.min.css";

export default function Karakter({ karakter }) {
    const [selectedKarakter, setSelectedKarakter] = useState(false);

    

    function handleAccordionClick() {
        setSelectedKarakter(!selectedKarakter);
    }
    return(
        
                    <KarakterBilgileri>
                        <button onClick={handleAccordionClick}>
                            {karakter.name}
                        </button>
                        {selectedKarakter === karakter && (
                            <div>
                                <p>height : {karakter.height}</p>
                                <p>mass : {karakter.mass}</p>
                                <p>hair_color : {karakter.hair_color}</p>
                                <p>skin_color : {karakter.skin_color}</p>
                                <p>eye_color : {karakter.eye_color}</p>
                                <p>birth_year : {karakter.birth_year}</p>
                                <p>gender : {karakter.gender}</p>
                                <p>homeworld : {karakter.homeworld}</p>
                                <p>mass : {karakter.mass}</p>
                                <Filmler filmler={karakter.films} />
                            </div>
                        )}
                        </KarakterBilgileri>
                
    );
}