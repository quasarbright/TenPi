import {CreateNote} from "./CreateNote";
import {InMemoryClientProvider} from "./InMemoryClientProvider";

function App() {
    return (
        <div className="App">
            <InMemoryClientProvider>
                <CreateNote/>
            </InMemoryClientProvider>
        </div>
    );
}

export default App;
