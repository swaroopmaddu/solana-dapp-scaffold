import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { Grid } from '@mui/material';
import { FourGPlusMobiledataSharp, GitHub, LinkedIn, Twitter } from '@mui/icons-material';

function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary">
            {'Copyright © '}
            <Link href="https://swaroopmaddu.me">
                Swaroop Maddu
            </Link>{'  '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

export default function StickyFooter() {
    return (
        <Box component="footer" sx={{ py: 3, px: 2, mt: 'auto', backgroundColor: "#f5f5f5", borderTop: (theme) => `1px solid ${theme.palette.divider}`}} >
            <Container>
                <Grid container>
                    <Grid item xs={12} md={6}>
                        <Copyright />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box sx={{ display: 'flex', flexDirection: 'row', marginRight: '10px', justifyContent: "space-evenly", alignItems:'center' }}>
                            <Box sx={{display:'flex', alignItems:'center'}}>
                                <Twitter /> <Link href="https://twitter.com/MadduSwaroop">@MadduSwaroop</Link>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <GitHub /> <Link href="https://github.com/swaroopmaddu/">Github</Link>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <LinkedIn /> <Link href="https://www.linkedin.com/in/madduswaroop/">LinkedIn</Link>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>

            </Container>
        </Box>
    );
}