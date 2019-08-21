import React from 'react';
import config from '../config';
import axios from 'axios';

const User = (props) => {

	const { _id, name, email, status } = props.user;
	
	const activeStatus = () => {
		if (status === 'active') {
			return <span className="green-circle"></span>
		} else {
			return <span className="red-circle"></span>
		}
	}

	const deleteMember = (user) => (e) => {
		const requestOptions = {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
				'Accept': 'application/json'
			}
		};

		axios.delete(`${config.api}/api/members/${user._id}`, requestOptions)
			.then(res => {
				const members = props.data.filter(m => m._id !== user._id);
				props.updateData(members);
			})
			.catch(err => console.log(err))
	}

	return (
		<div className="member-list-wrap">
			<div className="member-list" key={_id}>
				<ul className="list-group mb-4">
					<li className="list-group-item">
						<span className="list-group-item-text text-default">{name}</span>
						<span className="list-group-item-text text-default">{email}</span>
						<span className="list-group-item-text text-default">
							{status}
							{activeStatus()}
						</span>
					</li>
				</ul>
				<button className="btn" onClick={deleteMember(props.user)}>Delete</button>
			</div>
		</div>
	)
}

export default User;
