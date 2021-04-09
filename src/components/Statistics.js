import React from 'react'
import StatisticsItem from "./StatisticsItem";

function Statistics({statistics}) {

    return (
        <section className="flex column statistics">
        <h1>Main Statistics</h1>
        <div className="flex column statistics-items">
          <div className="flex stats-columns">
            <StatisticsItem />
            <StatisticsItem  /> 
            <StatisticsItem />
          </div>
          <div className="flex stats-columns">
            <StatisticsItem />
            <StatisticsItem />
            <StatisticsItem />
          </div>
        </div>
      </section>
    )
}

export default Statistics
