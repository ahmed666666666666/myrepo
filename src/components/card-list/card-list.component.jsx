import React from 'react'
import {Card} from '../card/card.component';
import './card-list.styles.css';
import './styles.min.css'
import Mcard from '../m-card/m-card';
export const CardList = ({movieList,grid}) => {
    return (
        <div className={"card-list"+" "+grid }>
                {movieList.map(movie => (
               
                <Mcard  key ={movie.id} movie =  {movie}/>
                
                ))}
            </div>
    )            
};