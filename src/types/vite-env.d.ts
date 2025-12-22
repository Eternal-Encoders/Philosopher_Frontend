interface ImportMetaEnv {
  readonly VITE_API_DOMAIN: string;
  readonly VITE_LLM_DOMAIN: string;
  readonly VITE_PARSER_DOMAIN: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}