import React from 'react';
import { css, Global } from '@emotion/react';
import { config } from 'decap-cms-lib-util';

/**
 * Font Stacks
 */
const fonts = {
  primary: `
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    Roboto,
    Helvetica,
    Arial,
    sans-serif,
    "Apple Color Emoji",
    "Segoe UI Emoji",
    "Segoe UI Symbol"
  `,
  mono: `
    'SFMono-Regular',
    Consolas,
    "Liberation Mono",
    Menlo,
    Courier,
    monospace;
  `,
};

/**
 * Theme Colors
 */

const colorsRaw = {
  white: '#fff',
  black: '#000',
  grayLight: '#eff0f4',
  gray: '#798291',
  grayDark: '#313d3e',
  blue: '#3a69c7',
  blueLight: '#e8f5fe',
  blueGray: '#7b8290',
  blueVibrant: '#00a5ff',
  green: '#005614',
  greenLight: '#caef6f',
  greenVibrant: '#6eff90',
  brown: '#754e00',
  yellow: '#ffee9c',
  red: '#ff003b',
  redDark: '#D60032',
  redLight: '#fcefea',
  purple: '#70399f',
  purpleLight: '#f6d8ff',
  teal: '#17a2b8',
  tealDark: '#117888',
  tealLight: '#ddf5f9',
};

const rawLightMode = 
  `--lm-background-color: ${colorsRaw.grayLight};
  --lm-background-light-accent: ${colorsRaw.white};
  --lm-background-contrast: ${colorsRaw.black};
  --lm-font-color: ${colorsRaw.gray};
  --lm-font-light-accent: ${colorsRaw.white};
  --lm-font-dark-accent: ${colorsRaw.grayDark};
  --lm-font-active: ${colorsRaw.blue};
  --lm-header-content: ${colorsRaw.blueGray};
  --lm-active-background: ${colorsRaw.blueLight};
  --lm-button: ${colorsRaw.grayDark};
  --lm-text-border: #dfdfe3;
  --lm-success-text: ${colorsRaw.green};
  --lm-success-background: ${colorsRaw.greenLight};
  --lm-control-label: '#5D626F';`
const rawDarkMode =
  `--dm-background-color: #313131;
  --dm-background-light-accent: #404041;
  --dm-background-contrast: ${colorsRaw.white};
  --dm-font-color: #d1d1d1;
  --dm-font-light-accent: #8d8d8d;
  --dm-font-dark-accent: ${colorsRaw.white};
  --dm-font-active: ${colorsRaw.white};
  --dm-header-content: ${colorsRaw.white};
  --dm-active-background: ${colorsRaw.blueVibrant};
  --dm-button: ${colorsRaw.blueVibrant};
  --dm-text-border: #8d8d8d;
  --dm-success-text: ${colorsRaw.greenVibrant};
  --dm-success-background: ${colorsRaw.greenLight};
  --dm-control-label: ${colorsRaw.black};`;

const colors = {
  statusDraftText: colorsRaw.purple,
  statusDraftBackground: colorsRaw.purpleLight,
  statusReviewText: colorsRaw.brown,
  statusReviewBackground: colorsRaw.yellow,
  statusReadyText: colorsRaw.green,
  statusReadyBackground: colorsRaw.greenLight,
  text: 'var(--font-color)',
  textLight: 'var(--font-light-accent)',
  textLead: 'var(--font-dark-accent)',
  background: 'var(--background-color)',
  foreground: 'var(--background-light-accent)',
  active: 'var(--font-active)',
  activeBackground: 'var(--active-background)',
  headerContent: 'var(--header-content)',
  inactive: colorsRaw.gray,
  button: 'var(--button)',
  buttonText: colorsRaw.white,
  inputBackground: 'var(--background-light-accent)',
  infoText: colorsRaw.blue,
  infoBackground: colorsRaw.blueLight,
  successText: 'var(--success-text)',
  successBackground: 'var(--success-background)',
  warnText: colorsRaw.brown,
  warnBackground: colorsRaw.yellow,
  errorText: colorsRaw.red,
  errorBackground: colorsRaw.redLight,
  textFieldBorder: 'var(--text-border)',
  controlLabel: 'var(--control-label)',
  checkerboardLight: '#f2f2f2',
  checkerboardDark: '#e6e6e6',
  mediaDraftText: colorsRaw.purple,
  mediaDraftBackground: colorsRaw.purpleLight,
};

