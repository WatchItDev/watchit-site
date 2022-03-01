import React, { useState } from 'react';
import { Translation } from '@src/i18n'
import {
    styled
  } from '@mui/material'


interface CopyButtonProps {
    copy:() => void,
}

export const CopyButton = ({copy}:CopyButtonProps) => {
    let [copied, setCopied] = useState(false);

    function handleClick() {
        setCopied(true);
        copy();

        setTimeout(()=>{
            setCopied(false);
        },800)
    }

    return <ClipboardButton onClick={handleClick}>
        {!copied
            ? <ButtonText copied={copied}><Translation target='GLOBAL_COPY'/></ButtonText>
            : <ButtonText copied={copied}><Translation target='GLOBAL_COPYED'/></ButtonText>
        }
    </ClipboardButton>;
};

const ClipboardButton = styled('button')({
    position: 'absolute',
    right: '0',
    height: 'calc(100% - 2rem)',
    width: '3.8rem',
    border: '0',
    borderLeft: '1px solid white',
    backgroundColor: 'transparent',
    display: 'flex;',
    flexDirection: 'column',
    flexGrow: '1',
    flexShrink: '0',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: 'none !important',
    outline: 'none !important',
    cursor: 'pointer'
  })
  

const ButtonText = styled('span')<{copied?:boolean}>(({copied})=>({
  fontSize: '0.9rem',
  fontWeight: '600',
  color: `${!copied ? "#fff" : "#43d35d"}`,
  fontFamily:` 'Oswald', 'Nunito Sans',sans-serif`,
  transition: 'all 1s ease-in-out'
}))