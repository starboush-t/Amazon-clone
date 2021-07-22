import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { signin } from '../actions/userActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
function SinginScreen(props) {
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');

	const redirect = props.location.search ? props.location.search.split('=')[1] : '/';
	console.log(redirect);

	const userSignin = useSelector((state) => state.userSignin);
	const { userInfo, loading, error } = userSignin;

	const dispatch = useDispatch();
	const submitHandler = (e) => {
		e.preventDefault();
		// ToDO: singin action
		dispatch(signin(email, password));
	};

	useEffect(
		() => {
			if (userInfo) {
				props.history.push(redirect);
			}
		},
		[ props.history, redirect, userInfo ]
	);

	return (
		<div>
			<form onSubmit={submitHandler} className="form">
				<div>
					<h1>Sing In</h1>
				</div>
				{loading && <LoadingBox />}
				{error && <MessageBox variant="danger">{error}</MessageBox>}
				<div>
					<label htmlFor="email">Email address</label>
					<input
						type="email"
						name="email"
						id="email"
						placeholder="Enter email"
						required
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>
				<div>
					<label htmlFor="password">Email address</label>
					<input
						type="password"
						name="password"
						id="password"
						placeholder="Enter password"
						required
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>
				<div>
					<label />
					<button className="primary" type="submit">
						Signin
					</button>
				</div>
				<div>
					<label />
					<div>
						New Customer? <Link to={`/register?redirect=${redirect}`}>Create your account</Link>
					</div>
				</div>
			</form>
		</div>
	);
}

export default SinginScreen;