const lengths = {
  topBarHeight: '56px',
  inputPadding: '16px 20px',
  borderRadius: '5px',
  richTextEditorMinHeight: '300px',
  borderWidth: '2px',
  topCardWidth: '682px',
  pageMargin: '28px 18px',
  objectWidgetTopBarContainerPadding: '0 14px 14px',
};

const borders = {
  textField: `solid  ${lengths.borderWidth} ${colors.textFieldBorder}`,
};

const transitions = {
  main: '.2s ease',
};

const shadows = {
  drop: `
    box-shadow: 0 2px 4px 0 rgba(19, 39, 48, 0.12);
  `,
  dropMain: `
    box-shadow: 0 2px 6px 0 rgba(68, 74, 87, 0.05), 0 1px 3px 0 rgba(68, 74, 87, 0.1);
  `,
  dropMiddle: `
    box-shadow: 0 2px 6px 0 rgba(68, 74, 87, 0.15), 0 1px 3px 0 rgba(68, 74, 87, 0.3);
  `,
  dropDeep: `
    box-shadow: 0 4px 12px 0 rgba(68, 74, 87, 0.15), 0 1px 3px 0 rgba(68, 74, 87, 0.25);
  `,
  inset: `
    box-shadow: inset 0 0 4px rgba(68, 74, 87, 0.3);
  `,
};

const text = {
  fieldLabel: css`
    font-size: 12px;
    text-transform: uppercase;
    font-weight: 600;
    color: ${colors.controlLabel};
  `,
};

const gradients = {
  checkerboard: `
    linear-gradient(
      45deg,
      ${colors.checkerboardDark} 25%,
      transparent 25%,
      transparent 75%,
      ${colors.checkerboardDark} 75%,
      ${colors.checkerboardDark}
    )
  `,
};

const effects = {
  checkerboard: css`
    background-color: ${colors.checkerboardLight};
    background-size: 16px 16px;
    background-position: 0 0, 8px 8px;
    background-image: ${gradients.checkerboard}, ${gradients.checkerboard};
  `,
};

const badge = css`
  font-size: 13px;
  line-height: 1;
`;

const backgroundBadge = css`
  ${badge};
  display: block;
  border-radius: ${lengths.borderRadius};
  padding: 4px 10px;
  text-align: center;
`;

const textBadge = css`
  ${badge};
  display: inline-block;
  font-weight: 700;
  text-transform: uppercase;
`;

const card = css`
  ${shadows.dropMain};
  border-radius: 5px;
  background-color: ${colors.foreground};
`;

const buttons = {
  button: css`
    border: 0;
    border-radius: ${lengths.borderRadius};
    cursor: pointer;
  `,
  default: css`
    height: 36px;
    line-height: 36px;
    font-weight: 500;
    padding: 0 15px;
    background-color: ${colorsRaw.gray};
    color: ${colorsRaw.white};
  `,
  widget: css`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2px 12px;
    font-size: 12px;
    font-weight: bold;
    border-radius: 3px;
  `,
  medium: css`
    height: 27px;
    line-height: 27px;
    font-size: 12px;
    font-weight: 600;
    border-radius: 3px;
    padding: 0 24px 0 14px;
  `,
  small: css`
    font-size: 13px;
    height: 23px;
    line-height: 23px;
  `,
  gray: css`
    background-color: ${colors.button};
    color: ${colors.buttonText};

    &:focus,
    &:hover {
      color: ${colorsRaw.white};
      background-color: #555a65;
    }
  `,
  grayText: css`
    background-color: transparent;
    color: ${colorsRaw.gray};
  `,
  green: css`
    background-color: #aae31f;
    color: ${colorsRaw.green};
  `,
  lightRed: css`
    background-color: ${colorsRaw.redLight};
    color: ${colorsRaw.redDark};
  `,
  lightBlue: css`
    background-color: ${colorsRaw.blueLight};
    color: ${colorsRaw.blue};
  `,
  lightTeal: css`
    background-color: ${colorsRaw.tealLight};
    color: #1195aa;
  `,
  teal: css`
    background-color: ${colorsRaw.teal};
    color: ${colorsRaw.white};
  `,
  disabled: css`
    background-color: ${colorsRaw.grayLight};
    color: ${colorsRaw.gray};
    cursor: default;
  `,
};

const caret = css`
  color: ${colorsRaw.white};
  width: 0;
  height: 0;
  border: 5px solid transparent;
  border-radius: 2px;
`;

