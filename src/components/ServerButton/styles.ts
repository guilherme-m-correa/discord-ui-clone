import styled from 'styled-components';

import { Props } from './index';

export const Button = styled.div<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  width: 48px;
  height: 48px;
  border-radius: 50%;

  margin-bottom: 8px;

  background-color: ${props => 
    props.isHome ? 'var(--rocketseat)' :  'var(--primary)'};

  position: relative;
  cursor: pointer;

  > img {
    width: 24px;
    height: 24px;
  }

  &::before {
    content: '';
    position: absolute;
    left: -17px;
    top: calc(50% - 4.5px);
    width: 9px;
    height: 9px;
    background-color: var(--white);
    border-radius: 50%;
    display: ${props => props.hasNotifications ? 'inline' : 'none'}
  }

  &::after {
    content: '${props => props.mentions && props.mentions}';
    position: absolute;
    bottom: -4px;
    right: -4px;
    padding: 0 4px;
    width: auto;
    height: 16px;
    background-color: var(--notification);
    border: 4px solid var(--quaternary);
    border-radius: 12px;
    text-align: right;
    font-size: 13px;
    font-weight: bold;
    color: var(--white);
    display: ${props => props.mentions && props.mentions > 0 ? 'inline' : 'none'}
  }

  transition: border-radius 0.2s, background-color 0.2s;

  &.active, 
  &:hover {
    border-radius: 16px;
    background-color: ${props => props.isHome ? 'var(--rocketseat)': 'var(--discord)'}
  }
`;
