import { useState } from "react";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { FeaturesSection } from "./components/FeaturesSection";
import { CommunitySection } from "./components/CommunitySection";
import { Footer } from "./components/Footer";
import { SimpleAuthLogin } from "./components/SimpleAuthLogin";
import { SimpleAuthSignup } from "./components/SimpleAuthSignup";
import { LanguageProvider } from "./components/LanguageContext";
import { SimpleAuthProvider, useSimpleAuth } from "./components/SimpleAuthContext";
import { motion } from "motion/react";

type Page = "home" | "login" | "signup";

function AppContent() {
  const [currentPage, setCurrentPage] = useState<Page>("home");
  const { signIn, signUp } = useSimpleAuth();

  const handleShowLogin = () => setCurrentPage("login");
  const handleShowSignup = () => setCurrentPage("signup");
  const handleBackToHome = () => setCurrentPage("home");
  const handleSwitchToSignup = () => setCurrentPage("signup");
  const handleSwitchToLogin = () => setCurrentPage("login");

  return (
    <motion.div 
      className="min-h-screen bg-white dark:bg-black overflow-x-hidden transition-colors duration-300"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {currentPage === "home" && (
        <>
          <Header onShowLogin={handleShowLogin} onShowSignup={handleShowSignup} />
          <main>
            <HeroSection />
            <FeaturesSection />
            <CommunitySection />
          </main>
          <Footer />
        </>
      )}
      
      {currentPage === "login" && (
        <SimpleAuthLogin 
          onSwitchToSignup={handleSwitchToSignup}
          onBackToHome={handleBackToHome}
          onSignIn={signIn}
        />
      )}
      
      {currentPage === "signup" && (
        <SimpleAuthSignup 
          onSwitchToLogin={handleSwitchToLogin}
          onBackToHome={handleBackToHome}
          onSignUp={signUp}
        />
      )}
    </motion.div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <SimpleAuthProvider>
        <AppContent />
      </SimpleAuthProvider>
    </LanguageProvider>
  );
}