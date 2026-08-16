import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const developmentPreviewMeta =
  /<meta(?=[^>]*\bname=["']codex-preview["'])(?=[^>]*\bcontent=["']development["'])[^>]*>/i;
const faviconLink =
  /<link(?=[^>]*\brel=["'][^"']*icon[^"']*["'])(?=[^>]*\bhref=["']\/favicon\.svg["'])[^>]*>/i;

test("declares light defaults and system-controlled dark mode", async () => {
  const css = await readFile(new URL("../app/globals.css", import.meta.url), "utf8");

  assert.match(css, /--page-bg:\s*#f3f5f7/i);
  assert.match(css, /color-scheme:\s*light/i);
  assert.match(css, /@media\s*\(prefers-color-scheme:\s*dark\)/i);
  assert.match(css, /--page-bg:\s*var\(--black\)/i);
  assert.match(css, /color-scheme:\s*dark/i);
  assert.match(css, /\.fab-wrap\.open \.fab-main\s*\{[^}]*background:\s*var\(--navy\)/i);
  assert.match(css, /\.fab-menu a span\s*\{[^}]*background:\s*var\(--fab-label-bg\)/i);
});

test("uses subtle rounding globally while preserving intentional circles", async () => {
  const css = await readFile(new URL("../app/globals.css", import.meta.url), "utf8");

  assert.match(css, /--global-radius:\s*2px/i);
  assert.match(css, /\*\s*\{[^}]*border-radius:\s*var\(--global-radius\)/i);
  assert.match(css, /\.trust-grid\s*>\s*div\s*\{[^}]*border-radius:\s*0/i);
  assert.match(css, /\.fab-main\s*\{[^}]*border-radius:\s*50%/i);
  assert.match(css, /\.status-dot\s*\{[^}]*border-radius:\s*50%/i);
});

test("keeps the homepage recovery image balanced on mobile", async () => {
  const css = await readFile(new URL("../app/globals.css", import.meta.url), "utf8");

  assert.match(css, /\.why-image-wrap\s*\{[^}]*aspect-ratio:\s*4\s*\/\s*3;[^}]*min-height:\s*0;[^}]*overflow:\s*hidden/i);
  assert.match(css, /\.why-image-wrap::after\s*\{\s*display:\s*none/i);
  assert.match(css, /\.why-image-card\s*\{[^}]*min-width:\s*0;[^}]*padding:\s*16px\s+18px/i);
});

test("renders development preview metadata", async () => {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  const response = await worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );

  assert.equal(response.status, 200);
  assert.match(
    response.headers.get("content-type") ?? "",
    /^text\/html\b/i,
  );
  const html = await response.text();
  assert.match(html, developmentPreviewMeta);
  assert.match(html, faviconLink);
  assert.match(html, /Stranded\? Call Us Now\./i);
  assert.match(html, /class="[^"]*hero-emergency-call[^"]*"/i);
  assert.match(html, /Nest Close, 15292 Falcon Drive, Harare/i);
  assert.match(html, /billytowing01@gmail\.com/i);
  assert.match(html, /@billytowing_/i);
  assert.match(html, /instagram\.com\/billytowing_/i);

  const contactResponse = await worker.fetch(
    new Request("http://localhost/contact", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );

  assert.equal(contactResponse.status, 200);
  const contactHtml = await contactResponse.text();
  assert.match(contactHtml, /<option>Specify<\/option>/i);
  assert.match(contactHtml, /mailto:billytowing01@gmail\.com/i);
  assert.match(contactHtml, /Nest Close, 15292 Falcon Drive, Harare/i);
  assert.match(contactHtml, /@billytowing_/i);
});
