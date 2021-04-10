import React from 'react'

function StatisticsItem({name, data}) {

    
    return (
        <div className="flex column statistics-item">
            <p>{name}</p>
            <p>{data}</p>
            <p>base</p>
      </div>
    )
}

export default StatisticsItem
