import React from 'react';
import {
	AppBar,
	Container,
	Toolbar,
	Typography,
	Box,
	Button
} from '@mui/material';
import LoginComponent from '../LoginComponent.jsx';

const AppBarComponent = () => {
	const pages = ['Products', 'Pricing'];

	return (
		<AppBar position='static'>
			<Container maxWidth='xl'>
				<i className='fa fa-gamepad fa-lg' aria-hidden='true'></i>
				<Toolbar disableGutters>
					<Typography
						variant='h6'
						noWrap
						component='a'
						sx={{
							mr: 2,
							display: { xs: 'none', md: 'flex' },
							fontFamily: 'monospace',
							fontWeight: 600,
							letterSpacing: '.2rem',
							color: 'inherit',
							textDecoration: 'none',
						}}>
						{'PALAK OPTICALS'}
					</Typography>
					<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
						{
							pages.map(page => (
								<Button key={page} sx={{ my: 2, color: 'white', display: 'block' }}>
									{page}
								</Button>
							))
						}
					</Box>
					<Box sx={{ flexGrow: 0 }}>
						<LoginComponent />
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
};

export default AppBarComponent;
