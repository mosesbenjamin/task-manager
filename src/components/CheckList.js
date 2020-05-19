import React from 'react';


const CheckList =(props)=>{
		const tasks = props.tasks.map((task)=>{
			return <li key={task.id} className="checklist__task"> 
				<input type="checkbox" defaultChecked={task.done} />
				{task.name}
				<a href="#task" className="checklist__task--remove">{task.done}</a>
			</li>
		})
		return (
				<div className="checklist">
					<ul>
						{tasks}
					</ul>
				</div>
			);
	}

export default CheckList;