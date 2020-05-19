import React from 'react';
import List from './List';


const Board = (props)=>{
		return (
				<div className="app">
					<List id="todo" title="To do" cards={
						props.cards.filter((card)=> card.status === "todo")
					} />

					<List id="in-progress" title="In Progress" cards={
						props.cards.filter((card)=> card.status === "in-progress")
					} />

					<List id="done" title="Done" cards={
						props.cards.filter((card)=> card.status === "done")
					} />
				</div>
			);
	}

export default Board;