import styled from "styled-components";

export const Tab = styled.button`
  font-size: 15px;
  padding: 10px 60px;
  cursor: pointer;
  background: white;
  border: 0;
  outline: 0;
  opacity: ${({ active }) => (active ? 1 : 0.6)};
  border-bottom: ${({ active }) => active && "2px solid black"};
`;

export const ButtonGroup = styled.div`
  display: flex;
`;

export const Card = styled.div`
  background-color: white;
  padding: 20px;
  margin-top: 20px;
`;

export const BookingCard = styled.div`
  padding: 20px;
  height: 500px;
  margin-top: 20px;
  background-color: white;
`;

export const FutureBookings = styled.div`
  background-color: green;
  opacity: 0.6;
  color: white;
  padding: 10px;
  border-radius: 10px;
  margin-right: 50%;
  margin-bottom: 20px;
`;

export const PastBookings = styled.div`
  background-color: grey;
  opacity: 0.6;
  color: white;
  padding: 10px;
  border-radius: 10px;
  margin-right: 50%;
  margin-bottom: 20px;
`;

export const BookingList = styled.div`
  height: 350px;
  overflow: auto;
`;

export const ModalBackdrop = styled.div`
  display: ${(props) => (props.selected ? "block" : "none")};
  position: fixed;
  z-index: 10001 !important;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
`;

export const Modal = styled.div`
  display: block;
  opacity: 100 !important;
  background-color: black;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  padding: 1rem;
`;

export const CloseModal = styled.button`
  color: #aaaaaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
  &:hover {
    color: #000;
    text-decoration: none;
    cursor: pointer;
  }
`;

export const Form = styled.form`
  background-color: #fefefe;

  border: 1px solid #888;
  width: 100%; /* Could be more or less, depending on screen size */
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  width: 50%;
  height: 50%;
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
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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

export const RightColumn = styled.div`
  float: left;
  width: 25%;
  background-color: #f1f1f1;
  padding-left: 20px;
  @media (max-width: 800px) {
    width: 100%;
    padding: 0;
  }
`;

export const LeftColumn = styled.div`
  float: left;
  width: 75%;
  @media (max-width: 800px) {
    width: 100%;
    padding: 0;
  }
`;

export const FakeImg = styled.div`
  background-color: #aaa;
  width: 100%;
  padding: 20px;
  height: 100px;
`;
