import "../../styles/component.css";

const ArticleButton = ({ children, size = 2, action }) => {
   return (
      <button
         onClick={action}
         className={`article-button-${size}__action-component`}
      >
         {children}
      </button>
   );
};

export default ArticleButton;
