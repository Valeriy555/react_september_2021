import {Cars, Form} from "./components";
import {Route} from "react-router-dom";

const App = () => {

    return (
        <div>
            <Form />
            <Cars />

            <Route/>
            <Route/>
            <Route/>
        </div>
    );
};

export default App;
