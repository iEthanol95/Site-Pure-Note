import { createContext, useContext, useState, ReactNode, useEffect } from "react";

type Language = "fr" | "en";
type Theme = "light" | "dark";

interface Translation {
  // Header
  features: string;
  pricing: string;
  about: string;
  login: string;
  signup: string;
  
  // Hero Section
  heroTitle: string;
  heroSubtitle: string;
  heroDescription: string;
  startFree: string;
  watchDemo: string;
  cleanInterface: string;
  realtimeSync: string;
  secureSharing: string;
  writingInProgress: string;
  synchronized: string;
  
  // Features Section
  featuresTitle: string;
  featuresSubtitle: string;
  powerfulEditor: string;
  powerfulEditorDesc: string;
  totalSecurity: string;
  totalSecurityDesc: string;
  smartSharing: string;
  smartSharingDesc: string;
  synchronization: string;
  synchronizationDesc: string;
  advancedSearch: string;
  advancedSearchDesc: string;
  fullHistory: string;
  fullHistoryDesc: string;
  
  // Community Section
  communityTitle: string;
  newPlatform: string;
  innovative: string;
  secure: string;
  securePrivate: string;
  support: string;
  dedicatedSupport: string;
  communityDescription: string;
  authenticReviews: string;
  gdprCompliant: string;
  sslEncryption: string;
  euHosting: string;
  
  // Footer
  footerDescription: string;
  product: string;
  changelog: string;
  roadmap: string;
  supportSection: string;
  documentation: string;
  userGuide: string;
  contact: string;
  status: string;
  legal: string;
  privacy: string;
  terms: string;
  rgpd: string;
  cookies: string;
  allRightsReserved: string;
  respectPrivacy: string;
  cookieMessage: string;
  
  // File name
  newNoteFilename: string;
  
  // Auth
  loginTitle: string;
  signupTitle: string;
  name: string;
  email: string;
  password: string;
  signin: string;
  signup: string;
  noAccount: string;
  hasAccount: string;
  signingIn: string;
  signingUp: string;
  successMessage: string;
  rememberMe: string;
  back: string;
}

