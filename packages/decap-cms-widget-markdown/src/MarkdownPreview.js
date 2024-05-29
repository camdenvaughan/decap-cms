import React from 'react';
import PropTypes from 'prop-types';
import { WidgetPreviewContainer, colors } from 'decap-cms-ui-default';
import DOMPurify from 'dompurify';
import { store } from 'decap-cms-core/src/redux';

import { markdownToHtml } from './serializers';
class MarkdownPreview extends React.Component {
  static propTypes = {
    getAsset: PropTypes.func.isRequired,
    resolveWidget: PropTypes.func.isRequired,
    value: PropTypes.string,
  };

  render() {
    const { value, getAsset, resolveWidget, field, getRemarkPlugins } = this.props;
    if (value === null) {
      return null;
    }
    const checkIsDarkSchemePreferred = () => window?.matchMedia?.('(prefers-color-scheme:dark)')?.matches ?? false;
    let darkMode = checkIsDarkSchemePreferred;
    if (document.documentElement.hasAttribute("preview-theme"))
    {
      darkMode = document.documentElement.getAttribute("preview-theme") === "dark"
    }
    const css = `
    <style>
    body {
      background-color: ${darkMode ? 'var(--dm-background)' : 'var(--lm-background)'};
    }
    </style>`
    const html = markdownToHtml(value, { getAsset, resolveWidget }, getRemarkPlugins?.());
    const toRender = (field?.get('sanitize_preview', false) ? DOMPurify.sanitize(html) : html) + css;
    
    return <WidgetPreviewContainer dangerouslySetInnerHTML={{ __html: toRender }} />;
  }
}

export default MarkdownPreview;
