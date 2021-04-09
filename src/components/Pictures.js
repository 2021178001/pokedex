import React from 'react'
import PicturesItem from './PicturesItem';

function Pictures({pictures}) {

    return (
        <section className="flex column pictures">
              <h1>Pictures</h1>
              <div className="flex">      
                  <PicturesItem  />
                  <PicturesItem  />
                  <PicturesItem  />
                  <PicturesItem  />
                  <PicturesItem  />
              </div>
        </section>
    )
}

export default Pictures
