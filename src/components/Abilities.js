import React from 'react'

function Abillities({abilities}) {

    return (
        <section className="flex column abillities">
            <h1>Main skills</h1>
            <div>
                <p>{abilities[0].ability.name}</p>
                <p>{abilities[1].ability.name}</p>
            </div>
        </section>
    )
}

export default Abillities
