import { defineStore } from "pinia";

const useThemeStore = defineStore("theme", {
  state: () => ({
    theme: "",
    isDark: false,
  }),

  getters: {
    getTheme(): any {
      return this.theme;
    },

    getStatus(): any {
      return this.isDark
    }
  },

  actions: {
    initTheme() {
      console.log("Init");
      const cachedTheme = localStorage.theme ? localStorage.theme : false;
      const userPrefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;

      if (cachedTheme) {
        this.theme = cachedTheme;
      } else if (userPrefersDark) {
        this.theme = "dark";
      } else {
        this.theme = "light";
      }
    },

    toggleTheme() {
      this.isDark = !this.isDark;
      if (this.isDark) {
        this.theme = "dark";
      } else {
        this.theme = "light";
      }
    },
  },
});

export default useThemeStore;
