@echo off

REM Create docs folder and subfolders if they don't exist
if not exist docs mkdir docs
if not exist docs\css mkdir docs\css
if not exist docs\js mkdir docs\js

REM Compile TypeScript to docs/js
tsc src\ts\script.ts --outDir docs\js --target ES6

REM Copy all HTML files from src to docs
for %%f in (src\*.html) do copy "%%f" docs\

REM Copy all CSS files from src/css to docs/css
xcopy src\css\* docs\css\ /E /Y /I

echo Build complete!
pause