const components = {
  card,
  caretDown: css`
    ${caret};
    border-top: 6px solid currentColor;
    border-bottom: 0;
  `,
  caretRight: css`
    ${caret};
    border-left: 6px solid currentColor;
    border-right: 0;
  `,
  badge: css`
    ${backgroundBadge};
    color: ${colors.infoText};
    background-color: ${colors.infoBackground};
  `,
  badgeSuccess: css`
    ${backgroundBadge};
    color: ${colors.successText};
    background-color: ${colors.successBackground};
  `,
  badgeDanger: css`
    ${backgroundBadge};
    color: ${colorsRaw.red};
    background-color: #fbe0d7;
  `,
  textBadge: css`
    ${textBadge};
    color: ${colors.infoText};
  `,
  textBadgeSuccess: css`
    ${textBadge};
    color: ${colors.successText};
  `,
  textBadgeDanger: css`
    ${textBadge};
    color: ${colorsRaw.red};
  `,
  loaderSize: css`
    width: 2.2857rem;
    height: 2.2857rem;
  `,
  cardTop: css`
    ${card};
    width: ${lengths.topCardWidth};
    max-width: 100%;
    padding: 18px 20px;
    margin-bottom: 28px;
  `,
  cardTopHeading: css`
    font-size: 22px;
    font-weight: 600;
    line-height: 37px;
    margin: 0;
    padding: 0;
  `,
  cardTopDescription: css`
    max-width: 480px;
    color: ${colors.text};
    font-size: 14px;
    margin-top: 8px;
  `,
  objectWidgetTopBarContainer: css`
    padding: ${lengths.objectWidgetTopBarContainerPadding};
  `,
  dropdownList: css`
    ${shadows.dropDeep};
    background-color: ${colorsRaw.white};
    border-radius: ${lengths.borderRadius};
    overflow: hidden;
  `,
  dropdownItem: css`
    ${buttons.button};
    background-color: transparent;
    border-radius: 0;
    color: ${colorsRaw.grayDark};
    font-weight: 500;
    border-bottom: 1px solid #eaebf1;
    padding: 8px 14px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-width: max-content;

    &:last-of-type {
      border-bottom: 0;
    }

    &.active,
    &:hover,
    &:active,
    &:focus {
      color: ${colors.active};
      background-color: ${colors.activeBackground};
    }
  `,
  viewControlsText: css`
    font-size: 14px;
    color: ${colors.text};
    margin-right: 12px;
    white-space: nowrap;
  `,
};

const reactSelectStyles = {
  control: styles => ({
    ...styles,
    border: 0,
    boxShadow: 'none',
    padding: '9px 0 9px 12px',
  }),
  option: (styles, state) => ({
    ...styles,
    backgroundColor: state.isSelected
      ? `${colors.active}`
      : state.isFocused
      ? `${colors.activeBackground}`
      : 'transparent',
    paddingLeft: '22px',
  }),
  menu: styles => ({ ...styles, right: 0, zIndex: zIndex.zIndex300 }),
  container: styles => ({ ...styles, padding: '0 !important' }),
  indicatorSeparator: (styles, state) =>
    state.hasValue && state.selectProps.isClearable
      ? { ...styles, backgroundColor: `${colors.textFieldBorder}` }
      : { display: 'none' },
  dropdownIndicator: styles => ({ ...styles, color: `${colors.controlLabel}` }),
  clearIndicator: styles => ({ ...styles, color: `${colors.controlLabel}` }),
  multiValue: styles => ({
    ...styles,
    backgroundColor: colors.background,
  }),
  multiValueLabel: styles => ({
    ...styles,
    color: colors.textLead,
    fontWeight: 500,
  }),
  multiValueRemove: styles => ({
    ...styles,
    color: colors.controlLabel,
    ':hover': {
      color: colors.errorText,
      backgroundColor: colors.errorBackground,
    },
  }),
};

const zIndex = {
  zIndex0: 0,
  zIndex1: 1,
  zIndex2: 2,
  zIndex10: 10,
  zIndex100: 100,
  zIndex200: 200,
  zIndex299: 299,
  zIndex300: 300,
  zIndex1000: 1000,
  zIndex10000: 10000,
  zIndex99999: 99999,
};

