import * as React  from 'react';
import {useState} from 'react';
import { Text, TextInput, Button, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

// or any pure javascript modules available in npm
//import { Button } from 'react-native-paper';
// States ( Disponíveis no contexto da Aplicação)

export default function App() {
  // useState()
  const [ peso       , setPeso      ]  = useState(100);
  const [ altura     , setAltura    ]  = useState(1.87);
  const [ imc        , setImc       ]  = useState(0);
  const [ legenda    , setLegenda   ]  = useState('Indeterminado');



  calcularIMC = () => {
    // parseFloat converte para float ; .toFixed(1) => Uma casa decimal de

    //Calcular IMC
    const resultado = parseFloat( ( ( peso )/(altura * altura) ).toFixed(1) )
    setImc(resultado)

    // Interpretação
    if (resultado < 16){
      setLegenda('Baixo peso muito grave')
    }
   
    if (resultado >= 16 && resultado <=16.99){
      setLegenda('Baixo peso grave')
    } 

    if (resultado >= 17 && resultado <=18.49){
      setLegenda('Baixo')
    } 

    if (resultado >= 18.5 && resultado <=24.99){
      setLegenda('Normal')
    } 

    if (resultado > 25 && resultado <=29.99){
      setLegenda('Sobrepeso')
    } 

    if (resultado > 30 && resultado <=34.99){
      setLegenda('Obesidade Grau I')
    } 


    if (resultado > 16 && resultado <=16.99){
      setLegenda('Obesidade Grau I')
    } 


    if (resultado > 35 && resultado <=39.99){
      setLegenda('Obesidade Grau II')
    } 

    if (resultado > 40){
      setLegenda('Obesidade Grau III')
    } 


    



  };



  // Calculo do IMC => peso / altura ^2

  return (
    <View style={styles.app}>
      <Text style={styles.titulo}> Seu IMC </Text>

      <View>
        <Text style={styles.resultado}>   {imc} </Text>
        <Text style={styles.diagnostico}> {legenda}         </Text>
      </View>

      <View>
        <TextInput style={styles.peso  } placeholder="Peso(kg)"   onChangeText={text => setPeso(text)} />
        <TextInput style={styles.altura} placeholder="Altura(cm)" onChangeText={text => setAltura(text)} />
        <Button
          style={styles.calcular}
          title="Calcular"
          onPress={()=> calcularIMC()}
        />
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  app: {
    padding: 40,
    marginTop:120,
  },
  //View01
  titulo: {
    fontSize: 30,
    fontWeight: 'bold', // negrito
    textAlign: 'center', // alinhamento do texto
  },
  resultado: {
    textAlign: 'center',
    fontSize: 26,
    fontWeight: 'bold',
  },
  diagnostico: {
    paddingLeft:40,
    textAlign: 'center',
    fontSize: 20,
  },
  //View02
  peso: {
    marginTop: 10,
    padding: 10,
    borderColor: '#000',
    borderWidth: 1,
  },
  altura: {
    marginTop: 10,
    padding: 10,
    borderColor: '#000',
    borderWidth: 1,
    marginBottom: 5,
  },
  // Button Calcular
  calcular: {},
});
