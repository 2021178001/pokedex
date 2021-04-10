import React from 'react'
import StatisticsItem from "./StatisticsItem";

function Statistics({statistics}) {

    return (
        <section className="flex column statistics">
        <h1>Main Statistics</h1>
        <div className="flex column statistics-items">
          <div className="flex stats-columns">
            <StatisticsItem 
            name={statistics[0].stat.name}
            data={statistics[0].base_stat}
            />
            <StatisticsItem  
            name={statistics[1].stat.name}
            data={statistics[1].base_stat}/> 
            <StatisticsItem 
            name={statistics[2].stat.name}
            data={statistics[2].base_stat}/>
          </div>
          <div className="flex stats-columns">
            <StatisticsItem 
            name={statistics[3].stat.name}
            data={statistics[3].base_stat}/>
            <StatisticsItem 
            name={statistics[4].stat.name}
            data={statistics[4].base_stat}/>
            <StatisticsItem 
            name={statistics[5].stat.name}
            data={statistics[5].base_stat}/>
          </div>
        </div>
      </section>
    )
}

export default Statistics
