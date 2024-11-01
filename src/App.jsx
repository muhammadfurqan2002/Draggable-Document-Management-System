import Background from "./component/Background";
import ForeGorund from "./component/ForeGorund";

export default function App() {
  return (
    <div className="w-full h-screen bg-zinc-800 relative">
      <Background />
      <ForeGorund/>
     </div>
  );
}
