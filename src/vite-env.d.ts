/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_WEB_SERVICE: string;
  readonly VITE_APPLICATION_TITLE: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
