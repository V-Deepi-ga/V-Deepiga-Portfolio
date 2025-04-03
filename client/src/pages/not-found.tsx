import { useEffect } from "react";
import { useLocation } from "wouter";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { AlertCircle, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  const [, setLocation] = useLocation();

  // If this is on GitHub Pages, redirect to home after 3 seconds
  useEffect(() => {
    if (window.location.hostname.includes('github.io')) {
      const timer = setTimeout(() => {
        setLocation('/');
      }, 3000);
      
      return () => clearTimeout(timer);
    }
  }, [setLocation]);
  
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <Card className="w-full max-w-md mx-4 shadow-lg dark:bg-gray-800 dark:border-gray-700">
        <CardContent className="pt-6">
          <div className="flex flex-col items-center mb-4 text-center">
            <AlertCircle className="h-16 w-16 text-red-500 mb-4" />
            <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">404 Page Not Found</h1>
          </div>

          <p className="mt-4 text-gray-600 dark:text-gray-300 text-center">
            The page you're looking for doesn't exist or has been moved.
          </p>
          
          {window.location.hostname.includes('github.io') && (
            <p className="mt-2 text-gray-500 dark:text-gray-400 text-sm text-center">
              Redirecting to homepage in a few seconds...
            </p>
          )}
        </CardContent>
        <CardFooter className="flex justify-center pb-6">
          <Button 
            onClick={() => setLocation('/')}
            className="mt-4 flex items-center gap-2"
          >
            <Home size={16} />
            Back to Home
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
