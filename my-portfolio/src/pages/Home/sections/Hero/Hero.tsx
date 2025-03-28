import { Box, Container, Grid, styled, Typography } from "@mui/material"
import Avatar from "../../../../assets/img/Avatar.jpeg"
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';
import StyledButton from "../../../../components/StyledButton/StyledButton";

const Hero = () => {

    const StyledHero = styled("div")(({theme})=>({
        backgroundColor: theme.palette.primary.main,
        height: "100vh",
        display: "flex",
        alignItems: "center",
    }))

    const StyledImg = styled("img")(({theme})=>({
        width: "80%",
        borderRadius: "50%",
        border: `2px solid ${theme.palette.secondary.contrastText}`,
    }))


    return (
      <>
        <StyledHero>
            <Container maxWidth="lg"> {/* container de responsividade p/ tamanhos de tela maiores */}
                <Grid container spacing={2}> {/* espaço dos containers */}
                    {/* xs = responsividade para telas pequenas | md = responsividade para telas médias */}
                    <Grid item xs={12} md={5}> {/* tamanho da tela que ocupa | nesse caso xs = 12 de 12 e md = 4 de 12 */}
                        <Box position="relative">
                        <Box position="relative" textAlign="center">
                        <StyledImg src={Avatar} />
                        </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={7}> 
                        {/* primary = tema cor padrão do material UI | vai ser mudado depois. */}
                        <Typography color="primary.contrastText" variant="h1" textAlign="center" pb={2}>Gabriela Gomes</Typography>
                        <Typography color="primary.contrastText" variant="h2" textAlign="center">I'm a Front End Developer</Typography>
                        <Grid container display="flex" justifyContent="center" spacing={3} pt={3}>
                            <Grid item xs={12} md={4} display="flex" justifyContent="center"> {/* xs=12 deixa os botões um embaixo do outro |  md=4 deixa os botões um ao lado do outro */}
                                <StyledButton>
                                <DownloadIcon />  {/* icone escolhido do material UI */}
                                <Typography>
                                Download CV
                                </Typography>
                                </StyledButton>
                            </Grid>
                            <Grid item xs={12} md={4} display="flex" justifyContent="center">
                                <StyledButton>
                                <EmailIcon /> {/* icone escolhido do material UI */}
                                    <Typography>
                                    Contact me
                                    </Typography>
                                </StyledButton>     
                            </Grid>
                        </Grid>       
                    </Grid>
                    </Grid>
            </Container>
        </StyledHero>
      </>
    )
  }

  export default Hero
