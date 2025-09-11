const MainContent = ({ title, content }: { title: string; content: string }) => {
  return (
    <article>
      <h2>{title}</h2>
      <p>{content}</p>
    </article>
  );
};

export default MainContent;