# 🚧 Em construção 🚧

[Clique para visualizar site](https://project-to-practice.vercel.app/)

# Rascunho:


##btn_neon

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
   

 ##CardHover

   * Position especifica metodos de posicionamento do elemento
       position: relative: O elemento é posicionado em relação à sua posição normal, permitindo ajustes com top, right, bottom e left.
       position: absolute: O elemento é posicionado em relação ao seu ancestral posicionado mais próximo, ignorando o fluxo normal.
       position: static: O elemento é posicionado de acordo com o fluxo normal do documento, sem efeitos de posicionamento adicionais.

    * curso: determina o estilo do cursor ao passar por um elemento 'pointer', 'grab','text' , ...

    * z-index: determina a ordem de empilhamento dos elementos por ex: z-index: 2 esta abaixo do z-index: 5.

    *overflow: determina como o conteúdo que excede as dimensões será tratado ou aprensentado (oculto, visivel, cortado) 
      overflow: hidden o conteúdo que excede as dimensões do elemento será cortado e não será visível nem rolável.

    * transition: permite definir a velocidade e intensidade das transições em animações, hover, quando houver mudança.
        transition: propriedade duração temporização delay
      ex: 
        transition: opacity 1s linear 0.5s;
         transition: all 0.4s ease-in-out; (all quer dizer a todas as propriedades)

    * transform: permite aplicar transformação em um elemento (2D ou 3D)
      ex:
        transform: translate(50px, 50px); /* Translação */
        transform: rotate(45deg); /* Rotação */
        transform: scale(1.5); /* Escala */
        transform: skew(10deg, 20deg); /* Inclinação */

        transform: translate3d(50px, 50px, 50px); /* Translação 3D */
        transform: rotateX(45deg); /* Rotação em torno do eixo X */
        transform: rotateY(45deg); /* Rotação em torno do eixo Y */
        transform: rotateZ(45deg); /* Rotação em torno do eixo Z */
        transform: scale3d(1.5, 1.5, 1.5); /* Escala 3D */

    * transform-origin permite determinar o origem de uma elemento transformado.
      transform-origin: x y z 
      
      ex: 
      transform-origin: 50% 0%;

      ## Sass
       ** @extend nome do que quero trazer.

        ex: 
         .class_name{
             box-sizing: border-box; 
             position: absolute;
             width: 400px;
             height: 10px;
             left: 0;
             cursor: pointer;
           }

          .outra_class_name{
           @extend .class_name (com isso trazemos todos os estilos da class_name)
            z-index: 10;
            color: transparent;
          }


      ** @for (loop for do sass)

        @for $i from X through XX {}

        ex: 
          @for $i from 0 through $numberOfTriggers {
	                         .trigger-#{$i} {
		                            top: (($i - 1) * $offset)+px;
	
	                        	&:hover ~ .plane {
		                          	$scaleY: ( (1 / $numberOfTriggers) * $i);
			                          height: ($i * $offset)+px;
			                          transition: initial;
		                      }
	                      }
                     }

      

 ##BTN_ConfirmV

   ** display:none oculta o elemento o removendo da tela.

   ** display:block torna o elemento um bloco que ocupa toda a largura horizontal disponivel.

   ** letter-spacing: 2px; cria um espaço x entre as letras 

   ** .class:hover{} o elemento hover cria alteração no elemento quando o mouse esta no elemento.
       ex: 
        .button:hover{
                background: #37BE77;
              }

   ** opacity: XX; cria uma opacidade no elemento sendo setado de 0 a 1 sendo 0 a opacidade total(100% transparente) e 1 sem opacidade.

   ** fill é usado para determinar a cor de preenchimento em um elemento vetorial (muito usado em SVG)
    ex: 
      fill: #fff; preencha de branco o elemento 

   ** stroke: usado para definir cor de traço de um elemento vetorial (contorno) (muito usado em SVG)
    ex: 
      stroke: #fff

   ** stroke-width: define a largura do traço de contorno de uma elemento vetorial (muito usado em SVG)
     ex:
      stroke-width: 2px;

   ** stroke-linecap:  definir o estilo de extremidade de uma linha ou caminho de uma elemento vetorial (muito usado em SVG)
     * butt: As linhas terminam exatamente no ponto final da linha ou caminho
     
     * round:  As linhas terminam com uma forma arredondada que se estende além do ponto final da linha ou caminho, com um raio igual 
              à metade da stroke-width.
              
     * square: As linhas terminam com uma forma quadrada que se estende além do ponto final da linha ou caminho, com um comprimento 
               igual à metade da stroke-width.

  ** stroke-dasharray: define um padrão de traços e lacunas em linhas ou caminhos  (muito usado em SVG)

  * stroke-dasharray: valor; podemos setar 1 ou 2 valores (Obs: se colocarmos 1 ele vai ser igual para comprimento e lacuna)

      ex:
        stroke-dasharray: 183 183;

  ** stroke-dashoffset: é usado para especificar um deslocamento inicial no padrão de traços de uma linha ou caminho 
    
     ex:
       stroke-dashoffset: 183; /*Define o deslocamento do traço usado para animação*/






        




















 
   
