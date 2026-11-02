# RF dB Calculator

**English** · [Deutsch](#rf-db-rechner-deutsch)

An offline RF level calculator in a single HTML file. Download it, open it in a current browser and use it without installation and without an internet connection. The user interface is available in English and German.

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

## Usage

1. Download `rf-db-calculator_1.1.2.html` from the latest release or from this repository.
2. Verify the checksum (see below).
3. Open the file in a browser. Settings and inputs are stored locally in this browser only; use “Save” to archive a calculation.

Unit symbols are written according to SI and are case-sensitive: `mW` is milliwatt, `MW` is megawatt. The calculator rejects incorrect or ambiguous input and suggests the correct spelling.

## Verify the file

Compare the SHA-256 checksum with `SHA256SUMS.txt`:

- Windows (PowerShell): `Get-FileHash .\rf-db-calculator_1.1.2.html -Algorithm SHA256`
- Linux: `sha256sum -c SHA256SUMS.txt`
- macOS: `shasum -a 256 -c SHA256SUMS.txt`

## Licence

Copyright © 2026 UnImAtrIXzEr0. Licensed under the [Creative Commons Attribution-NoDerivatives 4.0 International License (CC BY-ND 4.0)](https://creativecommons.org/licenses/by-nd/4.0/), see [LICENSE](LICENSE).

You may use the file for any purpose, including commercial use, and redistribute it in unmodified form with attribution. Modified versions may not be distributed.

## Disclaimer

The calculator is provided “as is”, without warranty of any kind. Check results before relying on them. Free-space values apply to line of sight without ground and obstacle effects and do not replace coverage planning.

## Versions

- **1.1.2** (2026-11-02): first public release. Licence notice, interface language follows the browser.
- 1.1.1: strict SI unit symbols with suggested corrections, dBW/dBm switch in the link budget, selectable report content.
- 1.1.0: calculation steps, reports, save and open, reference checks for dBi, dBd and dBc, direction, polarisation and mismatch in the link budget.
- 1.0.0: first version.

---

# RF-dB-Rechner (Deutsch)

[English](#rf-db-calculator) · **Deutsch**

Ein Offline-Rechner für HF-Pegel in einer einzigen HTML-Datei. Herunterladen, in einem aktuellen Browser öffnen und ohne Installation und ohne Internetverbindung verwenden. Die Oberfläche gibt es auf Englisch und Deutsch.

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

## Benutzung

1. `rf-db-calculator_1.1.2.html` aus dem aktuellen Release oder aus diesem Repository herunterladen.
2. Prüfsumme kontrollieren (siehe unten).
3. Datei im Browser öffnen. Einstellungen und Eingaben bleiben nur in diesem Browser gespeichert; zur Ablage einer Rechnung „Speichern“ verwenden.

Einheitenzeichen werden nach SI geschrieben, Groß- und Kleinschreibung ist maßgeblich: `mW` ist Milliwatt, `MW` Megawatt. Der Rechner weist falsche oder mehrdeutige Eingaben zurück und schlägt die richtige Schreibweise vor.

## Datei prüfen

SHA-256-Prüfsumme mit `SHA256SUMS.txt` vergleichen:

- Windows (PowerShell): `Get-FileHash .\rf-db-calculator_1.1.2.html -Algorithm SHA256`
- Linux: `sha256sum -c SHA256SUMS.txt`
- macOS: `shasum -a 256 -c SHA256SUMS.txt`

## Lizenz

Copyright © 2026 UnImAtrIXzEr0. Lizenziert unter [Creative Commons Namensnennung – Keine Bearbeitungen 4.0 International (CC BY-ND 4.0)](https://creativecommons.org/licenses/by-nd/4.0/deed.de), siehe [LICENSE](LICENSE). Maßgeblich ist der Lizenztext in der Datei LICENSE.

Die Datei darf für jeden Zweck, auch kommerziell, verwendet und unverändert mit Namensnennung weitergegeben werden. Veränderte Fassungen dürfen nicht weitergegeben werden.

## Haftungsausschluss

Der Rechner wird ohne Gewähr bereitgestellt. Ergebnisse vor ihrer Verwendung prüfen. Die Freiraumwerte gelten für Sichtverbindung ohne Boden- und Hinderniseinfluss und ersetzen keine Versorgungsplanung.

## Versionen

- **1.1.2** (2026-11-02): erste öffentliche Version. Lizenzhinweis, Sprache der Oberfläche richtet sich nach dem Browser.
- 1.1.1: Einheitenzeichen streng nach SI mit Korrekturvorschlag, dBW/dBm-Umschaltung in der Sendebilanz, wählbarer Berichtsinhalt.
- 1.1.0: Rechenweg, Berichte, Speichern und Öffnen, Bezugsprüfung für dBi, dBd und dBc, Richtung, Polarisation und Fehlanpassung in der Sendebilanz.
- 1.0.0: erste Version.
