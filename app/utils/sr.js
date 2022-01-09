import ScrollReveal from 'scrollreveal';

const isSSR = typeof window.document !== 'undefined';
export const sr = isSSR ? null : ScrollReveal();