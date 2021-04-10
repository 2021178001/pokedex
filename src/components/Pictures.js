import React from 'react'
import PicturesItem from './PicturesItem';

function Pictures({pictures}) {

    return (
        <section className="flex column pictures">
              <h1>Pictures</h1>
              <div className="flex">      
                  <PicturesItem  
                  imgUrl={pictures.back_default}
                  />
                  <PicturesItem  
                  imgUrl={pictures.front_default}
                  />
                  <PicturesItem  
                  imgUrl={pictures.front_shiny}
                  />
                  <PicturesItem  
                  imgUrl={pictures.back_shiny}
                  />
                  {pictures.front_female != null ? <PicturesItem  
                  imgUrl={pictures.front_female}
                  /> : <div></div>}
                  {pictures.back_female != null ? <PicturesItem  
                  imgUrl={pictures.back_female}
                  /> : <div></div>}
                  {pictures.front_shiny_female != null ? <PicturesItem  
                  imgUrl={pictures.front_shiny_female}
                  /> : <div></div>}
                  {pictures.back_shiny_female != null ? <PicturesItem  
                  imgUrl={pictures.back_shiny_female}
                  /> : <div></div>}
                  
              </div>
        </section>
    )
}

export default Pictures
