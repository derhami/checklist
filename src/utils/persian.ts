/**
 * Normalizes Persian and Arabic text for reliable client-side search.
 * Converts Arabic 'ي' -> 'ی', 'ك' -> 'ک', removes diacritics, and normalizes space characters.
 */
export function normalizePersianText(text: string): string {
  if (!text) return '';
  return text
    .trim()
    .toLowerCase()
    .replace(/ي/g, 'ی')
    .replace(/ك/g, 'ک')
    .replace(/آ/g, 'ا')
    .replace(/أ/g, 'ا')
    .replace(/إ/g, 'ا')
    .replace(/ؤ/g, 'و')
    .replace(/ئ/g, 'ی')
    .replace(/ة/g, 'ه')
    .replace(/[\u064B-\u065F]/g, '') // Remove Arabic harakat
    .replace(/\s+/g, ' ');
}

export function searchMatches(text: string, query: string): boolean {
  if (!query) return true;
  const normalizedText = normalizePersianText(text);
  const normalizedQuery = normalizePersianText(query);
  return normalizedText.includes(normalizedQuery);
}

export function toPersianDigits(num: number | string): string {
  const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
  return String(num).replace(/\d/g, (x) => persianDigits[parseInt(x, 10)]);
}
