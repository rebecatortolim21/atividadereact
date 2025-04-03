
import styled from "styled-components/native";
import Title from "../components/Titulo/titulo";
import { useEffect, useState } from "react";
import { View, TextInput } from "react-native";
import InputTexto from "@/components/Input/Input";
import { Ionicons } from "@expo/vector-icons"; 
export default function App() {

    const [email, setEmail] = useState('example@example.com');
    const [hasEmailError, setHasEmailError] = useState(false);

    const [senha, setSenha] = useState('@Example123');
    const [hasSenhaError, setHasSenhaError] = useState(false);
    const [senhaVisivel, setSenhaVisivel] = useState(false); 

    useEffect(() => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email)) {
            setHasEmailError(true);
        } else {
            setHasEmailError(false);
        }
    }, [email]);

    useEffect(() => {
        const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;
        if (!passwordRegex.test(senha)) {
            setHasSenhaError(true);
        } else {
            setHasSenhaError(false);
        }
    }, [senha]);

    return (
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
                <View>
                    <InputTexto
                        erro={hasEmailError}
                        placeholder="Digite seu email..."
                        onChangeText={text => setEmail(text)}
                    />
                    {hasEmailError ? <TextErrorHint>E-mail inválido</TextErrorHint> : null}
                </View>

                <View>
                    <ContainerSenha>
                        <TextInput
                            secureTextEntry={!senhaVisivel} 
                            value={senha}
                            onChangeText={text => setSenha(text)}
                            placeholder="Digite sua senha..."
                            style={{ flex: 1, fontSize: 18, paddingLeft: 10 }}
                        />
                        <EyeIcon onPress={() => setSenhaVisivel(!senhaVisivel)}>
                            <Ionicons
                                name={senhaVisivel ? "eye" : "eye-off"}
                                size={24}
                                color="gray"
                            />
                        </EyeIcon>
                    </ContainerSenha>
                    {hasSenhaError ? <TextErrorHint>Senha inválida</TextErrorHint> : null}
                </View>
            </ContainerCampoTexto>
            <ContainerBotoes>  
                <Botao 
                    onPress={(() => console.log('Cliking here'))}
                >
                    <TextoBotao>Entrar</TextoBotao>
                </Botao>
                <Links>Cadastre-se</Links>
                <Links>Esqueci a senha</Links>
            </ContainerBotoes>
        </Tela>
    );
}

const Tela = styled.View`
    flex: 1;
    background-color: #7B2CBF;
    padding: 26px;
`;

const ContainerCampoTexto = styled.View`
    gap: 25px;
`;

const ContainerBotoes = styled.View`
    margin-top: 65px;
    gap: 20px;
`;

const Botao = styled.Pressable`
    background-color: #E0AAFF;
    padding: 20px;
    border-radius: 6px;
`;

const TextoBotao = styled.Text`
    text-align: center;
    font-size: 24px;
    color: #fff;
`;

const Links = styled.Text`
    text-align: center;
    color: #fff;
    font-size: 16px;
`;

const TextErrorHint = styled.Text`
    font-size: 16px;
    color: #E63946;
`;

const ContainerSenha = styled.View`
    flex-direction: row;
    align-items: center;
    
    border: 1px solid #ccc;
    padding: 10px;
    border-radius: 6px;
`;

const EyeIcon = styled.Pressable`
    padding-left: 10px;
`;


















































































