import React, { useState } from 'react';
import config from '../config';
import axios from 'axios';

const Form = (props) => {

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [status, setStaus] = useState('');

	const addNewMember = () => {
		const newMember = {
			name: name,
			email: email,
			status: status
		}

		const requestOptions = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Accept': 'application/json'
			}
		};
		axios.post(`${config.api}/api/members`, newMember, requestOptions)
			.then(res => {
				props.updateData([...props.users, res.data]);
			})
			.catch(err => console.log(err))
	}
	
	const handleSubmit = (e) => {
		e.preventDefault();
		addNewMember();
	}

	return (
		<form className="form" onSubmit={handleSubmit}>
			<h2>Add New Member</h2>
			<div className="form-group">
				<label htmlFor="name">Name: </label>
				<input type="text" name="name" value={name} className="form-control" onChange={e => setName(e.target.value)} />
			</div>
			<div className="form-group">
				<label htmlFor="name">Email: </label>
				<input type="email" name="email" value={email} required className="form-control" onChange={e => setEmail(e.target.value)} />
			</div>
			<div className="form-group">
				<label htmlFor="name">Status: </label>
				<input name="status" type="text" value={status} className="form-control" onChange={e => setStaus(e.target.value)} />
			</div>
			<button className="btn" type="submit">Add new</button>
		</form>
	)
}

export default Form;

















