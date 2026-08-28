# 188 — Folio content layer (ворота C) 28.08.2026

План: `187_ADSENSE_SITE_APPROVAL_REJECTION_FIX_PLAN_2026-08-28_RU.md` §B1.

## Сделано в репо (агент)

- Статический `public/sitemap.xml` — 11 URL (без `/merge`).
- SSR-текст: `/` how-to-split how-to-compress faq use-cases about contact.
- FAQ 14 уникальных для PDF + FAQPage JSON-LD. HowTo на гайдах.
- `ads.txt` одна строка. robots AdsBot + Mediapartners-Google. Head script + meta. LIVE=false, Auto ads не включались.
- Contact: `ultaultimatum@gmail.com` (ящик AdSense-аккаунта). Без формы загрузки PDF.

## Не сделано (владелец / запреты плана)

- Платежи и телефон в AdSense (жёлтый баннер).
- GSC: Confirm HTML, sitemap resubmit (список URL изменился), Inspection `/` `/split` `/compress` `/how-to-split`.
- Request review — **не сегодня**. После GSC Success + 7 дней.

## QA локально 28.08

Homepage raw HTML содержит pagead2 + google-adsense-account + FAQPage + HowTo + абзацы How it works / iLovePDF / pdf-lib.
`/how-to-split` и `/how-to-compress` > 800 слов в SSR. `/about` > 400. `/faq` 14 вопросов.
