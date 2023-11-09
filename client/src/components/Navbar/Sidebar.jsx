/* eslint-disable react/prop-types */
import { Box, Button, IconButton, Typography, useTheme } from '@mui/material';
import { useState } from 'react';
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { Link, Outlet } from 'react-router-dom';
import { tokens } from '../../theme';
import Topbar from './Topbar';
import SpeedOutlinedIcon from '@mui/icons-material/SpeedOutlined';
import AccessibleOutlinedIcon from '@mui/icons-material/AccessibleOutlined';

const Item = ({ title, to, selected, icon, setSelected }) => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);
	return (
		<MenuItem
			active={selected === title}
			style={{
				color: colors.grey[100],
				backgroundColor: colors.primary[400],
			}}
			onClick={() => setSelected(title)}
			icon={icon ? icon : ''}
		>
			<Typography>{title}</Typography>
			<Link to={to} />
		</MenuItem>
	);
};

const Sidebar = () => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);
	const [isCollapsed, setIsCollapsed] = useState(false);
	// const [is]
	const [selected, SetSelected] = useState('Dashboard');

	const user = JSON.parse(localStorage.getItem('user'));

	const adminNavigation = [
		{
			id: 1,
			title: 'Dashboard',
			icon: <SpeedOutlinedIcon />,
			path: '/dashboard',
		},
	];

	const patients = [
		{
			id: 1,
			title: 'Register Patients',
			path: '/dashboard/patient/register_patients',
		},
		{
			id: 2,
			title: 'View Patients',
			path: '/dashboard/patient/view_patients',
		},
		{
			id: 3,
			title: 'Manage Patients',
			path: '/dashboard/patient/manage_patients',
		},
		{
			id: 4,
			title: 'Discharge Patients',
			path: '/dashboard/patient/discharge_patients',
		},
		{
			id: 5,
			title: 'Patient Transfer',
			path: '/dashboard/patient/patient_transfer',
		},
	];
	return (
		<Box
			className="app"
			sx={{
				'& .pro-sidebar-inner': {
					background: `${colors.primary[400]} !important`,
				},
				'& .pro-icon-wrapper': {
					backgroundColor: 'transparent !important',
				},
				'& .pro-sub-menu >.pro-inner-list-item': {
					background: `${colors.primary[400]} !important`,
				},
				'& .pro-inner-item': {
					padding: '5px 35px 5px 20px !important',
				},
				'& .pro-inner-item:hover': {
					color: '#868dfb !important',
				},
				'& .pro-menu-item.active': {
					color: '#6870fa !important',
				},
			}}
		>
			<Box className="sidebar">
				<ProSidebar collapsed={isCollapsed}>
					<Menu iconShape="square">
						{/* LOGO AND MENU ICON */}
						<MenuItem
							onClick={() => setIsCollapsed(!isCollapsed)}
							icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
							style={{
								margin: '10px 0 20px 0',
								color: colors.grey[100],
							}}
						>
							{!isCollapsed && (
								<Box
									display="flex"
									justifyContent="space-between"
									alignItems="center"
									ml="15px"
								>
									<Typography
										variant="h3"
										color={colors.grey[100]}
										style={{ textTransform: 'uppercase' }}
									>
										{user.role}
									</Typography>
									<IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
										<MenuOutlinedIcon />
									</IconButton>
								</Box>
							)}
						</MenuItem>

						{user?.role === 'Admin' &&
							adminNavigation.map((nav, i) => (
								<Item
									key={i}
									title={nav.title}
									to={nav.path}
									icon={nav.icon}
									selected={selected}
									setSelected={SetSelected}
								/>
							))}

						<SubMenu
							icon={<AccessibleOutlinedIcon />}
							title="Patients"
							style={{
								color: colors.grey[100],
								backgroundColor: colors.primary[400],
							}}
						>
							{patients.map((patient, i) => (
								<Item
									key={i}
									title={patient.title}
									to={patient.path}
									selected={selected}
									setSelected={SetSelected}
								/>
							))}
						</SubMenu>
					</Menu>
				</ProSidebar>
			</Box>

			<Box className="content" ml={2} mt={1}>
				<Topbar />
				<Outlet></Outlet>
			</Box>
		</Box>
	);
};

export default Sidebar;
