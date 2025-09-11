import Header from '../components/Header';
import MainContent from '../components/MainContent';

export default function Home() {
  return (
    <main>
      <Header />
      <MainContent
        title="First Section"
        content="This is the first content block."
      />
      <MainContent
        title="Second Section"
        content="This is the second content block with props."
      />
    </main>
  );
}