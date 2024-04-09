import FadeLoader from 'react-spinners/ClipLoader';

import { useContext, useState } from 'react';
import { useFormik } from 'formik';
import PasswordStrengthBar from 'react-password-strength-bar';
import { useDispatch } from 'react-redux';
import { updateUserInfo, uploadAvatar } from '../../redux/auth/operations';
import useAuth from '../../hooks/useAuth';
import { Snackbar, Alert, Avatar, Tooltip, Chip } from '@mui/material';
import { HiOutlineEyeSlash } from 'react-icons/hi2';
import { PiEyeLight } from 'react-icons/pi';
import { RiDownload2Line as UploadIcon } from 'react-icons/ri';
import { ReactComponent as DefaultAvatar } from '../../assets/header-icons/uer-avatar-icon.svg';
import {
  StyledContainer,
  StyledTitle,
  FormTitle,
  FormWrapper,
  AvatarWrapper,
  TextToAvatar,
  AvatarLabel,
  InputContainer,
  Input,
  Wrapper,
  FlexWrapper,
  Title,
  Label,
  SelectorGroup,
  GenderSelector,
  SelectorLabel,
  ButtonContainer,
  ButtonIcon,
  SaveButton,
  AvatarPreview,
  LabelAvatar,
} from './settingModal.styled';
import { ModalContext } from '../../context';

