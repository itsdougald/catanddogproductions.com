const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const dist = path.join(root, "dist");
const references = [];

function walk(dir, visitor) {
  if (!fs.existsSync(dir)) return;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, visitor);
    else visitor(full);
  }
}

function existsForUrl(url, fromFile) {
  const clean = url.split("#")[0].split("?")[0];
  if (!clean || /^(https?:|mailto:|tel:|data:|javascript:)/i.test(clean)) return true;
  if (clean.startsWith("//")) return true;
  if (clean.startsWith("/album/")) return true;
  if (/^\/media\//i.test(clean)) return true;
  if (/qpl_match_reports|\/sport\/football\/|\/sport\/cricket\.html/i.test(clean)) return true;
  if (/new\.zealand\.html$/i.test(clean)) return true;
  const base = clean.startsWith("/")
    ? path.join(dist, clean)
    : path.resolve(path.dirname(fromFile), clean);
  if (fs.existsSync(base) && fs.statSync(base).isFile()) return true;
  if (fs.existsSync(path.join(base, "index.html"))) return true;
  return false;
}

walk(dist, (file) => {
  if (path.extname(file).toLowerCase() !== ".html") return;
  const html = fs.readFileSync(file, "utf8");
  for (const match of html.matchAll(/\b(?:href|src)=["']([^"']+)["']/gi)) {
    references.push({ file, url: match[1] });
  }
});

const missing = references.filter(({ file, url }) => !existsForUrl(url, file));

if (missing.length) {
  for (const item of missing) {
    console.error(`${path.relative(root, item.file)} -> ${item.url}`);
  }
  process.exitCode = 1;
} else {
  console.log(`Checked ${references.length} local/static references`);
}
