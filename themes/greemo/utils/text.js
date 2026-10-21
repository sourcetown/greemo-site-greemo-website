// Small text helpers for Greemo content strings.
const esc = s => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

/** Placeholder strings ("[PLACEHOLDER: …]") are rendered as visible, styled markers. */
export const isPlaceholder = s => typeof s === 'string' && s.trim().startsWith('[PLACEHOLDER')

/**
 * Inline rich text for copy stored in collections and annotations:
 * `code`, **bold**, *emphasis* and [PLACEHOLDER: …] markers. HTML is escaped first.
 */
export function rich(text = '') {
  return esc(text)
    .replace(/\[PLACEHOLDER[^\]]*\]/g, m => `<span class="ph ph-txt">${m}</span>`)
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/\*\*([^*]+)\*\*/g, '<b>$1</b>')
    .replace(/\*([^*]+)\*/g, '<em>$1</em>')
}

/** Code block highlighting, the same rules as the approved mockups: comments, strings, then leading commands. */
export function highlight(txt = '') {
  return String(txt).replace(/^\n+|\n+$/g, '').split('\n').map(line => {
    let l = esc(line)
    const t = l.trimStart()
    if (t.startsWith('#') || t.startsWith('//')) return `<span class="c">${l}</span>`
    l = l.replace(/"([^"]*?)"/g, '<span class=s>"$1"</span>')
    l = l.replace(/^(\s*)(greemo|npx|npm|curl|cp|cd|export|diff)\b/, '$1<span class=k>$2</span>')
    return l
  }).join('\n')
}
