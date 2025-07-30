import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';

export default function Toolbar({root,buttonRef}) {
  const [editor] = useLexicalComposerContext();
  const clearEditor = () => {
    editor.update(() => {
      const $getRoot=root()
      $getRoot.clear(); // 👈 clears all text
    });
  };

  return (
    <div className="toolbar hidden">
      <button ref={buttonRef} onClick={clearEditor}>🧹 Clear</button>
    </div>
  );
}
