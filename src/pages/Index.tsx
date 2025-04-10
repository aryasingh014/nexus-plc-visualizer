
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useAuthContext } from '@/context/AuthContext';

const Index = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuthContext();

  useEffect(() => {
    // Check if the user is already logged in
    if (isAuthenticated) {
      // Redirect to dashboard if already logged in
      navigate('/dashboard');
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 to-blue-700">
      <Card className="w-[450px] shadow-xl text-center">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">Nexus PLC Visualizer</CardTitle>
          <CardDescription className="text-lg">
            Real-time and historical PLC data visualization dashboard
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            Monitor industrial parameters, view historical data, and receive alerts for your Siemens S7-400 PLC.
          </p>
          <div className="flex flex-col space-y-2">
            <Button className="w-full bg-industrial-blue hover:bg-industrial-blue-light" onClick={() => navigate('/login')}>
              Sign in
            </Button>
            <Button className="w-full" variant="outline" onClick={() => navigate('/register')}>
              Create account
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;
