import { Injectable, signal } from "@angular/core";
import { translations } from "../translation/translations";

/**
 * Stores the current language of the website and returns translated texts.
 * There is only one instance for the whole app (providedIn: "root"),
 * so every component shares the same language.
 */
@Injectable({
    providedIn: "root"
})
export class LanguageService {
    /** The currently selected language. Starts with German. */
    currentLanguage = signal<"de" | "en">("de");

    /**
     * Switches the language of the whole website and updates the lang attribute of the html tag.
     * @param language - The new language, "de" or "en"
     */
    setLanguage(language: "de" | "en") {
        this.currentLanguage.set(language);
        document.documentElement.lang = language;
    }

    /**
     * Returns the text for the given key in the current language.
     * @param key - The key of the text in translations.ts, e.g. "navAbout"
     * @returns The translated text
     */
    translate(key: string): string {
        const language = this.currentLanguage();
        return translations[key][language];
    }
}
