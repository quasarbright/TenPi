import {CreateNote} from "./CreateNote";
import {Route, Routes} from "react-router-dom";
import {ViewNotePage} from "./ViewNote";

function App() {
    return (
        <Routes>
            <Route path={"/"} element={<CreateNote/>}/>
            <Route path={":id"} element={<ViewNotePage/>}/>
        </Routes>
    );
}

export default App;
