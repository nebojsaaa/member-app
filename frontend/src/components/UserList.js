import React, { useState, useEffect } from 'react';
import User from './User';
import Form from './Form';
import config from '../config';
import loader from '../loader.gif';
import axios from 'axios';

const UserList = () => {
	
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(false);

	const fetchMembers = () => {
		const requestOptions = {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'Accept': 'application/json'
			}
		};
		setLoading(true);
		axios.get(`${config.api}/api/members`, requestOptions)
			.then(res => {
				setData(res.data)
				setLoading(false);
			})
			.catch(err => console.log(err));
	}

	useEffect(() => {
		fetchMembers();	
	}, [])

	const updateData = (newData) => setData(newData);	

	if (loading) return <img src={loader} alt="preloader" />;
	if (data.length < 1) return <span>No members at the moment</span>;

	const displayUsers = () => {
		return (
			<div className="content-left">
				<h1 className="mb-5 text-center">All Members</h1>
				<div className="member-list-header mb-2">
					<span className="member-list-title">Member name</span>
					<span className="member-list-title">Email</span>
					<span className="member-list-title">Status</span>
				</div>
				{data && data.length > 0 && data.map(user => (
				<User 
					loading={loading}
					user={user}
					data={data}
					updateData={updateData}
					key={user._id}
				/>
				))}
			</div>
		)
	}
	
	return (
		<div className="container-fluid">
			<Form 
				users={data}
				updateData={updateData}
			/>
			{displayUsers()}
		</div>
	);
}

export default UserList;
