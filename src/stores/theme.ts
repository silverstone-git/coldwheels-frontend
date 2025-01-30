import { ref } from 'vue';
import { useCookies } from 'vue3-cookies';

const { cookies } = useCookies();


enum Theme {
    Light = 'light',
    Dark = 'dark',
    Cyberpunk = 'cyberpunk',
    Luxury = 'luxury',
}

const initTheme: Theme = (cookies.get('theme') ?? Theme.Cyberpunk) as Theme

const theme = ref<Theme>(initTheme);

const selectTheme = (selection: Theme) => {
    theme.value = selection;
    document.body.className = theme.value;
    document.documentElement.setAttribute('data-theme', theme.value);
    cookies.set('theme', theme.value);
};

const themesArr = Object.values(Theme);

export {
    theme,
    selectTheme,
    Theme,
    themesArr
};

