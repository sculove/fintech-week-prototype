import './scss/npay_global.scss'
import './App.scss';
import Home from './components/Home';
import { Routes, Route, Outlet} from "react-router-dom";
import Step1Page from './components/Step1Page';
import Step1Success from './components/Step1Success';
import Step2Page from './components/Step2Page';
import Step2Success from './components/Step2Success';
import Step3Page from './components/Step3Page';
import Step4Page from './components/Step4Page';
import StepComplete from './components/StepComplete';

function Layout() {
  return <Outlet />
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}/>
        <Route path="step1" element={<Step1Page />}/>
        <Route path="step1success" element={<Step1Success />}/>
        <Route path="step2" element={<Step2Page />}/>
        <Route path="step2success" element={<Step2Success />}/>
        <Route path="step3" element={<Step3Page />}/>
        <Route path="step4" element={<Step4Page />}/>
        <Route path="stepcomplete" element={<StepComplete />}/>
      </Route>
    </Routes>
  );
}

export default App;
