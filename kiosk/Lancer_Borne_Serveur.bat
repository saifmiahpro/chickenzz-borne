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

REM Arreter QZ Tray d'abord
taskkill /IM qz-tray.exe /F >nul 2>&1
timeout /t 2 /nobreak >nul

REM Creer fichiers config dans TOUS les emplacements possibles
for %%D in ("%APPDATA%\QZ Tray" "%LOCALAPPDATA%\QZ Tray" "%USERPROFILE%\.qz" "C:\Program Files\QZ Tray") do (
    if not exist %%D mkdir %%D 2>nul
    echo localhost> %%D\allowed.txt 2>nul
    echo 127.0.0.1>> %%D\allowed.txt 2>nul
    echo *>> %%D\allowed.txt 2>nul
)

REM Lancer QZ Tray
echo Lancement QZ Tray...
start "" "C:\Program Files\QZ Tray\qz-tray.exe"
timeout /t 4 /nobreak >nul

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
