import { css, Global } from '@emotion/react';

export const GlobalCss: React.FC = () => {
  return (
    <Global
      styles={css`
        @keyframes rerender {
          0% {
            border-color: #ff0080;
          }

          40% {
            border-color: #ff0080;
          }
        }
      `}
    />
  );
};
