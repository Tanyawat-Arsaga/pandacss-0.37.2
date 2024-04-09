import { styled } from "../styled-system/jsx";

const components = {
  Container: ({ children }: { children: React.ReactNode }) => {
    return (
      <styled.div maxW="80%" mx="auto">
        {children}
      </styled.div>
    );
  },
  List: () => {
    return (
      <styled.ul listStyleType="disc" pl="20px">
        <styled.li>Hi</styled.li>
        <styled.li fontWeight="bold">Hi</styled.li>
        <styled.li>Hi</styled.li>
      </styled.ul>
    );
  },
  Header: () => {
    return (
      <styled.h1 fontWeight="bold" fontSize="2rem">
        Hello World
      </styled.h1>
    );
  },
};

export const List = components.List;
export const Header = components.Header;
