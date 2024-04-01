import styled from 'styled-components';
import theme from '../../../styles/theme';

const Modal = styled.div`
  width: 704px;
  height: 696px;
  padding: 32px 24px 32px 24px;
  border-radius: 10px 0px 0px 0px;
`;
const Head = styled.h2`
  font-size: 26px;
  font-weight: 500;
  line-height: 32px;
  color: #${theme.lightTheme.colors.primary.text};
`;
const ContainerGender = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
  margin-top: 24px;
  margin-bottom: 12px;
`;
const GenderPargh = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;

  color: #${theme.lightTheme.colors.primary.text};
`;
const GenderSpan = styled.span`
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
  color: #${theme.lightTheme.colors.primary.accent};
`;
const InfoContainer = styled.div`
  width: 544px;
  border: 1px solid;
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 24px;
  border-color: #${theme.lightTheme.colors.secondary.color5};
`;
const InfoPargh = styled.p`
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  text-align: left;
  color: #8f8f8f;
`;
const InfoSpan = styled.span`
  color: #${theme.lightTheme.colors.primary.accent};
`;
const CalculateForm = styled.form`
  display: flex;
  flex-direction: column;
`;
const CalculateHead = styled.h3`
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
  text-align: left;
  color: #${theme.lightTheme.colors.primary.text};
`;
const GenderLabel = styled.label`
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
`;
const GenderInput = styled.input`
  color: #${theme.lightTheme.colors.primary.bg};
  width: 14px;
  height: 14px;
  border: 1px solid;
  border-color: #${theme.lightTheme.colors.primary.accent};
  border-radius: 50%;
`;
const GenderContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
`;
const UserLabel = styled.label`
  width: 544px;
  display: flex;
  gap: 8px;
  flex-direction: column;
`;
const UserInputs = styled.input`
  border-radius: 6px;
  border: 1px solid;
  width: 100%;
  color: #${theme.lightTheme.colors.primary.accent};
  padding: 12px 10px 12px 10px;
  border-color: #${theme.lightTheme.colors.secondary.color5};
  &::placeholder {
    color: #${theme.lightTheme.colors.primary.accent};
  }
`;
const UserInputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 24px;
`;
const UserWaterPredict = styled.label`
  width: 544px;
  display: flex;
  gap: 16px;
  flex-direction: column;
  margin-bottom: 24px;
`;
const SaveButton = styled.button`
  border-radius: 10px;
  padding: 10px 30px;
  width: 160px;
  color: #${theme.lightTheme.colors.primary.bg};
  background-color: #${theme.lightTheme.colors.primary.accent};
`;
const ButtonContainer = styled.div`
  width: 544px;
  display: flex;
  justify-content: end;
`;
const CloseModalButton = styled.button``;
const HeadContainer = styled.div`
  width: 544px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const WaterAmountSpan = styled.span`
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  color: #${theme.lightTheme.colors.primary.accent};
`;
export {
  Modal,
  Head,
  ButtonContainer,
  CloseModalButton,
  HeadContainer,
  ContainerGender,
  WaterAmountSpan,
  SaveButton,
  GenderPargh,
  GenderSpan,
  InfoPargh,
  InfoContainer,
  InfoSpan,
  GenderLabel,
  GenderInput,
  CalculateHead,
  UserWaterPredict,
  GenderContainer,
  UserLabel,
  UserInputs,
  CalculateForm,
  UserInputsContainer,
};
