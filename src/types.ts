import type { CheerioAPI } from 'cheerio';

export interface ApiParameter {
  name: string;
  type: string;
  description: string;
}

export interface ApiSchema {
  id: string | null;
  path: string | null;
  method: string | null;
  security: string | null;
  weight: number | null;
  parameters: ApiParameter[];
  response_examples: string[];
  errors: any[];
}

export interface Adapter {
  name: string;
  baseUrl: string;
  startUrl: string;
  allowedPathPrefix: string;

  normalizeUrl(raw: string, currentUrl?: string): string | null;
  discoverLinks($: CheerioAPI, currentUrl: string): string[];
  cleanDocument($: CheerioAPI): void;
  selectMainContent($: CheerioAPI): string;
  extractApiSchemas(markdown: string, url: string): ApiSchema[];
}

export interface RunStats {
  startedAt: string;
  finishedAt: string | null;
  pagesVisited: number;
  pagesWritten: number;
  pagesSkipped: number;
  assetsDownloaded: number;
  failures: any[];
  compiledOpenApi: number;
  compiledAsyncApi: number;
  runtimeRestExecutors: number;
  runtimeWebsocketExecutors: number;
}
