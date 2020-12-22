import { styled } from 'goober';
import { FC, memo } from 'react';

import { useStoreFocusListeners } from 'services/store/utils';
import { screen } from 'services/utils';

type LinkProps = React.ComponentPropsWithoutRef<'a'> & {
  bare?: boolean;
  newTab?: boolean;
};

const A = styled<LinkProps>('a')`
  color: inherit;
  cursor: pointer;
  transition: opacity 250ms;
  text-decoration: ${({ bare }) => (bare ? 'none' : 'underline')};

  &:hover {
    text-decoration: underline dotted;
    opacity: ${({ bare }) => (bare ? 0.8 : 1)};
  }

  &:focus {
    outline: none;
  }

  &:focus-visible {
    outline: 1px solid blue;
  }

  ${screen.mobile} {
    font-size: 15px;
  }
`;

const Link: FC<LinkProps> = memo(
  ({ bare = false, newTab = false, children, ...rest }) => {
    const focusListeners = useStoreFocusListeners();

    return (
      <A
        bare={bare}
        {...(newTab ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        {...focusListeners}
        {...rest}
      >
        {children as any}
      </A>
    );
  }
);

export { Link };
