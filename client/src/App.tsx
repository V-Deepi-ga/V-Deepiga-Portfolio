// Simplified version for debugging
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-gray-50 text-gray-800 font-sans dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300 p-6">
        <h1 className="text-3xl font-bold">Portfolio Site</h1>
        <p className="mt-4">This is the simplified version for debugging.</p>
      </div>
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
