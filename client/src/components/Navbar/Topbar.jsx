import { useContext } from 'react';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import { Badge, Box, IconButton, InputBase } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { ColorModeContext, tokens } from '../../theme';

const Topbar = () => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);
	const colorMode = useContext(ColorModeContext);

	return (
		<Box display="flex" justifyContent="space-between"  width="100%">
			{/* Search box */}
			<Box display="flex" bgcolor={colors.primary[400]} borderRadius={3}>
				<InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search...." />
				<IconButton type="button" sx={{ p: 1 }}>
					<SearchOutlinedIcon />
				</IconButton>
			</Box>

			{/* icon */}
			<Box display="flex">
				<IconButton size="large" onClick={colorMode.toggleColorMode}>
					{theme.palette.mode === 'dark' ? (
						<DarkModeOutlinedIcon />
					) : (
						<LightModeOutlinedIcon />
					)}
				</IconButton>
				<IconButton size="large">
					<Badge badgeContent={4} color="error">
						<NotificationsNoneOutlinedIcon />
					</Badge>
				</IconButton>
				<IconButton size="large">
					<SettingsOutlinedIcon />
				</IconButton>
				<IconButton size="large">
					<AccountCircleOutlinedIcon />
				</IconButton>
			</Box>
		</Box>
	);
};

export default Topbar;
