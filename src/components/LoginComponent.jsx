import React, { Fragment, useState, useEffect, useRef } from 'react';
import {
	Avatar,
	Button,
	Tooltip,
	Typography,
	Menu,
	MenuItem,
	IconButton,
	Card,
	Box,
	InputAdornment,
	FormControl,
	InputLabel,
	OutlinedInput
} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useSelector } from 'react-redux';
import { loggedInSelector } from '../redux/selectors/authentication';

const LoginComponent = () => {

	const newRef = useRef(null);
	const handleOutsideClick = (e) => {
		if (newRef.current && !newRef.current.contains(e.target)) {
			setLoginTab(false);
		}
	};
	useEffect(() => {
		document.addEventListener('mousedown', handleOutsideClick);
		return () => {
			document.removeEventListener('mousedown', handleOutsideClick);
		};
	});

	const loggedIn = useSelector(loggedInSelector);

	const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
    
	const [anchorElUser, setAnchorElUser] = useState(null);
	const [loginTab, setLoginTab] = useState(false);
	const [showPassword, setShowPassword] = useState(false);
    
	const handleClickShowPassword = () => setShowPassword(prev => !prev);
    
	const handleMouseDownPassword = (event) => {
		event.preventDefault();
	};
    
	const handleOpenUserMenu = (event) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};
    
	return (
		<Fragment>
			{
				loggedIn && <Fragment>
					<Tooltip title='Open settings'>
						<IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
							<Avatar alt='Atul Bansal' src='/static/images/avatar/2.jpg' />
						</IconButton>
					</Tooltip>
					<Menu
						sx={{ mt: '45px' }}
						id='menu-appbar'
						anchorEl={anchorElUser}
						anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
						keepMounted
						transformOrigin={{ vertical: 'top', horizontal: 'right' }}
						open={Boolean(anchorElUser)}
						onClose={handleCloseUserMenu}>
						{
							settings.map(setting => (
								<MenuItem key={setting} onClick={handleCloseUserMenu}>
									<Typography textAlign='center'>{setting}</Typography>
								</MenuItem>
							))
						}
					</Menu>
				</Fragment>
			}
			{
				!loggedIn && <Fragment>
					<Tooltip title='Open settings'>
						<IconButton onClick={() => setLoginTab(prev => !prev)} sx={{ p: 0 }}>
							<Avatar alt='Login' />
						</IconButton>
					</Tooltip>
					{
						loginTab && <Card ref={ newRef } variant='outlined' sx={{
							width: '25%',
							position: 'absolute',
							height: '220px',
							marginTop: '5px',
							marginLeft: '-320px',
							display: 'flex',
							padding: '10px',
							flexDirection: 'column'
						}}>
							<FormControl sx={{ m: 1 }} variant='outlined'>
								<InputLabel htmlFor='username'>Username</InputLabel>
								<OutlinedInput id='username' type={'text'} label='Username' required></OutlinedInput>
							</FormControl>
							<FormControl sx={{ m: 1 }} variant='outlined'>
								<InputLabel htmlFor='password'>Password</InputLabel>
								<OutlinedInput
									required
									id='password'
									type={showPassword ? 'text' : 'password'}
									endAdornment={
										<InputAdornment position='end'>
											<IconButton
												aria-label='toggle password visibility'
												onClick={handleClickShowPassword}
												onMouseDown={handleMouseDownPassword}
												edge='end'>
												{showPassword ? <VisibilityOff /> : <Visibility />}
											</IconButton>
										</InputAdornment>
									}
									label='Password'
								/>
							</FormControl>
							<Box
								sx={{
									padding: '10px',
									marginBottom: '20px',
									alignItems: 'center',
									justifyContent: 'center',
									display: 'flex'
								}}>
								<Button sx={{ padding: '10px', marginBottom: '20px' }} variant='outlined'>
                                    Login
								</Button>
							</Box>
						</Card>
					}
				</Fragment>
			}
		</Fragment>
	);
};

export default LoginComponent;