function GlobalStyles() {
  // load theme
  const theme = localStorage.getItem('theme')
  if (theme !== null)
  {
      // ensure theme matches last setting
      document.documentElement.setAttribute("data-theme", theme);
  }
  return (
    <Global
      styles={css`
        *,
        *:before,
        *:after {
          box-sizing: border-box;
        }

        :focus {
          outline: -webkit-focus-ring-color auto ${lengths.borderRadius};
        }

        /**
       * Don't show outlines if the user is utilizing mouse rather than keyboard.
       */
        [data-whatintent='mouse'] *:focus {
          outline: none;
        }

        input {
          border: 0;
        }

        :root {
          --background-color: --lm-background-color;
          --background-light-accent: --lm-background-light-accent;
          --background-dark-accent: --lm-background-light-accent;
          --background-contrast: --lm-background-contrast;
          --font-color: --lm-font-color;
          --font-light-accent: --lm-font-light-accent;
          --font-dark-accent: --lm-font-dark-accent;
          --font-active: --lm-font-active;
          --header-content: --lm-header-content;
          --button: --lm-button;
          --text-border: --lm-text-border;
          --success-text: --lm-success-text;
          --success-background: --lm-success-background;
          --control-label: --lm-control-label;

          ${rawDarkMode}
          ${rawLightMode}
        }

        @media (prefers-color-scheme: dark) {
          :root {
            --background-color: var(--dm-background-color);
            --background-light-accent: var(--dm-background-light-accent);
            --background-contrast: var(--dm-background-contrast);
            --font-color: var(--dm-font-color);
            --font-light-accent: var(--dm-font-light-accent);
            --font-dark-accent: var(--dm-font-dark-accent);
            --font-active: var(--dm-font-active);
            --header-content: var(--dm-header-content);
            --button: var(--dm-button);
            --text-border: var(--dm-text-border);
            --success-text: var(--dm-success-text);
            --success-background: var(--dm-success-background);
            --control-label: var(--dm-control-label);

            color-scheme: dark;
          }
        }
        
        [data-theme="dark"] {
          --background-color: var(--dm-background-color);
          --background-light-accent: var(--dm-background-light-accent);
          --background-contrast: var(--dm-background-contrast);
          --font-color: var(--dm-font-color);
          --font-light-accent: var(--dm-font-light-accent);
          --font-dark-accent: var(--dm-font-dark-accent);
          --font-active: var(--dm-font-active);
          --font-active-contrast: var(--dm-font-active-contrast);
          --header-content: var(--dm-header-content);
          --active-background: var(--dm-active-background);
          --button: var(--dm-button);
          --text-border: var(--dm-text-border);
          --success-text: var(--dm-success-text);
          --success-background: var(--dm-success-background);
          --control-label: var(--dm-control-label);

          color-scheme: dark;
        }
        [data-theme="light"] {
          --background-color: var(--lm-background-color);
          --background-light-accent: var(--lm-background-light-accent);
          --background-contrast: var(--lm-background-contrast);
          --font-color: var(--lm-font-color);
          --font-light-accent: var(--lm-font-light-accent);
          --font-dark-accent: var(--lm-font-dark-accent);
          --font-active: var(--lm-font-active);
          --header-content: var(--lm-header-content);
          --font-active-contrast: var(--lm-font-active-contrast);
          --active-background: var(--lm-active-background);
          --button: var(--lm-button);
          --text-border: var(--lm-text-border);
          --success-text: var(--lm-success-text);
          --success-background: var(--lm-success-background);
          --control-label: var(--lm-control-label);

          color-scheme: light;
        }

        body {
          font-family: ${fonts.primary};
          font-weight: normal;
          background-color: ${colors.background};
          color: ${colors.text};
          margin: 0;
        }

        ul,
        ol {
          padding-left: 0;
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        p {
          font-family: ${fonts.primary};
          color: ${colors.textLead};
          font-size: 15px;
          line-height: 1.5;
          margin-top: 0;
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          font-weight: 500;
        }

        h1 {
          font-size: 24px;
          letter-spacing: 0.4px;
          color: ${colors.textLead};
        }

        a,
        button {
          font-size: 14px;
          font-weight: 500;
        }

        a {
          color: ${colors.text};
          text-decoration: none;
        }

        button {
          font-family: inherit;
        }

        img {
          max-width: 100%;
        }

        textarea {
          resize: none;
        }
      `}
    />
  );
}

export {
  fonts,
  colorsRaw,
  colors,
  lengths,
  components,
  buttons,
  text,
  shadows,
  borders,
  transitions,
  effects,
  zIndex,
  reactSelectStyles,
  GlobalStyles,
};
