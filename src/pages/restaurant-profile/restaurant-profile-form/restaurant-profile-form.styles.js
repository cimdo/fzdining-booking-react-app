import styled from "styled-components";

const InputForm = styled.input `
  padding: 15px;
  margin: 5px 0 22px 0;
  display: inline-block;
  border: none;
  background: #f1f1f1;
  box-sizing: border-box;
`;

export const TextInput = styled(InputForm)`
  width: 100%;
`;

export const SelectInput = styled(InputForm)`
  width: 20%;
  margin-right: 2%
`;

export const RadioInput = styled.input`
  padding: 15px;
`;

export const Container = styled.div`
  padding: 16px;
  box-sizing: border-box;
`;

export const LabelRadioButton = styled.label`
  flex: 1 0 21%;
`;

export const SizeWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 10px;
  padding: 10px;
`

export const Item1 = styled.div`
  grid-area: 1 / 1 / 2 / 2;
`

export const Item2 = styled.div`
  grid-area: 1 / 2 / 2 / 3;;
`

export const Item3 = styled.div`
  grid-area:  1 / 3 / 2 / 4;
`

export const Item4 = styled.div`
  grid-area:   2 / 1 / 3 / 2;
`

export const Item5 = styled.div`
  grid-area:  2 / 2 / 3 / 3;
`

export const Item6 = styled.div`
  grid-area:  2 / 3 / 3 / 4;
`
export const DispayForm = styled.section`
display: ${props => (props.selected ? 'block' : 'none')};
`

export const Form = styled.form`
  background-color: #fefefe;

  border: 1px solid #888;
  width: 100%; /* Could be more or less, depending on screen size */
 
`;

export const Hr = styled.hr`
  border: 1px solid #f1f1f1;
  margin-bottom: 25px;
`;

export const Button = styled.input`
  height: 40px;
  width: 100px;
  font-size: 1.2rem;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.1s ease-in-out;
  background-color: #aa6aaa;
  color: whitesmoke;
  &:hover {
    background-color: green;
    color: whitesmoke;
    border-color: gray;
    transform: scale(1.05);
  }
`;

export const ErrorMessage = styled.p`
  color: #bf1650;
  &:before {
    display: inline;
    content: "⚠ ";
  }
`;

export const Collapsible = styled.button`
  background-color: #aa6aaa;
  color: white;
  padding: 18px;
  width: 100%;
  border: none;
  text-align: left;
  font-size: 20px;
  font-weight: bold;
  
`

export const CollapsibleIcon = styled.h1`
  float: right;
  margin:0
`

