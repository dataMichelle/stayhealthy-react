import { create } from "zustand";
import { auth, provider, signInWithPopup, signOut } from "../lib/firebase"; // Import Firebase auth methods
import { onAuthStateChanged } from "firebase/auth"; // Firebase Auth state listener

export const useAuthStore = create((set) => ({
  user: null,
  
  // Method to handle Google SignIn
  login: async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      set({ user }); // Store the authenticated user in Zustand
    } catch (error) {
      console.error("Login error:", error.message);
    }
  },

  // Method to handle sign-out
  logout: async () => {
    try {
      await signOut(auth);
      set({ user: null }); // Clear the user from Zustand
    } catch (error) {
      console.error("Logout error:", error.message);
    }
  },

  // Sync the user with Firebase Auth on app load
  syncUser: (user) => set({ user }),

  // Listen for auth state changes (e.g., user logged in or out)
  initAuthState: () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        set({ user }); // Set the user if logged in
      } else {
        set({ user: null }); // Clear user on logout
      }
    });
  },
}));

// Initialize auth state listener when the app loads
if (typeof window !== "undefined") {
  useAuthStore.getState().initAuthState();
}
