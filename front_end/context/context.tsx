'use client'
import {useState, useContext, createContext} from 'react';

// Define the interface for the form data
interface FormData {
    name: string;
    email: string;
    password: string;
    confirmPassword?: string;
    phone_num?: any;
    subscription_type?: string;
    
    
  }
  
  // Define the interface for form errors
  interface FormErrors {
    name?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
    phone_num?: string;
    code?: string;
  }

  // Define the interface for the form data
interface FormContextProps {
    formData: FormData;
    setFormData: React.Dispatch<React.SetStateAction<FormData>>;
    errors: FormErrors;
    setErrors: React.Dispatch<React.SetStateAction<FormErrors>>;
    formSubmitted: boolean;
    setFormSubmitted: React.Dispatch<React.SetStateAction<boolean>>;
    isLoading: boolean;
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
    digits: string;
    setDigits: React.Dispatch<React.SetStateAction<string>>;
    //   inputRefs: React.MutableRefObject<(HTMLInputElement | null)[]>;
  }

  // Create the context
const FormContext = createContext<FormContextProps | undefined>(undefined);

// Custom hook to consume the context
export function useFormContext() {
    const context = useContext(FormContext);
    if (!context) {
      throw new Error("useFormContext must be used within a FormProvider");
    }
    return context;
  }
  
  // Provider component to wrap your application and manage the context
  export function FormProvider({ children }: { children: React.ReactNode }) {
    const [formData, setFormData] = useState<FormData>({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      phone_num: "",
    });
    const [errors, setErrors] = useState<FormErrors>({});
    const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [digits, setDigits] = useState<string>("");
    //   const [digits, setDigits] = useState<string[]>(["", "", "", "", ""]);
    //   const inputRefs = useRef<(HTMLInputElement | null)[]>(Array(5).fill(null));
  
    // Value to be provided by the context
    const contextValue: FormContextProps = {
      formData,
      setFormData,
      errors,
      setErrors,
      formSubmitted,
      setFormSubmitted,
      isLoading,
      setIsLoading,
      digits,
      setDigits,
      // inputRefs,
    };
  
    // Provide the context value to the children
    return (
      <FormContext.Provider value={contextValue}>{children}</FormContext.Provider>
    );
  }