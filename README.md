# RF dB Calculator

**English** · [Deutsch](#rf-db-rechner-deutsch)

An offline RF level calculator in a single HTML file. It runs in any current browser on computers, tablets and smartphones: as a web version that can be installed like an app, or on a computer as a downloaded file. No account and, once loaded, no internet connection required. The user interface is available in English and German.

**Web version:** https://unimatrixzer0.github.io/RF-dB-Calculator/

## Features

- **Calculator** with units, e.g. `10 W + 50 dB`, `40 dBm − 30 dB`, `8 mW / 0.8 mW`, `6.457 kW + 9 dBd`. Antenna gains (dBi, dBd) and carrier-relative levels (dBc) are checked for consistent references. Tape with previous results.
- **Level plan**: any number of stages with gain or loss, forwards from the input power or backwards from a required output power.
- **Units**: W, dBm, dBW, dBk, voltage (RMS, peak, peak-to-peak, rectified mean), dBV, dBmV, dBµV, dBu and current at a selectable reference impedance.
- **Voltages**: correlated and uncorrelated addition.
- **dB and ratio**: power and voltage ratios.
- **VSWR**: reflection coefficient, return loss, mismatch loss, forward and reflected power.
- **Cable**: loss scaled to another frequency and length, power at the cable output or required power at the cable input, VSWR at both cable ends.
- **Link budget**: transmitter output power, losses and mismatch, antenna gain, ERP and EIRP, optionally towards a direction (pattern attenuation) and split by polarisation, free-space field strength and received power (ITU-R P.525). Backwards: the transmitter output power required for a given ERP, EIRP (total, horizontal or vertical component, main beam or entered direction) or free-space field strength, with a forward check. Levels in dBW or dBm.
- **Calculation steps** for every tool, **printable reports** (PDF via the browser's print dialog) with selectable content and parts, **save and open** of all inputs as a JSON file.

## Web version on any device

Open https://unimatrixzer0.github.io/RF-dB-Calculator/ in the browser. The calculator works directly in the browser tab. After the first visit with an internet connection it also works offline. Optionally it can be added to the home screen, dock or start menu like an app. The labels below may differ slightly depending on the system version. The same guide is available in the calculator under “Help” at the top right (on smartphones under ⚙).

### iPhone and iPad

1. Open the address in Safari. From iOS/iPadOS 16.4 this also works in Chrome, Edge or Firefox.
2. Tap “Share”, the square with the arrow pointing up: in the bar at the bottom on an iPhone, at the top right on an iPad. In Chrome and Edge the share button is in the address bar.
3. Scroll down the list and choose “Add to Home Screen”.
4. From iOS/iPadOS 26: keep “Open as Web App” switched on.
5. Tap “Add”. The “RF dB” icon appears on the home screen and opens the calculator without the browser bars.

### Android

- **Chrome:** open the address, tap the ⋮ menu at the top right, choose “Install app” or “Add to Home screen”, then confirm with “Install”.
- **Samsung Internet:** open the address, tap the ≡ menu at the bottom right, choose “Add page to” → “Home screen”.
- **Firefox:** open the address, tap the ⋮ menu, choose “Install” or “Add to Home screen”.

### Windows, macOS, Linux

- **Chrome:** click the install icon at the right of the address bar, or menu ⋮ → “Cast, save and share” → “Install page as app …”.
- **Edge:** menu … → “Apps” → “Install this site as an app”.
- **Safari (macOS 14 or later):** menu “File” → “Add to Dock”.
- **Firefox:** use the page in a normal tab or as a bookmark.

### Input on smartphones and tablets

- Tapping a value field opens the calculator's own keypad at the bottom edge. It stays in place while typing and scrolling; tapping an empty area or ✓ closes it.
- The unit column on the right of the keypad scrolls; a tap sets the unit. In the calculator it starts with “ans”, the last result.
- ± changes the sign, ▲ and ▼ move to the previous or next field. The decimal separator follows the language.
- On opening, the value is marked: the first digit replaces it, ⌫ deletes it. Tapping inside the field sets the cursor; holding ⌫ keeps deleting.
- Under “Settings” → “Input” you can switch to the device keyboard, e.g. for expressions in value fields. The iPhone keyboard has no µ: use the Greek keyboard (μ) or another prefix there, e.g. 500 nW instead of 0.5 µW.
- A connected keyboard always works.

### Update and remove

- **Update:** with an internet connection the installed app loads the latest version when it is opened. If the new version does not appear, close the app completely and open it again. Inputs are kept.
- **Remove on iPhone and iPad:** touch and hold the icon, choose “Remove App” or “Delete Bookmark” depending on the iOS version, and confirm.
- **Remove on Android:** touch and hold the icon → “Uninstall” or drag it to “Remove”.
- **Remove on a computer:** Chrome and Edge: in the app window menu “Uninstall”. Safari: remove the app from the Dock and delete it from the “Applications” folder in your home folder.

An installed web app keeps its own inputs, separate from the browser tab.

## Downloaded file on a computer

1. Download `rf-db-calculator_1.3.0.html` from the latest release or from this repository.
2. Verify the checksum (see below).
3. Open the file in a browser, e.g. with a double click. Settings and inputs are stored locally in this browser only; use “Save” to archive a calculation.

Smartphones and tablets usually do not run local HTML files; use the web version there.

Unit symbols are written according to SI and are case-sensitive: `mW` is milliwatt, `MW` is megawatt. The calculator rejects incorrect or ambiguous input and suggests the correct spelling.

## IT security information

For approval on managed devices:

- **Static page.** There is no server-side processing; all calculations run locally in the browser.
- **No data transmission.** No analytics, tracking, cookies or advertising, and no external fonts, scripts or other resources. After loading, the calculator makes no network requests except loading its own files.
- **Local storage only.** Settings and inputs are kept in the browser's local storage (localStorage) on the device. Files are only written when the user clicks “Save” and only read when the user selects them.
- **Offline cache.** In the web version a service worker caches the application files of this site (same origin) for offline use. It makes no other requests. The downloaded file does not use a service worker.
- **No permissions.** No access to camera, microphone, location, contacts or notifications.
- **No installation required.** Adding the web version to the home screen is optional and needs no app store, sideloading or administrator rights.
- **Restricted browsers.** If a policy blocks local storage, downloads, printing or service workers, the calculator still calculates; only remembering inputs, saving files, reports or offline use are unavailable. A notice is shown if local storage is blocked.
- **Verifiable.** The source code is readable in the HTML file; integrity can be checked with the SHA-256 checksums.
- **Requirements.** A current browser: Safari on iOS/iPadOS 15.4 or later, current Chrome, Edge, Firefox or Samsung Internet.

## Files

- `rf-db-calculator_1.3.0.html`: the calculator (download for computers).
- `index.html`: identical copy for the web version.
- `manifest.webmanifest`, `sw.js`, `icon-*.png`, `apple-touch-icon.png`: web app files (home screen icon, offline use).
- `SHA256SUMS.txt`, `LICENSE`.

## Verify the file

Compare the SHA-256 checksum with `SHA256SUMS.txt`:

- Windows (PowerShell): `Get-FileHash .\rf-db-calculator_1.3.0.html -Algorithm SHA256`
- Linux: `sha256sum -c --ignore-missing SHA256SUMS.txt`
- macOS: `shasum -a 256 -c --ignore-missing SHA256SUMS.txt`

## Licence

Copyright © 2026 UnImAtrIXzEr0. Licensed under the [Creative Commons Attribution-NoDerivatives 4.0 International License (CC BY-ND 4.0)](https://creativecommons.org/licenses/by-nd/4.0/), see [LICENSE](LICENSE).

You may use the calculator for any purpose, including commercial use, and redistribute it in unmodified form with attribution. Modified versions may not be distributed.

## Disclaimer

The calculator is provided “as is”, without warranty of any kind. Check results before relying on them. Free-space values apply to line of sight without ground and obstacle effects and do not replace coverage planning.

## Versions

- **1.3.0** (2026-11-03): own keypad on smartphones and tablets, docked at the bottom edge and tailored to each field (number, value with unit, calculator), with scrolling unit column, ± key and field navigation; on opening, the value is marked and the first digit replaces it; it stays in place while typing and scrolling; muted light mode with contrast according to WCAG 2.2 AA, input fields with clear frames, results set off as tinted areas; compact top row on smartphones; device keyboard selectable in the settings, then with minus sign and without automatic correction; no zoom when tapping a field; invalid entries explained below the field and above the keypad, with the allowed range; level plan fits 375 px wide screens; page numbers in PDF reports in the app font; very large and very small values beyond the SI prefixes shown as a power of ten with the base unit.
- **1.2.0** (2026-11-02): backward calculation in the level plan, cable and link budget (required transmitter output power for a given ERP, EIRP or field strength, with forward check); reports list only the inputs used and offer selectable parts; clearer layout on smartphones (compact header, tool list, menu ⋯, collapsible keypad, result bar at the bottom edge, touch targets of at least 44 px); help and installation guide in the app.
- 1.1.3: web version with home screen icon and offline use, notice when local storage is blocked.
- 1.1.2: first public release. Licence notice, interface language follows the browser.
- 1.1.1: strict SI unit symbols with suggested corrections, dBW/dBm switch in the link budget, selectable report content.
- 1.1.0: calculation steps, reports, save and open, reference checks for dBi, dBd and dBc, direction, polarisation and mismatch in the link budget.
- 1.0.0: first version.

---

# RF-dB-Rechner (Deutsch)

[English](#rf-db-calculator) · **Deutsch**

Ein Offline-Rechner für Hochfrequenzpegel in einer einzigen HTML-Datei. Er läuft in jedem aktuellen Browser auf Computer, Tablet und Smartphone: als Web-Version, die sich wie eine App installieren lässt, oder am Computer als heruntergeladene Datei. Ohne Konto und nach dem Laden ohne Internetverbindung. Die Oberfläche gibt es auf Englisch und Deutsch.

**Web-Version:** https://unimatrixzer0.github.io/RF-dB-Calculator/

## Funktionen

- **Rechner** mit Einheiten, z. B. `10 W + 50 dB`, `40 dBm − 30 dB`, `8 mW / 0,8 mW`, `6,457 kW + 9 dBd`. Antennengewinne (dBi, dBd) und trägerbezogene Pegel (dBc) werden auf einheitliche Bezüge geprüft. Rechenstreifen mit früheren Ergebnissen.
- **Pegelplan**: beliebig viele Stufen mit Verstärkung oder Dämpfung, vorwärts von der Eingangsleistung oder rückwärts von einer geforderten Ausgangsleistung.
- **Einheiten**: W, dBm, dBW, dBk, Spannung (Effektivwert, Spitzenwert, Spitze-Spitze-Wert, Gleichrichtwert), dBV, dBmV, dBµV, dBu und Strom an einer wählbaren Bezugsimpedanz.
- **Spannungen**: korrelierte und unkorrelierte Addition.
- **dB und Verhältnis**: Leistungs- und Spannungsverhältnisse.
- **SWR**: Reflexionsfaktor, Rückflussdämpfung, Fehlanpassungsverlust, Vor- und Rücklaufleistung.
- **Kabel**: Dämpfung auf andere Frequenz und Länge umrechnen, Leistung am Kabelausgang oder erforderliche Leistung am Kabeleingang, SWR an beiden Kabelenden.
- **Sendebilanz**: Senderausgangsleistung, Dämpfungen und Fehlanpassung, Antennengewinn, ERP und EIRP, wahlweise in eine Richtung (Diagrammdämpfung) und nach Polarisation aufgeteilt, Feldstärke und Empfangsleistung im Freiraum (ITU-R P.525). Rückwärts: die erforderliche Senderausgangsleistung für eine vorgegebene ERP, EIRP (gesamt, horizontaler oder vertikaler Anteil, Hauptstrahlrichtung oder eingegebene Richtung) oder Feldstärke im Freiraum, mit Probe. Pegel in dBW oder dBm.
- **Rechenweg** in jedem Werkzeug, **druckbare Berichte** (PDF über den Druckdialog des Browsers) mit wählbarem Inhalt und wählbaren Teilen, **Speichern und Öffnen** aller Eingaben als JSON-Datei.

## Web-Version auf jedem Gerät

https://unimatrixzer0.github.io/RF-dB-Calculator/ im Browser öffnen. Der Rechner funktioniert direkt im Browser-Tab. Nach dem ersten Aufruf mit Internetverbindung funktioniert er auch offline. Wahlweise lässt er sich wie eine App auf dem Home-Bildschirm, im Dock oder im Startmenü ablegen. Die Bezeichnungen unten können je nach Systemversion leicht abweichen. Dieselbe Anleitung steht im Rechner unter „Hilfe“ oben rechts (auf dem Smartphone unter ⚙).

### iPhone und iPad

1. Die Adresse in Safari öffnen. Ab iOS/iPadOS 16.4 geht es auch in Chrome, Edge oder Firefox.
2. Auf „Teilen“ tippen, das Quadrat mit dem Pfeil nach oben: beim iPhone in der unteren Leiste, beim iPad oben rechts. In Chrome und Edge liegt die Teilen-Taste in der Adressleiste.
3. In der Liste nach unten blättern und „Zum Home-Bildschirm“ wählen.
4. Ab iOS/iPadOS 26: „Als Web-App öffnen“ eingeschaltet lassen.
5. Auf „Hinzufügen“ tippen. Das Symbol „RF dB“ erscheint auf dem Home-Bildschirm und öffnet den Rechner ohne Browserleisten.

### Android

- **Chrome:** Adresse öffnen, oben rechts auf das Menü ⋮ tippen, „App installieren“ oder „Zum Startbildschirm hinzufügen“ wählen und mit „Installieren“ bestätigen.
- **Samsung Internet:** Adresse öffnen, unten rechts auf das Menü ≡ tippen, „Seite hinzufügen zu“ → „Startbildschirm“ wählen.
- **Firefox:** Adresse öffnen, auf das Menü ⋮ tippen, „Installieren“ oder „Zum Startbildschirm hinzufügen“ wählen.

### Windows, macOS, Linux

- **Chrome:** in der Adressleiste rechts auf das Installationssymbol klicken, oder Menü ⋮ → „Streamen, speichern und teilen“ → „Seite als App installieren …“.
- **Edge:** Menü … → „Apps“ → „Diese Website als App installieren“.
- **Safari (ab macOS 14):** Menü „Ablage“ → „Zum Dock hinzufügen“.
- **Firefox:** die Seite in einem normalen Tab oder als Lesezeichen verwenden.

### Eingabe auf Smartphones und Tablets

- Ein Wertfeld antippen öffnet das Tastenfeld des Rechners am unteren Rand. Es bleibt beim Tippen und Scrollen stehen; Antippen einer freien Fläche oder ✓ schließt es.
- Rechts im Tastenfeld lässt sich die Einheitenspalte rollen; ein Tipp setzt die Einheit. Im Rechner steht dort oben „ans“, das letzte Ergebnis.
- ± kehrt das Vorzeichen um, ▲ und ▼ wechseln zum vorigen bzw. nächsten Feld. Das Dezimalzeichen folgt der Sprache.
- Beim Öffnen ist der Wert markiert: Die erste Ziffer ersetzt ihn, ⌫ löscht ihn. Antippen im Feld setzt den Cursor; ⌫ gedrückt halten löscht fortlaufend.
- Unter „Einstellungen“ → „Eingabe“ lässt sich auf die Gerätetastatur umschalten, z. B. für Rechenausdrücke in Wertfeldern. Die iPhone-Tastatur hat kein µ: dort die griechische Tastatur (μ) oder einen anderen Vorsatz verwenden, z. B. 500 nW statt 0,5 µW.
- Eine angeschlossene Tastatur funktioniert immer.

### Aktualisieren und entfernen

- **Aktualisieren:** Mit Internetverbindung lädt die installierte App beim Öffnen die neueste Version. Erscheint sie nicht, die App einmal ganz schließen und neu öffnen. Die Eingaben bleiben erhalten.
- **Entfernen auf iPhone und iPad:** Symbol lange gedrückt halten, je nach iOS-Version „App entfernen“ bzw. „Lesezeichen löschen“ wählen und bestätigen.
- **Entfernen unter Android:** Symbol lange gedrückt halten → „Deinstallieren“ oder auf „Entfernen“ ziehen.
- **Entfernen am Computer:** Chrome und Edge: im Menü des App-Fensters „Deinstallieren“. Safari: die App aus dem Dock nehmen und im Ordner „Programme“ des Benutzerordners löschen.

Eine installierte Web-App führt ihre Eingaben getrennt vom Browser-Tab.

## Heruntergeladene Datei am Computer

1. `rf-db-calculator_1.3.0.html` aus dem aktuellen Release oder aus diesem Repository herunterladen.
2. Prüfsumme kontrollieren (siehe unten).
3. Datei im Browser öffnen, z. B. per Doppelklick. Einstellungen und Eingaben bleiben nur in diesem Browser gespeichert; zur Ablage einer Rechnung „Speichern“ verwenden.

Smartphones und Tablets führen lokale HTML-Dateien meist nicht aus; dort die Web-Version verwenden.

Einheitenzeichen werden nach SI geschrieben, Groß- und Kleinschreibung ist maßgeblich: `mW` ist Milliwatt, `MW` Megawatt. Der Rechner weist falsche oder mehrdeutige Eingaben zurück und schlägt die richtige Schreibweise vor.

## Informationen zur IT-Sicherheit

Zur Freigabe auf verwalteten Geräten:

- **Statische Seite.** Es gibt keine Verarbeitung auf einem Server; alle Berechnungen laufen lokal im Browser.
- **Keine Datenübertragung.** Keine Statistik, kein Tracking, keine Cookies, keine Werbung, keine externen Schriften, Skripte oder sonstigen Ressourcen. Nach dem Laden stellt der Rechner keine Netzwerkanfragen außer dem Laden seiner eigenen Dateien.
- **Nur lokale Speicherung.** Einstellungen und Eingaben liegen im lokalen Speicher des Browsers (localStorage) auf dem Gerät. Dateien werden nur geschrieben, wenn der Nutzer „Speichern“ anklickt, und nur gelesen, wenn er sie auswählt.
- **Offline-Zwischenspeicher.** In der Web-Version speichert ein Service Worker die Programmdateien dieser Seite (gleicher Ursprung) für die Offline-Nutzung. Er stellt keine anderen Anfragen. Die heruntergeladene Datei verwendet keinen Service Worker.
- **Keine Berechtigungen.** Kein Zugriff auf Kamera, Mikrofon, Standort, Kontakte oder Mitteilungen.
- **Keine Installation nötig.** Das Ablegen der Web-Version auf dem Home-Bildschirm ist freiwillig und braucht weder App-Store noch Sideloading noch Administratorrechte.
- **Eingeschränkte Browser.** Sperrt eine Richtlinie den lokalen Speicher, Downloads, das Drucken oder Service Worker, rechnet der Rechner trotzdem; nur das Merken der Eingaben, das Speichern von Dateien, Berichte oder die Offline-Nutzung fallen weg. Ist der lokale Speicher gesperrt, zeigt der Rechner einen Hinweis.
- **Nachprüfbar.** Der Quelltext ist in der HTML-Datei lesbar; die Unversehrtheit lässt sich mit den SHA-256-Prüfsummen prüfen.
- **Voraussetzungen.** Ein aktueller Browser: Safari ab iOS/iPadOS 15.4, aktuelles Chrome, Edge, Firefox oder Samsung Internet.

## Dateien

- `rf-db-calculator_1.3.0.html`: der Rechner (Download für Computer).
- `index.html`: identische Kopie für die Web-Version.
- `manifest.webmanifest`, `sw.js`, `icon-*.png`, `apple-touch-icon.png`: Dateien der Web-App (Symbol auf dem Home-Bildschirm, Offline-Nutzung).
- `SHA256SUMS.txt`, `LICENSE`.

## Datei prüfen

SHA-256-Prüfsumme mit `SHA256SUMS.txt` vergleichen:

- Windows (PowerShell): `Get-FileHash .\rf-db-calculator_1.3.0.html -Algorithm SHA256`
- Linux: `sha256sum -c --ignore-missing SHA256SUMS.txt`
- macOS: `shasum -a 256 -c --ignore-missing SHA256SUMS.txt`

## Lizenz

Copyright © 2026 UnImAtrIXzEr0. Lizenziert unter [Creative Commons Namensnennung – Keine Bearbeitungen 4.0 International (CC BY-ND 4.0)](https://creativecommons.org/licenses/by-nd/4.0/deed.de), siehe [LICENSE](LICENSE). Maßgeblich ist der Lizenztext in der Datei LICENSE.

Der Rechner darf für jeden Zweck, auch kommerziell, verwendet und unverändert mit Namensnennung weitergegeben werden. Veränderte Fassungen dürfen nicht weitergegeben werden.

## Haftungsausschluss

Der Rechner wird ohne Gewähr bereitgestellt. Ergebnisse vor ihrer Verwendung prüfen. Die Freiraumwerte gelten für Sichtverbindung ohne Boden- und Hinderniseinfluss und ersetzen keine Versorgungsplanung.

## Versionen

- **1.3.0** (2026-11-03): eigenes Tastenfeld auf Smartphones und Tablets, am unteren Rand angedockt und je Feld zugeschnitten (Zahl, Wert mit Einheit, Rechner), mit rollender Einheitenspalte, ±-Taste und Feldwechsel; beim Öffnen ist der Wert markiert und die erste Ziffer ersetzt ihn; es bleibt beim Tippen und Scrollen stehen; gedämpfter Hellmodus mit Kontrasten nach WCAG 2.2 AA, Eingabefelder mit deutlichem Rahmen, Ergebnisse als getönte Flächen abgesetzt; kompakte Kopfzeile auf Smartphones; Gerätetastatur in den Einstellungen wählbar, dann mit Minuszeichen und ohne automatische Korrektur; kein Zoom beim Antippen eines Felds; Fehleingaben unter dem Feld und über dem Tastenfeld erklärt, mit dem zulässigen Bereich; Pegelplan passt auf 375 px breite Bildschirme; Seitenzahlen in PDF-Berichten in der Schrift der App; sehr große und sehr kleine Werte außerhalb der SI-Vorsätze als Zehnerpotenz mit Grundeinheit.
- **1.2.0** (2026-11-02): Rückwärtsrechnung in Pegelplan, Kabel und Sendebilanz (erforderliche Senderausgangsleistung für eine vorgegebene ERP, EIRP oder Feldstärke, mit Probe); Berichte führen nur die verwendeten Eingaben auf und bieten wählbare Teile; übersichtlichere Bedienung auf dem Smartphone (kompakte Kopfzeile, Werkzeugliste, Menü ⋯, ausblendbares Tastenfeld, Ergebnisleiste am unteren Rand, Bedienflächen von mindestens 44 px); Hilfe und Installationsanleitung in der App.
- 1.1.3: Web-Version mit Symbol für den Home-Bildschirm und Offline-Nutzung, Hinweis bei gesperrtem lokalem Speicher.
- 1.1.2: erste öffentliche Version. Lizenzhinweis, Sprache der Oberfläche richtet sich nach dem Browser.
- 1.1.1: Einheitenzeichen streng nach SI mit Korrekturvorschlag, dBW/dBm-Umschaltung in der Sendebilanz, wählbarer Berichtsinhalt.
- 1.1.0: Rechenweg, Berichte, Speichern und Öffnen, Bezugsprüfung für dBi, dBd und dBc, Richtung, Polarisation und Fehlanpassung in der Sendebilanz.
- 1.0.0: erste Version.
