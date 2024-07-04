# 🚧 Em construção 🚧

[Clique para visualizar site](https://project-to-practice.vercel.app/)

## Rascunho:
btn_neon
** seletores usados:
  a:nth-child() - n-ésimo filho de um elemento pai = nth-child

  ex: 
     <a href='#'>  {/*nth-child(1) da div */}
                <span></span> {/* a span: nth-child(1) */}
                <span></span> {/* a span: nth-child(2) */}
                <span></span> {/* a span: nth-child(3) */}
                <span></span> {/* a span: nth-child(4) */}
                btn_neon1
            </a>

** -webkit-box-reflect cria um reflexo do elemento 
    -webkit-box-reflect: direction offset mask-box-image; permite criar um reflexo de um elemento na web
    
    ex:
     -webkit-box-reflect: below 1px linear-gradient(transparent, #0005);

** filter: hue-rotate(deg)
   filter aplica efeitos visuais a um elemento como desfoque, transformações da cor ...
   filter: hue-rotate(deg)  gira o matiz de uma imagem no ângulo especificado, basicamente alterando a cor do elemento.

** animation:
   animation é usado para vincular uma animação em um elemento

   Estrutura: animation: nome duração temporização atraso contagem de interações direção modo_de_preenchimento play
   OBS: não é nescessario colocar setar todos estes ajustes 

   ex:  
   animation: animate3 1s linear infinite;
              nome(animate3)   duração( 1s)  temporização(linear) contagem de interação(infinite)   

** @keyframes name{}
      @keyframes determina o que vai acontecer em cada parte da animação podendo ser determinado em:
       %: 0%{}  10%{} ...;
       tempo: 0s{} 5s{} ...
       de/ para : from {} to{}

   ex: 
      @keyframes animate4 {
               0% {
                bottom: -100%;
               }
              50%,
             100% {
            bottom: 100%;
             }
       }
   
    
   
