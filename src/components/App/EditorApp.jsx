import React, { useRef, useState } from 'react';
import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import { OnChangePlugin } from '@lexical/react/LexicalOnChangePlugin';
import { $getRoot, $getSelection } from 'lexical';
import './editor.css';
import { AppDesign } from './AppDesign';
import { PenLineIcon, SaveIcon } from 'lucide-react';
import { AppFooter } from '../general/AppFooter';
import Toolbar from './Toolbar';
import { useTranslation } from 'react-i18next';
import { firstCapitalize } from '../../lib/firstCapitalize';


const theme = {
  paragraph: 'editor-paragraph',
  text: {
    bold: 'editor-text-bold',
    italic: 'editor-text-italic',
    underline: 'editor-text-underline',
    strikethrough: 'editor-text-strikethrough',
    code: 'editor-text-code',
  },
  list: {
    nested: {
      listitem: 'editor-nested-listitem',
    },
    ol: 'editor-list-ol',
    ul: 'editor-list-ul',
    listitem: 'editor-listitem',
  },
  quote: 'editor-quote',
  heading: {
    h1: 'editor-heading-h1',
    h2: 'editor-heading-h2',
    h3: 'editor-heading-h3',
  },
  link: 'editor-link',
  code: 'editor-code',
};

const editorConfig = {
  theme,
  onError(error) {
    console.error(error);
  },
};

export default function EditorApp({ style, setVisibilityControl, visibilityControl }) {
  const date= new Date();
  const {t}=useTranslation();
  
  const defaultName=`${firstCapitalize(t('note'))}_${date.getDate()}_${date.getMonth()+1}_${date.getFullYear()}_${date.getHours()}:${date.getMinutes()}`;
  const [mobileMusicMenuIsOpen, setMobileMusicMenuIsOpen] = useState(false);
  const [text,setText]=useState('');
  const [filename,setFilename]=useState(defaultName);
  const buttonRef=useRef(null);

    
  const onChange = (editorState) => {
    editorState.read(() => {
      const root = $getRoot();
      setText(root.getTextContent());
    });
  };

  return (
    <>
      <AppDesign
        setMobileMusicMenuIsOpen={setMobileMusicMenuIsOpen}
        style={style}
        closeHandler={() =>{ 
           
          if(text.length>0){

            const confirmed = confirm(`${firstCapitalize(t('loseAlert'))} \n ${firstCapitalize(t('sureQuestion'))}`);

            if (confirmed){
              buttonRef.current.click();
              setFilename(defaultName); setText(''); setVisibilityControl({ ...visibilityControl, editor: false });
            } 
            }else{
              setFilename(defaultName); setText(''); setVisibilityControl({ ...visibilityControl, editor: false })
            }}
           }

        minimizeHandler={() => setVisibilityControl({ ...visibilityControl, editor: false })}
      >
        
        {
          text.length>0 &&
          (
            <button
            onClick={()=>{ 
                const blob = new Blob([text],{type:'text/plain'});
                const link = document.createElement('a');
                link.href=URL.createObjectURL(blob);
                link.download=`${filename}.txt`;
                link.click();
            }}
            style={{background:'transparent'}}
            className="smooth block  absolute text-red-500 
            text-2xl bg-white p-1 rounded shadow  left-[5px]
           top-[5px] transition-all duration-200 hover:bg-green-100">
            <SaveIcon className="w-10 h-10 text-white"/>
            </button>

          )
        }
                <div className="mt-20 text-black">

          {text.length>0 &&
          (
            <input type="text" onChange={(element)=>{
              setFilename(element.target.value);
            }} defaultValue={filename} style={{background:'transparent'}}
            className='
            smooth
            mb-2 flex
          block  absolute text-white 
          h-[25px] w-[40%] md:w-80
            text-2xl bg-white p-1 rounded shadow  left-20
           top-6 transition-all duration-200 hover:bg-green-100  rounded bg-white' placeholder='Note title'/>
          )
          }          
            
          
          <LexicalComposer initialConfig={editorConfig}>
            <Toolbar buttonRef={buttonRef} root={$getRoot}/>
            <div className="editor-container">
              <RichTextPlugin
                contentEditable={<ContentEditable className="editor-input" />}
                placeholder={<div className="editor-placeholder mt-[-7.5rem]">{firstCapitalize(t('writeHere'))}</div>}
              />
              <HistoryPlugin />
              <OnChangePlugin onChange={onChange} />
            </div>
          </LexicalComposer>
        </div>
        <AppFooter icon={<PenLineIcon className="w-7 h-7 text-white"/>} style={'absolute bottom-5 left-5 text-white'}/>
      </AppDesign>
    </>
  );
}
