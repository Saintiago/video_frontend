export default function(loaded, total) {
  return Math.min(Math.ceil(loaded / total) * 100, 100);
}