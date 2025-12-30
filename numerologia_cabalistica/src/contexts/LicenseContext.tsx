import { collection, getDocs, query, where } from 'firebase/firestore';
import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { db } from '../services/firebase';

interface LicenseContextType {
  isVerified: boolean;
  isLoading: boolean;
  licenseData: { email: string; key: string } | null;
  validateLicense: (email: string, key: string) => Promise<{ success: boolean; message: string }>;
  logout: () => void;
}

const LicenseContext = createContext<LicenseContextType | undefined>(undefined);

export const LicenseProvider = ({ children }: { children: ReactNode }) => {
  const [isVerified, setIsVerified] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [licenseData, setLicenseData] = useState<{ email: string; key: string } | null>(null);

  useEffect(() => {
    // Check local storage on load
    const savedLicense = localStorage.getItem('numeris_license');
    if (savedLicense) {
      try {
        const data = JSON.parse(savedLicense);
        if (data.status === 'valid') {
            setIsVerified(true);
            setLicenseData({ email: data.email, key: data.key });
        }
      } catch (e) {
        // Legacy support or corrupt data
        if (savedLicense === 'valid') {
           setIsVerified(true);
        }
      }
    }
    setIsLoading(false);
  }, []);

  const validateLicense = async (email: string, key: string): Promise<{ success: boolean; message: string }> => {
    try {
      setIsLoading(true);
      const licensesRef = collection(db, "licencas");
      const q = query(
        licensesRef, 
        where("email", "==", email),
        where("chave", "==", key),
        where("status", "==", "ativo")
      );

      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        // Success
        const dataToSave = { status: 'valid', email, key };
        localStorage.setItem('numeris_license', JSON.stringify(dataToSave));
        setIsVerified(true);
        setLicenseData({ email, key });
        setIsLoading(false);
        return { success: true, message: "Licença validada com sucesso!" };
      } else {
        // Fail
        setIsLoading(false);
        return { success: false, message: "Email ou chave inválidos. Verifique seus dados." };
      }
    } catch (error) {
      console.error("Erro ao validar licença:", error);
      setIsLoading(false);
      return { success: false, message: "Erro de conexão. Tente novamente." };
    }
  };

  const logout = () => {
    localStorage.removeItem('numeris_license');
    setIsVerified(false);
    setLicenseData(null);
  };

  return (
    <LicenseContext.Provider value={{ isVerified, isLoading, licenseData, validateLicense, logout }}>
      {children}
    </LicenseContext.Provider>
  );
};

export const useLicense = () => {
  const context = useContext(LicenseContext);
  if (context === undefined) {
    throw new Error('useLicense must be used within a LicenseProvider');
  }
  return context;
};
