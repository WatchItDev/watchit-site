import React, { useState } from 'react';
import styled from 'styled-components';

export const CopyButton = (props) => {
    let [copied, setCopied] = useState(false);

    function handleClick() {
        setCopied(true);
        props.copy();

        setTimeout(()=>{
            setCopied(false);
        },800)
    }

    return <ClipboardButton onClick={handleClick}>
        {!copied
            ? <ButtonText copied={copied}>Copy</ButtonText>
            : <ButtonText copied={copied}>Copied</ButtonText>
        }
    </ClipboardButton>;
};

const ClipboardButton = styled.button`
  position: absolute;
  right: 0;
  height: calc(100% - 2rem);
  width: 3.8rem;
  border: 0;
  border-left: 1px solid white;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  box-shadow: none !important;
  outline: none !important;
  cursor: pointer;
`;

const ButtonText = styled.span`
  font-size: 0.9rem;
  font-weight: 600;
  color: ${props => !props.copied ? "#fff" : "#43d35d"};
  font-family: 'Nunito Sans',sans-serif;
  transition: all 1s ease-in-out
`;