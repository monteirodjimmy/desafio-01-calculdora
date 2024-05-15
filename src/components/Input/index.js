import { InputContainer } from "./styles";

function Input({value}) {
    return (
      <InputContainer>
        <input disabled value={value}></input>
      </InputContainer>
    );
  }
  
  export default Input;