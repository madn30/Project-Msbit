import { PhoneBookProvider } from "./context/phoneBook";
import { createRouting } from "./routes";

function App() {
  return (
    <main>
      <PhoneBookProvider>{createRouting()}</PhoneBookProvider>
    </main>
  );
}

export default App;
