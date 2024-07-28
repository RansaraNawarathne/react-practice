import { CORE_CONCEPTS } from './data.js';
import Header from './components/Header/Header.jsx';
import TapButton from './components/TapButton.jsx';
import CoreConcept from './components/CoreConcept.jsx';

function App() {
  function handleSelect() {
    console.log('Hello World - selected!');
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept 
            title={CORE_CONCEPTS[0].title}
            description={CORE_CONCEPTS[0].description}
            image={CORE_CONCEPTS[0].image}
            />
            <CoreConcept { ...CORE_CONCEPTS[1] } />
            <CoreConcept { ...CORE_CONCEPTS[2] } />
            <CoreConcept { ...CORE_CONCEPTS[3] } />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TapButton onSelect={handleSelect}>Components</TapButton>
            <TapButton onSelect={handleSelect}>JSX</TapButton>
            <TapButton onSelect={handleSelect}>Props</TapButton>
            <TapButton onSelect={handleSelect}>State</TapButton>
          </menu>
        </section>
        Dynamic Content
      </main>
    </div>
  );
}

export default App;
