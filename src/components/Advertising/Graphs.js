import React from 'react'
import graphDatas from '../../Datas/graphDatas';
import Getgraph from './Getgraph';


const Graphs = () => {
  return (
    <div className='flex gap-5 p-5 pl-10 w-full'>
    {graphDatas.map(Getgraph)}
    </div>
  )
}

export default Graphs