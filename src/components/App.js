import React from 'react';
import Board from  './Board';


let cardList = [
		{
			id:1,
			title: "Card one title",
			description: "Card detailed description",
			status: "todo",
			tasks: [
					{id:1, name:"Task one", done: false},
					{id:2, name:"Task two", done: true},
					{id:3, name:"Task three", done: true}
			]	
		},
		{
			id:2,
			title: "Card two title",
			description: "Card detailed description",
			status: "in-progress",
			tasks: [
					{id:2, name:"Task two", done: true},
					{id:3, name:"Task three", done: true}
			]

		},
		{
			id:3,
			title: "Card three title",
			description: "Card detailed description",
			status: "done",
			tasks: [
					{id:1, name:"Task one", done: true},
					
			]
		}
]

class App extends React.Component {
	render(){
		return (
			<div>
				<Board cards={cardList} />
			</div>
			)
}
}
export default App;