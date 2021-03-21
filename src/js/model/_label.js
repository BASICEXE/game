/**
 * MyLabel // ラベルを作成する
 *
 * @param {} scene
 * @param {number} x
 * @param {number} y
 * @param {string} text
 * @param {number} fontSize
 */
export function MyLabel(scene, x, y, text, fontSize = 26, textAlign = 'left', color = '#333') {
  const label = new Label(text)
  label.x = x
  label.y = y
  label.font = `${fontSize}px sans-serif`
  label.textAlign = textAlign
  label.color = color
  return label
}