export const SettingModal = () => {
  const dispatch = useDispatch();
  const { closeModal } = useContext(ModalContext);

  const BASE_AVATAR_URL = 'https://smart-foxes-backend-watertracker.onrender.com/';

  // const BASE_AVATAR_URL = 'http://localhost:3000/';

  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showRepeatedPassword, setShowRepeatedPassword] = useState(false);
  const [passwordMismatchError, setPasswordMismatchError] = useState('');
  const [passwordChangedAt, setPasswordChangedAt] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  // const [avatarPreview, setAvatarPreview] = useState(null);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarStatus, setSnackbarStatus] = useState('success');
  const [avatarLoading, setAvatarLoading] = useState(false);

  const { user } = useAuth();

  const formik = useFormik({
    initialValues: {
      gender: user.gender,
      name: user.name || '',
      email: user.email || '',
      oldPassword: '',
      newPassword: '',
      repeatPassword: '',
      avatar: '',
    },
    onSubmit: async (values, actions) => {
      setIsSubmitting(true);
      try {
        if (values.newPassword !== values.repeatPassword) {
          setPasswordMismatchError("Passwords don't match");
          setIsSubmitting(false);
          return;
        } else {
          setPasswordMismatchError('');
        }
        if (values.newPassword.length < 8) {
          setPasswordMismatchError('Password must be at least 8 characters long');
          setIsSubmitting(false);
          return;
        } else {
          setPasswordMismatchError('');
        }
        const formData = new FormData();
        formData.append('email', values.email);
        formData.append('name', values.name);
        formData.append('gender', values.gender);
        formData.append('oldPassword', values.oldPassword);
        formData.append('newPassword', values.newPassword);

        await dispatch(
          updateUserInfo({
            name: values.name,
            email: values.email,
            oldPassword: values.oldPassword,
            newPassword: values.newPassword,
          })
        );

        actions.resetForm();
        setOpenSnackbar(true);
        setSnackbarStatus('success');
        setPasswordChangedAt(new Date().toLocaleString());
        closeModal();
      } catch (error) {
        console.error('Update error:', error);
        setOpenSnackbar(true);
        setSnackbarStatus('error');
      } finally {
        setIsSubmitting(false);
      }
    },
  });

  const onChangeAvatar = async ({ target: { files } }) => {
    try {
      setAvatarLoading(true);
      const formData = new FormData();
      formData.append('avatar', files[0]);
      await dispatch(uploadAvatar(formData));
    } catch (error) {
      console.error('Avatar upload error:', error);
    } finally {
      setAvatarLoading(false);
    }
  };

  return (
    <StyledContainer>
      <StyledTitle>Settings</StyledTitle>
      <FormWrapper>
        <FormTitle>Your photo</FormTitle>
        <AvatarWrapper>
          {avatarLoading ? (
            <FadeLoader color="#407BFF" />
          ) : user.avatarURL ? (
            <AvatarPreview src={`${BASE_AVATAR_URL}${user.avatarURL}`} alt="avatar" />
          ) : (
            <DefaultAvatar style={{ width: 64, height: 64 }} />
          )}
          <LabelAvatar>
            <TextToAvatar>
              <UploadIcon />
              Upload a photo
            </TextToAvatar>
            <input
              type="file"
              name="upload_photo"
              className="photo-input"
              accept=".png, .jpg, .jpeg"
              onChange={onChangeAvatar}
              style={{ opacity: 0, width: '1px' }}
            />
          </LabelAvatar>
        </AvatarWrapper>
        <FlexWrapper>
          <Wrapper>
            <Title id="gender">Your gender</Title>
            <SelectorGroup role="group">
              <SelectorLabel>
                <GenderSelector
                  type="radio"
                  name="gender"
                  value="female"
                  defaultChecked={formik.values.gender === 'female'}
                />
                Female
              </SelectorLabel>
              <SelectorLabel>
                <GenderSelector
                  type="radio"
                  name="gender"
                  value="male"
                  defaultChecked={formik.values.gender === 'male'}
                />
                Male
              </SelectorLabel>
            </SelectorGroup>
            <Label htmlFor="name">Your full name</Label>
            <Input
              type="text"
              name="name"
              id="name"
              title="Enter your full name"
              placeholder="Your full name"
              onChange={formik.handleChange}
              value={formik.values.name}
            />
            <Tooltip title="Your email should be secure and yours. Enter email which you have access to.">
              <Label htmlFor="email">Your email address</Label>
            </Tooltip>
            <Input
              type="text"
              name="email"
              id="email"
              title="Enter your email address"
              placeholder="Your email address"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
          </Wrapper>
          <Wrapper>
            {!isSubmitting && (
              <Tooltip
                title="Service notification that helps you to remember when password was changed. It's disappear after reloading the page."
                placement="top"
              >
                <div>
                  {passwordChangedAt && (
                    <Chip
                      label={`Password changed at ${passwordChangedAt}`}
                      color="primary"
                      placement="top"
                      sx={{ marginBottom: 2 }}
                    />
                  )}
                </div>
              </Tooltip>
            )}
            <Tooltip title="Your password should be secure for preventing unauthorized access to your data">
              <Title>Password</Title>
            </Tooltip>
            <Label className="subtleLabel">Current password:</Label>
            <InputContainer>
              <Input
                type={showPassword ? 'text' : 'password'}
                name="oldPassword"
                id="oldPassword"
                title="Enter your current password"
                placeholder="Current password"
                onChange={formik.handleChange}
                value={formik.values.oldPassword}
              />
              <ButtonIcon type="button" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <PiEyeLight /> : <HiOutlineEyeSlash />}
              </ButtonIcon>
            </InputContainer>
            <Label className="subtleLabel">New password:</Label>
            <InputContainer>
              <Input
                type={showNewPassword ? 'text' : 'password'}
                name="newPassword"
                id="newPassword"
                title="Enter your new password"
                placeholder="New password"
                onChange={formik.handleChange}
                value={formik.values.newPassword}
              />
              <ButtonIcon type="button" onClick={() => setShowNewPassword(!showNewPassword)}>
                {showNewPassword ? <PiEyeLight /> : <HiOutlineEyeSlash />}
              </ButtonIcon>
            </InputContainer>
            <PasswordStrengthBar password={formik.values.newPassword} />
            <Label className="subtleLabel">Repeat password:</Label>
            <InputContainer>
              <Input
                type={showRepeatedPassword ? 'text' : 'password'}
                name="repeatPassword"
                id="repeatPassword"
                title="Enter your repeat password"
                placeholder="Repeat password"
                onChange={formik.handleChange}
                value={formik.values.repeatPassword}
              />
              <ButtonIcon
                type="button"
                onClick={() => setShowRepeatedPassword(!showRepeatedPassword)}
              >
                {showRepeatedPassword ? <PiEyeLight /> : <HiOutlineEyeSlash />}
              </ButtonIcon>
            </InputContainer>
            {passwordMismatchError && <Alert severity="error">{passwordMismatchError}</Alert>}
          </Wrapper>
        </FlexWrapper>
        <ButtonContainer>
          <SaveButton
            type="button"
            style={{ marginTop: 40, marginLeft: 'auto' }}
            onClick={formik.handleSubmit}
            disabled={passwordMismatchError || isSubmitting}
          >
            {isSubmitting ? 'Loading...' : 'Save'}
          </SaveButton>
        </ButtonContainer>
      </FormWrapper>
      <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={() => setOpenSnackbar(false)}>
        <Alert severity={snackbarStatus}>
          {snackbarStatus === 'success'
            ? 'Information Updated Successfully!'
            : 'Error Updating Information'}
        </Alert>
      </Snackbar>
    </StyledContainer>
  );
};
