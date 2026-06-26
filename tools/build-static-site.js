const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const dist = path.join(root, "dist");
const assetVersion = "20260626-responsive";

const pageRoots = ["."];

const skipPages = new Set([
  "application.php",
  "catanddogfeed.php",
  "googleMap.php",
]);

const assetRoots = [
  "images",
  "css",
  "sport",
  "property",
  "wedding",
  "australia",
];

const copyExtensions = new Set([
  ".css",
  ".gif",
  ".ico",
  ".jpg",
  ".jpeg",
  ".png",
  ".pdf",
  ".doc",
  ".xml",
  ".txt",
]);

const navItems = [
  { href: "/australia/index.html", label: "Australia" },
  { href: "/kids/index.html", label: "Kids" },
  { href: "/sport/index.html", label: "Sport" },
  { href: "/travel/holidays/index.html", label: "Travel" },
  { href: "/wedding/index.html", label: "Wedding" },
  { href: "/property/index.html", label: "Property" },
];

const sideSections = [
  {
    title: "Living The Dream",
    links: [
      ["/australia/index.html", "Australia"],
      ["/australia/2016.html", "2016"],
      ["/australia/2015.html", "2015"],
      ["/australia/2014.html", "2014"],
      ["/australia/2013.html", "2013"],
      ["/australia/2012.html", "2012"],
      ["/australia/2011.html", "2011"],
      ["/australia/2010.html", "2010"],
    ],
  },
  {
    title: "Family",
    links: [
      ["/kids/sophia.html", "Sophia"],
      ["/kids/andre.html", "Andre"],
      ["/wedding/index.html", "Wedding"],
      ["/wedding/engagement.html", "Engagement"],
    ],
  },
  {
    title: "Sport",
    links: [
      ["/sport/porkies.html", "Porkies"],
      ["/sport/wackers.html", "Wackers"],
      ["/sport/ashes.html", "Ashes"],
      ["/sport/golf.html", "Golf"],
    ],
  },
  {
    title: "Travel",
    links: [
      ["/travel/holidays/index.html", "Holidays"],
      ["/travel/backpacking/index.html", "Backpacking"],
      ["/guptoberfest/index.html", "Guptoberfest"],
      ["/property/index.html", "Spain Property"],
    ],
  },
];

function emptyDir(dir) {
  fs.rmSync(dir, { recursive: true, force: true });
  fs.mkdirSync(dir, { recursive: true });
}

function walk(dir, visitor) {
  if (!fs.existsSync(dir)) return;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(full, visitor);
    } else {
      visitor(full);
    }
  }
}

function toPosix(value) {
  return value.split(path.sep).join("/");
}

function outputPathForPhp(file) {
  const rel = path.relative(root, file);
  return path.join(dist, rel.replace(/\.php$/i, ".html"));
}

function stripPhp(source) {
  return source
    .replace(/<\?\s*echo\s+\$EXETEL_HOME_2005\s*\?>/gi, "/album/2005")
    .replace(/<\?\s*echo\s+\$EXETEL_HOME_2006\s*\?>/gi, "/album/2006")
    .replace(/<\?\s*echo\s+\$EXETEL_HOME_2007\s*\?>/gi, "/album/2007")
    .replace(/<\?\s*echo\s+\$EXETEL_HOME_2008\s*\?>/gi, "/album/2008")
    .replace(/<\?\s*echo\s+\$EXETEL_HOME_2009\s*\?>/gi, "/album/2009")
    .replace(/<\?\s*echo\s+\$EXETEL_HOME_2010\s*\?>/gi, "/album/2010")
    .replace(/<\?\s*echo\s+\$EXETEL_HOME_2011\s*\?>/gi, "/album/2011")
    .replace(/<\?\s*echo\s+\$EXETEL_HOME_2012\s*\?>/gi, "/album/2012")
    .replace(/<\?\s*echo\s+\$EXETEL_HOME_2013\s*\?>/gi, "/album/2013")
    .replace(/<\?\s*echo\s+\$EXETEL_HOME_2014\s*\?>/gi, "/album/2014")
    .replace(/<\?\s*echo\s+\$EXETEL_HOME_2015\s*\?>/gi, "/album/2015")
    .replace(/<\?\s*echo\s+\$EXETEL_HOME_2016\s*\?>/gi, "/album/2016")
    .replace(/<\?\s*echo\s+\$EXETEL_HOME_WEDDING\s*\?>/gi, "/album/wedding")
    .replace(/<\?\s*echo\s+\$EXETEL_HOME_WORLDTRIP\s*\?>/gi, "/album/world.trip")
    .replace(/<\?\s*echo\s+\$EXETEL_HOME_SOPHIA\s*\?>/gi, "/album/bubba")
    .replace(/<\?\s*echo\s+\$EXETEL_HOME\s*\?>/gi, "/album")
    .replace(/<\?(?:php)?[\s\S]*?\?>/gi, "");
}

