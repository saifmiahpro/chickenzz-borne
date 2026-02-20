@echo off
REM ============================================
REM   LANCEMENT BORNE CHICKENZZ
REM   Ce script lance Chrome en mode borne
REM   avec impression automatique (sans popup)
REM ============================================

REM Fermer Chrome s'il est deja ouvert
taskkill /IM chrome.exe /F >nul 2>&1
timeout /t 2 /nobreak >nul

REM Lancer Chrome en mode kiosk avec impression silencieuse
start "" "C:\Program Files\Google\Chrome\Application\chrome.exe" --kiosk --kiosk-printing --disable-pinch --overscroll-history-navigation=0 --noerrdialogs --disable-translate --no-first-run --fast --fast-start --disable-infobars --disable-features=TranslateUI --check-for-update-interval=31536000 "%~dp0index.html"
