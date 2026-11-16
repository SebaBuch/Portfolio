import { Injectable, signal } from "@angular/core";
import { translations } from "../translation/translations";

@Injectable({
    providedIn: "root"
})
export class LanguageService {
    currentLanguage = signal<"de" | "en">("de");

    setLanguage(language: "de" | "en") {
        this.currentLanguage.set(language);
        document.documentElement.lang = language;
    }

    translate(key: string): string {
        const language = this.currentLanguage();
        return translations[key][language];
    }
}