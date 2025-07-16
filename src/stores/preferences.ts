import { create } from "zustand";
import { persist } from "zustand/middleware";

type State = {
  autoplay: boolean;
  expandedModule?: string | undefined;
  modulesListCollapsed: boolean;
};

type Actions = {
  setAutoplay: (autoplay: boolean) => void;
  setExpandedModule: (expandedModule: string | undefined) => void;
  setModulesListCollapsed: (modulesListCollapsed: boolean) => void;
};

type Store = State & Actions;

export const usePreferencesStore = create<Store>()(
  persist(
    (set) => ({
      autoplay: false,
      expandedModule: undefined,
      modulesListCollapsed: false,
      setAutoplay: (autoplay: boolean) => set({ autoplay }),
      setExpandedModule: (expandedModule: string | undefined) =>
        set({ expandedModule }),
      setModulesListCollapsed: (modulesListCollapsed: boolean) =>
        set({ modulesListCollapsed }),
    }),
    {
      name: "codelab:preferences",
    }
  )
);
