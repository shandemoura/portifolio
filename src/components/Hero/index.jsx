import { AvatarHero, AvatarImg } from "./styles"
import { Grid, Container, Typography, Button } from "@mui/material"
import DownloadIcon from "@mui/icons-material/Download"
import EmailIcon from "@mui/icons-material/Email"
import Avatar from "../../assets/images/profile.jpg"

export default function Hero() {
  return (
    <>
      <AvatarHero>
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <AvatarImg src={Avatar} />
            </Grid>
            <Grid item xs={12} md={8}>
              <Typography color="white" variant="h1" textAlign="center">
                Shande Moura
              </Typography>
              <Typography color="white" variant="h2" textAlign="center">
                I'm a Front-end Developer
              </Typography>
              <Grid container display="flex" justifyContent="center" mt={5}>
                <Grid
                  item
                  xs={12}
                  md={4}
                  display="flex"
                  justifyContent="center"
                >
                  <Button>
                    <DownloadIcon />
                    Download CV
                  </Button>
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={4}
                  display="flex"
                  justifyContent="center"
                >
                  <Button>
                    <EmailIcon />
                    Contact Me
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </AvatarHero>
    </>
  )
}
