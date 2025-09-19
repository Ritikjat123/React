import Data from "./components/Data.js"
import User from "./components/User.jsx";
import {Customer} from "./components/Customer.jsx"
function App() {
  return (
    <div>This is a App
      {/* when there is no content or childeren inside Data 
              component that time we can use self closing Syntex like below-:
     */}
      <Data />
      {/* when there is  content or childeren inside Data 
              component that time we can use  tag Syntex like below-:
     */}
      <Data></Data>
      <User />
      <Customer/>
    </div>
  );
}

export default App;
