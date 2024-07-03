"use client"

import { Box_Container, Container_text, Git_Link, H1, P } from "./styled";
import { LuConstruction } from "react-icons/lu";

import Grid from '@mui/material/Grid';
import { Btn_Neon } from '@/components/btn/btn_neon/Btn_Neon';
import { Btn_ConfirmV } from '@/components/btn/btn_confirmV/Btn_ConfirmV';
import { CardHover } from '../../components/cardHover/CardHover';
import { Toggle_On_Off } from '../../components/btn_toggler/Toggle_On_Off';
import { Nav_Link_Contact } from "../../components/nav_link_contact/Nav_Link_Contact";
import { Slice_Transition } from "../../components/slice_transition/Slice_Transition";
import { Relogio } from "../../components/relogio/Relogio";
import { Galery_Social } from "../../components/galery_social/Galery_Social";
import { Troca_Css } from "../../components/troca_de_estilo_c_click/troca_com_css/Troca_Css";
import { Troca_com_styled_component } from "../../components/troca_de_estilo_c_click/troca_com_styled_component/Troca_com_styled_component";
import { Neomorphism_Animation } from "../../components/neomorphism_animation/Neomorphism_Animation";
import { Carrossel_animation } from "../../components/carrossel_animation/Carrossel_animation";
import { Elemento_seguindo_mouse } from "../../components/ponto_que_segue_mouse/Elemento_seguindo_mouse";
import { Background_em_movimento } from "../../components/background_em_movimento/Background_em_movimento";
import { Dado_hover } from "../../components/dado_hover/Dado_hover";
import { Card_Hover_Show_Data } from "../../components/card_hover_show_data/Card_Hover_Show_Data";
import { Card_Hover_Diagonal_Show } from "../../components/card_hover_diagonal_show/Card_Hover_Diagonal_Show";
import { Tabela_de_Precos } from "../../components/tabela_de_precos/Tabela_de_Precos";
import { Water_Drop } from "../../components/water_drop/Water_Drop";
import { Liquido_Girando } from "@/components/liquido_girando/Liquido_Girando";
import { Dobra_Espacial } from "@/components/dobra_espacial/Dobra_Espacial";
import { Card_Contact } from "@/components/card_contact/Card_Contact";


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
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <Slice_Transition />
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <Relogio />
          </Grid>

          <Grid item xs={2} sm={4} md={4}>
            <Troca_Css />
            <Troca_com_styled_component />
          </Grid>

          <Grid item xs={2} sm={4} md={4}>
            <Galery_Social />
          </Grid>

          <Grid item xs={2} sm={4} md={4}>
            <Neomorphism_Animation />
          </Grid>

          <Grid item xs={2} sm={4} md={4}>
            <Carrossel_animation />
          </Grid>

          <Grid item xs={2} sm={4} md={4}>
            <Elemento_seguindo_mouse />
          </Grid>

          <Grid item xs={2} sm={4} md={4}>
            <Background_em_movimento />
          </Grid>

          <Grid item xs={2} sm={4} md={4}>
            <Dado_hover />
          </Grid>

          <Grid item xs={2} sm={4} md={4}>
            <Card_Hover_Show_Data />
          </Grid> 

          <Grid item xs={2} sm={4} md={4}>
            <Card_Hover_Diagonal_Show />
          </Grid> 

          <Grid item xs={2} sm={4} md={4}>
            <Tabela_de_Precos />
          </Grid>

          <Grid item xs={2} sm={4} md={4}>
            <Water_Drop/>
          </Grid> 
          
          <Grid item xs={2} sm={4} md={4}>
            <Liquido_Girando/>
          </Grid> 

          <Grid item xs={2} sm={4} md={4}>
            <Dobra_Espacial/>
          </Grid>

          <Grid item xs={2} sm={4} md={4}>
            <Card_Contact />
          </Grid>

        </Grid>
      </Box_Container>
    </main>
  );
}

