import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiKeyService {

  private readonly localStorageKey = 'apiKey';

  constructor() {
  }

  /**
   * Returns the API key from local storage.
   */
  getApiKey() {
    return localStorage.getItem(this.localStorageKey);
  }

  /**
   * Stores the API key in local storage.
   * @param apiKey
   */
  setApiKey(apiKey: string) {
    localStorage.setItem(this.localStorageKey, apiKey);
  }

  /**
   * Removes the API key from local storage.
   */
  removeApiKey() {
    localStorage.removeItem(this.localStorageKey);
  }
}
