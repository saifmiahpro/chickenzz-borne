@echo off
REM ============================================
REM   LANCEMENT BORNE CHICKENZZ (avec serveur local)
REM   QZ Tray - impression sur 2 imprimantes
REM ============================================

REM Fermer Chrome s'il est deja ouvert
taskkill /IM chrome.exe /F >nul 2>&1
taskkill /IM node.exe /F >nul 2>&1
timeout /t 1 /nobreak >nul

REM ============================================
REM   CONFIGURATION AUTO QZ TRAY
REM ============================================
echo Configuration QZ Tray...

REM Creer le dossier QZ Tray si necessaire
if not exist "%APPDATA%\QZ Tray" mkdir "%APPDATA%\QZ Tray"

REM Autoriser localhost automatiquement (bypass certificat)
echo localhost > "%APPDATA%\QZ Tray\allowed.txt"
echo 127.0.0.1 >> "%APPDATA%\QZ Tray\allowed.txt"
echo * >> "%APPDATA%\QZ Tray\allowed.txt"

REM Creer fichier properties pour desactiver les popups
(
echo log.level=OFF
echo security.dialogs.enabled=false
echo tray.notifications.enabled=false
) > "%APPDATA%\QZ Tray\qz-tray.properties"

REM Lancer QZ Tray si pas deja lance
tasklist /FI "IMAGENAME eq qz-tray.exe" 2>NUL | find /I /N "qz-tray.exe">NUL
if "%ERRORLEVEL%"=="1" (
    echo Lancement QZ Tray...
    start "" "C:\Program Files\QZ Tray\qz-tray.exe"
    timeout /t 3 /nobreak >nul
)

REM ============================================
REM   MISE A JOUR ET LANCEMENT
REM ============================================
REM Mise a jour depuis GitHub
echo Mise a jour en cours...
cd /d "%~dp0.."
git pull origin main

REM Attendre que le pull soit termine
timeout /t 2 /nobreak >nul

REM Lancer le serveur web local DEPUIS LA RACINE DU PROJET (pour acceder aux assets)
echo Lancement du serveur local...
cd /d "%~dp0.."

REM Essayer avec Python d'abord
where python >nul 2>&1
if %ERRORLEVEL% EQU 0 (
    start /B python -m http.server 8080
) else (
    REM Sinon essayer avec npx serve
    where npx >nul 2>&1
    if %ERRORLEVEL% EQU 0 (
        start /B npx serve -l 8080
    ) else (
        echo ERREUR: Python ou Node.js requis pour le serveur local
        pause
        exit /b 1
    )
)

REM Attendre que le serveur demarre
timeout /t 2 /nobreak >nul

REM Lancer Chrome en mode kiosk sur localhost - KIOSK dans sous-dossier kiosk/
echo Lancement de la borne...
start "" "C:\Program Files\Google\Chrome\Application\chrome.exe" --kiosk --kiosk-printing --disable-pinch --overscroll-history-navigation=0 --noerrdialogs --disable-translate --no-first-run --fast --fast-start --disable-infobars --disable-features=TranslateUI --check-for-update-interval=31536000 "http://localhost:8080/kiosk/index.html"
