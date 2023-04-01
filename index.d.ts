declare module 'jspdf-html2canvas' {
  const html2PDF: (...args: unknown[]) => void;
  export = html2PDF;
}

declare module '*.md' {
  const value: string; // markdown is just a string
  export default value;
}
