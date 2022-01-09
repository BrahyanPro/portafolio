const reuseUsefulLoaderHeaders = ({ loaderHeaders }) => {
  const headers = new Headers();
  const usefulHeaders = ['Cache-Control', 'Vary', 'Server-Timing'];
  for (const headerName of usefulHeaders) {
    if (loaderHeaders.has(headerName)) {
      headers.set(headerName);
    }
  }

  return headers;
};

export { reuseUsefulLoaderHeaders };
