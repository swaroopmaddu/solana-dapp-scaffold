import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import GlobalStyles from '@mui/material/GlobalStyles';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

function NavigationBar() {
    return (
        <React.Fragment>
            <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
            <CssBaseline />
            <AppBar position="static" color="default" elevation={0} sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }} >
                <Toolbar sx={{ flexWrap: 'wrap' }}>
                    <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
                        <Link href='/' variant="h6" color="inherit" noWrap sx={{textDecoration:'none'}}> Solana Starter </Link>
                    </Typography>
                    <nav>
                        <Link variant="button" color="text.primary" href="airdrop" sx={{ my: 1, mx: 1.5 }} > Airdrop </Link>
                        <Link variant="button" color="text.primary" href="about" sx={{ my: 1, mx: 1.5 }} > About </Link>
                        <Link variant="button" color="text.primary" href="contact" sx={{ my: 1, mx: 1.5 }} > Contact </Link>
                    </nav>
                        <WalletMultiButton />
                </Toolbar>
            </AppBar>
        </React.Fragment>
    );
}

export default NavigationBar;