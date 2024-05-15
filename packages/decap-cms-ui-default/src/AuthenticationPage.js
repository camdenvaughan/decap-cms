import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import Icon from './Icon';
import { buttons, shadows } from './styles';
import GoBackButton from './GoBackButton';

const StyledAuthenticationPage = styled.section`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  gap: 50px;
  height: 100vh;
`;

const AuthIconWrapper = styled.span`
  width: 300px;
  height: auto;
`;



const DecapLogoIcon = styled(Icon)`
  height: auto;
`;

const NetlifyCreditIcon = styled(Icon)`
  color: #c4c6d2;
  position: absolute;
  bottom: 10px;
`;

function AuthLogoIcon({ url, companyName }) {
  let altText = 'Logo'
  if (companyName) {
    altText = `${companyName} Logo`
  }
  return (
    <AuthIconWrapper>
      <img src={url} alt={altText} />
    </AuthIconWrapper>
  );
}
function CustomLogoIcon({ url, companyName }) {
  let altText = 'Logo'
  if (companyName) {
    altText = `${companyName} Logo`
  }
  return (

    <svg src={url} alt={altText} />

  );
}

function renderPageLogo(logoUrl, companyName) {
  if (logoUrl) {
    return <AuthLogoIcon url={logoUrl} companyName={companyName}/>;
  }
  return <DecapLogoIcon size="300px" type="decap-cms" />;
}

const LoginButton = styled.button`
  ${buttons.button};
  ${shadows.dropDeep};
  ${buttons.default};
  ${buttons.gray};
  &[disabled] {
    ${buttons.disabled};
  }

  padding: 0 12px;
  margin-top: 0;
  display: flex;
  align-items: center;
  position: relative;
`;

const TextButton = styled.button`
  ${buttons.button};
  ${buttons.default};
  ${buttons.grayText};

  margin-top: 0;
  display: flex;
  align-items: center;
  position: relative;
`;

function AuthenticationPage({
  onLogin,
  loginDisabled,
  loginErrorMessage,
  renderButtonContent,
  renderPageContent,
  logoUrl,
  siteUrl,
  companyName,
  t,
}) {
  return (
    <StyledAuthenticationPage>
      {renderPageLogo(logoUrl, companyName)}
      {loginErrorMessage ? <p>{loginErrorMessage}</p> : null}
      {!renderPageContent
        ? null
        : renderPageContent({ LoginButton, TextButton, showAbortButton: !siteUrl })}
      {!renderButtonContent ? null : (
        <LoginButton disabled={loginDisabled} onClick={onLogin}>
          {renderButtonContent()}
        </LoginButton>
      )}
      {siteUrl && <GoBackButton href={siteUrl} t={t} />}
    </StyledAuthenticationPage>
  );
}

AuthenticationPage.propTypes = {
  onLogin: PropTypes.func,
  logoUrl: PropTypes.string,
  siteUrl: PropTypes.string,
  companyName: PropTypes.string,
  loginDisabled: PropTypes.bool,
  loginErrorMessage: PropTypes.node,
  renderButtonContent: PropTypes.func,
  renderPageContent: PropTypes.func,
  t: PropTypes.func.isRequired,
};

export default AuthenticationPage;
export { CustomLogoIcon } ;
