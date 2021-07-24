import { css } from 'styled-components';

export const defaultStyles = css`
  margin: ${(props) => props.m};
  padding: ${(props) => props.p};

  position: ${(props) => props.pos};

  margin-top: ${(props) => props.my || props.mt};
  margin-bottom: ${(props) => props.my || props.mt};
  margin-left: ${(props) => props.mx || props.ml};
  margin-right: ${(props) => props.mx || props.mr};

  padding-top: ${(props) => props.py || props.my};
  padding-bottom: ${(props) => props.py || props.my};
  padding-left: ${(props) => props.px || props.pl};
  padding-right: ${(props) => props.px || props.pr};

  border-radius: ${(props) => props.borderRadius};

  width: ${(props) => props.w};
  max-width: ${(props) => props.maxW};

  height: ${(props) => props.h};
  flex: ${(props) => props.flex};

  color: ${(props) => props.color};
  background-color: ${(props) => props.bgColor};
  overflow: ${(props) => props.overflow};

  z-index: ${(props) => props.zIndex};
  top: ${(props) => props.top};
  left: ${(props) => props.left};
`;

export const textDefaultStyles = css`
  font-weight: ${(props) => props.fontWeight};
  font-size: ${(props) => props.fontSize};

  line-height: ${(props) => props.lineHeight};
`;
