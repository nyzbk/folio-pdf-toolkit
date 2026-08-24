# SEARCH CONSOLE CANON — Folio PDF Toolkit

**Навсегда.** Агент обязан применять этот файл при любой задаче про индексацию, sitemap, robots, canonical, Search Console. Тот же статус, что у `ADSENSE.md`.

Пользователь больше **не обязан** повторно присылать коды подтверждения и приветственное письмо GSC.

## Этот сайт

| Поле | Значение |
|---|---|
| Property type | URL-prefix (не domain) |
| Resource | `https://folio-pdf-toolkit.vercel.app/` |
| GSC | [Search Console](https://search.google.com/search-console?resource_id=https://folio-pdf-toolkit.vercel.app/) |
| Sitemaps UI | [Sitemaps](https://search.google.com/search-console/sitemaps?resource_id=https://folio-pdf-toolkit.vercel.app/) |
| Production | `https://folio-pdf-toolkit.vercel.app` |
| Repo | `nyzbk/folio-pdf-toolkit` |
| Ownership | HTML-файл (тот же, что Atoll Path / Nota) |
| Verification file | `/google9cea52a5e8c8a836.html` → `public/google9cea52a5e8c8a836.html` |
| File body (ровно) | `google-site-verification: google9cea52a5e8c8a836.html` |
| Sitemap | `https://folio-pdf-toolkit.vercel.app/sitemap.xml` |
| robots.txt | `https://folio-pdf-toolkit.vercel.app/robots.txt` |
| ads.txt | `https://folio-pdf-toolkit.vercel.app/ads.txt` |

Не удалять verification HTML. Не менять имя файла. Не добавлять лишний перевод строки.

## Что в sitemap (ровно INDEXABLE)

`/` `/split` `/compress` `/about` `/privacy` `/terms`

**Не в sitemap:** `/merge` — это дубль домашней Merge-страницы, canonical ведёт на `/`.

## Обязательный стек

1. Уникальные `title` / `description` / `canonical` (абсолютный https) на каждую индексную страницу.
2. `html lang="en"`.
3. JSON-LD: WebSite + BreadcrumbList + WebApplication + FAQPage + HowTo на tool-страницах.
4. `robots.txt`: `Allow: /` + Googlebot / Mediapartners-Google / AdsBot-Google / Yandex Allow.
5. `Sitemap: https://folio-pdf-toolkit.vercel.app/sitemap.xml`.
6. `sitemap.xml` с **продакшен-origin**, lastmod, changefreq, priority. Не origin превью.
7. HTML-файл верификации в `public/`. Хранить вечно.
8. Не авторствовать `og:*` / `twitter:card` в `__root.tsx` (их пишет grok-pwa).

## Три метода AdSense (уже на Folio)

```
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7636435144500691" crossorigin="anonymous"></script>
<meta name="google-adsense-account" content="ca-pub-7636435144500691">
ads.txt: google.com, pub-7636435144500691, DIRECT, f08c47fec0942fa0
```

Auto ads = **ВЫКЛ**. LIVE ad units = только после Site Ready. См. `ADSENSE.md`.

## Что владелец жмёт в UI (агент это не может)

После деплоя, **до** кнопки «Запросить проверку» в AdSense:

1. URL-prefix property = `https://folio-pdf-toolkit.vercel.app/` → подтвердить **HTML-файлом**.
2. Sitemaps → отправить `https://folio-pdf-toolkit.vercel.app/sitemap.xml` → дождаться **Успешно**.
3. Проверка URL → `https://folio-pdf-toolkit.vercel.app/` → **Запросить индексирование**. То же для `/split` и `/compress`.
4. Только после пункта 2 — AdSense: если сайт ещё не в Sites, добавить; если ads.txt «Не найдено» — подождать краул после GSC Success; **не слать review повторно** пока sitemap не Success.
5. Sitemap повторно не слать, пока список URL тот же.
6. Не заводить `http://` и `www.` свойства. Domain-свойство — только после своего домена + DNS TXT.
7. Коллег в GSC не добавлять без явной просьбы.

Индексация ≠ позиция. Дни, не минуты.

**Почему GSC раньше AdSense (канон 24.08.2026):** Atoll Path — единственный сайт, где колонка ads.txt в AdSense стала «Разрешено» в тот же день. На нём сначала ушёл sitemap в GSC (Success), потом AdSense. На Folio файл ads.txt уже 200, но в кабинете 24.08 было «Не найдено» — GSC-шаг не был первым. Без проиндексированного sitemap робот ads.txt часто не находит файл.

## Запреты

- Не плодить http/www свойства под vercel.app.
- Не класть `/merge` в sitemap (canonical на `/`).
- Не выдумывать `google-site-verification` meta token — только HTML-файл, который уже в репо.
- Не включать Auto ads «чтобы Googlebot увидел рекламу».
- Не ждать, что AdSense проверка = GSC проверка. Это разные роботы.

## Ссылки

- [Подтверждение права](https://support.google.com/webmasters/answer/9008080?hl=ru)
- [Sitemap](https://support.google.com/webmasters/answer/156184?hl=ru)
- [Краткое руководство](https://support.google.com/webmasters/answer/6258314?hl=ru)
- [Начало работы](https://support.google.com/webmasters/answer/10431861?hl=ru)
