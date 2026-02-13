import React from 'react';
import { Home } from 'lucide-react';
import BottomNav from './components/BottomNav';

export default function App() {
  return (
    <div>
      <h1>Voxora Emergency System</h1>
      <p>आपकी सुरक्षा, हमारी प्राथमिकता</p>
      <button>बोलने के लिए टैप करें</button>
      <p>"Voxora, help"</p>
      <h2>त्वरित कार्रवाई</h2>
      <ul>
        <li>पुलिस को कॉल करें</li>
        <li>एम्बुलेंस को कॉल करें</li>
        <li>स्थान भेजें</li>
        <li>रिकॉर्डिंग शुरू करें</li>
      </ul>
      <BottomNav activeTab="home" />
    </div>
  );
}
