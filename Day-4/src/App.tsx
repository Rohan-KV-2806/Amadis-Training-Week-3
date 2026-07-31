import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

function App() {
  return (
    <div className="flex h-screen items-center justify-center gap-4">
      <Input placeholder="Enter your name" />
      <Button>Hello Shadcn</Button>
    </div>
  );
}

export default App;