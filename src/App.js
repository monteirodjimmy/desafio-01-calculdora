import Button from './components/Buttons';
import Input from './components/Input'
import { Conteiner,Content,Row,Column } from "./styles";
import { useState } from 'react';
const App = () => {
  const [currentNumber, setCurrentNumber] = useState("0");
  const [firstNumber, setFirstNumber] = useState("0");
  const [operation, setOperation] = useState('');

  const handleClear = (number) => {
    setCurrentNumber('0');
    setFirstNumber('0');
  };

  const handleAddNumber = (number) => {
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${number}`)
  };

  const handleSumNumber = () => {
    if (firstNumber === '0'){
      setFirstNumber(currentNumber);
      setCurrentNumber('0');
      setOperation('+');
    }else {
      const sum = Number(firstNumber)+Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation('+');
    }
  }

  const handleMinusNumber = () => {
    if (firstNumber === '0'){
      setFirstNumber(currentNumber);
      setCurrentNumber('0');
      setOperation('-');
    }else {
      const minus = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(minus));
      setOperation('-');
    }
  }

  const handleMultiplyNumber = () => {
    if (firstNumber === '0'){
      setFirstNumber(currentNumber);
      setCurrentNumber('0');
      setOperation('x');
    }else {
      const multi = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(multi));
      setOperation('x');
    }
  }
  const handleDivideNumber = () => {
    if (firstNumber === '0'){
      setFirstNumber(currentNumber);
      setCurrentNumber('0');
      setOperation('/');
    }else {
      const multi = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(multi));
      setOperation('/');
    }
  }

  const handleEquals = () => {
    if ( firstNumber !== '0' && operation !== '' && currentNumber !=='0'){
      switch(operation){
        case'+':
        handleSumNumber();
        break;
        case '-':
        handleMinusNumber();
        break;
        case 'x':
          handleMultiplyNumber();
        break;
        case '/':
          handleDivideNumber();
        break;
      default:
        break;
      }

    }else {
      const sum = Number(firstNumber)+Number(currentNumber)
      setCurrentNumber(String(sum))
    }
  }

  return (
    <Conteiner>
      <Content>
      <Input value={currentNumber}/>
        <Row>
          <Button label="x" onClick={handleMultiplyNumber}/>
          <Button label="/" onClick={handleDivideNumber}/>
          <Button label="C" onClick={handleClear}/>
          <Button label="." onClick={() => handleAddNumber(".")}/>
        </Row>
        <Row>
          <Button label={7} onClick={() => handleAddNumber("7")}/> {/* () => ...: Isso define uma função arrow. Aqui, estamos criando uma função arrow inline.*/}
          <Button label={8} onClick={() => handleAddNumber("8")}/>
          <Button label={9} onClick={() => handleAddNumber("9")}/>
          <Button label="-" onClick={handleMinusNumber}/>
        </Row>
        <Row>
          <Button label={4} onClick={() => handleAddNumber("4")}/>
          <Button label={5} onClick={() => handleAddNumber("5")}/>
          <Button label={6} onClick={() => handleAddNumber("6")}/>
          <Button label="+" onClick={handleSumNumber}/>
        </Row>
        <Row>
          <Button label={1} onClick={() => handleAddNumber("1")}/>
          <Button label={2} onClick={() => handleAddNumber("2")}/>
          <Button label={3} onClick={() => handleAddNumber("3")}/>
          <Button label="=" onClick={handleEquals}/>
        </Row>
      </Content>
    </Conteiner>
  );
}

export default App;
