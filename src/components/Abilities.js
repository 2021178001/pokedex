import React from 'react'

function Abillities({abilities}) {

    function Iterator(collection){
        this.collection = collection;
        this.index = 0;
      }
    
      Iterator.prototype = {
        hasNext: function(){
          return this.index < this.collection.length
        },
        next: function(){
          return this.collection[this.index++]
        }
      }

      const abilitiesArray = [];
      const iter = new Iterator(abilities);
      
      while(iter.hasNext()){
          abilitiesArray.push(iter.collection[iter.index].ability.name);
          iter.next()
        }

    return (
        <section className="flex column abillities">
            <h1>Main skills</h1>
            <div>
            {
                   abilitiesArray.map((ability, index) => {
                       return <p index={index}>{ability}</p>
                   })
               }
            </div>
        </section>
    )
}

export default Abillities
