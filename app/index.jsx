
import styled from "styled-components/native";
import Title from "../components/Titulo/titulo";

export default function App(){
    return(
        <Tela>
            <Title
             texto={"Entrar"} 
             flag={true}
             />

             <Title 
             texto={"Bem vindo ao app"}
             flag={false}
             />
            
            <ContainerCampoTexto>
                <CampoTexto placeholder=" Digite o email..."  />
                <CampoTexto  placeholder="Digite a senha..." />
            </ContainerCampoTexto>

        <ContainerBotoes > 
            <Botao >
                <TextoBotao>Entrar </ TextoBotao>
            </Botao>
            < Links > Cadastre-se</ Links>
            < Links>Esqueci a senha</ Links>
        </ContainerBotoes>
      </Tela>)
}

 const Tela = styled.View`
 flex: 1;
 background-color: #7B2CBF;
 padding: 26px;
`

const ContainerCampoTexto = styled.View`
gap: 25px;
`

const CampoTexto = styled.TextInput`
background-color: #E0AAFF;
font-size: 18px;
padding: 20px;
border-radius: 20px;
box-shadow: 10px 5px 5px black;
`

const ContainerBotoes = styled.View`
margin-top: 65px;
gap: 20px;
`

const Botao = styled.Pressable`
background-color: #E0AAFF;
padding: 15px;
border-radius: 20px;
`

const TextoBotao = styled.Text`
text-align: center;
font-size: 24;
font-weight: bold;
color: #fff
`

const Links = styled.Text`
text-align: center;
color: #000000;
`







