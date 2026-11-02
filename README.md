# RF dB Calculator

**English** · [Deutsch](#rf-db-rechner-deutsch)

An offline RF level calculator in a single HTML file. Use it as a web app on smartphones and tablets, or download the file for computers. No installation, no account and no internet connection required once loaded. The user interface is available in English and German.

**Web version:** https://unimatrixzer0.github.io/RF-dB-Calculator/

## Features

- **Calculator** with units, e.g. `10 W + 50 dB`, `40 dBm − 30 dB`, `8 mW / 0.8 mW`, `6.457 kW + 9 dBd`. Antenna gains (dBi, dBd) and carrier-relative levels (dBc) are checked for consistent references. Tape with previous results.
- **Level plan**: input power and any number of stages with gain or loss.
- **Units**: W, dBm, dBW, dBk, voltage (RMS, peak, peak-to-peak, rectified mean), dBV, dBmV, dBµV, dBu and current at a selectable reference impedance.
- **Voltages**: correlated and uncorrelated addition.
- **dB and ratio**: power and voltage ratios.
- **VSWR**: reflection coefficient, return loss, mismatch loss, forward and reflected power.
- **Cable**: loss scaled to another frequency and length, power at the cable output, VSWR at both cable ends.
- **Link budget**: transmitter output power, losses and mismatch, antenna gain, ERP and EIRP, optionally towards a direction (pattern attenuation) and split by polarisation, free-space field strength and received power (ITU-R P.525). Levels in dBW or dBm.
- **Calculation steps** for every tool, **printable reports** (PDF via the browser's print dialog) with selectable content, **save and open** of all inputs as a JSON file.

## Use on a smartphone or tablet

Open the web version in the browser. To keep it on the home screen like an app:

- **iPhone, iPad (Safari):** Share → “Add to Home Screen”, with “Open as Web App” switched on.
- **Android (Chrome):** menu → “Install app” or “Add to Home screen”.

After the first visit the calculator also works offline. The downloaded HTML file is intended for computers; smartphones usually do not run local HTML files.

## Use on a computer

1. Download `rf-db-calculator_1.1.3.html` from the latest release or from this repository.
2. Verify the checksum (see below).
3. Open the file in a browser. Settings and inputs are stored locally in this browser only; use “Save” to archive a calculation.

Unit symbols are written according to SI and are case-sensitive: `mW` is milliwatt, `MW` is megawatt. The calculator rejects incorrect or ambiguous input and suggests the correct spelling.

## IT security information

For approval on managed devices:

- **Static page.** There is no server-side processing; all calculations run locally in the browser.
- **No data transmission.** No analytics, tracking, cookies or advertising, and no external fonts, scripts or other resources. After loading, the calculator makes no network requests except loading its own files.
- **Local storage only.** Settings and inputs are kept in the browser's local storage (localStorage) on the device. Files are only written when the user clicks “Save” and only read when the user selects them.
- **Offline cache.** In the web version a service worker caches the application files of this site (same origin) for offline use. It makes no other requests.
- **No permissions.** No access to camera, microphone, location, contacts or notifications.
- **Restricted browsers.** If a policy blocks local storage, downloads, printing or service workers, the calculator still calculates; only remembering inputs, saving files, reports or offline use are unavailable. A notice is shown if local storage is blocked.
- **Verifiable.** The source code is readable in the HTML file; integrity can be checked with the SHA-256 checksums.
- **Requirements.** A current browser: Safari on iOS/iPadOS 15.4 or later, current Chrome, Edge, Firefox or Samsung Internet.

## Files

- `rf-db-calculator_1.1.3.html`: the calculator (download for computers).
- `index.html`: identical copy for the web version.
- `manifest.webmanifest`, `sw.js`, `icon-*.png`, `apple-touch-icon.png`: web app files (home screen icon, offline use).
- `SHA256SUMS.txt`, `LICENSE`.

## Verify the file

Compare the SHA-256 checksum with `SHA256SUMS.txt`:

- Windows (PowerShell): `Get-FileHash .\rf-db-calculator_1.1.3.html -Algorithm SHA256`
- Linux: `sha256sum -c SHA256SUMS.txt`
- macOS: `shasum -a 256 -c SHA256SUMS.txt`

## Licence

Copyright © 2026 UnImAtrIXzEr0. Licensed under the [Creative Commons Attribution-NoDerivatives 4.0 International License (CC BY-ND 4.0)](https://creativecommons.org/licenses/by-nd/4.0/), see [LICENSE](LICENSE).

You may use the calculator for any purpose, including commercial use, and redistribute it in unmodified form with attribution. Modified versions may not be distributed.

## Disclaimer

The calculator is provided “as is”, without warranty of any kind. Check results before relying on them. Free-space values apply to line of sight without ground and obstacle effects and do not replace coverage planning.

## Versions

- **1.1.3** (2026-11-02): web version with home screen icon and offline use, notice when local storage is blocked.
- 1.1.2: first public release. Licence notice, interface language follows the browser.
- 1.1.1: strict SI unit symbols with suggested corrections, dBW/dBm switch in the link budget, selectable report content.
- 1.1.0: calculation steps, reports, save and open, reference checks for dBi, dBd and dBc, direction, polarisation and mismatch in the link budget.
- 1.0.0: first version.

---

# RF-dB-Rechner (Deutsch)

[English](#rf-db-calculator) · **Deutsch**

Ein Offline-Rechner für HF-Pegel in einer einzigen HTML-Datei. Auf Smartphone und Tablet als Web-App nutzbar, für Computer als Datei zum Herunterladen. Ohne Installation, ohne Konto und nach dem Laden ohne Internetverbindung. Die Oberfläche gibt es auf Englisch und Deutsch.

**Web-Version:** https://unimatrixzer0.github.io/RF-dB-Calculator/

## Funktionen

- **Rechner** mit Einheiten, z. B. `10 W + 50 dB`, `40 dBm − 30 dB`, `8 mW / 0,8 mW`, `6,457 kW + 9 dBd`. Antennengewinne (dBi, dBd) und trägerbezogene Pegel (dBc) werden auf einheitliche Bezüge geprüft. Rechenstreifen mit früheren Ergebnissen.
- **Pegelplan**: Eingangsleistung und beliebig viele Stufen mit Verstärkung oder Dämpfung.
- **Einheiten**: W, dBm, dBW, dBk, Spannung (Effektivwert, Spitzenwert, Spitze-Spitze-Wert, Gleichrichtwert), dBV, dBmV, dBµV, dBu und Strom an einer wählbaren Bezugsimpedanz.
- **Spannungen**: korrelierte und unkorrelierte Addition.
- **dB und Verhältnis**: Leistungs- und Spannungsverhältnisse.
- **SWR**: Reflexionsfaktor, Rückflussdämpfung, Fehlanpassungsverlust, Vor- und Rücklaufleistung.
- **Kabel**: Dämpfung auf andere Frequenz und Länge umrechnen, Leistung am Kabelausgang, SWR an beiden Kabelenden.
- **Sendebilanz**: Senderausgangsleistung, Dämpfungen und Fehlanpassung, Antennengewinn, ERP und EIRP, wahlweise in eine Richtung (Diagrammdämpfung) und nach Polarisation aufgeteilt, Feldstärke und Empfangsleistung im Freiraum (ITU-R P.525). Pegel in dBW oder dBm.
- **Rechenweg** in jedem Werkzeug, **druckbare Berichte** (PDF über den Druckdialog des Browsers) mit wählbarem Inhalt, **Speichern und Öffnen** aller Eingaben als JSON-Datei.

## Benutzung auf Smartphone und Tablet

Die Web-Version im Browser öffnen. Um sie wie eine App auf dem Home-Bildschirm abzulegen:

- **iPhone, iPad (Safari):** Teilen → „Zum Home-Bildschirm“, mit eingeschaltetem „Als Web-App öffnen“.
- **Android (Chrome):** Menü → „App installieren“ bzw. „Zum Startbildschirm hinzufügen“.

Nach dem ersten Aufruf funktioniert der Rechner auch offline. Die heruntergeladene HTML-Datei ist für Computer gedacht; Smartphones führen lokale HTML-Dateien meist nicht aus.

## Benutzung am Computer

1. `rf-db-calculator_1.1.3.html` aus dem aktuellen Release oder aus diesem Repository herunterladen.
2. Prüfsumme kontrollieren (siehe unten).
3. Datei im Browser öffnen. Einstellungen und Eingaben bleiben nur in diesem Browser gespeichert; zur Ablage einer Rechnung „Speichern“ verwenden.

Einheitenzeichen werden nach SI geschrieben, Groß- und Kleinschreibung ist maßgeblich: `mW` ist Milliwatt, `MW` Megawatt. Der Rechner weist falsche oder mehrdeutige Eingaben zurück und schlägt die richtige Schreibweise vor.

## Informationen zur IT-Sicherheit

Zur Freigabe auf verwalteten Geräten:

- **Statische Seite.** Es gibt keine Verarbeitung auf einem Server; alle Berechnungen laufen lokal im Browser.
- **Keine Datenübertragung.** Keine Statistik, kein Tracking, keine Cookies, keine Werbung, keine externen Schriften, Skripte oder sonstigen Ressourcen. Nach dem Laden stellt der Rechner keine Netzwerkanfragen außer dem Laden seiner eigenen Dateien.
- **Nur lokale Speicherung.** Einstellungen und Eingaben liegen im lokalen Speicher des Browsers (localStorage) auf dem Gerät. Dateien werden nur geschrieben, wenn der Nutzer „Speichern“ anklickt, und nur gelesen, wenn er sie auswählt.
- **Offline-Zwischenspeicher.** In der Web-Version speichert ein Service Worker die Programmdateien dieser Seite (gleicher Ursprung) für die Offline-Nutzung. Er stellt keine anderen Anfragen.
- **Keine Berechtigungen.** Kein Zugriff auf Kamera, Mikrofon, Standort, Kontakte oder Mitteilungen.
- **Eingeschränkte Browser.** Sperrt eine Richtlinie den lokalen Speicher, Downloads, das Drucken oder Service Worker, rechnet der Rechner trotzdem; nur das Merken der Eingaben, das Speichern von Dateien, Berichte oder die Offline-Nutzung fallen weg. Ist der lokale Speicher gesperrt, zeigt der Rechner einen Hinweis.
- **Nachprüfbar.** Der Quelltext ist in der HTML-Datei lesbar; die Unversehrtheit lässt sich mit den SHA-256-Prüfsummen prüfen.
- **Voraussetzungen.** Ein aktueller Browser: Safari ab iOS/iPadOS 15.4, aktuelles Chrome, Edge, Firefox oder Samsung Internet.

## Dateien

- `rf-db-calculator_1.1.3.html`: der Rechner (Download für Computer).
- `index.html`: identische Kopie für die Web-Version.
- `manifest.webmanifest`, `sw.js`, `icon-*.png`, `apple-touch-icon.png`: Dateien der Web-App (Symbol auf dem Home-Bildschirm, Offline-Nutzung).
- `SHA256SUMS.txt`, `LICENSE`.

## Datei prüfen

SHA-256-Prüfsumme mit `SHA256SUMS.txt` vergleichen:

- Windows (PowerShell): `Get-FileHash .\rf-db-calculator_1.1.3.html -Algorithm SHA256`
- Linux: `sha256sum -c SHA256SUMS.txt`
- macOS: `shasum -a 256 -c SHA256SUMS.txt`

## Lizenz

Copyright © 2026 UnImAtrIXzEr0. Lizenziert unter [Creative Commons Namensnennung – Keine Bearbeitungen 4.0 International (CC BY-ND 4.0)](https://creativecommons.org/licenses/by-nd/4.0/deed.de), siehe [LICENSE](LICENSE). Maßgeblich ist der Lizenztext in der Datei LICENSE.

Der Rechner darf für jeden Zweck, auch kommerziell, verwendet und unverändert mit Namensnennung weitergegeben werden. Veränderte Fassungen dürfen nicht weitergegeben werden.

## Haftungsausschluss

Der Rechner wird ohne Gewähr bereitgestellt. Ergebnisse vor ihrer Verwendung prüfen. Die Freiraumwerte gelten für Sichtverbindung ohne Boden- und Hinderniseinfluss und ersetzen keine Versorgungsplanung.

## Versionen

- **1.1.3** (2026-11-02): Web-Version mit Symbol für den Home-Bildschirm und Offline-Nutzung, Hinweis bei gesperrtem lokalem Speicher.
- 1.1.2: erste öffentliche Version. Lizenzhinweis, Sprache der Oberfläche richtet sich nach dem Browser.
- 1.1.1: Einheitenzeichen streng nach SI mit Korrekturvorschlag, dBW/dBm-Umschaltung in der Sendebilanz, wählbarer Berichtsinhalt.
- 1.1.0: Rechenweg, Berichte, Speichern und Öffnen, Bezugsprüfung für dBi, dBd und dBc, Richtung, Polarisation und Fehlanpassung in der Sendebilanz.
- 1.0.0: erste Version.
