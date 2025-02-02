
import { defineStore } from 'pinia';

export const useToastStore = defineStore('toast', {
  state: () => ({
    content: ""
  }),
  actions: {
    kaching(content: string) {
      // add a toast
      this.content = content;
      setTimeout(() => {
        this.content = "";
      }, 5000)
    }
  }
});
