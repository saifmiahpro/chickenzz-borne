@echo off
REM ============================================
REM   INSTALLATION QZ TRAY v2.0.11 (sans signature)
REM   Doit etre lance en tant qu'administrateur
REM ============================================

echo.
echo ========================================
echo   INSTALLATION QZ TRAY v2.0.11
echo ========================================
echo.

REM Verifier les droits admin
net session >nul 2>&1
if %errorLevel% neq 0 (
    echo ERREUR: Ce script doit etre lance en tant qu'administrateur !
    echo Clic droit sur le fichier puis "Executer en tant qu'administrateur"
    pause
    exit /b 1
)

REM Fermer QZ Tray si en cours
echo Fermeture de QZ Tray...
taskkill /IM qz-tray.exe /F >nul 2>&1
timeout /t 2 /nobreak >nul

REM Desinstaller ancienne version si presente
echo Desinstallation ancienne version...
if exist "C:\Program Files\QZ Tray\uninstall.exe" (
    "C:\Program Files\QZ Tray\uninstall.exe" /S
    timeout /t 5 /nobreak >nul
)

REM Telecharger QZ Tray v2.0.11
echo.
echo Telechargement QZ Tray v2.0.11...
set DOWNLOAD_URL=https://github.com/qzind/tray/releases/download/v2.0.11/qz-tray-2.0.11.exe
set INSTALLER=%TEMP%\qz-tray-2.0.11.exe

powershell -Command "Invoke-WebRequest -Uri '%DOWNLOAD_URL%' -OutFile '%INSTALLER%'"

if not exist "%INSTALLER%" (
    echo ERREUR: Echec du telechargement !
    pause
    exit /b 1
)

REM Installer silencieusement
echo.
echo Installation QZ Tray v2.0.11...
"%INSTALLER%" /S

REM Attendre la fin de l'installation
timeout /t 10 /nobreak >nul

REM Verifier l'installation
if exist "C:\Program Files\QZ Tray\qz-tray.exe" (
    echo.
    echo ========================================
    echo   INSTALLATION REUSSIE !
    echo ========================================
    echo.
    echo QZ Tray v2.0.11 est installe.
    echo Relance maintenant Lancer_Borne_Serveur.bat
    echo.
) else (
    echo.
    echo ERREUR: L'installation a echoue.
    echo Essaie d'installer manuellement depuis:
    echo %DOWNLOAD_URL%
    echo.
)

REM Nettoyer
del "%INSTALLER%" >nul 2>&1

pause
