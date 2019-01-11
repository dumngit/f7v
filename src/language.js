import Vue from 'vue'
import { MLInstaller, MLCreate, MLanguage } from 'vue-multilanguage'

Vue.use(MLInstaller)

export default new MLCreate({
    initial: 'english',
    save: process.env.NODE_ENV === 'production',
    languages: [
        new MLanguage('english').create({
            languageName: {
                'english' : 'english',
                'russian' : 'английский',
            },
            appTitle: 'My App',
            homeText: 'Here is your blank Framework7 app. Let\'s see what we have here.',
            homeNavigation: 'Navigation',
            homeListTitle: 'Popular programming languages',
            leftPanelTitle: 'Left Panel',
            leftPanelText: 'Left panel content goes here',
            settingsTitle: 'Settings',
            settingsBlockTitle: 'Select app language',
            settingsTip: 'Current language',
        }),

        new MLanguage('russian').create({
            languageName: {
                'english' : 'russian',
                'russian' : 'русский',
            },
            appTitle: 'Мое приложение',
            homeText: 'Вот ваша заготовка приложение Framework7. Посмотрим, что у нас здесь.',
            homeNavigation: 'Навигация',
            homeListTitle: 'Популярные языки программирования',
            leftPanelTitle: 'Левая панель',
            leftPanelText: 'Контент для левой панели здесь',
            settingsTitle: 'Настройки',
            settingsBlockTitle: 'Выберите язык приложения',
            settingsTip: 'Текущий язык',
        })
    ]
})