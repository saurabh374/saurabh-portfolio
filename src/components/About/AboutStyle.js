import styled from '@emotion/styled';
import _default from '../../themes/default';


export const SocialMediaIcons = styled.div`
  display: flex;
  margin-top: 1rem;
`;

export const SocialMediaIcon = styled.a`
  display: inline-block;
  margin: 0 1rem;
  font-size: 1.5rem;
  color: ${(props) => props.theme.text_primary};
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${(props) => props.theme.primary};
  }
`;