function cleanHtml(html, currentDir) {
  return html
    .replace(/\r\n/g, "\n")
    .replace(/<!--[\s\S]*?-->/g, "")
    .replace(/<script[\s\S]*?google\.load[\s\S]*?<\/script>/gi, "")
    .replace(/<script[^>]+google\.com\/jsapi[^>]*><\/script>/gi, "")
    .replace(/<link[^>]+google\.com\/cse[^>]*>/gi, "")
    .replace(/<div id="cse"[\s\S]*?<\/div>/gi, "")
    .replace(/\shref=(["'])#\1/g, " href=\"#mainContent\"")
    .replace(/href=["']<a\s+href=["']/gi, "href=\"")
    .replace(/\s(align|valign|border)=["'][^"']*["']/gi, "")
    .replace(/\s(traget|target)=["']new["']/gi, " target=\"_blank\" rel=\"noopener\"")
    .replace(/<br\s*\/?>/gi, "<br>")
    .replace(/<a([^>]+)>([^<]*?)<\/li>/gi, "<a$1>$2</a></li>")
    .replace(/(href|src)=["']([^"']+?)["']/gi, (_match, attr, url) => {
      return `${attr}="${rewriteUrl(url, currentDir)}"`;
    })
    .replace(/<img\b(?![^>]*\bloading=)/gi, "<img loading=\"lazy\"")
    .replace(/<img\b(?![^>]*\bdecoding=)/gi, "<img decoding=\"async\"");
}

function rewriteUrl(url, currentDir) {
  if (url.startsWith("//")) return `https:${url}`;
  if (/^(https?:|mailto:|tel:|#)/i.test(url)) return url.replace(/^http:\/\//i, "https://");
  let clean = url.replace(/\\/g, "/");
  clean = clean.replace(/\.php(?=([?#]|$))/gi, ".html");
  clean = clean.replace(/\/blog\/index\.html/i, "/");
  clean = clean.replace(/^\/album(?=[A-Za-z0-9])/, "/album/");
  clean = clean.replace(/^\.\.\/images\//i, "/images/");
  clean = clean.replace(/^\/images\/wackers\/Wacker\.logo\.jpg/i, "/images/australia/living2006/wackers/Wacker.logo.jpg");
  if (currentDir === "travel/backpacking" && clean === "2005.html") return "/australia/2005.html";
  clean = clean.replace(/^\/(?:0[1-9]|1[0-2]|Birth|Blue\.Poppy|Month|Wedding\.Trip\.Home|07\.Wedding|08\.Honeymoon|06\.Dogs|01Jan|02Feb|03Mar|04Apr|04April|05May|06Jun|06June|07Jul|07July|08Aug|08August|09Sep|09Sept|10Oct|11Nov|12Dec)\b/i, "/album/legacy$&");
  clean = clean.replace(/^Wedding\.Trip\.Home\b/i, "/album/legacy/Wedding.Trip.Home");
  clean = clean.replace(/^\/travel\/(australia(?:_two|_three|_four)?|thailand(?:_two)?|malaysia|dubai|western\.australia)\.html/i, "/travel/backpacking/$1.html");
  clean = clean.replace(/^\/travel\/(uk\.trip\.2006|uk\.trip\.2011|uk\.trip\.2014|sting\.concert|western\.australia)\.html/i, "/travel/holidays/$1.html");
  clean = clean.replace(/^\/australia\/uk\.trip\.2006\.html/i, "/travel/holidays/uk.trip.2006.html");
  clean = clean.replace(/^\/australia\/western\.australia\.html/i, "/travel/holidays/western.australia.html");
  clean = clean.replace(/^\/andre\.html/i, "/kids/andre.html");
  if (clean.startsWith("/")) return clean;
  if (/^[\w.-]+\.html([?#].*)?$/i.test(clean) && currentDir === ".") return clean;
  return clean;
}

function getTitle(content, fallback) {
  const h1 = content.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
  const h2 = content.match(/<h2[^>]*>([\s\S]*?)<\/h2>/i);
  const raw = (h1 || h2 || [null, fallback])[1];
  return raw.replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();
}

function extractMainContent(source) {
  const body = stripPhp(source);
  const start = body.search(/<div\s+id=["']mainContent["'][^>]*>/i);
  if (start === -1) {
    const fallbackStart = body.search(/<hr\s+class=["']hide["'][^>]*>/i);
    if (fallbackStart === -1) return null;
    const afterFallback = body.slice(fallbackStart).replace(/<hr\s+class=["']hide["'][^>]*>/i, "");
    const footer = afterFallback.search(/<!--\s*footer\s*-->/i);
    const content = footer === -1 ? afterFallback : afterFallback.slice(0, footer);
    return `<div id="mainContent">${content}`;
  }
  const afterStart = body.slice(start);
  const marker = afterStart.search(/<hr\s+class=["']hide["'][^>]*>/i);
  if (marker !== -1) {
    return afterStart.slice(0, marker);
  }
  const footer = afterStart.search(/<!--\s*footer\s*-->/i);
  return footer === -1 ? afterStart : afterStart.slice(0, footer);
}

function renderPage({ title, content, relPath }) {
  const description = "Family, travel, sport and life archives from Cat And Dog Productions.";
  const nav = navItems.map((item) => `<a href="${item.href}">${item.label}</a>`).join("");
  const side = sideSections.map((section) => {
    const links = section.links.map(([href, label]) => `<li><a href="${href}">${label}</a></li>`).join("");
    return `<section class="side-section"><h2>${section.title}</h2><ul>${links}</ul></section>`;
  }).join("");

  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${escapeHtml(title)} | Cat And Dog Productions</title>
  <meta name="description" content="${description}">
  <link rel="icon" href="/favicon.ico">
  <link rel="stylesheet" href="/static/site.css?v=${assetVersion}">
</head>
<body>
  <header class="site-header">
    <a class="brand" href="/index.html" aria-label="Cat And Dog Productions home">
      <img src="/images/catanddog_header.gif" alt="Cat And Dog Productions">
    </a>
    <nav class="top-nav" aria-label="Primary navigation">${nav}</nav>
  </header>
  <main class="site-shell">
    <aside class="sidebar" aria-label="Site sections">${side}</aside>
    <article class="content" id="mainContent">
${content.replace(/^<div\s+id=["']mainContent["'][^>]*>/i, "").replace(/<\/div>\s*$/i, "").trim()}
    </article>
  </main>
  <footer class="site-footer">
    <nav aria-label="Footer navigation">
      <a href="/about.html">About</a>
      <a href="/photos.html">Photos</a>
      <a href="/catanddogfeed.xml">RSS</a>
      <a href="/sitemap.xml">Sitemap</a>
    </nav>
    <p>Copyright &copy; 2012 The Cat And Dog Productions. Static archive refreshed for S3 hosting.</p>
  </footer>
</body>
</html>
`;
}

function escapeHtml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function buildPages() {
  const pages = [];
  const seen = new Set();
  for (const pageRoot of pageRoots) {
    const fullRoot = path.join(root, pageRoot);
    walk(fullRoot, (file) => {
      if (path.extname(file).toLowerCase() !== ".php") return;
      const rel = toPosix(path.relative(root, file));
      if (seen.has(rel)) return;
      seen.add(rel);
      if (rel.startsWith("blog/") || rel.startsWith("includes/") || rel.startsWith("jquery/") || skipPages.has(rel)) return;
      const source = fs.readFileSync(file, "utf8");
      const extracted = extractMainContent(source);
      if (!extracted) return;
      const currentDir = toPosix(path.dirname(path.relative(root, file))) || ".";
      const content = cleanHtml(extracted, currentDir);
      const title = getTitle(content, path.basename(file, ".php"));
      const out = outputPathForPhp(file);
      fs.mkdirSync(path.dirname(out), { recursive: true });
      fs.writeFileSync(out, renderPage({ title, content, relPath: rel }), "utf8");
      pages.push("/" + toPosix(path.relative(dist, out)));
    });
  }
  return pages.sort();
}

function copyAssets() {
  for (const assetRoot of assetRoots) {
    walk(path.join(root, assetRoot), (file) => {
      const rel = path.relative(root, file);
      const ext = path.extname(file).toLowerCase();
      if (!copyExtensions.has(ext)) return;
      if (ext === ".php") return;
      const out = path.join(dist, rel);
      fs.mkdirSync(path.dirname(out), { recursive: true });
      fs.copyFileSync(file, out);
    });
  }

  for (const file of ["favicon.ico", "robots.txt", "catanddogfeed.xml", "google51403d226a3658f5.html"]) {
    const src = path.join(root, file);
    if (!fs.existsSync(src)) continue;
    fs.copyFileSync(src, path.join(dist, file));
  }

  fs.cpSync(path.join(root, "static"), path.join(dist, "static"), { recursive: true });
}

function writeSitemap(pages) {
  const urls = pages.map((page) => {
    const loc = `https://catanddogproductions.com${page}`;
    return `  <url><loc>${loc}</loc><changefreq>monthly</changefreq></url>`;
  }).join("\n");
  fs.writeFileSync(path.join(dist, "sitemap.xml"), `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`, "utf8");
}

emptyDir(dist);
const pages = buildPages();
copyAssets();
writeSitemap(pages);
console.log(`Built ${pages.length} static pages in ${path.relative(root, dist)}`);
