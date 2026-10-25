import styled from "styled-components";
import { MdDarkMode, MdOutlineLightMode   } from "react-icons/md";

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 5rem;
  padding: 1rem 2rem;

  .Logo{
    height: 4rem;
    fill: ${(props) => props.theme.colors.text};
    cursor:pointer;
  }

  ${(props) => props.theme.media.tablet} {
    padding: 0.75rem 1.5rem;

    .Logo {
      height: 3.5rem;
    }
  }

  ${(props) => props.theme.media.mobile} {
    min-height: 4rem;
    padding: 0.5rem 1rem;

    .Logo {
      height: 2.75rem;
    }
  }
`;

export const LightModeIcon = styled(MdOutlineLightMode)`
 color: ${(props) => props.theme.colors.text};
 font-size:2rem;
 cursor:pointer;
`;

export const DarkModeIcon = styled(MdDarkMode)`
 color:  ${(props) => props.theme.colors.text};
 font-size:2rem;
 cursor:pointer;
`;
