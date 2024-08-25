import React from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";



const LandingPage = () => {

const navigate = useNavigate();

const handleSignIn = () => {
  navigate('/signin'); // Redireciona para a página de SignIn
};


  return (
    <div className="landing-page-5">
      <div className="header">
        <b className="magnifico">
          <img 
           style={{width:'52px'}}
           src="/logomarilia.png"
          
          />
        </b>
       
        <div className="buttons-group">
          <div className="button">
            <img
              className="icon-jam-icons-outline-l15"
              alt=""
              src="/icon--jamicons--outline--logos--plus.svg"
            />
            <div className="text-container5">
              <div className="menu-item1"></div>
            </div>
            <img
              className="icon-jam-icons-outline-l16"
              alt=""
              src="/icon--jamicons--outline--logos--arrowright.svg"
            />
            <div className="badge5">
              <div className="button-text">9</div>
            </div>
          </div>
          <div className="button1">
            <img
              className="icon-jam-icons-outline-l"
              alt=""
              src="/icon--jamicons--outline--logos--plus1.svg"
            />
            <div className="text-container6">
              <div className="menu-item1"  onClick={handleSignIn}>Entrar</div>
            </div>
            <img
              className="icon-jam-icons-outline-l2"
              alt=""
              src="/icon--jamicons--outline--logos--arrowright1.svg"
            />
          </div>
        </div>
      </div>
      <div className="section">
        <div className="decorationicons">
          <div className="row">
            <img
              className="icon-jam-icons-outline-l19"
              alt=""
              src="/icon--jamicons--outline--logos--plus2.svg"
            />
            <img
              className="icon-jam-icons-outline-l20"
              alt=""
              src="/icon--jamicons--outline--logos--plus2.svg"
            />
            <img
              className="icon-jam-icons-outline-l21"
              alt=""
              src="/icon--jamicons--outline--logos--plus2.svg"
            />
            <img
              className="icon-jam-icons-outline-l22"
              alt=""
              src="/icon--jamicons--outline--logos--plus2.svg"
            />
            <img
              className="icon-jam-icons-outline-l23"
              alt=""
              src="/icon--jamicons--outline--logos--plus2.svg"
            />
            <img
              className="icon-jam-icons-outline-l24"
              alt=""
              src="/icon--jamicons--outline--logos--plus2.svg"
            />
          </div>
          <div className="row">
            <img
              className="icon-jam-icons-outline-l19"
              alt=""
              src="/icon--jamicons--outline--logos--plus2.svg"
            />
            <img
              className="icon-jam-icons-outline-l20"
              alt=""
              src="/icon--jamicons--outline--logos--plus2.svg"
            />
            <img
              className="icon-jam-icons-outline-l21"
              alt=""
              src="/icon--jamicons--outline--logos--plus2.svg"
            />
            <img
              className="icon-jam-icons-outline-l22"
              alt=""
              src="/icon--jamicons--outline--logos--plus2.svg"
            />
            <img
              className="icon-jam-icons-outline-l23"
              alt=""
              src="/icon--jamicons--outline--logos--plus3.svg"
            />
            <img
              className="icon-jam-icons-outline-l24"
              alt=""
              src="/icon--jamicons--outline--logos--plus2.svg"
            />
          </div>
          <div className="row">
            <img
              className="icon-jam-icons-outline-l19"
              alt=""
              src="/icon--jamicons--outline--logos--plus2.svg"
            />
            <img
              className="icon-jam-icons-outline-l20"
              alt=""
              src="/icon--jamicons--outline--logos--plus2.svg"
            />
            <img
              className="icon-jam-icons-outline-l21"
              alt=""
              src="/icon--jamicons--outline--logos--plus2.svg"
            />
            <img
              className="icon-jam-icons-outline-l22"
              alt=""
              src="/icon--jamicons--outline--logos--plus2.svg"
            />
            <img
              className="icon-jam-icons-outline-l23"
              alt=""
              src="/icon--jamicons--outline--logos--plus2.svg"
            />
            <img
              className="icon-jam-icons-outline-l24"
              alt=""
              src="/icon--jamicons--outline--logos--plus2.svg"
            />
          </div>
          <div className="row">
            <img
              className="icon-jam-icons-outline-l19"
              alt=""
              src="/icon--jamicons--outline--logos--plus2.svg"
            />
            <img
              className="icon-jam-icons-outline-l20"
              alt=""
              src="/icon--jamicons--outline--logos--plus2.svg"
            />
            <img
              className="icon-jam-icons-outline-l21"
              alt=""
              src="/icon--jamicons--outline--logos--plus2.svg"
            />
            <img
              className="icon-jam-icons-outline-l22"
              alt=""
              src="/icon--jamicons--outline--logos--plus2.svg"
            />
            <img
              className="icon-jam-icons-outline-l23"
              alt=""
              src="/icon--jamicons--outline--logos--plus2.svg"
            />
            <img
              className="icon-jam-icons-outline-l24"
              alt=""
              src="/icon--jamicons--outline--logos--plus4.svg"
            />
          </div>
          <div className="row">
            <img
              className="icon-jam-icons-outline-l19"
              alt=""
              src="/icon--jamicons--outline--logos--plus2.svg"
            />
            <img
              className="icon-jam-icons-outline-l20"
              alt=""
              src="/icon--jamicons--outline--logos--plus2.svg"
            />
            <img
              className="icon-jam-icons-outline-l21"
              alt=""
              src="/icon--jamicons--outline--logos--plus2.svg"
            />
            <img
              className="icon-jam-icons-outline-l22"
              alt=""
              src="/icon--jamicons--outline--logos--plus2.svg"
            />
            <img
              className="icon-jam-icons-outline-l23"
              alt=""
              src="/icon--jamicons--outline--logos--plus2.svg"
            />
            <img
              className="icon-jam-icons-outline-l24"
              alt=""
              src="/icon--jamicons--outline--logos--plus2.svg"
            />
          </div>
          <div className="row">
            <img
              className="icon-jam-icons-outline-l19"
              alt=""
              src="/icon--jamicons--outline--logos--plus2.svg"
            />
            <img
              className="icon-jam-icons-outline-l20"
              alt=""
              src="/icon--jamicons--outline--logos--plus2.svg"
            />
            <img
              className="icon-jam-icons-outline-l21"
              alt=""
              src="/icon--jamicons--outline--logos--plus5.svg"
            />
            <img
              className="icon-jam-icons-outline-l22"
              alt=""
              src="/icon--jamicons--outline--logos--plus2.svg"
            />
            <img
              className="icon-jam-icons-outline-l23"
              alt=""
              src="/icon--jamicons--outline--logos--plus2.svg"
            />
            <img
              className="icon-jam-icons-outline-l24"
              alt=""
              src="/icon--jamicons--outline--logos--plus2.svg"
            />
          </div>
        </div>
        <div className="left">
          <div className="section-text">
            <div className="top">
              <b className="caption">Caption</b>
              <div className="main-headline">Uma vida melhor pede pessoas melhores.</div>
              <div className="secondary-headline">Headline Two</div>
            </div>
            <div className="paragraph">{`Nossas oficinas formativas, foram. `}</div>
            <div className="buttons-group1">
              <div className="button1">
                <img
                  className="icon-jam-icons-outline-l"
                  alt=""
                  src="/icon--jamicons--outline--logos--plus1.svg"
                />
                <div className="text-container6">
                  <div className="menu-item1">Button Text</div>
                </div>
                <img
                  className="icon-jam-icons-outline-l2"
                  alt=""
                  src="/icon--jamicons--outline--logos--arrowright1.svg"
                />
              </div>
              <div className="button-2">
                <img
                  className="icon-jam-icons-outline-l"
                  alt=""
                  src="/icon--jamicons--outline--logos--plus.svg"
                />
                <div className="text-container6">
                  <div className="menu-item1">Button Text</div>
                </div>
                <img
                  className="icon-jam-icons-outline-l2"
                  alt=""
                  src="/icon--jamicons--outline--logos--arrowright.svg"
                />
              </div>
              <div className="button-3">
                <img
                  className="icon-jam-icons-outline-l15"
                  alt=""
                  src="/icon--jamicons--outline--logos--plus.svg"
                />
                <div className="text-container5">
                  <div className="menu-item1">Button Text</div>
                </div>
                <img
                  className="icon-jam-icons-outline-l60"
                  alt=""
                  src="/icon--jamicons--outline--logos--arrowright.svg"
                />
                <div className="badge5">
                  <div className="button-text">9</div>
                </div>
              </div>
            </div>
          </div>
          <div className="buttons-group2">
            <div className="field">
              <img
                className="icon-jam-icons-outline-l2"
                alt=""
                src="/icon--jamicons--outline--logos--envelope.svg"
              />
              <div className="companyname-202x">Nossas novidades </div>
              <img
                className="icon-jam-icons-outline-l"
                alt=""
                src="/icon--jamicons--outline--logos--chevrondown1.svg"
              />
            </div>
            <div className="button1">
              <img
                className="icon-jam-icons-outline-l"
                alt=""
                src="/icon--jamicons--outline--logos--plus1.svg"
              />
              <div className="text-container6">
                <div className="menu-item1">Se inscreva</div>
              </div>
              <img
                className="icon-jam-icons-outline-l2"
                alt=""
                src="/icon--jamicons--outline--logos--arrowright1.svg"
              />
            </div>
          </div>
          <div className="press">
            <div className="logos">
              <div className="logo-grey">
                <img className="vector-icon" alt="" src="/vector.svg" />
                <b className="shells">SHELLS</b>
              </div>
              <div className="logo-grey">
                <img className="logo-grey-child" alt="" src="/group-45.svg" />
                <b className="shells">SmartFinder</b>
              </div>
              <div className="logo-grey">
                <img className="logo-grey-item" alt="" src="/group-46.svg" />
                <b className="shells">ArtVenue</b>
              </div>
              <div className="logo-grey">
                <img className="vector-icon1" alt="" src="/vector1.svg" />
                <b className="shells">WAVES</b>
              </div>
            </div>
          </div>
        </div>
        <div className="left1">
          <div className="screendesktop">
            <div className="top-bar">
              <div className="circles">
                <img
                  className="icon-jam-icons-filled-ci"
                  alt=""
                  src="/icon--jamicons--filled--circlef.svg"
                />
                <img
                  className="icon-jam-icons-filled-ci"
                  alt=""
                  src="/icon--jamicons--filled--circlef1.svg"
                />
                <img
                  className="icon-jam-icons-filled-ci"
                  alt=""
                  src="/icon--jamicons--filled--circlef2.svg"
                />
              </div>
              <div className="arrows">
                <img
                  className="icon-jam-icons-outline-l2"
                  alt=""
                  src="/icon--jamicons--outline--logos--chevronleft.svg"
                />
                <img
                  className="icon-jam-icons-outline-l2"
                  alt=""
                  src="/icon--jamicons--outline--logos--chevronright.svg"
                />
              </div>
              <div className="address-bar">
                <div className="button-text">app.magnifi.co</div>
              </div>
            </div>
            <div className="video">
              <div className="icon">
                <img
                  className="icon-jam-icons-outline-l67"
                  alt=""
                  src="/icon--jamicons--outline--logos--play.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section1">
        <div className="decorationicons1">
          <div className="row">
            <img
              className="icon-jam-icons-outline-l19"
              alt=""
              src="/icon--jamicons--outline--logos--plus2.svg"
            />
            <img
              className="icon-jam-icons-outline-l20"
              alt=""
              src="/icon--jamicons--outline--logos--plus2.svg"
            />
            <img
              className="icon-jam-icons-outline-l21"
              alt=""
              src="/icon--jamicons--outline--logos--plus2.svg"
            />
            <img
              className="icon-jam-icons-outline-l22"
              alt=""
              src="/icon--jamicons--outline--logos--plus2.svg"
            />
            <img
              className="icon-jam-icons-outline-l23"
              alt=""
              src="/icon--jamicons--outline--logos--plus2.svg"
            />
            <img
              className="icon-jam-icons-outline-l24"
              alt=""
              src="/icon--jamicons--outline--logos--plus2.svg"
            />
          </div>
          <div className="row">
            <img
              className="icon-jam-icons-outline-l19"
              alt=""
              src="/icon--jamicons--outline--logos--plus4.svg"
            />
            <img
              className="icon-jam-icons-outline-l20"
              alt=""
              src="/icon--jamicons--outline--logos--plus2.svg"
            />
            <img
              className="icon-jam-icons-outline-l21"
              alt=""
              src="/icon--jamicons--outline--logos--plus2.svg"
            />
            <img
              className="icon-jam-icons-outline-l22"
              alt=""
              src="/icon--jamicons--outline--logos--plus2.svg"
            />
            <img
              className="icon-jam-icons-outline-l23"
              alt=""
              src="/icon--jamicons--outline--logos--plus3.svg"
            />
            <img
              className="icon-jam-icons-outline-l24"
              alt=""
              src="/icon--jamicons--outline--logos--plus2.svg"
            />
          </div>
          <div className="row">
            <img
              className="icon-jam-icons-outline-l19"
              alt=""
              src="/icon--jamicons--outline--logos--plus2.svg"
            />
            <img
              className="icon-jam-icons-outline-l20"
              alt=""
              src="/icon--jamicons--outline--logos--plus2.svg"
            />
            <img
              className="icon-jam-icons-outline-l21"
              alt=""
              src="/icon--jamicons--outline--logos--plus2.svg"
            />
            <img
              className="icon-jam-icons-outline-l22"
              alt=""
              src="/icon--jamicons--outline--logos--plus2.svg"
            />
            <img
              className="icon-jam-icons-outline-l23"
              alt=""
              src="/icon--jamicons--outline--logos--plus2.svg"
            />
            <img
              className="icon-jam-icons-outline-l24"
              alt=""
              src="/icon--jamicons--outline--logos--plus2.svg"
            />
          </div>
          <div className="row">
            <img
              className="icon-jam-icons-outline-l19"
              alt=""
              src="/icon--jamicons--outline--logos--plus2.svg"
            />
            <img
              className="icon-jam-icons-outline-l20"
              alt=""
              src="/icon--jamicons--outline--logos--plus3.svg"
            />
            <img
              className="icon-jam-icons-outline-l21"
              alt=""
              src="/icon--jamicons--outline--logos--plus2.svg"
            />
            <img
              className="icon-jam-icons-outline-l22"
              alt=""
              src="/icon--jamicons--outline--logos--plus2.svg"
            />
            <img
              className="icon-jam-icons-outline-l23"
              alt=""
              src="/icon--jamicons--outline--logos--plus2.svg"
            />
            <img
              className="icon-jam-icons-outline-l24"
              alt=""
              src="/icon--jamicons--outline--logos--plus4.svg"
            />
          </div>
          <div className="row">
            <img
              className="icon-jam-icons-outline-l19"
              alt=""
              src="/icon--jamicons--outline--logos--plus5.svg"
            />
            <img
              className="icon-jam-icons-outline-l20"
              alt=""
              src="/icon--jamicons--outline--logos--plus2.svg"
            />
            <img
              className="icon-jam-icons-outline-l21"
              alt=""
              src="/icon--jamicons--outline--logos--plus2.svg"
            />
            <img
              className="icon-jam-icons-outline-l22"
              alt=""
              src="/icon--jamicons--outline--logos--plus2.svg"
            />
            <img
              className="icon-jam-icons-outline-l23"
              alt=""
              src="/icon--jamicons--outline--logos--plus2.svg"
            />
            <img
              className="icon-jam-icons-outline-l24"
              alt=""
              src="/icon--jamicons--outline--logos--plus2.svg"
            />
          </div>
          <div className="row">
            <img
              className="icon-jam-icons-outline-l19"
              alt=""
              src="/icon--jamicons--outline--logos--plus2.svg"
            />
            <img
              className="icon-jam-icons-outline-l20"
              alt=""
              src="/icon--jamicons--outline--logos--plus2.svg"
            />
            <img
              className="icon-jam-icons-outline-l21"
              alt=""
              src="/icon--jamicons--outline--logos--plus3.svg"
            />
            <img
              className="icon-jam-icons-outline-l22"
              alt=""
              src="/icon--jamicons--outline--logos--plus2.svg"
            />
            <img
              className="icon-jam-icons-outline-l23"
              alt=""
              src="/icon--jamicons--outline--logos--plus2.svg"
            />
            <img
              className="icon-jam-icons-outline-l24"
              alt=""
              src="/icon--jamicons--outline--logos--plus2.svg"
            />
          </div>
        </div>
        <div className="left2">
          <div className="picture-wrapper">
            <img className="picture-icon" alt="" src="/picture@2x.png" />
          </div>
          <div className="picture-container">
            <img className="picture-icon" alt="" src="/picture1@2x.png" />
          </div>
          <div className="picture-frame">
            <img className="picture-icon" alt="" src="/picture2@2x.png" />
          </div>
        </div>
        <div className="section-text1">
          <div className="top">
            <b className="caption">Caption</b>
            <div className="main-headline1">Headline One</div>
            <div className="secondary-headline1">Conheca nosso trabalho</div>
          </div>
          <div className="paragraph">
          O método de atendimento psicológico que apresentamos é especialmente voltado para melhorar as áreas financeiras e sentimentais da vida. Com uma abordagem integrativa, nosso método combina técnicas de terapia cognitivo-comportamental com estratégias de coaching financeiro, ajudando os clientes a identificar e modificar padrões de pensamento que afetam suas decisões financeiras e relacionamentos pessoais. Além disso, exploramos crenças limitantes e traumas que possam estar interferindo no bem-estar emocional e financeiro, promovendo uma transformação profunda e sustentável para alcançar equilíbrio e prosperidade em ambos os aspectos da vida.
          </div>
          <div className="buttons-group3">
            <div className="button3">
              <img
                className="icon-jam-icons-outline-l15"
                alt=""
                src="/icon--jamicons--outline--logos--plus.svg"
              />
              <div className="text-container11">
                <div className="menu-item1">Saber mais</div>
              </div>
              <img
                className="icon-jam-icons-outline-l60"
                alt=""
                src="/icon--jamicons--outline--logos--arrowright.svg"
              />
              <div className="badge5">
                <div className="button-text">9</div>
              </div>
            </div>
            <div className="button-2">
              <img
                className="icon-jam-icons-outline-l"
                alt=""
                src="/icon--jamicons--outline--logos--plus.svg"
              />
              <div className="text-container6">
                <div className="menu-item1">Button Text</div>
              </div>
              <img
                className="icon-jam-icons-outline-l2"
                alt=""
                src="/icon--jamicons--outline--logos--arrowright.svg"
              />
            </div>
            <div className="button-3">
              <img
                className="icon-jam-icons-outline-l15"
                alt=""
                src="/icon--jamicons--outline--logos--plus.svg"
              />
              <div className="text-container5">
                <div className="menu-item1">Button Text</div>
              </div>
              <img
                className="icon-jam-icons-outline-l60"
                alt=""
                src="/icon--jamicons--outline--logos--arrowright.svg"
              />
              <div className="badge5">
                <div className="button-text">9</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section2">
        <div className="section-text2">
          <div className="top">
            <b className="caption">Caption</b>
            <div className="main-headline1">Headline One</div>
            <div className="secondary-headline1">
              Desenvolva ferramentas de auto cuidado, controle emocional e financeiro.
            </div>
          </div>
          <div className="paragraph">
          Nosso método de desenvolvimento de ferramentas emocionais é projetado para capacitar indivíduos a construir uma vida mais saudável e equilibrada. Através de sessões terapêuticas focadas na autocompreensão e na regulação emocional, ajudamos os clientes a identificar gatilhos emocionais e a desenvolver habilidades de enfrentamento eficazes. Ensinamos técnicas de mindfulness, gestão de estresse e comunicação assertiva, permitindo que as pessoas naveguem pelos desafios diários com resiliência e clareza. Ao fortalecer essas ferramentas emocionais, promovemos uma maior capacidade de tomar decisões conscientes, cultivar relacionamentos saudáveis e manter uma vida mental e física mais equilibrada e satisfatória.
          </div>
          <div className="buttons-group3">
            <div className="button3">
              <img
                className="icon-jam-icons-outline-l15"
                alt=""
                src="/icon--jamicons--outline--logos--plus.svg"
              />
              <div className="text-container11">
                <div className="menu-item1">Saber mais</div>
              </div>
              <img
                className="icon-jam-icons-outline-l60"
                alt=""
                src="/icon--jamicons--outline--logos--arrowright.svg"
              />
              <div className="badge5">
                <div className="button-text">9</div>
              </div>
            </div>
            <div className="button-2">
              <img
                className="icon-jam-icons-outline-l"
                alt=""
                src="/icon--jamicons--outline--logos--plus.svg"
              />
              <div className="text-container6">
                <div className="menu-item1">Button Text</div>
              </div>
              <img
                className="icon-jam-icons-outline-l2"
                alt=""
                src="/icon--jamicons--outline--logos--arrowright.svg"
              />
            </div>
            <div className="button-3">
              <img
                className="icon-jam-icons-outline-l15"
                alt=""
                src="/icon--jamicons--outline--logos--plus.svg"
              />
              <div className="text-container5">
                <div className="menu-item1">Button Text</div>
              </div>
              <img
                className="icon-jam-icons-outline-l60"
                alt=""
                src="/icon--jamicons--outline--logos--arrowright.svg"
              />
              <div className="badge5">
                <div className="button-text">9</div>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <img className="chart-icon" alt="" src="/chart.svg" />
          <div className="apps">
            <div className="app-thumbnail">
              <div className="app-icon">
                <img className="app-icon-child" alt="" src="/group-4.svg" />
              </div>
            </div>
            <div className="app-thumbnail1">
              <div className="app-icon">
                <img className="app-icon-item" alt="" src="/group-7.svg" />
              </div>
            </div>
            <div className="app-thumbnail2">
              <div className="app-icon2">
                <img className="app-icon-inner" alt="" src="/group-6.svg" />
              </div>
            </div>
            <div className="app-thumbnail3">
              <div className="app-icon">
                <img className="app-logo-05-icon" alt="" src="/applogo05.svg" />
              </div>
            </div>
            <div className="app-thumbnail4">
              <div className="app-icon4">
                <img className="group-icon" alt="" src="/group-8@2x.png" />
              </div>
            </div>
            <div className="app-thumbnail5">
              <div className="app-icon4">
                <img
                  className="app-icon-child1"
                  alt=""
                  src="/group-11@2x.png"
                />
              </div>
            </div>
            <div className="app-thumbnail6">
              <div className="app-icon4">
                <img className="group-icon1" alt="" src="/group.svg" />
              </div>
            </div>
            <div className="app-thumbnail7">
              <div className="app-icon">
                <img className="app-icon-child2" alt="" src="/group-9@2x.png" />
              </div>
            </div>
            <div className="app-thumbnail8">
              <div className="app-icon">
                <img className="vector-icon2" alt="" src="/vector2.svg" />
              </div>
            </div>
            <div className="app-thumbnail9">
              <div className="app-icon4">
                <img
                  className="app-icon-child3"
                  alt=""
                  src="/group-10@2x.png"
                />
              </div>
            </div>
            <div className="app-thumbnail10">
              <div className="app-icon">
                <img className="app-icon-child4" alt="" src="/group-3.svg" />
              </div>
            </div>
            <div className="app-thumbnail11">
              <div className="app-icon4">
                <img className="app-icon-child5" alt="" src="/group-5.svg" />
              </div>
            </div>
            <div className="app-thumbnail12">
              <div className="app-icon">
                <img className="vector-icon3" alt="" src="/vector3.svg" />
              </div>
            </div>
            <div className="app-thumbnail13">
              <div className="app-icon">
                <img className="app-icon-child6" alt="" src="/group-2.svg" />
              </div>
            </div>
            <div className="app-thumbnail14">
              <div className="app-icon4">
                <img className="app-icon-child7" alt="" src="/group-1.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section3">
        <div className="container3">
          <div className="left3" />
          <div className="section-text3">
            <div className="top">
              <b className="caption3">Caption</b>
              <div className="main-headline3">Headline One</div>
              <div className="secondary-headline3">
                Tomando o controle da sua vida.
              </div>
            </div>
            <div className="paragraph3">
            É hora de tomar o controle da sua vida! Lembre-se de que você é o autor da sua história. Cada decisão, por menor que seja, molda o seu caminho. Enfrente os desafios com coragem, acredite no seu potencial e crie o futuro que você deseja. A mudança começa agora, com você!
            </div>
            <div className="buttons-group3">
              <div className="button5">
                <img
                  className="icon-jam-icons-outline-l15"
                  alt=""
                  src="/icon--jamicons--outline--logos--plus.svg"
                />
                <div className="text-container11">
                  <div className="menu-item1"> </div>
                </div>
                <img
                  className="icon-jam-icons-outline-l60"
                  alt=""
                  src="/icon--jamicons--outline--logos--arrowright1.svg"
                />
                <div className="badge11">
                  <div className="button-text">9</div>
                </div>
              </div>
              <div className="button-2">
                <img
                  className="icon-jam-icons-outline-l"
                  alt=""
                  src="/icon--jamicons--outline--logos--plus.svg"
                />
                <div className="text-container6">
                  <div className="menu-item1">Button Text</div>
                </div>
                <img
                  className="icon-jam-icons-outline-l2"
                  alt=""
                  src="/icon--jamicons--outline--logos--arrowright.svg"
                />
              </div>
              <div className="button-3">
                <img
                  className="icon-jam-icons-outline-l15"
                  alt=""
                  src="/icon--jamicons--outline--logos--plus.svg"
                />
                <div className="text-container5">
                  <div className="menu-item1">Button Text</div>
                </div>
                <img
                  className="icon-jam-icons-outline-l60"
                  alt=""
                  src="/icon--jamicons--outline--logos--arrowright.svg"
                />
                <div className="badge5">
                  <div className="button-text">9</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section4">
        <div className="decorationicons2">
          <div className="row">
            <img
              className="icon-jam-icons-outline-l19"
              alt=""
              src="/icon--jamicons--outline--logos--plus2.svg"
            />
            <img
              className="icon-jam-icons-outline-l20"
              alt=""
              src="/icon--jamicons--outline--logos--plus2.svg"
            />
            <img
              className="icon-jam-icons-outline-l21"
              alt=""
              src="/icon--jamicons--outline--logos--plus2.svg"
            />
            <img
              className="icon-jam-icons-outline-l22"
              alt=""
              src="/icon--jamicons--outline--logos--plus2.svg"
            />
            <img
              className="icon-jam-icons-outline-l23"
              alt=""
              src="/icon--jamicons--outline--logos--plus3.svg"
            />
            <img
              className="icon-jam-icons-outline-l24"
              alt=""
              src="/icon--jamicons--outline--logos--plus2.svg"
            />
          </div>
          <div className="row">
            <img
              className="icon-jam-icons-outline-l19"
              alt=""
              src="/icon--jamicons--outline--logos--plus2.svg"
            />
            <img
              className="icon-jam-icons-outline-l20"
              alt=""
              src="/icon--jamicons--outline--logos--plus5.svg"
            />
            <img
              className="icon-jam-icons-outline-l21"
              alt=""
              src="/icon--jamicons--outline--logos--plus2.svg"
            />
            <img
              className="icon-jam-icons-outline-l22"
              alt=""
              src="/icon--jamicons--outline--logos--plus2.svg"
            />
            <img
              className="icon-jam-icons-outline-l23"
              alt=""
              src="/icon--jamicons--outline--logos--plus2.svg"
            />
            <img
              className="icon-jam-icons-outline-l24"
              alt=""
              src="/icon--jamicons--outline--logos--plus2.svg"
            />
          </div>
          <div className="row">
            <img
              className="icon-jam-icons-outline-l19"
              alt=""
              src="/icon--jamicons--outline--logos--plus2.svg"
            />
            <img
              className="icon-jam-icons-outline-l20"
              alt=""
              src="/icon--jamicons--outline--logos--plus2.svg"
            />
            <img
              className="icon-jam-icons-outline-l21"
              alt=""
              src="/icon--jamicons--outline--logos--plus2.svg"
            />
            <img
              className="icon-jam-icons-outline-l22"
              alt=""
              src="/icon--jamicons--outline--logos--plus2.svg"
            />
            <img
              className="icon-jam-icons-outline-l23"
              alt=""
              src="/icon--jamicons--outline--logos--plus2.svg"
            />
            <img
              className="icon-jam-icons-outline-l24"
              alt=""
              src="/icon--jamicons--outline--logos--plus2.svg"
            />
          </div>
          <div className="row">
            <img
              className="icon-jam-icons-outline-l19"
              alt=""
              src="/icon--jamicons--outline--logos--plus2.svg"
            />
            <img
              className="icon-jam-icons-outline-l20"
              alt=""
              src="/icon--jamicons--outline--logos--plus2.svg"
            />
            <img
              className="icon-jam-icons-outline-l21"
              alt=""
              src="/icon--jamicons--outline--logos--plus2.svg"
            />
            <img
              className="icon-jam-icons-outline-l22"
              alt=""
              src="/icon--jamicons--outline--logos--plus2.svg"
            />
            <img
              className="icon-jam-icons-outline-l23"
              alt=""
              src="/icon--jamicons--outline--logos--plus2.svg"
            />
            <img
              className="icon-jam-icons-outline-l24"
              alt=""
              src="/icon--jamicons--outline--logos--plus4.svg"
            />
          </div>
          <div className="row">
            <img
              className="icon-jam-icons-outline-l19"
              alt=""
              src="/icon--jamicons--outline--logos--plus2.svg"
            />
            <img
              className="icon-jam-icons-outline-l20"
              alt=""
              src="/icon--jamicons--outline--logos--plus2.svg"
            />
            <img
              className="icon-jam-icons-outline-l21"
              alt=""
              src="/icon--jamicons--outline--logos--plus2.svg"
            />
            <img
              className="icon-jam-icons-outline-l22"
              alt=""
              src="/icon--jamicons--outline--logos--plus2.svg"
            />
            <img
              className="icon-jam-icons-outline-l23"
              alt=""
              src="/icon--jamicons--outline--logos--plus5.svg"
            />
            <img
              className="icon-jam-icons-outline-l24"
              alt=""
              src="/icon--jamicons--outline--logos--plus2.svg"
            />
          </div>
          <div className="row">
            <img
              className="icon-jam-icons-outline-l19"
              alt=""
              src="/icon--jamicons--outline--logos--plus2.svg"
            />
            <img
              className="icon-jam-icons-outline-l20"
              alt=""
              src="/icon--jamicons--outline--logos--plus2.svg"
            />
            <img
              className="icon-jam-icons-outline-l21"
              alt=""
              src="/icon--jamicons--outline--logos--plus3.svg"
            />
            <img
              className="icon-jam-icons-outline-l22"
              alt=""
              src="/icon--jamicons--outline--logos--plus2.svg"
            />
            <img
              className="icon-jam-icons-outline-l23"
              alt=""
              src="/icon--jamicons--outline--logos--plus2.svg"
            />
            <img
              className="icon-jam-icons-outline-l24"
              alt=""
              src="/icon--jamicons--outline--logos--plus2.svg"
            />
          </div>
        </div>
        <div className="header1">
          <div className="section-text2">
            <div className="section-text">
              <div className="top">
                <b className="caption">Caption</b>
                <div className="main-headline1">Headline One</div>
                <div className="secondary-headline1">Otmizando seu tempo</div>
              </div>
              <div className="paragraph4">
              Otimize seu tempo e transforme sua rotina! Ao gerenciar melhor suas horas, você libera espaço para o que realmente importa. Foque no essencial, elimine distrações e veja como pequenas mudanças podem gerar grandes resultados. O tempo é seu recurso mais valioso—use-o com sabedoria para viver com mais propósito e produtividade.
              </div>
              <div className="buttons-group1">
                <div className="button3">
                  <img
                    className="icon-jam-icons-outline-l15"
                    alt=""
                    src="/icon--jamicons--outline--logos--plus.svg"
                  />
                  <div className="text-container5">
                    <div className="menu-item1">Check the tools</div>
                  </div>
                  <img
                    className="icon-jam-icons-outline-l60"
                    alt=""
                    src="/icon--jamicons--outline--logos--arrowright.svg"
                  />
                  <div className="badge5">
                    <div className="button-text">9</div>
                  </div>
                </div>
                <div className="button-2">
                  <img
                    className="icon-jam-icons-outline-l"
                    alt=""
                    src="/icon--jamicons--outline--logos--plus.svg"
                  />
                  <div className="text-container6">
                    <div className="menu-item1">Button Text</div>
                  </div>
                  <img
                    className="icon-jam-icons-outline-l2"
                    alt=""
                    src="/icon--jamicons--outline--logos--arrowright.svg"
                  />
                </div>
                <div className="button-3">
                  <img
                    className="icon-jam-icons-outline-l15"
                    alt=""
                    src="/icon--jamicons--outline--logos--plus.svg"
                  />
                  <div className="text-container5">
                    <div className="menu-item1">Button Text</div>
                  </div>
                  <img
                    className="icon-jam-icons-outline-l60"
                    alt=""
                    src="/icon--jamicons--outline--logos--arrowright.svg"
                  />
                  <div className="badge5">
                    <div className="button-text">9</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="button-group-parent">
              <div className="button-group">
                <img
                  className="icon-jam-icons-outline-l"
                  alt=""
                  src="/icon--jamicons--outline--logos--circle1.svg"
                />
                <div className="text-container6">
                  <div className="title">Pesquisar</div>
                </div>
                <img
                  className="icon-jam-icons-outline-l"
                  alt=""
                  src="/icon--jamicons--outline--logos--circle1.svg"
                />
              </div>
              <div className="button-group1">
                <img
                  className="icon-jam-icons-outline-l"
                  alt=""
                  src="/icon--jamicons--outline--logos--circle2.svg"
                />
                <div className="text-container6">
                  <div className="title">Planejar</div>
                </div>
                <img
                  className="icon-jam-icons-outline-l"
                  alt=""
                  src="/icon--jamicons--outline--logos--circle2.svg"
                />
              </div>
              <div className="button-group2">
                <img
                  className="icon-jam-icons-outline-l"
                  alt=""
                  src="/icon--jamicons--outline--logos--circle2.svg"
                />
                <div className="text-container6">
                  <div className="title">Desenvolver</div>
                </div>
                <img
                  className="icon-jam-icons-outline-l"
                  alt=""
                  src="/icon--jamicons--outline--logos--circle2.svg"
                />
              </div>
            </div>

            <div className="section-text">
              <div className="top5">
                <b className="caption"></b>
                <div className="main-headline1"></div>
                <div className="secondary-headline1"></div>
              </div>
              <div className="paragraph">
              Otimize seu tempo e transforme sua rotina! Ao gerenciar melhor suas horas, você libera espaço para o que realmente importa. Foque no essencial, elimine distrações e veja como pequenas mudanças podem gerar grandes resultados. O tempo é seu recurso mais valioso—use-o com sabedoria para viver com mais propósito e produtividade.
              </div>
              <div className="buttons-group3">
                <div className="button3">
                  <img
                    className="icon-jam-icons-outline-l15"
                    alt=""
                    src="/icon--jamicons--outline--logos--plus.svg"
                  />
                 
                  <div className="badge5">
                    <div className="button-text">9</div>
                  </div>
                </div>
                <div className="button-2">
                  <img
                    className="icon-jam-icons-outline-l"
                    alt=""
                    src="/icon--jamicons--outline--logos--plus.svg"
                  />
                  <div className="text-container6">
                    <div className="menu-item1">Button Text</div>
                  </div>
                  <img
                    className="icon-jam-icons-outline-l2"
                    alt=""
                    src="/icon--jamicons--outline--logos--arrowright.svg"
                  />
                </div>
                <div className="button-3">
                  <img
                    className="icon-jam-icons-outline-l15"
                    alt=""
                    src="/icon--jamicons--outline--logos--plus.svg"
                  />
                  <div className="text-container5">
                    <div className="menu-item1">Button Text</div>
                  </div>
                  <img
                    className="icon-jam-icons-outline-l60"
                    alt=""
                    src="/icon--jamicons--outline--logos--arrowright.svg"
                  />
                  <div className="badge5">
                    <div className="button-text">9</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="left5">
            <div className="screendesktop">
              <div className="top-bar">
                <div className="circles">
                  <img
                    className="icon-jam-icons-filled-ci"
                    alt=""
                    src="/icon--jamicons--filled--circlef.svg"
                  />
                  <img
                    className="icon-jam-icons-filled-ci"
                    alt=""
                    src="/icon--jamicons--filled--circlef1.svg"
                  />
                  <img
                    className="icon-jam-icons-filled-ci"
                    alt=""
                    src="/icon--jamicons--filled--circlef2.svg"
                  />
                </div>
                <div className="arrows">
                  <img
                    className="icon-jam-icons-outline-l2"
                    alt=""
                    src="/icon--jamicons--outline--logos--chevronleft.svg"
                  />
                  <img
                    className="icon-jam-icons-outline-l2"
                    alt=""
                    src="/icon--jamicons--outline--logos--chevronright.svg"
                  />
                </div>
                <div className="address-bar">
                  <div className="button-text">app.magnifi.co</div>
                </div>
              </div>
              <div className="video1">
                <div className="icon">
                  <img
                    className="icon-jam-icons-outline-l67"
                    alt=""
                    src="/icon--jamicons--outline--logos--play.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section5">
        <div className="container1">
          <div className="section-text6">
            <div className="top6">
              <b className="caption3">Caption</b>
              <div className="main-headline3">Headline One</div>
              <div className="secondary-headline3">
                Participe das nossas oficinas.
              </div>
            </div>
            <div className="paragraph3">
            Convidamos você a participar das nossas oficinas de treinamento, uma oportunidade única para adquirir novas habilidades, expandir seus conhecimentos e se conectar com pessoas que compartilham dos mesmos interesses. Nossas oficinas são projetadas para oferecer experiências práticas e envolventes, garantindo que você saia mais preparado para enfrentar desafios e alcançar seus objetivos. Não perca essa chance de investir em seu crescimento pessoal e profissional!
            </div>
            <div className="buttons-group8">
              <div className="button8">
                <img
                  className="icon-jam-icons-outline-l"
                  alt=""
                  src="/icon--jamicons--outline--logos--plus1.svg"
                />
                <div className="text-container29">
                  <b className="button-text26">Inscreva-se</b>
                </div>
                <img
                  className="icon-jam-icons-outline-l2"
                  alt=""
                  src="/icon--jamicons--outline--logos--arrowright1.svg"
                />
              </div>
              <div className="button-2">
                <img
                  className="icon-jam-icons-outline-l"
                  alt=""
                  src="/icon--jamicons--outline--logos--plus.svg"
                />
                <div className="text-container6">
                  <div className="menu-item1">Button Text</div>
                </div>
                <img
                  className="icon-jam-icons-outline-l2"
                  alt=""
                  src="/icon--jamicons--outline--logos--arrowright.svg"
                />
              </div>
              <div className="button-3">
                <img
                  className="icon-jam-icons-outline-l15"
                  alt=""
                  src="/icon--jamicons--outline--logos--plus.svg"
                />
                <div className="text-container5">
                  <div className="menu-item1">Button Text</div>
                </div>
                <img
                  className="icon-jam-icons-outline-l60"
                  alt=""
                  src="/icon--jamicons--outline--logos--arrowright.svg"
                />
                <div className="badge5">
                  <div className="button-text">9</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="columns">
          <div className="footer-componentscolumn">
            <div className="footer-componentslinkfooter">
              <img
                className="icon-jam-icons-outline-l"
                alt=""
                src="/icon--jamicons--outline--logos--world.svg"
              />
              <div className="title">Categories</div>
              <div className="badge18">
                <img
                  className="icon-iconoir-cancel"
                  alt=""
                  src="/icon--jamicons--outline--logos--circle3.svg"
                />
                <div className="text-container">
                  <div className="button-text">BETA</div>
                </div>
                <img
                  className="icon-iconoir-cancel"
                  alt=""
                  src="/icon--iconoir--cancel1.svg"
                />
              </div>
              <img
                className="icon-jam-icons-outline-l"
                alt=""
                src="/icon--jamicons--outline--logos--arrowright2.svg"
              />
            </div>
            <div className="links">
              <div className="footer-componentslinkfooter">
                <img
                  className="icon-jam-icons-outline-l"
                  alt=""
                  src="/icon--jamicons--outline--logos--world.svg"
                />
                <div className="button-text">User Interface</div>
                <div className="badge18">
                  <img
                    className="icon-iconoir-cancel"
                    alt=""
                    src="/icon--jamicons--outline--logos--circle3.svg"
                  />
                  <div className="text-container">
                    <div className="button-text">BETA</div>
                  </div>
                  <img
                    className="icon-iconoir-cancel"
                    alt=""
                    src="/icon--iconoir--cancel1.svg"
                  />
                </div>
                <img
                  className="icon-jam-icons-outline-l"
                  alt=""
                  src="/icon--jamicons--outline--logos--arrowright2.svg"
                />
              </div>
              <div className="footer-componentslinkfooter">
                <img
                  className="icon-jam-icons-outline-l"
                  alt=""
                  src="/icon--jamicons--outline--logos--world.svg"
                />
                <div className="button-text">User Experience</div>
                <div className="badge18">
                  <img
                    className="icon-iconoir-cancel"
                    alt=""
                    src="/icon--jamicons--outline--logos--circle3.svg"
                  />
                  <div className="text-container">
                    <div className="button-text">BETA</div>
                  </div>
                  <img
                    className="icon-iconoir-cancel"
                    alt=""
                    src="/icon--iconoir--cancel1.svg"
                  />
                </div>
                <img
                  className="icon-jam-icons-outline-l"
                  alt=""
                  src="/icon--jamicons--outline--logos--arrowright2.svg"
                />
              </div>
              <div className="footer-componentslinkfooter">
                <img
                  className="icon-jam-icons-outline-l"
                  alt=""
                  src="/icon--jamicons--outline--logos--world.svg"
                />
                <div className="button-text">Digital Media</div>
                <div className="badge18">
                  <img
                    className="icon-iconoir-cancel"
                    alt=""
                    src="/icon--jamicons--outline--logos--circle3.svg"
                  />
                  <div className="text-container">
                    <div className="button-text">BETA</div>
                  </div>
                  <img
                    className="icon-iconoir-cancel"
                    alt=""
                    src="/icon--iconoir--cancel1.svg"
                  />
                </div>
                <img
                  className="icon-jam-icons-outline-l"
                  alt=""
                  src="/icon--jamicons--outline--logos--arrowright2.svg"
                />
              </div>
              <div className="footer-componentslinkfooter">
                <img
                  className="icon-jam-icons-outline-l"
                  alt=""
                  src="/icon--jamicons--outline--logos--world.svg"
                />
                <div className="button-text">Lifestyle</div>
                <div className="badge18">
                  <img
                    className="icon-iconoir-cancel"
                    alt=""
                    src="/icon--jamicons--outline--logos--circle3.svg"
                  />
                  <div className="text-container">
                    <div className="button-text">BETA</div>
                  </div>
                  <img
                    className="icon-iconoir-cancel"
                    alt=""
                    src="/icon--iconoir--cancel1.svg"
                  />
                </div>
                <img
                  className="icon-jam-icons-outline-l"
                  alt=""
                  src="/icon--jamicons--outline--logos--arrowright2.svg"
                />
              </div>
              <div className="footer-componentslinkfooter">
                <img
                  className="icon-jam-icons-outline-l"
                  alt=""
                  src="/icon--jamicons--outline--logos--world.svg"
                />
                <div className="button-text">Programming</div>
                <div className="badge18">
                  <img
                    className="icon-iconoir-cancel"
                    alt=""
                    src="/icon--jamicons--outline--logos--circle3.svg"
                  />
                  <div className="text-container">
                    <div className="button-text">BETA</div>
                  </div>
                  <img
                    className="icon-iconoir-cancel"
                    alt=""
                    src="/icon--iconoir--cancel1.svg"
                  />
                </div>
                <img
                  className="icon-jam-icons-outline-l"
                  alt=""
                  src="/icon--jamicons--outline--logos--arrowright2.svg"
                />
              </div>
              <div className="footer-componentslinkfooter">
                <img
                  className="icon-jam-icons-outline-l"
                  alt=""
                  src="/icon--jamicons--outline--logos--world.svg"
                />
                <div className="button-text">Animation</div>
                <div className="badge18">
                  <img
                    className="icon-iconoir-cancel"
                    alt=""
                    src="/icon--jamicons--outline--logos--circle3.svg"
                  />
                  <div className="text-container">
                    <div className="button-text">BETA</div>
                  </div>
                  <img
                    className="icon-iconoir-cancel"
                    alt=""
                    src="/icon--iconoir--cancel1.svg"
                  />
                </div>
                <img
                  className="icon-jam-icons-outline-l"
                  alt=""
                  src="/icon--jamicons--outline--logos--arrowright2.svg"
                />
              </div>
              <div className="footer-componentslinkfooter7">
                <img
                  className="icon-jam-icons-outline-l"
                  alt=""
                  src="/icon--jamicons--outline--logos--world.svg"
                />
                <div className="button-text">Seven</div>
                <div className="badge18">
                  <img
                    className="icon-iconoir-cancel"
                    alt=""
                    src="/icon--jamicons--outline--logos--circle3.svg"
                  />
                  <div className="text-container">
                    <div className="button-text">BETA</div>
                  </div>
                  <img
                    className="icon-iconoir-cancel"
                    alt=""
                    src="/icon--iconoir--cancel1.svg"
                  />
                </div>
                <img
                  className="icon-jam-icons-outline-l"
                  alt=""
                  src="/icon--jamicons--outline--logos--arrowright2.svg"
                />
              </div>
              <div className="footer-componentslinkfooter7">
                <img
                  className="icon-jam-icons-outline-l"
                  alt=""
                  src="/icon--jamicons--outline--logos--world.svg"
                />
                <div className="button-text">Eight</div>
                <div className="badge18">
                  <img
                    className="icon-iconoir-cancel"
                    alt=""
                    src="/icon--jamicons--outline--logos--circle3.svg"
                  />
                  <div className="text-container">
                    <div className="button-text">BETA</div>
                  </div>
                  <img
                    className="icon-iconoir-cancel"
                    alt=""
                    src="/icon--iconoir--cancel1.svg"
                  />
                </div>
                <img
                  className="icon-jam-icons-outline-l"
                  alt=""
                  src="/icon--jamicons--outline--logos--arrowright2.svg"
                />
              </div>
              <div className="footer-componentslinkfooter7">
                <img
                  className="icon-jam-icons-outline-l"
                  alt=""
                  src="/icon--jamicons--outline--logos--world.svg"
                />
                <div className="button-text">Nine</div>
                <div className="badge18">
                  <img
                    className="icon-iconoir-cancel"
                    alt=""
                    src="/icon--jamicons--outline--logos--circle3.svg"
                  />
                  <div className="text-container">
                    <div className="button-text">BETA</div>
                  </div>
                  <img
                    className="icon-iconoir-cancel"
                    alt=""
                    src="/icon--iconoir--cancel1.svg"
                  />
                </div>
                <img
                  className="icon-jam-icons-outline-l"
                  alt=""
                  src="/icon--jamicons--outline--logos--arrowright2.svg"
                />
              </div>
              <div className="footer-componentslinkfooter7">
                <img
                  className="icon-jam-icons-outline-l"
                  alt=""
                  src="/icon--jamicons--outline--logos--world.svg"
                />
                <div className="button-text">Ten</div>
                <div className="badge18">
                  <img
                    className="icon-iconoir-cancel"
                    alt=""
                    src="/icon--jamicons--outline--logos--circle3.svg"
                  />
                  <div className="text-container">
                    <div className="button-text">BETA</div>
                  </div>
                  <img
                    className="icon-iconoir-cancel"
                    alt=""
                    src="/icon--iconoir--cancel1.svg"
                  />
                </div>
                <img
                  className="icon-jam-icons-outline-l"
                  alt=""
                  src="/icon--jamicons--outline--logos--arrowright2.svg"
                />
              </div>
            </div>
          </div>
          <div className="footer-componentscolumn">
            <div className="footer-componentslinkfooter">
              <img
                className="icon-jam-icons-outline-l"
                alt=""
                src="/icon--jamicons--outline--logos--world.svg"
              />
              <div className="title">Product</div>
              <div className="badge18">
                <img
                  className="icon-iconoir-cancel"
                  alt=""
                  src="/icon--jamicons--outline--logos--circle3.svg"
                />
                <div className="text-container">
                  <div className="button-text">BETA</div>
                </div>
                <img
                  className="icon-iconoir-cancel"
                  alt=""
                  src="/icon--iconoir--cancel1.svg"
                />
              </div>
              <img
                className="icon-jam-icons-outline-l"
                alt=""
                src="/icon--jamicons--outline--logos--arrowright2.svg"
              />
            </div>
            <div className="links">
              <div className="footer-componentslinkfooter">
                <img
                  className="icon-jam-icons-outline-l"
                  alt=""
                  src="/icon--jamicons--outline--logos--world.svg"
                />
                <div className="button-text">Pricing</div>
                <div className="badge18">
                  <img
                    className="icon-iconoir-cancel"
                    alt=""
                    src="/icon--jamicons--outline--logos--circle3.svg"
                  />
                  <div className="text-container">
                    <div className="button-text">BETA</div>
                  </div>
                  <img
                    className="icon-iconoir-cancel"
                    alt=""
                    src="/icon--iconoir--cancel1.svg"
                  />
                </div>
                <img
                  className="icon-jam-icons-outline-l"
                  alt=""
                  src="/icon--jamicons--outline--logos--arrowright2.svg"
                />
              </div>
              <div className="footer-componentslinkfooter">
                <img
                  className="icon-jam-icons-outline-l"
                  alt=""
                  src="/icon--jamicons--outline--logos--world.svg"
                />
                <div className="button-text">Overview</div>
                <div className="badge18">
                  <img
                    className="icon-iconoir-cancel"
                    alt=""
                    src="/icon--jamicons--outline--logos--circle3.svg"
                  />
                  <div className="text-container">
                    <div className="button-text">BETA</div>
                  </div>
                  <img
                    className="icon-iconoir-cancel"
                    alt=""
                    src="/icon--iconoir--cancel1.svg"
                  />
                </div>
                <img
                  className="icon-jam-icons-outline-l"
                  alt=""
                  src="/icon--jamicons--outline--logos--arrowright2.svg"
                />
              </div>
              <div className="footer-componentslinkfooter">
                <img
                  className="icon-jam-icons-outline-l"
                  alt=""
                  src="/icon--jamicons--outline--logos--world.svg"
                />
                <div className="button-text">Browse</div>
                <div className="badge18">
                  <img
                    className="icon-iconoir-cancel"
                    alt=""
                    src="/icon--jamicons--outline--logos--circle3.svg"
                  />
                  <div className="text-container">
                    <div className="button-text">BETA</div>
                  </div>
                  <img
                    className="icon-iconoir-cancel"
                    alt=""
                    src="/icon--iconoir--cancel1.svg"
                  />
                </div>
                <img
                  className="icon-jam-icons-outline-l"
                  alt=""
                  src="/icon--jamicons--outline--logos--arrowright2.svg"
                />
              </div>
              <div className="footer-componentslinkfooter">
                <img
                  className="icon-jam-icons-outline-l"
                  alt=""
                  src="/icon--jamicons--outline--logos--world.svg"
                />
                <div className="button-text">Accessibility</div>
                <div className="badge18">
                  <img
                    className="icon-iconoir-cancel"
                    alt=""
                    src="/icon--jamicons--outline--logos--circle3.svg"
                  />
                  <div className="text-container">
                    <div className="button-text">BETA</div>
                  </div>
                  <img
                    className="icon-iconoir-cancel"
                    alt=""
                    src="/icon--iconoir--cancel1.svg"
                  />
                </div>
                <img
                  className="icon-jam-icons-outline-l"
                  alt=""
                  src="/icon--jamicons--outline--logos--arrowright2.svg"
                />
              </div>
              <div className="footer-componentslinkfooter">
                <img
                  className="icon-jam-icons-outline-l"
                  alt=""
                  src="/icon--jamicons--outline--logos--world.svg"
                />
                <div className="button-text">Five</div>
                <div className="badge18">
                  <img
                    className="icon-iconoir-cancel"
                    alt=""
                    src="/icon--jamicons--outline--logos--circle3.svg"
                  />
                  <div className="text-container">
                    <div className="button-text">BETA</div>
                  </div>
                  <img
                    className="icon-iconoir-cancel"
                    alt=""
                    src="/icon--iconoir--cancel1.svg"
                  />
                </div>
                <img
                  className="icon-jam-icons-outline-l"
                  alt=""
                  src="/icon--jamicons--outline--logos--arrowright2.svg"
                />
              </div>
              <div className="footer-componentslinkfooter">
                <img
                  className="icon-jam-icons-outline-l"
                  alt=""
                  src="/icon--jamicons--outline--logos--world.svg"
                />
                <div className="button-text">Changelog</div>
                <div className="badge18">
                  <img
                    className="icon-iconoir-cancel"
                    alt=""
                    src="/icon--jamicons--outline--logos--circle3.svg"
                  />
                  <div className="text-container">
                    <div className="button-text">BETA</div>
                  </div>
                  <img
                    className="icon-iconoir-cancel"
                    alt=""
                    src="/icon--iconoir--cancel1.svg"
                  />
                </div>
                <img
                  className="icon-jam-icons-outline-l"
                  alt=""
                  src="/icon--jamicons--outline--logos--arrowright2.svg"
                />
              </div>
              <div className="footer-componentslinkfooter7">
                <img
                  className="icon-jam-icons-outline-l"
                  alt=""
                  src="/icon--jamicons--outline--logos--world.svg"
                />
                <div className="button-text">Seven</div>
                <div className="badge18">
                  <img
                    className="icon-iconoir-cancel"
                    alt=""
                    src="/icon--jamicons--outline--logos--circle3.svg"
                  />
                  <div className="text-container">
                    <div className="button-text">BETA</div>
                  </div>
                  <img
                    className="icon-iconoir-cancel"
                    alt=""
                    src="/icon--iconoir--cancel1.svg"
                  />
                </div>
                <img
                  className="icon-jam-icons-outline-l"
                  alt=""
                  src="/icon--jamicons--outline--logos--arrowright2.svg"
                />
              </div>
              <div className="footer-componentslinkfooter7">
                <img
                  className="icon-jam-icons-outline-l"
                  alt=""
                  src="/icon--jamicons--outline--logos--world.svg"
                />
                <div className="button-text">Eight</div>
                <div className="badge18">
                  <img
                    className="icon-iconoir-cancel"
                    alt=""
                    src="/icon--jamicons--outline--logos--circle3.svg"
                  />
                  <div className="text-container">
                    <div className="button-text">BETA</div>
                  </div>
                  <img
                    className="icon-iconoir-cancel"
                    alt=""
                    src="/icon--iconoir--cancel1.svg"
                  />
                </div>
                <img
                  className="icon-jam-icons-outline-l"
                  alt=""
                  src="/icon--jamicons--outline--logos--arrowright2.svg"
                />
              </div>
              <div className="footer-componentslinkfooter7">
                <img
                  className="icon-jam-icons-outline-l"
                  alt=""
                  src="/icon--jamicons--outline--logos--world.svg"
                />
                <div className="button-text">Nine</div>
                <div className="badge18">
                  <img
                    className="icon-iconoir-cancel"
                    alt=""
                    src="/icon--jamicons--outline--logos--circle3.svg"
                  />
                  <div className="text-container">
                    <div className="button-text">BETA</div>
                  </div>
                  <img
                    className="icon-iconoir-cancel"
                    alt=""
                    src="/icon--iconoir--cancel1.svg"
                  />
                </div>
                <img
                  className="icon-jam-icons-outline-l"
                  alt=""
                  src="/icon--jamicons--outline--logos--arrowright2.svg"
                />
              </div>
              <div className="footer-componentslinkfooter7">
                <img
                  className="icon-jam-icons-outline-l"
                  alt=""
                  src="/icon--jamicons--outline--logos--world.svg"
                />
                <div className="button-text">Ten</div>
                <div className="badge18">
                  <img
                    className="icon-iconoir-cancel"
                    alt=""
                    src="/icon--jamicons--outline--logos--circle3.svg"
                  />
                  <div className="text-container">
                    <div className="button-text">BETA</div>
                  </div>
                  <img
                    className="icon-iconoir-cancel"
                    alt=""
                    src="/icon--iconoir--cancel1.svg"
                  />
                </div>
                <img
                  className="icon-jam-icons-outline-l"
                  alt=""
                  src="/icon--jamicons--outline--logos--arrowright2.svg"
                />
              </div>
            </div>
          </div>
          <div className="footer-componentscolumn">
            <div className="footer-componentslinkfooter">
              <img
                className="icon-jam-icons-outline-l"
                alt=""
                src="/icon--jamicons--outline--logos--world.svg"
              />
              <div className="title">Solutions</div>
              <div className="badge18">
                <img
                  className="icon-iconoir-cancel"
                  alt=""
                  src="/icon--jamicons--outline--logos--circle3.svg"
                />
                <div className="text-container">
                  <div className="button-text">BETA</div>
                </div>
                <img
                  className="icon-iconoir-cancel"
                  alt=""
                  src="/icon--iconoir--cancel1.svg"
                />
              </div>
              <img
                className="icon-jam-icons-outline-l"
                alt=""
                src="/icon--jamicons--outline--logos--arrowright2.svg"
              />
            </div>
            <div className="links">
              <div className="footer-componentslinkfooter">
                <img
                  className="icon-jam-icons-outline-l"
                  alt=""
                  src="/icon--jamicons--outline--logos--world.svg"
                />
                <div className="button-text">Brainstorming</div>
                <div className="badge18">
                  <img
                    className="icon-iconoir-cancel"
                    alt=""
                    src="/icon--jamicons--outline--logos--circle3.svg"
                  />
                  <div className="text-container">
                    <div className="button-text">BETA</div>
                  </div>
                  <img
                    className="icon-iconoir-cancel"
                    alt=""
                    src="/icon--iconoir--cancel1.svg"
                  />
                </div>
                <img
                  className="icon-jam-icons-outline-l"
                  alt=""
                  src="/icon--jamicons--outline--logos--arrowright2.svg"
                />
              </div>
              <div className="footer-componentslinkfooter">
                <img
                  className="icon-jam-icons-outline-l"
                  alt=""
                  src="/icon--jamicons--outline--logos--world.svg"
                />
                <div className="button-text">Ideation</div>
                <div className="badge18">
                  <img
                    className="icon-iconoir-cancel"
                    alt=""
                    src="/icon--jamicons--outline--logos--circle3.svg"
                  />
                  <div className="text-container">
                    <div className="button-text">BETA</div>
                  </div>
                  <img
                    className="icon-iconoir-cancel"
                    alt=""
                    src="/icon--iconoir--cancel1.svg"
                  />
                </div>
                <img
                  className="icon-jam-icons-outline-l"
                  alt=""
                  src="/icon--jamicons--outline--logos--arrowright2.svg"
                />
              </div>
              <div className="footer-componentslinkfooter">
                <img
                  className="icon-jam-icons-outline-l"
                  alt=""
                  src="/icon--jamicons--outline--logos--world.svg"
                />
                <div className="button-text">Wireframing</div>
                <div className="badge18">
                  <img
                    className="icon-iconoir-cancel"
                    alt=""
                    src="/icon--jamicons--outline--logos--circle3.svg"
                  />
                  <div className="text-container">
                    <div className="button-text">BETA</div>
                  </div>
                  <img
                    className="icon-iconoir-cancel"
                    alt=""
                    src="/icon--iconoir--cancel1.svg"
                  />
                </div>
                <img
                  className="icon-jam-icons-outline-l"
                  alt=""
                  src="/icon--jamicons--outline--logos--arrowright2.svg"
                />
              </div>
              <div className="footer-componentslinkfooter">
                <img
                  className="icon-jam-icons-outline-l"
                  alt=""
                  src="/icon--jamicons--outline--logos--world.svg"
                />
                <div className="button-text">Research</div>
                <div className="badge18">
                  <img
                    className="icon-iconoir-cancel"
                    alt=""
                    src="/icon--jamicons--outline--logos--circle3.svg"
                  />
                  <div className="text-container">
                    <div className="button-text">BETA</div>
                  </div>
                  <img
                    className="icon-iconoir-cancel"
                    alt=""
                    src="/icon--iconoir--cancel1.svg"
                  />
                </div>
                <img
                  className="icon-jam-icons-outline-l"
                  alt=""
                  src="/icon--jamicons--outline--logos--arrowright2.svg"
                />
              </div>
              <div className="footer-componentslinkfooter">
                <img
                  className="icon-jam-icons-outline-l"
                  alt=""
                  src="/icon--jamicons--outline--logos--world.svg"
                />
                <div className="button-text">Design</div>
                <div className="badge18">
                  <img
                    className="icon-iconoir-cancel"
                    alt=""
                    src="/icon--jamicons--outline--logos--circle3.svg"
                  />
                  <div className="text-container">
                    <div className="button-text">BETA</div>
                  </div>
                  <img
                    className="icon-iconoir-cancel"
                    alt=""
                    src="/icon--iconoir--cancel1.svg"
                  />
                </div>
                <img
                  className="icon-jam-icons-outline-l"
                  alt=""
                  src="/icon--jamicons--outline--logos--arrowright2.svg"
                />
              </div>
              <div className="footer-componentslinkfooter">
                <img
                  className="icon-jam-icons-outline-l"
                  alt=""
                  src="/icon--jamicons--outline--logos--world.svg"
                />
                <div className="button-text">Concept</div>
                <div className="badge18">
                  <img
                    className="icon-iconoir-cancel"
                    alt=""
                    src="/icon--jamicons--outline--logos--circle3.svg"
                  />
                  <div className="text-container">
                    <div className="button-text">BETA</div>
                  </div>
                  <img
                    className="icon-iconoir-cancel"
                    alt=""
                    src="/icon--iconoir--cancel1.svg"
                  />
                </div>
                <img
                  className="icon-jam-icons-outline-l"
                  alt=""
                  src="/icon--jamicons--outline--logos--arrowright2.svg"
                />
              </div>
              <div className="footer-componentslinkfooter7">
                <img
                  className="icon-jam-icons-outline-l"
                  alt=""
                  src="/icon--jamicons--outline--logos--world.svg"
                />
                <div className="button-text">Seven</div>
                <div className="badge18">
                  <img
                    className="icon-iconoir-cancel"
                    alt=""
                    src="/icon--jamicons--outline--logos--circle3.svg"
                  />
                  <div className="text-container">
                    <div className="button-text">BETA</div>
                  </div>
                  <img
                    className="icon-iconoir-cancel"
                    alt=""
                    src="/icon--iconoir--cancel1.svg"
                  />
                </div>
                <img
                  className="icon-jam-icons-outline-l"
                  alt=""
                  src="/icon--jamicons--outline--logos--arrowright2.svg"
                />
              </div>
              <div className="footer-componentslinkfooter7">
                <img
                  className="icon-jam-icons-outline-l"
                  alt=""
                  src="/icon--jamicons--outline--logos--world.svg"
                />
                <div className="button-text">Eight</div>
                <div className="badge18">
                  <img
                    className="icon-iconoir-cancel"
                    alt=""
                    src="/icon--jamicons--outline--logos--circle3.svg"
                  />
                  <div className="text-container">
                    <div className="button-text">BETA</div>
                  </div>
                  <img
                    className="icon-iconoir-cancel"
                    alt=""
                    src="/icon--iconoir--cancel1.svg"
                  />
                </div>
                <img
                  className="icon-jam-icons-outline-l"
                  alt=""
                  src="/icon--jamicons--outline--logos--arrowright2.svg"
                />
              </div>
              <div className="footer-componentslinkfooter7">
                <img
                  className="icon-jam-icons-outline-l"
                  alt=""
                  src="/icon--jamicons--outline--logos--world.svg"
                />
                <div className="button-text">Nine</div>
                <div className="badge18">
                  <img
                    className="icon-iconoir-cancel"
                    alt=""
                    src="/icon--jamicons--outline--logos--circle3.svg"
                  />
                  <div className="text-container">
                    <div className="button-text">BETA</div>
                  </div>
                  <img
                    className="icon-iconoir-cancel"
                    alt=""
                    src="/icon--iconoir--cancel1.svg"
                  />
                </div>
                <img
                  className="icon-jam-icons-outline-l"
                  alt=""
                  src="/icon--jamicons--outline--logos--arrowright2.svg"
                />
              </div>
              <div className="footer-componentslinkfooter7">
                <img
                  className="icon-jam-icons-outline-l"
                  alt=""
                  src="/icon--jamicons--outline--logos--world.svg"
                />
                <div className="button-text">Ten</div>
                <div className="badge18">
                  <img
                    className="icon-iconoir-cancel"
                    alt=""
                    src="/icon--jamicons--outline--logos--circle3.svg"
                  />
                  <div className="text-container">
                    <div className="button-text">BETA</div>
                  </div>
                  <img
                    className="icon-iconoir-cancel"
                    alt=""
                    src="/icon--iconoir--cancel1.svg"
                  />
                </div>
                <img
                  className="icon-jam-icons-outline-l"
                  alt=""
                  src="/icon--jamicons--outline--logos--arrowright2.svg"
                />
              </div>
            </div>
          </div>
          <div className="footer-componentscolumn">
            <div className="footer-componentslinkfooter">
              <img
                className="icon-jam-icons-outline-l"
                alt=""
                src="/icon--jamicons--outline--logos--world.svg"
              />
              <div className="title">Resources</div>
              <div className="badge18">
                <img
                  className="icon-iconoir-cancel"
                  alt=""
                  src="/icon--jamicons--outline--logos--circle3.svg"
                />
                <div className="text-container">
                  <div className="button-text">BETA</div>
                </div>
                <img
                  className="icon-iconoir-cancel"
                  alt=""
                  src="/icon--iconoir--cancel1.svg"
                />
              </div>
              <img
                className="icon-jam-icons-outline-l"
                alt=""
                src="/icon--jamicons--outline--logos--arrowright2.svg"
              />
            </div>
            <div className="links">
              <div className="footer-componentslinkfooter">
                <img
                  className="icon-jam-icons-outline-l"
                  alt=""
                  src="/icon--jamicons--outline--logos--world.svg"
                />
                <div className="button-text">Help Center</div>
                <div className="badge18">
                  <img
                    className="icon-iconoir-cancel"
                    alt=""
                    src="/icon--jamicons--outline--logos--circle3.svg"
                  />
                  <div className="text-container">
                    <div className="button-text">BETA</div>
                  </div>
                  <img
                    className="icon-iconoir-cancel"
                    alt=""
                    src="/icon--iconoir--cancel1.svg"
                  />
                </div>
                <img
                  className="icon-jam-icons-outline-l"
                  alt=""
                  src="/icon--jamicons--outline--logos--arrowright2.svg"
                />
              </div>
              <div className="footer-componentslinkfooter">
                <img
                  className="icon-jam-icons-outline-l"
                  alt=""
                  src="/icon--jamicons--outline--logos--world.svg"
                />
                <div className="button-text">Blog</div>
                <div className="badge18">
                  <img
                    className="icon-iconoir-cancel"
                    alt=""
                    src="/icon--jamicons--outline--logos--circle3.svg"
                  />
                  <div className="text-container">
                    <div className="button-text">BETA</div>
                  </div>
                  <img
                    className="icon-iconoir-cancel"
                    alt=""
                    src="/icon--iconoir--cancel1.svg"
                  />
                </div>
                <img
                  className="icon-jam-icons-outline-l"
                  alt=""
                  src="/icon--jamicons--outline--logos--arrowright2.svg"
                />
              </div>
              <div className="footer-componentslinkfooter">
                <img
                  className="icon-jam-icons-outline-l"
                  alt=""
                  src="/icon--jamicons--outline--logos--world.svg"
                />
                <div className="button-text">Tutorials</div>
                <div className="badge18">
                  <img
                    className="icon-iconoir-cancel"
                    alt=""
                    src="/icon--jamicons--outline--logos--circle3.svg"
                  />
                  <div className="text-container">
                    <div className="button-text">BETA</div>
                  </div>
                  <img
                    className="icon-iconoir-cancel"
                    alt=""
                    src="/icon--iconoir--cancel1.svg"
                  />
                </div>
                <img
                  className="icon-jam-icons-outline-l"
                  alt=""
                  src="/icon--jamicons--outline--logos--arrowright2.svg"
                />
              </div>
              <div className="footer-componentslinkfooter">
                <img
                  className="icon-jam-icons-outline-l"
                  alt=""
                  src="/icon--jamicons--outline--logos--world.svg"
                />
                <div className="button-text">FAQs</div>
                <div className="badge18">
                  <img
                    className="icon-iconoir-cancel"
                    alt=""
                    src="/icon--jamicons--outline--logos--circle3.svg"
                  />
                  <div className="text-container">
                    <div className="button-text">BETA</div>
                  </div>
                  <img
                    className="icon-iconoir-cancel"
                    alt=""
                    src="/icon--iconoir--cancel1.svg"
                  />
                </div>
                <img
                  className="icon-jam-icons-outline-l"
                  alt=""
                  src="/icon--jamicons--outline--logos--arrowright2.svg"
                />
              </div>
              <div className="footer-componentslinkfooter">
                <img
                  className="icon-jam-icons-outline-l"
                  alt=""
                  src="/icon--jamicons--outline--logos--world.svg"
                />
                <div className="button-text">Community</div>
                <div className="badge18">
                  <img
                    className="icon-iconoir-cancel"
                    alt=""
                    src="/icon--jamicons--outline--logos--circle3.svg"
                  />
                  <div className="text-container">
                    <div className="button-text">BETA</div>
                  </div>
                  <img
                    className="icon-iconoir-cancel"
                    alt=""
                    src="/icon--iconoir--cancel1.svg"
                  />
                </div>
                <img
                  className="icon-jam-icons-outline-l"
                  alt=""
                  src="/icon--jamicons--outline--logos--arrowright2.svg"
                />
              </div>
              <div className="footer-componentslinkfooter">
                <img
                  className="icon-jam-icons-outline-l"
                  alt=""
                  src="/icon--jamicons--outline--logos--world.svg"
                />
                <div className="button-text">Events</div>
                <div className="badge18">
                  <img
                    className="icon-iconoir-cancel"
                    alt=""
                    src="/icon--jamicons--outline--logos--circle3.svg"
                  />
                  <div className="text-container">
                    <div className="button-text">BETA</div>
                  </div>
                  <img
                    className="icon-iconoir-cancel"
                    alt=""
                    src="/icon--iconoir--cancel1.svg"
                  />
                </div>
                <img
                  className="icon-jam-icons-outline-l"
                  alt=""
                  src="/icon--jamicons--outline--logos--arrowright2.svg"
                />
              </div>
              <div className="footer-componentslinkfooter7">
                <img
                  className="icon-jam-icons-outline-l"
                  alt=""
                  src="/icon--jamicons--outline--logos--world.svg"
                />
                <div className="button-text">Seven</div>
                <div className="badge18">
                  <img
                    className="icon-iconoir-cancel"
                    alt=""
                    src="/icon--jamicons--outline--logos--circle3.svg"
                  />
                  <div className="text-container">
                    <div className="button-text">BETA</div>
                  </div>
                  <img
                    className="icon-iconoir-cancel"
                    alt=""
                    src="/icon--iconoir--cancel1.svg"
                  />
                </div>
                <img
                  className="icon-jam-icons-outline-l"
                  alt=""
                  src="/icon--jamicons--outline--logos--arrowright2.svg"
                />
              </div>
              <div className="footer-componentslinkfooter7">
                <img
                  className="icon-jam-icons-outline-l"
                  alt=""
                  src="/icon--jamicons--outline--logos--world.svg"
                />
                <div className="button-text">Eight</div>
                <div className="badge18">
                  <img
                    className="icon-iconoir-cancel"
                    alt=""
                    src="/icon--jamicons--outline--logos--circle3.svg"
                  />
                  <div className="text-container">
                    <div className="button-text">BETA</div>
                  </div>
                  <img
                    className="icon-iconoir-cancel"
                    alt=""
                    src="/icon--iconoir--cancel1.svg"
                  />
                </div>
                <img
                  className="icon-jam-icons-outline-l"
                  alt=""
                  src="/icon--jamicons--outline--logos--arrowright2.svg"
                />
              </div>
              <div className="footer-componentslinkfooter7">
                <img
                  className="icon-jam-icons-outline-l"
                  alt=""
                  src="/icon--jamicons--outline--logos--world.svg"
                />
                <div className="button-text">Nine</div>
                <div className="badge18">
                  <img
                    className="icon-iconoir-cancel"
                    alt=""
                    src="/icon--jamicons--outline--logos--circle3.svg"
                  />
                  <div className="text-container">
                    <div className="button-text">BETA</div>
                  </div>
                  <img
                    className="icon-iconoir-cancel"
                    alt=""
                    src="/icon--iconoir--cancel1.svg"
                  />
                </div>
                <img
                  className="icon-jam-icons-outline-l"
                  alt=""
                  src="/icon--jamicons--outline--logos--arrowright2.svg"
                />
              </div>
              <div className="footer-componentslinkfooter7">
                <img
                  className="icon-jam-icons-outline-l"
                  alt=""
                  src="/icon--jamicons--outline--logos--world.svg"
                />
                <div className="button-text">Ten</div>
                <div className="badge18">
                  <img
                    className="icon-iconoir-cancel"
                    alt=""
                    src="/icon--jamicons--outline--logos--circle3.svg"
                  />
                  <div className="text-container">
                    <div className="button-text">BETA</div>
                  </div>
                  <img
                    className="icon-iconoir-cancel"
                    alt=""
                    src="/icon--iconoir--cancel1.svg"
                  />
                </div>
                <img
                  className="icon-jam-icons-outline-l"
                  alt=""
                  src="/icon--jamicons--outline--logos--arrowright2.svg"
                />
              </div>
            </div>
          </div>
          <div className="footer-componentscolumn">
            <div className="footer-componentslinkfooter">
              <img
                className="icon-jam-icons-outline-l"
                alt=""
                src="/icon--jamicons--outline--logos--world.svg"
              />
              <div className="title">Support</div>
              <div className="badge18">
                <img
                  className="icon-iconoir-cancel"
                  alt=""
                  src="/icon--jamicons--outline--logos--circle3.svg"
                />
                <div className="text-container">
                  <div className="button-text">BETA</div>
                </div>
                <img
                  className="icon-iconoir-cancel"
                  alt=""
                  src="/icon--iconoir--cancel1.svg"
                />
              </div>
              <img
                className="icon-jam-icons-outline-l"
                alt=""
                src="/icon--jamicons--outline--logos--arrowright2.svg"
              />
            </div>
            <div className="links">
              <div className="footer-componentslinkfooter">
                <img
                  className="icon-jam-icons-outline-l"
                  alt=""
                  src="/icon--jamicons--outline--logos--world.svg"
                />
                <div className="button-text">Contact Us</div>
                <div className="badge18">
                  <img
                    className="icon-iconoir-cancel"
                    alt=""
                    src="/icon--jamicons--outline--logos--circle3.svg"
                  />
                  <div className="text-container">
                    <div className="button-text">BETA</div>
                  </div>
                  <img
                    className="icon-iconoir-cancel"
                    alt=""
                    src="/icon--iconoir--cancel1.svg"
                  />
                </div>
                <img
                  className="icon-jam-icons-outline-l"
                  alt=""
                  src="/icon--jamicons--outline--logos--arrowright2.svg"
                />
              </div>
              <div className="footer-componentslinkfooter">
                <img
                  className="icon-jam-icons-outline-l"
                  alt=""
                  src="/icon--jamicons--outline--logos--world.svg"
                />
                <div className="button-text">Developers</div>
                <div className="badge18">
                  <img
                    className="icon-iconoir-cancel"
                    alt=""
                    src="/icon--jamicons--outline--logos--circle3.svg"
                  />
                  <div className="text-container">
                    <div className="button-text">BETA</div>
                  </div>
                  <img
                    className="icon-iconoir-cancel"
                    alt=""
                    src="/icon--iconoir--cancel1.svg"
                  />
                </div>
                <img
                  className="icon-jam-icons-outline-l"
                  alt=""
                  src="/icon--jamicons--outline--logos--arrowright2.svg"
                />
              </div>
              <div className="footer-componentslinkfooter">
                <img
                  className="icon-jam-icons-outline-l"
                  alt=""
                  src="/icon--jamicons--outline--logos--world.svg"
                />
                <div className="button-text">Documentation</div>
                <div className="badge18">
                  <img
                    className="icon-iconoir-cancel"
                    alt=""
                    src="/icon--jamicons--outline--logos--circle3.svg"
                  />
                  <div className="text-container">
                    <div className="button-text">BETA</div>
                  </div>
                  <img
                    className="icon-iconoir-cancel"
                    alt=""
                    src="/icon--iconoir--cancel1.svg"
                  />
                </div>
                <img
                  className="icon-jam-icons-outline-l"
                  alt=""
                  src="/icon--jamicons--outline--logos--arrowright2.svg"
                />
              </div>
              <div className="footer-componentslinkfooter">
                <img
                  className="icon-jam-icons-outline-l"
                  alt=""
                  src="/icon--jamicons--outline--logos--world.svg"
                />
                <div className="button-text">Integrations</div>
                <div className="badge18">
                  <img
                    className="icon-iconoir-cancel"
                    alt=""
                    src="/icon--jamicons--outline--logos--circle3.svg"
                  />
                  <div className="text-container">
                    <div className="button-text">BETA</div>
                  </div>
                  <img
                    className="icon-iconoir-cancel"
                    alt=""
                    src="/icon--iconoir--cancel1.svg"
                  />
                </div>
                <img
                  className="icon-jam-icons-outline-l"
                  alt=""
                  src="/icon--jamicons--outline--logos--arrowright2.svg"
                />
              </div>
              <div className="footer-componentslinkfooter">
                <img
                  className="icon-jam-icons-outline-l"
                  alt=""
                  src="/icon--jamicons--outline--logos--world.svg"
                />
                <div className="button-text">Reports</div>
                <div className="badge18">
                  <img
                    className="icon-iconoir-cancel"
                    alt=""
                    src="/icon--jamicons--outline--logos--circle3.svg"
                  />
                  <div className="text-container">
                    <div className="button-text">BETA</div>
                  </div>
                  <img
                    className="icon-iconoir-cancel"
                    alt=""
                    src="/icon--iconoir--cancel1.svg"
                  />
                </div>
                <img
                  className="icon-jam-icons-outline-l"
                  alt=""
                  src="/icon--jamicons--outline--logos--arrowright2.svg"
                />
              </div>
              <div className="footer-componentslinkfooter">
                <img
                  className="icon-jam-icons-outline-l"
                  alt=""
                  src="/icon--jamicons--outline--logos--world.svg"
                />
                <div className="button-text">Webinar</div>
                <div className="badge18">
                  <img
                    className="icon-iconoir-cancel"
                    alt=""
                    src="/icon--jamicons--outline--logos--circle3.svg"
                  />
                  <div className="text-container">
                    <div className="button-text">BETA</div>
                  </div>
                  <img
                    className="icon-iconoir-cancel"
                    alt=""
                    src="/icon--iconoir--cancel1.svg"
                  />
                </div>
                <img
                  className="icon-jam-icons-outline-l"
                  alt=""
                  src="/icon--jamicons--outline--logos--arrowright2.svg"
                />
              </div>
              <div className="footer-componentslinkfooter7">
                <img
                  className="icon-jam-icons-outline-l"
                  alt=""
                  src="/icon--jamicons--outline--logos--world.svg"
                />
                <div className="button-text">Seven</div>
                <div className="badge18">
                  <img
                    className="icon-iconoir-cancel"
                    alt=""
                    src="/icon--jamicons--outline--logos--circle3.svg"
                  />
                  <div className="text-container">
                    <div className="button-text">BETA</div>
                  </div>
                  <img
                    className="icon-iconoir-cancel"
                    alt=""
                    src="/icon--iconoir--cancel1.svg"
                  />
                </div>
                <img
                  className="icon-jam-icons-outline-l"
                  alt=""
                  src="/icon--jamicons--outline--logos--arrowright2.svg"
                />
              </div>
              <div className="footer-componentslinkfooter7">
                <img
                  className="icon-jam-icons-outline-l"
                  alt=""
                  src="/icon--jamicons--outline--logos--world.svg"
                />
                <div className="button-text">Eight</div>
                <div className="badge18">
                  <img
                    className="icon-iconoir-cancel"
                    alt=""
                    src="/icon--jamicons--outline--logos--circle3.svg"
                  />
                  <div className="text-container">
                    <div className="button-text">BETA</div>
                  </div>
                  <img
                    className="icon-iconoir-cancel"
                    alt=""
                    src="/icon--iconoir--cancel1.svg"
                  />
                </div>
                <img
                  className="icon-jam-icons-outline-l"
                  alt=""
                  src="/icon--jamicons--outline--logos--arrowright2.svg"
                />
              </div>
              <div className="footer-componentslinkfooter7">
                <img
                  className="icon-jam-icons-outline-l"
                  alt=""
                  src="/icon--jamicons--outline--logos--world.svg"
                />
                <div className="button-text">Nine</div>
                <div className="badge18">
                  <img
                    className="icon-iconoir-cancel"
                    alt=""
                    src="/icon--jamicons--outline--logos--circle3.svg"
                  />
                  <div className="text-container">
                    <div className="button-text">BETA</div>
                  </div>
                  <img
                    className="icon-iconoir-cancel"
                    alt=""
                    src="/icon--iconoir--cancel1.svg"
                  />
                </div>
                <img
                  className="icon-jam-icons-outline-l"
                  alt=""
                  src="/icon--jamicons--outline--logos--arrowright2.svg"
                />
              </div>
              <div className="footer-componentslinkfooter7">
                <img
                  className="icon-jam-icons-outline-l"
                  alt=""
                  src="/icon--jamicons--outline--logos--world.svg"
                />
                <div className="button-text">Ten</div>
                <div className="badge18">
                  <img
                    className="icon-iconoir-cancel"
                    alt=""
                    src="/icon--jamicons--outline--logos--circle3.svg"
                  />
                  <div className="text-container">
                    <div className="button-text">BETA</div>
                  </div>
                  <img
                    className="icon-iconoir-cancel"
                    alt=""
                    src="/icon--iconoir--cancel1.svg"
                  />
                </div>
                <img
                  className="icon-jam-icons-outline-l"
                  alt=""
                  src="/icon--jamicons--outline--logos--arrowright2.svg"
                />
              </div>
            </div>
          </div>
          <div className="footer-componentscolumn">
            <div className="footer-componentslinkfooter">
              <img
                className="icon-jam-icons-outline-l"
                alt=""
                src="/icon--jamicons--outline--logos--world.svg"
              />
              <div className="title">Company</div>
              <div className="badge18">
                <img
                  className="icon-iconoir-cancel"
                  alt=""
                  src="/icon--jamicons--outline--logos--circle3.svg"
                />
                <div className="text-container">
                  <div className="button-text">BETA</div>
                </div>
                <img
                  className="icon-iconoir-cancel"
                  alt=""
                  src="/icon--iconoir--cancel1.svg"
                />
              </div>
              <img
                className="icon-jam-icons-outline-l"
                alt=""
                src="/icon--jamicons--outline--logos--arrowright2.svg"
              />
            </div>
            <div className="links">
              <div className="footer-componentslinkfooter">
                <img
                  className="icon-jam-icons-outline-l"
                  alt=""
                  src="/icon--jamicons--outline--logos--world.svg"
                />
                <div className="button-text">About</div>
                <div className="badge18">
                  <img
                    className="icon-iconoir-cancel"
                    alt=""
                    src="/icon--jamicons--outline--logos--circle3.svg"
                  />
                  <div className="text-container">
                    <div className="button-text">BETA</div>
                  </div>
                  <img
                    className="icon-iconoir-cancel"
                    alt=""
                    src="/icon--iconoir--cancel1.svg"
                  />
                </div>
                <img
                  className="icon-jam-icons-outline-l"
                  alt=""
                  src="/icon--jamicons--outline--logos--arrowright2.svg"
                />
              </div>
              <div className="footer-componentslinkfooter">
                <img
                  className="icon-jam-icons-outline-l"
                  alt=""
                  src="/icon--jamicons--outline--logos--world.svg"
                />
                <div className="button-text">Press</div>
                <div className="badge18">
                  <img
                    className="icon-iconoir-cancel"
                    alt=""
                    src="/icon--jamicons--outline--logos--circle3.svg"
                  />
                  <div className="text-container">
                    <div className="button-text">BETA</div>
                  </div>
                  <img
                    className="icon-iconoir-cancel"
                    alt=""
                    src="/icon--iconoir--cancel1.svg"
                  />
                </div>
                <img
                  className="icon-jam-icons-outline-l"
                  alt=""
                  src="/icon--jamicons--outline--logos--arrowright2.svg"
                />
              </div>
              <div className="footer-componentslinkfooter">
                <img
                  className="icon-jam-icons-outline-l"
                  alt=""
                  src="/icon--jamicons--outline--logos--world.svg"
                />
                <div className="button-text">Events</div>
                <div className="badge18">
                  <img
                    className="icon-iconoir-cancel"
                    alt=""
                    src="/icon--jamicons--outline--logos--circle3.svg"
                  />
                  <div className="text-container">
                    <div className="button-text">BETA</div>
                  </div>
                  <img
                    className="icon-iconoir-cancel"
                    alt=""
                    src="/icon--iconoir--cancel1.svg"
                  />
                </div>
                <img
                  className="icon-jam-icons-outline-l"
                  alt=""
                  src="/icon--jamicons--outline--logos--arrowright2.svg"
                />
              </div>
              <div className="footer-componentslinkfooter">
                <img
                  className="icon-jam-icons-outline-l"
                  alt=""
                  src="/icon--jamicons--outline--logos--world.svg"
                />
                <div className="button-text">Careers</div>
                <div className="badge18">
                  <img
                    className="icon-iconoir-cancel"
                    alt=""
                    src="/icon--jamicons--outline--logos--circle3.svg"
                  />
                  <div className="text-container">
                    <div className="button-text">BETA</div>
                  </div>
                  <img
                    className="icon-iconoir-cancel"
                    alt=""
                    src="/icon--iconoir--cancel1.svg"
                  />
                </div>
                <img
                  className="icon-jam-icons-outline-l"
                  alt=""
                  src="/icon--jamicons--outline--logos--arrowright2.svg"
                />
              </div>
              <div className="footer-componentslinkfooter">
                <img
                  className="icon-jam-icons-outline-l"
                  alt=""
                  src="/icon--jamicons--outline--logos--world.svg"
                />
                <div className="button-text">Customers</div>
                <div className="badge18">
                  <img
                    className="icon-iconoir-cancel"
                    alt=""
                    src="/icon--jamicons--outline--logos--circle3.svg"
                  />
                  <div className="text-container">
                    <div className="button-text">BETA</div>
                  </div>
                  <img
                    className="icon-iconoir-cancel"
                    alt=""
                    src="/icon--iconoir--cancel1.svg"
                  />
                </div>
                <img
                  className="icon-jam-icons-outline-l"
                  alt=""
                  src="/icon--jamicons--outline--logos--arrowright2.svg"
                />
              </div>
              <div className="footer-componentslinkfooter">
                <img
                  className="icon-jam-icons-outline-l"
                  alt=""
                  src="/icon--jamicons--outline--logos--world.svg"
                />
                <div className="button-text">Partners</div>
                <div className="badge18">
                  <img
                    className="icon-iconoir-cancel"
                    alt=""
                    src="/icon--jamicons--outline--logos--circle3.svg"
                  />
                  <div className="text-container">
                    <div className="button-text">BETA</div>
                  </div>
                  <img
                    className="icon-iconoir-cancel"
                    alt=""
                    src="/icon--iconoir--cancel1.svg"
                  />
                </div>
                <img
                  className="icon-jam-icons-outline-l"
                  alt=""
                  src="/icon--jamicons--outline--logos--arrowright2.svg"
                />
              </div>
              <div className="footer-componentslinkfooter7">
                <img
                  className="icon-jam-icons-outline-l"
                  alt=""
                  src="/icon--jamicons--outline--logos--world.svg"
                />
                <div className="button-text">Seven</div>
                <div className="badge18">
                  <img
                    className="icon-iconoir-cancel"
                    alt=""
                    src="/icon--jamicons--outline--logos--circle3.svg"
                  />
                  <div className="text-container">
                    <div className="button-text">BETA</div>
                  </div>
                  <img
                    className="icon-iconoir-cancel"
                    alt=""
                    src="/icon--iconoir--cancel1.svg"
                  />
                </div>
                <img
                  className="icon-jam-icons-outline-l"
                  alt=""
                  src="/icon--jamicons--outline--logos--arrowright2.svg"
                />
              </div>
              <div className="footer-componentslinkfooter7">
                <img
                  className="icon-jam-icons-outline-l"
                  alt=""
                  src="/icon--jamicons--outline--logos--world.svg"
                />
                <div className="button-text">Eight</div>
                <div className="badge18">
                  <img
                    className="icon-iconoir-cancel"
                    alt=""
                    src="/icon--jamicons--outline--logos--circle3.svg"
                  />
                  <div className="text-container">
                    <div className="button-text">BETA</div>
                  </div>
                  <img
                    className="icon-iconoir-cancel"
                    alt=""
                    src="/icon--iconoir--cancel1.svg"
                  />
                </div>
                <img
                  className="icon-jam-icons-outline-l"
                  alt=""
                  src="/icon--jamicons--outline--logos--arrowright2.svg"
                />
              </div>
              <div className="footer-componentslinkfooter7">
                <img
                  className="icon-jam-icons-outline-l"
                  alt=""
                  src="/icon--jamicons--outline--logos--world.svg"
                />
                <div className="button-text">Nine</div>
                <div className="badge18">
                  <img
                    className="icon-iconoir-cancel"
                    alt=""
                    src="/icon--jamicons--outline--logos--circle3.svg"
                  />
                  <div className="text-container">
                    <div className="button-text">BETA</div>
                  </div>
                  <img
                    className="icon-iconoir-cancel"
                    alt=""
                    src="/icon--iconoir--cancel1.svg"
                  />
                </div>
                <img
                  className="icon-jam-icons-outline-l"
                  alt=""
                  src="/icon--jamicons--outline--logos--arrowright2.svg"
                />
              </div>
              <div className="footer-componentslinkfooter7">
                <img
                  className="icon-jam-icons-outline-l"
                  alt=""
                  src="/icon--jamicons--outline--logos--world.svg"
                />
                <div className="button-text">Ten</div>
                <div className="badge18">
                  <img
                    className="icon-iconoir-cancel"
                    alt=""
                    src="/icon--jamicons--outline--logos--circle3.svg"
                  />
                  <div className="text-container">
                    <div className="button-text">BETA</div>
                  </div>
                  <img
                    className="icon-iconoir-cancel"
                    alt=""
                    src="/icon--iconoir--cancel1.svg"
                  />
                </div>
                <img
                  className="icon-jam-icons-outline-l"
                  alt=""
                  src="/icon--jamicons--outline--logos--arrowright2.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="bottom">
          <div className="logo-container">
            <div className="menu">
              <img className="vector-icon4" alt="" src="/vector4.svg" />
              <div className="title">pscologear</div>
            </div>
          </div>
          <div className="companyname-202x">@ 2024. todos os direitos reservados.</div>
          <div className="footer-componentsvertical-men">
            <div className="footer-componentslinkfooter66">
              <img
                className="icon-jam-icons-outline-l"
                alt=""
                src="/icon--jamicons--outline--logos--world.svg"
              />
              <div className="button-text">Termos</div>
              <div className="badge18">
                <img
                  className="icon-iconoir-cancel"
                  alt=""
                  src="/icon--jamicons--outline--logos--circle3.svg"
                />
                <div className="text-container">
                  <div className="button-text">BETA</div>
                </div>
                <img
                  className="icon-iconoir-cancel"
                  alt=""
                  src="/icon--iconoir--cancel1.svg"
                />
              </div>
              <img
                className="icon-jam-icons-outline-l"
                alt=""
                src="/icon--jamicons--outline--logos--arrowright2.svg"
              />
            </div>
            <div className="footer-componentslinkfooter66">
              <img
                className="icon-jam-icons-outline-l"
                alt=""
                src="/icon--jamicons--outline--logos--world.svg"
              />
              <div className="button-text">Privacidade</div>
              <div className="badge18">
                <img
                  className="icon-iconoir-cancel"
                  alt=""
                  src="/icon--jamicons--outline--logos--circle3.svg"
                />
                <div className="text-container">
                  <div className="button-text">BETA</div>
                </div>
                <img
                  className="icon-iconoir-cancel"
                  alt=""
                  src="/icon--iconoir--cancel1.svg"
                />
              </div>
              <img
                className="icon-jam-icons-outline-l"
                alt=""
                src="/icon--jamicons--outline--logos--arrowright2.svg"
              />
            </div>
            <div className="footer-componentslinkfooter66">
              <img
                className="icon-jam-icons-outline-l"
                alt=""
                src="/icon--jamicons--outline--logos--world.svg"
              />
              <div className="button-text">Suporte</div>
              <div className="badge18">
                <img
                  className="icon-iconoir-cancel"
                  alt=""
                  src="/icon--jamicons--outline--logos--circle3.svg"
                />
                <div className="text-container">
                  <div className="button-text">BETA</div>
                </div>
                <img
                  className="icon-iconoir-cancel"
                  alt=""
                  src="/icon--iconoir--cancel1.svg"
                />
              </div>
              <img
                className="icon-jam-icons-outline-l"
                alt=""
                src="/icon--jamicons--outline--logos--arrowright2.svg"
              />
            </div>
            <div className="footer-componentslinkfooter66">
              <img
                className="icon-jam-icons-outline-l"
                alt=""
                src="/icon--jamicons--outline--logos--world.svg"
              />
              <div className="button-text">Sobre</div>
              <div className="badge18">
                <img
                  className="icon-iconoir-cancel"
                  alt=""
                  src="/icon--jamicons--outline--logos--circle3.svg"
                />
                <div className="text-container">
                  <div className="button-text">BETA</div>
                </div>
                <img
                  className="icon-iconoir-cancel"
                  alt=""
                  src="/icon--iconoir--cancel1.svg"
                />
              </div>
              <img
                className="icon-jam-icons-outline-l"
                alt=""
                src="/icon--jamicons--outline--logos--arrowright2.svg"
              />
            </div>
          
            <div className="footer-componentslinkfooter66">
              <img
                className="icon-jam-icons-outline-l"
                alt=""
                src="/icon--jamicons--outline--logos--world.svg"
              />
              <div className="button-text">Contato</div>
              <div className="badge18">
                <img
                  className="icon-iconoir-cancel"
                  alt=""
                  src="/icon--jamicons--outline--logos--circle3.svg"
                />
                <div className="text-container">
                  <div className="button-text">BETA</div>
                </div>
                <img
                  className="icon-iconoir-cancel"
                  alt=""
                  src="/icon--iconoir--cancel1.svg"
                />
              </div>
              <img
                className="icon-jam-icons-outline-l"
                alt=""
                src="/icon--jamicons--outline--logos--arrowright2.svg"
              />
            </div>
            <div className="footer-componentslinkfooter72">
              <img
                className="icon-jam-icons-outline-l"
                alt=""
                src="/icon--jamicons--outline--logos--world.svg"
              />
              <div className="button-text">Seven</div>
              <div className="badge18">
                <img
                  className="icon-iconoir-cancel"
                  alt=""
                  src="/icon--jamicons--outline--logos--circle3.svg"
                />
                <div className="text-container">
                  <div className="button-text">BETA</div>
                </div>
                <img
                  className="icon-iconoir-cancel"
                  alt=""
                  src="/icon--iconoir--cancel1.svg"
                />
              </div>
              <img
                className="icon-jam-icons-outline-l"
                alt=""
                src="/icon--jamicons--outline--logos--arrowright2.svg"
              />
            </div>
            <div className="footer-componentslinkfooter72">
              <img
                className="icon-jam-icons-outline-l"
                alt=""
                src="/icon--jamicons--outline--logos--world.svg"
              />
              <div className="button-text">Eight</div>
              <div className="badge18">
                <img
                  className="icon-iconoir-cancel"
                  alt=""
                  src="/icon--jamicons--outline--logos--circle3.svg"
                />
                <div className="text-container">
                  <div className="button-text">BETA</div>
                </div>
                <img
                  className="icon-iconoir-cancel"
                  alt=""
                  src="/icon--iconoir--cancel1.svg"
                />
              </div>
              <img
                className="icon-jam-icons-outline-l"
                alt=""
                src="/icon--jamicons--outline--logos--arrowright2.svg"
              />
            </div>
            <div className="footer-componentslinkfooter72">
              <img
                className="icon-jam-icons-outline-l"
                alt=""
                src="/icon--jamicons--outline--logos--world.svg"
              />
              <div className="button-text">Nine</div>
              <div className="badge18">
                <img
                  className="icon-iconoir-cancel"
                  alt=""
                  src="/icon--jamicons--outline--logos--circle3.svg"
                />
                <div className="text-container">
                  <div className="button-text">BETA</div>
                </div>
                <img
                  className="icon-iconoir-cancel"
                  alt=""
                  src="/icon--iconoir--cancel1.svg"
                />
              </div>
              <img
                className="icon-jam-icons-outline-l"
                alt=""
                src="/icon--jamicons--outline--logos--arrowright2.svg"
              />
            </div>
            <div className="footer-componentslinkfooter72">
              <img
                className="icon-jam-icons-outline-l"
                alt=""
                src="/icon--jamicons--outline--logos--world.svg"
              />
              <div className="button-text">Ten</div>
              <div className="badge18">
                <img
                  className="icon-iconoir-cancel"
                  alt=""
                  src="/icon--jamicons--outline--logos--circle3.svg"
                />
                <div className="text-container">
                  <div className="button-text">BETA</div>
                </div>
                <img
                  className="icon-iconoir-cancel"
                  alt=""
                  src="/icon--iconoir--cancel1.svg"
                />
              </div>
              <img
                className="icon-jam-icons-outline-l"
                alt=""
                src="/icon--jamicons--outline--logos--arrowright2.svg"
              />
            </div>
          </div>
          <div className="footer-componentssocial-icons">
            <img
              className="icon-jam-icons-outline-l2"
              alt=""
              src="/icon--jamicons--outline--logos--youtube.svg"
            />
            <img
              className="icon-jam-icons-outline-l2"
              alt=""
              src="/icon--jamicons--outline--logos--facebook.svg"
            />
            <img
              className="icon-jam-icons-outline-l2"
              alt=""
              src="/icon--jamicons--outline--logos--twitter.svg"
            />
            <img
              className="icon-jam-icons-outline-l2"
              alt=""
              src="/icon--jamicons--outline--logos--instagram.svg"
            />
            <img
              className="icon-jam-icons-outline-l2"
              alt=""
              src="/icon--jamicons--outline--logos--linkedin.svg"
            />
            <img
              className="icon-jam-icons-outline-l"
              alt=""
              src="/icon--bootstrap--outline--logos--medium.svg"
            />
            <img
              className="icon-jam-icons-outline-l"
              alt=""
              src="/icon--jamicons--outline--logos--pinterest.svg"
            />
            <img
              className="icon-jam-icons-outline-l"
              alt=""
              src="/icon--jamicons--outline--logos--behance.svg"
            />
            <img
              className="icon-jam-icons-outline-l"
              alt=""
              src="/icon--jamicons--outline--logos--dribbble.svg"
            />
            <img
              className="icon-jam-icons-outline-l"
              alt=""
              src="/icon--bootstrap--outline--logos--tiktok.svg"
            />
          </div>
          <div className="app-download">
            <div className="button9">
              <img
                className="app-store-filled"
                alt=""
                src="/app-store--filled.svg"
              />
            </div>
            <div className="button9">
              <div className="google-play">
                <img className="vector-icon5" alt="" src="/vector5.svg" />
                <img className="vector-icon5" alt="" src="/vector6.svg" />
                <div className="get-it-on">GET IT ON</div>
                <img className="vector-icon7" alt="" src="/vector7.svg" />
                <img className="vector-icon8" alt="" src="/vector8.svg" />
                <img className="vector-icon9" alt="" src="/vector9.svg" />
                <img className="vector-icon10" alt="" src="/vector10.svg" />
                <img className="vector-icon11" alt="" src="/vector11.svg" />
              </div>
            </div>
          </div>
        </div>
        <div className="disclaimer">
          <div className="companyname-202x">Disclaimer</div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
