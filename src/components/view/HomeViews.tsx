"use client"

import { Box_Container, Container_text, Git_Link, H1, P } from "./styled";
import { LuConstruction } from "react-icons/lu";

import Grid from '@mui/material/Grid';
import { Btn_Neon } from '@/components/btn/btn_neon/Btn_Neon';
import { Btn_ConfirmV } from '@/components/btn/btn_confirmV/Btn_ConfirmV';
import { CardHover } from '../cardHover/CardHover';
import { Toggle_On_Off } from '../btn_toggler/Toggle_On_Off';
import { Nav_Link_Contact } from "../nav_link_contact/Nav_Link_Contact";
import { Slice_Transition } from "../slice_transition/Slice_Transition";




export default function HomeViews() {
  return (
    <main>
    <Container_text>
      <H1>Bem-vindo ao meu projeto de estilização!</H1>
      <P>A ideia deste projeto é praticar e aprimorar minhas habilidades em CSS e Sass,
        reunindo diversos recursos de estilização em um único repositório no GitHub.
        Este é um exercício contínuo de aprendizado e melhoria, e estou animado para
        compartilhar essa jornada com a comunidade. Toda sugestão e feedback são bem-vindos!OBS: EM CONSTRUÇÃO <LuConstruction /> </P>
      <Git_Link href='https://github.com/Cassio-Ares/project_to_practice.git' target='_blank'>Acesse ao repositório</Git_Link>
      </Container_text>

      <Box_Container sx={{ flexGrow: 1 }}>
        <Grid container spacing={{ xs: 3, md: 10 }} columns={{ xs: 4, sm: 10, md: 12 }}>
          <Grid item xs={2} sm={4} md={4}>
            <Btn_Neon />
          </Grid>

          <Grid item xs={2} sm={4} md={4}>
            <CardHover />
          </Grid>

          <Grid item xs={2} sm={4} md={4}>
            <Btn_ConfirmV />
          </Grid>

          <Grid item xs={2} sm={4} md={4}>
            <Toggle_On_Off />
          </Grid>

          <Grid item xs={2} sm={4} md={4}>
            <Nav_Link_Contact />
          </Grid> */}
          <Grid item xs={2} sm={4} md={4}>
            <Slice_Transition />
          </Grid>
          
        </Grid>
      </Box_Container>
    </main>
  );
}

