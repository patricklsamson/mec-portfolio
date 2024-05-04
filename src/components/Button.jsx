import { createGlobalStyle } from "styled-components";

const ButtonStyle = createGlobalStyle`
    a.link-text{
      transition: transform 300ms ease;
      .cloned{
        transform: translateY(100%);
        transition: transform 300ms ease;
      }
      .original{
        transition: transform 300ms ease;
      }

      &:hover{
        .original{
          transform: translateY(-100%);
        }
        .cloned{
          transform: translateY(0%);
        }
      }
      
      
    }
`;
export const Button = ({ className, url, text, isNewTab }) => {
  return (
    <>
      <ButtonStyle />
      <a
        className={`${className} link-text h3 relative overflow-hidden padding-xsmall`}
        href={url}
        target={isNewTab ? "_blank" : "_self"}
      >
        <stroke>
          <div className="original relative">{text}</div>
          <div className="cloned absolute position-full">{text}</div>
        </stroke>
      </a>
    </>
  );
};
