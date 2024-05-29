import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { translate } from 'react-polyglot';
import { Icon, Dropdown, DropdownItem, DropdownButton, colors } from 'decap-cms-ui-default';

import { stripProtocol } from '../../lib/urlHelper';
import { store } from '../../redux';

const styles = {
  avatarImage: css`
    width: 32px;
    border-radius: 32px;
  `,
};

const AvatarDropdownButton = styled(DropdownButton)`
  display: inline-block;
  padding: 8px;
  cursor: pointer;
  color: #1e2532;
  background-color: transparent;
`;

const AvatarImage = styled.img`
  ${styles.avatarImage};
`;

const AvatarPlaceholderIcon = styled(Icon)`
  ${styles.avatarImage};
  height: 32px;
  color: #1e2532;
  background-color: ${colors.textFieldBorder};
`;

const AppHeaderSiteLink = styled.a`
  font-size: 14px;
  font-weight: 400;
  color: ${colors.headerContent};
  padding: 10px 16px;
`;

const AppHeaderTestRepoIndicator = styled.a`
  font-size: 14px;
  font-weight: 400;
  color: ${colors.headerContent};
  padding: 10px 16px;
`;

function Avatar({ imageUrl }) {
  return imageUrl ? (
    <AvatarImage src={imageUrl} />
  ) : (
    <AvatarPlaceholderIcon type="user" size="large" />
  );
}

Avatar.propTypes = {
  imageUrl: PropTypes.string,
};

function changeLightMode() {
  document.documentElement.setAttribute("data-theme", 'light');

  const theme = localStorage.setItem('theme', 'light')
  store.getState().previewDarkMode = false;
}
function changeDarkMode() {
  document.documentElement.setAttribute("data-theme", 'dark');
  const theme = localStorage.setItem('theme', 'dark')
  store.getState().previewDarkMode = true;

}
function systemTheme() {
  const checkIsDarkSchemePreferred = () => window?.matchMedia?.('(prefers-color-scheme:dark)')?.matches ?? false;
  document.documentElement.setAttribute("data-theme", checkIsDarkSchemePreferred ? 'dark' : 'light');
  localStorage.removeItem("theme");
}

function SettingsDropdown({ displayUrl, isTestRepo, imageUrl, onLogoutClick, t }) {
  return (
    <React.Fragment>
      {isTestRepo && (
        <AppHeaderTestRepoIndicator
          href="https://www.decapcms.org/docs/test-backend"
          target="_blank"
          rel="noopener noreferrer"
        >
          Test Backend ↗
        </AppHeaderTestRepoIndicator>
      )}
      {displayUrl ? (
        <AppHeaderSiteLink href={displayUrl} target="_blank">
          {stripProtocol(displayUrl)}
        </AppHeaderSiteLink>
      ) : null}
      <Dropdown
        dropdownTopOverlap="50px"
        dropdownWidth="150px"
        dropdownPosition="right"
        renderButton={() => (
          <AvatarDropdownButton>
            <Avatar imageUrl={imageUrl} />
          </AvatarDropdownButton>
        )}
      >
        <DropdownItem label={'light mode'} onClick={changeLightMode} />
        <DropdownItem label={'dark mode'} onClick={changeDarkMode} />
        <DropdownItem label={'system theme'} onClick={systemTheme} />
        <DropdownItem label={t('ui.settingsDropdown.logOut')} onClick={onLogoutClick} />
      </Dropdown>
    </React.Fragment>
  );
}

SettingsDropdown.propTypes = {
  displayUrl: PropTypes.string,
  isTestRepo: PropTypes.bool,
  imageUrl: PropTypes.string,
  onLogoutClick: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
};

export default translate()(SettingsDropdown);
