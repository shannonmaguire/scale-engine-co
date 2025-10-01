import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import cwtLogoWhite from '@/assets/cwt-logo-white.svg';
import { ArrowLeft } from 'lucide-react';

const Auth = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!email || !password) {
      toast({
        title: 'Error',
        description: 'Please fill in all fields',
        variant: 'destructive',
      });
      return;
    }

    if (password.length < 8) {
      toast({
        title: 'Error',
        description: 'Password must be at least 8 characters',
        variant: 'destructive',
      });
      return;
    }

    setIsLoading(true);

    // Simulate authentication
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: isSignUp ? 'Account created' : 'Welcome back',
        description: isSignUp ? 'Your account has been created successfully' : 'You have been signed in',
      });
      navigate('/');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4 py-8">
      {/* Background gradient */}
      <div className="fixed inset-0 bg-gradient-to-br from-background via-background to-card/20 -z-10" />

      {/* Back to home button */}
      <button
        onClick={() => navigate('/')}
        className="fixed top-6 left-6 md:top-8 md:left-8 font-sans text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded p-2 flex items-center gap-2"
        aria-label="Back to home"
      >
        <ArrowLeft className="h-4 w-4" />
        <span className="hidden sm:inline">Home</span>
      </button>

      {/* Auth container */}
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="flex justify-center mb-8 md:mb-12">
          <img 
            src={cwtLogoWhite} 
            alt="CWT Studio"
            className="h-8 md:h-9 w-auto"
            style={{ filter: 'drop-shadow(0 2px 16px rgba(104, 16, 56, 0.1))' }}
          />
        </div>

        {/* Auth card */}
        <div className="bg-card border border-border rounded-lg p-6 md:p-8 shadow-sm">
          <div className="mb-6">
            <h1 className="font-mono text-xl md:text-2xl font-bold text-foreground mb-2">
              {isSignUp ? 'Create Account' : 'Sign In'}
            </h1>
            <p className="font-sans text-sm text-muted-foreground">
              {isSignUp 
                ? 'Enter your details to create your account' 
                : 'Enter your credentials to access your account'
              }
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email field */}
            <div className="space-y-2">
              <Label 
                htmlFor="email" 
                className="font-mono text-sm font-medium text-foreground uppercase tracking-wide"
              >
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isLoading}
                required
                className="h-11 font-sans"
                autoComplete="email"
              />
            </div>

            {/* Password field */}
            <div className="space-y-2">
              <Label 
                htmlFor="password" 
                className="font-mono text-sm font-medium text-foreground uppercase tracking-wide"
              >
                Password
              </Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={isLoading}
                required
                minLength={8}
                className="h-11 font-sans"
                autoComplete={isSignUp ? 'new-password' : 'current-password'}
              />
              {isSignUp && (
                <p className="text-xs text-muted-foreground font-sans mt-1">
                  Minimum 8 characters
                </p>
              )}
            </div>

            {/* Submit button */}
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full h-11 font-mono font-bold uppercase tracking-wider"
            >
              {isLoading ? (
                <span className="flex items-center gap-2">
                  <span className="h-4 w-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                  Processing
                </span>
              ) : (
                isSignUp ? 'Create Account' : 'Sign In'
              )}
            </Button>

            {/* Toggle sign up/sign in */}
            <div className="text-center pt-2">
              <button
                type="button"
                onClick={() => setIsSignUp(!isSignUp)}
                className="font-sans text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 focus:outline-none focus:underline"
              >
                {isSignUp 
                  ? 'Already have an account? Sign in' 
                  : "Don't have an account? Sign up"
                }
              </button>
            </div>
          </form>

          {/* Forgot password */}
          {!isSignUp && (
            <div className="mt-4 text-center">
              <button
                type="button"
                onClick={() => {
                  toast({
                    title: 'Password Reset',
                    description: 'Password reset functionality coming soon',
                  });
                }}
                className="font-sans text-xs text-muted-foreground hover:text-foreground transition-colors duration-200 focus:outline-none focus:underline"
              >
                Forgot password?
              </button>
            </div>
          )}
        </div>

        {/* Footer text */}
        <p className="text-center mt-6 font-mono text-xs text-muted-foreground uppercase tracking-wider">
          Revenue Infrastructure Platform
        </p>
      </div>
    </div>
  );
};

export default Auth;
