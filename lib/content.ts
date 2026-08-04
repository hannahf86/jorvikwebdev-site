/* =============================================================================
   Content library — reads local content files (frontmatter + HTML body) from
   /content. Currently drives the Policies pages; the Tips files are extracted
   and ready here too, for when they're published.
   ============================================================================= */

import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const CONTENT_DIR = path.join(process.cwd(), "content");

export type Doc = {
  slug: string;
  title: string;
  html: string;
  data: Record<string, unknown>;
};

function readDir(sub: string): string[] {
  const dir = path.join(CONTENT_DIR, sub);
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).filter((f) => f.endsWith(".md")).map((f) => f.replace(/\.md$/, ""));
}

function readDoc(sub: string, slug: string): Doc | null {
  const file = path.join(CONTENT_DIR, sub, `${slug}.md`);
  if (!fs.existsSync(file)) return null;
  const { data, content } = matter(fs.readFileSync(file, "utf8"));
  return { slug, title: (data.title as string) ?? slug, html: content, data };
}

export const getPolicySlugs = () => readDir("policies");
export const getPolicy = (slug: string) => readDoc("policies", slug);

export const getTipSlugs = () => readDir("tips");
export const getTip = (slug: string) => readDoc("tips", slug);
