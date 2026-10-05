import "@/App.css";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Reassurance } from "@/components/Reassurance";

function App() {
  return (
    <div className="App min-h-screen bg-[#F6FAFC] text-slate-800">
      <Header />
      <main>
        <Hero />
        <Reassurance />
      </main>
    </div>
  );
}

export default App;