const translations: Record<Language, Translation> = {
  fr: {
    // Header
    features: "Fonctionnalités",
    pricing: "Tarifs",
    about: "À propos",
    login: "Se connecter",
    signup: "S'inscrire",
    
    // Hero Section
    heroTitle: "L'écriture pure,",
    heroSubtitle: "sans distraction",
    heroDescription: "Créez, organisez et partagez vos notes avec l'éditeur le plus intuitif du web. Expérience minimaliste, fonctionnalités puissantes.",
    startFree: "➤ Commencer gratuitement",
    watchDemo: "Voir en action",
    cleanInterface: "Interface épurée",
    realtimeSync: "Synchronisation temps réel",
    secureSharing: "Partage sécurisé",
    writingInProgress: "Écriture en cours...",
    synchronized: "Synchronisé",
    
    // Features Section
    featuresTitle: "Tout ce dont vous avez besoin pour écrire",
    featuresSubtitle: "Des outils puissants dans une interface épurée",
    powerfulEditor: "Éditeur puissant",
    powerfulEditorDesc: "Éditeur de texte riche avec formatage avancé, raccourcis clavier et aperçu en temps réel.",
    totalSecurity: "Sécurité totale",
    totalSecurityDesc: "Chiffrement de bout en bout, authentification sécurisée et conformité RGPD garantie.",
    smartSharing: "Partage intelligent",
    smartSharingDesc: "Partagez vos notes avec des liens sécurisés, contrôlez les permissions et collaborez facilement.",
    synchronization: "Synchronisation",
    synchronizationDesc: "Vos notes synchronisées automatiquement sur tous vos appareils avec sauvegarde cloud.",
    advancedSearch: "Recherche avancée",
    advancedSearchDesc: "Trouvez instantanément vos notes avec notre moteur de recherche intelligent et par tags.",
    fullHistory: "Historique complet",
    fullHistoryDesc: "Suivez toutes les modifications avec l'historique des versions et restaurez facilement.",
    
    // Community Section
    communityTitle: "Rejoignez notre communauté grandissante",
    newPlatform: "Nouveau",
    innovative: "Plateforme innovante",
    secure: "100%",
    securePrivate: "Sécurisé et privé",
    support: "24/7",
    dedicatedSupport: "Support dédié",
    communityDescription: "Soyez parmi les premiers à découvrir Pure Note et partagez votre expérience !",
    authenticReviews: "⭐ Bientôt des avis authentiques",
    gdprCompliant: "RGPD conforme",
    sslEncryption: "Chiffrement SSL",
    euHosting: "Hébergement EU",
    
    // Footer
    footerDescription: "L'éditeur de notes le plus intuitif pour une écriture sans distraction.",
    product: "Produit",
    changelog: "Changelog",
    roadmap: "Roadmap",
    supportSection: "Support",
    documentation: "Documentation",
    userGuide: "Guide d'utilisation",
    contact: "Contact",
    status: "Statut",
    legal: "Légal",
    privacy: "Confidentialité",
    terms: "Conditions",
    rgpd: "RGPD",
    cookies: "Cookies",
    allRightsReserved: "© 2024 Pure Note. Tous droits réservés.",
    respectPrivacy: "Nous respectons votre vie privée",
    cookieMessage: "Nous utilisons des cookies pour améliorer votre expérience. Vous pouvez personnaliser vos préférences ci-dessous.",
    
    // File name
    newNoteFilename: "Ma nouvelle note.md",
    
    // Auth
    loginTitle: "Connectez-vous à votre compte",
    signupTitle: "Créez votre compte",
    name: "Pseudo",
    email: "Adresse e-mail",
    password: "Mot de passe",
    signin: "Se connecter",
    signup: "Créer le compte",
    noAccount: "Vous n'avez pas de compte ?",
    hasAccount: "Vous avez déjà un compte ?",
    signingIn: "Connexion en cours...",
    signingUp: "Création en cours...",
    successMessage: "Compte créé avec succès ! Vous pouvez maintenant vous connecter.",
    rememberMe: "Se souvenir de moi",
    back: "Retour"
  },
  en: {
    // Header
    features: "Features",
    pricing: "Pricing",
    about: "About",
    login: "Sign in",
    signup: "Sign up",
    
    // Hero Section
    heroTitle: "Pure writing,",
    heroSubtitle: "distraction-free",
    heroDescription: "Create, organize and share your notes with the most intuitive editor on the web. Minimalist experience, powerful features.",
    startFree: "➤ Start for free",
    watchDemo: "Watch demo",
    cleanInterface: "Clean interface",
    realtimeSync: "Real-time sync",
    secureSharing: "Secure sharing",
    writingInProgress: "Writing in progress...",
    synchronized: "Synchronized",
    
    // Features Section
    featuresTitle: "Everything you need to write",
    featuresSubtitle: "Powerful tools in a clean interface",
    powerfulEditor: "Powerful editor",
    powerfulEditorDesc: "Rich text editor with advanced formatting, keyboard shortcuts and real-time preview.",
    totalSecurity: "Total security",
    totalSecurityDesc: "End-to-end encryption, secure authentication and guaranteed GDPR compliance.",
    smartSharing: "Smart sharing",
    smartSharingDesc: "Share your notes with secure links, control permissions and collaborate easily.",
    synchronization: "Synchronization",
    synchronizationDesc: "Your notes automatically synchronized across all your devices with cloud backup.",
    advancedSearch: "Advanced search",
    advancedSearchDesc: "Find your notes instantly with our smart search engine and tags.",
    fullHistory: "Full history",
    fullHistoryDesc: "Track all changes with version history and restore easily.",
    
    // Community Section
    communityTitle: "Join our growing community",
    newPlatform: "New",
    innovative: "Innovative platform",
    secure: "100%",
    securePrivate: "Secure and private",
    support: "24/7",
    dedicatedSupport: "Dedicated support",
    communityDescription: "Be among the first to discover Pure Note and share your experience!",
    authenticReviews: "⭐ Authentic reviews coming soon",
    gdprCompliant: "GDPR compliant",
    sslEncryption: "SSL encryption",
    euHosting: "EU hosting",
    
    // Footer
    footerDescription: "The most intuitive note editor for distraction-free writing.",
    product: "Product",
    changelog: "Changelog",
    roadmap: "Roadmap",
    supportSection: "Support",
    documentation: "Documentation",
    userGuide: "User guide",
    contact: "Contact",
    status: "Status",
    legal: "Legal",
    privacy: "Privacy",
    terms: "Terms",
    rgpd: "GDPR",
    cookies: "Cookies",
    allRightsReserved: "© 2024 Pure Note. All rights reserved.",
    respectPrivacy: "We respect your privacy",
    cookieMessage: "We use cookies to improve your experience. You can customize your preferences below.",
    
    // File name
    newNoteFilename: "My new note.md",
    
    // Auth
    loginTitle: "Sign in to your account",
    signupTitle: "Create your account",
    name: "Username",
    email: "Email address",
    password: "Password",
    signin: "Sign in",
    signup: "Create account",
    noAccount: "Don't have an account?",
    hasAccount: "Already have an account?",
    signingIn: "Signing in...",
    signingUp: "Creating account...",
    successMessage: "Account created successfully! You can now sign in.",
    rememberMe: "Remember me",
    back: "Back"
  }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
  t: Translation;
  scrollToTop: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("fr");
  const [theme, setTheme] = useState<Theme>("light");
  
  const t = translations[language];
  
  // Apply theme to document
  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme]);
  
  const toggleTheme = () => {
    setTheme(prev => prev === "light" ? "dark" : "light");
  };
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  return (
    <LanguageContext.Provider value={{ language, setLanguage, theme, setTheme, toggleTheme, t, scrollToTop }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}