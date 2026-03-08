@echo off
REM ============================================
REM   LANCEMENT BORNE CHICKENZZ + QZ TRAY
REM ============================================

REM Fermer Chrome s'il est deja ouvert
taskkill /IM chrome.exe /F >nul 2>&1
taskkill /IM node.exe /F >nul 2>&1
timeout /t 1 /nobreak >nul

REM ============================================
REM   CONFIG QZ TRAY - BYPASS SECURITE
REM ============================================
echo Configuration QZ Tray...

REM Creer dossier config QZ Tray
if not exist "%APPDATA%\QZ Tray" mkdir "%APPDATA%\QZ Tray"

REM Fichier properties pour desactiver TOUTE la securite
(
echo wss.enabled=false
echo websocket.secure=false
echo security.certificate.validate=false
echo security.dialog.enabled=false
echo tray.notifications=false
) > "%APPDATA%\QZ Tray\qz-tray.properties"

REM Ajouter localhost dans la whitelist
(
echo {"sites":[{"host":"localhost","port":8080,"secure":false,"trust":true,"remember":true}]}
) > "%APPDATA%\QZ Tray\whitelist.json"

REM Redemarrer QZ Tray pour prendre en compte la config
taskkill /IM qz-tray.exe /F >nul 2>&1
timeout /t 1 /nobreak >nul
start "" "C:\Program Files\QZ Tray\qz-tray.exe"
timeout /t 3 /nobreak >nul

REM ============================================
REM   MISE A JOUR
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
